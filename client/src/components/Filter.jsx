import { useContext, useState } from 'react'
import { FilterContext } from '../App'
import './Filter.css'

export function Filter () {
    const { filters, setFilters } = useContext(FilterContext)
    const [number, setNumber] = useState(filters.price)

    function handleChangePrice (ev) {
        // setFilters({ ...filters, price: ev.target.value })
        setFilters(prevState => ({ ...prevState, price: ev.target.value })) // Alternativa para actualizar el estado sin necesidad de utilizar la variable.
        setNumber(ev.target.value)
    }
    function handleChangeCategory (ev) { setFilters({ ...filters, category: ev.target.value }) }
    return (
        <section>
            <div>
                <label htmlFor="price">Price since:</label>
                <input type="range" id="price" min={ 0 } max={ 90 } value={ filters.price } onChange={ handleChangePrice }/>
                <span>{ number }$</span>
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select name="categories" id="category" onChange={ handleChangeCategory }>
                    <option value="All">All</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>
        </section>
    )
}

// Nota: setFilters({ ...filters, price: ev.target.value }) y setFilters(prevState => ({ ...prevState, price: ev.target.value })) son lo mismo
// pero hecho de distinta forma. Aunque es mejor práctica usar la segunda forma.
