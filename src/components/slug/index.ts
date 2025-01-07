import type { Field } from 'payload'

import { formatSlugHook } from './formatSlug.js'

type SlugFieldOptions = {
  fields?: string[]
  format?: string
}

/**
 * @param fields - Array of field names to use for slug generation
 * @param format - Customize slug format using literal strings like '{title}-page'
 */

export const slugField = ({
  fields = ['title'],
  format = '{title}',
}: SlugFieldOptions = {}): Field => ({
  name: 'slug',
  type: 'text',
  admin: {
    components: {
      Field: {
        clientProps: {
          fields,
          format,
        },
        path: 'mono-meta/rsc#SlugComponent',
      },
    },
  },
  hooks: {
    beforeChange: [formatSlugHook()],
  },
  required: true,
  unique: true,
})
