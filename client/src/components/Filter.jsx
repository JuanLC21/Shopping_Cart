import { useContext, useState } from 'react'
import { FilterContext } from '../App'
import style from './Filter.module.css'

export function Filter () {
    const { filters, setFilters } = useContext(FilterContext)
    const [number, setNumber] = useState(filters.price)
    const [change, setChange] = useState(style.menu_option_hidden)
    const [categories, setCategories] = useState('All')

    function handleChangePrice (ev) {
        // setFilters({ ...filters, price: ev.target.value })
        setFilters(prevState => ({ ...prevState, price: ev.target.value })) // Alternativa para actualizar el estado sin necesidad de utilizar la variable.
        setNumber(ev.target.value)
    }
    function handleChangeCategory (ev) {
        setFilters({ ...filters, category: ev.target.value })
        setCategories(ev.target.value)
        setChange(style.menu_option_hidden)
    }
    function handleChange () { setChange(change === style.menu_option_hidden ? style.menu_option : style.menu_option_hidden) }
    return (
        <section>
            <div>
                <label htmlFor="price">Price since:</label>
                <input className={ style.range_price} type="range" id="price" min={ 0 } max={ 90 } value={ filters.price } onChange={ handleChangePrice }/>
                <span>{ number }$</span>
            </div>
            <div className={ style.whole_category }>
                <label htmlFor="category">Category:</label>
                <div>
                    <button className={ style.btn_category} onClick={ handleChange }>{ categories }</button>
                    <div className={ change }>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="All">All</button>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="Shoes">Shoes</button>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="Clothes">Clothes</button>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="Furniture">Furniture</button>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="Electronics">Electronics</button>
                        <button className={ style.btn_option } onClick={ handleChangeCategory } value="Miscellaneous">Miscellaneous</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Nota: setFilters({ ...filters, price: ev.target.value }) y setFilters(prevState => ({ ...prevState, price: ev.target.value })) son lo mismo
// pero hecho de distinta forma. Aunque es mejor práctica usar la segunda forma.
