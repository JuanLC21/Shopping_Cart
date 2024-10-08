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
        // eslint-disable-next-line react/prop-types
        const positionItem = products.findIndex((position) => position.id === idItem)
        const newProducts = [...items, products[positionItem]]
        const condition = checkItemCart(items, idItem)
        condition ? alert('Item is already added to cart') : setItems(newProducts)
    }
    const handleRemoveItem = (ev) => {
        const idItem1 = parseInt(ev.target.id)
        const removedItem = items.filter(product => product.id !== idItem1)
        setItems(removedItem)
    }
    const handleBuyItem = (ev) => {
        const idItem2 = parseInt(ev.target.id)
        const removedItem = items.filter(product => product.id !== idItem2)
        // eslint-disable-next-line react/prop-types
        const posItem = products.findIndex((position) => position.id === idItem2)
        // eslint-disable-next-line react/prop-types
        alert(`You just bought the item: ${products[posItem].title}`)
        setItems(removedItem)
    }
    return (
        <main className={ style.main_products}>
            <div className={ style.div_cart }>
                {
                    items.length !== 0 ? <Cart item1={items} removeItem={handleRemoveItem} buyItem={handleBuyItem}/> : null
                }
            </div>
            <ul>
                { // eslint-disable-next-line react/prop-types
                    products?.map((product) => (
                        <li key={ product.id } className={ style.list }>
                            <h3 className={ style.title }>{ product.title }</h3>
                            <img className={ style.thumbnail } src={ product.images[0] } alt={ product.description } />
                            <strong className={ style.price }>{ product.price }$</strong>
                            <button id={ product.id } className={ style.add} onClick={ handleAddItem }>Add</button>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
