'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import {
  ArrowLeft,
  Download,
  FileText,
  ChevronDown,
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar,
  Filter,
} from 'lucide-react'

// ── Mock Data ──────────────────────────────────────────────────────────────
const ALL_TRANSACTIONS = [
  { id: 'TXN-9023', type: 'topup',    description: 'Wallet Top-Up',                     amount: 100.00,   currency: 'USD', date: '2026-06-20', status: 'Success' },
  { id: 'TXN-8492', type: 'topup',    description: 'Wallet Top-Up',                     amount: 5000.00,  currency: 'INR', date: '2026-06-18', status: 'Success' },
  { id: 'TXN-7123', type: 'topup',    description: 'Wallet Top-Up',                     amount: 150.00,   currency: 'AED', date: '2026-06-12', status: 'Success' },
  { id: 'ORD-943145', type: 'charge', description: 'Microsoft 365 Business Basic – IN', amount: -17.64,   currency: 'USD', date: '2026-06-22', status: 'Completed' },
  { id: 'ORD-142392', type: 'charge', description: 'Microsoft 365 Business Basic – IN', amount: -18.44,   currency: 'USD', date: '2026-06-19', status: 'Completed' },
  { id: 'ORD-345213', type: 'charge', description: 'Google Workspace Business Starter',  amount: -30.00,   currency: 'USD', date: '2026-06-15', status: 'Completed' },
  { id: 'ORD-239487', type: 'charge', description: 'Zoho Mail – Lite',                  amount: -36.67,   currency: 'AED', date: '2026-06-10', status: 'Suspended' },
  { id: 'TXN-6811', type: 'topup',    description: 'Wallet Top-Up',                     amount: 200.00,   currency: 'USD', date: '2026-05-30', status: 'Success' },
  { id: 'ORD-881234', type: 'charge', description: 'Exchange Online Archiving',          amount: -12.00,   currency: 'USD', date: '2026-05-25', status: 'Completed' },
  { id: 'TXN-5500', type: 'topup',    description: 'Wallet Top-Up',                     amount: 3000.00,  currency: 'INR', date: '2026-05-20', status: 'Success' },
]

const CURRENCIES = ['All', 'USD', 'INR', 'AED']
const TYPES      = ['All', 'Top-Up', 'Charge']

// ── Helpers ────────────────────────────────────────────────────────────────
function fmtAmount(amount: number, currency: string) {
  const abs = Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const sym = currency === 'INR' ? '₹' : currency
  return `${sym} ${abs}`
}

