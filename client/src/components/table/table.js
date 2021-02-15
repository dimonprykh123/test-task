import React from "react"
import {useHistory} from "react-router-dom";
import styles from "./table.module.scss"
export const Table = ({data,location}) => {
    const history = useHistory()
    return (
        <div className={styles.tableWrapper}>
        <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Total clicks</th>
            <th>Total pages views</th>
        </tr>
        </thead>
        <tbody>{
            data.map((data) => {
                return (
                    <tr key={data.id}
                        onClick={() => history.push(`${location.pathname}/${data.first_name} ${data.second_name} ${data.id}`)}>
                        <td>{data.id}</td>
                        <td>{data.first_name}</td>
                        <td>{data.second_name}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.ip_address}</td>
                        <td>{data.clicks}</td>
                        <td>{data.pages}</td>
                    </tr>
                )
            })
        }</tbody>
    </table>
        </div>
    )
}