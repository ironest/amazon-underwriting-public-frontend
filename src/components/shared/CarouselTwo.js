import React from "react"
import styled from "styled-components"

import {Text, Heading, Link } from "../../styles/styled-components"

function CarouselTwo (props){
    
    return (
        <div>
            {props.children}
            <Heading>Newsletter example 2</Heading>
            <Text>text about the Newsletter</Text>
            <button><Link href="http://google.com">Link here</Link></button>
        </div>
    )
}

const StyledCarouselTwo = styled(CarouselTwo)`
    background-color: blue; 
    height: 100%;
`;


export default StyledCarouselTwo;