import React from 'react'

export default function TableRow(props) {
    let id = 0;
    return (
        <tr key={id++}>
            <td style={{textAlign: 'center'}}>
                <img src={props.img} alt={props.fn}/>
            </td>
            <td style={{textAlign: 'center'}}>
                {props.fn} {props.ln}
            </td>
            <td style={{textAlign: 'center'}}>
                {props.phone}
            </td>
            <td style={{textAlign: 'center'}}>
                {props.email}
            </td>
            <td style={{textAlign: 'center'}}>
                {props.dob}
            </td>
        </tr>
    )
}

