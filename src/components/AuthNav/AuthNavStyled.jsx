import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavRegister = styled(NavLink)`
    color: ${p => p.theme.colors.brColors};
    text-decoration: none;
    margin-right: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    &:hover {
        color: ${p => p.theme.colors.btnColor}
    };
    &.active {
        color: ${p => p.theme.colors.btnColor};
        text-decoration: underline;
    };
`;

const NavLonIn = styled(NavLink)`
    color: ${p => p.theme.colors.brColors};
    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    &:hover {
        color: ${p => p.theme.colors.btnColor}
    };
    &.active {
        color: ${p => p.theme.colors.btnColor};
        text-decoration: underline;
    };
`;

export { NavRegister, NavLonIn };