import React, { useEffect, useState } from 'react';
import Item from './Item';
import { saveItemsToLocalStorage, loadItemsFromLocalStorage } from './localStorage';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = loadItemsFromLocalStorage();
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };


  const handleAddItem = (e) => {
    e.preventDefault();

    if (!name || !description) {
      return;
    }

    const newItemData = { name, description };
    const updatedItems = [...items, newItemData];
    setItems(updatedItems);

    // Save items to local storage
    saveItemsToLocalStorage(updatedItems);

    setName('');
    setDescription('');
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item !== itemToDelete);
    setItems(updatedItems);

    // Save updated items to local storage
    saveItemsToLocalStorage(updatedItems);
  };

  return (
    <div className="App text-center font-sans m-8">
      <h1 className="text-4xl font-extrabold mb-4">Item List</h1>
      <div className="item-form flex flex-col lg:flex-row items-center">
        <form onSubmit={handleAddItem} className="bg-gray-100 p-4 rounded-lg flex-grow ">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="border rounded px-2 py-1 mb-2 lg:mr-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            className="border rounded px-2 py-1 mb-2 lg:mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 lg:ml-2">
            Add Item
          </button>
        </form>
      </div>
      <div className="item-list flex flex-wrap justify-center">
        {items.map((item, index) => <Item key={index} item={item} onDelete={() => handleDeleteItem(item)} />)}
      </div>
    </div>
  );
}

export default App;
