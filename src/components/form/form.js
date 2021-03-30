import { Modal, Button } from 'react-bootstrap';
import ReusibleForm from './reusable/form'

// upperCase here because react-hook-from library
//doesn't accept it with the first letter in lowercase
const EditForm = (props) => {
    const userToEdit = props.user;

    // template for the reusable form
    const template   = {
        title: 'User Edition From',
        fields: [
            {
                title: 'First Name',
                type: 'text',
                name: 'firstname',
                oldValue: userToEdit.profile?.firstName
            },
            {
                title: 'Last Name',
                type: 'text',
                name: 'lastName',
                oldValue: userToEdit.profile?.lastName
            },
            {
                title: 'E-mail Address',
                type: 'email',
                name: 'email',
                oldValue: userToEdit.profile?.lastName
            },
            {
                title: 'registered',
                type: 'text',
                name: 'registered',
                oldValue: new Date(userToEdit?.registered).toLocaleDateString('fr-FR')
            },
            {
                title: 'isActive',
                type: 'text',
                name: 'isActive',
                oldValue: userToEdit.isActive?.toString()
            },
        ]
    }

    return (
        <Modal
            show={ props.show }
            onHide={ props.onHide }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   { template.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <ReusibleForm
                template={ template }
            />

            </Modal.Body>

            <Modal.Footer>
                <Button >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditForm;
  