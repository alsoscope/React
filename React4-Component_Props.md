### 강의 4. Props

- 만든 리액트 태그 <Subject>등..을 다른 웹페이지나 패키지(소프트웨어)로 만들어서 인터넷에 올리면<br>
  자신이 정의한 태그를 다른 사람들이 자신의 어플리케이션에 사용할 수도 있다.

- 현 시점에서 <Subject> 태그는 항상 같은 결과를 보여준다.

  예를 들어, `<li><a href=""></a></li>`<br>
  link 태그의 a태그의 href="" 라는 속성(attribute)에 속한 각기 다른 주소를 표현하도록 한다.<br>
  태그의 이름이라는 공통점과 속성이라는 차이점을 통해서 재사용성을 높인다.

  항상 똑같은 결과를 보이는 `<Subject>` 태그의 경우,<br>
  `<Subject title="" sub="">` title, sub 속성을 붙여 문자열 태그를 조정한다.

### 리액트 공식 문서의 Components and Props
__컴포넌트의 속성을 표현 할 수 있다__

      class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }
    
class Subject 컴포넌트가 실행될 때 title="" 속성을 그 컴포넌트가 알아내서 위치시킬 수 있도록 해야한다.

- 이때 사용하는 JSX의 기호 `{this.props.title}`<br>
  속성인 title. html의 태그이다. 태그는 이 값을 attribute 라 한다. `리액트는 이것을 props 라고 한다`<br>
  원하는 값의 이름이 title이므로 뒤에 title을 붙인다.

`{this.props.sub}`

이제 Subject의 title, sub 값을 새로 추가하면 Subject 컴포넌트의 입력값이 되어 출력값이 달라진다.

사용자 정의 태그.<br>
이전의 코드를 리팩토링한다.

    Class App
    <Content title="HTML" desc="..">

    Class Content
    {this.props.title}
    {this.props.desc}
