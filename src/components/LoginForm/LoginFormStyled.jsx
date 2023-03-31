import styled from "styled-components";
import { Field, Form } from "formik";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: auto;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
    border-radius: ${p => p.theme.radii.average};
    padding: ${p => p.theme.space[4]}px;
`;

const FieldForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

const InputField = styled(Field)`
    margin-top: ${p => p.theme.space[2]}px;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    &:hover, :focus {
       box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2); 
    };
`;

const BtnSub = styled.button`
    background: ${p => p.theme.colors.btnColor};
    color: ${p => p.theme.colors.baseWhite};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    border: none;
    border-radius: ${p => p.theme.radii.average};
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.space[2]}px;
    text-transform: uppercase;
    &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
    }
`;

export { Container, FieldForm, Label, InputField, BtnSub };