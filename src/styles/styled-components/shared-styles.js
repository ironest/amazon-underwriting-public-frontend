import styled from "styled-components";

export const CustomComponent = styled.div`
    background-color: blue;
    height: 150px;
`;

export const Footerstyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    color: whitesmoke;
    background-color: #1c2938;
    font-size: small;
    flex-shrink: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

// generic text styling for whole site.
export const Text = styled.p`
    color: white;
    size: 10px;
`;

export const Heading = styled(Text)`
    color: white;
    size: 20px;
`;