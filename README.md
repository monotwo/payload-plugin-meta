# Payload plugin meta (⚠️work in progress⚠️)

This plugin is a an opinionated alternative to the [official payload seo plugin](https://www.npmjs.com/package/@payloadcms/plugin-seo) for Payload 3+. 

![CleanShot 2025-01-08 at 16 02 33@2x](https://github.com/user-attachments/assets/adcfed14-4fa8-449d-9298-87f069b087f4)

## What does it do exactly?

1. Creates default meta global, where you define the default meta information (title, description and image), that will be used globally as a fallback and/or when formatting all inner page metadata.
2. On enabled collections/globals adds a new `Meta` tab that lets the editor override the default meta info.

## How to use

### In your payload config

In your payload config add the following:

```js
import { monoMeta } from '@monotwo/payload-plugin-meta'
...
 plugins: [
    ...
    monoMeta({
      // Collections you want the meta tab to be enabled on
      collections: {   
        pages: true,
        posts: true,
      },
      // Globals you want the meta tab to be enabled on
      globals: {       
        'about-page': true,
      },
      // Upload collection that's going to be used for meta images
      metaImagesCollection: 'meta-images' as CollectionSlug, 
    }),
  ],
...
```

### On the front-end

1. Add the default meta function to the generateMetadata function:

```js
export async function generateMetadata() {
  // You get the default meta global however you want/need and handle caching how you like.
  const defaultMeta = await getDefaultMeta();
  // Provide the default meta to the function.
  return formatDefaultMeta(defaultMeta);      
}
```

2. Add page meta function to the generateMetadata function:

```js
export async function generateMetadata() {
  // Get default meta from the global created by the plugin.
  const defaultMeta = await getDefaultMeta();
  // Get the page content, which includes the `pageMeta` object.
  const page = await getPageContent('events-page'); 

  return formatPageMeta({
    defaultMeta,
    pageMeta: page.pageMeta,
    // You can optionally provide the location name. This will then automatically append
    // the location name to each inner page and your editors will not need to provide custom meta.
    // The one provided below will result in `Your website - Events`, where `Your website` is set in
    // the default meta settings
    location: 'Events',
    canonical: '/events',
  });
}
``` 

## Useful stuff exported by the plugin

### slugField() -- A customizable and opinionated slug field.

```js
/**
 * @param fields - Array of field names to use for slug generation
 * @param format - Customize slug format using literal strings like '{title}-page'
 */
```

It works a bit differently than others used by the Payload team or other plugins -- before the page gets created, the slug field is disabled and is generated automatically, so when filling out the fields (for example title) that are configured to be used for the slug, the user is able to see the generated slug. Once the page is saved, the field then becomes editable, with the option (button) to generate the slug (according to the predefined rules), if the title has been changed. This ensures that editors don't change the slug unintentionally when doing small edits to the title (or other fields that are used for the slug). This is very important for websites that have a lot of SEO stuff depending on long-standing slugs.

Example usage: 

```js
// In your collection/global config
import { slugField } from '@monotwo/payload-plugin-meta'

{
  slug: 'about-page',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    slugField({ fields: ['title'], format: '{title}-is-the-title-of-the-page' }),
  ],
},
``` 

### An example of the formatMeta functions for the front-end

```js
import type { MetaDefault, MetaImage } from 'payload-types.js'

interface PageMeta {
  customMeta?: {
    description?: null | string
    image?: MetaImage | (null | string)
    title?: null | string
  }
  showCustomMeta: boolean
}

interface PageMetaProps {
  canonical: string
  defaultMeta: MetaDefault
  location?: string
  pageMeta: PageMeta
}

const formatMetaImage = (defaultMeta: MetaDefault, pageMeta?: PageMeta) => {
  const formatImage = (image: MetaImage) => ({
    height: image.height,
    url: image.url,
    width: image.width,
  })

  if (pageMeta && pageMeta.showCustomMeta && pageMeta.customMeta?.image) {
    return typeof pageMeta.customMeta.image === 'object' && pageMeta.customMeta.image
      ? formatImage(pageMeta.customMeta.image)
      : typeof defaultMeta.image === 'object'
        ? formatImage(defaultMeta.image)
        : null
  }

  return typeof defaultMeta.image === 'object' ? formatImage(defaultMeta.image) : null
}

// Should be used in the generateMetadata function of pages
export const formatPageMeta = (props: PageMetaProps) => {
  const { canonical, defaultMeta, location, pageMeta } = props

  const defaultTitle = location ? `${location} | ${defaultMeta.title}` : defaultMeta.title
  const defaultDescription = defaultMeta.description

  return {
    alternates: {
      canonical,
    },
    description: pageMeta?.showCustomMeta
      ? pageMeta?.customMeta?.description
        ? pageMeta.customMeta.description
        : defaultDescription
      : defaultDescription,
    openGraph: {
      type: 'website',
      images: [formatMetaImage(defaultMeta, pageMeta)],
      url: canonical,
    },
    title:
      pageMeta?.showCustomMeta && pageMeta.customMeta?.title
        ? location
          ? `${location} | ${pageMeta.customMeta.title}`
          : pageMeta.customMeta.title
        : defaultTitle,
  }
}

// Should be used in the generateMetadata function of the layout.tsx file
export const formatDefaultMeta = (defaultMeta: MetaDefault) => {
  const defaultImage = formatMetaImage(defaultMeta)

  return {
    alternates: {
      canonical: '/',
    },
    description: defaultMeta.description,
    icons: {
      apple: {
        type: 'image/png',
        url: '/_meta/apple-touch-icon.png',
      },
      icon: {
        type: 'image/x-icon',
        sizes: '32x32',
        url: '/favicon.ico',
      },
      other: {
        type: 'image/svg+xml',
        rel: 'icon',
        url: '/_meta/icon.svg',
      },
    },
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`),
    openGraph: {
      type: 'website',
      images: [defaultImage],
      siteName: defaultMeta.siteName,
      url: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`),
    },
    title: defaultMeta.title,
  }
}
```




