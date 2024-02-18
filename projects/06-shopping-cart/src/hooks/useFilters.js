import { useContext } from 'react'
import { FiltersContext } from '../context/filter'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filters, filtersProducts, setFilters }
}
