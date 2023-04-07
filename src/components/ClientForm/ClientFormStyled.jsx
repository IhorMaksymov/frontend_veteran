import { Form, Field } from 'formik';
import styled from 'styled-components';

const Conteiner = styled.div`
    margin-bottom: ${p => p.theme.space[5]}px;
`

const FieldForm = styled(Form)`
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
`;

const Input = styled(Field)`
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    margin-left: ${p => p.theme.space[2]}px;
    &:hover, :focus {
       box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2); 
    };
`;

export { Conteiner, FieldForm, Label, Input }