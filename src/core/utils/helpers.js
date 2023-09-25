const filterBySize = (properties, limit) => {
    return properties.filter(item => item.property==limit)
}

const filterByPrice = (properties, limit) => {
    return properties.filter(item => item.price>limit)
}

export {filterBySize, filterByPrice}