const findFoods = () =>{
    const searchMeal = document.getElementById("input-meal").value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchMeal}`
    fetch(url)
        .then(res => res.json())
        .then(meals => displayMeal(meals.meals));
}

const displayMeal = items =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ' ';
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const foodShowDiv = document.createElement('div');
        foodShowDiv.innerHTML = `
        <div class="container">
            <div onclick="getRecipe('${item.idMeal}')" class="col-md-3 card food-card">
                <div class="menu-card card-body">
                     <img class="card-img" src="${item.strMealThumb}" alt="food">
                    <h4 class="text-center mt-3 card-title">${item.strMeal}</h4>
                </div>
            </div>    
        </div>
        `
        foodContainer.appendChild(foodShowDiv);
    }
    
}

const getRecipe = (id) =>{
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res=> res.json())
        .then(meals => fullIngradiant(meals.meals))
        
}


// This Ingradiant step
const fullIngradiant = recipes =>{
    recipes.forEach(recipe => {
    const recipeDetails = document.getElementById('recipe-details');
        recipe.innerHTML = ' ';
        recipeDetails.innerHTML = `
            <div class="row">
                <div class="offset-md-3 col-md-5 card">
                    <img src="${recipe.strMealThumb}" class="card-img" alt="">
                    <h2 class="card-title">${recipe.strMeal}</h2>
                    <div class="card-text">
                        <h5 class="name">${recipe.strIngredient1}</h5>
                       <li>${recipe.strIngredient2}</li>
                       <li>${recipe.strIngredient3}</li>
                       <li>${recipe.strIngredient4}</li>
                       <li>${recipe.strIngredient5}</li>
                       <li>${recipe.strIngredient6}</li>
                       <li>${recipe.strIngredient7}</li>
                       <li>${recipe.strIngredient8}</li>
                       <li>${recipe.strIngredient9}</li>
                    </div>
                </div>
            </div>
        `
    });
    

}
