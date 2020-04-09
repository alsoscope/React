### State 소개

- React는 컴포넌트를 외부에서 조작할 때는 __props__.
- 내부적으로 상태를 관리할 때는 **state**를 사용한다.

state와 props는 두 가지의 차이점을 통해 이해한다.

- `props`는 사용자가 컴포넌트를 사용하는 입장에서 중요한, 조작 장치 user interface와 같다.
- `state`는 props 값에 따라서 내부의 구현에 필요한 데이터들이다.<br>
  구현에 따라 내부적인 구현에 따라 다양한 상태와 내부적 조작 장치를 갖는다.

컴포넌트의 기본적인 동작 이상으로 사용자에게 제공한다.<br>
`<Component props_name="props_value">`<br>
사용자는 위의 태그로 컴포넌트를 조작한다. props는 컴포넌트 사용자에게 중요하다.

#### 컴퓨터 내부적으로 사용되는 것들은 State

리액트가 component를 만들고 그 component가 어떤 부품이 되기 위해<br>
component를 사용하는 외부의 props라고 하는 것과 props에 따라 component를 실제로 구현하는<br>
내부의 State라는 정보가 분리되어야 한다.

구현하는 쪽에서 철저하게 격리하여 양쪽의 편의성을 각자 도모해야 한다.

실제 다양한 component를 구현할 때, 필요한 필수적인 요소인 state를 살펴보기.<br>
그러면서 props에 대해 더 잘 이해하게 될 것이다.
