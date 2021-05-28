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
    //https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
    // fetch(`https://api.spoonacular.com/recipes/657968/information?apiKey=${apiKey}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })