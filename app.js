import apiKey from "./apiKey.js";

/*the api i'll be using
    https://spoonacular.com/food-api/docs
 */

/*
`https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false
https://api.spoonacular.com/recipes/complexSearch
*/

// get the food choses eg: different types of cake
    // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query="cake"`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })

// carrot cake id 657968
// get the recipe of the food you want
    // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
    // fetch(`https://api.spoonacular.com/recipes/657968/information?apiKey=${apiKey}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })






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