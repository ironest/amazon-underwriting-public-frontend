import React from "react"
import styled from "styled-components"

import {Text, BlackText} from "../../styles/styled-components"

function CarouselOne (props){
    const {legendContent = ""} = props;
    
    return (
        <div>
            {props.children}
            <Text>Hello Alex</Text>
            <Text>Hello 2</Text>
            <div className="legend">{legendContent}</div>
        </div>
    )
}

const StyledCarouselOne = styled(CarouselOne)`
    background-color:blue; 
    height: 100%;
`;


export default StyledCarouselOne;