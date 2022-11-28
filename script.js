// homework 2.1
const array = [{name: 'Temo', age: 25}, {name: 'Lasha',
age: 21}, {name: 'Ana', age: 28}];

function findMaxAge(array){
    let maxAge = array[0].age;
    let userName;
    for (const field of array) {
        if(field.age > maxAge){
            maxAge = field.age;
            userName = field.name
        }
    }
    return userName + ' ' + maxAge;
}
console.log(findMaxAge(array));


const user2 = {
    name:'James',
    surname: 'Lebron',
    age: 37,
    address: {
        country: 'USA'
    }
}
const newObject = {
    ...user2,
};
console.log(newObject);

// homework 2.3
function generateRandomNumber(){
    return parseInt(Math.random() * 6) + 1;
}
function diceGame(){
    do {
        let randomA = generateRandomNumber();
        let randomB = generateRandomNumber();
        
        if(randomA === 3){
            return 'Wins A';
        }
        if(randomB === 3){
            return 'Wins B';
        }
        if(randomA === 3 && randomB === 3){
            return 'Call it a draw';
        }
    }while(true)
}
console.log(diceGame())

    
