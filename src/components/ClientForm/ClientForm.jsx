import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addClient } from "../../redux/clients/clientsOperation";

import { Conteiner, FieldForm, Label, Input } from "./ClientFormStyled";

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
        <Conteiner>
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <FieldForm autoComplete="off">
                    <Label htmlFor="">
                        Name
                        <Input
                            type='text'
                            name='name'
                            required
                        />
                    </Label>
                    <Label htmlFor="">
                        Email
                        <Input
                            type='text'
                            name='email'
                            required
                        />
                    </Label>
                    <Label htmlFor="">
                        Phone
                        <Input
                            type='text'
                            name='phone'
                            required
                        />
                    </Label>
                    <button type="submit">Add client</button>
                </FieldForm>
            </Formik>
        </Conteiner>
    )

};

export default ClientForm;