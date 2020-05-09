import React from 'react';
import ReactDOM from 'react-dom';

const name='Mario Edgar Quiroz Guzman';

const user1 ={
  name: 'Gerardo Quiroz',
  age: 28,
  country:'México'
}

function getInfo(user){
  return  `Hola mi nombre es ${user.name} y soy de ${user.country}`;
}

const App = <h1>Hola React { name }, tengo { user1.age} , y el doble de mi edad es: {user1.age * 2}, y además { getInfo(user1) } </h1>

ReactDOM.render(App,document.getElementById('root'));
