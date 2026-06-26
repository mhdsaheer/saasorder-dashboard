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
  SlidersHorizontal
} from 'lucide-react'

// Tab type definition
export type DashboardTab = 'dashboard' | 'vendors' | 'customers' | 'orders' | 'renewals' | 'profile' | 'contact' | 'erp'

interface DashboardContainerProps {
  initialTab?: DashboardTab
}

export default function DashboardContainer({ initialTab = 'dashboard' }: DashboardContainerProps) {

  // Active Tab State
  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Tab-to-URL mapping for silent URL updates
  const tabToPath: Record<DashboardTab, string> = {
    dashboard: '/contact-us/profile',
    profile: '/contact-us/settings',
    renewals: '/contact-us/renewal',
    customers: '/microsoft-customers',
    orders: '/payment/order-list',
    vendors: '/products/showcase',
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
    { name: 'AWS Dedicated Instance Provisioning', group: 'AWS - Cloud', priceStr: '$0.010', priceVal: '$0.008/user/month', priceNum: 0.008, discount: '20.0% discount', logo: 'aws', currency: 'USD' }
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

  return (
    <div className="h-screen w-full bg-[#f4f7fa] text-slate-800 font-sans flex flex-col antialiased overflow-hidden">

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
      <div className="flex-1 bg-[#f4f7fa] flex flex-col overflow-hidden w-full relative">

        {/* Header */}
        <header className="border-b border-slate-200/40 bg-white/70 backdrop-blur-md py-4 px-6 sm:px-8 flex justify-between items-center z-50">
          {/* Logo */}
          <div className="select-none cursor-pointer text-left animate-fadeIn flex items-center" onClick={() => handleNav('dashboard')}>
            <Image
              src="/logo_03.png"
              alt="SaaS Order Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Date range filter capsules */}
          <div className="hidden md:flex items-center bg-slate-100/80 p-1 rounded-full border border-slate-200/30 text-xs font-bold text-slate-500 shadow-inner">
            {['Today', 'This Week', 'This Month', 'Reports'].map((tab) => (
              <button
                key={tab}
                onClick={() => triggerToast(`Filtering analytics by ${tab.toLowerCase()}...`)}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${tab === 'This Month' ? 'bg-slate-900 text-white shadow-sm' : 'hover:text-slate-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Profile & Icons */}
          <div className="flex items-center gap-4">
            {/* Small icons */}
            <div className="hidden sm:flex items-center gap-3 text-slate-400">
              <button onClick={() => triggerToast('Opening messages...')} className="w-8 h-8 rounded-full border border-slate-200/60 flex items-center justify-center hover:text-slate-800 hover:bg-slate-50 relative">
                <Mail className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
              </button>
              <button onClick={() => triggerToast('Opening notifications...')} className="w-8 h-8 rounded-full border border-slate-200/60 flex items-center justify-center hover:text-slate-800 hover:bg-slate-50 relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
              </button>
              <button onClick={() => triggerToast('System Health Status: OK')} className="w-8 h-8 rounded-full border border-slate-200/60 flex items-center justify-center hover:text-slate-800 hover:bg-slate-50">
                <AlertCircle className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200/60 flex items-center justify-center hover:text-slate-800 hover:bg-slate-50" onClick={() => handleNav('profile')}>
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-slate-200" />

            {/* User Avatar */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('profile')}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-white shadow-sm text-xs border border-white/20 select-none">
                AD
              </div>
              <div className="hidden xl:flex flex-col text-left leading-none">
                <span className="text-xs font-bold text-slate-800">Admin User</span>
                <span className="text-[9px] text-slate-400 font-bold mt-1">Reseller Manager</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Content Area with desktop sidebar and tab content */}
        <div className="flex-1 flex flex-col lg:flex-row px-6 sm:px-8 py-0 gap-8 overflow-y-auto lg:overflow-hidden min-h-0">

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col items-center bg-white border border-slate-200/50 rounded-[24px] py-6 px-3 shadow-sm gap-5 self-start sticky top-6 sm:top-8 my-6 sm:my-8 z-10">
            {[
              { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
              { id: 'vendors', icon: ShoppingCart, label: 'Catalog' },
              { id: 'customers', icon: Users, label: 'Customers' },
              { id: 'orders', icon: FileText, label: 'Orders' },
              { id: 'renewals', icon: Calendar, label: 'Renewals' },
              { id: 'profile', icon: User, label: 'Profile' }
            ].map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as DashboardTab)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all relative group cursor-pointer ${isActive
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  <Icon className="w-5 h-5" />

                  {/* Tooltip on hover */}
                  <span className="absolute left-16 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </aside>

          {/* Right panel (dynamic depending on tab) */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 lg:overflow-y-auto lg:h-full py-6 sm:py-8 lg:pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {/* Tab 1: Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="flex-1 min-w-0 flex flex-col gap-6 animate-fadeIn">
                {/* Search bar & Title Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1 text-left">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Manage and track your projects</h3>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">Project Dashboard</h1>
                  </div>
                  {/* Search bar */}
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Task, Meeting, Projects..."
                      onChange={(e) => triggerToast(`Searching for "${e.target.value}"...`)}
                      className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Grid layout in 3 columns: My Tasks (3/12), Middle Analytics (6/12), Right Panels (3/12) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                  {/* COLUMN 2 & 3: Main dashboard area (col-span-9) */}
                  <div className="lg:col-span-9 flex flex-col gap-6">

                    {/* TOP ROW: Wallet, Orders, Customer Management */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                      {/* Wallet Card */}
                      <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col justify-between h-[360px]">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Wallet className="w-4.5 h-4.5 text-slate-500" />
                            <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Wallet</h2>
                          </div>
                          <button
                            onClick={() => setTopUpHistoryModalOpen(true)}
                            className="text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Clock className="w-3 h-3" />
                            <span>History</span>
                          </button>
                        </div>

                        {/* Wallet balances grid/stack */}
                        <div className="space-y-3 flex-1 flex flex-col justify-center">
                          {[
                            { code: 'AED', symbol: 'د.إ', amount: wallet.AED, color: 'bg-sky-50 text-sky-600 border-sky-100', text: 'UAE Dirham' },
                            { code: 'INR', symbol: '₹', amount: wallet.INR, color: 'bg-violet-50 text-violet-600 border-violet-100', text: 'Indian Rupee' },
                            { code: 'USD', symbol: '$', amount: wallet.USD, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', text: 'US Dollar' },
                          ].map((item) => (
                            <div
                              key={item.code}
                              className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-100 hover:bg-slate-50 hover:border-slate-200/60 rounded-2xl transition-all duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-extrabold text-sm ${item.color}`}>
                                  {item.symbol}
                                </div>
                                <div className="text-left">
                                  <div className="text-xs font-black text-slate-800">{item.code}</div>
                                  <div className="text-[9px] font-semibold text-slate-400">{item.text}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-black text-slate-805">
                                  {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 ml-1.5">{item.code}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                          <button
                            onClick={() => setTopUpModalOpen(true)}
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 px-2 rounded-xl transition-all text-[11px] whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                          >
                            <Plus className="w-3.5 h-3.5 shrink-0" />
                            <span>Top Up</span>
                          </button>
                          <button
                            onClick={() => setTopUpHistoryModalOpen(true)}
                            className="border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold h-10 px-2 rounded-xl transition-all text-[11px] whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer hover:bg-slate-50"
                          >
                            <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>Top Up List</span>
                          </button>
                        </div>
                      </div>

                      {/* Orders Overview */}
                      <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col justify-between h-[360px]">
                        <div className="flex justify-between items-center mb-2">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">ORDERS</h2>
                          <button
                            onClick={() => handleNav('orders')}
                            className="text-[10px] font-black text-slate-400 hover:text-slate-805 flex items-center gap-1 cursor-pointer border border-slate-200/60 rounded-full px-2.5 py-1 hover:border-slate-300 transition-all uppercase tracking-wider bg-slate-50/50 hover:bg-slate-50"
                          >
                            <span>All Orders</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400" />
                          </button>
                        </div>

                        {/* Custom SVG Donut Chart */}
                        <div className="flex justify-center items-center py-2 relative">
                          <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 160 160">
                            {/* Base circle - background track */}
                            <circle cx="80" cy="80" r="60" fill="transparent" stroke="#f1f5f9" strokeWidth="14" />
                            {/* Microsoft: 793/897 = ~88.4% */}
                            <circle cx="80" cy="80" r="60" fill="transparent" stroke="#1b88e6" strokeWidth="14" strokeDasharray="333.3 377" strokeDashoffset="0" />
                            {/* Google: 95/897 = ~10.6% */}
                            <circle cx="80" cy="80" r="60" fill="transparent" stroke="#ff7f32" strokeWidth="14" strokeDasharray="39.9 377" strokeDashoffset="-333.3" />
                            {/* Others: 9/897 = ~1.0% */}
                            <circle cx="80" cy="80" r="60" fill="transparent" stroke="#8b5cf6" strokeWidth="14" strokeDasharray="3.8 377" strokeDashoffset="-373.2" />
                          </svg>
                          {/* Center total count */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider">ORDERS</span>
                            <span className="text-3xl font-black text-slate-805 mt-1.5">897</span>
                          </div>
                        </div>

                        {/* Legend in style of reference image */}
                        <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-slate-500">
                          <div className="flex justify-center gap-6">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff7f32]" />
                              <span>Google: <span className="text-slate-800 font-extrabold">95</span></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#1b88e6]" />
                              <span>Microsoft: <span className="text-slate-800 font-extrabold">793</span></span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />
                            <span>Others: <span className="text-slate-800 font-extrabold">9</span></span>
                          </div>
                        </div>
                      </div>

                      {/* Customer Management */}
                      <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col justify-between h-[360px] text-left">
                        <div className="flex justify-between items-center mb-1">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">CUSTOMER MANAGEMENT</h2>
                          <button
                            onClick={() => handleNav('customers')}
                            className="text-[10px] font-black text-slate-400 hover:text-slate-808 flex items-center gap-1 cursor-pointer border border-slate-200/60 rounded-full px-2.5 py-1 hover:border-slate-300 transition-all uppercase tracking-wider bg-slate-50/50 hover:bg-slate-50"
                          >
                            <span>All Customers</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400" />
                          </button>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">TOTAL CUSTOMERS</span>
                          <span className="text-3xl font-black text-slate-808 leading-none">459</span>
                        </div>

                        {/* Progress/Bar chart breakdown */}
                        <div className="space-y-4 mt-2">
                          {[
                            { label: 'Microsoft (India)', count: 212, pct: '46.2%', color: '#1b88e6' },
                            { label: 'Microsoft (Global)', count: 157, pct: '34.2%', color: '#8b5cf6' },
                            { label: 'Google', count: 90, pct: '19.6%', color: '#ff7f32' }
                          ].map((item) => (
                            <div key={item.label} className="space-y-1.5">
                              <div className="flex justify-between text-[11px] font-bold text-slate-700">
                                <span className="font-extrabold">{item.label}</span>
                                <span className="text-slate-900 font-black">{item.count}</span>
                              </div>
                              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full transition-all duration-500" style={{ width: item.pct, backgroundColor: item.color }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* PRODUCTS & SERVICES SECTION */}
                    <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4 text-left">
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">PRODUCTS & SERVICES</h2>
                          <p className="text-[10px] text-slate-400 font-semibold">Instantly provision and manage subscriptions across top cloud platforms</p>
                        </div>
                        <button
                          onClick={() => handleNav('vendors')}
                          className="text-[10px] font-black text-[#f41b5d] hover:text-[#d0144d] flex items-center gap-1 cursor-pointer border border-slate-200/60 rounded-full px-3 py-1 hover:border-[#f41b5d]/30 transition-all uppercase tracking-wider bg-slate-50/50 hover:bg-slate-50"
                        >
                          <span>Explore Catalog</span>
                          <ArrowUpRight className="w-3 h-3 text-[#f41b5d]" />
                        </button>
                      </div>

                      {/* Vendor Logos Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                        {[
                          {
                            name: 'Microsoft',
                            logo: (
                              <svg className="w-5 h-5 shrink-0 transition-all duration-300" viewBox="0 0 23 23" fill="none">
                                <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
                                <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
                                <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
                                <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
                              </svg>
                            ),
                            subText: '793 Licenses',
                            hoverClasses: 'group-hover/card:border-blue-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(0,120,212,0.12)]'
                          },
                          {
                            name: 'Google',
                            logo: (
                              <svg className="w-5 h-5 shrink-0 transition-all duration-300" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                              </svg>
                            ),
                            subText: '95 Licenses',
                            hoverClasses: 'group-hover/card:border-red-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(234,67,53,0.12)]'
                          },
                          {
                            name: 'Zoho',
                            logo: (
                              <div className="flex gap-0.5 shrink-0 items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-sm bg-[#E2231A]" />
                                <span className="w-1.5 h-1.5 rounded-sm bg-[#00A0E3]" />
                                <span className="w-1.5 h-1.5 rounded-sm bg-[#8dc63f]" />
                                <span className="w-1.5 h-1.5 rounded-sm bg-[#ffb900]" />
                              </div>
                            ),
                            subText: '12 Licenses',
                            hoverClasses: 'group-hover/card:border-purple-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(124,58,237,0.12)]'
                          },
                          {
                            name: 'AWS',
                            logo: (
                              <svg className="w-7 h-5 shrink-0 transition-all duration-300" viewBox="0 0 48 28" fill="none">
                                <path d="M20.2 14.1c0 2.2-1.3 3.6-3.4 3.6-1.5 0-2.6-.9-3-2.1h-.1v1.9h-2.1V7.9h2.2v3.7h.1c.4-1.2 1.5-2.1 3-2.1 2.1 0 3.3 1.4 3.3 4.6zm-2.3.1c0-1.8-.6-2.6-1.7-2.6-1.2 0-1.7.9-1.7 2.6 0 1.7.5 2.6 1.7 2.6 1.1-.1 1.7-.9 1.7-2.6zM28.4 12.2c0-1.2-.8-1.8-2.1-1.8-1.2 0-2.1.5-2.2 1.5h-2.1c.1-2.1 1.8-3.2 4.3-3.2 2.5 0 4.2 1.2 4.2 3.3v5.5c0 1.2.5 1.7.9 1.7.3 0 .6-.1.8-.2v1.7c-.4.2-1 .3-1.6.3-1.2 0-1.8-.7-2-1.8h-.1c-.6 1.1-1.8 2-3.3 2-2.1 0-3.6-1.2-3.6-3.2 0-2.2 1.7-3.1 4.7-3.1h2.1v-.7zm-2.1 2.4h-1.8c-1.5 0-2.2.4-2.2 1.3 0 .8.7 1.3 1.7 1.3 1.3 0 2.3-.9 2.3-2.1v-.5zM38.8 17.5c-.8.8-2 1.5-3.8 1.5-2.7 0-4.4-1.8-4.4-4.7 0-3.1 2-4.8 4.6-4.8 1.7 0 2.8.6 3.5 1.5l-1.4 1.3c-.5-.6-1.2-.9-2-.9-1.4 0-2.4 1-2.4 2.9 0 1.8.9 2.8 2.4 2.8.9 0 1.7-.4 2.2-1l1.3 1.4z" fill="#232F3E" />
                                <path d="M43.7 14.1c0 2.9-1.8 4.7-4.4 4.7s-4.4-1.8-4.4-4.7c0-3 1.8-4.8 4.4-4.8s4.4 1.8 4.4 4.8zm-6.5 0c0 1.9.9 2.9 2.1 2.9s2.1-1 2.1-2.9c0-1.9-.9-2.9-2.1-2.9s-2.1 1-2.1 2.9z" fill="#232F3E" />
                                <path d="M4 21c7.2 4.2 16.5 6.5 25.8 6.5 9 0 15.6-2 18.2-4.5.3-.3.1-.7-.3-.6-3.8 1.1-9.5 1.7-16.1 1.7-9.5 0-19.5-2.5-27.1-7.2-.4-.3-.8 0-.5.4z" fill="#FF9900" />
                                <path d="M44.9 21.6c-.3-.2-.5-.1-.4.2.2.8.4 2 .1 2.8-.1.3.1.5.4.3.8-.6 1.8-2.2 1.9-3.2.1-.3-.2-.3-.4-.2-.8.5-2 .7-3.1.7.3.2 1.1-.3 1.1-.6z" fill="#FF9900" />
                              </svg>
                            ),
                            subText: '4 Active',
                            hoverClasses: 'group-hover/card:border-amber-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(255,153,0,0.12)]'
                          },
                          {
                            name: 'Red Hat',
                            logo: (
                              <svg className="w-5 h-4 shrink-0 transition-all duration-300" viewBox="0 0 30 20" fill="none">
                                <path d="M15 2C11 2 8 4 6 7.5C5.3 8.7 5.1 9.8 5 11C7 11.5 10 11.8 13.5 11.8C18.5 11.8 22.5 11.2 24.5 10.5C24.4 8 23.5 6 21 4.2C19.5 3.1 17 2 15 2Z" fill="#231F20" />
                                <path d="M2.5 14C1 14 0 14.8 0 15.5C0 17 6.5 18 15 18C23.5 18 30 17 30 15.5C30 14.8 29 14 27.5 14C23.5 15.5 19.5 16 15 16C10.5 16 6.5 15.5 2.5 14Z" fill="#CC0000" />
                              </svg>
                            ),
                            subText: '6 Licenses',
                            hoverClasses: 'group-hover/card:border-red-600/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(227,24,55,0.12)]'
                          },
                          {
                            name: 'Sophos',
                            logo: (
                              <div className="text-[10px] font-black tracking-widest text-[#002f6c] dark:text-blue-900 leading-none select-none">SOPHOS</div>
                            ),
                            subText: '18 Endpoints',
                            hoverClasses: 'group-hover/card:border-cyan-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(0,184,230,0.12)]'
                          },
                          {
                            name: 'Acronis',
                            logo: (
                              <div className="text-[10px] font-black tracking-tight text-slate-800 leading-none select-none">Acronis</div>
                            ),
                            subText: '8 Backups',
                            hoverClasses: 'group-hover/card:border-sky-500/25 group-hover/card:shadow-[0_12px_24px_-6px_rgba(0,153,255,0.12)]'
                          }
                        ].map((vendor) => (
                          <div
                            key={vendor.name}
                            onClick={() => {
                              setShowcaseGroupFilter(vendor.name)
                              setAppliedShowcaseFilters({ name: '', group: vendor.name, region: 'All Regions' })
                              handleNav('vendors')
                              triggerToast(`Showing showcase products for ${vendor.name}`)
                            }}
                            className={`group/card cursor-pointer border border-slate-200/50 bg-slate-50/15 rounded-[20px] p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-slate-350/30 hover:shadow-lg ${vendor.hoverClasses}`}
                          >
                            {/* Logo square bubble */}
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-[0_2px_6px_rgba(15,23,42,0.01)] transition-all duration-300 group-hover/card:border-slate-200/50 group-hover/card:scale-105">
                              <div className="flex items-center justify-center grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300">
                                {vendor.logo}
                              </div>
                            </div>

                            {/* Vendor Labels */}
                            <div className="mt-3.5 space-y-0.5">
                              <span className="block text-xs font-black text-slate-800 tracking-tight group-hover/card:text-slate-900">{vendor.name}</span>
                              <span className="block text-[10px] font-bold text-slate-400 group-hover/card:text-slate-500 mt-0.5">{vendor.subText}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM ROW: Invoice Overview & Open Tickets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                      {/* Yearly Orders Chart (col-span-2) */}
                      <div className="md:col-span-2 bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4 text-left justify-between">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Yearly Orders</h2>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Select Year:</span>
                            <select
                              value={selectedYear}
                              onChange={(e) => {
                                setSelectedYear(e.target.value)
                                triggerToast(`Viewing orders for year ${e.target.value}`)
                              }}
                              className="bg-slate-50 border border-slate-200 rounded-xl py-1 px-3 text-xs text-slate-700 font-bold outline-none focus:border-[#f41b5d]/30 transition-all cursor-pointer shadow-sm"
                            >
                              <option value="2026">2026</option>
                              <option value="2025">2025</option>
                              <option value="2024">2024</option>
                            </select>
                          </div>
                        </div>

                        {/* Chart Subtitle & Legend */}
                        <div className="flex justify-between items-center text-xs font-bold text-slate-400 px-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-500 font-black">Order Bar Chart</span>
                            <span className="text-[10px] text-slate-400 font-medium">|</span>
                            <span className="text-[11px] text-slate-400 font-semibold">Total: <span className="text-slate-800 font-black">{yearlyOrdersData[selectedYear]?.reduce((acc, curr) => acc + curr.count, 0) || 0}</span></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-[#1b88e6] to-[#4ea8de]" />
                            <span className="text-slate-500">Orders</span>
                          </div>
                        </div>

                        {/* Chart Visualizer */}
                        <div className="flex-1 flex items-stretch gap-3 mt-2 h-44 relative">
                          {/* Y-Axis Labels */}
                          <div className="flex flex-col justify-between text-[9px] font-extrabold text-slate-400 select-none pb-5 text-right w-5">
                            <span>25</span>
                            <span>20</span>
                            <span>15</span>
                            <span>10</span>
                            <span>5</span>
                            <span>0</span>
                          </div>

                          {/* Chart Grid & Bars */}
                          <div className="flex-1 flex flex-col justify-between relative min-w-0">
                            {/* Horizontal Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
                              {[0, 1, 2, 3, 4, 5].map((idx) => (
                                <div key={idx} className="border-t border-slate-100/70 w-full h-0" />
                              ))}
                            </div>

                            {/* Columns container (standing on the baseline grid line) */}
                            <div className="flex-1 flex items-end justify-between relative z-10 px-2 pb-5">
                              {(yearlyOrdersData[selectedYear] || []).map((item, idx) => {
                                const heightPct = (item.count / 25) * 100
                                return (
                                  <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end relative group px-0.5 max-w-[40px]">
                                    {/* Tooltip */}
                                    <div className="absolute -top-9 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap flex flex-col items-center">
                                      <span>{item.count} Orders</span>
                                      <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 -mt-0.5" />
                                    </div>

                                    {/* Bar element */}
                                    <div
                                      style={{ height: `${heightPct}%` }}
                                      className={`w-full bg-gradient-to-t from-[#1b88e6] to-[#4ea8de] rounded-t-md transition-all duration-300 hover:scale-x-105 hover:from-[#f41b5d] hover:to-[#ff5c8a] cursor-pointer shadow-sm relative overflow-hidden`}
                                    >
                                      {/* Highlight glow effect on hover */}
                                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                  </div>
                                )
                              })}
                            </div>

                            {/* X-Axis labels */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[9px] font-extrabold text-slate-400 select-none font-sans">
                              {(yearlyOrdersData[selectedYear] || []).map((item, idx) => (
                                <div key={idx} className="flex-1 text-center max-w-[40px]">
                                  {item.month}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Open Tickets (col-span-1) */}
                      <div className="md:col-span-1 bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4 text-left">
                        <div className="flex justify-between items-center">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Open Tickets</h2>
                          <button onClick={() => triggerToast('Ticket Settings...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 cursor-pointer">
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Tickets List */}
                        <div className="flex flex-col gap-4">
                          {customers.slice(0, 3).map((cust, idx) => {
                            const names = ['Jacob Martinez', 'Luke Bell', 'Connor Mitchell']
                            const name = names[idx % names.length]
                            const avatarColors = [
                              'from-pink-400 to-indigo-500',
                              'from-teal-400 to-emerald-500',
                              'from-purple-400 to-indigo-500'
                            ]
                            const ac = avatarColors[idx % avatarColors.length]

                            return (
                              <div key={cust.id} className="flex gap-3 items-start border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${ac} flex items-center justify-center text-[10px] font-black text-white shadow-sm shrink-0`}>
                                  {name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1 min-w-0 space-y-1">
                                  <span className="text-xs font-black text-slate-800 block">{name}</span>
                                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                                    I need 3 more new features on the mobile app design for tenant <span className="font-bold text-slate-700">{cust.domainPrefix}</span>.
                                  </p>
                                  <button
                                    onClick={() => {
                                      setCustomerPrefixFilter(cust.domainPrefix)
                                      setAppliedCustomerFilters({ prefix: cust.domainPrefix })
                                      handleNav('customers')
                                    }}
                                    className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-750 px-4 py-1.5 rounded-xl text-[10px] font-bold transition-all inline-flex items-center gap-1 cursor-pointer shadow-sm mt-1"
                                  >
                                    <span>Check</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 1: Notifications (col-span-3) */}
                  <div className="lg:col-span-3 bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4">
                    {/* Notifications Header */}
                    <div className="flex justify-between items-center">
                      <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Notifications</h2>
                      <button onClick={() => triggerToast('Opening settings...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                        <Settings className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtabs */}
                    <div className="flex bg-slate-100 p-0.5 rounded-full text-[10px] font-bold text-slate-500 shadow-inner">
                      {(['All', 'Unread'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setActiveNotificationFilter(t)
                            triggerToast(`Showing ${t.toLowerCase()} notifications`)
                          }}
                          className={`flex-1 py-1.5 rounded-full transition-all cursor-pointer ${activeNotificationFilter === t ? 'bg-slate-900 text-white shadow-sm' : 'hover:text-slate-900'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* Dropdown status selection */}
                    {(() => {
                      const filteredNotifications = notifications.filter(n => activeNotificationFilter === 'Unread' ? n.unread : true)
                      return (
                        <>
                          <button className="flex items-center justify-between border border-slate-200 rounded-full px-3.5 py-1.5 text-[10px] font-bold text-slate-500 hover:bg-slate-50 transition-colors w-full">
                            <div className="flex items-center gap-1.5">
                              <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-black">
                                {filteredNotifications.length}
                              </span>
                              <span>Recent Notifications</span>
                            </div>
                            <ChevronDown className="w-3 h-3 text-slate-400" />
                          </button>

                          {/* Notifications List */}
                          <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 no-scrollbar">
                            {filteredNotifications.length === 0 ? (
                              <div className="text-center py-6 text-slate-400 text-xs font-semibold">
                                No unread notifications
                              </div>
                            ) : (
                              filteredNotifications.map((n) => {
                                const getColorsAndIcon = (type: string) => {
                                  if (type === 'exchange') {
                                    return {
                                      bg: 'bg-violet-50/40 border-violet-100/60',
                                      text: 'text-violet-900',
                                      logoBg: 'bg-violet-100 text-violet-600',
                                      icon: <Mail className="w-3.5 h-3.5" />
                                    }
                                  }
                                  // Default / microsoft
                                  return {
                                    bg: 'bg-blue-50/40 border-blue-100/60',
                                    text: 'text-blue-900',
                                    logoBg: 'bg-blue-100 text-blue-600',
                                    icon: (
                                      <svg className="w-3 h-3" viewBox="0 0 23 23" fill="none">
                                        <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
                                        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
                                        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
                                        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
                                      </svg>
                                    )
                                  }
                                }
                                const c = getColorsAndIcon(n.type)
                                return (
                                  <div key={n.id} className={`border rounded-2xl p-3.5 flex flex-col gap-3 text-left transition-all ${c.bg} relative group`}>
                                    {/* Top Header of Card */}
                                    <div className="flex justify-between items-center">
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shadow-sm ${c.logoBg}`}>
                                        {c.icon}
                                      </div>
                                      {n.unread && (
                                        <button
                                          onClick={() => {
                                            setNotifications(prev => prev.map(item => item.id === n.id ? { ...item, unread: false } : item))
                                            triggerToast(`Marked as read!`)
                                          }}
                                          className="w-5 h-5 rounded-full border border-slate-300 hover:border-emerald-500 text-slate-400 hover:text-emerald-500 transition-colors bg-white shadow-sm cursor-pointer flex items-center justify-center"
                                          title="Mark as read"
                                        >
                                          <Check className="w-3 h-3 stroke-[3]" />
                                        </button>
                                      )}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-1">
                                      <h4 className="text-xs font-black text-slate-800 leading-tight">{n.title}</h4>
                                      <p className="text-[10px] text-slate-500 leading-normal font-semibold">{n.text}</p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-[8px] font-bold text-slate-400">
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-2.5 h-2.5" />
                                        <span>{n.time}</span>
                                      </div>
                                      {n.unread && (
                                        <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-[7px] font-black uppercase tracking-wider">Unread</span>
                                      )}
                                    </div>
                                  </div>
                                )
                              })
                            )}
                          </div>
                        </>
                      )
                    })()}
                  </div>
                </div>

                {/* RECENT RENEWALS Section */}
                <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1 text-left">
                      <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">RECENT RENEWALS</h2>
                      <p className="text-[10px] text-slate-400 font-semibold">Track and process upcoming license expirations</p>
                    </div>
                    <button
                      onClick={() => handleNav('renewals')}
                      className="text-[10px] font-black text-[#f41b5d] uppercase tracking-wider hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Detailed Renewal List</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto -mx-5 -mb-5 border-t border-slate-100">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                          <th className="py-3.5 px-5">End Customer</th>
                          <th className="py-3.5 px-5">Product Name</th>
                          <th className="py-3.5 px-5 text-center">Qty</th>
                          <th className="py-3.5 px-5">Amount</th>
                          <th className="py-3.5 px-5">End Date</th>
                          <th className="py-3.5 px-5">Due Days</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-650">
                        {[
                          {
                            customer: 'qorenetworks',
                            product: 'Microsoft 365 Business Basic',
                            qty: 1,
                            amount: '$ 22.31',
                            endDate: '2026-06-01',
                            dueDays: 'Cancelled'
                          },
                          {
                            customer: 'unitedenergyconstruction.onmicrosoft.com',
                            product: 'Exchange Online (Plan 1)',
                            qty: 1,
                            amount: 'Not Found',
                            endDate: '2026-06-03',
                            dueDays: 'Cancelled'
                          },
                          {
                            customer: 'oilfieldsscenter.onmicrosoft.com',
                            product: 'Exchange Online (Plan 2)',
                            qty: 1,
                            amount: 'Not Found',
                            endDate: '2026-06-04',
                            dueDays: 'Cancelled'
                          },
                          {
                            customer: 'security360bd1',
                            product: 'Microsoft 365 Business Basic',
                            qty: 1,
                            amount: '$ 22.31',
                            endDate: '2026-06-20',
                            dueDays: 'Cancelled'
                          },
                          {
                            customer: 'rusbizrealestate.onmicrosoft.com',
                            product: 'Microsoft 365 Business Standard',
                            qty: 3,
                            amount: 'Not Found',
                            endDate: '2026-06-21',
                            dueDays: 'Cancelled'
                          }
                        ].map((item, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-slate-50/50 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/30' : 'bg-white'}`}
                          >
                            <td className="py-4 px-5 text-slate-800 font-bold">{item.customer}</td>
                            <td className="py-4 px-5 text-slate-600 font-medium">{item.product}</td>
                            <td className="py-4 px-5 text-center text-slate-500 font-bold">{item.qty}</td>
                            <td className="py-4 px-5 text-slate-700 font-bold">
                              {item.amount === 'Not Found' ? (
                                <span className="text-slate-400 font-semibold">Not Found</span>
                              ) : (
                                item.amount
                              )}
                            </td>
                            <td className="py-4 px-5 text-slate-400 font-bold">{item.endDate}</td>
                            <td className="py-4 px-5 text-[#f41b5d] font-black">{item.dueDays}</td>
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
                    <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Products Showcase</h1>
                    <p className="text-xs text-slate-500 font-medium">Provision premium licenses immediately across global regions</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-sm text-xs font-semibold text-slate-500">
                    <span>Active Showcase Items:</span>
                    <span className="font-extrabold text-[#f41b5d]">{filteredShowcaseProducts.length}</span>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-4 items-end">
                  <div className="w-full md:flex-1 space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Name</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by name..."
                        value={showcaseNameFilter}
                        onChange={(e) => setShowcaseNameFilter(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-850 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/30 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-56 space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Product Group</label>
                    <select
                      value={showcaseGroupFilter}
                      onChange={(e) => setShowcaseGroupFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-850 outline-none focus:border-[#f41b5d]/30 transition-all"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-855 outline-none focus:border-[#f41b5d]/30 transition-all"
                    >
                      <option value="All Regions">All Regions</option>
                      <option value="Global">Global</option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setAppliedShowcaseFilters({ name: showcaseNameFilter, group: showcaseGroupFilter, region: showcaseRegionFilter })}
                    className="w-full md:w-32 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-md"
                  >
                    Show
                  </button>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                          <th className="py-3.5 px-6">Product</th>
                          <th className="py-3.5 px-6">Name</th>
                          <th className="py-3.5 px-6">Product Group</th>
                          <th className="py-3.5 px-6 text-right">Price</th>
                          <th className="py-3.5 px-6 text-center">Purchase</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                        {filteredShowcaseProducts.map((p, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6">
                              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase text-[9px] shadow-sm select-none">
                                {p.logo.substring(0, 2)}
                              </div>
                            </td>
                            <td className="py-4 px-6 font-bold text-slate-800">{p.name}</td>
                            <td className="py-4 px-6 text-slate-400 font-bold">{p.group}</td>
                            <td className="py-4 px-6 text-right">
                              <div className="space-y-0.5">
                                <div className="text-slate-400 line-through text-[10px] font-semibold">{p.priceStr}</div>
                                <div className="text-slate-800 font-extrabold">{p.priceVal}</div>
                                <div className="text-emerald-600 font-extrabold text-[9px] bg-emerald-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">{p.discount}</div>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button
                                onClick={() => {
                                  setSelectedProductForPurchase(p)
                                  setPurchaseModalOpen(true)
                                }}
                                className="bg-[#f41b5d] hover:bg-[#d0144d] text-white py-2 px-5 rounded-xl font-bold transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 cursor-pointer"
                              >
                                Purchase
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredShowcaseProducts.length === 0 && (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-slate-400 font-bold">
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
              <div className="space-y-6 animate-fadeIn text-left">
                {/* Title Bar */}
                <div className="space-y-1">
                  <h1 className="text-xl font-black text-slate-850 uppercase tracking-tight">My Profile</h1>
                  <p className="text-xs text-slate-500 font-medium">Update account general details, billing address details, and security parameters</p>
                </div>

                {/* Profile Settings Box */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                  <form onSubmit={handleProfileSave} className="space-y-8">
                    {/* Form Columns Split by Line */}
                    <div className="grid gap-8 md:grid-cols-11 items-start">
                      {/* Left Column - General & Contact */}
                      <div className="md:col-span-5 space-y-5">
                        <h3 className="text-sm font-black tracking-wider uppercase text-slate-400 border-b border-slate-100 pb-2">General Details</h3>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Given Name</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                type="text"
                                value={profile.givenName}
                                onChange={(e) => setProfile(prev => ({ ...prev, givenName: e.target.value }))}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Family Name</label>
                            <input
                              type="text"
                              value={profile.familyName}
                              onChange={(e) => setProfile(prev => ({ ...prev, familyName: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-805 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="email"
                              value={profile.email}
                              onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              value={profile.phone}
                              onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="hidden md:flex justify-center md:col-span-1 h-64 self-center">
                        <div className="w-[1px] h-full bg-slate-200" />
                      </div>

                      {/* Right Column - Address & Company */}
                      <div className="md:col-span-5 space-y-5">
                        <h3 className="text-sm font-black tracking-wider uppercase text-slate-400 border-b border-slate-100 pb-2">Business & Address Info</h3>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Organization Name</label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              value={profile.organization}
                              onChange={(e) => setProfile(prev => ({ ...prev, organization: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Street Address</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              type="text"
                              value={profile.street}
                              onChange={(e) => setProfile(prev => ({ ...prev, street: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-1.5 text-left col-span-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">City</label>
                            <input
                              type="text"
                              value={profile.city}
                              onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>

                          <div className="space-y-1.5 text-left col-span-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Country</label>
                            <input
                              type="text"
                              value={profile.country}
                              onChange={(e) => setProfile(prev => ({ ...prev, country: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>

                          <div className="space-y-1.5 text-left col-span-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Postal Code</label>
                            <input
                              type="text"
                              value={profile.postalCode}
                              onChange={(e) => setProfile(prev => ({ ...prev, postalCode: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-slate-100 my-6" />

                    {/* Password change security section */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4 text-left">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Change Password</h4>
                        <div className="space-y-3">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">New Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Confirm New Password</label>
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-slate-850 outline-none focus:border-[#f41b5d]/50 focus:ring-1 focus:ring-[#f41b5d]/10 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 text-left flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Security & 2-Factor Authentication</h4>
                          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                            Add an extra layer of protection to your SaaSOrder Reseller Administrator session by toggling the authentication shield.
                          </p>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${profile.twoFA ? 'bg-emerald-50 border border-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-400'}`}>
                            <Shield className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-extrabold text-slate-700">Two-Factor Authentication (2FA)</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-0.5">Secure logins with mobile code authorization</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setProfile(prev => ({ ...prev, twoFA: !prev.twoFA }))}
                            className={`w-10 h-6 rounded-full p-1 transition-all relative ${profile.twoFA ? 'bg-[#f41b5d]' : 'bg-slate-300'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all transform ${profile.twoFA ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-64 bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-[#f41b5d]/10 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-sm"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
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

            <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end">
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
    </div>
  )
}

