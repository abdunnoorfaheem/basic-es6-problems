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
// console.log(Math.max(...merge));


//5.Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.

let obj = {
    names: "Noor",
    age: 22,
    country: "Bangladesh"
}

let {
    names,
    age,
    country
} = obj
// console.log(names);


let arrays = [1, 2, 3, 4, 5];


let [element1, element2] = arrays;
// console.log(element1, element2);


// 6.Access the city property of a nested object using both dot notation and optional chaining.

let addressInfo = {

    street: 10,

    city: {
        cityMain: "Dhaka metropolitan"

    }

}

// console.log(addressInfo.city.cityMain);

// console.log(addressInfo?.city);
// console.log(addressInfo["city"]["cityMain"]);


//7.Given an array of student objects with properties name and marks, use: map() to extract the names.  filter() to return students with marks above 80.find() to get the first student with marks over 90.


let studentInfo = [

    { names: "Noor", marks: 50 },
    { names: "Fahim", marks: 60 },
    { names: "Hasan", marks: 95 },
    { names: "Rakib", marks: 90 },
    { names: "Riyad", marks: 82 },
    { names: "Musfiq", marks: 87 },
];

let studentsName = studentInfo.map((item) => {

    return item["names"];


});
// console.log(studentsName);


let studentMarks = studentInfo.filter((item) => {


    return item.marks > 80;

});

// console.log(studentMarks);

let studentMarksOver = studentInfo.find((item) => {

    return item.marks > 90;



});

// console.log(studentMarksOver);


//8.Use forEach() on an array of objects (e.g., products with name and price) to log a message with each product's details.

let products = [

    { names: "Samsung", price: 15000 },
    { names: "Realme", price: 35000 },
    { names: "Redmi", price: 25000 },
    { names: "Iphone", price: 115000 },
    { names: "Motorola", price: 35600 }
];
let listProduct = products.forEach((item) => {

    console.log(`Product name ${item.names} and price is ${item.price}`);


});