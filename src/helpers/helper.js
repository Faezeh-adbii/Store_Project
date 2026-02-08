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

export { shortenText, searchProducts, filterProducts };