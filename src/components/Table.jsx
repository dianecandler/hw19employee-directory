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
    //  search by function - user search
    search = event => {
        let userSearcher = event.target.value;
        console.log(userSearcher);

        if(userSearcher === "") {
            this.setState({
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
            })
        } else {
            const filterItems = data.filter(el => el.name.first.toLowerCase().indexOf(userSearcher.toLowerCase()) !== -1);
            

            console.log(filterItems);
    
            this.setState({employees: filterItems});

        }

    }
    // const filterItems = (arr, query) => {
    //     return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    //   }
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <input type="search" placeholder="Search" style={{ textAlign: 'center', padding: '10px', margin: '30px', width: '40%' }} onChange={event => this.search(event)} />
                </div>
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
            </div>

        )
    }
}
