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


//need a class for list ingredient lists
//which would contain 
//<input type="checkbox">
//<label>ingredients Should go Here</label>
//<button class="edit">Edit</button>
//<button class="delete">Delete</button>


//need to research JS for edit/delet funtion


