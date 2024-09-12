import { useState } from 'react';

const categoriesInitial = ['first category', 'second category'];

export const ComponentApp = () => {
  const [categories, setCategories] = useState(categoriesInitial);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const onAddCategory = () => {
    if (inputValue.trim().length > 0) {
      setCategories([...categories, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <h1>GifExpert</h1>
      <input 
        type="text" 
        placeholder="Add a category" 
        value={inputValue} 
        onChange={onInputChange} 
      />
      <button onClick={onAddCategory}>Add Category</button>
      <ol>
        {categories.map((category, key) => 
          <li key={key}>{category}</li>
        )}
      </ol>
    </>
  );
};

export default ComponentApp;