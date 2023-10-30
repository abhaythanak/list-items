export const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };
  
  export const loadItemsFromLocalStorage = () => {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
  };