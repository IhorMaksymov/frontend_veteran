import styled from "styled-components";

const Item = styled.li`
    display: flex;
    justify-content: space-around;
    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[2]}px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
`;

export { Item }