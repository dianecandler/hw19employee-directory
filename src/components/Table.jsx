import React, { Component } from 'react';
import data from "../data.json";
import TableRow from "./TableRow";

export default class Table extends Component {
    state={employees: data}
    render() {
        return (
            <table style={{tableLayout: "fixed", width: "100%", color: "purple"}}>
                <thead>
                    <tr>
                        <th>
                           Image 
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            DOB
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.employees.map(employee => {
                      return (
                          <TableRow 
                            key={employee.id.value}
                            img={employee.picture.thumbnail}
                            fn={employee.name.first}
                            ln={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                          />
                      )
                  })}
                </tbody>
            </table>
        )
    }
}
