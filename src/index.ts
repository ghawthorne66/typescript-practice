let id: number = 5
let company: string = 'Greg Hawthorne'
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

//Tuple

let person: [number, string, boolean] = [1, 'Greg', true]

//Tuple Array

let employee: [number, string] []

employee = [
    [1, 'Greg'],
    [2, 'John'],
    [3, 'Doug']
]

//Union
let pid: string | number = 22
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

// console.log(Direction1.Down)

//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number {
    return x + y
}

// console.log(addNum(5, 2))


function log(message: string | number): void {
    console.log(message)
}

// console.log('Hello')

//Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

user1.age = 5

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}

//Classes
class Person implements PersonInterface{
    id: number
    name: string


    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const greg = new Person(1, 'Greg')
const mike = new Person(2, 'Mike')

class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, 'Shawn', 'Developer')


// console.log(emp.register())

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'greg', 'john', 'jill'])

numArray.push('hello')