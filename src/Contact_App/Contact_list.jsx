import React from "react";
let Contact_list = (props) => {
    return <div>
        <table border="1">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.login.uuid.slice(-8)}</td>
                            <td>{user.name.first}</td>
                            <td>{user.location.city}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default Contact_list;