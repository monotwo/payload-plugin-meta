import type { MetaDefault, MetaImage } from '../payload-types.js'

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
