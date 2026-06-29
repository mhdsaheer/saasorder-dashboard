'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Wallet,
  ShoppingCart,
  ShoppingBag,
  Users,
  Search,
  CheckCircle,
  XCircle,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Settings,
  AlertCircle,
  Shield,
  ArrowRight,
  Lock,
  User,
  MapPin,
  Building,
  Phone,
  Mail,
  FileText,
  Plus,
  ChevronRight,
  Sparkles,
  Clock,
  ArrowUpRight,
  BarChart3,
  RefreshCw,
  Bell,
  Check,
  CreditCard,
  Percent,
  Download,
  SlidersHorizontal,
  HelpCircle,
  ClipboardList
} from 'lucide-react'

// Tab type definition
export type DashboardTab = 'dashboard' | 'vendors' | 'customers' | 'orders' | 'renewals' | 'profile' | 'contact' | 'erp' | 'statement'

interface DashboardContainerProps {
  initialTab?: DashboardTab
}

export default function DashboardContainer({ initialTab = 'dashboard' }: DashboardContainerProps) {

  // Active Tab State
  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Tab-to-URL mapping for silent URL updates
  const tabToPath: Record<DashboardTab, string> = {
    dashboard: '/contact-us/profile',
    profile: '/contact-us/settings',
    renewals: '/contact-us/renewal',
    customers: '/microsoft-customers',
    orders: '/payment/order-list',
    vendors: '/products/showcase',
    statement: '/payment/wallet-statement',
    contact: '/',
    erp: '/',
  }

  // Navigation action — update tab state and silently update the URL
  const handleNav = (tab: DashboardTab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
    const targetPath = tabToPath[tab]
    if (targetPath) {
      window.history.replaceState(null, '', targetPath)
    }
  }

  // --- MOCK DATABASE STATE ---
  const [selectedYear, setSelectedYear] = useState('2026')

  // Yearly Orders Data
  const yearlyOrdersData: Record<string, { month: string; count: number }[]> = {
    '2026': [
      { month: 'Jan', count: 23 },
      { month: 'Feb', count: 11 },
      { month: 'Mar', count: 8 },
      { month: 'Apr', count: 9 },
      { month: 'May', count: 1 },
      { month: 'Jun', count: 7 },
      { month: 'Jul', count: 0 },
      { month: 'Aug', count: 0 },
      { month: 'Sep', count: 0 },
      { month: 'Oct', count: 0 },
      { month: 'Nov', count: 0 },
      { month: 'Dec', count: 0 },
    ],
    '2025': [
      { month: 'Jan', count: 18 },
      { month: 'Feb', count: 15 },
      { month: 'Mar', count: 22 },
      { month: 'Apr', count: 14 },
      { month: 'May', count: 19 },
      { month: 'Jun', count: 21 },
      { month: 'Jul', count: 17 },
      { month: 'Aug', count: 20 },
      { month: 'Sep', count: 16 },
      { month: 'Oct', count: 24 },
      { month: 'Nov', count: 12 },
      { month: 'Dec', count: 25 },
    ],
    '2024': [
      { month: 'Jan', count: 12 },
      { month: 'Feb', count: 14 },
      { month: 'Mar', count: 10 },
      { month: 'Apr', count: 15 },
      { month: 'May', count: 8 },
      { month: 'Jun', count: 13 },
      { month: 'Jul', count: 11 },
      { month: 'Aug', count: 9 },
      { month: 'Sep', count: 14 },
      { month: 'Oct', count: 16 },
      { month: 'Nov', count: 18 },
      { month: 'Dec', count: 20 },
    ]
  }

  // Wallet
  const [wallet, setWallet] = useState({
    AED: 46.75,
    INR: 6887.50,
    USD: 184.03
  })

  // Orders State
  const [orders, setOrders] = useState([
    {
      id: 'order_44_943145_Eb4UIRVAHZF237XLkrd3Q7k',
      customer: 'unionscaffoldingcom.onmicrosoft.com',
      product: 'Microsoft 365 Business Basic - IN',
      quantity: 1,
      total: 'USD 17.64',
      date: 'June 22, 2026',
      status: 'Active'
    },
    {
      id: 'order_11_142392_915f298iVrKqcy3EWFfEch',
      customer: 'babtents.onmicrosoft.com',
      product: 'Microsoft 365 Business Basic - IN',
      quantity: 1,
      total: 'USD 18.44',
      date: 'June 19, 2026',
      status: 'Active'
    },
    {
      id: 'order_89_345213_2348sdfiUasdfsdf234df',
      customer: 'fajralmousa.com',
      product: 'Google Workspace Business Starter',
      quantity: 5,
      total: 'USD 30.00',
      date: 'June 15, 2026',
      status: 'Active'
    },
    {
      id: 'order_54_239487_98234jnsdf89234jsdf',
      customer: 'al-ain-cleaning.ae',
      product: 'Zoho Mail - Lite',
      quantity: 10,
      total: 'AED 36.67',
      date: 'June 10, 2026',
      status: 'Suspended'
    }
  ])

  // Customers State
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Union Scaffolding', domainPrefix: 'unionscaffoldingcom', email: 'admin@unionscaffoldingcom.onmicrosoft.com' },
    { id: 2, name: 'Bab Tents & Shades', domainPrefix: 'babtents', email: 'billing@babtents.onmicrosoft.com' },
    { id: 3, name: 'Fajr Al Mousa Trading', domainPrefix: 'fajralmousa', email: 'admin@fajralmousa.onmicrosoft.com' },
    { id: 4, name: 'Al Ain Cleaning Services', domainPrefix: 'alaincleaning', email: 'info@alaincleaning.ae' }
  ])

  // Renewals State
  const [renewals, setRenewals] = useState([
    { customer: 'unionscaffoldingcom.onmicrosoft.com', product: 'Microsoft 365 Business Basic - IN', quantity: 1, amount: 'INR 1,481.76', endDate: '2026-07-22', dueDays: 28, status: 'warning' },
    { customer: 'fajralmousa.com', product: 'Google Workspace Business Starter', quantity: 5, amount: 'USD 360.00', endDate: '2026-08-15', dueDays: 52, status: 'normal' },
    { customer: 'al-ain-cleaning.ae', product: 'Zoho Mail - Lite', quantity: 10, amount: 'AED 440.00', endDate: '2026-07-10', dueDays: 16, status: 'critical' }
  ])

  // Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Microsoft 365 Subscription',
      text: '1 licenses of Microsoft 365 Business Basic product were subscribed for unionscaffoldingcom.onmicrosoft.com',
      time: 'Just now',
      unread: true,
      type: 'microsoft'
    },
    {
      id: 2,
      title: 'Microsoft 365 Subscription',
      text: '1 licenses of Microsoft 365 Business Basic product were subscribed for babtents.onmicrosoft.com',
      time: '2 hours ago',
      unread: true,
      type: 'microsoft'
    },
    {
      id: 3,
      title: 'Exchange Online Archiving',
      text: '1 licenses of Exchange Online Archiving for Exchange Online product were subscribed for zabshipping.onmicrosoft.com',
      time: '5 hours ago',
      unread: true,
      type: 'exchange'
    },
    {
      id: 4,
      title: 'Microsoft 365 & Copilot',
      text: '1 licenses of Microsoft 365 Business Standard and Microsoft 365 Copilot Business product were subscribed for kalliyath.onmicrosoft.com',
      time: '1 day ago',
      unread: false,
      type: 'microsoft'
    },
    {
      id: 5,
      title: 'Microsoft 365 Subscription',
      text: '1 licenses of Microsoft 365 Business Basic product were subscribed for grandlotusae.onmicrosoft.com',
      time: '2 days ago',
      unread: false,
      type: 'microsoft'
    }
  ])

  const [activeNotificationFilter, setActiveNotificationFilter] = useState<'All' | 'Unread'>('All')

  // --- FILTERS STATE ---
  const [orderIdFilter, setOrderIdFilter] = useState('')
  const [orderProductFilter, setOrderProductFilter] = useState('')
  const [showcaseNameFilter, setShowcaseNameFilter] = useState('')
  const [showcaseGroupFilter, setShowcaseGroupFilter] = useState('All Groups')
  const [showcaseRegionFilter, setShowcaseRegionFilter] = useState('All Regions')
  const [customerPrefixFilter, setCustomerPrefixFilter] = useState('')
  const [renewalDomainFilter, setRenewalDomainFilter] = useState('')
  const [renewalProductFilter, setRenewalProductFilter] = useState('')

  const [appliedOrderFilters, setAppliedOrderFilters] = useState({ id: '', product: '' })
  const [appliedShowcaseFilters, setAppliedShowcaseFilters] = useState({ name: '', group: 'All Groups', region: 'All Regions' })
  const [appliedCustomerFilters, setAppliedCustomerFilters] = useState({ prefix: '' })
  const [appliedRenewalFilters, setAppliedRenewalFilters] = useState({ domain: '', product: '' })

  // --- STATEMENT FILTERS ---
  const [statementStartDate, setStatementStartDate] = useState('')
  const [statementEndDate, setStatementEndDate] = useState('')

  // --- MODALS STATE ---
  const [topUpModalOpen, setTopUpModalOpen] = useState(false)
  const [topUpAmount, setTopUpAmount] = useState('')
  const [topUpCurrency, setTopUpCurrency] = useState<'AED' | 'INR' | 'USD'>('USD')
  const [topUpHistoryModalOpen, setTopUpHistoryModalOpen] = useState(false)
  const [topUpHistory, setTopUpHistory] = useState([
    { id: 'TXN-9023', amount: 100.00, currency: 'USD', date: 'Jun 20, 2026', status: 'Success' },
    { id: 'TXN-8492', amount: 5000.00, currency: 'INR', date: 'Jun 18, 2026', status: 'Success' },
    { id: 'TXN-7123', amount: 150.00, currency: 'AED', date: 'Jun 12, 2026', status: 'Success' },
  ])
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const [selectedProductForPurchase, setSelectedProductForPurchase] = useState<any>(null)
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const [purchaseTenantDomain, setPurchaseTenantDomain] = useState('')
  const [createCustomerModalOpen, setCreateCustomerModalOpen] = useState(false)
  const [newCustomerName, setNewCustomerName] = useState('')
  const [newCustomerDomain, setNewCustomerDomain] = useState('')
  const [newCustomerEmail, setNewCustomerEmail] = useState('')

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  // --- ACTIONS ---
  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault()
    const amt = parseFloat(topUpAmount)
    if (isNaN(amt) || amt <= 0) return
    setWallet(prev => ({
      ...prev,
      [topUpCurrency]: prev[topUpCurrency] + amt
    }))
    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      amount: amt,
      currency: topUpCurrency,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Success'
    }
    setTopUpHistory(prev => [newTxn, ...prev])
    setTopUpModalOpen(false)
    setTopUpAmount('')
    triggerToast(`Wallet topped up by ${amt.toFixed(2)} ${topUpCurrency} successfully!`)
  }

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProductForPurchase) return

    const basePriceNum = selectedProductForPurchase.priceNum
    const currency = selectedProductForPurchase.currency
    const totalCost = basePriceNum * purchaseQuantity

    const newOrderId = `order_${Math.floor(Math.random() * 90 + 10)}_${Math.floor(Math.random() * 800000 + 100000)}_${Math.random().toString(36).substring(2, 12).toUpperCase()}`
    const newOrder = {
      id: newOrderId,
      customer: purchaseTenantDomain.includes('.onmicrosoft.com') ? purchaseTenantDomain : `${purchaseTenantDomain}.onmicrosoft.com`,
      product: selectedProductForPurchase.name,
      quantity: purchaseQuantity,
      total: `${currency} ${totalCost.toFixed(2)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'Active'
    }

    setOrders(prev => [newOrder, ...prev])
    setPurchaseModalOpen(false)
    setPurchaseTenantDomain('')
    setPurchaseQuantity(1)
    triggerToast(`Successfully purchased ${purchaseQuantity}x ${selectedProductForPurchase.name}!`)
  }

  const handleCreateCustomer = (e: React.FormEvent) => {
    e.preventDefault()
    const nextId = customers.length + 1
    const newCust = {
      id: nextId,
      name: newCustomerName,
      domainPrefix: newCustomerDomain.toLowerCase().replace(/\s+/g, ''),
      email: newCustomerEmail
    }
    setCustomers(prev => [...prev, newCust])
    setCreateCustomerModalOpen(false)
    setNewCustomerName('')
    setNewCustomerDomain('')
    setNewCustomerEmail('')
    triggerToast(`Customer Account "${newCustomerName}" created successfully!`)
  }

  const handleRenew = (customerName: string, productName: string) => {
    setRenewals(prev => prev.map(item => {
      if (item.customer === customerName && item.product === productName) {
        return {
          ...item,
          endDate: new Date(new Date(item.endDate).getTime() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          dueDays: item.dueDays + 365,
          status: 'normal'
        }
      }
      return item
    }))
    triggerToast(`Subscription for ${customerName} renewed for 1 Year!`)
  }

  const handleNotify = (customerName: string, productName: string) => {
    triggerToast(`Renewal notification email sent to customer admin of ${customerName}`)
  }

  // --- FILTER APPLICATIONS ---
  const filteredOrders = orders.filter(o => {
    const matchId = o.id.toLowerCase().includes(appliedOrderFilters.id.toLowerCase())
    const matchProd = o.product.toLowerCase().includes(appliedOrderFilters.product.toLowerCase())
    return matchId && matchProd
  })

  const filteredCustomers = customers.filter(c => {
    return c.domainPrefix.toLowerCase().includes(appliedCustomerFilters.prefix.toLowerCase())
  })

  const filteredRenewals = renewals.filter(r => {
    const matchDomain = r.customer.toLowerCase().includes(appliedRenewalFilters.domain.toLowerCase())
    const matchProduct = r.product.toLowerCase().includes(appliedRenewalFilters.product.toLowerCase())
    return matchDomain && matchProduct
  })

  // Showcase Products Data
  const showcaseProducts = [
    { name: 'Microsoft 365 Apps for business - Global', group: 'Microsoft - Microsoft 365', priceStr: '$8.25', priceVal: '$6.52/user/month', priceNum: 6.52, discount: '21.0% discount', logo: 'microsoft', currency: 'USD' },
    { name: 'Exchange Online (Plan 1) - India', group: 'Microsoft - Exchange', priceStr: 'INR 150.00', priceVal: 'INR 120.00/user/month', priceNum: 120.00, discount: '20.0% discount', logo: 'microsoft', currency: 'INR' },
    { name: 'Google Workspace Business Starter - Global', group: 'Google - Google Workspace', priceStr: '$6.00', priceVal: '$4.80/user/month', priceNum: 4.80, discount: '20.0% discount', logo: 'google', currency: 'USD' },
    { name: 'Zoho Mail Lite - Global', group: 'Zoho - Zoho Mail', priceStr: '$1.00', priceVal: '$0.80/user/month', priceNum: 0.80, discount: '20.0% discount', logo: 'zoho', currency: 'USD' },
    { name: 'Sophos Intercept X Essentials', group: 'Sophos - Security', priceStr: '$3.50', priceVal: '$2.97/user/month', priceNum: 2.97, discount: '15.1% discount', logo: 'sophos', currency: 'USD' },
    { name: 'Acronis Cyber Protect Cloud - Global', group: 'Acronis - Backup', priceStr: '$12.00', priceVal: '$9.60/user/month', priceNum: 9.60, discount: '20.0% discount', logo: 'acronis', currency: 'USD' },
    { name: 'AWS Dedicated Instance Provisioning', group: 'AWS - Cloud', priceStr: '$0.010', priceVal: '$0.008/user/month', priceNum: 0.008, discount: '20.0% discount', logo: 'aws', currency: 'USD' }
  ]

  const filteredShowcaseProducts = showcaseProducts.filter(p => {
    const matchName = p.name.toLowerCase().includes(appliedShowcaseFilters.name.toLowerCase())
    const matchGroup = appliedShowcaseFilters.group === 'All Groups' || p.group.includes(appliedShowcaseFilters.group)
    const isIndia = p.name.includes('India')
    const isGlobal = !isIndia
    const matchRegion = appliedShowcaseFilters.region === 'All Regions' ||
      (appliedShowcaseFilters.region === 'India' && isIndia) ||
      (appliedShowcaseFilters.region === 'Global' && isGlobal)
    return matchName && matchGroup && matchRegion
  })

  // Helper to parse dates from various formats safely
  const parseDateStr = (dateStr: string) => {
    try {
      const parsed = Date.parse(dateStr)
      if (!isNaN(parsed)) return new Date(parsed)
    } catch (e) {}
    return new Date()
  }

  // Compile unified transactions ledger for statements page
  const statementTransactions = (() => {
    const list: { id: string; date: string; type: 'Credit' | 'Debit'; description: string; amount: number; currency: string; status: string }[] = []
    
    // 1. Add top-up history (Credits)
    topUpHistory.forEach(t => {
      list.push({
        id: t.id,
        date: t.date,
        type: 'Credit',
        description: 'Wallet Deposit (Top-up via Card)',
        amount: t.amount,
        currency: t.currency,
        status: t.status || 'Success'
      })
    })
    
    // 2. Add orders (Debits)
    orders.forEach(o => {
      const parts = o.total.split(' ')
      const currency = parts[0] || 'USD'
      const amount = parseFloat(parts[1] || '0')
      list.push({
        id: o.id.replace('order_', 'ORD-').substring(0, 12).toUpperCase(),
        date: o.date,
        type: 'Debit',
        description: `License Purchase: ${o.product} (Qty: ${o.quantity}) for ${o.customer}`,
        amount: amount,
        currency: currency,
        status: 'Success'
      })
    })

    // Sort by date descending
    return list.sort((a, b) => {
      const da = parseDateStr(a.date).getTime()
      const db = parseDateStr(b.date).getTime()
      return db - da
    })
  })()

  // Filter statement according to date range inputs
  const filteredStatementTransactions = statementTransactions.filter(txn => {
    const date = parseDateStr(txn.date)
    
    if (statementStartDate) {
      const start = new Date(statementStartDate)
      start.setHours(0, 0, 0, 0)
      if (date < start) return false
    }
    
    if (statementEndDate) {
      const end = new Date(statementEndDate)
      end.setHours(23, 59, 59, 999)
      if (date > end) return false
    }
    
    return true
  })

  // Download statement CSV function
  const handleDownloadCSV = (txns: typeof statementTransactions) => {
    if (txns.length === 0) {
      triggerToast('No transaction data to download for the selected period.')
      return
    }
    let csvContent = 'Date,Transaction ID,Type,Description,Amount,Currency,Status\n'
    txns.forEach(t => {
      const formattedDesc = `"${t.description.replace(/"/g, '""')}"`
      csvContent += `${t.date},${t.id},${t.type},${formattedDesc},${t.amount.toFixed(2)},${t.currency},${t.status}\n`
    })
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `saas_statement_${statementStartDate || 'start'}_to_${statementEndDate || 'end'}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    triggerToast('Statement CSV downloaded successfully!')
  }

  // Profile Info State
  const [profile, setProfile] = useState({
    givenName: 'Admin',
    familyName: 'User',
    email: 'admin@saasorder.com',
    phone: '+91 844 844 2121',
    street: '123 Enterprise Way',
    city: 'Bangalore',
    country: 'India',
    postalCode: '560001',
    organization: 'Febno Technologies',
    twoFA: true
  })

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    triggerToast('Profile configuration saved successfully!')
  }

  // Brand / Brand Icon Rendering Helpers
  const getProductLogoSvg = (logo: string) => {
    const defaultClasses = "w-6 h-6 object-contain"
    switch (logo.toLowerCase()) {
      case 'microsoft':
        return (
          <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none">
            <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
            <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
            <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
            <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
          </svg>
        )
      case 'google':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
          </svg>
        )
      case 'zoho':
        return (
          <div className="flex gap-0.5 items-center">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#E2231A]" />
            <span className="w-1.5 h-1.5 rounded-sm bg-[#00A0E3]" />
            <span className="w-1.5 h-1.5 rounded-sm bg-[#8dc63f]" />
            <span className="w-1.5 h-1.5 rounded-sm bg-[#ffb900]" />
          </div>
        )
      case 'aws':
        return (
          <svg className="w-6 h-4" viewBox="0 0 48 28" fill="none">
            <path d="M20.2 14.1c0 2.2-1.3 3.6-3.4 3.6-1.5 0-2.6-.9-3-2.1h-.1v1.9h-2.1V7.9h2.2v3.7h.1c.4-1.2 1.5-2.1 3-2.1 2.1 0 3.3 1.4 3.3 4.6zm-2.3.1c0-1.8-.6-2.6-1.7-2.6-1.2 0-1.7.9-1.7 2.6 0 1.7.5 2.6 1.7 2.6 1.1-.1 1.7-.9 1.7-2.6z" fill="#232F3E" />
            <path d="M4 21c7.2 4.2 16.5 6.5 25.8 6.5 9 0 15.6-2 18.2-4.5.3-.3.1-.7-.3-.6-3.8 1.1-9.5 1.7-16.1 1.7-9.5 0-19.5-2.5-27.1-7.2-.4-.3-.8 0-.5.4z" fill="#FF9900" />
          </svg>
        )
      default:
        return <ShoppingBag className="w-4 h-4 text-slate-400" />
    }
  }

  // Calculate Wallet Proportions for multi-segmented bar (Total USD equivalent value approximation for styling)
  const totalInUSD = wallet.USD + (wallet.INR / 83.5) + (wallet.AED / 3.67)
  const pctUSD = (wallet.USD / totalInUSD) * 100
  const pctINR = ((wallet.INR / 83.5) / totalInUSD) * 100
  const pctAED = ((wallet.AED / 3.67) / totalInUSD) * 100

  return (
    <div className="h-screen w-full bg-[#f8fafc] text-slate-800 font-sans flex flex-col antialiased overflow-hidden">
      
      {/* Premium Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[#0b0e11] backdrop-blur-md border border-slate-800 text-white py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white transition-colors ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header (Top Nav style in reference image) */}
      <header className="border-b border-slate-200/50 bg-white/70 backdrop-blur-md py-4.5 px-8 flex justify-between items-center z-50 shrink-0">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 select-none cursor-pointer" onClick={() => handleNav('dashboard')}>
          <Image
            src="/logo_03.png"
            alt="SaaS Order Logo"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>


        {/* Profiles & Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 text-slate-400">
            {/* Bell/Notifications Button with Interactive Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)} 
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all relative cursor-pointer ${
                  notificationsOpen 
                    ? 'border-slate-900 bg-slate-50 text-slate-800' 
                    : 'border-slate-200/60 text-slate-400 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Bell className="w-4.5 h-4.5" />
                {notifications.some(n => n.unread) && (
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                )}
              </button>

              {/* Notification Popover Dropdown */}
              {notificationsOpen && (
                <>
                  {/* Invisible backdrop to click-off close */}
                  <div className="fixed inset-0 z-30" onClick={() => setNotificationsOpen(false)} />
                  <div className="absolute right-0 mt-2.5 w-80 bg-white border border-slate-200/80 rounded-2xl shadow-xl py-3.5 z-45 text-left animate-fadeIn">
                    <div className="px-4 pb-2.5 border-b border-slate-100 flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Notifications</span>
                      <button 
                        onClick={() => {
                          setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
                          triggerToast('All notifications marked as read!');
                        }}
                        className="text-[9px] font-black uppercase text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
                      >
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-[260px] overflow-y-auto divide-y divide-slate-50">
                      {notifications.map((n) => (
                        <div key={n.id} className={`p-3.5 flex gap-2.5 items-start transition-colors ${n.unread ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'}`}>
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.unread ? 'bg-orange-500' : 'bg-transparent'}`} />
                          <div className="space-y-0.5 min-w-0">
                            <div className="text-[11px] font-black text-slate-800 truncate">{n.title}</div>
                            <p className="text-[10px] text-slate-500 font-medium leading-relaxed line-clamp-2">{n.text}</p>
                            <span className="text-[9px] font-bold text-slate-400 block pt-0.5">{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase text-slate-400">
                      <span>Total: {notifications.length} alerts</span>
                      <button 
                        onClick={() => {
                          setNotifications([]);
                          triggerToast('Notifications cleared');
                          setNotificationsOpen(false);
                        }}
                        className="hover:text-slate-650 cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <button onClick={() => handleNav('profile')} className="w-9 h-9 rounded-full border border-slate-200/60 flex items-center justify-center hover:text-slate-800 hover:bg-slate-50 cursor-pointer">
              <Settings className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-[1px] h-6 bg-slate-200" />

          {/* User Account Capsule */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNav('profile')}>
            <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-[#1b88e6] to-[#8b5cf6] flex items-center justify-center font-extrabold text-white shadow-sm text-xs border border-white/20 select-none">
              AD
            </div>
            <div className="hidden xl:flex flex-col text-left leading-none">
              <span className="text-xs font-black text-slate-800">Admin User</span>
              <span className="text-[9px] text-slate-400 font-extrabold mt-1 uppercase tracking-wider">Reseller</span>
            </div>
          </div>

          {/* Mobile Drawer Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-8.5 h-8.5 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row px-8 py-0 gap-8 overflow-y-auto lg:overflow-hidden min-h-0 w-full relative">
        
        {/* Modern Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col bg-white border border-slate-200/40 rounded-[28px] py-8 px-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] gap-2 w-64 self-start sticky top-6 sm:top-8 my-6 sm:my-8 z-10 shrink-0">
          <div className="px-3.5 mb-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Menu</span>
          </div>

          {[
            { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
            { id: 'vendors', icon: ShoppingBag, label: 'Catalog' },
            { id: 'customers', icon: Users, label: 'Customers' },
            { id: 'orders', icon: FileText, label: 'Orders' },
            { id: 'renewals', icon: Calendar, label: 'Renewals' },
            { id: 'statement', icon: ClipboardList, label: 'Statement' }
          ].map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as DashboardTab)}
                className={`w-full py-3 px-4.5 rounded-full flex items-center gap-3.5 transition-all duration-200 cursor-pointer text-xs font-bold text-left group ${isActive
                  ? 'bg-[#f41b5d] text-white shadow-lg shadow-rose-900/15'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
              >
                <Icon className={`w-4.5 h-4.5 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'}`} />
                <span className="tracking-tight">{item.label}</span>
              </button>
            )
          })}
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 flex flex-col gap-6 lg:overflow-y-auto lg:h-full py-6 sm:py-8 lg:pr-2 no-scrollbar">

          {/* ======================================================== */}
          {/* TAB 1: DASHBOARD HOME (Matches FinGuard Visual Style) */}
          {/* ======================================================== */}
          {activeTab === 'dashboard' && (
            <div className="flex-1 min-w-0 flex flex-col gap-6 animate-fadeIn">
              
              {/* Title & Search bar row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1.5 text-left">
                  <h3 className="text-[10px] font-black text-[#f41b5d] uppercase tracking-widest leading-none">Welcome Back, Admin</h3>
                  <h1 className="text-2xl sm:text-3xl font-black text-[#0b0e11] leading-tight tracking-tight">Reseller Dashboard</h1>
                  <p className="text-xs text-slate-400 font-medium">Here is what's happening with your SaaS reseller platform today.</p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search orders, platforms, customers..."
                    onChange={(e) => triggerToast(`Searching for "${e.target.value}"...`)}
                    className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Top Row: 3 Premium Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: Blue Card with concentric design */}
                <div className="bg-gradient-to-br from-[#1b88e6] to-[#0b5ca3] text-white rounded-[28px] p-6.5 shadow-lg relative overflow-hidden flex flex-col justify-between h-[230px] text-left">
                  {/* Concentric rings vector background */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
                  <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
                  <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

                  <div className="flex justify-between items-start z-10">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-white/70 bg-white/10 px-3 py-1 rounded-full">Reseller Wallet</span>
                    <button
                      onClick={() => handleNav('profile')}
                      className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="z-10 mt-2">
                    <div className="text-3xl font-black tracking-tight leading-none">
                      AED {wallet.AED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-[11px] text-white/80 font-bold mt-1.5">
                      INR {wallet.INR.toLocaleString('en-US', { minimumFractionDigits: 2 })} • USD {wallet.USD.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div className="z-10 flex items-center justify-between mt-4 gap-2">
                    
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button 
                        onClick={() => setTopUpHistoryModalOpen(true)}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[10px] font-black uppercase tracking-wider py-2 px-3.5 rounded-full transition-all cursor-pointer"
                      >
                        History
                      </button>
                      <button 
                        onClick={() => setTopUpModalOpen(true)}
                        className="bg-white hover:bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-wider py-2 px-3.5 rounded-full transition-all cursor-pointer shadow-sm"
                      >
                        Top Up
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2: Orders Overview (Profile Completion Style Card) */}
                <div className="bg-white rounded-[28px] p-6.5 border border-slate-200/40 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col justify-between h-[230px] text-left">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Orders Overview</h4>
                    <button 
                      onClick={() => handleNav('orders')}
                      className="text-[10px] font-black text-[#f41b5d] hover:text-[#d0144d] transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      View All &rarr;
                    </button>
                  </div>

                  <div className="space-y-2 mt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-slate-900">897</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Total Orders</span>
                    </div>

                    {/* Segmented Progress Bar */}
                    <div className="flex h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div style={{ width: '88.4%' }} className="h-full bg-[#f41b5d] transition-all" title="Microsoft" />
                      <div style={{ width: '10.6%' }} className="h-full bg-[#1b88e6] transition-all" title="Google" />
                      <div style={{ width: '1.0%' }} className="h-full bg-[#8b5cf6] transition-all" title="Zoho/Others" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[10px] font-bold text-slate-500 mt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f41b5d]" />
                      <span className="truncate">MS: <span className="text-slate-900 font-extrabold">793</span></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1b88e6]" />
                      <span className="truncate">Google: <span className="text-slate-900 font-extrabold">95</span></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                      <span className="truncate">Zoho/Other: <span className="text-slate-900 font-extrabold">9</span></span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Customer Tenants Capsule Bar Chart (Transaction Success Rate Style Card) */}
                <div className="bg-white rounded-[28px] p-6.5 border border-slate-200/40 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col justify-between h-[230px] text-left">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer Management</h4>
                    <button 
                      onClick={() => handleNav('customers')}
                      className="text-slate-400 hover:text-slate-650 transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 py-1.5">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Total Clients</span>
                      <div className="text-3xl font-black text-slate-900 leading-tight">459</div>
                    </div>
                    {/* Visual Capsule Chart representation mapping customers: Microsoft India (46%), Microsoft Global (34%), Google Suite (20%) */}
                    <div className="flex-1 h-14 flex items-end justify-around gap-2 px-1">
                      {[
                        { val: 46, active: true, label: 'MS India' },
                        { val: 34, label: 'MS Global' },
                        { val: 20, label: 'Google Suite' },
                        { val: 2, label: 'Zoho Mail' },
                        { val: 1, label: 'Others' }
                      ].map((item, index) => (
                        <div key={index} className="flex-1 h-full flex flex-col justify-end items-center relative group">
                          {/* Mini Tooltip */}
                          <span className="absolute -top-7 bg-[#0b0e11] text-white text-[9px] font-black py-0.5 px-1.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-25">
                            {item.label}: {item.val}%
                          </span>
                          <div 
                            style={{ height: `${item.val * 1.8}%` }} 
                            className={`w-2.5 rounded-full transition-all duration-300 ${item.active ? 'bg-[#8b5cf6] shadow-sm' : 'bg-slate-200/70 group-hover:bg-slate-350'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-[10px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                      <span>MS India primary (46%)</span>
                    </span>
                    <button 
                      onClick={() => handleNav('customers')}
                      className="text-[#8b5cf6] hover:text-[#7c3aed] hover:underline"
                    >
                      Customers &rarr;
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Full-width Recent Renewals */}
              <div className="w-full">

                {/* Recent Renewals Table */}
                <div className="bg-white rounded-[28px] p-6.5 border border-slate-200/40 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col gap-4 text-left">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">Recent Renewals</h3>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Track upcoming subscription due periods and process them</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search domain..."
                          onChange={(e) => {
                            setRenewalDomainFilter(e.target.value)
                            setAppliedRenewalFilters(prev => ({ ...prev, domain: e.target.value }))
                          }}
                          className="bg-slate-50 border border-slate-200 rounded-full py-1.5 pl-9 pr-3 text-[10px] font-bold text-slate-800 placeholder:text-slate-400 outline-none w-44 focus:border-slate-350 transition-all"
                        />
                      </div>
                      <button 
                        onClick={() => handleNav('renewals')}
                        className="bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-600 p-2 rounded-full transition-all cursor-pointer"
                        title="Renewals Page"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto no-scrollbar -mx-6.5 -mb-6.5 border-t border-slate-100">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-slate-50/60 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                          <th className="py-4 px-6">End Customer</th>
                          <th className="py-4 px-6">Product</th>
                          <th className="py-4 px-6 text-center">Due days</th>
                          <th className="py-4 px-6 text-right">Amount</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                        {filteredRenewals.map((r, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                            <td className="py-4 px-6">
                              <span className="font-extrabold text-slate-900 block truncate max-w-[180px]">{r.customer}</span>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-slate-500 font-medium">{r.product}</span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[9px] font-black uppercase tracking-wider ${r.dueDays <= 20
                                ? 'bg-rose-50 text-rose-700'
                                : r.dueDays <= 30
                                  ? 'bg-amber-50 text-amber-700'
                                  : 'bg-emerald-50 text-emerald-700'
                                }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${r.dueDays <= 20
                                  ? 'bg-rose-500'
                                  : r.dueDays <= 30
                                    ? 'bg-amber-500'
                                    : 'bg-emerald-500'
                                  }`} />
                                {r.dueDays} Days
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right font-black text-slate-900">{r.amount}</td>
                            <td className="py-4 px-6 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  onClick={() => handleRenew(r.customer, r.product)}
                                  className="bg-[#f41b5d] hover:bg-[#d0144d] text-white py-1.5 px-3 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                                >
                                  Renew
                                </button>
                                <button
                                  onClick={() => handleNotify(r.customer, r.product)}
                                  className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 py-1.5 px-3 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer"
                                >
                                  Notify
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Row 3: Yearly Orders Trend & Open Tickets */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
                
                {/* Yearly Orders Capsule Chart */}
                <div className="lg:col-span-2 bg-white rounded-[28px] p-6.5 border border-slate-200/40 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col gap-4 text-left justify-between">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">Yearly Orders Trend</h3>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Platform subscription orders count per month</p>
                    </div>
                    <select
                      value={selectedYear}
                      onChange={(e) => {
                        setSelectedYear(e.target.value)
                        triggerToast(`Viewing orders for year ${e.target.value}`)
                      }}
                      className="bg-slate-50 border border-slate-200 rounded-full py-1.5 px-3.5 text-[10px] font-bold text-slate-700 outline-none focus:border-slate-350 transition-all cursor-pointer shadow-sm"
                    >
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>

                  {/* Chart Body */}
                  <div className="flex items-stretch gap-4.5 mt-3 h-44 relative pb-5">
                    {/* Y-Axis Labels */}
                    <div className="flex flex-col justify-between text-[8px] font-black text-slate-400 select-none text-right w-4">
                      <span>25</span>
                      <span>20</span>
                      <span>15</span>
                      <span>10</span>
                      <span>5</span>
                      <span>0</span>
                    </div>

                    {/* Chart Columns */}
                    <div className="flex-1 flex flex-col justify-between relative min-w-0">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[0, 1, 2, 3, 4, 5].map((idx) => (
                          <div key={idx} className="border-t border-slate-100 w-full h-0" />
                        ))}
                      </div>

                      {/* Columns */}
                      <div className="flex-1 flex items-end justify-between relative z-10 px-2">
                        {(yearlyOrdersData[selectedYear] || []).map((item, idx) => {
                          const heightPct = (item.count / 25) * 100
                          const isMax = item.count === Math.max(...(yearlyOrdersData[selectedYear] || []).map(o => o.count))
                          return (
                            <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end relative group px-1">
                              {/* Hover Tooltip */}
                              <div className="absolute -top-9 bg-[#0b0e11] text-white text-[9px] font-black py-1 px-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap flex flex-col items-center">
                                <span>{item.count} Orders</span>
                                <div className="w-1 h-1 bg-[#0b0e11] rotate-45 -mt-0.5" />
                              </div>

                              {/* Capsule Bar */}
                              <div
                                style={{ height: `${heightPct}%` }}
                                className={`w-full max-w-[14px] rounded-t-full transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden ${
                                  isMax 
                                    ? 'bg-gradient-to-t from-[#f41b5d] to-[#ff5d8f]' 
                                    : 'bg-gradient-to-t from-[#1b88e6] to-[#60b5ff] hover:from-[#f41b5d] hover:to-[#ff5d8f]'
                                }`}
                              >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              
                              {/* Bottom label */}
                              <span className="absolute bottom-[-16px] text-[8px] font-black text-slate-400 select-none uppercase">{item.month}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Open Tickets Inbox */}
                <div className="lg:col-span-1 bg-white rounded-[28px] p-6.5 border border-slate-200/40 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col gap-4 text-left">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">Open Tickets</h3>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Assigned support tickets by customers</p>
                    </div>
                    <button onClick={() => triggerToast('Opening support panel...')} className="text-slate-400 hover:text-slate-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-3.5 mt-1">
                    {customers.slice(0, 3).map((cust, idx) => {
                      const names = ['Jacob Martinez', 'Luke Bell', 'Connor Mitchell']
                      const name = names[idx % names.length]
                      const avatarColors = [
                        'from-pink-500 to-indigo-500',
                        'from-teal-400 to-emerald-500',
                        'from-purple-500 to-indigo-500'
                      ]
                      return (
                        <div key={cust.id} className="flex gap-3 items-start border-b border-slate-100 pb-3.5 last:border-0 last:pb-0">
                          <div className={`w-8.5 h-8.5 rounded-full bg-gradient-to-tr ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-[10px] font-black text-white shadow-sm shrink-0 select-none`}>
                            {name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex justify-between items-baseline">
                              <span className="text-xs font-black text-slate-900 block truncate">{name}</span>
                              <span className="text-[8px] font-bold text-slate-400">2h ago</span>
                            </div>
                            <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                              Need more features on designs for <span className="font-bold text-slate-700">{cust.domainPrefix}</span>.
                            </p>
                            <button
                              onClick={() => {
                                setCustomerPrefixFilter(cust.domainPrefix)
                                setAppliedCustomerFilters({ prefix: cust.domainPrefix })
                                handleNav('customers')
                              }}
                              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all inline-flex items-center gap-1 cursor-pointer mt-1"
                            >
                              <span>Inspect</span>
                              <ChevronRight className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: CATALOG (VENDORS SHOWCASE) */}
          {/* ======================================================== */}
          {activeTab === 'vendors' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Products Showcase</h1>
                  <p className="text-xs text-slate-500 font-medium">Provision premium licenses immediately across global regions</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                  <span>Available Products:</span>
                  <span className="font-extrabold text-orange-500">{filteredShowcaseProducts.length}</span>
                </div>
              </div>

              {/* Filter Card */}
              <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Name</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search showcase by name..."
                      value={showcaseNameFilter}
                      onChange={(e) => setShowcaseNameFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="w-full md:w-56 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Group</label>
                  <select
                    value={showcaseGroupFilter}
                    onChange={(e) => setShowcaseGroupFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none focus:border-slate-400 transition-all cursor-pointer"
                  >
                    <option value="All Groups">All Groups</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Google">Google</option>
                    <option value="Zoho">Zoho</option>
                    <option value="Sophos">Sophos</option>
                    <option value="Acronis">Acronis</option>
                  </select>
                </div>

                <div className="w-full md:w-56 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Region</label>
                  <select
                    value={showcaseRegionFilter}
                    onChange={(e) => setShowcaseRegionFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none focus:border-slate-400 transition-all cursor-pointer"
                  >
                    <option value="All Regions">All Regions</option>
                    <option value="Global">Global</option>
                    <option value="India">India</option>
                  </select>
                </div>

                <button
                  onClick={() => setAppliedShowcaseFilters({ name: showcaseNameFilter, group: showcaseGroupFilter, region: showcaseRegionFilter })}
                  className="w-full md:w-32 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Filter
                </button>
              </div>

              {/* Products Table (style of Transaction History) */}
              <div className="bg-white rounded-[24px] border border-slate-200/40 overflow-hidden shadow-sm">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="py-4 px-6 w-20">Vendor</th>
                        <th className="py-4 px-6">Product</th>
                        <th className="py-4 px-6">Product Group</th>
                        <th className="py-4 px-6 text-right">Price</th>
                        <th className="py-4 px-6 text-center">Purchase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                      {filteredShowcaseProducts.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                          <td className="py-4 px-6">
                            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-250/30 flex items-center justify-center shadow-sm select-none">
                              {getProductLogoSvg(p.logo)}
                            </div>
                          </td>
                          <td className="py-4 px-6 font-extrabold text-slate-900">{p.name}</td>
                          <td className="py-4 px-6 text-slate-400 font-bold">{p.group}</td>
                          <td className="py-4 px-6 text-right">
                            <div className="space-y-0.5">
                              <div className="text-slate-400 line-through text-[10px] font-semibold">{p.priceStr}</div>
                              <div className="text-slate-900 font-black">{p.priceVal}</div>
                              <div className="text-emerald-700 font-black text-[9px] bg-emerald-50 border border-emerald-100/50 px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase tracking-wide">{p.discount}</div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <button
                              onClick={() => {
                                setSelectedProductForPurchase(p)
                                setPurchaseModalOpen(true)
                              }}
                              className="bg-[#f41b5d] hover:bg-[#d0144d] text-white py-2 px-5 rounded-full font-black text-[10px] uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                            >
                              Purchase
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredShowcaseProducts.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-slate-400 font-bold">
                            No products found matching the criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: CUSTOMERS */}
          {/* ======================================================== */}
          {activeTab === 'customers' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Customer Tenants</h1>
                  <p className="text-xs text-slate-500 font-medium">Manage domain prefixes and email addresses for tenant billing groups</p>
                </div>
                <button
                  onClick={() => setCreateCustomerModalOpen(true)}
                  className="bg-[#0b0e11] hover:bg-slate-800 text-white text-[10px] font-black uppercase tracking-wider py-2.5 px-5 rounded-full transition-all shadow-md flex items-center justify-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
                >
                  Create Account <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Filter Card */}
              <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex gap-4 items-end">
                <div className="flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Domain Prefix</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search customers by prefix (e.g. unionscaffolding)..."
                      value={customerPrefixFilter}
                      onChange={(e) => setCustomerPrefixFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setAppliedCustomerFilters({ prefix: customerPrefixFilter })}
                  className="w-32 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Search
                </button>
              </div>

              {/* Table */}
              <div className="bg-white rounded-[24px] border border-slate-200/40 overflow-hidden shadow-sm">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="py-4 px-6 w-20 text-center">ID</th>
                        <th className="py-4 px-6">Name</th>
                        <th className="py-4 px-6">Domain Prefix</th>
                        <th className="py-4 px-6">Email</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                      {filteredCustomers.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/40 transition-colors">
                          <td className="py-4 px-6 text-center text-slate-400 font-bold">{c.id}</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => {
                                setAppliedRenewalFilters({ domain: c.email.split('@')[1] || c.domainPrefix, product: '' })
                                handleNav('renewals')
                              }}
                              className="text-[#1b88e6] hover:underline font-extrabold cursor-pointer"
                            >
                              {c.name}
                            </button>
                          </td>
                          <td className="py-4 px-6 text-slate-500 font-mono">{c.domainPrefix}</td>
                          <td className="py-4 px-6">
                            <a href={`mailto:${c.email}`} className="text-emerald-700 hover:underline font-bold">
                              {c.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                      {filteredCustomers.length === 0 && (
                        <tr>
                          <td colSpan={4} className="py-12 text-center text-slate-400 font-bold">
                            No tenant customer matches this domain prefix.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: ORDERS */}
          {/* ======================================================== */}
          {activeTab === 'orders' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Order List</h1>
                  <p className="text-xs text-slate-500 font-medium">Verify purchased billing transactions, provisioning status, and download PDF invoices</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                  <span>Registered Orders:</span>
                  <span className="font-extrabold text-orange-500">{filteredOrders.length}</span>
                </div>
              </div>

              {/* Filter Card */}
              <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                <div className="w-full sm:flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Order ID</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search by order ID prefix..."
                      value={orderIdFilter}
                      onChange={(e) => setOrderIdFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="w-full sm:flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Name</label>
                  <input
                    type="text"
                    placeholder="Search by product name..."
                    value={orderProductFilter}
                    onChange={(e) => setOrderProductFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-805 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                  />
                </div>

                <button
                  onClick={() => setAppliedOrderFilters({ id: orderIdFilter, product: orderProductFilter })}
                  className="w-full sm:w-32 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Search
                </button>
              </div>

              {/* Table */}
              <div className="bg-white rounded-[24px] border border-slate-200/40 overflow-hidden shadow-sm">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="py-4 px-6">Order ID</th>
                        <th className="py-4 px-6">Customer</th>
                        <th className="py-4 px-6">Product</th>
                        <th className="py-4 px-6 text-center">Qty</th>
                        <th className="py-4 px-6 text-right">Total</th>
                        <th className="py-4 px-6 text-center">Date</th>
                        <th className="py-4 px-6 text-center">Status</th>
                        <th className="py-4 px-6 text-center">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                      {filteredOrders.map((o) => (
                        <tr key={o.id} className="hover:bg-slate-50/40 transition-colors">
                          <td className="py-4 px-6 text-slate-400 font-mono text-[10px] max-w-[150px] truncate">{o.id}</td>
                          <td className="py-4 px-6 text-slate-900 font-bold">{o.customer}</td>
                          <td className="py-4 px-6 text-slate-700">{o.product}</td>
                          <td className="py-4 px-6 text-center font-bold text-slate-500">{o.quantity}</td>
                          <td className="py-4 px-6 text-right font-black text-orange-600">{o.total}</td>
                          <td className="py-4 px-6 text-center text-slate-400">{o.date}</td>
                          <td className="py-4 px-6 text-center">
                            <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[9px] font-black uppercase tracking-wider ${o.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50'
                              : 'bg-rose-50 text-rose-700 border border-rose-100/50'
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${o.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                              {o.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <button
                              onClick={() => triggerToast(`Downloading PDF Invoice for Order: ${o.id.substring(0, 12)}...`)}
                              className="bg-slate-50 hover:bg-slate-100 text-slate-600 p-2 rounded-full border border-slate-200 transition-colors inline-flex items-center justify-center cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredOrders.length === 0 && (
                        <tr>
                          <td colSpan={8} className="py-12 text-center text-slate-400 font-bold">
                            No matching orders found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: RENEWALS */}
          {/* ======================================================== */}
          {activeTab === 'renewals' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Renewals Management</h1>
                  <p className="text-xs text-slate-500 font-medium">Verify upcoming license expiration dates, review due periods, and initiate renewals</p>
                </div>
                <div className="bg-white border border-rose-100 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500 animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Critical Expirations:</span>
                  <span className="font-extrabold text-rose-600">{renewals.filter(r => r.dueDays <= 30).length}</span>
                </div>
              </div>

              {/* Filter Card */}
              <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                <div className="w-full sm:flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Domain Name</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search domains (e.g. fajralmousa)..."
                      value={renewalDomainFilter}
                      onChange={(e) => setRenewalDomainFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="w-full sm:flex-1 space-y-1.5 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Name</label>
                  <input
                    type="text"
                    placeholder="Search by product name..."
                    value={renewalProductFilter}
                    onChange={(e) => setRenewalProductFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition-all"
                  />
                </div>

                <button
                  onClick={() => setAppliedRenewalFilters({ domain: renewalDomainFilter, product: renewalProductFilter })}
                  className="w-full sm:w-32 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Search
                </button>
              </div>

              {/* Table */}
              <div className="bg-white rounded-[24px] border border-slate-200/40 overflow-hidden shadow-sm">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="py-4 px-6">Customer Tenant</th>
                        <th className="py-4 px-6">Product</th>
                        <th className="py-4 px-6 text-center">Quantity</th>
                        <th className="py-4 px-6 text-right">Amount</th>
                        <th className="py-4 px-6 text-center">Expiration Date</th>
                        <th className="py-4 px-6 text-center">Status / Due</th>
                        <th className="py-4 px-6 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                      {filteredRenewals.map((r, idx) => (
                        <tr
                          key={idx}
                          className={`hover:bg-slate-50/40 transition-colors ${r.dueDays <= 30 ? 'bg-rose-50/20' : ''}`}
                        >
                          <td className="py-4 px-6 font-bold text-slate-900">{r.customer}</td>
                          <td className="py-4 px-6 text-slate-700">{r.product}</td>
                          <td className="py-4 px-6 text-center font-bold text-slate-400">{r.quantity}</td>
                          <td className="py-4 px-6 text-right font-black text-emerald-600">{r.amount}</td>
                          <td className="py-4 px-6 text-center text-slate-500 font-bold">{r.endDate}</td>
                          <td className="py-4 px-6 text-center">
                            <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[9px] font-black uppercase tracking-wider ${r.dueDays <= 20
                              ? 'bg-rose-100 text-rose-700'
                              : r.dueDays <= 30
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-emerald-100 text-emerald-700'
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${r.dueDays <= 20
                                ? 'bg-rose-500 animate-ping'
                                : r.dueDays <= 30
                                  ? 'bg-amber-500'
                                  : 'bg-emerald-500'
                                }`} />
                              {r.dueDays} Days
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleRenew(r.customer, r.product)}
                                className="bg-[#f41b5d] hover:bg-[#d0144d] text-white py-1.5 px-4.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
                              >
                                Renew
                              </button>
                              <button
                                onClick={() => handleNotify(r.customer, r.product)}
                                className="bg-slate-50 hover:bg-slate-100 text-slate-600 py-1.5 px-4.5 rounded-full text-[9px] font-black uppercase tracking-wider border border-slate-200 transition-all hover:-translate-y-0.5 cursor-pointer"
                              >
                                Notify
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredRenewals.length === 0 && (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400 font-bold">
                            No subscriptions matching renewals criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 8: STATEMENT & DOWNLOADS */}
          {/* ======================================================== */}
          {activeTab === 'statement' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Account Statement</h1>
                  <p className="text-xs text-slate-500 font-medium">View detailed wallet transactions and download itemized reports according to selected date ranges</p>
                </div>
                <button
                  onClick={() => handleDownloadCSV(filteredStatementTransactions)}
                  className="bg-[#f41b5d] hover:bg-[#d0144d] text-white font-black py-2.5 px-5 rounded-full text-xs transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Statement</span>
                </button>
              </div>

              {/* Date Filters Card */}
              <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Start Date</label>
                    <input
                      type="date"
                      value={statementStartDate}
                      onChange={(e) => setStatementStartDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">End Date</label>
                    <input
                      type="date"
                      value={statementEndDate}
                      onChange={(e) => setStatementEndDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setStatementStartDate('')
                      setStatementEndDate('')
                      triggerToast('Date filters cleared.')
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-sm uppercase tracking-wider"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Statement List Table */}
              <div className="bg-white rounded-[24px] border border-slate-200/40 overflow-hidden shadow-sm">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="py-4 px-6 w-28">Date</th>
                        <th className="py-4 px-6 w-32">Transaction ID</th>
                        <th className="py-4 px-6 w-20 text-center">Type</th>
                        <th className="py-4 px-6">Description</th>
                        <th className="py-4 px-6 text-right w-36">Amount</th>
                        <th className="py-4 px-6 text-center w-24">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-650">
                      {filteredStatementTransactions.map((txn, idx) => {
                        const isCredit = txn.type === 'Credit'
                        return (
                          <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                            <td className="py-4 px-6 text-slate-400">{txn.date}</td>
                            <td className="py-4 px-6 font-mono text-[10px] text-slate-500">{txn.id}</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block py-0.5 px-2 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                isCredit 
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50' 
                                  : 'bg-rose-50 text-rose-700 border border-rose-100/50'
                              }`}>
                                {txn.type}
                              </span>
                            </td>
                            <td className="py-4 px-6 font-medium text-slate-900">{txn.description}</td>
                            <td className={`py-4 px-6 text-right font-black ${isCredit ? 'text-emerald-600' : 'text-slate-900'}`}>
                              {isCredit ? '+' : '-'}{txn.currency} {txn.amount.toFixed(2)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-wider bg-emerald-50/50 px-2 py-0.5 rounded-full border border-emerald-100/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {txn.status}
                              </span>
                            </td>
                          </tr>
                        )
                      })}

                      {filteredStatementTransactions.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400 font-bold">
                            No statements found for the selected date range.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 6: PROFILE */}
          {/* ======================================================== */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="space-y-1">
                <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Account Profile</h1>
                <p className="text-xs text-slate-500 font-medium">Update reseller general details, billing address details, and security parameters</p>
              </div>

              {/* Form Settings Box */}
              <div className="bg-white rounded-[28px] border border-slate-200/40 p-8 shadow-sm">
                <form onSubmit={handleProfileSave} className="space-y-6">
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* General details */}
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black tracking-widest uppercase text-slate-400 border-b border-slate-100 pb-2.5">General Details</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Given Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              value={profile.givenName}
                              onChange={(e) => setProfile(prev => ({ ...prev, givenName: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Family Name</label>
                          <input
                            type="text"
                            value={profile.familyName}
                            onChange={(e) => setProfile(prev => ({ ...prev, familyName: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={profile.phone}
                            onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address details */}
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black tracking-widest uppercase text-slate-400 border-b border-slate-100 pb-2.5">Business Location</h3>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Organization Name</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={profile.organization}
                            onChange={(e) => setProfile(prev => ({ ...prev, organization: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Street Address</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={profile.street}
                            onChange={(e) => setProfile(prev => ({ ...prev, street: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">City</label>
                          <input
                            type="text"
                            value={profile.city}
                            onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Country</label>
                          <input
                            type="text"
                            value={profile.country}
                            onChange={(e) => setProfile(prev => ({ ...prev, country: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">ZIP</label>
                          <input
                            type="text"
                            value={profile.postalCode}
                            onChange={(e) => setProfile(prev => ({ ...prev, postalCode: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] bg-slate-100 my-4" />

                  {/* Security Panel */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Modify Security Credentials</h4>
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">New Password</label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Verify Password</label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-slate-400 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Multi-Factor Configuration</h4>
                        <p className="text-xs text-slate-400 font-semibold leading-relaxed mt-2.5">
                          Add an extra layer of protection to your reseller administrator session by toggling the authentication shield.
                        </p>
                      </div>

                      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/50 mt-2">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${profile.twoFA ? 'bg-emerald-50 border border-emerald-100 text-emerald-600' : 'bg-slate-250/50 text-slate-400'}`}>
                          <Shield className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-black text-slate-805">Two-Factor Authentication (2FA)</p>
                          <p className="text-[9px] font-bold text-slate-400 mt-0.5">Secure logins with mobile code authorization</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setProfile(prev => ({ ...prev, twoFA: !prev.twoFA }))}
                          className={`w-11 h-6 rounded-full p-1 transition-all relative cursor-pointer ${profile.twoFA ? 'bg-[#0b0e11]' : 'bg-slate-300'}`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all transform ${profile.twoFA ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-64 bg-[#0b0e11] hover:bg-slate-800 text-white font-black py-3 px-6 rounded-full transition-all shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
                    >
                      Save Configuration
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Footer of the right content panel */}
          <div className="h-[1px] w-full bg-slate-200/50 mt-6" />
          <footer className="py-6 text-slate-400 text-[10px] font-bold flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left select-none shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-slate-800 font-extrabold text-xs">saasorder</span>
              <span>© 2026 Reseller Suite</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 font-semibold">
              <a href="tel:+918848806212" className="hover:text-slate-700 transition-colors">+91-884-8806212 (IN)</a>
              <span>•</span>
              <a href="tel:+971544055999" className="hover:text-slate-700 transition-colors">+971-54-405-5999 (UAE)</a>
              <span>•</span>
              <a href="mailto:info@saasorder.com" className="hover:text-slate-700 transition-colors">info@saasorder.com</a>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
              <span>Powered by</span>
              <span className="bg-slate-900 text-white font-black px-2 py-1 rounded text-[8px] tracking-wider select-none"><span className="text-orange-500">FEBNO</span> TECH</span>
            </div>
          </footer>

        </div>
      </div>

      {/* Mobile Drawer menu (replaces original) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[1000] bg-slate-900/40 backdrop-blur-sm animate-fadeIn" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 animate-slideInLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="flex items-center text-left">
                <Image
                  src="/logo_03.png"
                  alt="SaaS Order Logo"
                  width={110}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
                { id: 'vendors', icon: ShoppingBag, label: 'Catalog' },
                { id: 'customers', icon: Users, label: 'Customers' },
                { id: 'orders', icon: FileText, label: 'Orders' },
                { id: 'renewals', icon: Calendar, label: 'Renewals' },
                { id: 'statement', icon: ClipboardList, label: 'Statement' }
              ].map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => { handleNav(item.id as DashboardTab); setMobileMenuOpen(false); }}
                    className={`text-left text-xs font-bold py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${isActive
                      ? 'text-[#0b0e11] bg-slate-100/80'
                      : 'text-slate-600 hover:text-[#0b0e11] hover:bg-slate-50'
                      }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* WALLET TOP-UP MODAL */}
      {/* ======================================================== */}
      {topUpModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-[24px] border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-150/40 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#0b0e11]">
                <Wallet className="w-4.5 h-4.5" />
                <h3 className="text-sm font-black uppercase tracking-tight">Top Up Wallet</h3>
              </div>
              <button onClick={() => setTopUpModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleTopUp} className="p-5 space-y-4">
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Select Currency</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['USD', 'AED', 'INR'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setTopUpCurrency(curr)}
                      className={`py-2 px-3 border rounded-xl font-extrabold text-xs transition-all cursor-pointer ${topUpCurrency === curr
                        ? 'border-[#0b0e11] bg-slate-50 text-slate-900 font-black'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Top-Up Amount</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Enter amount..."
                    value={topUpAmount}
                    onChange={(e) => setTopUpAmount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b0e11] hover:bg-slate-800 text-white font-black py-2.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer"
              >
                Confirm Transaction
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* WALLET TOP-UP HISTORY / TRANSACTION LIST MODAL */}
      {/* ======================================================== */}
      {topUpHistoryModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[24px] border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-150/40 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-900">
                <FileText className="w-4.5 h-4.5 text-[#0b0e11]" />
                <h3 className="text-sm font-black uppercase tracking-tight">Top Up Transactions</h3>
              </div>
              <button onClick={() => setTopUpHistoryModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 max-h-[350px] overflow-y-auto space-y-3">
              {topUpHistory.length === 0 ? (
                <div className="text-center py-8 text-xs font-semibold text-slate-400">
                  No top up transactions found.
                </div>
              ) : (
                topUpHistory.map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/50 rounded-xl text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8.5 h-8.5 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 flex items-center justify-center font-black text-[9px]">
                        +
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-slate-800">{txn.id}</div>
                        <div className="text-[9px] font-bold text-slate-400">{txn.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-emerald-700">
                        +{txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} {txn.currency}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 mt-0.5">{txn.status}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-150/40 flex justify-between items-center">
              <button
                onClick={() => {
                  setTopUpHistoryModalOpen(false)
                  handleNav('statement')
                }}
                className="bg-[#f41b5d] hover:bg-[#d0144d] text-white font-black py-2 px-4 rounded-full transition-all text-[10px] uppercase tracking-wider cursor-pointer shadow-sm active:scale-95 flex items-center gap-1"
              >
                Detailed Statement &rarr;
              </button>
              <button
                onClick={() => setTopUpHistoryModalOpen(false)}
                className="bg-slate-200 hover:bg-slate-350 text-slate-700 font-black py-2 px-4 rounded-full transition-all text-[10px] uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PRODUCTS PURCHASE CHECKOUT MODAL */}
      {/* ======================================================== */}
      {purchaseModalOpen && selectedProductForPurchase && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[24px] border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-150/40 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-900">
                <ShoppingCart className="w-4.5 h-4.5" />
                <h3 className="text-sm font-black uppercase tracking-tight">Checkout Subscription</h3>
              </div>
              <button onClick={() => setPurchaseModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handlePurchase} className="p-5 space-y-4">
              {/* Product Card */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 flex gap-3 items-start text-left">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0 select-none">
                  {getProductLogoSvg(selectedProductForPurchase.logo)}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">{selectedProductForPurchase.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">{selectedProductForPurchase.group}</p>
                  <p className="text-xs text-orange-600 font-black mt-1.5">{selectedProductForPurchase.priceVal}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Tenant Domain Prefix</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. clientdomain"
                    value={purchaseTenantDomain}
                    onChange={(e) => setPurchaseTenantDomain(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold font-mono">.onmicrosoft.com</span>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">License Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={purchaseQuantity}
                  onChange={(e) => setPurchaseQuantity(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex justify-between items-center text-xs font-semibold text-slate-700">
                <span>Estimated Cost:</span>
                <span className="text-orange-600 font-black text-sm">
                  {selectedProductForPurchase.currency} {(selectedProductForPurchase.priceNum * purchaseQuantity).toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b0e11] hover:bg-slate-800 text-white font-black py-2.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer"
              >
                Provision Subscription
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CREATE CUSTOMER ACCOUNT MODAL */}
      {/* ======================================================== */}
      {createCustomerModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-[24px] border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-150/40 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-900">
                <Users className="w-4.5 h-4.5" />
                <h3 className="text-sm font-black uppercase tracking-tight">Create Tenant Account</h3>
              </div>
              <button onClick={() => setCreateCustomerModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomer} className="p-5 space-y-4">
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Customer Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Industries"
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Domain Prefix</label>
                <input
                  type="text"
                  placeholder="e.g. acmeind"
                  value={newCustomerDomain}
                  onChange={(e) => setNewCustomerDomain(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Administrator Email</label>
                <input
                  type="email"
                  placeholder="e.g. admin@acmeind.onmicrosoft.com"
                  value={newCustomerEmail}
                  onChange={(e) => setNewCustomerEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-slate-400 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b0e11] hover:bg-slate-800 text-white font-black py-2.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer"
              >
                Register Customer
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
