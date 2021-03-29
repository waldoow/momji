import { Table } from 'react-bootstrap';

const UsersTable = (props) => {
    const users = props.users;
    
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Registered</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(users).map(key => {
                        return (
                            <tr key={key}>
                                <td>{ users[key].profile.firstName }</td>
                                <td>{ users[key].profile.lastName }</td>
                                <td>{ users[key].email }</td>
                                <td>{ users[key].address }</td>
                                <td>{ users[key].registered }</td>
                                <td>{ users[key].isActive ? 'true': 'false' }</td>
                            </tr> 
                        )
                    })
                }
            </tbody>
        </Table>
    );

}

export default UsersTable;