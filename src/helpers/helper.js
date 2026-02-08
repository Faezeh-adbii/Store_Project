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
const getInitialQuery = (searchParams) => {
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) query.category = category;
    if (search) query.search = search;
    return query;
};
export {
    shortenText,
    searchProducts,
    filterProducts,
    createQueryObject,
    getInitialQuery,
};