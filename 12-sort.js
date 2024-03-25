// ques. from the given object create two function which sort the data according to age accending and descending order 

const students = [
    {
        name: "John Doe",
        age: 20,
        address: "123 Main St, Cityville",
        phone: "123-456-7890"
    },
    {
        name: "Jane Smith",
        age: 22,
        address: "456 Elm St, Townsville",
        phone: "987-654-3210"
    },
    {
        name: "Alice Johnson",
        age: 21,
        address: "789 Oak St, Villagetown",
        phone: "555-123-4567"
    },
    {
        name: "Bob Anderson",
        age: 23,
        address: "321 Pine St, Hamlet",
        phone: "333-555-7777"
    },
    {
        name: "Emily White",
        age: 19,
        address: "567 Maple St, Forest City",
        phone: "888-999-0000"
    },
    {
        name: "Michael Brown",
        age: 20,
        address: "999 Cedar St, Riverside",
        phone: "777-888-6666"
    },
    {
        name: "Samantha Lee",
        age: 24,
        address: "222 Birch St, Lakeview",
        phone: "444-222-3333"
    },
    {
        name: "David Taylor",
        age: 21,
        address: "555 Walnut St, Hillside",
        phone: "111-777-2222"
    },
    {
        name: "Olivia Wilson",
        age: 22,
        address: "888 Chestnut St, Mountainville",
        phone: "999-444-8888"
    },
    {
        name: "Matthew Martinez",
        age: 20,
        address: "777 Aspen St, Valleytown",
        phone: "666-333-1111"
    },
    {
        name: "Sophia Garcia",
        age: 21,
        address: "333 Spruce St, Meadowville",
        phone: "222-666-4444"
    },
    {
        name: "James Rodriguez",
        age: 23,
        address: "666 Oak St, Beachside",
        phone: "555-000-3333"
    },
    {
        name: "Isabella Hernandez",
        age: 20,
        address: "444 Pine St, Hilltop",
        phone: "777-111-8888"
    },
    {
        name: "Ethan Lopez",
        age: 22,
        address: "111 Elm St, Lakeshore",
        phone: "333-888-5555"
    },
    {
        name: "Ava Gonzalez",
        age: 24,
        address: "222 Cedar St, Riverview",
        phone: "666-999-2222"
    },
    {
        name: "Alexander Perez",
        age: 21,
        address: "888 Maple St, Cliffside",
        phone: "111-333-7777"
    },
    {
        name: "Mia Torres",
        age: 23,
        address: "777 Birch St, Hillcrest",
        phone: "444-777-5555"
    },
    {
        name: "William Flores",
        age: 22,
        address: "555 Walnut St, Lakeside",
        phone: "888-222-9999"
    },
    {
        name: "Charlotte Ramirez",
        age: 20,
        address: "333 Pine St, Mountainview",
        phone: "222-888-1111"
    },
    {
        name: "Daniel Cruz",
        age: 24,
        address: "999 Elm St, Valleyview",
        phone: "777-444-3333"
    }
];

//asscending order function
const asscSort = (arr) => {
    const sortedStudent = arr.sort((a, b) => a.age - b.age);
    return sortedStudent
}

let resAsc = asscSort(students);
console.log(resAsc)



//descending order function
const decSort  = (decArr) =>{
    const sortedStudent = decArr.sort((a, b) => b.age - a.age);
    return sortedStudent
}

let resdec = decSort(students);
console.log(resdec)
