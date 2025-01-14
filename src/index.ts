import type { CollectionSlug, Config, Field, GlobalSlug } from 'payload'

import { revalidateTag } from 'next/cache.js'

import { createMetaFields, createMetaTab } from './fields/Meta.js'

export type MonoMetaConfig = {
  collections?: Partial<Record<CollectionSlug, true>>
  disabled?: boolean
  globals?: Partial<Record<GlobalSlug, true>>
  metaImagesCollection: CollectionSlug
}

export const monoMeta =
  (pluginOptions: MonoMetaConfig) =>
  (config: Config): Config => {
    if (!config.globals) {
      config.globals = []
    }

    if (!config.collections) {
      config.collections = []
    }

    if (!config.globals.find((global) => global.slug === 'meta-default')) {
      config.globals.push({
        slug: 'meta-default',
        admin: {
          group: 'Meta',
        },
        fields: [
          {
            name: 'siteName',
            type: 'text',
            required: true,
          },
          ...createMetaFields({
            metaImagesCollection: pluginOptions.metaImagesCollection,
            required: true,
          }),
        ],
        hooks: {
          afterChange: [
            () => {
              revalidateTag('meta-default')
            },
          ],
        },
      })
    }

    // Helper function to handle tabs and sidebar fields
    const handleTabsAndSidebarFields = (fields: Field[], metaImagesCollection: CollectionSlug) => {
      // If already has tabs
      if (fields.some((field) => field.type === 'tabs')) {
        const tabsField = fields.find((field) => field.type === 'tabs')
        if (tabsField && 'tabs' in tabsField) {
          // Extract sidebar fields from existing tabs
          const sidebarFields: Field[] = []
          tabsField.tabs = tabsField.tabs.map((tab) => {
            const tabSidebarFields = tab.fields.filter(
              (field) => field.admin?.position === 'sidebar',
            )
            sidebarFields.push(...tabSidebarFields)

            return {
              ...tab,
              fields: tab.fields.filter((field) => field.admin?.position !== 'sidebar'),
            }
          })

          // Add Meta tab
          tabsField.tabs.push(createMetaTab({ metaImagesCollection }))

          // Return updated fields with sidebar fields moved outside
          return [...sidebarFields, ...fields]
        }
      }

      // Convert to tabs if no tabs exist
      const existingFields = [...fields]
      const sidebarFields = existingFields.filter((field) => field.admin?.position === 'sidebar')
      const contentFields = existingFields.filter((field) => field.admin?.position !== 'sidebar')

      return [
        ...sidebarFields,
        {
          type: 'tabs',
          tabs: [
            {
              fields: contentFields,
              label: 'Content',
            },
            createMetaTab({ metaImagesCollection }),
          ],
        },
      ]
    }

    // Handle collections
    if (pluginOptions.collections) {
      for (const collectionSlug in pluginOptions.collections) {
        const collection = config.collections.find(
          (collection) => collection.slug === collectionSlug,
        )

        if (collection) {
          collection.fields = handleTabsAndSidebarFields(
            collection.fields,
            pluginOptions.metaImagesCollection,
          ) as Field[]
        }
      }
    }

    // Handle globals
    if (pluginOptions.globals) {
      for (const globalSlug in pluginOptions.globals) {
        const global = config.globals.find((global) => global.slug === globalSlug)

        if (global) {
          global.fields = handleTabsAndSidebarFields(
            global.fields,
            pluginOptions.metaImagesCollection,
          ) as Field[]
        }
      }
    }

    /**
     * If the plugin is disabled, we still want to keep added collections/fields so the database schema is consistent which is important for migrations.
     * If your plugin heavily modifies the database schema, you may want to remove this property.
     */
    if (pluginOptions.disabled) {
      return config
    }

    if (!config.endpoints) {
      config.endpoints = []
    }

    if (!config.admin) {
      config.admin = {}
    }

    if (!config.admin.components) {
      config.admin.components = {}
    }

    if (!config.admin.components.beforeDashboard) {
      config.admin.components.beforeDashboard = []
    }

    // config.admin.components.beforeDashboard.push(`mono-meta/client#BeforeDashboardClient`)
    // config.admin.components.beforeDashboard.push(`mono-meta/rsc#BeforeDashboardServer`)
    // config.admin.components.views?.dashboard?.

    return config
  }

export { slugField } from './components/slug/index.js'
