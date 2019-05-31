import React,{Component} from 'react';
import '../App.css';

class Hora extends Component{
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().getDate(),
          month:new Date().getMonth() + 1,
          year:new Date().getFullYear(),
          hour:new Date().getHours(),
          minutes:new Date().getMinutes(),
          sec:new Date().getSeconds()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
            date: new Date().getDate(),
            month:new Date().getMonth() + 1,
            year:new Date().getFullYear(),
            hour:new Date().getHours(),
            minutes:new Date().getMinutes(),
            sec:new Date().getSeconds()
        });
      }
      render() {
        return (
          <p id="hora">
            {this.state.hour}:{this.state.minutes}:{this.state.sec}
          </p>
        );
      }
}

export default Hora;