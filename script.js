const totalIngredients = {}

document.addEventListener('DOMContentLoaded', function (e) {
    //Makes sure that all HTML is rendered before moving on
    document.addEventListener('submit', function (e) {
        //stop event bubbling -what happens if you take this out?
        e.preventDefault();

        //get value of input
        let itemInput = document.querySelector('input[name=item-input]');
        let itemValue = itemInput.value;

        //add a new list item to list

        //create new item
        let newItemEl = document.createElement('li');
        let newCheckboxEl = document.createElement('input');
        //setting plus to each new item
        let newSpanEl = document.createElement('span');
        newSpanEl.innerHTML = itemValue;
        newSpanEl.setAttribute("data-name", itemValue);
        newItemEl.appendChild(newSpanEl);
        const ingredients = document.querySelector('.ingredients');
        ingredients.appendChild(newItemEl);
        let iconEl = document.createElement('i');
        iconEl.classList.add('fas');
        iconEl.classList.add('fa-plus');
        newItemEl.appendChild(iconEl);
        //add things list item to "purchased" list
        iconEl.addEventListener("click", function (event) {
            let purchased = document.querySelector("#previous-list-container");
            let ingredientEl = event.target.previousSibling;
            let food = ingredientEl.getAttribute("data-name");
            console.log("testing,", food);
            let foodList = document.createElement('li');
            foodList.innerHTML = food;
            purchased.appendChild(foodList);
        })

        newCheckboxEl.addEventListener('click', function (event) {
            //alert(this.value);
            debugger
            if (this.checked) {
                totalIngredients[this.value] = true;
            } else {
                totalIngredients[this.value] = false;
            }
            console.log(totalIngredients);
        })

        //get a reference to list and append
        let list = document.querySelector('.ingredients');
        list.appendChild(newItemEl);
        itemInput.value = '';

        //creating the array 
       // let salad = ['lettuce', 'tomato', 'feta', 'bacon'];
        salad.addEventListener('click', function(event){
            
        })

    })
})



//becky's example
//let keys = Object.keys(totalIngredients)
//for (key of keys){
//  if (obj[key]){
//    console.log(`${obj[key]} is true` )
//  } else {
//  console.log(`${obj[key]} is false`)
//  }
//}

//tried with an event listener
//let keys = Object.keys(totalIngredients)
//for (key of keys){
//if (obj[key]){
//console.log(`${obj[key]} is true` )
//newCheckboxEl.addEventListener('click', function(event){
// let previousListContainer = document.createElement('li');
// const previousListContainer = document.querySelector('#previous-list-container');
//ingredients.appendChild(totalIngredients);
//})
//} else {
// console.log(`${obj[key]} is false`)
// }
//}


//need to research JS for edit/delet funtion

//object keys in js 
//Object.keys(object2).sort() 
//could use to do something with object: const totalIngredients