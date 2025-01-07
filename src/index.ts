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

    if (!config.globals.find((global) => global.slug === 'meta-defaults')) {
      config.globals.push({
        slug: 'meta-defaults',
        admin: {
          group: 'Meta',
        },
        fields: createMetaFields({
          metaImagesCollection: pluginOptions.metaImagesCollection,
          required: true,
        }),
        hooks: {
          afterChange: [
            () => {
              revalidateTag('meta-defaults')
            },
          ],
        },
      })
    }

    if (pluginOptions.collections) {
      for (const collectionSlug in pluginOptions.collections) {
        const collection = config.collections.find(
          (collection) => collection.slug === collectionSlug,
        )

        if (collection) {
          // If collection already has tabs, add new Meta tab

          if (collection.fields.some((field) => field.type === 'tabs')) {
            const tabsField = collection.fields.find((field) => field.type === 'tabs')
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
              tabsField.tabs.push(
                createMetaTab({ metaImagesCollection: pluginOptions.metaImagesCollection }),
              )

              // Move sidebar fields outside tabs
              collection.fields = [...sidebarFields, ...collection.fields]
            }
          } else {
            // Convert existing fields to Content tab and add Meta tab
            const existingFields = [...collection.fields]

            // Separate sidebar fields from content fields
            const sidebarFields = existingFields.filter(
              (field) => field.admin?.position === 'sidebar',
            )
            const contentFields = existingFields.filter(
              (field) => field.admin?.position !== 'sidebar',
            )

            collection.fields = [
              ...sidebarFields,
              {
                type: 'tabs',
                tabs: [
                  {
                    fields: contentFields,
                    label: 'Content',
                  },
                  createMetaTab({ metaImagesCollection: pluginOptions.metaImagesCollection }),
                ],
              },
            ]
          }
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
