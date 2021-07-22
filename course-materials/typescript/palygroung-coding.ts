let str: string;

let str1 = 'string val';
// str1 = false;

str1 = 'klsdfamdkc';

let num: number;
let bol: boolean;

let obj: Object;
let obj1: {};

let arr: [];
let numArray: number[];
let numArray1: Array<number>;

let an: any;

function func(nume: number, str: string): string {
	return '';
}

function func1(nume: number, str: string): void {}

function func2(param: boolean): never {
	throw new Error('asdasdads');
}

function func3(_: never, param2: boolean): void {}

numArray1 = [1, 2, 3];

// const obj1 = new Object()

interface Client {
	name: string;
	age: number;

	order: {
		orderId: string;
		amount: number;
	};

	isLoggedIn: boolean;
}

let response: Client[];

interface serialisable {
	serialise(): string;
}

class Obj1 implements serialisable {
	serialise(): string {
		return '';
	}
}

class Car {
	static numberOfWheels = 4;

	speed: number;

	constructor() {
		this.speed = 0;
	}

	acceelerate(): void {
		this.speed++;
	}

	private loweSpeed(): void {
		this.speed--;
	}
}

const car = new Car();

// Car.numberOfWheels

enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
	CLIENT = 4,
	SUPER_ADMIN = 5,
}

interface User {
	name: string;
	role: UserRole;
}

const user: User = {
	name: 'USERNAME',
	role: UserRole.CLIENT,
};

console.log(UserRole.CLIENT);

type Arrayish = { [key: number]: unknown };
type A = keyof Arrayish;
