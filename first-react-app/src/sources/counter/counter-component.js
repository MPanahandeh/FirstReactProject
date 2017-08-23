import React, { Component } from 'react';

class CounterComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {prop : 'Mehrdaddy here'}
     }
     render() {
         return (
             <div>
                {this.state.prop}
             </div>
        );
     }
}

export default CounterComponent;