'use client'

import type { TextFieldClientProps } from 'payload'

import {
  Button,
  FieldLabel,
  TextInput,
  useDocumentInfo,
  useField,
  useFormFields,
} from '@payloadcms/ui'
import React, { useCallback, useEffect } from 'react'

import { formatSlug } from './formatSlug.js'
import styles from './slug-component.module.css'

type SlugComponentProps = {
  fields: string[]
  format: string
  path: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({ field, fields, format, path }) => {
  const { label, required } = field
  const { setValue, value } = useField<string>({ path })
  const { id: pageExists } = useDocumentInfo()

  const formFields = useFormFields(([allFields]) => {
    return fields.reduce(
      (acc, fieldName) => {
        acc[fieldName] = allFields[fieldName]?.value as string
        return acc
      },
      {} as Record<string, string>,
    )
  })

  const generateSlug = useCallback(() => {
    let fieldsEmpty = true
    const formattedSlug = format.replace(/\{(\w+)\}/g, (match, fieldName) => {
      if (formFields[fieldName]) {
        fieldsEmpty = false
      }
      return formFields[fieldName] ? formatSlug(formFields[fieldName]) : ''
    })
    if (formattedSlug !== value && !fieldsEmpty) {
      setValue(formattedSlug)
    }
  }, [formFields, format, setValue, value])

  useEffect(() => {
    if (!pageExists) {
      generateSlug()
    }
  }, [pageExists, formFields, generateSlug])

  return (
    <div className={styles.fieldType}>
      <div className={styles.slugFieldHeader}>
        <FieldLabel htmlFor={`field-${path}`} label={label} />
        {typeof pageExists === 'string' && (
          <Button buttonStyle="none" className={styles.generateButton} onClick={generateSlug}>
            Generate ({format.replace(/[{}]/g, '')})
          </Button>
        )}
      </div>
      <TextInput
        label={''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        path={path}
        readOnly={!pageExists}
        required={required}
        value={value || ''}
      />
    </div>
  )
}
