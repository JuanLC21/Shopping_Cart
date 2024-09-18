import { useState } from 'react'
import { Cart } from './Cart.jsx'
import style from './Products.module.css'

// eslint-disable-next-line react/prop-types
export function Products ({ products }) {
    const [items, setItems] = useState([])
    const checkItemCart = (items, productId) => {
        const value = items.some(item => item.id === productId)
        return value
    }
    const handleAddItem = (ev) => {
        const idItem = parseInt(ev.target.id)
        const itemAdded = products[idItem - 1]
        const newProducts = [...items, itemAdded]
        const condition = checkItemCart(items, idItem)
        condition ? alert('Item is already added to cart') : setItems(newProducts)
    }
    const handleRemoveItem = (ev) => {
        const idItem1 = parseInt(ev.target.id)
        const removedItem = items.filter(product => product.id !== idItem1)
        setItems(removedItem)
    }
    return (
        <main className={ style.main_products}>
            <div className={ style.divCart }>
                {
                    items.length !== 0 ? <Cart item1={ items } removeItem = {handleRemoveItem}/> : null
                }
            </div>
            <ul>
                { // eslint-disable-next-line react/prop-types
                    products?.map((product) => (
                        <li key={ product.id } className={ style.list }>
                            <h3 className={ style.title }>{ product.title }</h3>
                            <img className={ style.thumbnail } src={ product.images[0] } alt={ product.description } />
                            <strong className={ style.price }>{ product.price }$</strong>
                            <button id={ product.id } className={ style.buy } onClick={ handleAddItem }>Add</button>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
