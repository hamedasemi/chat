import { FILTER } from '../constatnts';

export const filterReducer = (state, action) => {
    let products = [...action.payload];
    switch (action.type) {
        case FILTER:
            switch (action.sort) {
                case 'sort-by-name-asc':
                    products = products.sort((a, b) => {
                        if (a.name > b.name) return 1;
                        if (a.name < b.name) return -1;
                        return 0;
                    });
                    return { ...state, products: [...products] }
                case 'sort-by-name-desc':
                    products = products.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                    });
                    return { ...state, products: [...products] }
                case 'sort-by-price-asc':
                    products = products.sort((a, b) => {
                        return a.price - b.price;
                    });
                    return { ...state, products: [...products] }
                case 'sort-by-price-desc':
                    products = products.sort((a, b) => {
                        return b.price - a.price;
                    });
                    return { ...state, products: [...products] }
                default:
                    return { ...state, products: [...action.payload] }
            }
        default:
            return state
    }
}