'use client'

import React, { useState, useEffect } from 'react'
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
  Edit2,
  Award,
  Key,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react'

// Tab type definition
export type DashboardTab = 'dashboard' | 'vendors' | 'customers' | 'orders' | 'renewals' | 'profile' | 'contact' | 'erp'

interface ChartDataPoint {
  label: string
  orders: number
  revenue: number
  date: string
}

const transactionChartData: Record<'week' | 'month' | 'year', ChartDataPoint[]> = {
  week: [
    { label: 'Mon', orders: 12, revenue: 480, date: 'June 22, 2026' },
    { label: 'Tue', orders: 18, revenue: 720, date: 'June 23, 2026' },
    { label: 'Wed', orders: 15, revenue: 580, date: 'June 24, 2026' },
    { label: 'Thu', orders: 25, revenue: 980, date: 'June 25, 2026' },
    { label: 'Fri', orders: 22, revenue: 850, date: 'June 26, 2026' },
    { label: 'Sat', orders: 30, revenue: 1200, date: 'June 27, 2026' },
    { label: 'Sun', orders: 28, revenue: 1100, date: 'June 28, 2026' },
  ],
  month: [
    { label: 'Jun 1', orders: 65, revenue: 2600, date: 'Jun 1 - Jun 5' },
    { label: 'Jun 6', orders: 88, revenue: 3520, date: 'Jun 6 - Jun 10' },
    { label: 'Jun 11', orders: 72, revenue: 2880, date: 'Jun 11 - Jun 15' },
    { label: 'Jun 16', orders: 95, revenue: 3800, date: 'Jun 16 - Jun 20' },
    { label: 'Jun 21', orders: 110, revenue: 4400, date: 'Jun 21 - Jun 25' },
    { label: 'Jun 26', orders: 105, revenue: 4200, date: 'Jun 26 - Jun 30' },
  ],
  year: [
    { label: 'Jan', orders: 62, revenue: 2480, date: 'January 2026' },
    { label: 'Feb', orders: 58, revenue: 2320, date: 'February 2026' },
    { label: 'Mar', orders: 70, revenue: 2800, date: 'March 2026' },
    { label: 'Apr', orders: 85, revenue: 3400, date: 'April 2026' },
    { label: 'May', orders: 92, revenue: 3680, date: 'May 2026' },
    { label: 'Jun', orders: 110, revenue: 4400, date: 'June 2026' },
    { label: 'Jul', orders: 95, revenue: 3800, date: 'July 2026' },
    { label: 'Aug', orders: 88, revenue: 3520, date: 'August 2026' },
    { label: 'Sep', orders: 102, revenue: 4080, date: 'September 2026' },
    { label: 'Oct', orders: 115, revenue: 4600, date: 'October 2026' },
    { label: 'Nov', orders: 120, revenue: 4800, date: 'November 2026' },
    { label: 'Dec', orders: 135, revenue: 5400, date: 'December 2026' },
  ]
}

const renderVendorLogo = (logoKey: string, sizeClass = "w-5.5 h-5.5") => {
  switch (logoKey.toLowerCase()) {
    case 'microsoft':
      return (
        <svg className={sizeClass} viewBox="0 0 23 23" fill="none">
          <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
          <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
          <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00a4ef" />
          <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#ffb900" />
        </svg>
      )
    case 'google':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
      )
    case 'zoho':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <rect x="1.5" y="1.5" width="9.5" height="9.5" rx="2.2" fill="#E42527" />
          <text x="6.25" y="6.75" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="7.5" textAnchor="middle" dominantBaseline="central">Z</text>

          <rect x="13" y="1.5" width="9.5" height="9.5" rx="2.2" fill="#226DB4" />
          <text x="17.75" y="6.75" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="7.5" textAnchor="middle" dominantBaseline="central">O</text>

          <rect x="1.5" y="13" width="9.5" height="9.5" rx="2.2" fill="#089949" />
          <text x="6.25" y="18.25" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="7.5" textAnchor="middle" dominantBaseline="central">H</text>

          <rect x="13" y="13" width="9.5" height="9.5" rx="2.2" fill="#F9B21D" />
          <text x="17.75" y="18.25" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="7.5" textAnchor="middle" dominantBaseline="central">O</text>
        </svg>
      )
    case 'aws':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5.5" fill="#232f3e" />
          <text x="12" y="10.5" fill="#ffffff" fontFamily="sans-serif" fontWeight="950" fontSize="7.5" textAnchor="middle" dominantBaseline="central">aws</text>
          <path d="M6 14.5c3.5 2.2 8.5 2.2 12 0" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.2 14.2l1 1.2-1.2.2" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'redhat':
      return (
        <svg className={sizeClass} viewBox="0 0 32 32" fill="none">
          <path d="M28 20c-1.5-1.5-4-2.5-7.5-2.8-.8-.1-1.5-.5-1.8-1.2C18 14 17 9 12.5 9 9.5 9 7.5 11 7.5 13c0 2 2.5 3.5 5 4.5 2 .8 3.5 2 4.3 3.5.5.9.5 2-.1 2.8C15 26 10.5 26 6 23.5c-.8-.4-1.8-.1-2.2.7s-.1 1.8.7 2.2C10 29.5 16 30 20.5 27.5c2.3-1.3 3.5-3.5 3.5-5.5 0-.8-.3-1.5-.7-2z" fill="#cc0000" />
          <path d="M12.5 11.5c1.4 0 2.2 1.6 2.8 3.5.2.7.9 1.2 1.7 1.2 2 .1 3.5.6 4.5 1.3.2.1.4-.1.3-.3-.8-1.5-2.2-2.5-3.8-3-1.1-.3-2.1-1-2.7-2.1-.9-1.5-2.1-2.1-3.8-2.1-2.5 0-4.5 1.5-4.5 3.5 0 .5.3.8.7.8.8-.1 2.1-.8 2.1-2.8z" fill="#ffffff" opacity="0.8" />
        </svg>
      )
    case 'sophos':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#002f6c" />
          <path d="M12 6a3 3 0 00-3 3v2H8v6h8v-6h-1V9a3 3 0 00-3-3zm1.5 5h-3V9a1.5 1.5 0 013 0v2z" fill="#ffffff" />
        </svg>
      )
    case 'acronis':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#009bf5" />
          <path d="M12 6.5a4 4 0 00-4 4v3.5a4 4 0 008 0v-3.5a4 4 0 00-4-4zm2 7.5h-4v-3.5a2 2 0 114 0v3.5z" fill="#ffffff" />
        </svg>
      )
    case 'dropbox':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
          <path d="M6 2L0 6l6 4 6-4-6-4zm12 0l-6 4 6 4 6-4-6-4zM0 14l6-4 6 4-6 4-6-4zm24 0l-6-4-6 4 6 4 6-4zM6 19.5l6-3.75 6 3.75-6 4.25-6-4.25z" fill="#0061FE" />
        </svg>
      )
    default:
      return null
  }
}

interface DashboardContainerProps {
  initialTab?: DashboardTab
}

