import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addClient } from "../../redux/clients/clientsOperation";

import { FieldForm, Input } from "./ClientFormStyled";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
})

const ClientForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (value, { resetForm }) => {
        dispatch(addClient(value));
        resetForm();
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <FieldForm>
                <label>
                    Name
                    <Input
                        type='text'
                        name='name'
                        required
                    />
                </label>
                <label>
                    Email
                    <Input
                        type='text'
                        name='email'
                        required
                    />
                </label>
                <label>
                    Phone
                    <Input
                        type='text'
                        name='phone'
                        required
                    />
                </label>
                <button type="submit">Add client</button>
            </FieldForm>
        </Formik>
    )

}

export default ClientForm;