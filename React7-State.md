### state 사용

state값을 subject title로 준다

    <Subject title="this.state.subject.title"></Subject>

이렇게해서 화면 reload 하면 <Subject /> 컴포넌트 타이틀 값으로<br>
this.state.subject.title 문자열이 그대로 찍힌다.

react에서는 props에는 문자열을 따옴표로 묶어주고<br>
문자열이 아닌 자바 스크립트 코드로 실행되게 하고 싶으면 __중괄호__를 사용한다

- this.state로 초기화한 title 값인 'WEB' 이 찍힌다.

      <Subject title={this.state.subject.title}>
    
- state에서 가져온 sub 값이 찍힌다.

      <Subject title={this.state.subject.title} sub={this.state.subject.sub}>

App.js 를 사용하는 파일인 index.js 를 보면 App 이라는 컴포넌트를 실행하는 코드가 있지만 `<App />`<br>
이 코드를 그냥 볼 때는 내부적으로 state의 subject가 있는지 없는지 알 수 없다.<br>

외부에서 알 필요가 없는 정보는 철저하게 은닉한다. 철저하게 숨기는 것이 좋은 사용성을 만드는 핵심이다.<br>
마치 밖에서는 제품의 전선이 보이지 않는다는 것과 같다.

**App 이 내부적으로 사용할 상태는 state라는 형태를 통해서 사용한다.**

이렇게 만들어진 state 값을 Subject라는 컴포넌트에 props 값으로 준다.

상위 컴포넌트인 App의 상태를 하위 컴포넌트인 Subject로 전달할 때에는<br>
상위 컴포넌트의 state 값을 하위 컴포넌트의 props 값으로 주는 것이 얼마든지 가능하다.
