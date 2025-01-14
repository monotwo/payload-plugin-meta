import Link from 'next/link.js'
import { notFound } from 'next/navigation.js'

import { formatPageMeta } from '../../../helpers/formatMeta.js'
import { getPayload } from '../../../helpers/getPayload.js'

const payload = await getPayload()

const getPage = async (slug: string) => {
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return page.docs[0]
}

const getDefaultMeta = async () => {
  const defaultMeta = await payload.findGlobal({ slug: 'meta-default' })
  return defaultMeta
}

export async function generateStaticParams() {
  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
  })

  return pages.docs.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)
  const defaultMeta = await getDefaultMeta()

  return formatPageMeta({
    canonical: `https://localhost:3000/${slug}`,
    defaultMeta,
    location: 'Pages',
    pageMeta: page.pageMeta,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const docs = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const page = docs.docs[0]

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}
