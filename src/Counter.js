import React, { Component } from "react";


class Counter extends Component {

    // class field 방식 초기화
    state = {
        number: 0
    }

    constructor(props) {
        super(props);

        // 위의 class field 방식 대신, 아래처럼 생성자에서 state 정의해도 무방.
        // 둘다 정의되어 있다면 호출 순서는 class field 선언 및 초기화 후, constructor 실행 됨.
        this.state = {
            number: 2,
            foo: "bar"
        }

        // 함수 binding 객체로 this(class객체) 넘겨주기.
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    // 아래와 같이 고전적인 기존 형태로 함수 구현 시, this(class 객체)가 함수에 바인딩되어 넘어오지 않음..
    // onClick 에 함수 연결 시, this를 바인딩 시켜주거나 생성자에서 this가 바인딩된 형태로 함수 재정의하기.
    handleIncrease() {
        this.setState({
            number: this.state.number + 1,
            foo: {
                ...this.state.foo,
                foobar: 2
            }
        });
    }

    handleDecrease() {
        // 코드 개선
        // this.setState({
        //     number: this.state.number - 1
        // })
        // this.setState(
        //     // (state) => ({
        //     //     number: state.number - 1
        //     // })
        //     ({number}) => ({
        //         number: number - 1
        //     })
        // );

        const { number } = this.state;

        this.setState({
            number: number - 1
        })
    }

    // Arrow Function 으로 구현
    // 화살표 함수에서의 this는 함수를 정의하고 있는 객체 // 함수 연결 시, this 바인딩 불필요
    // handleIncrease = () => {
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }

    // handleDecrease = () => {
    //     this.setState({
    //         number: this.state.number - 1
    //     });
    // }


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>value : {this.state.number}</div>
                {/* // 아래처럼 this 바인딩 시켜주기 */}
                {/* <button onClick={this.handleIncrease.bind(this)}>+</button>
                <button onClick={this.handleDecrease.bind(this)}>-</button> */}
                {/* // 여기서 this 바인딩 시켜주지 않고, 생성자에서 바인딩 처리 가능 */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                {/* // event name은 CamelCase (html 속성과 다름) */}
                </div>
        )
    }
}

export default Counter;