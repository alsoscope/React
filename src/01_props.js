import React, { Component } from 'react';

class MyName extends Component {

    static defaultProps = {
      name : '기본 이름'
    }

  render() {
    return (
      <div>
        내 이름은 <b> {this.props.name} </b>
        {/* props가 빠졌거나 특정 상황에서 일부러 생략할 때 defaultProps로 props 기본값 설정
          위에 표기 or export 바로 위에
          MyName.dafaultProps = {
            name : '기본이름2'
          };*/}
      </div>

    ) ;
  }
}

export default MyName;
