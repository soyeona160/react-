import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import React, {Component} from "react";

class Counter extends Component{
    render(){
        return(
            <>
                <h1>props 변경하기</h1>
            </>

        )
    }
}

export default Counter