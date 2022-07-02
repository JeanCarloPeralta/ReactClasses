import React, { Component } from "react";
import Employee from "./Employee";

class EmployeesList extends Component {
    state = {
        Employees: [
            {
                id: 0,
                name: 'John',
                job: 'CEO',
            },

            {
                id: 1,
                name: 'Jane',
                job: 'Manager',
            },

            {
                id: 2,
                name: 'Michelle',
                job: 'Dev',
            },

            {
                id: 3,
                name: 'Tim',
                job: 'Designer',
            },
        ]
    };

    fireEmployee = (id) => {
        const { Employees } = this.state;
        this.setState({
            Employees: Employees.filter((Employee) => {
                return Employee.id !== id;
            })
        })
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Employees.map((Employee) => {
                        <Employee 
                        id= {Employee.id} 
                        name={Employee.name} 
                        job={Employee.job} 
                        fire={this.fireEmployee} />
                    })}
                </tbody>
            </table>
        );
    }
}

export default EmployeesList;