import React,{Component} from 'react';
import '../App.css';

class Fecha extends Component{
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().getDate(),
          month:new Date().getMonth() + 1,
          year:new Date().getFullYear(),
         
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
           
        });
      }
      render() {
        return (
          <p id="fecha">
            {this.state.date} / {this.state.month} / {this.state.year}
          </p>
        );
      }
}

export default Fecha;