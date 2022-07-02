import React, { Component } from "react";
import Employee from "./Employee";
import EmployeeAdd from "./EmployeeAdd";

class EmployeesList extends Component {
    state = {
        Employees: [

        ]
    };

    fireEmployee = (id) => {
        const { Employees } = this.state;
        this.setState({
            Employees: Employees.filter((Employee) => {
                return Employee.id !== id;
            })
        });
    };

    hireEmployee = Employee=> {
        this.setState({
            Employees:[...this.state.Employees,Employee],
        });
    };
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Employees.map(Employee => {
                            <Employee
                            key={Employee.id}
                                id={Employee.id}
                                name={Employee.name}
                                job={Employee.job}
                                fire={this.fireEmployee}
                                />
                        })}
                    </tbody>
                </table>
                <hr />
                <EmployeeAdd
                 hire={this.hireEmployee} 
                 />
                </>
            );
    }
}

export default EmployeesList;