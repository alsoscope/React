import React from 'react';

{/*함수형 컴포넌트. 단순히 props만 받아와서 보여주기만 하는 컴포넌트의 경우 더 간편한 문법으로 작성.*/}
const MyName2 = ({ name }) => {
  return (
    <div>
      내 이름이 뭐냐면 { name } 이거다.
    </div>
  );
};

export default MyName2;
