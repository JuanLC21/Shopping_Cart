import { useState } from 'react'
import { useFetch } from './useFetch.js'
import { productsFiltered } from '../utils/fn_Filter.js'

const PRODUCTS_END_POINT = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/ecommerce/products/all'

export function useFilter () {
    const { products } = useFetch(PRODUCTS_END_POINT)
    const [filters, setFilters] = useState({ price: 15, category: 'All' })

    const productsFilter = productsFiltered(products, filters)
    const objectFilters = { filters, setFilters }

    return { productsFilter, objectFilters }
}
