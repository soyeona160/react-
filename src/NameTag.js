

import React, {Component} from "react";


class NameTag extends Component{
    state = {
        name : 'yeona'
    }

    changeName = ()=>{
        this.state.name = '변경한다'
    }

    render(){
        console.log('eeee')

        const {name} = this.state
        return (
            <>
                <h1>{name}</h1>
                <button onClick={this.changeName}> 이름 변경 </button>
            </>
        )
    }
}
export default NameTag