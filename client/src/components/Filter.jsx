import { useContext, useState } from 'react'
import { FilterContext } from '../App'
import { ButtonOption } from './Button'
import style from './Filter.module.css'

export function Filter () {
    const { filters, setFilters } = useContext(FilterContext)
    const [number, setNumber] = useState(filters.price)
    // const [change, setChange] = useState(style.menu_option_hidden)
    const [change, setChange] = useState(style.options_container_hidden)
    const [categories, setCategories] = useState('All')

    function handleChangePrice (ev) {
        // setFilters({ ...filters, price: ev.target.value })
        setFilters(prevState => ({ ...prevState, price: ev.target.value })) // Alternativa para actualizar el estado sin necesidad de utilizar la variable.
        setNumber(ev.target.value)
    }
    function handleChange () { setChange(change === style.options_container_hidden ? style.options_container : style.options_container_hidden) }
    const newSet = { setCategories, handleChange }
    return (
        <section className={style.filters}>
            <div className={style.whole_price}>
                <label htmlFor="price">Price</label>
                <input className={style.range_price} type="range" id="price" min={0} max={90} value={filters.price} onChange={handleChangePrice}/>
                <span>{ number }$</span>
            </div>
            <div className={ style.whole_category }>
                <label htmlFor="category">Category</label>
                <div className={ style.category_container }>
                    <button className={style.btn_category} onClick={handleChange}>{categories}</button>
                    <div className={change}>
                        <div className={style.menu_option}>
                            <ButtonOption newState={newSet}>All</ButtonOption>
                            <ButtonOption newState={newSet}>Shoes</ButtonOption>
                            <ButtonOption newState={newSet}>Clothes</ButtonOption>
                            <ButtonOption newState={newSet}>Furniture</ButtonOption>
                            <ButtonOption newState={newSet}>Electronics</ButtonOption>
                            <ButtonOption newState={newSet}>Miscellaneous</ButtonOption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Nota: setFilters({ ...filters, price: ev.target.value }) y setFilters(prevState => ({ ...prevState, price: ev.target.value })) son lo mismo
// pero hecho de distinta forma. Aunque es mejor práctica usar la segunda forma.
