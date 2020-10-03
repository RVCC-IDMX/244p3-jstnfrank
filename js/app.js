/*
function dishTotalAmt(dish)

take an object dish and return
the product of cost * quant
*/

function dishTotalAmt(dish){
  return dish.cost * dish.quantity;
}

/*
function dishTotalAmt(dish) = arrays 
loop over array getting a subTotal 
*/
function dishTotalAmt(dish) {
  let subTotal = 0; 
  for (let i = 0; i< dishTotals.length; i++){
    subTotal += dishTotals[i];
  }
  return subTotal; 
}

/*
calculate tax at
*/

function taxAmt(num) {
  return num * 0.07;
}
/*
function totalAmt(subTotal) = number
add tax to subTotal and return total
*/
function totalAmt(subTotal){
  return subTotal + taxAmt(subTotal); 
}




/*
functions that return string 
*/

/*
function makeBillTitle()
*/
function makeBillTitle(){
  return 'Your Bill'; 
}

/*
function makeBillSeparator()
*/

function makeBillSeparator(){
  return '---------';
}



/* 
data array 
*/

const orderedMeal = [];

orderedMeal.push({
  food: 'Hamburger',
  cost: 3.49,
  quantity:5, 
});

orderedMeal.push({
  food: 'Fries',
  cost: 1.29,
  quantity:3, 
});

orderedMeal.push({
  food: 'Soda',
  cost: 1.79,
  quantity:4, 
});

orderedMeal.push({
  food: 'Sundae',
  cost: 1.99,
  quantity:1, 
});





/*

Rewrite this code as needed to:

Print out to the console a check
for a family that orders:

5 hamburgers
3 fries
4 sodas
1 sundae

The check must show a list of what was ordered, with subtotals, 
added tax, and the grand total.

Your Bill
---------
Hamburger: $3.49 x 5 = $17.45
Fries:     $1.29 x 3 =  $3.87
Soda:      $1.79 x 4 =  $7.16
Sundae:    $1.99 x 1 =  $1.99
---------
Subtotal               $30.47
+ 7% tax               $ 2.13
---------
Total                  $32.60

Hint: Redesign the object to hold the
quantity ordered.

Here's an example:

{
  food: "Hamburger",
  cost: 3.49,
  quantity: 5,
}
functions that return numbers 


function dishTotalAmt(dish) = object
function subTotalAmt(dishTotals) = array
function taxAmt(num) = number
function totalAmt(subTotal) = number

functions that return strings 


function makeBillTitle()
function makeBillSeparator()
function makeDollar(cost)
function makeLineItem(dish)

*/



