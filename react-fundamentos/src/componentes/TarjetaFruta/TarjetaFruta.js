import React from 'react'
import styles from './TarjetaFruta.module.css'



class TarjetaFruta extends React.Component{
 
    //constructor()
    //{
       
     //  const METHODS =[
     //    'agregar',
     //    'quitar',
     //    'reset'
     //  ]
   
     //  METHODS.forEach((method)=>{
     //    this[method] = this[method].bind(this)
     //  })
     //  super();
     //  this.state = {
     //    cantidad: 10
     //  }
    //
    //} 
   //inicializadores de propiedad
   //las arrow functions herendan el this del padre en éste caso la clase
   state = {
     cantidad:0
   }
   agregar= () => {
   this.setState({
          cantidad: this.state.cantidad+1
        })
      }
        

   quitar =()=> { this.setState(
       {
         cantidad: this.state.cantidad-1
       }
     )
    }
   
   reset=()=> {this.setState(
       {
         cantidad: this.state.cantidad=0
       }
     )
      }
   
   
     render(){
    
      const hasElement= this.state.cantidad > 0 
      const activeClass= hasElement ? styles['card-active'] : ''
      const clases= styles.card + ' ' + activeClass
        // `TarjetaFruta ${hasElement ? 'TarjetaFruta-Activa':''}`//hasElement ? 'TarjetaFruta-Activa' : 'TarjetaFrutas'
                    

       return (
         <div className={clases}>
         <h3>{this.props.name}</h3>
          <div> Cantidad: {  this.state.cantidad }</div>
            <button onClick={this.agregar}>   +  </button>
            <button onClick={this.quitar}>   -  </button>
            <button onClick={this.reset}>   Limpiar  </button>
            <p>{this.props.price}</p>
            <p>
              Total: ${this.props.price * this.state.cantidad}
            </p>
            <p>This is the real shit</p>
          </div>
       )
     }
   }
      
   export default TarjetaFruta