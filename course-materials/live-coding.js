const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = obj1;

const obj3 = {
  a: 1,
  b: 2,
};

// console.log(obj1 === obj2)
// console.log(obj1 === obj3)

// obj2.a = 'new value';
// console.log(obj2)
// console.log(obj1)

// f1();
// f2();

// function f1() {
//   console.log('f1');
// }

// const f2 =  (param1) => 4

// console.log(f2());

// (function f3(){
//   console.log('f3');
// })()

// const str_1 = 'INCLUDED';
// const literal = `Some long string with ${str_1}`
// console.log(literal)

// 2.1 Create a function which checks if a string parameter contains string parameter. 2 arguments - body text and search string
// If so, extract it and return the string, else return empty string;

function extractText(bodyText, search) {
  const indexFound = bodyText.indexOf(search);

  if (indexFound !== -1) {
    console.log(indexFound);
    const extracted = bodyText.substring(
      indexFound,
      indexFound + search.length
    );
    return extracted;
  } else {
    return "";
  }
}

// console.log(extractText('Find the JS word JS', 'JS'));

// 3.1 create a function that checks if an string argument verifies a mail pattern

function validateEmail(emailString) {
  const emailPattern = /([a-z]|[0-9])+@[a-z]+\.com/;

  // if (emailPattern.test(emailString)){
  //   return true;
  // } else {
  //   return false;
  // }

  // emailString.match(emailPattern);

  return emailPattern.test(emailString);
}

console.log(validateEmail("catalin123esol.com"));

const nr1 = 0.1;
const nr2 = 0.2;

// console.log(nr1 + nr2)
// console.log('  ')

// 1.1 Log 10 times the max between a random in [0, 100] and the rounded up to its nearest integer value of PI ^ 3

for (let i = 0; i < 10; i++) {
  const pi3 = Math.round(Math.pow(Math.PI, 3));
  const rand = Math.floor(Math.random() * 101);
  console.log(Math.max(pi3, rand));
}

// 1.1 Log 10 times the max between a random in [0, 100] and the rounded up to
// its nearest integer value of PI ^ 3

// for (let i=0; i<10; i++ ){
//   const pi3 = Math.round(Math.pow(Math.PI, 3));
//   const rand = Math.floor(Math.random() * 101);
//   console.log(Math.max(pi3, rand));
// }

//4.2 function that takes a date as a parameter and
// returns the year of only dates after current date time

function futureYear(date) {
  const now = new Date();

  if (date > now) {
    console.log(date.getFullYear());
  }
}

// futureYear(new Date('2021-10-10'));
// futureYear(new Date('2020-10-10'));
// futureYear(new Date('2022-10-10'));

const dates = [
  new Date("2021-10-10"),
  new Date("2020-10-10"),
  new Date("2022-10-10"),
];

const now = new Date();

// for (let i = 0; i < dates.length; i++) {
//   const date = dates[i];

//     if(date > now) {
//      console.log(date.getFullYear());
//   }
// }

// dates
//   .filter(function(date) {
//     return date > now
//   })
//   .map(function(date) {
//     return date.getFullYear();
//   })
//   .forEach(function(year) {
//     console.log(year);
//   })

// dates
//   .filter(date => date > now)
//   .map(date => date.getFullYear())
//   .forEach(year => {
//     console.log(year)
//   });

// 4.1 Return the sum of the cubed value of the odd numbers
// from an array with LOOPS and functionally

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a % 2 === 0;

const sum = array
  .filter((nr) => nr % 2 === 1)
  .map((nr) => Math.pow(nr, 3))
  .reduce((tempSum, nr) => tempSum + nr, 0);

// console.log(sum)

// const value = '';

// const requiredValue = value ? 'DEFAULT' : value;
// const requiredValue2 = value ?? 'DEFAULT';

// console.log(0 == '')

// console.log('1' + 1)

// console.log(true + 1)

// console.log(false * 10)

// console.log('10' * 10)

// console.log([1] * 10)

// console.log([] + 6)

// console.log({} + 6)

// console.log([21, 2] + 1)

// console.log([12, 2] * 6)

// console.log('asdasd' * 6)

// console.log({0: 1} * 6)

// console.log({0: 1} + 6)

// const obj = {
//   a: 1,
//   b: 2
// }

// if(obj.c){
//   // use c;
// }

// const c = obj?.c.c1;

// objs.c = {
//   c1: 'prop'
// };

// console.log(typeof '')
// console.log(typeof 5)
// console.log(typeof true)

// console.log(typeof new String())

// console.log(typeof NaN)
// console.log(typeof Infinity)

// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof Math)

// console.log(typeof undefined)
// console.log(typeof aaaaa)
// console.log(typeof null)

