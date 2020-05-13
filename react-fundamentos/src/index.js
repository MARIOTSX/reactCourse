import React from 'react';
import ReactDOM from 'react-dom';

const name='Mario Edgar Quiroz Guzman';

/*
const user1 ={
  name: 'Gerardo Quiroz',
  age: 28,
  country:'México'
}

function getInfo(user){
  return  `Hola mi nombre es ${user.name} y soy de ${user.country}`;
}
*/

class TarjetaFruta extends React.Component{
 
 constructor(){
   super();

   this.state = {
     cantidad: 10
   }
 }

  render(){
    return (
      <div>
      <h3>{this.props.name}</h3>
      <hr/>
    <div> Cantidad: {  this.state.cantidad }</div>
      <button onClick={()=>{
        this.setState({cantidad: this.state.cantidad+1})
      }
      }>
        Agregar
      </button>
      <p>{this.props.price}</p>
      <p>This is the real shit</p>
    </div>
    )
  }
}
   

const App = () => (
    <div>
      <TarjetaFruta name='Sandia' price={4.00}/>
      <TarjetaFruta name='Melón'/>
      <TarjetaFruta name='Kiwi'/>
    </div>
) ;
//<h1>Hola React { name }, tengo { user1.age} , y el doble de mi edad es: {user1.age * 2}, y además { getInfo//(user1) } </h1>

ReactDOM.render(<App />,document.getElementById('root'));
