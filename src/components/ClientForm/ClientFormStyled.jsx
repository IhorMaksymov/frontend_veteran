import { Form, Field } from 'formik';
import styled from 'styled-components';

const FieldForm = styled(Form)`
    display: flex;
    justify-content: space-around;
`;

const Input = styled(Field)`
    margin-top: ${p => p.theme.space[2]}px;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    &:hover, :focus {
       box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2); 
    };
`;

export { FieldForm, Input }