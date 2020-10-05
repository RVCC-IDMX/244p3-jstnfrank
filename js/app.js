/*
function dishTotalAmt(dish)

take an object dish and return
the product of cost * quant
*/
function dishTotalAmt(dish){
  return dish.cost * dish.quantity;
}

/*
function subTotalAmt(dishTotals) {
  let subTotal = 0; 
  for (let i = 0; i< dishTotals.length; i++){
    subTotal += dishTotals[i];
  }
  return subTotal; 
}
/*
calculate tax at 7%
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
function makeDollar(cost)
*/
function makeDollar(cost){
  // use toFixed()for 2 decimal numbers
  // it returns a string
  let str = cost.toFixed(2);
  return '$' + str;
}

/*
function makeLineItem(dish)
*/

function makeLineItem(dish){
/*
dish is an object
example return: Hamburger: $3.49 * 5 = $17.45
*/

let str;

// pull out object properties
const food = dish.food;
const cost = dish.cost;
const quantity = dish.quantity;

// change costs to dollar amounts
let dishCost = makeDollar(dish.cost);
let lineCost = makeDollar(dishTotalAmt(dish));

// put struing together
str= `${food} ${dishCost} * ${quantity} = ${lineCost}`;
// add a return character to end of line
str += '\n';
return str;
}
function makeLineItems(dishes){
  let str = '';
  for (let i = 0; i< dishes.length; i++){
    str += makeLineItem(dishes[i]);
  }
  return str;
}
function makeSubtotalLine(subTotal){
  return 'Subtotal         ' + makeDollar(subTotal);
}
  function makeTaxLine(tax){
    return '+ 7% tax        ' + makeDollar(tax);
  } 
   
   
  function makeTotalLine(total){
    return 'Total            ' + makeDollar(total);
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
create output to console
*/

function makeDishTotalsArray(dishes) {
  let arr = [];
  for (let i = 0; i < dishes.length; i++){
    arr.push(dishTotalAmt(dishes[i]));
  }
  return arr;
}
let dishTotalsArray = makeDishTotalsArray(orderedMeal);

let subTotal = subTotalAmt(dishTotals);

let tax = taxAmt(subTotal);

let total = totalAmt(subTotal);

console.log(makeBillTitle());
console.log(makeBillSeparator());
console.log(makeLineItems(orderedMeal));
console.log(makeBillSeparator());
console.log(makeSubtotalLine(subTotal));
console.log(makeTaxLine(tax));
console.log(makeBillSeparator());
console.log(makeTotalLine(total));





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
function makeLineItems(dishes)
function makeSubtotalLine(subTotal)
function makeTaxLine(tax)
function makeTotalLine(total)

*/
