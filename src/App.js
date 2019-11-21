import React from 'react';
import './App.css';
class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '****************',
      ValidThru: '11/50',
      Valid: '',
      name: 'CARDHOLDER',
    }
  }
  numberChanging = event => {
    this.setState({
      number: event.target.value,
    });
  }
  nameChanging = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  validChanging = (event) => {
    this.setState({
      ValidThru: event.target.value.slice(0, 2) + '/' + event.target.value.slice(2, 4)
    });
  }

render(){
  return(
    <div className='wrapping-div'>
      <div className='credit-card' >
        <h1 className='card'>CREDIT-CARD</h1>
        <img src='https://cdn.freebiesupply.com/logos/large/2x/chip-1-logo-png-transparent.png' width='100px'/>
        <div className='infos'>
          <div className='container'>
            <div className='Credit-number'>
              <h5> {this.state.number.padEnd(16,'*').replace(/(.{4})/g, '$1 ')} </h5>
            </div>
            <div className='number-date'>
              

              <div className='code-ps'>
                <h1 className='ValidThru'>{this.state.ValidThru.padEnd(4,'*')}</h1>
              </div>
            </div>
            <p className='name'><h1>{this.state.name.toUpperCase()}</h1></p>
          </div>
          <img className='visa-card-logo' src='http://mcgrathpestcontrol.com/wp-content/uploads/2015/08/mcvisa.png' width='120px'/>
        </div>
      </div>
      <div className='labels'>
        <input type="text" maxLength="16" onChange={this.numberChanging} placeholder='Number' />
        <input type="text" maxLength='20' onChange={this.nameChanging} placeholder='name' />
        <input type="text" maxLength="4" onChange={this.validChanging} placeholder='ValidThru' />
      </div>
      </div>)
}
}




export default Credit;