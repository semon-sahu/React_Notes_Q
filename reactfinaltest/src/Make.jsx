
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Make(){


  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); 
    } else {
      alert('Please enter an item.');
    }
  };


  const handleClearList = () => {
    setItems([]);
  };
    return(
        <>
        <h1>Make A List</h1>
        <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}  className='
      '>Add Item</button>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
        <button onClick={handleClearList}  className='h1a'>Clear List</button>
    </div>
        </>
    )
}
export default Make;

