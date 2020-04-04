### React 1. 수업 소개
React는 자바스크립트 프론트엔드 라이브러리.<br>
페이스북에서 만든 자바스크립트 UI이다.

사용자 정의 태그를 컴포넌트Component라는 개념으로 다룰 수 있다.<br>
객체지향 구조의 클래스에서 작성한다.

1.가독성
2.유지보수
3.재사용성

### 개발 환경

리액트 앱을 만들어주는 도구인 create-react-app을 설치하고 사용하기

Nodejs로 만들어진 프로그램을 설치해주는 **npm**을 먼저 설치해야한다. (node package manager)

    npm -v
    nodejs 설치 후 버전확인

    create-react-app 설치
    npm install -g create-react-app

-g는 global. 다른 프로젝트에서도 해당 패키지를 사용할 수 있다.<br>
권한이 없다고 나오면 맨앞에 sudo를 붙여서 명령어를 다시 실행한다.(linux 계열)

    create-react-app -V
    설치된 버전을 확인할 수 있다.

    React 공식 홈페이지의 문서에서는 아래의 명령어를 실행하라고 한다.
    npx create-react-app my-app
    cd my-app
    npm start
    여기에서 npx는 한 번만 사용할 커맨드를 실행할 때 쓰인다.

create-react-app을 npm으로 global 하게 설치하면 사용하지 않는 패키지가 계속 남게되지만<br>
npx는 해당 패키지를 설치하여 실행하고, 이후에는 해키지를 삭제한다.<br>
컴퓨터의 공간을 낭비하지 않고, 실행할 때 마다 npx로 설치하면 최신 버전의 패키지 앱을 사용할 수 있다.

리액트 개발환경 설정

    create-react-app hello-react

    cd hello-react

hello-react 폴더와 그 구성 파일들이 설치된 것을 확인할 수 있다.

혹은 폴더를 먼저 생성 후, cd 폴더를 터미널에 끌어놓으면 자동으로 디렉토리 경로가 복사된다.

    create-react-app .
    enter

현재 디렉토리가 create-react-app에 의해서 개발 환경이 설정된다.

- hello-react 경로에서 실행하기 / 실습환경 구축

    npm start / npm run start

localhost:3000 의 주소로 웹 브라우저에서 리액트 웹앱이 자동으로 열린다.<br>
create-react-app 이 기본적으로 제공하는 샘플 어플리케이션이 구동된 것.

React 종료 : 터미널에서 ctrl + C
