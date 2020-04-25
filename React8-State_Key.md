## key
> Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.<br>
Key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.

이전의 state는 Subject라는 프로퍼티에 값 하나를 설정하지만<br>
여러 개의 값을 다룰 때에는 달라진다.

<TOC> 안에 있는 데이터를 App의 내부 state를 TOC에 주입해주는 것을 통해<br>
자동으로 데이터를 다르게 한다.

글 목록이 추가될 때 마다 TOC를 열어서 수정하는 것보다<br>
TOC의 부모가 가진 state를 이용해서 그 내부 데이터가 바뀌게 한다.

- App component<br>
  state에 contents 라는 프로퍼티 추가한다<br>
  데이터가 여러 개 이기 때문에 [ ] 대괄호로 배열을 만든다.<br>
  배열의 첫 번째 값은 객체이고 id 값은 1번, title은 HTML, desc....

위 정보를 contents 라고 하는 것에 담겨 있는 배열을 TOC에 주입하고 싶다면<br>
사용하는 쪽의 내용을 바꾼다.

- TOC 컴포넌트<br>
  <TOC data={this.state.contents}> data의 props에 주입시킨다.<br>
  TOC는 내부적으로 this.state.data의 값을 갖는다<br>
  이 값을 이용해서 글 목록을 생성한다.

props의 데이터 값만큼 반복문을 돌린다.

App 컴포넌트에서 TOC값 하나를 지우면 똑같이 목록도 바뀐다.<br>
TOC 컴포넌트 파일에서 데이터가 바꼈다고 로직을 바꾸지 않아도 된다.

여러 개의 element를 자동으로 생성하는 경우에는 콘솔에 에러가 날 것이다.<br>
Warning: Each child in an array or iterator should have a unique "key" prop.

- 각각의 lists 항목은 key 라는 props 를 가지고 있어야 한다.

    key = {data[i].id}
    
각각의 목록을 구분할 수 있는 식별자를 적어준다.<br>
이것은 만들고 있는 어플리케이션에서 사용하는 것이라기보다는<br>
리액트 내부에서 필요에 의해 요청하는 것이다.

- state와 props의 관계

부모인 App의 입장에서는 state라는 내부 정보를 사용하고 this.state={}<br>
자식한테 전달할때는 props 라는 것으로 전달한다 {this.state.contents}

App의 입장에선 topic이 내부적으로 어떻게 돌아가는지 알 필요는 없고,<br>
데이터라는 props로는 어떤 형태의 정보를 전달하면 되는가라는 사용자의 입장에서<br>
알아야 할 것만 알면 된다.
