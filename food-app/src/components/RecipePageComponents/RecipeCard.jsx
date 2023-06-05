import React from 'react'
import CustomImage from '../HomePageComponents/CustomImage'

function RecipeCard({recipe}) {
  return (
    <div className='recipe-card'>
      <CustomImage imageSrc={recipe.image}/>
      <div className="recipe-card-info">
            <img className='author-img' src={recipe.authorImg} alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <a href='#!' className='view-btn'>VIEW RECIPE</a>
      </div>
    </div>
  )
}

export default RecipeCard
