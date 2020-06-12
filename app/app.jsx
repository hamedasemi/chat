import React from 'react';
import ReactDOM from 'react-dom';

import style from './app.css'

import { Store } from './components/store/store';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Search from './components/search/search';

const App = () => {

    return (
        <div className={style.app}>
            <Store>
                <Search></Search>
                <Products></Products>
                <Cart></Cart>
            </Store>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));