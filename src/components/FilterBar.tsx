'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface FilterBarProps {
  brands: string[]
  bodyTypes: string[]
}

const FilterBar: React.FC<FilterBarProps> = ({ brands = [], bodyTypes = [] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Local state for filters
  const [brand, setBrand] = useState(searchParams.get('brand') || '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '')
  const [year, setYear] = useState(searchParams.get('year') || '')
  const [q, setQ] = useState(searchParams.get('q') || '')
  const [maxMileage, setMaxMileage] = useState(searchParams.get('maxMileage') || '200000')
  const [condition, setCondition] = useState(searchParams.get('condition') || '')
  const [transmission, setTransmission] = useState(searchParams.get('transmission') || '')
  const [bodyType, setBodyType] = useState(searchParams.get('bodyType') || '')
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest')

  // Update local state when searchParams change (e.g. on Reset)
  useEffect(() => {
    setBrand(searchParams.get('brand') || '')
    setMaxPrice(searchParams.get('maxPrice') || '')
    setYear(searchParams.get('year') || '')
    setQ(searchParams.get('q') || '')
    setMaxMileage(searchParams.get('maxMileage') || '200000')
    setCondition(searchParams.get('condition') || '')
    setTransmission(searchParams.get('transmission') || '')
    setBodyType(searchParams.get('bodyType') || '')
    setSort(searchParams.get('sort') || 'newest')
  }, [searchParams])

  const applyFilters = () => {
    const params = new URLSearchParams()
    if (brand) params.set('brand', brand)
    if (maxPrice) params.set('maxPrice', maxPrice)
    if (year) params.set('year', year)
    if (q) params.set('q', q)
    if (maxMileage !== '200000') params.set('maxMileage', maxMileage)
    if (condition) params.set('condition', condition)
    if (transmission) params.set('transmission', transmission)
    if (bodyType) params.set('bodyType', bodyType)
    if (sort) params.set('sort', sort)
    
    router.push(`/inventory?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="bg-white border border-grayCustom-border rounded-3xl p-8 mb-16 shadow-xl relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-800 to-black" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Keyword Search */}
        <div className="lg:col-span-2 space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Search Inventory</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search make, model, or year..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
              className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Make / Brand */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text flex items-center gap-2">
            Make / Brand
          </label>
          <select 
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Condition Toggle */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Vehicle Condition</label>
          <div className="flex bg-grayCustom-light p-1 rounded-xl">
            {['', 'New', 'Used'].map((opt) => (
              <button
                key={opt}
                onClick={() => setCondition(opt)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  condition === opt 
                  ? 'bg-black text-white shadow-md' 
                  : 'text-gray-500 hover:text-black'
                }`}
              >
                {opt || 'All'}
              </button>
            ))}
          </div>
        </div>

        {/* Max Price */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Max Price</label>
          <select 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="">Any Price</option>
            <option value="10000">$10,000 or less</option>
            <option value="20000">$20,000 or less</option>
            <option value="30000">$30,000 or less</option>
            <option value="50000">$50,000 or less</option>
            <option value="100000">$100,000 or less</option>
          </select>
        </div>

        {/* Body Type */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Body Type</label>
          <select 
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="">Any Body Type</option>
            {bodyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Transmission</label>
          <select 
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="">Any Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Mileage Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Max Mileage</label>
            <span className="text-xs font-bold text-primary">{Number(maxMileage).toLocaleString('en-US')} mi</span>
          </div>
          <input 
            type="range" 
            min="1000" 
            max="200000" 
            step="5000"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.target.value)}
            className="w-full h-2 bg-grayCustom-light rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Year Filter */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Minimum Year</label>
          <select 
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="">Any Year</option>
            <option value="2024">2024 & Newer</option>
            <option value="2022">2022 & Newer</option>
            <option value="2020">2020 & Newer</option>
            <option value="2018">2018 & Newer</option>
            <option value="2015">2015 & Newer</option>
            <option value="2010">2010 & Newer</option>
          </select>
        </div>

        {/* Sort Order */}
        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.1em] text-grayCustom-text">Sort By</label>
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full bg-grayCustom-light border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-bold focus:border-primary/30 focus:bg-white outline-none transition-all cursor-pointer"
          >
            <option value="newest">Newest Listed</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest First</option>
            <option value="mileage-asc">Mileage: Lowest First</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 items-end">
          <button 
            onClick={() => router.push('/inventory')}
            className="h-[52px] border-2 border-black text-black hover:bg-black hover:text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all transform active:scale-[0.98]"
          >
            Reset
          </button>
          <button 
            onClick={applyFilters}
            className="h-[52px] bg-primary hover:bg-red-700 text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            Search Vehicles
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