// var a = function(){};
// console.log(typeof a);
// console.log(typeof function(){})

// console.log(typeof Math.min);

// console.log(['0'] == false)

// console.log([0] == false)

// console.log([] == false)

// console.log(null == false)

// console.log(undefined == false)

// console.log(NaN == false)

// console.log(null == undefined)

// console.log(NaN == NaN)

// console.log(![])

// console.log(!{})

// console.log(!5)
// console.log(!0)
// console.log(!'')
// console.log(!' ')
// console.log(!null)
// console.log(!undefined)

// console.log('' || 4 || 5)

// console.log('' || null)

// console.log('' || null || 'asd')

// console.log('' || 'asd' || 'alt')

// console.log('' &&  4)

// console.log(8 && null)

// console.log(1 && 2 && 3)

// var a = new String('');
// console.log(a);

// var i = 5;

// for(var i = 1; i<= 10; i++) {

//do something
// }

// console.log(i)

// {
//     var inBlock = 5;
// }

// var a = 1;
// b = 5

// console.log(inBlock)

// function test(){

//   var a = 1;

//   b = 5
// }

// var e

// var a = 3;

// var b = foo();

// var c = d();

// const f = 5;

// var d = function () {
// 	return 'I am c';
// }

// function foo() {
// 	return 'I am foo'
// }

// function boo(v) {
// 	x = 6;
// 	v = 5;
// }

// e = 4;

// var e

const car = {
  speed: 10,

  increaseSpeed: function (km) {
    this.speed = this.speed + km;
  },
};

car.increaseSpeed(20);

// console.log(car)

const anotherCar = { speed: 30 };
car.increaseSpeed.call(anotherCar, 30);

const increaseSpeedAnotherCar = car.increaseSpeed.bind(anotherCar);

increaseSpeedAnotherCar(40);

// console.log(anotherCar);

const a = new Array(1, 2, 3);
// console.log(a);

const str = new String("string");
// console.log(str);

Array.prototype.pushTwice = function (newObj) {
  this.push(newObj);
  this.push(newObj);
};

const arr = [1, 2, 3];

arr.pushTwice(4);

// console.log(arr)

class User {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(this.print);
  }
}

const user = new User("name");

// console.log(user);

class Client extends User {
  //   company: 'Esol'
}

const client = new Client();
// console.log(client);

function sayHBFactory(name) {
  const message = "Happy birthday";

  return function (age) {
    console.log(`${message} to ${name} for the age of ${age}`);
  };
}

const sayHBToGigi = sayHBFactory("Gigi");

// sayHBToGigi(20);

// Interval care sa logheze in fiecare secunda, data curenta in milisecunda.
// Intervalul sa fie oprit dupa 1 minut

// const interval = setInterval(() => {
//   console.log(Date.now())
// }, 1000)

// const timeout = setTimeout(() => {
//   clearInterval(interval);
// }, 60000)

const obj1 = {
  k1: "a",
  k2: "b",
  k3: "c",
};

const obj2 = {
  k4: "d",
  ...obj1,
};

console.log(obj2);

const obj3 = { ...obj1 };
console.log(obj3);

function addArguments(...args) {
  return args.reduce((sum, arg) => sum + arg, 0);
}

console.log(addArguments(1, 2, 3, 4));

console.log(addArguments(1, 2));

const arr1 = [2, 3, 4, 5, 6];
console.log(addArguments(...arr1));

// Promisses


setTimeout(() => {
  // console.log('Timeout callback')
}, 1000)


const promise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Data resolved');
  }, 1500)

} )


promise.then((data) => {
  // console.log('Data received:', data);
})



const apiCallPromise = new Promise((resolve, reject) => {
  const apiCall = new XMLHttpRequest();

  apiCall.addEventListener('load', () => {
    if(apiCall.status !== 200) {
      // console.log('Respones from server with error', apiCall.status);
      reject('Error occured')
    } else {
      resolve(apiCall.response);
    }
  })

  apiCall.addEventListener('error', () => {
    // console.log('error event')
    reject('Error occured');
  })

  apiCall.open('GET', 'https://js-course-2.firebaseio.com/users');
  apiCall.send();
});

apiCallPromise
  .then((response) => {
    // console.log('Promise resolved', response);
  })
  .catch((err) => {
    // console.log('Promise rejected', err)
  })
  .finally(() => {
    // console.log('Promise finalised')
  })


const button = document.getElementsByTagName('button')[0];

const eventHandlerPromise = new Promise((resolve, reject) => {

  button.addEventListener('click', () => {
    resolve('Button clicked');
  })
});


eventHandlerPromise.then((data) => {
  console.log('Button promise resolved', data);
});

