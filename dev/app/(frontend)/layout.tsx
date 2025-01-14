import { unstable_cache } from 'next/cache.js'
import Link from 'next/link.js'

import { formatDefaultMeta } from '../../helpers/formatMeta.js'
import { getPayload } from '../../helpers/getPayload.js'

const payload = await getPayload()

const getDefaultMeta = unstable_cache(
  async () => {
    const docs = await payload.findGlobal({ slug: 'meta-default' })
    return docs
  },
  ['meta-default'],
  { tags: ['meta-default'] },
)

export async function generateMetadata() {
  const defaultMeta = await getDefaultMeta()
  return {
    ...formatDefaultMeta(defaultMeta),
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/test">Test</Link>
        </nav>
        <h1>Hello World</h1>
        {children}
      </body>
    </html>
  )
}
