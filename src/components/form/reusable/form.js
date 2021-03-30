import { useForm }      from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

// upperCase here because react-hook-from library
//doesn't accept it with the first letter in lowercase
const ReusableForm = ({ template }) => {
    const { register, handleSubmit } = useForm();

    // the object to update the user, for id,
    //i wrote this code for a rest api so for a put, the id should be in the url.    
    const onSubmit     = data => console.log(data);
    let { fields }     = template;
    const renderFields = (fields) => {
        return fields.map(field => {
            let { title, type, name, oldValue } = field;

            return (
                <div key={ name }>
                    <Form.Group key={ name } controlId={ name }>
                        <Form.Label>{ title }</Form.Label>
                        <Form.Control
                            type={ type }
                            placeholder={ oldValue }
                            name={ name }
                            ref={ register }
                        />
                    </Form.Group>
                </div>   
            )
        })
    }

    return(
        <>
            <Form onSubmit={ handleSubmit(onSubmit) }>
                { renderFields(fields) }

                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ReusableForm;