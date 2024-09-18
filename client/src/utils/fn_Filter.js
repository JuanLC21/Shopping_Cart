export const productsFiltered = (array, item) => {
    return (
        array.filter((product) => (product.price >= item.price) && (
            item.category === 'All' || product.category.name === item.category))
    )
}
