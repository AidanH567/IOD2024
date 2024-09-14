function preparedough() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Started preparing pizza ...");
      resolve("pizza in process");
    }, 500);
  });
}

const pizzabase = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Made the base");
      resolve("base is done");
    }, 1000);
  });
};

const addsauce = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Added the sause and cheese");
      resolve("Sause and Cheese Added");
    }, 2000);
  });
};

function addtoppings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Added the pizza toppings");
      resolve("Toppings Added");
    }, 3000);
  });
}

const cookpizza = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Cooked the pizza");
      resolve("Pizza Cooked");
    }, 4000);
  });
};

const pizzaready = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pizza is ready");
      resolve("Pizza Ready");
    }, 5000);
  });
};

preparedough();
pizzabase();
addsauce();
addtoppings();
cookpizza();
pizzaready();