function exportCSV(rows: typeof ALL_TRANSACTIONS) {
  const header = 'ID,Type,Description,Amount,Currency,Date,Status\n'
  const body = rows.map(r =>
    `${r.id},${r.type},${r.description},${r.amount},${r.currency},${r.date},${r.status}`
  ).join('\n')
  const blob = new Blob([header + body], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = 'account_statement.csv'; a.click()
  URL.revokeObjectURL(url)
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function StatementPage() {
  const [search,       setSearch]       = useState('')
  const [currency,     setCurrency]     = useState('All')
  const [txType,       setTxType]       = useState('All')
  const [dateFrom,     setDateFrom]     = useState('')
  const [dateTo,       setDateTo]       = useState('')
  const [currOpen,     setCurrOpen]     = useState(false)
  const [typeOpen,     setTypeOpen]     = useState(false)

  const filtered = useMemo(() => {
    return ALL_TRANSACTIONS.filter(t => {
      const matchSearch   = t.description.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase())
      const matchCurrency = currency === 'All' || t.currency === currency
      const matchType     = txType === 'All' ||
        (txType === 'Top-Up' && t.type === 'topup') ||
        (txType === 'Charge' && t.type === 'charge')
      const matchFrom     = !dateFrom || t.date >= dateFrom
      const matchTo       = !dateTo   || t.date <= dateTo
      return matchSearch && matchCurrency && matchType && matchFrom && matchTo
    })
  }, [search, currency, txType, dateFrom, dateTo])

  const totalIn  = filtered.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)
  const totalOut = filtered.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0)
  const net      = totalIn - totalOut

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans antialiased">

      {/* ── Header ── */}
      <header className="bg-[#f5f5f7] px-6 sm:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-[18px] font-bold text-slate-800 leading-tight">Account Statement</h1>
            <p className="text-[12px] text-slate-400 font-medium">Full transaction ledger · Reseller Wallet</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => exportCSV(filtered)}
            className="flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[12px] font-bold px-4 py-2.5 rounded-full transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
          <div
            onClick={() => window.location.href = '/dashboard'}
            className="cursor-pointer select-none"
          >
            <Image src="/logo_03.png" alt="Logo" width={110} height={36} className="h-8 w-auto object-contain" />
          </div>
        </div>
      </header>

      {/* ── Summary Cards ── */}
      <div className="px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {[
          { label: 'Total Credits',  value: `+ USD ${totalIn.toFixed(2)}`,  sub: `${filtered.filter(t => t.amount > 0).length} transactions`,  color: 'text-emerald-600', bg: 'bg-emerald-50', icon: ArrowDownLeft },
          { label: 'Total Debits',   value: `− USD ${totalOut.toFixed(2)}`, sub: `${filtered.filter(t => t.amount < 0).length} transactions`,  color: 'text-rose-500',    bg: 'bg-rose-50',    icon: ArrowUpRight   },
          { label: 'Net Balance',    value: `USD ${net.toFixed(2)}`,        sub: `${filtered.length} total records`,                           color: net >= 0 ? 'text-[#2563eb]' : 'text-rose-500', bg: 'bg-blue-50', icon: FileText },
        ].map(({ label, value, sub, color, bg, icon: Icon }) => (
          <div key={label} className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
              <p className={`text-[18px] font-extrabold leading-none ${color}`}>{value}</p>
              <p className="text-[11px] text-slate-400 font-medium mt-1">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filter Bar ── */}
      <div className="px-6 sm:px-10 mb-6">
        <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-end">

          {/* Search */}
          <div className="flex-1 text-left space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Search</label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by ID or description..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-slate-50/60 border border-slate-200/50 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Date From */}
          <div className="w-full md:w-40 text-left space-y-1.5 shrink-0">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">From</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="date"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
                className="w-full bg-slate-50/60 border border-slate-200/50 rounded-xl py-3 pl-9 pr-3 text-xs font-medium text-slate-800 outline-none focus:border-slate-300 focus:bg-white transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Date To */}
          <div className="w-full md:w-40 text-left space-y-1.5 shrink-0">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">To</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="date"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
                className="w-full bg-slate-50/60 border border-slate-200/50 rounded-xl py-3 pl-9 pr-3 text-xs font-medium text-slate-800 outline-none focus:border-slate-300 focus:bg-white transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="w-full md:w-36 text-left shrink-0">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Currency</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => { setCurrOpen(p => !p); setTypeOpen(false) }}
                className="w-full flex items-center justify-between bg-slate-50/60 border border-slate-200/50 rounded-xl py-3 pl-4 pr-3.5 text-xs font-medium text-slate-800 hover:bg-white hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>{currency}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${currOpen ? 'rotate-180' : ''}`} />
              </button>
              {currOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200/80 rounded-xl shadow-lg z-50 overflow-hidden">
                  {CURRENCIES.map(c => (
                    <button key={c} type="button" onClick={() => { setCurrency(c); setCurrOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${currency === c ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
                    >{c}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Type Dropdown */}
          <div className="w-full md:w-36 text-left shrink-0">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Type</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => { setTypeOpen(p => !p); setCurrOpen(false) }}
                className="w-full flex items-center justify-between bg-slate-50/60 border border-slate-200/50 rounded-xl py-3 pl-4 pr-3.5 text-xs font-medium text-slate-800 hover:bg-white hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>{txType}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${typeOpen ? 'rotate-180' : ''}`} />
              </button>
              {typeOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200/80 rounded-xl shadow-lg z-50 overflow-hidden">
                  {TYPES.map(t => (
                    <button key={t} type="button" onClick={() => { setTxType(t); setTypeOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${txType === t ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
                    >{t}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Clear */}
          {(search || currency !== 'All' || txType !== 'All' || dateFrom || dateTo) && (
            <button
              onClick={() => { setSearch(''); setCurrency('All'); setTxType('All'); setDateFrom(''); setDateTo('') }}
              className="w-full md:w-auto bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs py-3 px-5 rounded-xl transition-all cursor-pointer shrink-0"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ── Transaction Table ── */}
      <div className="px-6 sm:px-10 pb-12">
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{filtered.length} records</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              Generated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="py-3.5 px-6">Transaction ID</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Description</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Amount</th>
                  <th className="py-3.5 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-slate-400 text-sm font-semibold">
                      No transactions match the selected filters.
                    </td>
                  </tr>
                ) : filtered.map((txn) => {
                  const isCredit = txn.amount > 0
                  return (
                    <tr key={txn.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCredit ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                            {isCredit
                              ? <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600" />
                              : <ArrowUpRight  className="w-3.5 h-3.5 text-rose-500" />
                            }
                          </div>
                          <span className="text-[12px] font-bold text-slate-700 font-mono">{txn.id}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${isCredit ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>
                          {isCredit ? 'Top-Up' : 'Charge'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[12px] text-slate-600 font-medium max-w-[220px] truncate">{txn.description}</td>
                      <td className="py-4 px-4 text-[12px] text-slate-400 font-medium whitespace-nowrap">{txn.date}</td>
                      <td className={`py-4 px-4 text-right text-[13px] font-extrabold whitespace-nowrap ${isCredit ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {isCredit ? '+' : '−'}{fmtAmount(txn.amount, txn.currency)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          txn.status === 'Success'   ? 'bg-emerald-50 text-emerald-600' :
                          txn.status === 'Completed' ? 'bg-blue-50 text-blue-600'      :
                                                       'bg-amber-50 text-amber-600'
                        }`}>{txn.status}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
