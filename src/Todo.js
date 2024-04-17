import React , { Component} from 'react'

function Todo({user, name, done, description}){
    return (
        <>
            <h2>사용자: {user}</h2>
            <h3>할 일 제목: {name}</h3>
            <h4>할 일 종료 여부 : {done? "종료" : "진행중"}</h4>
            <p>할 일 상세 : {description}</p>
        </>
    )
}




// class Todo extends Component{
//     constructor(props){//멤버변수 초기화. 초기 데이터 
//         super(props) // 부모의 멤버변수와 메서드 상속받기
//         this.state ={ // 초기 데이터(state) 선언
//             name : 'cleaning',
//             done : false,
//             description: 'cleaing my room on weekends'
//         }
//     }

//     // state : 컴포넌트 내부에서 변경하고 싶은 값 또는 변경해야 되는 값
//     // 이벤트핸들러 > 데이터(state) 변경
//     changeTodoName = () => {
//         this.setState({ name : '변경하고 싶은 타이틀'}) // state에서 바꾸고 싶을 때 사용
//     }


//     //ui > jsx문법
//     render(){
//         const { name, done, description } = this.state // 디스트럭처링 할당
//         const {user, age} = this.props
//         console.log(this.props)
//         return(
//             <>
//                 <h2>사용자 : {user}({age})</h2>
//                 <h3>할 일 제목: {name}</h3>
//                 <h4>할 일 종료 여부 : {done ? '종료': '진행중'}</h4>
//                 <p>할 일 상세 설명 : {description}</p>
//                 <button onClick={this.changeTodoName}>할 일 제목 변경</button>
//             </>
//             //this : todo
//         )

//     }
// }

export default Todo