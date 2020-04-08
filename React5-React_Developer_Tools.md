### 강의 5. React Developer Tools

- React의 컴포넌트를 쉽게 탐색할 수 있도록 돕는 도구

  https://ko.reactjs.org/ 혹은 크롬 extension을 통해 크롬 확장 도구 설치<br>
  개발자 도구에 Component, Profiler 탭이 생기면, React 컴포넌트를 볼 수 있다.<br>
  개발자 도구를 통해 props의 값을 바꿀 수도 있다.

### 강의 6. Component 파일로 분리하기

- 컴포넌트 정리하기

  만약 많은 수의 컴포넌트가 있다면?<br>
  다른 파일에서는 App.js 의 컴포넌트를 가져다 쓰기가 어렵다.<br>
  각각의 컴포넌트별로 별도의 파일로 쪼개기. 정리정돈한다.

  src/components/TOC.js 에 TOC 컴포넌트를 붙여넣기 한다.<br>
  React로 코딩할 때 필수적인 코드를 꼭 추가한다.<br>
  `import React, { Component } from 'react';`

- export 사용

    TOC 컴포넌트 클래스 안에 많은 변수들이나 함수들이 존재할 수 있는데,<br>
    외부에서 사용할 수 있게 코드를 작성한다.

      export default TOC;

TOC.js 를 가져다 쓰는 쪽에서 export .. 로 인해 해당 클래스를 사용할 수 있다.

App.js 에 기존에 존재하면 TOC 컴포넌트를 대신해,<br>
새로 작성한 TOC.js 컴포넌트 클래스를 사용하려면

    import TOC from "./components/TOC";

이와같이 나머지 파일도 작성한다.

이렇게 하면 코드가 간결해지고 필요한 컴포넌트를 더 빨리 찾을 수 있고,<br>
App.js 뿐만 아니라 다른 리액트 파일에서도 컴포넌트들을 사용할 수 있다.
