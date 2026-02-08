const shortenText = (text) => {
    return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (Produts, search) => {
    if (!search) return Produts;
    const searchedProducts = Produts.filter((P) =>
        P.title.toLowerCase().includes(search),
    );
    return searchedProducts;
};
const filterProducts = (Products, category) => {
    if (!category) return Products;
    const filteredProducts = Products.filter((P) => P.category == category);
    return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category == "all") {
        const { category, ...rest } = currentQuery;
        return rest;
    }
    if (newQuery.search == "") {
        const { search, ...rest } = currentQuery;
        return rest;
    }
    return {...currentQuery, ...newQuery };
};
export { shortenText, searchProducts, filterProducts, createQueryObject };