export default function DashboardContainer({ initialTab = 'dashboard' }: DashboardContainerProps) {

  // Active Tab State
  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Tab-to-URL mapping for silent URL updates
  const tabToPath: Record<DashboardTab, string> = {
    dashboard: '/dashboard',
    profile: '/profile',
    renewals: '/renewals',
    customers: '/customers',
    orders: '/orders',
    vendors: '/catalog',
    contact: '/',
    erp: '/',
  }

  // Navigation action — update tab state and silently update the URL
  // without triggering a Next.js route change (which would remount the component)
  const handleNav = (tab: DashboardTab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
    const targetPath = tabToPath[tab]
    if (targetPath) {
      window.history.replaceState(null, '', targetPath)
    }
  }

  // --- MOCK DATABASE STATE ---
  // Selected Year for Yearly Orders Chart
  const [selectedYear, setSelectedYear] = useState('2026')
  const [activeCustomerBar, setActiveCustomerBar] = useState('MS (Ind)')

  // Timeframe and Metric state for Transaction Activity Chart
  const [chartTimeRange, setChartTimeRange] = useState<'week' | 'month' | 'year'>('week')
  const [chartMetric, setChartMetric] = useState<'orders' | 'revenue'>('orders')
  const [hoveredChartIndex, setHoveredChartIndex] = useState<number | null>(null)

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
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false)
  const [walletDropdownOpen, setWalletDropdownOpen] = useState(false)
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)


  // --- FILTERS STATE ---
  // Order list filters
  const [orderIdFilter, setOrderIdFilter] = useState('')
  const [orderProductFilter, setOrderProductFilter] = useState('')
  // Showcase filters
  const [showcaseNameFilter, setShowcaseNameFilter] = useState('')
  const [showcaseGroupFilter, setShowcaseGroupFilter] = useState('All Groups')
  const [showcaseRegionFilter, setShowcaseRegionFilter] = useState('All Regions')
  // Customers filters
  const [customerPrefixFilter, setCustomerPrefixFilter] = useState('')
  // Renewal filters
  const [renewalDomainFilter, setRenewalDomainFilter] = useState('')
  const [renewalProductFilter, setRenewalProductFilter] = useState('')

  // Active filters applied
  const [appliedOrderFilters, setAppliedOrderFilters] = useState({ id: '', product: '' })
  const [appliedShowcaseFilters, setAppliedShowcaseFilters] = useState({ name: '', group: 'All Groups', region: 'All Regions' })
  const [appliedCustomerFilters, setAppliedCustomerFilters] = useState({ prefix: '' })
  const [appliedRenewalFilters, setAppliedRenewalFilters] = useState({ domain: '', product: '' })

  // --- MODALS STATE ---
  // Wallet top up modal
  const [topUpModalOpen, setTopUpModalOpen] = useState(false)
  const [topUpAmount, setTopUpAmount] = useState('')
  const [topUpCurrency, setTopUpCurrency] = useState<'AED' | 'INR' | 'USD'>('USD')
  const [topUpHistoryModalOpen, setTopUpHistoryModalOpen] = useState(false)
  const [topUpHistory, setTopUpHistory] = useState([
    { id: 'TXN-9023', amount: 100.00, currency: 'USD', date: 'Jun 20, 2026', status: 'Success' },
    { id: 'TXN-8492', amount: 5000.00, currency: 'INR', date: 'Jun 18, 2026', status: 'Success' },
    { id: 'TXN-7123', amount: 150.00, currency: 'AED', date: 'Jun 12, 2026', status: 'Success' },
  ])
  // Purchase Modal
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const [selectedProductForPurchase, setSelectedProductForPurchase] = useState<any>(null)
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const [purchaseTenantDomain, setPurchaseTenantDomain] = useState('')
  // Create Customer Modal
  const [createCustomerModalOpen, setCreateCustomerModalOpen] = useState(false)
  const [newCustomerName, setNewCustomerName] = useState('')
  const [newCustomerDomain, setNewCustomerDomain] = useState('')
  const [newCustomerEmail, setNewCustomerEmail] = useState('')

  // Toast message notification
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
    // Add to history
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

    const basePriceStr = selectedProductForPurchase.priceVal
    const basePriceNum = selectedProductForPurchase.priceNum
    const currency = selectedProductForPurchase.currency

    const totalCost = basePriceNum * purchaseQuantity

    // Add to orders list
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
    { name: 'Red Hat Enterprise Linux Server - Global', group: 'Red Hat - Enterprise', priceStr: '$29.00', priceVal: '$24.00/user/month', priceNum: 24.00, discount: '17.2% discount', logo: 'redhat', currency: 'USD' },
    { name: 'AWS Dedicated Instance Provisioning', group: 'AWS - Cloud', priceStr: '$0.010', priceVal: '$0.008/user/month', priceNum: 0.008, discount: '20.0% discount', logo: 'aws', currency: 'USD' },
    { name: 'Dropbox Business Standard - Global', group: 'Dropbox - Cloud', priceStr: '$15.00', priceVal: '$12.00/user/month', priceNum: 12.00, discount: '20.0% discount', logo: 'dropbox', currency: 'USD' }
  ]

  const filteredShowcaseProducts = showcaseProducts.filter(p => {
    const matchName = p.name.toLowerCase().includes(appliedShowcaseFilters.name.toLowerCase())
    const matchGroup = appliedShowcaseFilters.group === 'All Groups' || p.group.includes(appliedShowcaseFilters.group)
    // For region: in showcase, if name contains India, show in India region, etc.
    const isIndia = p.name.includes('India')
    const isGlobal = !isIndia
    const matchRegion = appliedShowcaseFilters.region === 'All Regions' ||
      (appliedShowcaseFilters.region === 'India' && isIndia) ||
      (appliedShowcaseFilters.region === 'Global' && isGlobal)

    return matchName && matchGroup && matchRegion
  })

  // Dynamic Profile Info
  const [profile, setProfile] = useState({
    givenName: 'shafeeq',
    familyName: 'M',
    email: 'Shafeeqm@Dev.Febno.Com',
    phone: '+919747986380',
    street: 'Kinfra',
    city: 'Kozhikode',
    country: 'India',
    postalCode: '678910',
    organization: 'Febno Technologies',
    taxId: 'GSTIN29AABCF1234L1ZV',
    website: 'https://febno.com',
    businessType: 'Technology Reseller',
    partnerTier: 'Gold',
    twoFA: true
  })

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    triggerToast('Profile configuration saved successfully!')
  }

  // Developer Credentials & Agreement Modal state
  const [showSecret, setShowSecret] = useState(false)
  const [secretKey, setSecretKey] = useState('sk_live_mock_key_value_xxxxxxxxxxxxxx')
  const [showAgreementModal, setShowAgreementModal] = useState(false)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    triggerToast(`${label} copied to clipboard!`)
  }

  const handleRegenerateKeys = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let newKey = 'sk_live_'
    for (let i = 0; i < 32; i++) {
      newKey += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setSecretKey(newKey)
    triggerToast('API Credentials regenerated successfully!')
  }

  // --- TRANSACTIONS AREA CHART CALCULATIONS ---
  const activeChartData = transactionChartData[chartTimeRange]
  const chartValues = activeChartData.map(d => chartMetric === 'orders' ? d.orders : d.revenue)
  const maxChartVal = Math.max(...chartValues) * 1.15 || 1
  const chartPointsCount = activeChartData.length
  const chartDx = chartPointsCount > 1 ? 440 / (chartPointsCount - 1) : 440

  const chartPoints = activeChartData.map((d, i) => {
    const val = chartMetric === 'orders' ? d.orders : d.revenue
    const x = 35 + i * chartDx
    const y = 160 - (val / maxChartVal) * 140
    return { x, y, value: val, label: d.label, date: d.date }
  })

  const chartLinePath = chartPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const chartAreaPath = chartPoints.length > 0
    ? `M ${chartPoints[0].x} 160 ` + chartPoints.map(p => `L ${p.x} ${p.y}`).join(' ') + ` L ${chartPoints[chartPoints.length - 1].x} 160 Z`
    : ''

  const formatChartYLabel = (val: number) => {
    if (chartMetric === 'revenue') {
      if (val >= 1000) {
        return `$${(val / 1000).toFixed(1)}k`
      }
      return `$${val}`
    }
    return Math.round(val).toString()
  }

  // --- DYNAMIC SUMMARY STATS ---
  const totalActiveOrders = activeChartData.reduce((sum, d) => sum + d.orders, 0)
  const totalActiveRevenue = activeChartData.reduce((sum, d) => sum + d.revenue, 0)

  const trendMetadata = {
    week: {
      volTrend: '+8.2% vs last week',
      amtTrend: '+9.4%',
      successRate: '99.2%',
      successDetail: '+0.2% change'
    },
    month: {
      volTrend: '+12% vs Q1',
      amtTrend: '+14.1%',
      successRate: '99.4%',
      successDetail: 'High SLA'
    },
    year: {
      volTrend: '+18.4% vs 2025',
      amtTrend: '+21.2%',
      successRate: '99.6%',
      successDetail: 'Stable uptime'
    }
  }

  const currentTrend = trendMetadata[chartTimeRange]

  return (
    <div className="h-screen w-full bg-[#f5f5f7] text-slate-800 font-sans flex flex-col antialiased overflow-hidden">

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-[9999] bg-slate-900/90 backdrop-blur-md border border-[#f41b5d]/30 text-white py-3.5 px-5 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-[#f41b5d] animate-ping shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main card container */}
      <div className="flex-1 bg-[#f5f5f7] flex flex-col overflow-hidden w-full relative">

        {/* FinGuard-style Header */}
        <header className="bg-[#f5f5f7] py-6 px-6 sm:px-10 flex justify-between items-center z-50">
          {/* Logo */}
          <div className="select-none cursor-pointer text-left animate-fadeIn flex items-center" onClick={() => handleNav('dashboard')}>
            <Image
              src="/logo_03.png"
              alt="SaaS Order Logo"
              width={130}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Horizontal Pill Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'vendors', label: 'Catalog' },
              { id: 'customers', label: 'Customers' },
              { id: 'orders', label: 'Orders' },
              { id: 'renewals', label: 'Renewals' },
            ].map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as DashboardTab)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-slate-950 text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                    : 'bg-white text-slate-500 border border-slate-200/80 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                    }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Right side: Wallet + Bell + Avatar */}
          <div className="flex items-center gap-3">

            {/* Wallet Pill Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setWalletDropdownOpen(p => !p); setNotificationPanelOpen(false) }}
                className="flex items-center gap-2.5 bg-white border border-slate-200/80 rounded-full px-4 py-2.5 shadow-sm hover:shadow hover:border-slate-300 transition-all cursor-pointer select-none h-11"
              >
                <svg className="w-4.5 h-4.5 text-[#2563eb] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="3" />
                  <path d="M16 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
                </svg>
                <span className="text-[13px] font-semibold text-slate-800">USD {wallet.USD.toFixed(2)}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${walletDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {walletDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 z-[200] overflow-hidden">
                  <div className="px-5 pt-5 pb-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Reseller Wallet</p>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-slate-500 font-medium">AED Balance:</span>
                        <span className="text-[13px] font-bold text-slate-800">AED {wallet.AED.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-slate-500 font-medium">INR Balance:</span>
                        <span className="text-[13px] font-bold text-slate-800">₹ {wallet.INR.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-slate-500 font-medium">USD Balance:</span>
                        <span className="text-[13px] font-bold text-slate-800">USD {wallet.USD.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5 px-5 pb-5">
                    <button
                      onClick={() => { setWalletDropdownOpen(false); setTopUpModalOpen(true) }}
                      className="flex-1 bg-slate-950 hover:bg-slate-800 text-white text-[12px] font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Top Up
                    </button>
                    <button
                      onClick={() => { setWalletDropdownOpen(false); setTopUpHistoryModalOpen(true) }}
                      className="flex-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[12px] font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5" /> History
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bell / Notification Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setNotificationPanelOpen(p => !p); setWalletDropdownOpen(false) }}
                className="w-11 h-11 rounded-full bg-white border border-slate-200/80 flex items-center justify-center hover:bg-slate-50 text-slate-600 hover:text-slate-800 relative transition-colors shadow-sm cursor-pointer"
              >
                <Bell className="w-[18px] h-[18px]" />
                {notifications.some(n => n.unread) && (
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
                )}
              </button>

              {notificationPanelOpen && (
                <div className="absolute top-full right-0 mt-2 w-[360px] bg-white rounded-2xl shadow-xl border border-slate-200/80 z-[200] overflow-hidden">
                  <div className="flex justify-between items-center px-5 pt-5 pb-3 border-b border-slate-100">
                    <span className="text-[15px] font-bold text-slate-800">Notifications</span>
                    <button
                      onClick={() => setNotifications(prev => prev.map(n => ({ ...n, unread: false })))}
                      className="text-[12px] font-semibold text-[#2563eb] hover:text-[#1d4ed8] cursor-pointer transition-colors"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="divide-y divide-slate-50 max-h-[400px] overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-5 py-4 transition-colors ${n.unread ? 'bg-blue-50/40' : 'bg-white hover:bg-slate-50'}`}
                      >
                        <p className="text-[13px] font-bold text-slate-800 mb-1">{n.title}</p>
                        <p className="text-[12px] text-slate-500 leading-relaxed">{n.text}</p>
                        <p className="text-[11px] text-slate-400 font-medium mt-2">{n.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Avatar Pill — hamburger visible only below lg */}
            <div
              className="flex items-center gap-2.5 bg-white border border-slate-100 rounded-full lg:pr-1.5 lg:pl-1.5 pr-1.5 pl-4 py-1 shadow-sm hover:shadow transition-all h-11 select-none"
            >
              {/* Hamburger — only on mobile/tablet */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileMenuOpen(!mobileMenuOpen)
                  setWalletDropdownOpen(false)
                  setNotificationPanelOpen(false)
                }}
                className="lg:hidden w-5 h-3 text-slate-700 shrink-0 flex items-center justify-center cursor-pointer focus:outline-none bg-transparent border-0"
              >
                <svg className="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="3" x2="18" y2="3" />
                  <line x1="2" y1="9" x2="18" y2="9" />
                </svg>
              </button>

              <div
                onClick={() => {
                  handleNav('profile')
                  setWalletDropdownOpen(false)
                  setNotificationPanelOpen(false)
                }}
                className="w-8 h-8 rounded-full overflow-hidden border border-slate-100 shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="User Profile"
                  width={34}
                  height={34}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Nav Drawer — visible only below lg */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f5f5f7] px-6 pb-4 flex flex-wrap gap-2 animate-fadeIn border-b border-slate-200/60">
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'vendors', label: 'Catalog' },
              { id: 'customers', label: 'Customers' },
              { id: 'orders', label: 'Orders' },
              { id: 'renewals', label: 'Renewals' },
              { id: 'profile', label: 'Profile' },
            ].map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as DashboardTab)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-500 border border-slate-200/80 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                    }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        )}

        {/* Content Area — no sidebar, full width */}
        <div className="flex-1 flex flex-col px-6 sm:px-10 py-0 overflow-y-auto min-h-0">

          {/* Right panel (dynamic depending on tab) */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 py-6 sm:py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {/* Tab 1: Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="flex-1 min-w-0 flex flex-col gap-7 animate-fadeIn">

                {/* ═══════════════════════════════════════════════ */}
                {/* TOP ROW: 3 cards side-by-side */}
                {/* ═══════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                  {/* ── Card 1: Blue Hero / Insights Card ── */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#818cf8] rounded-[28px] p-7 flex flex-col justify-between min-h-[320px] relative overflow-hidden shadow-lg text-left">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
                    <div className="absolute top-16 right-12 w-3 h-3 rounded-full bg-white/20" />
                    <div className="absolute top-8 right-32 w-2 h-2 rounded-full bg-white/30" />
                    <svg className="absolute bottom-16 left-8 w-20 h-20 text-white/10" viewBox="0 0 80 80"><circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" /></svg>

                    {/* Top badges */}
                    <div className="flex justify-between items-start relative z-10">
                      <span className="bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-white/10">
                        Findings
                      </span>
                      <button onClick={() => triggerToast('Exporting insights report...')} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom insight text */}
                    <div className="relative z-10 mt-auto">
                      <h2 className="text-white text-[22px] sm:text-[26px] font-bold leading-snug tracking-tight">
                        Your Order Volume has Increased by <span className="text-amber-300">12%</span> Since Last Quarter
                      </h2>
                    </div>
                  </div>

                  {/* ── Card 2: Total Orders ── */}
                  <div className="lg:col-span-4 bg-white rounded-[28px] p-7 flex flex-col justify-between min-h-[320px] shadow-sm border border-slate-100 text-left">
                    <div>
                      <h2 className="text-[17px] font-bold text-slate-800">Total Orders</h2>
                      <div className="flex items-center justify-between mt-3.5">
                        <span className="text-[44px] font-extrabold text-slate-900 leading-none tracking-tight">
                          897
                        </span>
                        <span className="bg-[#fdf2f4] text-[#f41b5d] text-[11px] font-black px-4 py-2 rounded-full">
                          All Orders
                        </span>
                      </div>
                    </div>

                    {/* Progress bars for each vendor */}
                    <div className="mt-5">
                      <div className="flex gap-1 items-center w-full">
                        <div className="h-[6px] bg-[#f97316] rounded-full min-w-[20px]" style={{ flex: '793 793 0%' }} />
                        <div className="h-[6px] bg-[#4285f4] rounded-full min-w-[12px]" style={{ flex: '95 95 0%' }} />
                        <div className="h-[6px] bg-[#94a3b8] rounded-full min-w-[7px]" style={{ flex: '9 9 0%' }} />
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 mt-3.5">
                        <div className="flex flex-col text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                            <span className="text-[12px] font-bold text-slate-700 leading-none">Microsoft</span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-450 mt-1.5 ml-3">793 orders</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4285f4] shrink-0" />
                            <span className="text-[12px] font-bold text-slate-700 leading-none">Google</span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-450 mt-1.5 ml-3">95 orders</span>
                        </div>

                        <div className="flex flex-col text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] shrink-0" />
                            <span className="text-[12px] font-bold text-slate-700 leading-none">Others</span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-450 mt-1.5 ml-3">9 orders</span>
                        </div>
                      </div>
                    </div>

                    {/* Order action section */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <p className="text-[13px] text-slate-700 font-bold mb-3">Quick order actions:</p>
                      <div className="flex items-center gap-2.5">
                        <button onClick={() => handleNav('orders')} className="flex items-center gap-2 border border-slate-200 rounded-full px-5 py-2.5 text-[12px] font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
                          <span>View Orders</span>
                          <FileText className="w-4 h-4 text-slate-500" />
                        </button>
                        <button onClick={() => handleNav('vendors')} className="flex items-center gap-2 border border-slate-200 rounded-full px-5 py-2.5 text-[12px] font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
                          <span>Place Order</span>
                          <ShoppingCart className="w-4 h-4 text-slate-500" />
                        </button>

                      </div>
                    </div>
                  </div>

                  {/* ── Card 3: Customer Management (Bar Chart) ── */}
                  <div className="lg:col-span-4 bg-white rounded-[28px] p-7 flex flex-col min-h-[320px] shadow-sm border border-slate-100 text-left">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-[17px] font-bold text-slate-800">Customer Management</h2>
                      <button
                        onClick={() => handleNav('customers')}
                        className="text-[12.5px] font-bold text-slate-400 hover:text-[#f41b5d] transition-colors cursor-pointer flex items-center gap-0.5"
                      >
                        <span>All Customers</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-[38px] font-extrabold text-slate-900 leading-none">569</span>
                    </div>
                    <p className="text-[12px] text-slate-400 font-medium mb-4">Total Customers</p>

                    {/* Weekly bar chart with separate top pills and bottom striped blocks */}
                    <div className="flex-1 flex items-end gap-2 mt-auto pb-1">
                      {[
                        { label: 'MS (Ind)', fullName: 'Microsoft (India)', value: 212, topH: 95 },
                        { label: 'MS (Glb)', fullName: 'Microsoft (Global)', value: 157, topH: 70 },
                        { label: 'Google', fullName: 'Google', value: 90, topH: 40 },
                        { label: 'Zoho', fullName: 'Zoho', value: 45, topH: 22 },
                        { label: 'AWS', fullName: 'AWS', value: 30, topH: 15 },
                        { label: 'Sophos', fullName: 'Sophos', value: 20, topH: 11 },
                        { label: 'Acronis', fullName: 'Acronis', value: 15, topH: 8 },
                      ].map((bar) => {
                        const isActive = activeCustomerBar === bar.label
                        return (
                          <div
                            key={bar.label}
                            className="flex-1 flex flex-col items-center group cursor-pointer"
                            onMouseEnter={() => setActiveCustomerBar(bar.label)}
                          >
                            {/* Variable-height Top Pill */}
                            <div className="w-full relative mb-1.5 flex flex-col justify-end" style={{ height: '110px' }}>
                              {isActive && (
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] whitespace-nowrap shadow-sm animate-fadeIn">
                                  {bar.value}
                                </div>
                              )}
                              <div
                                className={`w-full rounded-2xl relative transition-all duration-300 ${isActive ? 'bg-[#f97316] shadow-sm' : 'bg-[#eef2f6] hover:bg-[#e2e8f0]'
                                  }`}
                                style={{ height: `${bar.topH}px` }}
                              >
                                {/* Centered white dot near top of non-active pills */}
                                {!isActive && (
                                  <span className="absolute top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-90 shadow-sm" />
                                )}
                              </div>
                            </div>

                            {/* Constant-height Bottom Striped Box */}
                            <div className={`w-full h-11 rounded-[14px] border ${isActive ? 'border-[#f97316]/30' : 'border-slate-150'} relative overflow-hidden bg-slate-50 transition-all`}>
                              <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                  <pattern id={`stripe-pattern-${bar.label.replace(/[^a-zA-Z0-9]/g, '-')}`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="8" stroke={isActive ? "#f97316" : "#4a5568"} strokeWidth="2.2" />
                                  </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#stripe-pattern-${bar.label.replace(/[^a-zA-Z0-9]/g, '-')})`} />
                              </svg>
                            </div>

                            <span className={`text-[9px] font-bold mt-2.5 text-center leading-tight block select-none transition-colors ${isActive ? 'text-slate-900 font-extrabold' : 'text-slate-400'}`}>
                              {bar.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════ */}
                {/* BOTTOM ROW: Transaction History + Spending Overview */}
                {/* ═══════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                  {/* ── Transaction Activity Chart ── */}
                  <div className="lg:col-span-7 bg-white rounded-[28px] p-7 shadow-sm border border-slate-100 text-left relative flex flex-col justify-between min-h-[380px]">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <h2 className="text-[17px] font-bold text-slate-800 flex items-center gap-2">
                          <span>Transaction Activity</span>
                          <span className="bg-blue-50 text-[#2563eb] text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-[#2563eb] animate-ping" /> Live
                          </span>
                        </h2>
                        <p className="text-[12px] text-slate-400 font-medium mt-0.5">
                          Order volume and processing trends
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center flex-wrap gap-2.5 self-stretch sm:self-auto justify-between">
                        {/* Metric toggle */}
                        <div className="flex bg-slate-100 rounded-full p-0.5 border border-slate-200/50">
                          <button
                            onClick={() => setChartMetric('orders')}
                            className={`px-3 py-1.5 rounded-full text-[10.5px] font-bold transition-all cursor-pointer ${chartMetric === 'orders'
                                ? 'bg-white text-slate-800 shadow-xs'
                                : 'text-slate-500 hover:text-slate-800'
                              }`}
                          >
                            Orders
                          </button>
                          <button
                            onClick={() => setChartMetric('revenue')}
                            className={`px-3 py-1.5 rounded-full text-[10.5px] font-bold transition-all cursor-pointer ${chartMetric === 'revenue'
                                ? 'bg-white text-slate-800 shadow-xs'
                                : 'text-slate-500 hover:text-slate-800'
                              }`}
                          >
                            Revenue
                          </button>
                        </div>

                        {/* Timeframe selector */}
                        <div className="flex gap-1">
                          {(['week', 'month', 'year'] as const).map((range) => {
                            const isActive = chartTimeRange === range
                            const labels = { week: 'Week', month: 'Month', year: 'Year' }
                            return (
                              <button
                                key={range}
                                onClick={() => setChartTimeRange(range)}
                                className={`px-2.5 py-1.5 rounded-full text-[10.5px] font-bold transition-all cursor-pointer ${isActive
                                    ? 'bg-slate-950 text-white shadow-xs'
                                    : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-800 hover:border-slate-350 shadow-2xs'
                                  }`}
                              >
                                {labels[range]}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Stats summary row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-b border-slate-100 mb-3 mt-4">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Processed Vol</span>
                        <span className="text-[18px] font-extrabold text-slate-800 mt-0.5">{totalActiveOrders.toLocaleString()} Orders</span>
                        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {currentTrend.volTrend}
                        </span>
                      </div>
                      <div className="flex flex-col text-left border-l border-slate-100 pl-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Billing Amt</span>
                        <span className="text-[18px] font-extrabold text-slate-800 mt-0.5">
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalActiveRevenue)}
                        </span>
                        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {currentTrend.amtTrend}
                        </span>
                      </div>
                      <div className="flex flex-col text-left border-l border-slate-100 pl-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Success Rate</span>
                        <span className="text-[18px] font-extrabold text-slate-800 mt-0.5">{currentTrend.successRate}</span>
                        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {currentTrend.successDetail}
                        </span>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="relative flex-1 min-h-[190px] w-full select-none">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-fill-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="chart-stroke-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#4f46e5" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#818cf8" />
                          </linearGradient>
                        </defs>

                        {/* Horizontal grid lines */}
                        {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
                          const yVal = 160 - pct * 140
                          const labelVal = maxChartVal * pct
                          return (
                            <g key={idx} className="opacity-30">
                              <line
                                x1="35"
                                y1={yVal}
                                x2="475"
                                y2={yVal}
                                stroke="#cbd5e1"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                              />
                              <text
                                x="28"
                                y={yVal + 3.5}
                                textAnchor="end"
                                className="text-[9px] font-semibold fill-slate-400 font-mono"
                              >
                                {formatChartYLabel(labelVal)}
                              </text>
                            </g>
                          )
                        })}

                        {/* Area under the line */}
                        {chartAreaPath && (
                          <path
                            d={chartAreaPath}
                            fill="url(#chart-fill-grad)"
                            className="transition-all duration-500 ease-in-out"
                          />
                        )}

                        {/* Line itself */}
                        {chartLinePath && (
                          <path
                            d={chartLinePath}
                            fill="none"
                            stroke="url(#chart-stroke-grad)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 ease-in-out"
                          />
                        )}

                        {/* Data dots (always rendered but small, styled nicely) */}
                        {chartPoints.map((p, idx) => {
                          const isHovered = hoveredChartIndex === idx
                          return (
                            <g key={idx}>
                              <circle
                                cx={p.x}
                                cy={p.y}
                                r={isHovered ? "5" : "3.5"}
                                fill={isHovered ? "#ffffff" : "#6366f1"}
                                stroke="#6366f1"
                                strokeWidth={isHovered ? "3" : "1.5"}
                                className="transition-all duration-200"
                              />
                            </g>
                          )
                        })}

                        {/* X-axis text labels */}
                        {chartPoints.map((p, idx) => (
                          <text
                            key={idx}
                            x={p.x}
                            y="182"
                            textAnchor="middle"
                            className={`text-[9.5px] font-bold select-none transition-colors ${hoveredChartIndex === idx ? 'fill-slate-900 font-black' : 'fill-slate-400'
                              }`}
                          >
                            {p.label}
                          </text>
                        ))}

                        {/* Vertical line indicator and glowing dot overlay on hover */}


                        {/* Invisible interactive rectangular hover catchers */}
                        {chartPoints.map((p, idx) => {
                          const rectWidth = chartDx
                          const rectX = p.x - rectWidth / 2
                          return (
                            <rect
                              key={idx}
                              x={rectX}
                              y="15"
                              width={rectWidth}
                              height="155"
                              fill="transparent"
                              className="cursor-pointer"
                              onMouseEnter={() => setHoveredChartIndex(idx)}
                              onMouseLeave={() => setHoveredChartIndex(null)}
                            />
                          )
                        })}
                      </svg>

                      {/* Tooltip Popup */}
                      {hoveredChartIndex !== null && chartPoints[hoveredChartIndex] && (
                        <div
                          className="absolute bg-slate-950/95 backdrop-blur-md border border-slate-800 text-white rounded-xl p-3 shadow-xl pointer-events-none z-30 select-none animate-fadeIn flex flex-col gap-0.5 transition-all duration-75"
                          style={{
                            left: `${(chartPoints[hoveredChartIndex].x / 500) * 100}%`,
                            top: `${(chartPoints[hoveredChartIndex].y / 200) * 100}%`,
                            transform: 'translate(-50%, -125%)',
                          }}
                        >
                          <span className="text-[10px] font-bold text-slate-400 font-sans tracking-wide uppercase">
                            {chartPoints[hoveredChartIndex].date}
                          </span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                            <span className="text-[12.5px] font-extrabold font-sans">
                              {chartMetric === 'orders'
                                ? `${chartPoints[hoveredChartIndex].value} Orders`
                                : `$${chartPoints[hoveredChartIndex].value.toLocaleString('en-US')}`
                              }
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Products & Services (Brand Integrations) ── */}
                  <div className="lg:col-span-5 bg-white rounded-[28px] p-7 shadow-sm border border-slate-100 text-left flex flex-col justify-between min-h-[380px]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-[17px] font-bold text-slate-800">Products & Services</h2>
                        <p className="text-[12px] text-slate-400 font-medium mt-0.5">
                          Quick access to provision license subscriptions
                        </p>
                      </div>
                      <button
                        onClick={() => handleNav('vendors')}
                        className="text-[12.5px] font-bold text-slate-400 hover:text-[#2563eb] transition-colors cursor-pointer flex items-center gap-0.5 shrink-0"
                      >
                        <span>All Products</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 mt-2 flex-1 items-stretch">
                      {[
                        {
                          id: 'Microsoft',
                          name: 'Microsoft',
                          logo: renderVendorLogo('microsoft', 'w-5.5 h-5.5')
                        },
                        {
                          id: 'Google',
                          name: 'Google',
                          logo: renderVendorLogo('google', 'w-5.5 h-5.5')
                        },
                        {
                          id: 'Zoho',
                          name: 'Zoho',
                          logo: renderVendorLogo('zoho')
                        },
                        {
                          id: 'AWS',
                          name: 'AWS',
                          logo: renderVendorLogo('aws')
                        },
                        {
                          id: 'Red Hat',
                          name: 'Red Hat',
                          logo: renderVendorLogo('redhat')
                        },
                        {
                          id: 'Sophos',
                          name: 'Sophos',
                          logo: renderVendorLogo('sophos')
                        },
                        {
                          id: 'Acronis',
                          name: 'Acronis',
                          logo: renderVendorLogo('acronis')
                        },
                        {
                          id: 'Dropbox',
                          name: 'Dropbox',
                          logo: renderVendorLogo('dropbox')
                        }
                      ].map((brand) => (
                        <div
                          key={brand.id}
                          onClick={() => {
                            setShowcaseGroupFilter(brand.id)
                            setAppliedShowcaseFilters(prev => ({ ...prev, group: brand.id }))
                            handleNav('vendors')
                            triggerToast(`Browsing ${brand.id} products...`)
                          }}
                          className="flex items-center justify-center p-3.5 bg-white border border-slate-100 rounded-xl hover:-translate-y-0.5 hover:shadow-md hover:border-slate-200 active:scale-98 transition-all duration-200 cursor-pointer select-none"
                        >
                          <div className="flex flex-col items-center gap-2">
                            {brand.logo}
                            <span className="text-[11px] font-bold text-slate-600 tracking-tight leading-none">
                              {brand.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════════ */}
                {/* RECENT RENEWALS Section */}
                {/* ═══════════════════════════════════════════════ */}
                <div className="bg-white rounded-[28px] p-7 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1 text-left">
                      <h2 className="text-[17px] font-bold text-slate-800">Recent Renewals</h2>
                      <p className="text-[12px] text-slate-400 font-medium">Track and process upcoming license expirations</p>
                    </div>
                    <button
                      onClick={() => handleNav('renewals')}
                      className="text-[12px] font-semibold text-[#4f46e5] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto -mx-7 -mb-7">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/80 text-[11px] font-semibold text-slate-400 uppercase border-y border-slate-100">
                          <th className="py-3 px-7">End Customer</th>
                          <th className="py-3 px-5">Product Name</th>
                          <th className="py-3 px-5 text-center">Qty</th>
                          <th className="py-3 px-5">Amount</th>
                          <th className="py-3 px-5">End Date</th>
                          <th className="py-3 px-5">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-[13px] text-slate-600">
                        {[
                          { customer: 'qorenetworks', product: 'Microsoft 365 Business Basic', qty: 1, amount: '$ 22.31', endDate: '2026-06-01', status: 'Cancelled' },
                          { customer: 'unitedenergyconstruction.onmicrosoft.com', product: 'Exchange Online (Plan 1)', qty: 1, amount: 'Not Found', endDate: '2026-06-03', status: 'Cancelled' },
                          { customer: 'oilfieldsscenter.onmicrosoft.com', product: 'Exchange Online (Plan 2)', qty: 1, amount: 'Not Found', endDate: '2026-06-04', status: 'Cancelled' },
                          { customer: 'security360bd1', product: 'Microsoft 365 Business Basic', qty: 1, amount: '$ 22.31', endDate: '2026-06-20', status: 'Cancelled' },
                          { customer: 'rusbizrealestate.onmicrosoft.com', product: 'Microsoft 365 Business Standard', qty: 3, amount: 'Not Found', endDate: '2026-06-21', status: 'Cancelled' }
                        ].map((item, idx) => (
                          <tr key={idx} className={`hover:bg-slate-50/50 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/30' : 'bg-white'}`}>
                            <td className="py-3.5 px-7 text-slate-800 font-medium">{item.customer}</td>
                            <td className="py-3.5 px-5 text-slate-500">{item.product}</td>
                            <td className="py-3.5 px-5 text-center text-slate-500 font-medium">{item.qty}</td>
                            <td className="py-3.5 px-5 text-slate-650 font-medium">
                              {item.amount === 'Not Found' ? <span className="text-slate-400">Not Found</span> : item.amount}
                            </td>
                            <td className="py-3.5 px-5 text-slate-400 font-medium">{item.endDate}</td>
                            <td className="py-3.5 px-5 text-rose-500 font-semibold">{item.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Vendors/Showcase */}
            {activeTab === 'vendors' && (
              <div className="space-y-6 animate-fadeIn text-left">
                {/* Title Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">Products Showcase Catalog</h1>
                    <p className="text-xs text-slate-500 font-medium">Instantly provision and manage cloud subscriptions for customer tenants</p>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                    <span>Active Showcase Items:</span>
                    <span className="font-extrabold text-[#2563eb]">{filteredShowcaseProducts.length}</span>
                  </div>
                </div>

                {/* Filter Brand Row */}
                <div className="flex flex-wrap items-center gap-3 py-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">FILTER BRAND:</span>
                  {[
                    { id: 'All Groups', label: 'All Groups' },
                    { id: 'Microsoft', label: 'Microsoft' },
                    { id: 'Google', label: 'Google' },
                    { id: 'Zoho', label: 'Zoho' },
                    { id: 'AWS', label: 'AWS' },
                    { id: 'Red Hat', label: 'Red Hat' },
                    { id: 'Sophos', label: 'Sophos' },
                    { id: 'Acronis', label: 'Acronis' },
                    { id: 'Dropbox', label: 'Dropbox' }
                  ].map((btn) => {
                    const isActive = showcaseGroupFilter === btn.id
                    return (
                      <button
                        key={btn.id}
                        onClick={() => {
                          setShowcaseGroupFilter(btn.id)
                          setAppliedShowcaseFilters(prev => ({ ...prev, group: btn.id }))
                        }}
                        className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-250 cursor-pointer ${isActive
                          ? 'bg-slate-950 text-white shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-100 hover:text-slate-900 hover:border-slate-200 hover:bg-slate-50 shadow-sm'
                          }`}
                      >
                        {btn.label}
                      </button>
                    )
                  })}
                </div>

                {/* Product Search + Region Filter Card */}
                <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm flex flex-col md:flex-row gap-5 items-end justify-between">
                  {/* Name Search */}
                  <div className="w-full md:flex-1 text-left space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PRODUCT SEARCH</label>
                    <div className="relative w-full">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search catalog by name..."
                        value={showcaseNameFilter}
                        onChange={(e) => setShowcaseNameFilter(e.target.value)}
                        className="w-full bg-[#f8fafc]/60 border border-slate-200/50 rounded-xl py-3 pl-11 pr-4 text-xs font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Region Custom Dropdown */}
                  <div className="w-full md:w-48 text-left shrink-0">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">REGION</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setRegionDropdownOpen(prev => !prev)}
                        className="w-full flex items-center justify-between bg-[#f8fafc]/60 border border-slate-200/50 rounded-xl py-3 pl-4 pr-3.5 text-xs font-medium text-slate-800 hover:bg-white hover:border-slate-300 transition-all cursor-pointer"
                      >
                        <span>{showcaseRegionFilter}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${regionDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {regionDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200/80 rounded-xl shadow-lg z-50 overflow-hidden">
                          {['All Regions', 'Global', 'India'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setShowcaseRegionFilter(opt)
                                setAppliedShowcaseFilters(prev => ({ ...prev, region: opt }))
                                setRegionDropdownOpen(false)
                              }}
                              className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${showcaseRegionFilter === opt
                                ? 'bg-slate-950 text-white'
                                : 'text-slate-700 hover:bg-slate-50'
                                }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setAppliedShowcaseFilters({ name: showcaseNameFilter, group: showcaseGroupFilter, region: showcaseRegionFilter })}
                    className="w-full md:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-xl text-xs transition-all shadow-md active:scale-95 cursor-pointer text-center shrink-0"
                  >
                    Apply Filters
                  </button>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {filteredShowcaseProducts.map((p, idx) => {
                    // Custom SVG Logos for High Fidelity Design
                    let logoElem;
                    const vendorLogoKeys = ['microsoft', 'google', 'zoho', 'aws', 'redhat', 'sophos', 'acronis', 'dropbox'];
                    if (vendorLogoKeys.includes(p.logo.toLowerCase())) {
                      logoElem = (
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner p-2 select-none shrink-0">
                          {renderVendorLogo(p.logo)}
                        </div>
                      )
                    } else {
                      // Fallback stylized text circle
                      const initials = p.name.includes('Exchange') ? 'EX' : p.logo.substring(0, 2).toUpperCase()
                      logoElem = (
                        <div className="w-10 h-10 rounded-xl bg-slate-850 text-white flex items-center justify-center font-extrabold text-xs tracking-wider shadow-sm select-none shrink-0">
                          {initials}
                        </div>
                      )
                    }

                    // Product category label
                    let catLabel = 'CLOUD';
                    if (p.logo === 'microsoft') catLabel = p.name.includes('Exchange') ? 'EXCHANGE' : 'MICROSOFT 365';
                    else if (p.logo === 'google') catLabel = 'GOOGLE WORKSPACE';
                    else if (p.logo === 'zoho') catLabel = 'ZOHO MAIL';
                    else if (p.logo === 'sophos') catLabel = 'SECURITY';
                    else if (p.logo === 'acronis') catLabel = 'BACKUP';
                    else if (p.logo === 'redhat') catLabel = 'RED HAT';
                    else if (p.logo === 'aws') catLabel = 'AWS CLOUD';
                    else if (p.logo === 'dropbox') catLabel = 'DROPBOX';

                    return (
                      <div key={idx} className="bg-white rounded-[28px] p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[350px] text-left">
                        <div>
                          {/* Logo and Tag row */}
                          <div className="flex justify-between items-center mb-5.5">
                            {logoElem}
                            <span className="bg-[#f0f3f6] text-[#4f5d75] text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                              {catLabel}
                            </span>
                          </div>

                          {/* Product Title */}
                          <h3 className="text-[16px] font-extrabold text-slate-800 leading-snug mb-5 min-h-[46px] line-clamp-2">
                            {p.name}
                          </h3>

                          {/* Pricing Box */}
                          <div className="bg-[#f8fafc] rounded-2xl p-4.5 mb-6 text-left">
                            <div className="text-slate-400 line-through text-[11px] font-bold mb-1">
                              {p.priceStr}
                            </div>
                            <div className="text-[18px] font-black text-slate-800 tracking-tight mb-2">
                              {p.priceVal}
                            </div>
                            <span className="bg-[#eefcf4] text-[#10b981] text-[10px] font-extrabold px-2.5 py-1 rounded-full inline-block">
                              {p.discount}
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => {
                            setSelectedProductForPurchase(p)
                            setPurchaseModalOpen(true)
                          }}
                          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3.5 px-4 rounded-full text-[12px] transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                        >
                          Provision Subscription
                        </button>
                      </div>
                    )
                  })}
                </div>

                {filteredShowcaseProducts.length === 0 && (
                  <div className="bg-white rounded-2xl p-12 text-center text-slate-400 font-bold border border-slate-200/60 shadow-sm">
                    No products found matching the criteria.
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Customers */}
            {activeTab === 'customers' && (
              <div className="space-y-6 animate-fadeIn text-left">
                {/* Title & Add Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Indian Customer Tenants</h1>
                    <p className="text-xs text-slate-500 font-medium">Manage domain prefixes and email addresses for tenant billing groups</p>
                  </div>
                  <div className="relative group self-stretch sm:self-auto">
                    <button
                      onClick={() => setCreateCustomerModalOpen(true)}
                      className="w-full sm:w-auto bg-[#f41b5d] hover:bg-[#d0144d] text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all shadow-md shadow-[#f41b5d]/10 flex items-center justify-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
                    >
                      Create Account <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex gap-4 items-end">
                  <div className="flex-1 space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Domain Prefix</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by prefix (e.g. unionscaffolding)..."
                        value={customerPrefixFilter}
                        onChange={(e) => setCustomerPrefixFilter(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setAppliedCustomerFilters({ prefix: customerPrefixFilter })}
                    className="w-32 bg-slate-900 hover:bg-slate-850 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md"
                  >
                    Show
                  </button>
                </div>

                {/* Customers Table */}
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                          <th className="py-3.5 px-6 w-16 text-center">ID</th>
                          <th className="py-3.5 px-6">Name</th>
                          <th className="py-3.5 px-6">Domain Prefix</th>
                          <th className="py-3.5 px-6">Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                        {filteredCustomers.map((c) => (
                          <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6 text-center text-slate-400 font-bold">{c.id}</td>
                            <td className="py-4 px-6">
                              <button
                                onClick={() => {
                                  setAppliedRenewalFilters({ domain: c.email.split('@')[1], product: '' })
                                  handleNav('renewals')
                                }}
                                className="text-[#f41b5d] hover:underline font-extrabold cursor-pointer"
                              >
                                {c.name}
                              </button>
                            </td>
                            <td className="py-4 px-6 text-slate-500 font-mono">{c.domainPrefix}</td>
                            <td className="py-4 px-6">
                              <a href={`mailto:${c.email}`} className="text-emerald-600 hover:underline font-bold">
                                {c.email}
                              </a>
                            </td>
                          </tr>
                        ))}
                        {filteredCustomers.length === 0 && (
                          <tr>
                            <td colSpan={4} className="py-8 text-center text-slate-400 font-bold">
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

            {/* Tab 4: Orders */}
            {activeTab === 'orders' && (
              <div className="space-y-6 animate-fadeIn text-left">
                {/* Title Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h1 className="text-xl font-black text-slate-850 uppercase tracking-tight">Order List</h1>
                    <p className="text-xs text-slate-500 font-medium">Verify purchased billing transactions, provisioning status, and download PDF invoices</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                    <span>Total Orders Registered:</span>
                    <span className="font-extrabold text-[#f41b5d]">{filteredOrders.length}</span>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                  <div className="w-full sm:flex-1 space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Order ID</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by order ID..."
                        value={orderIdFilter}
                        onChange={(e) => setOrderIdFilter(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                    />
                  </div>

                  <button
                    onClick={() => setAppliedOrderFilters({ id: orderIdFilter, product: orderProductFilter })}
                    className="w-full sm:w-32 bg-slate-900 hover:bg-slate-850 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md"
                  >
                    Show
                  </button>
                </div>

                {/* Order Table */}
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                          <th className="py-3.5 px-6">Order ID</th>
                          <th className="py-3.5 px-6">Customer</th>
                          <th className="py-3.5 px-6">Product</th>
                          <th className="py-3.5 px-6 text-center">Quantity</th>
                          <th className="py-3.5 px-6 text-right">Total</th>
                          <th className="py-3.5 px-6 text-center">Date</th>
                          <th className="py-3.5 px-6 text-center">Status</th>
                          <th className="py-3.5 px-6 text-center">Invoice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                        {filteredOrders.map((o) => (
                          <tr key={o.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6 text-slate-400 font-mono text-[10px] max-w-[180px] truncate">{o.id}</td>
                            <td className="py-4 px-6 text-slate-700 font-bold">{o.customer}</td>
                            <td className="py-4 px-6 text-slate-800">{o.product}</td>
                            <td className="py-4 px-6 text-center font-bold text-slate-500">{o.quantity}</td>
                            <td className="py-4 px-6 text-right font-black text-[#f41b5d]">{o.total}</td>
                            <td className="py-4 px-6 text-center text-slate-400">{o.date}</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-[10px] font-bold ${o.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-rose-100 text-rose-700'
                                }`}>
                                {o.status === 'Active' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                {o.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button
                                onClick={() => triggerToast(`Downloading PDF Invoice for Order: ${o.id.substring(0, 12)}...`)}
                                className="bg-slate-50 hover:bg-[#fdf2f4]/60 text-slate-600 hover:text-[#f41b5d] p-1.5 rounded-lg border border-slate-200 hover:border-pink-200 transition-all flex items-center justify-center mx-auto cursor-pointer"
                              >
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredOrders.length === 0 && (
                          <tr>
                            <td colSpan={8} className="py-8 text-center text-slate-400 font-bold">
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

            {/* Tab 5: Renewals */}
            {activeTab === 'renewals' && (
              <div className="space-y-6 animate-fadeIn text-left">
                {/* Title Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Recent Renewals</h1>
                    <p className="text-xs text-slate-500 font-medium">Verify upcoming license expiration dates, review due periods, and initiate direct renewals</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                    <span>Critical (≤30 Days):</span>
                    <span className="font-extrabold text-rose-500">
                      {renewals.filter(r => r.dueDays <= 30).length}
                    </span>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                  <div className="w-full sm:flex-1 space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Domain Name</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by domain name (e.g. fajralmousa)..."
                        value={renewalDomainFilter}
                        onChange={(e) => setRenewalDomainFilter(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                    />
                  </div>

                  <button
                    onClick={() => setAppliedRenewalFilters({ domain: renewalDomainFilter, product: renewalProductFilter })}
                    className="w-full sm:w-32 bg-slate-900 hover:bg-slate-850 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md"
                  >
                    Show
                  </button>
                </div>

                {/* Renewals Table */}
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                          <th className="py-3.5 px-6">End Customer</th>
                          <th className="py-3.5 px-6">Product</th>
                          <th className="py-3.5 px-6 text-center">Quantity</th>
                          <th className="py-3.5 px-6 text-right">Amount</th>
                          <th className="py-3.5 px-6 text-center">End Date</th>
                          <th className="py-3.5 px-6 text-center">Due Days</th>
                          <th className="py-3.5 px-6 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                        {filteredRenewals.map((r, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-slate-50/50 transition-colors ${r.dueDays <= 30 ? 'bg-rose-50/30' : ''
                              }`}
                          >
                            <td className="py-4 px-6 font-bold text-slate-700">{r.customer}</td>
                            <td className="py-4 px-6 text-slate-800">{r.product}</td>
                            <td className="py-4 px-6 text-center font-bold text-slate-500">{r.quantity}</td>
                            <td className="py-4 px-6 text-right font-black text-emerald-600">{r.amount}</td>
                            <td className="py-4 px-6 text-center text-slate-500 font-bold">{r.endDate}</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block py-1 px-2.5 rounded-full text-[10px] font-extrabold ${r.dueDays <= 20
                                ? 'bg-rose-100 text-rose-700 animate-pulse'
                                : r.dueDays <= 30
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-emerald-100 text-emerald-700'
                                }`}>
                                {r.dueDays} Days
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleRenew(r.customer, r.product)}
                                  className="bg-[#f41b5d] hover:bg-[#d0144d] text-white py-1.5 px-4 rounded-xl text-[10px] font-bold transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 cursor-pointer"
                                >
                                  Renew
                                </button>
                                <button
                                  onClick={() => handleNotify(r.customer, r.product)}
                                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 py-1.5 px-4 rounded-xl text-[10px] font-bold border border-slate-200 transition-all hover:-translate-y-0.5 cursor-pointer"
                                >
                                  Notify
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {filteredRenewals.length === 0 && (
                          <tr>
                            <td colSpan={7} className="py-8 text-center text-slate-400 font-bold">
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

            {/* Tab 6: Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-fadeIn text-left max-w-6xl mx-auto pb-10">
                {/* Title and Hero Header Banner */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm">
                  {/* Background accent lines */}
                  <div className="absolute right-0 top-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#f41b5d]/5 blur-3xl pointer-events-none" />
                  <div className="absolute left-1/3 bottom-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                    {/* Large Avatar container with badge */}
                    <div className="relative shrink-0 group">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ring-1 ring-slate-100 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                          alt="User Profile"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="absolute bottom-0 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping absolute" />
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      </span>
                    </div>

                    {/* Profile Meta info */}
                    <div className="flex-1 text-center md:text-left space-y-2.5 pt-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                          <h2 className="text-xl font-black text-slate-800 tracking-tight capitalize">{profile.givenName} {profile.familyName}</h2>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white select-none">
                            Admin
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-bold tracking-wide flex items-center justify-center md:justify-start gap-1">
                          <Building className="w-3.5 h-3.5 text-slate-400" />
                          {profile.organization}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-[11px] font-semibold text-slate-500">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          {profile.email}
                        </span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {profile.phone}
                        </span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {profile.city}, {profile.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Grid Columns */}
                <form onSubmit={handleProfileSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  
                  {/* Left Column: Name Details, Address Info & Security */}
                  <div className="flex flex-col gap-6">
                    
                    {/* CARD 1: NAME DETAILS */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 shrink-0">
                          <User className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Name Details</h4>
                          <p className="text-[9px] text-slate-400 font-bold tracking-wide">Configure your personal and corporate identity details</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Given Name</label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              value={profile.givenName}
                              onChange={(e) => setProfile(prev => ({ ...prev, givenName: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Family Name</label>
                          <input
                            type="text"
                            value={profile.familyName}
                            onChange={(e) => setProfile(prev => ({ ...prev, familyName: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* CARD 2: ADDRESS INFO */}
                    <div className="flex-1 bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col gap-6">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Address Info</h4>
                          <p className="text-[9px] text-slate-400 font-bold tracking-wide">Manage your reseller organization physical address settings</p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Street Address</label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              value={profile.street}
                              onChange={(e) => setProfile(prev => ({ ...prev, street: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Country</label>
                            <input
                              type="text"
                              value={profile.country}
                              onChange={(e) => setProfile(prev => ({ ...prev, country: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>

                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">City</label>
                            <input
                              type="text"
                              value={profile.city}
                              onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Postal Code</label>
                          <input
                            type="text"
                            value={profile.postalCode}
                            onChange={(e) => setProfile(prev => ({ ...prev, postalCode: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* CARD 5: SECURITY (placed here for visual balance) */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 shrink-0">
                          <Lock className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Security</h4>
                          <p className="text-[9px] text-slate-400 font-bold tracking-wide">Manage account credentials and login policies</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Change Password</label>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-150/80 mt-1">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${profile.twoFA ? 'bg-[#fdf2f4] border border-pink-100 text-[#f41b5d]' : 'bg-slate-100 border border-slate-200 text-slate-400'}`}>
                            <Shield className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-xs font-extrabold text-slate-700">2FA Settings</p>
                            <p className="text-[9.5px] font-bold text-slate-400 mt-0.5 leading-tight">Secure logins with mobile code authorization</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setProfile(prev => ({ ...prev, twoFA: !prev.twoFA }))}
                            className={`w-10 h-6 rounded-full p-1 transition-all relative cursor-pointer border-0 outline-none flex items-center ${profile.twoFA ? 'bg-[#f41b5d]' : 'bg-slate-300'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all transform ${profile.twoFA ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Contact Details & Business Details */}
                  <div className="flex flex-col gap-6">
                    
                    {/* CARD 3: CONTACT DETAILS */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 shrink-0">
                          <Mail className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Contact Details</h4>
                          <p className="text-[9px] text-slate-400 font-bold tracking-wide">Email and mobile connectivity parameters</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2 text-left">
                          <div className="flex justify-between items-center">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                            <button
                              type="button"
                              onClick={() => setIsEditingEmail(!isEditingEmail)}
                              className="text-[10px] font-bold text-[#f41b5d] hover:text-[#d0144d] transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              {isEditingEmail ? 'Done' : 'Edit'}
                            </button>
                          </div>

                          {isEditingEmail ? (
                            <div className="relative">
                              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                              <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full bg-white border border-[#f41b5d]/40 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:ring-4 focus:ring-[#f41b5d]/10 transition-all duration-200"
                                required
                                autoFocus
                              />
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-755">
                              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="truncate">{profile.email}</span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              value={profile.phone}
                              onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 4: BUSINESS DETAILS */}
                    <div className="flex-1 bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 shrink-0">
                          <Building className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Business Details</h4>
                          <p className="text-[9px] text-slate-400 font-bold tracking-wide">Reseller business and organization info</p>
                        </div>
                      </div>

                      <div className="space-y-4">

                        {/* Partner Tier — read-only badge row */}
                        <div className="flex items-center justify-between py-2 px-4 bg-amber-50 border border-amber-100 rounded-2xl">
                          <div className="flex items-center gap-2">
                            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Partner Tier</span>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-700 border border-amber-200">
                            {profile.partnerTier}
                          </span>
                        </div>

                        {/* Organization Name */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Organization Name</label>
                          <div className="relative">
                            <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              value={profile.organization}
                              onChange={(e) => setProfile(prev => ({ ...prev, organization: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              required
                            />
                          </div>
                        </div>

                        {/* Business Type */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Business Type</label>
                          <div className="relative">
                            <Percent className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <select
                              value={profile.businessType}
                              onChange={(e) => setProfile(prev => ({ ...prev, businessType: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                            >
                              <option>Technology Reseller</option>
                              <option>Managed Service Provider</option>
                              <option>Cloud Distributor</option>
                              <option>IT Consultant</option>
                              <option>Value Added Reseller</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        {/* Tax / GST ID */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Tax / GST ID</label>
                          <div className="relative">
                            <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="text"
                              value={profile.taxId}
                              onChange={(e) => setProfile(prev => ({ ...prev, taxId: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              placeholder="e.g. GSTIN29AABCF1234L1ZV"
                            />
                          </div>
                        </div>

                        {/* Website */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Business Website</label>
                          <div className="relative">
                            <ArrowUpRight className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              type="url"
                              value={profile.website}
                              onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d] focus:ring-4 focus:ring-[#f41b5d]/5 focus:bg-white transition-all duration-200"
                              placeholder="https://yourcompany.com"
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Footer submit */}
                  <div className="lg:col-span-2 flex justify-end pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-56 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer text-xs"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Content-specific Scrollable Footer */}
            <div className="h-[2px] w-full bg-slate-200/50 mt-6" />
            <footer className="py-6 text-slate-400 text-[10px] font-bold flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left select-none">
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
                <span className="bg-slate-900 text-white font-black px-2 py-1 rounded text-[8px] tracking-wider select-none"><span className="text-[#f41b5d]">FEBNO</span> TECH</span>
              </div>
            </footer>

          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
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
                { id: 'vendors', icon: ShoppingBag, label: 'Catalog (Vendors)' },
                { id: 'customers', icon: Users, label: 'Customers' },
                { id: 'orders', icon: FileText, label: 'Orders' },
                { id: 'renewals', icon: Calendar, label: 'Renewals' },
                { id: 'profile', icon: User, label: 'Profile Settings' }
              ].map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => { handleNav(item.id as DashboardTab); setMobileMenuOpen(false); }}
                    className={`text-left text-xs font-bold py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${isActive
                      ? 'text-[#f41b5d] bg-[#fdf2f4]'
                      : 'text-slate-600 hover:text-[#f41b5d] hover:bg-slate-50'
                      }`}
                  >
                    {item.id === 'vendors' ? <ShoppingCart className="w-4.5 h-4.5" /> : <Icon className="w-4.5 h-4.5" />}
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
          <div className="bg-white w-full max-w-sm rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-indigo-700">
                <Wallet className="w-4.5 h-4.5" />
                <h3 className="text-sm font-extrabold">Top Up Wallet</h3>
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
                      className={`py-2 px-3 border rounded-xl font-extrabold text-xs transition-all ${topUpCurrency === curr
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 text-xs cursor-pointer"
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
          <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-900">
                <FileText className="w-4.5 h-4.5 text-[#f41b5d]" />
                <h3 className="text-sm font-extrabold">Top Up Transaction List</h3>
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
                  <div key={txn.id} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-[9px]">
                        IN
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-slate-800">{txn.id}</div>
                        <div className="text-[9px] font-semibold text-slate-400">{txn.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-emerald-600">
                        +{txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} {txn.currency}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 mt-0.5">{txn.status}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center gap-3">
              <button
                onClick={() => { setTopUpHistoryModalOpen(false); window.location.href = '/statement' }}
                className="flex items-center gap-1.5 text-[#2563eb] hover:text-[#1d4ed8] font-bold text-xs cursor-pointer transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Detailed Statement
              </button>
              <button
                onClick={() => setTopUpHistoryModalOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-xl transition-all text-xs cursor-pointer"
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
          <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#f41b5d]">
                <ShoppingCart className="w-4.5 h-4.5" />
                <h3 className="text-sm font-extrabold">Instant Subscription Checkout</h3>
              </div>
              <button onClick={() => setPurchaseModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handlePurchase} className="p-5 space-y-4">

              {/* Product Info Block */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-3 items-start text-left">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase text-[9px] shrink-0 select-none">
                  {selectedProductForPurchase.logo.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-805">{selectedProductForPurchase.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">{selectedProductForPurchase.group}</p>
                  <p className="text-xs text-[#f41b5d] font-black mt-2">{selectedProductForPurchase.priceVal}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Onmicrosoft Tenant Domain Prefix</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. clientdomain"
                    value={purchaseTenantDomain}
                    onChange={(e) => setPurchaseTenantDomain(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">.onmicrosoft.com</span>
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                  required
                />
              </div>

              {/* Cost summary */}
              <div className="bg-[#fdf2f4]/40 border border-pink-100 rounded-xl p-3 flex justify-between items-center text-xs font-semibold text-slate-600">
                <span>Total Charge:</span>
                <span className="text-[#f41b5d] font-black text-sm">
                  {selectedProductForPurchase.currency} {(selectedProductForPurchase.priceNum * purchaseQuantity).toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 rounded-xl transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 text-xs cursor-pointer"
              >
                Provision License Subscription
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
          <div className="bg-white w-full max-w-sm rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#f41b5d]">
                <Users className="w-4.5 h-4.5" />
                <h3 className="text-sm font-extrabold">Create Reseller Account</h3>
              </div>
              <button onClick={() => setCreateCustomerModalOpen(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomer} className="p-5 space-y-4">
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Customer/Tenant Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corporation"
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Domain Prefix</label>
                <input
                  type="text"
                  placeholder="e.g. acmecorp"
                  value={newCustomerDomain}
                  onChange={(e) => setNewCustomerDomain(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Admin Email</label>
                <input
                  type="email"
                  placeholder="e.g. admin@acmecorp.onmicrosoft.com"
                  value={newCustomerEmail}
                  onChange={(e) => setNewCustomerEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-2.5 rounded-xl transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 text-xs cursor-pointer"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
      {/* ======================================================== */}
      {/* USER AGREEMENT MODAL */}
      {/* ======================================================== */}
      {showAgreementModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative text-left">
            <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-800">
                <FileText className="w-4.5 h-4.5 text-[#f41b5d]" />
                <h3 className="text-sm font-extrabold">Reseller Program Terms & Conditions</h3>
              </div>
              <button onClick={() => setShowAgreementModal(false)} className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs text-slate-650 leading-relaxed font-sans font-semibold">
              <p className="text-slate-800 font-bold">Last updated: June 2026</p>
              <p>
                This Reseller Partnership Agreement ("Agreement") governs the relationship between Febno Technologies ("Company") and the reseller entity ("Reseller") utilizing the SaaS Order Dashboard.
              </p>
              <h4 className="font-extrabold text-slate-800 uppercase tracking-wider text-[10px] pt-2">1. Margin & Commission Structure</h4>
              <p>
                Reseller is entitled to a Gold partner discount of 20% on catalog subscription listings. All orders processed through the reseller client portal are billed at reseller wholesale rates.
              </p>
              <h4 className="font-extrabold text-slate-800 uppercase tracking-wider text-[10px] pt-2">2. API Usage & Security</h4>
              <p>
                Reseller API credentials must be secured. Any automated order provisioned via the API keys generated through this portal is the direct billing responsibility of the reseller tenant. Keys should be regenerated periodically.
              </p>
              <h4 className="font-extrabold text-slate-800 uppercase tracking-wider text-[10px] pt-2">3. Termination & Suspensions</h4>
              <p>
                Company reserves the right to suspend API credential access in the event of credit limits breaches or billing failures. Reseller accounts must remain in good standing to maintain active service margins.
              </p>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-end gap-2.5">
              <button
                onClick={() => setShowAgreementModal(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2 px-4 rounded-xl transition-all cursor-pointer text-xs"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

