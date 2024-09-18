import { Filter } from './Filter'
import style from './Header.module.css'

export function Header () {
    return (
        <header>
            <h1 className={ style.main_title}>Shop Store</h1>
            <Filter/>
        </header>
    )
}
