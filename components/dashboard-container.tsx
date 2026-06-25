'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
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
  const router = useRouter()
  const pathname = usePathname()

  // Active Tab State
  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sync active tab with pathname changes
  useEffect(() => {
    if (pathname === '/' || pathname === '/contact-us/profile') {
      setActiveTab('dashboard')
    } else if (pathname === '/contact-us/settings') {
      setActiveTab('profile')
    } else if (pathname === '/contact-us/renewal') {
      setActiveTab('renewals')
    } else if (pathname === '/microsoft-customers') {
      setActiveTab('customers')
    } else if (pathname === '/payment/order-list') {
      setActiveTab('orders')
    } else if (pathname === '/products/showcase') {
      setActiveTab('vendors') // Mapping vendors to products showcase
    }
  }, [pathname])

  // Navigation action
  const handleNav = (tab: DashboardTab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
    if (tab === 'dashboard') {
      router.push('/contact-us/profile')
    } else if (tab === 'profile') {
      router.push('/contact-us/settings')
    } else if (tab === 'renewals') {
      router.push('/contact-us/renewal')
    } else if (tab === 'customers') {
      router.push('/microsoft-customers')
    } else if (tab === 'orders') {
      router.push('/payment/order-list')
    } else if (tab === 'vendors') {
      router.push('/products/showcase')
    }
  }

  // --- MOCK DATABASE STATE ---
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
    { id: 1, text: 'Invoice generated for order_44_943145...', time: '2 hours ago', unread: true },
    { id: 2, text: 'Microsoft subscription updated for union...', time: '5 hours ago', unread: true },
    { id: 3, text: 'Wallet balance low notification (USD)', time: '1 day ago', unread: false },
    { id: 4, text: 'Zoho license renewal notice for al-ain...', time: '2 days ago', unread: false }
  ])

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
    <div className="min-h-screen w-full bg-[#f4f7fa] text-slate-800 font-sans flex flex-col antialiased">
      
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
      <div className="flex-1 bg-[#f4f7fa] flex flex-col overflow-hidden w-full min-h-screen relative">
        
        {/* Header */}
        <header className="border-b border-slate-200/40 bg-white/70 backdrop-blur-md py-4 px-6 sm:px-8 flex justify-between items-center z-50">
          {/* Logo */}
          <div className="flex flex-col select-none cursor-pointer text-left animate-fadeIn" onClick={() => handleNav('dashboard')}>
            <span className="text-xl font-black tracking-tight text-slate-900">saasorder</span>
            <span className="text-[9px] uppercase tracking-widest font-extrabold text-slate-400 -mt-1 pl-0.5">studio.</span>
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
        <div className="flex-1 flex flex-col lg:flex-row p-6 sm:p-8 gap-8 overflow-y-auto min-h-0">
          
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col items-center bg-white border border-slate-200/50 rounded-[24px] py-6 px-3 shadow-sm gap-5 self-start sticky top-0 z-10">
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
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all relative group cursor-pointer ${
                    isActive 
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
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            
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
                  
                  {/* COLUMN 1: My Tasks (col-span-3) */}
                  <div className="lg:col-span-3 bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4">
                    {/* My Tasks Header */}
                    <div className="flex justify-between items-center">
                      <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">My Tasks</h2>
                      <button onClick={() => triggerToast('Creating a new task...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtabs */}
                    <div className="flex bg-slate-100 p-0.5 rounded-full text-[10px] font-bold text-slate-500 shadow-inner">
                      {['Today', 'Tomorrow'].map((t) => (
                        <button
                          key={t}
                          onClick={() => triggerToast(`Showing tasks for ${t.toLowerCase()}...`)}
                          className={`flex-1 py-1.5 rounded-full transition-all cursor-pointer ${t === 'Today' ? 'bg-slate-900 text-white shadow-sm' : 'hover:text-slate-900'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* Dropdown status selection */}
                    <button className="flex items-center justify-between border border-slate-200 rounded-full px-3.5 py-1.5 text-[10px] font-bold text-slate-500 hover:bg-slate-50 transition-colors w-full">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-black">{notifications.length}</span>
                        <span>On Going Tasks</span>
                      </div>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {/* Tasks List */}
                    <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1 no-scrollbar">
                      {notifications.map((n, idx) => {
                        // Map colors and icons in a gorgeous minimal style
                        const colors = [
                          { bg: 'bg-orange-50/40 border-orange-100/60', text: 'text-orange-850', logoBg: 'bg-orange-100/60 text-orange-600', icon: '🦊' },
                          { bg: 'bg-slate-50/65 border-slate-200/40', text: 'text-slate-850', logoBg: 'bg-slate-100 text-slate-600', icon: '🐙' },
                          { bg: 'bg-pink-50/40 border-pink-100/60', text: 'text-pink-850', logoBg: 'bg-pink-100/60 text-pink-600', icon: '9' },
                          { bg: 'bg-emerald-50/40 border-emerald-100/60', text: 'text-emerald-850', logoBg: 'bg-emerald-100/60 text-emerald-600', icon: 'U' }
                        ]
                        const c = colors[idx % colors.length]
                        return (
                          <div key={n.id} className={`border rounded-2xl p-3.5 flex flex-col gap-3 text-left transition-all ${c.bg} relative group`}>
                            {/* Top Header of Card */}
                            <div className="flex justify-between items-center">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shadow-sm ${c.logoBg}`}>
                                {c.icon}
                              </div>
                              <button 
                                onClick={() => triggerToast(`Task completed!`)}
                                className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-colors bg-white shadow-sm cursor-pointer"
                              >
                                <Check className="w-3 h-3 stroke-[3]" />
                              </button>
                            </div>

                            {/* Content */}
                            <div className="space-y-1">
                              <h4 className="text-xs font-black text-slate-855 leading-tight">{n.text.split(' ')[0]} - Update</h4>
                              <p className="text-[10px] text-slate-500 leading-normal font-semibold line-clamp-2">{n.text}</p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{n.time}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* COLUMN 2: Middle Analytics (col-span-6) */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    {/* Top Grid: Projects Overview & Income VS Expense */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Projects Overview */}
                      <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-2">
                          <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Projects Overview</h2>
                          <button onClick={() => triggerToast('Opening project logs...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 cursor-pointer">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Custom SVG Donut Chart */}
                        <div className="flex justify-center items-center py-4 relative">
                          <svg className="w-32 h-32 transform -rotate-90">
                            {/* Base circle - Others (purple) */}
                            <circle cx="64" cy="64" r="48" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                            {/* Others: 9/897 = ~1.0% */}
                            <circle cx="64" cy="64" r="48" fill="transparent" stroke="#8b5cf6" strokeWidth="12" strokeDasharray="301.6" strokeDashoffset="0" />
                            {/* Google: 95/897 = ~10.6% (stroke-dashoffset: 301.6 * (1 - 0.106) = 269.6) */}
                            <circle cx="64" cy="64" r="48" fill="transparent" stroke="#ff7f32" strokeWidth="12" strokeDasharray="301.6" strokeDashoffset="269.6" />
                            {/* Microsoft: 793/897 = ~88.4% (stroke-dashoffset: 301.6 * (1 - 0.884 - 0.106) = 301.6 * 0.01 = 3.0) */}
                            <circle cx="64" cy="64" r="48" fill="transparent" stroke="#1b88e6" strokeWidth="12" strokeDasharray="301.6" strokeDashoffset="33.0" />
                          </svg>
                          {/* Center total count */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                            <span className="text-[9px] font-bold text-slate-400 tracking-wider">TOTAL</span>
                            <span className="text-2xl font-black text-slate-800 mt-1">897</span>
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

                      {/* Income VS Expense */}
                      {/* Wallet Card */}
                      <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col justify-between min-h-[300px]">
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
                        <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-100">
                          <button 
                            onClick={() => setTopUpModalOpen(true)}
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Top Up</span>
                          </button>
                          <button 
                            onClick={() => setTopUpHistoryModalOpen(true)}
                            className="border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold py-2 px-3 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:bg-slate-50"
                          >
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
                            <span>Top Up List</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Overview */}
                    <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4 text-left">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">Invoice Overview</h2>
                        <button onClick={() => triggerToast('Invoice settings...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 cursor-pointer">
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Progress bars list */}
                      <div className="space-y-4">
                        {[
                          { label: 'Overdue', color: 'bg-purple-600', fill: 'w-[60%]', count: 5, amount: 18300 },
                          { label: 'Not Paid', color: 'bg-rose-500', fill: 'w-[50%]', count: 5, amount: 18300 },
                          { label: 'Partially Paid', color: 'bg-sky-400', fill: 'w-[40%]', count: 5, amount: 18300 },
                          { label: 'Fully Paid', color: 'bg-emerald-500', fill: 'w-[35%]', count: 5, amount: 18300 },
                          { label: 'Draft', color: 'bg-amber-400', fill: 'w-[15%]', count: 5, amount: 18300 }
                        ].map((item) => (
                          <div key={item.label} className="space-y-1.5">
                            <div className="flex justify-between text-[10px] font-bold text-slate-700">
                              <span className="font-extrabold">{item.label}</span>
                              <span className="text-slate-400 font-semibold">
                                {item.count} <span className="mx-1 text-slate-300">|</span> USD {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${item.color} ${item.fill}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 3: Right Panels (col-span-3) */}
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* My Meetings */}
                    <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xs font-black text-slate-500 uppercase tracking-wider">My Meetings</h2>
                        <button onClick={() => triggerToast('Opening Calendar...')} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 cursor-pointer">
                          <Calendar className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Meetings List */}
                      <div className="flex flex-col gap-3">
                        {renewals.slice(0, 2).map((item, idx) => {
                          const isMicrosoft = item.product.toLowerCase().includes('microsoft')
                          return (
                            <div 
                              key={idx} 
                              onClick={() => {
                                setRenewalDomainFilter(item.customer)
                                setAppliedRenewalFilters({ domain: item.customer, product: '' })
                                handleNav('renewals')
                              }}
                              className="border border-slate-100 bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-4 flex flex-col gap-3 transition-all hover:scale-[1.01] cursor-pointer"
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">My Meetings</span>
                                  <span className="text-xs font-black text-slate-800 truncate max-w-[120px]">{item.customer.split('.')[0]}</span>
                                </div>
                                <button className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 cursor-pointer">
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                <div className="flex items-center gap-1.5 text-slate-500">
                                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                                  <span>{item.dueDays} Days Due</span>
                                </div>
                                
                                <div className="flex items-center gap-1.5 text-slate-500">
                                  <span className={`w-2 h-2 rounded-full ${isMicrosoft ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                                  <span>{isMicrosoft ? 'Meet' : 'Zoom'}</span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* See All Meetings */}
                      <button onClick={() => handleNav('renewals')} className="text-[10px] font-black text-slate-500 hover:text-slate-850 text-left mt-1 cursor-pointer">
                        See All Meetings &gt;
                      </button>
                    </div>

                    {/* Open Tickets */}
                    <div className="bg-white border border-slate-200/50 rounded-[24px] p-5 shadow-sm flex flex-col gap-4 text-left">
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
              <div className="flex flex-col text-left">
                <span className="text-lg font-black tracking-tight text-slate-900">saasorder</span>
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-slate-400 -mt-1 pl-0.5">studio.</span>
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
                    className={`text-left text-xs font-bold py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center gap-3 ${
                      isActive
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

