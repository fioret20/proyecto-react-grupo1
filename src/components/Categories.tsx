import React from 'react';

interface CategoriesProps {
    currentCategory: string;
    onCategoryChange: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ currentCategory, onCategoryChange }) => {
    const categories = ['Todas', 'Estudio', 'Trabajo', 'Personal', 'Productividad'];

    return (
        <div className='category-tabs'>
            {categories.map((category) => (
                <button
                    key={category}
                    className="category-button"
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;