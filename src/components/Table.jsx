import React, { Component } from 'react';
import data from "../data.json";
import TableRow from "./TableRow";

export default class Table extends Component {
    // use hooks in next line to simplify code
    state = {
        employees: data.sort(function (a, b) {
            let nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
    }
    render() {
        return (
            <table style={{ tableLayout: "fixed", width: "100%", color: "purple" }}>
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
                    {/* this.state asks about parent, any function or method must be used with this. - Every class needs 1 hook and render is used */}
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
