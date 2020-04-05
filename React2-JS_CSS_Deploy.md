### JS 코딩하는 법

create-react-app 이 제공하는 샘플 어플리케이션의 구조를 확인하기 위해<br>
텍스트 에디터에서 hello-react 프로젝트 폴더를 확인한다.

src, public 디렉토리의 파일을 수정해서 리액트 사용하기.

- public/index.html 파일은 리액트를 실행시켰을 때 나오는 샘플 페이지.<br>
  `<div id="root"></div>` 태그가 있는데, 컴포넌트는 이 태그 안에 있어야 한다.<br>
  이 태그의 내용은 src(source) 디렉토리 밑에 있다.<br>
  앞으로 작업하는 모든 파일은 src에 저장해야한다.

- src/index.js 파일은 엔트리, 진입 파일이라 부른다.<br>
  ReactDOM.render(<App />, document.getElementById('root'));

  자바 스크립트의 선택자와 같은 document.getElementById('root') 코드를 기반으로 한 이 코드는<br>
  index.html의 `<div id="root"/>`를 가리킨다.

- `<App />` 코드가 컴포넌트이다. 이것을 실제 구현한 코드의 내용은 App.js<br>
index.js에서 import App from './App'; 사용하는 실제 실행되는 코드의 내용이다

`public/index.html - src/index.js - src/App.js`

    수업은 class 방식으로 진행한다

    - function type
    import React from 'react';
    import './App.css';

    function App() {
    return{
    <div className="App">
    </div>
    }
    }

    - class type
    import React, { Component } from 'react';
    import './App.css';

    class App extends Component {
    render(){
    return(
    <div className="App">
    </div>
    );
    }
    }

### CSS 코딩하는 법

index.js 에 import './index.css'; import된 index.css 파일을 수정 할 수 있다.<br>
샘플 페이지의 CSS가 수정됨.

### deploy 배포하는 법

react 앱 실행 - 개발자 도구 - 네트워크 탭 - 새로고침 버튼 오른쪽 클릭하면<br>
캐시 비우기 및 강력 새로고침 항목이 있다. Empty Cache and Hard Reload<br>
이 옵션으로 새로고침하면 용량이 줄어든다.<br>
create-react-app의 기본 실행환경 파일이 무겁기 때문에 캐시를 비워줌.

create-react-app 은 개발환경을 실행할 때 __npm run start__ 를 사용한다<br>
build 할 때는 **npm run build**<br>
기존의 디렉터리 구조에 build 디렉토리가 추가된다.

불필요한 공백을 삭제해서 용량을 줄이므로<br>
실제로 서비스할 때에는 build 폴더 안에 든 파일을 사용한다.

    npm으로 설치할 수 있는 간단한 웹서버 serve
    npm install -g serve

    npx serve //한 번만 실행시킬 웹 서버 설치.

    npx serve -s build
    serve라는 웹 서버를 다운로드 받아서 build를 document root로 지정.
