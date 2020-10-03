function totalCharges(dishes) {
  let total = 0;
  for (let i = 0; i < dishes.length; i++) {
    total += dishes[i].cost;
  }
  return total;
}

function taxAmt(num) {
  return num * 0.07;
}

function checkPlease(dishes) {
  let str = `Your Bill
---------
`;
  for (let i = 0; i < dishes.length; i++) {
    str += `${dishes[i].food}: $${dishes[i].cost}
`;
  }
  return str;
}

const orderedMeal = [];

orderedMeal.push({
  food: 'Hamburger',
  cost: 3.49,
});

orderedMeal.push({
  food: 'Fries',
  cost: 1.29,
});

orderedMeal.push({
  food: 'Soda',
  cost: 1.79,
});

orderedMeal.push({
  food: 'Sundae',
  cost: 1.99,
});

console.log(orderedMeal);

console.log(checkPlease(orderedMeal));

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


*/
