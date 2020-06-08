import React, { Component } from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'

/*
const App = () => (
  <div>
    <TarjetaFruta name='Sandia' price={4.00}/>
    <TarjetaFruta name='Melón' price={2.00}/>
    <TarjetaFruta name='Kiwi' price={5.00}/>
  </div>
) ;
*/

const styles={
  heigh:'200px',
  background:'gold',
  padding:'1em',
  boxSizing:'border-box'
}

class App extends Component{
  state={
    x:0,
    y:0
  }

  altera = (event)=> {
    this.setState({
    x: event.clientX,
    y: event.clientY
    }
    ) 
  }

  render(){
    return(
      <div 
      style={styles} 
      onMouseMove={this.altera}
      >    
       
          <div>
             x: {this.state.x}
          </div>

          <div>
            y: {this.state.y}
          </div>
        
      </div>
     
    )
  } 
}

export default App
