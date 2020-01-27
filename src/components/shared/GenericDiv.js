import React from "react"


function GenericDiv ( ) {

    return (
        <div>
            Hello Alex
        </div>
    )
}

export const CustomComponent = styled(GenericDiv)`
    
    background-color: blue;
    height: 150px;
`;