const loadPersistedState = () => {
    const cartState = localStorage.getItem('cart');
    return cartState ? JSON.parse(cartState) : { qntd: 0, items: [] }; // Retorna um estado vazio se não houver nada no localStorage
  };
  
  export default loadPersistedState;