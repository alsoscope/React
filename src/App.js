import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import MyName from './02_props_state';
import Counter2 from './04_state';

class App extends Component {
  render() {

    const name = 'whatever';
    const value = 1;

    //style,CSS 클래스 설정
    const style = {
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontsize:'12px'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <div>
              Hello
            </div>
            <div>
              world
            </div>

            {/*const 한 번 선언하고 바뀌지 않는 값. 바뀌게 될 수 있는 값은 let*/}
            <div> so {name}</div>

            {/*조건부 렌더링 : 삼항연산자*/}
            <div>
              {
                1 + 1 === 2
                  ? (<div>true</div>)
                  : (<div>false</div>)
              }
            </div>

            {/*조건부 렌더링 : AND 연산자 TRUE일 때만 결과 보여줌*/}
            <div>
              {
                1 + 1 === 2 && (<div>true!!</div>)
              }
            </div>

            {/*복잡한 조건은 웬만하면 JSX밖에서, 내부에서 사용해야 한다면 IIFE(즉시 실행 함수 표현 사용 if문등)*/}
            <div>
              {
                (function(){
                  if (value === 1) return (<div>하나</div>)
                  if (value === 2) return (<div>둘</div>)
                  if (value === 3) return (<div>셋</div>)
                })()
              }
            </div>

            {/*CSS 클래스 설정*/}
            <div style={style}>
             HI THERE
            </div>

            {/* 01, 02_props_state.js name이라는 props값 설정
              <MyName name="'리액트'"/>
            */}

            {/*props가 빠졌거나 빼놨을 경우 name값 없이, default Props로 기본값 설정*/}
            {/*<MyName />*/}

            {/*03_state.js 호출. 컴포넌트를 App에서 불러와 렌더링.*/}
            {/*<Counter />*/}

            <Counter2 />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
