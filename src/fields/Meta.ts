import type { CollectionSlug, Field, Tab } from 'payload'

// import MetaPreviewWrapper from '@/payload/components/MetaPreviewWrapper';

type CreateMetaFieldsOptions = {
  metaImagesCollection: CollectionSlug
  required?: boolean
}

export const createMetaFields = ({
  metaImagesCollection,
  required = false,
}: CreateMetaFieldsOptions): Field[] => {
  const fields: Field[] = [
    {
      name: 'title',
      type: 'text',
      required,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: metaImagesCollection,
      required,
    },
  ]

  return fields
}

export const createMetaTab = (options: CreateMetaFieldsOptions): Tab => ({
  fields: [
    {
      name: 'pageMeta',
      type: 'group',
      fields: [
        {
          name: 'showCustomMeta',
          type: 'checkbox',
          admin: {
            description: `You can override the default meta information for this page. If you don't, the default meta information will be used.`,
          },
          defaultValue: false,
          required: true,
        },
        {
          name: 'customMeta',
          type: 'group',
          admin: {
            condition: (data) => data?.pageMeta?.showCustomMeta,
            hideGutter: true,
          },
          fields: createMetaFields(options),
          label: 'Custom meta information',
        },
      ],
      label: false,
    },
    // previewField,
  ],
  label: 'Meta',
})
