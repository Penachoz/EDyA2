import { useState } from "react";
import { AddCategory } from './Components/AddCategory.js';
import { GifGrid } from './Components/GifGrid.js';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Zodiac']);

  const onAddCategory = (category) => {
    setCategories(list => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category, key) => 
          <GifGrid category={category} key={key} />
        )}
      </ol>
    </>
  );
};
export default GifExpertApp;