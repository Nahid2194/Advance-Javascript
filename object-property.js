const students = [
    {id:21 , name : "Nahid"},
    {id:31 , name : "Jahid"},
    {id:41 , name : "Joni"},
    {id:51 , name : "Moni"},
]

const MapName = students.map(x => x.name);
console.log(MapName);

let newArray = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    newArray.push(element);  
}
console.log(newArray);