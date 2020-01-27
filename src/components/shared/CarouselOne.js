import React from "react"
import styled from "styled-components"

import {Text, Heading} from "../../styles/styled-components"

function CarouselOne (props){
    const {legendContent = ""} = props;
    
    return (
        <div>
            {props.children}
            <Heading>Newsletter example 1</Heading>
            <Text>text about the Newsletter</Text>
            <div className="legend">{legendContent}</div>
        </div>
    )
}

const StyledCarouselOne = styled(CarouselOne)`
    background-color: blue; 
    height: 100%;
`;


export default StyledCarouselOne;