import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;
    // operador spreed se hace una copia de mi arreglo anterior
    setCategories([newCategory, ...categories]);

  }

  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
        currentCategory={categories}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}
