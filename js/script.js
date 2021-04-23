var students = [
  {
    firstName: 'Francesco',
    lastName: 'Derpis',
    age: 20
  },
  {
    firstName: 'Valerio',
    lastName: 'Alfonzi',
    age: 21
  },
  {
    firstName: 'Federeica',
    lastName: 'De Angelis',
    age: 19
  },
]

var student = {
  firstName: '',
  lastName: '',
  age: ''
}


userStudent(students,);
//userStudent(students, 'albert','alvisss', 888);

for(var index in students){
  var object = students[index]
  console.log(object);
  for(var key in object){
    console.log(object[key]);
  }
  var output = document.getElementById('output').innerHTML += object.firstName +" "+ object.lastName+ " ";
}


function userStudent(arr, name, lastname, age){
  var name = prompt('Come ti chiami?');
  var lastname = prompt("Qual'é il tuo cognome?");
  var age = parseInt(prompt('Quanti anni hai?'));

 arr.push({
    firstName: name,
    lastName: lastname,
    age: age
  });
}
