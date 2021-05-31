import apiKey from "./apiKey.js";
const searchQuery = "pie"
/*the api i'll be using
    https://spoonacular.com/food-api/docs
 */

/*
`https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false
https://api.spoonacular.com/recipes/complexSearch
*/

// get the food choses eg: different types of cake
let getFoodIds = _ => {
       return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query="${searchQuery}"`)
        .then(res => res.json())
        .then(data => {
            let allIds = data.results.map(item => {
                return item.id;
            });
            return allIds;
        });
}

// carrot cake id 657968
// get the recipe of the food you want
let getAdditionalFoodInfo = _ => {
    getFoodIds().then(item => {

        item.forEach(id => {
             fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                return data;
            });
        });
        console.log(item)
    });

}

// getAdditionalFoodInfo()


let createFoodCard = _ => {
    /*
    Info to get for this are...
        -title
        -image
        -time to cook
        -serving amt
        -summary
    */
}



let createFoodPopup = _ => {
    /*
    Info to get for this are...
        -title
        -time to cook
        -serving amt
        -summary
        -ingredients
        -instructions
        -diet info(vegan,ect...)
    */
}






/*
STEPS
---
- get card data
- render card card / popup in the DOM
- get the full recipe btn & close btn working
*/







/*
<li class="food">
    <img class="food__image" src="./images/cake-test-image.jpg" alt="food image">
    <h2 class="food__header">chocolate cake</h2>
    <div class="food__more-info">
        <div class="food__time">
            <i class="fa fa-clock-o food-timer-icon" aria-hidden="true"></i>
            <div class="food__time__text">60min</div>
        </div>

        <div class="food__serving">
            <div class="food__serving__text">4 servings</div>
        </div>
    </div>

    <p class="food__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit...</p>
    <button class="food__full-recipe-btn">Full Recipe</button>
</li>
*/