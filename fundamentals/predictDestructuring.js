//Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
//random one of the three cars
//turns out it is always Tesla, as randomCar doesn't actually mean a randomCar, we are just calling the first car in the list.
console.log(otherRandomCar)
//I predict this will concole log Mercedes because only one comma in front which means otherRandomCar is the second car in the list.
//yey, prediction was correct!

//Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
//Elon
//turns out Error (name is not defined) because no value is set for name
console.log(otherName);
//Tesla
//when you only console.log(otherName), you get Elon and not Tesla


//Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
//12345
//yey, this was correct!
console.log(hashedPassword);
//this should be error because there is no "password" in the const person.
//yey, this was undefined

//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
//I predict the answer is 5
//This came out as false, so I assume this is false because the numbers need to match and 2 does NOT equal 5, so this is false.
console.log(first == third);
//I predict the answer is 2
//This came out as true, I assume because first is 2 and third is 2 so 2==2 so true statement.

//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
//value
//Yey, this was correct!
console.log(secondKey);
//[1, 5, 1, 8, 3, 3]
//Yey, this was correct!
console.log(secondKey[0]);
//1
//Yey, this was correct!
console.log(willThisWork);
//I think this will be an error...
//This did work and the answer was 5.  I guess because we gave secondKey a value already we can use the logic of using a "," to call the second number.


