const totalIngredients = {}

document.addEventListener('DOMContentLoaded', function (e) {
    //Makes sure that all HTML is rendered before moving on
    document.addEventListener('submit', function (e) {
        //stop event bubbling 
        e.preventDefault();

         //add a new list item to list

        //get value of input
        let itemInput = document.querySelector('input[name=item-input]');
        let itemValue = itemInput.value;

        //create new list item
        let newItemEl = document.createElement('li');
        let newCheckboxEl = document.createElement('input');
        let newSpanEl = document.createElement('span');
        newSpanEl.innerHTML = itemValue;
        newSpanEl.setAttribute("data-name", itemValue);
        newItemEl.appendChild(newSpanEl);
        const ingredients = document.querySelector('.ingredients');
        ingredients.appendChild(newItemEl);

        //add the (+) to each list item
        let iconEl = document.createElement('i');
        iconEl.classList.add('fas');
        iconEl.classList.add('fa-plus');
        newItemEl.appendChild(iconEl);

        //click the (+) to add listed item to "purchased" list
        iconEl.addEventListener("click", function (event) {
            let purchased = document.querySelector("#previous-list-container");
            let ingredientEl = event.target.previousSibling;
            let food = ingredientEl.getAttribute("data-name");
            console.log("testing,", food);
            let foodList = document.createElement('li');
            foodList.innerHTML = food;
            purchased.appendChild(foodList);
            //prevent duplicate entry 
            function unique(list) {
                let result = [];
                $.each(list, function(i, e) {
                    if ($.inArray(e, result) == -1) result.push(e);
                });
                return result;
            }
        }, {once: true}); 
        
        //check if checked
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

        //get reference to list and append
        let list = document.querySelector('.ingredients');
        list.appendChild(newItemEl);
        itemInput.value = '';

    })
})
