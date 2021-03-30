import React, { Component } from 'react';

// Class Component VS Functional Component
// 클래스 컴포넌트 : state 과 life cylce을 가지고 있음.

// Functional Component
const MyName = ({name}) => {
    return (
        <div>
            안녕하세요! 제 이름은 <b>{name}</b> 입니다.
        </div>
    )
}

MyName.defaultProps = {
    name: "몰라요2"
}

// Class Component
// class MyName extends Component {
//     // static defaultProps = {
//     //     name: 'default name'
//     // }
//     render() {
//         return (
//             <div>
//                 안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         )
//     }
// }

// MyName.defaultProps = {
//     name: '기본 이름'
// }

export default MyName;