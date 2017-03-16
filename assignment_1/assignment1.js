/*
Exercise #1
Initialize an empty array below in the variable numbers.
*/
var arr = new Array(); // used "arr" instead of "numbers""
console.log('hello world');

/*
Exercise #2
Using the loop provided for you below, use an array's push method to insert the nummbers  0 to 10 into positions 0 through 10 of the numbers array you just initialized above.'If you're not sure how to use the array push method go back and re read this module on data strucutres.'
*/


for(var i=0;i<10;i++){
    arr.push(i);
    //use the array push() method here.
}
 console.log(arr);



/*
Exercise #3
Test that you used the array push method correctly by printing the sum of the values at position 3 and 6 of the array (use the console.log() function to print to the console). 
The outputted value should be 9.
*/

combinedArr = (arr[3] + arr[6]);
console.log(combinedArr);



/*
Exercise #4
Use the console.log() function and the array .pop() to add all the values in the array.
*/

var sum = 0;



while(arr.length != 0){
   var pops = arr.pop()
   sum += pops
    //write pop function here
}
console.log(sum)




/*
Exercise #5
Create an empty object and assign it the variable car below.
*/
var car = new Object();

/*
Exercise #5
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputing property make to the console. You should see the value "black" printed out.
*/

var car = {
    make: 'Porsche',
    colour: 'Black',
    horsepower: "350HP", 
}

console.log(car.colour)
console.log(car.make)
console.log(car.horsepower)
