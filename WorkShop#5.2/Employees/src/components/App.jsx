import React, {Component} from "react";
import EmployeesList from "./EmployeesList";

class App extends Component{
    render(){
      return(
        <div className='container'>
          <h1>Hello,React!</h1>
          <EmployeesList/>
        </div>
      );
    }
  }

  export default App;