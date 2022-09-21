// const numberList = [1, 2, 3, 4];
// const newList = [...numberList, 4, 5];
// console.log(newList);

interface Student {
    id: number;
    name: string;
    age: number;
}

const listStudent: Student[] = [
    { id: 1, name: 'Tan', age: 22 },
    { id: 2, name: 'Alice', age: 16 },
];

const newList: Student[] = [];
listStudent.forEach((e) => {
    newList.push({ ...e });
});

newList[1].name = 'Alices';
console.log(listStudent);
console.log(newList);

let statusId: 1 | 2 = 1;
statusId = 2;

const tan = {
    name: 'Tan',
    age: 22,
} as const;

function isActive(state: 'active') {
    console.log(state);
}

let stt = 'active';
isActive(stt as 'active');
