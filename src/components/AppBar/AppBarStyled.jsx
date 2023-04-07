import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    border-radius: ${p => p.theme.radii.large};
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`;

export { Header }