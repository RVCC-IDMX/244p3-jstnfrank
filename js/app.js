/*
checkPlease()

take order using a series of prompt modal popups
write the bill out to the console
write the bill out to the page
*/

/*
function dishTotalAmt(dish)
take an object dish and return
the product of cost * quant
*/

const dishTotalAmt = (dish) => dish.cost * dish.quantity,

/*
*/
const subTotalAmt = (dishTotals) =>
{
  dishTotals.reduce((sum,current) => sum + current, 0); 
}


/*
calculate tax at 7%
*/

const taxAmt = (num) => num * 0.07;

/*
*/
const totalAmt = (subTotal) => subTotal + taxAmt(subTotal);

/*
FUNCTIONS THAT RETURN STRING 
*/

/*
function makeBillTitle()
*/
const makeBillTitle = () => 'Your Bill';

/*
function makeBillSeperator()
*/

const makeBillSeperator = () => '--------';

/*
function makeDollar(cost)
use toFixed() for 2 decimal numbers
it returns a string
*/

const makeDollar = (cost) => '$' + cost.toFixed(2);

/*
function makeLineItem(dish)
*/

const makeLineItem = (dish) => {
  /*
  dish is an object
  example return: Hamburger: $3.49 * 5 = $17.45
  */
 let str;

 //
 const { food, cost, quantity} = dish;

 // change costs to dollar amounts
 let dishCost = makeDollar(cost);
 let lineCost = makeDollar(dishTotalAmt(dish));

 // put string together
 str = `${food} ${dishCost} * ${quantity} = ${lineCost}`;

 // add a return character to end of line
 str += '\n';
 return str;
};

const makeLineItems = (dishes) =>
dishes.reduce((sum,current)=> sum + makeLineItem(current), '');

const makeSubtotalLine = (subTotal) =>
'Subtotal         ' + makeDollar(subTotal);

const makeTaxLine = (tax) => '+ 7% tax          ' + makeDollar(tax);

const makeTotalLine = (total) => 'Total         ' + makeDollar(total);

/*
data array
*/

const dishMenu = [];

dishMenu.push({
food: 'Hamburger: ',
cost: 3.49,
});

dishMenu.push({
  food: 'Fries: ',
  cost: 1.29,
  });

  dishMenu.push({
    food: 'Soda: ',
    cost: 1.79,
    });

    dishMenu.push({
      food: 'Sundae: ',
      cost: 1.99,
      });

      /*
      function takeAnOrder(dishMenu)
      */
     function promptQuantity(dish){
      let quantity = +prompt(`How many ${dish.food} would you like?`, '');
      if (!isFinite(quantity)){
        console.log(quantity);
        quantity = 0;
      }
      return quantity;
     }

     function takeAnOrder(dishMenu){
       let order = dishMenu.map((dish)=>{
         return (dish.quantity = promptQuantity(dish));
       });
       return dishMenu;
     }

     const orderedMeal = takeAnOrder(disjMenu);

     /*
     function writeOut that returns
     function writeToPage()
     */

     function writeOut(){
       /*
       document.querySelector is expensive call
       use closure to do only once
       */
      const bill = document.querySelector(' .bill');
      function writeToPage(str) {
        let pre = document.createElement('pre');
        pre.innerText = str;
        bill.appendChild(pre);
      }
      return writeToPage;
     }

     const writeToPage = writeOut();

     function makeDishTotalsArray(dishes) {
       return dishes.map((dish) => dishTotalAmt(dish));
     }

     /*
     create data for output
     */

     let makeDishTotalsArray = makeDishTotalsArray(orderedMeal);

     let subTotal = subTotalAmt(makeDishTotalsArray);

     let tax = taxAmt(subTotal);

     let total = totalAmt(subTotal);

     /*
     write bill out to console
     */
    console.log(makeBillTitle());
    console.log(makeBillSeperator());
    console.log(makeLineItems(orderedMeal));
    console.log(makeBillSeperator());
    console.log(makeSubtotalLine(subTotal));
    console.log(makeTaxLine(tax));
    console.log(makeBillSeperator());
    console.log(makeTotalLine(total));

    /*
    write bill out to page
    */
   writeToPage(makeBillTitle());
   writeToPage(makeBillSeperator());
   writeToPage(makeLineItems(orderedMeal));
   writeToPage(makeBillSeperator());
   writeToPage(makeSubtotalLine(subTotal));
   writeToPage(makeTaxLine(tax));
   writeToPage(makeBillSeperator());
   writeToPage(makeTotalLine(total));