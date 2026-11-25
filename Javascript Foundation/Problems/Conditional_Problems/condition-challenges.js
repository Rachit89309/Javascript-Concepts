// Q.1 Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;
if(num1 >= num2){
    console.log("num1 is greater than num2");
    
}
else{
    console.log("num2 is greater than num1");
    
}





// Q.2 Checking if a string is equal to another string
let username = "chai";
let anotherUserName = "chai";

if(username == anotherUserName){
    console.log("Pick another username");
    
}
else{
    console.log("You can pick this username");
    
}



// Q.3 Checking if a variable is a number or not

let score = 44;
if(typeof score === 'number'){
    console.log("Yep, this is a number");
    
}
else{
    console.log("No, that is not a number");
    
}


// Q.4 Checking if a boolean value is true or false
let isTeaReady = false
if(isTeaReady){
    console.log("Tea is ready");   
}
else{
    console.log("tea is not ready");
    
}

// Q.5 Checking if an array is empty or not
let items = ["item1"];
if(items.length === 0){
    console.log("Array is empty");
    
}
else{
    console.log("Array is not empty");
    
}