import styled from "styled-components";


// styling for common elements
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

// styling for carousel.
export const Text = styled.p`
    color: white;
    font-size: 15px;
    text-align: left;
    margin-left: 10px;
`;

export const Heading = styled.h2`
    color: white;
    font-size: 30px;
    text-align: left;
    margin-left: 10px;
    margin-top: 100px;
`;
export const Link = styled.a`
    text-align: left;
    // margin-left: 10px;
`