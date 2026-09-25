// // Set the item in localStorage
// localStorage.setItem("name", "sunil");
// localStorage.setItem("name1", "wimal");

// // Retrieve the value

// localStorage.removeItem("name1");


// let customer = localStorage.getItem("name");

// // Display it in the console
// console.log(costname); 

// localStorage.clear();



let customer ={
    name:"kamal",
    age:12,
    isActive:true
}

let stringCustomer = JSON.stringify(customer);


localStorage.setItem("customer",stringCustomer);

let retcustomer = localStorage.getItem("customer");

let jsonCustomer =JSON.parse(retcustomer)

// reconvert to json -----------------------
console.log(jsonCustomer);

