import React from 'react';

const CartContext = React.createContext({
    item: [],
    totalamount: 0,
    addItem: (item) => { },
    removeItem: (item) => { }
});

export default CartContext;