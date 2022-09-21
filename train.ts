interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

const a: Person = {
    id: 1,
    name: 'Justin',
    age: 19,
};

const b: Person = {
    id: 2,
    name: 'Selena',
};

b.name = '3';

interface List<T> {
    length: number;
    [index: number]: T;
}

const numberList: List<number> = [1, 3, 4];
const personList: List<Person> = [
    {
        id: 1,
        name: 'Tan',
    },
    {
        id: 2,
        name: 'Bob',
        age: 20,
    },
];
console.log(personList.length);
