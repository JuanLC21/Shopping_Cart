import { createContext } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilter'

export const FilterContext = createContext()

function App () {
    const { objectFilters, productsFilter } = useFilter()
    return (
        <main>
            <FilterContext.Provider value={ objectFilters }>
                <Header/>
                <Products products={ productsFilter }/>
            </FilterContext.Provider>
        </main>
    )
}

export default App
