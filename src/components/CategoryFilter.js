import React from "react";

function CategoryFilter({ categories }) {
  
  const categoryButttons = categories.map(category => {
    return (
      <button 
      key={category}
      //onClick={}
      >
        {category}
      </button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButttons}
    </div>
  );
}

export default CategoryFilter;
