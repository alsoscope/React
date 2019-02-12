import React, { Component } from 'react';

class Counter2 extends Component {

 state = {
   number : 0
 }

 //setState에 객체 대신 함수 전달하기.
 //setState를 사용하여 기존의 값을 참고하여 업데이트할 때, 03_state.js보다 더 나은 문법으로 할 수 있다
 //this.state를 다시 조회하는 더 나은 문법으로 작성할 수 있다
 handleIncrease = () => {
   const {number} = this.state;
   this.setState (
     ({number}) => ({
       number : number + 1
     })
   );
 }

//setState에 updateter 함수를 만들어서 전달
//(state)가 ({number})가 됐다 : 비구조화 할당 이 문법은 const {number}=this.state; 또는 아래와 같이 작성할 수 있음
//const {number} = this.state;
//this.setState({
//  number : number + 1
//})
 handleDecrease = () => {
   this.setState (
     ({number}) => ({
       number : number - 1
     })
   );
 }

  render(){
    return (
        <div>
          <h3>카운터2</h3>
          <div>값 : {this.state.number}</div>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
        </div>
    );
  }
}

export default Counter2;
