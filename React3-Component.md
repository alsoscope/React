## 컴포넌트 제작

### 강의 1. 리액트가 없다면

- public directory는 create-react-app 에서,<br>
  npm start / npm run start을 하면 파일을 찾는 document root이다.

- 리액트가 아닌 html 코드 파일을 만든다.<br>
  기존의 HTML 태그 위로 HTML5 스펙인 semantic tag로 감싼다.<br>
  Semantic의 뜻은 "의미의, 의미론적인".. HTML 태그의 의미를 명확하게 할 수 있다.

- 같은 태그가 수천, 수만 개 일 때<br>
예를 들어, <Subject/> 라는 태그의 컴포넌트로 그 내용을 대신 할 수 있다.

### 강의 2. 컴포넌트 만들기 1

- 컴포넌트를 만드는 기본적인 방법

    - pure.html의 내용을 리액트로 정리정돈 해본다.

          //컴포넌트를 만드는 코드
          //리액트가 갖고있는 Component 클래스를 상속해서 App이라는 새로운 클래스를 만든다

          class App extends Component {

          //이 클래스는 반드시 render()라는 함수-메소드가 있어야 한다
          //일반적인 함수는 앞에 function이 붙지만, 자바 스크립트의 최신 스펙의 class 에 들어가는 함수는
          //function을 생략한다.

            render() {
              return (
                <div className="App">
                </div>
              );
            }
          }
          export default App;

컴포넌트를 만들 때에는 반드시 하나의 최상위 태그로 시작해야 한다.<br>
`<header/>, <div className="App"/>` 태그가 최상위 태그이다.<br>
`<header/>` 태그는 `<Subject>` 라는 이름의 태그로 정의한다.

  - react 코드에서는 `<Subject>` 인데 리액트가 이 코드를 처리한 다음,<br>
  최종적으로 웹 브라우저가 알아들을 수 있는 `<header>` 태그로 바꿔준 것이다.<br>
  웹브라우저는 리액트를 인지하지 않는다.<br>
  리액트가 최종적으로 웹 브라우저한테 html 코드를 공급해주는 것이다.

- JSX<br>
  App.js 의 코드는 유사 자바 스크립트이다.<br>
  이런 태그를 문자 그대로 사용하지 않기 위해 JSX를 사용한다.<br>
  JSX로 코드를 작성하면 create-react-app 이 알아서 자바 스크립트 코드로 Converting 해준다.

### 강의 3. 컴포넌트 만들기 2

`<nav/>` 태그는 TOC Table Of Content로, `<article />` 태그는 Contents로 옮긴다.

- 리액트의 컴포넌트를 바라보는 첫 번째 시각은 정리정돈의 도구로 본다.<br>
컴포넌트의 이름에만 집중함으로써 복잡도를 낮춘다.<br>
여기서 다시 많은 복잡도를 개선할 수 있는 여지가 생기게 된다.
