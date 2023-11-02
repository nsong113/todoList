#Card 컴포넌트 분리
#CardComponent.jsx

-경로
src/component/CardComponent.jsx

-이유
처음에는 working card와 done card를 완전 분리를 했다가, props전달이 너무 많아지고, 겹치는 부분이 많아 합쳤습니다.
'완료','취소'버튼 부분만 다른데, 이 부분은 if조건문으로 다르게 렌더링해주었습니다.

#헤더 컴포넌트 분리
$Header

-경로
src/component/Header.jsx

-이유
이 프로젝트는 규모가 작지만 규모가 큰 프로젝트에서는 header와 footer를 분리한다고 하여 분리했습니다.
