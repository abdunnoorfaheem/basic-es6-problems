// 1.Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.




let output = (a, b = 10) => {

    // console.log(a + b, a, b);


}

output(10, 20);


// 2. Create a function that takes a name and a city as input and returns a multi - line message using template literals, incorporating both variables.


let address = (name, city) => {

        let addressCity = `He live in ${name} ${city} at the age of 15   `;

        return addressCity;

    }
    // console.log(address("Bangladesh", "Dhaka"));


//3. Refactor a given function that multiplies two numbers into an arrow function, reducing its body to the minimum.


let multiple = (a, b) => { return a * b; }
    // console.log(multiple(10, 20));

//4.Combine two arrays using the spread operator and find the maximum value in the merged array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merge = [...arr1, ...arr2];
console.log(Math.max(...merge));