import styled from "styled-components";

const UserWrapp = styled.div`
    display: flex;
    align-items: center;
`;

const P = styled.p`
    color: ${p => p.theme.colors.brColors};
    text-decoration: none;
    margin-right: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`;

const Btn = styled.button`
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

export { UserWrapp, P, Btn };