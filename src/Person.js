// 컴포넌트는 첫글자를 대문자로 쓰는 것이 좋음
import React from 'react'
// 자바스크립트 모듈 : 재사용 가능한 파일이나 객체 
const Person = ({name, age})=>{

    return (
        <>
            <h3>이름 : {name}</h3>
            <h4>나이 : {age}</h4>
        </>
    )
}

export default Person