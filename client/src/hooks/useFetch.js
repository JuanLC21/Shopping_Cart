import { useEffect, useState } from 'react'

export function useFetch (url) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
    }, [])
    return { products }
}

// export function useFetch (url) {
//     const [products, setProducts] = useState()
//     useEffect(() => {
//         (async function fetching () {
//             try {
//                 const response = await fetch(url)
//                 const data = await response.json()
//                 setProducts(data)
//             } catch (error) { console.log(error) }
//         })()
//     }, [])
//     return { products }
// }
