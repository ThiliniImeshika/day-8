// // Set the item in localStorage
// localStorage.setItem("name", "sunil");
// localStorage.setItem("name1", "wimal");

// // Retrieve the value

// localStorage.removeItem("name1");


// let customer = localStorage.getItem("name");

// // Display it in the console
// console.log(costname); 

// localStorage.clear();



// let customer ={
//     name:"kamal",
//     age:12,
//     isActive:true
// }

// let stringCustomer = JSON.stringify(customer);


// localStorage.setItem("customer",stringCustomer);

// let retcustomer = localStorage.getItem("customer");

// let jsonCustomer =JSON.parse(retcustomer)

// // reconvert to json -----------------------
// console.log(jsonCustomer);



 const customerList= JSON.parse(localStorage.getItem("customerList"));

function btnAddCustomerOnAction(){

    // let customerList = JSON.parse(localStorage.getItem("customerList"));


    let customer ={
        id:document.getElementById("txtcustomerid").value,
        name:document.getElementById("txtcustomername").value,
        age:document.getElementById("txtcustomerage").value,
        address:document.getElementById("txtcustomeraddress").value


    }


console.log(customer);

customerList.push(customer);

// console.log(customerList);

localStorage.setItem("customerList",JSON.stringify(customerList));

 btnLoadTableOnAction();



}

function btnSearchByIdOnAction(){

    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customer = customerList.find(customer =>{
        return customer.id === document.getElementById("txtcustomerid").value
    });

    //check customer id is equal to user input with a type------------------------------------

    document.getElementById("txtcustomername").value= customer.name;
     document.getElementById("txtcustomerage").value= customer.age;
      document.getElementById("txtcustomeraddress").value= customer.address;

      console.log(customer);


    // alert("search customer")
}

function btnDeleteByIdOnAction(){

    //get an array  copy from the local storage------------------------------------

    let customerList = JSON.parse(localStorage.getItem("customerList"));

    //get search id ----------------------

   let customerId =  document.getElementById("txtcustomerid").value;

    //after identify index then can remove------------------
   let index = customerList.findIndex(customer => {
    return customer.id === customerId;
   })


   //remove items acording to the given index(start index,count we want to delete)--------------------------------

   customerList.splice(index,1);

   //update that change in the local storage ----------------------------------------

   localStorage.setItem("customerList", JSON.stringify(customerList));

   console.log(customerList);

    // alert("delete customer")
} 

function btnUpdateByIdOnAction(){
    alert("update customer")
}

function btnClearStorageOnAction(){
    localStorage.clear();
}

function btnLoadTableOnAction(){
    
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let body = ""

    customerList.forEach(element => {
        body +=`
                    <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.address}</td>
        </tr>
        
        `
        
    });

    document.getElementById("tblCustomer").innerHtml=body;

    console.log(body);


}