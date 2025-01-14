import { formatPageMeta } from '../../../helpers/formatMeta.js'
import { getPayload } from '../../../helpers/getPayload.js'

const payload = await getPayload()

const getPage = async () => {
  const page = await payload.findGlobal({ slug: 'about-page' })
  return page
}

const getDefaultMeta = async () => {
  const defaultMeta = await payload.findGlobal({ slug: 'meta-default' })
  return defaultMeta
}

export async function generateMetadata() {
  const page = await getPage()
  const defaultMeta = await getDefaultMeta()

  return formatPageMeta({
    canonical: `https://localhost:3000/about`,
    defaultMeta,
    location: 'About',
    pageMeta: page.pageMeta,
  })
}

export default async function Page() {
  const page = await getPage()
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}
