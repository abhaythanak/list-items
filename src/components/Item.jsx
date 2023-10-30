import React from 'react';

const Item = ({ item, onDelete }) => {
  return (
    <div className="item bg-white border rounded p-4 m-2 w-full lg:w-1/3 overflow-x-auto">
      <h3 className="text-xl font-semibold mb-2">Name: {item.name}</h3>
      <p className="text-gray-700">Description: {item.description}</p>
      <button
        onClick={() => onDelete(item)}
        className="bg-red-500 text-white px-2 py-1 mt-2 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;