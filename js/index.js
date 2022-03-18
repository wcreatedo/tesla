// 상수(const) 정의, 변수(var,let)등을 선언(수정할 html태그 선택)
//전체 페이지
const fullpageEl = document.getElementById('fullpage');
//메뉴버튼
const menuBtn = document.querySelector('.menu_btn');
//오른쪽 네비게이션 메뉴바(안보임)
const navigation = document.querySelector('.navigation');
//오른쪽 메뉴바 x버튼
const navCloseBtn = document.querySelector('.navigation_close_btn');
//화면전체를 흐리게 덮는 오버레이
const blurOverlay = document.querySelector('.blur_overlay');

// 문자열 is--active선언
const IS_ACTIVE = 'is--active';

// 오른쪽 네비(=메뉴) 토글 아래 3가지가 실행
// const toggleNavigation = () => {
function toggleNavigation() {
  // 네비게이션에 클래스 is_axtive가 있으면 제거하고 없으면 넣기(add, remove동시 진행)
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle('no-scroll');
};

// 메뉴버튼을 click이벤트를 누르면 toggle..함수가 실행
// 오른쪽 네비 토글 대상이 실행, 오른쪽 상단 메뉴 버튼
menuBtn.addEventListener('click', toggleNavigation);
//  x버튼
navCloseBtn.addEventListener('click', toggleNavigation);
//  왼쪽 흐린 화면 틀릭하면
blurOverlay.addEventListener('click', toggleNavigation);

// 여기에서 fullpage를 초기화 설정
new fullpage('#fullpage', {
  //options here
  autoScrolling: true
  // scrollHorizontally: true
});

//methods
//fullpage_api.setAllowScrolling(false);

