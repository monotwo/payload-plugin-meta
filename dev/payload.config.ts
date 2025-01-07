import type { CollectionSlug } from 'payload'

import { monoMeta, slugField } from '@monotwo/payload-plugin-meta'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { devUser } from './helpers/credentials.js'
import { testEmailAdapter } from './helpers/testEmailAdapter.js'
import { seed } from './seed.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (!process.env.ROOT_DIR) {
  process.env.ROOT_DIR = dirname
}

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
  admin: {
    autoLogin: devUser,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'posts',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'sidebarText2',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
    {
      slug: 'meta-images',
      fields: [],
      upload: {},
    },
    {
      slug: 'tests',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              fields: [
                {
                  name: 'contentText',
                  type: 'text',
                },
                {
                  name: 'sidebarText',
                  type: 'text',
                  admin: {
                    position: 'sidebar',
                  },
                },
              ],
              label: 'Content',
            },
            {
              fields: [
                {
                  name: 'testText',
                  type: 'text',
                },
              ],
              label: 'Test tab',
            },
          ],
        },
      ],
    },
    {
      slug: 'media',
      fields: [],
      upload: {
        staticDir: path.resolve(dirname, 'media'),
      },
    },
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor(),
  email: testEmailAdapter,
  globals: [
    {
      slug: 'about-page',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        slugField({ fields: ['title'], format: '{title}-lol' }),
      ],
    },
  ],
  onInit: async (payload) => {
    await seed(payload)
  },
  plugins: [
    monoMeta({
      collections: {
        pages: true,
        posts: true,
        tests: true,
      },
      globals: {
        'about-page': true,
      },
      metaImagesCollection: 'meta-images' as CollectionSlug,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || 'test-secret_key',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
