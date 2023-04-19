import './App.css';
import React,{Component} from"react" ;
import Person from './components/Person';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    peoples: [
      {
        name : "Saikat",
        age: "19" ,
      }, 
      {
        name:"raj",age:"10",
      } ,
      {
        name:"sayan",
        age:"20",
      },

  // dynamic ... if we make changes  it will render automatically...
  {
    name:"demo_name",
    age:"210",
  },

    ],
    } ;
  }
  buttonClickHandler(){
  console.log(this.state)
  }
  render(){
    let  peoples ;
    peoples= this.state.peoples.map((manus, index)=>{
      return <Person key={index} name={manus.name} age={manus.age}/> 
      // Key is not a props. and it cannot be displayed. It needs unique value. Otherwise and error will be thrown in console 
    }) ;
    return(
     <div className='App'>
      {peoples}
     </div>

    ) ;
      
    
  }
}


export default App;
