const totalIngredients = {}

document.addEventListener('DOMContentLoaded',function(e){
  //Makes sure that all HTML is rendered before moving on
  document.addEventListener('submit', function(e){
    //stop event bubbling -what happens if you take this out?
    e.preventDefault();

    //what is this?
   

    //get value of input
    let itemInput = document.querySelector('input[name=item-input]');
    let itemValue = itemInput.value;

    //add a new list item to list

    //create new item
    let newItemEl = document.createElement('li');
    let newCheckboxEl = document.createElement('input');
    //setting checkbox to each new item
    newCheckboxEl.setAttribute("type", "checkbox");
    newCheckboxEl.value = itemValue;
    let newSpanEl = document.createElement('span');
    newSpanEl.innerHTML= itemValue;
    newItemEl.appendChild(newCheckboxEl);
    newItemEl.appendChild(newSpanEl);
    const ingredients = document.querySelector('.ingredients');
    ingredients.appendChild(newItemEl);

    newCheckboxEl.addEventListener ('click', function(event){
    //alert(this.value);
    debugger
    if (this.checked){
      totalIngredients[this.value] = true;      
    }
    else {
      totalIngredients[this.value] = false;
    }
      console.log(totalIngredients);
    })

    //newItemEl = document.createElement("INPUT");
    //newItemEl.setAttribute("type", "checkbox");

    //get a reference to list and append
    let list = document.querySelector('.ingredients');
    list.appendChild(newItemEl);
    itemInput.value = '';

  


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

//tried with a boolean
//let keys = Object.keys(totalIngredients)
//for (key of keys){
//  if (obj[key]) === "true"{
//    let totalIngredients.createElement('li');
//    const previousListContainer = document.querySelector('#previous-list-container');
//    ingredients.appendChild(totalIngredients);
//  } else {
//  console.log(`${obj[key]} is false`)
//  }
//}



//need a class for list ingredient lists
//which would contain 
//<input type="checkbox">
//<label>ingredients Should go Here</label>
//<button class="edit">Edit</button>
//<button class="delete">Delete</button>


//need to research JS for edit/delet funtion

//object keys in js 
//Object.keys(object2).sort() 
//could use to do something with object: const totalIngredients 
