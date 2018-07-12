import Circle from "./circle";
import React from "react";

const DashBoard = () => {
    return(
    <div style={{height:"400px",
                     width:"800px"}}
                    >
        <div style={{height:"100%",
            width:"100%",
            border:"1px",
            borderColor:"green",
            borderBottomStyle:"solid",
            borderLeftStyle:"solid",
            position:"relative"
        }}>
            <Circle/>
        </div>
        </div>
    );
};

export default DashBoard;