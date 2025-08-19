import React from 'react';

interface CategoriesProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ currentCategory, onCategoryChange }) => {
  const categories = ['All', 'Motivation', 'Success', 'Life', 'Wisdom'];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={`mx-2 py-2 px-4 rounded ${currentCategory === category ? 'bg-brown-600 text-white' : 'bg-gray-200'}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
