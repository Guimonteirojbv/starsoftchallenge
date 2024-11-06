 'use client'
 
 const loadPersistedState = () => {
  if (typeof window !== 'undefined') {
    const cartState = window.localStorage.getItem('cart');
    return cartState ? JSON.parse(cartState) : { qntd: 0, items: [] };
  }
  return { qntd: 0, items: [] }; 
};

export default loadPersistedState