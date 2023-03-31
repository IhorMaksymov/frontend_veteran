import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/authOperation";

import { Container, FieldForm, Label, InputField, BtnSub } from './LoginFormStyled';

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

const LoginForm = ({ objectForm }) => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            login(value),
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
                    <BtnSub type="submit">Login</BtnSub>
                </FieldForm>
            </Formik>
        </Container>
    )
}

export default LoginForm;