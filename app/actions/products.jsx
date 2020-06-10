export const getProducts = (dispatch) => () => {
    dispatch(getProductsLoading());
    return fetch('assets/data/products.json')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                return dispatch(getProductsSuccess(data.data))
            }, 1000);
        }).catch(error => {
            dispatch(getProductsError(error));
        });
}

export const getProductsLoading = () => {
    return {
        type: 'GET_PRODUCTS_LOADING'
    }
}

export const getProductsSuccess = (data) => {
    return {
        type: 'GET_PRODUCTS_SUCCESS',
        data: data
    }
}

export const getProductsError = (error) => {
    return {
        type: 'GET_PRODUCTS_ERROR',
        error: error
    }
}