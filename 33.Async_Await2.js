
// some practical example of async await

function orderPizza(){
    return new Promise((resolve) => {
        console.log("Pizza order placed..... wait for 5 seconds");

        setTimeout(() => {
            resolve("Pizza is ready");
        }, 5000);
    });
}

function orderJuice() {
    return new Promise((resolve) => {
        console.log("Juice order placed..... wait for 3 seconds");
        setTimeout(() => {
            resolve("Juice is ready");
        }, 3000);
    });
}
  
function orderBurger() {
    return new Promise((resolve) => {
        console.log("Burger order placed..... wait for 4 seconds");
        setTimeout(() => {
            resolve("Burger is ready");
        }, 4000);
    });         
}

function orderFries() {
    return new Promise((resolve) => {
        console.log("Fries order placed..... wait for 2 seconds");
        setTimeout(() => {
            resolve("Fries is ready");
        }, 2000);
    });
}
  
async function showOrderStatus() {
    console.log("Welcome to Fast Food Restaurant");

    let pizza = await orderPizza();
    console.log(pizza); 

    let juice = await orderJuice();
    console.log(juice);

    let burger = await orderBurger();
    console.log(burger);    

    let fries = await orderFries();
    console.log(fries);

    console.log("All orders are ready. Enjoy your your food happily!!!");

}

showOrderStatus();