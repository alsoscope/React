import React, { Component } from 'react';

class Counter extends Component {

  //   class field에서 컴포넌트의 state를 정의하지 않았을 때 이렇게 정의한다
  //   class field를 사용하는 것은 편의를 위함.
  //   super(props); 를 호출한 이유는 컴포넌트를 만들게 되면서 Component를 상속했으며,
  //   이렇게 constructor를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 된다
  //   그렇기에 리액트 컴포넌트가 지니고 있던 생성자를 super로 미리실행하고 다음 state 설정 작업을 하면 됨
  //
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       number : 0
  //     }
  //   }
  //   state에 있는 값을 바꾸기 위해서는 this.setState를 무조건 거쳐야한다
  //   리액트에서는 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계되어 있다
  //   setState는 객체로 전달되는 값만 업데이트 해줌
  //   setState는 다른 값이 하나 더 있으면 객체를 더 깊숙히 확인하지 못해 다른 값은 업데이트 되지 않음
  //   자바 스크립트의 전개연산자를 사용. 기존의 객체 안에 있는 내용을 해당 위치에 풀어준다는 의미.
  //   다음에, 설정하고 싶은 값을 또 넣어주면 해당 값을 덮어쓰게 된다
  //   immutable.js / immer.js 를 사용하여 간단하게 할 수 있음

  state = {
    number : 0
  }

  handleIncrease = () => {
    this.setState({
      number : this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number : this.state.number -1
    });
  }

  //render함수에서 이벤트 설정
  render(){
    return (
      <div>
        <h3>카운터</h3>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        {/*이벤트에 전달해주는 값은 함수여야 한다. 메소드 호출x*/}
      </div>
    );
  }
}

export default Counter;
