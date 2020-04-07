import React,{Component} from 'react'
import './spinner.css';

class Spinner extends Component {
    render(){
        const {show} = this.props;

        return ( 
          
            <React.Fragment>
                {show? 
                <div id="loading"></div>
                : null
                }
            </React.Fragment>
        );  
    }
  
}

export default Spinner;