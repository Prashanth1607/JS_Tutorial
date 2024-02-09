const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval) {
   console.log(`acc: ${acc} and currval: ${currval}`);
   return acc + currval
}, 2 )

//const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    }

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);