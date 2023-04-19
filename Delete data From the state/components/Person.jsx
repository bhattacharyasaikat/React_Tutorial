import React,{Component} from "react" ;
import './person.css' ;


class Person extends Component{
  constructor(props){

    super(props) ;
    this.props = props ;

  }

  
  render(){
    return(
     <div className="border" onClick={this.props.remove}>
      <h1>
        <label className="label">Name</label>:<i>{this.props.name}</i>
        <br />
        <label className="label">age</label>:<i>{this.props.age}</i>
      </h1>
     </div>
    ) ;
  }
}
export default Person;


