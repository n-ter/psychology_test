import React, { Component } from "react";
import { render } from "react-dom";

import "./CheckAnxiety.css";

class CheckAnxiety extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Нажми на меня",
      statTime: 0,
      duration: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.statTime !== 0) {
      
      this.setState(prevState => {
        return {
          text: "Нажми на меня",
          duration: Math.floor((Date.now() - prevState.statTime)/1000),
          statTime: 0
        }
      })
      
    } else {
      this.setState({
        text: 'Нажми через минуту',
        duration: 0,
        statTime: Date.now()
      })
    }
  }

  render() {
    return (
      <div className="CheckAnxiety">
        <p>
          Задание: нажмите на кнопку и подождите минуту по вашем ощущениям. На часы смотреть не надо — в этом суть теста.
          При повторном нажатии появится результат теста.
          </p>
        
        <button className="CheckAnxiety__button" onClick={this.handleClick}>
          {this.state.text}
        </button>
        
        {this.state.duration !== 0 && <div className="CheckAnxiety__result">
         Ваш результат: {this.state.duration}
          
          <h3>Расшифровка:</h3>
          <p>
           55-65: вы в норме
          </p>
          <p>
           55 и меньше: высокая тревожность
          </p>
          <p>
           65 и больше: пора пить кофе
          </p>
        </div>}
      </div>
    );
  }
}

const App = () =>
  <div className="App">
    <h2>Проверка тревожности по внутреннему течению времени</h2>
    <CheckAnxiety />
  </div>;
  
export default App;
