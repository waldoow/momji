import { Table, Form, Button } from 'react-bootstrap';
import { useState }            from 'react';
import FormModal               from '../form/form';

const UsersTable = (props) => {
    const users                           = props.users;
    const [filter, setFilter]             = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [userToEdit, setUserToEdit]     = useState({})

    const handleModalDisplay = (value) => {
        setDisplayModal(value);
    }

    const items = Object.values(users).filter((user) => {
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

        // to always have a return to avoid some weird cases
        return '';
    }).map(user => {
        return (
            <tr key={ user.id }>
                <td>{ user.profile.firstName }</td>
                <td>{ user.profile.lastName }</td>
                <td>{ user.email }</td>
                <td>{ user.address }</td>
                <td>{ new Date(user.registered).toLocaleDateString('fr-FR') }</td>
                <td>{ user.isActive.toString() }</td>
                <td>
                    <Button onClick={() => {
                        setDisplayModal(true);
                        setUserToEdit(user);
                    }} variant="secondary">Edit</Button>
                </td>
            </tr> 
        )
    });

    return (
        <div className="container">
            <div className="search-bar">
                <Form.Control value={ filter }
                    onChange={ e => setFilter( e.target.value) }
                    size="xl"
                    type="text"
                    placeholder="Search for an User here..."
                />
            </div>

            <FormModal
                show={ displayModal }
                onHide={ () => handleModalDisplay(false) }
                user={ userToEdit }
            />

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>Registered</th>
                        <th>Status</th>
                        <th>Edit</th>
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
