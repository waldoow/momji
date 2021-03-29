import { Table, Form } from 'react-bootstrap';
import { useState } from 'react';

const UsersTable = (props) => {
    const users               = props.users;
    const [filter, setFilter] = useState('');
    
    const items  = Object.values(users).filter((user) => {
        if ('' === filter) {
            return user;
        } else if(
            user.profile.firstName.toLowerCase().includes(filter.toLowerCase()) ||
            user.profile.lastName.toLowerCase().includes(filter.toLowerCase()) ||
            user.email.toLowerCase().includes(filter.toLowerCase()) ||
            user.address.toLowerCase().includes(filter.toLowerCase()) ||
            new Date(user.registered).toLocaleDateString('fr-FR').toLowerCase().includes(filter.toLowerCase()) ||
            user.isActive.toString().includes(filter.toLowerCase())
        ) {
            return user;
        }
    }).map(key => {
            return (
                <tr key={ key.id }>
                    <td>{ key.profile.firstName }</td>
                    <td>{ key.profile.lastName }</td>
                    <td>{ key.email }</td>
                    <td>{ key.address }</td>
                    <td>{ new Date(key.registered).toLocaleDateString('fr-FR') }</td>
                    <td>{ key.isActive.toString() }</td>
                </tr> 
            )
        })
    ;

    return (
        <div className="container">
            <div className="container">
                <Form.Control value={ filter } onChange={ e => setFilter( e.target.value) } size="xl" type="text" placeholder="Search for an User here..." />
            </div>

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
                    { items }
                </tbody>
            </Table>
        </div>
    );
}

export default UsersTable;