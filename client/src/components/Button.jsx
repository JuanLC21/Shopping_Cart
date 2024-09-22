import { useContext, useState } from 'react'
import { FilterContext } from '../App'
import style from './Button.module.css'

// eslint-disable-next-line react/prop-types
export function ButtonOption ({ children, newState }) {
    const { filters, setFilters } = useContext(FilterContext)

    function handleChangeCategory () {
        setFilters({ ...filters, category: children })
        // eslint-disable-next-line react/prop-types
        newState.setCategories(children)
        // eslint-disable-next-line react/prop-types
        newState.handleChange()
    }
    return (
        <button className={ style.btn_option } onClick={ handleChangeCategory }>{ children }</button>
    )
}
