import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";

import { signup } from "../../redux/auth/authOperation";

import { Container, FieldForm, Label, InputField, BtnSub } from './RegisterFormStyled';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegisterForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            signup(value),
        )
        resetForm();
    }

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <FieldForm autoComplete="off">
                    <Label htmlFor="">
                        Email
                        <InputField
                            type="text"
                            name="email"
                            required
                        />
                    </Label>
                    <Label htmlFor="">
                        Password
                        <InputField
                            type="text"
                            name="password"
                            required
                        />
                    </Label>
                    <BtnSub type="submit">Register</BtnSub>
                </FieldForm>
            </Formik>
        </Container>
    )
}

export default RegisterForm;