import DashboardContainer, { DashboardTab } from '@/components/dashboard-container'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || []
  const path = '/' + slug.join('/')

  // Map path to the corresponding initial tab
  let initialTab: DashboardTab = 'dashboard'

  if (path === '/contact-us/settings') {
    initialTab = 'profile'
  } else if (path === '/contact-us/renewal') {
    initialTab = 'renewals'
  } else if (path === '/microsoft-customers') {
    initialTab = 'customers'
  } else if (path === '/payment/order-list') {
    initialTab = 'orders'
  } else if (path === '/products/showcase') {
    initialTab = 'vendors'
  } else if (path === '/payment/wallet-statement') {
    initialTab = 'statement'
  }

  return <DashboardContainer initialTab={initialTab} />
}

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['contact-us', 'profile'] },
    { slug: ['contact-us', 'settings'] },
    { slug: ['contact-us', 'renewal'] },
    { slug: ['microsoft-customers'] },
    { slug: ['payment', 'order-list'] },
    { slug: ['payment', 'wallet-statement'] },
    { slug: ['products', 'showcase'] }
  ]
}
