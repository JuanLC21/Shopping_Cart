import { Icon, Plus, Minus } from './CartIcons'
import { useState } from 'react'
import style from './Cart.module.css'

// eslint-disable-next-line react/prop-types
function Counter ({ price }) {
    const [qty, setQty] = useState(1)
    if (qty < 1) setQty(1)
    return (
        <>
            <span className={ style.price_cart }><strong>Price:</strong> { price * qty } $</span>
            <div className={ style.add_cart }>
                <span className={ style.quantity_cart }><strong>Quantity:</strong>{qty}</span>
                <div className={ style.quantity_buttons}>
                    <button className={style.btn_quantity} onClick={() => setQty(qty - 1)}><Minus/></button>
                    <button className={style.btn_quantity} onClick={() => setQty(qty + 1)}><Plus/></button>
                </div>
            </div>
        </>
    )
}
// eslint-disable-next-line react/prop-types
export function Cart ({ item1, removeItem, buyItem }) {
    return (
        <>
            <label htmlFor="checkBoxId" className={ style.btn_cart }>
                <Icon/>
            </label>
            <input type="checkbox" id='checkBoxId' hidden/>
            <div className={ style.item_cart }>
                {
                // eslint-disable-next-line react/prop-types
                    item1?.map((product1) => (
                        <article key={ product1.id } className={style.article}>
                            <h4 className={ style.title_cart}>{ product1.title }</h4>
                            <img src={ product1.images[0] } alt={ product1.description } className={ style.img_cart }/>
                            <Counter price={product1.price}/>
                            <div className={ style.buy_remove}>
                                <button id={product1.id} className={style.btn_buy} onClick={buyItem}>Buy</button>
                                <button id={product1.id} className={style.btn2_cart} onClick={removeItem}>Remove</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    )
}
