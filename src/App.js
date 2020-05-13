import React from 'react';
import DropZone from './DropZone/DropZone';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state  = {
      perceptions: [
        {
          text: "Believes Nike represent quality",
          class: 'blue-box'
        },
        {
          text: "Thinks that Nike are constantly innovating",
          class: 'red-box'
        }
      ],
      drivers:[
        {
          text: "From experience, they know that Nike products are reliable/well made",
          class: 'blue-box'
        },
        {
          text: "Emotional connection to the brand’s ‘Just Do It’ ethos",
          class: 'red-box'
        }
      ],
      DesiredPerceptions: [
        {
          text: "From experience, they know that Nike products are reliable/well made",
          class: 'blue-box'
        },
        {
          text: "Emotional connection to the brand’s ‘Just Do It’ ethos",
          class: 'red-box'
        }
      ],
      Preferences: [
        {
          text: "From experience, they know that Nike products are reliable/well made",
          class: 'blue-box'
        },
        {
          text: "Emotional connection to the brand’s ‘Just Do It’ ethos",
          class: 'red-box'
        }
      ],
      Barriers: [
        {
          text: "From experience, they know that Nike products are reliable/well made",
          class: 'blue-box'
        },
        {
          text: "Emotional connection to the brand’s ‘Just Do It’ ethos",
          class: 'red-box'
        }
      ]
    }
  }
  addPerception(text, type){
    console.log(text,type)
    const perceptions = this.state.perceptions;
    perceptions.push({
      text: text,
      class: type
    });
    this.setState({perceptions: perceptions})
  }
  addBarrier(text, type){
    const barriers = this.state.Barriers;
    barriers.push({
      text: text,
      class: type
    });
    this.setState({Barriers: barriers})
  }
  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 border-right border-bottom">
            <DropZone label="Current perceptions / Behaviours" posts={this.state.perceptions} addBox={this.addPerception} modalType="Perceptions"/>
          </div>
          <div className="col-md-6 border-bottom">
            <DropZone label="Drivers"  posts={this.state.drivers} addBox={this.addPerception}/>
          </div>
          <div className="col-md-4 label-bot border-right">
            <DropZone label="Desired perceptions/behaviours" posts={this.state.DesiredPerceptions} addBox={this.addPerception}/>
          </div>
          <div className="col-md-4 label-bot border-right">
            <DropZone label="Engagement preferences" posts={this.state.Preferences} addBox={this.addPerception}/>
          </div>
          <div className="col-md-4 label-bot border-left">
            <DropZone label="Barriers" posts={this.state.Preferences}  addBox={this.addPerception}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
