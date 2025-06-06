# HTML 프로젝트 - 깃허브
- [프로젝트 메인 주소](https://yundayoung.github.io/HTML/) 
- 자바웹프로그래밍(1) 개발 내용 정리

## 목차
- 실습 내용, 응용 및 연습 문제, 홈페이지 내용 수정 정리
- 사용한 소스 코드 총정리

## 2주차
- VISUAL STUDIO CODE 설치
- GIT HUB 연동
- 기본 화면 작성
    * 로고 이미지
    * 메뉴 텍스트 
    * 배경 이미지 
    * 하단 텍스트
- 내가 원하는 데이터(배경/로고 이미지, 텍스트) 수정
- 커밋 후 동기화하여 깃허브 업로드

## 3주차
- index.html 수정 
    * meta 태그 head에 추가
    * 메인 이미지에 link 추가
    * 텍스트 메뉴에 link 추가
    * Table 추가 + 병합
    * 부트스트랩에서 네비게이션 바 추가
- 이미지 넣고 하이퍼링크 달기
- 네비게이션 바 메뉴에 하이퍼링크 추가
- 네비게이션 색상 변경
- 테이블에 색상 적용

## 4주차
- 네비게이션 바 상단 좌측에 로고 이미지 삽입
- 메인 이미지 반응형으로 수정
- 테이블 전용 스타일로 적용
- 네비게이션 바 검색창 버튼 기능 구현 
- 클릭 이벤트 식별자 
- search_button_msg로 수정 

## 5주차
- 웹사이트 검색창 구현(구글 검색 함수 호출)
- 팝업창 기능 구현(날짜 및 시간)
- 로고 이미지 호버 기능 구현 
- 검색창 공백, 비속어 검사 기능
- googleSearch() 함수 if문, 반복문, 배열 활용하여 수정

## 6주차
- 로그인 버튼 구현
- 로그인 페이지 화면 구현
- 로그인 폼 공백 체크
- LOGOUT 폴더 -> logout.html 파일 작성
- 로그아웃 버튼 기능

## 9주차
- 로그인 폼 입력값 길이 체크
- 로그인 폼 XSS 방지 스크립트 
- 팝업 체크 박스 추가
- 로그인 입력 길이 제한, 패턴식 활용 입력 제한

## 10주차
- 로그인 폼 쿠키 id 저장
- 로그인 폼 세션 저장

## 11주차
- crypto-js 라이브러리 활용 및 수정정
- 패스워드 보안 처리
- 세션 추가, 이름 수정
- 로그인 수행시 토큰 생성
- 로그인 후 페이지 로딩 + 토큰 검증

## 12주차
- import 구문으로 login.js 자바스크립트 연동
- 호출된 함수 export 처리
- 객체 저장 기능
- 회원 가입 기능
- 회원 가입 정보 세션 객체 생성
- 회원가입 입력 필터링 구현

## 13주차
- 프로필 페이지 추가
- 지도 API 연동 추가
- 프로필 스택 영역 아래 지도 정보 삽입
- 지도 주소 위치 변경
- 맵 기능 추가
- 프로필 정보 수정(사진, 기술 스택 등등)
- 좌표로 주소 출력하기

## 사용한 소스 코드 총정리
- index.html
        <!DOCTYPE html>
        <html lang = "ko">
        <!----부분은 주석문입니다. 웹 브라우저는 주석을 화면에 출력하지 않습니다.-->
        <html>
            <head>
                <meta charset ="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>LOL 메인화면</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta name = "author" content = "학번" >
                <meta name = "keywords" content="computer">
                <base href = "http://127.0.0.1:5500">
                <style>
                    table {
                        font-size: 20pt;
                        color : white;
                    }
                </style>
                <script type="text/javascript" src="js/js_test.js"></script>
                <script type="text/javascript" src="js/js_popup.js"></script>
                <script type="text/javascript" defer src="js/js_search.js"></script>
                <script type="text/javascript" defer src="js/js_data_type.js"></script>
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </head>
            <body style="background-color: black;" onload="pop_up();">
                <div style="display: flex; justify-content: center;">
                    <img src = "image/LOGO.png" width = "200" height = "80"  onmouseover="over(this)" onmouseout="out(this)">
                    <!-- <h3 style="font-size: 24px; font-weight: bold; font-style: italic; color: white; font-family: '굴림';"><a href=" https://www.leagueoflegends.com/ko-kr/how-to-play/" target="_blank">게임정보</a>    기본정보    챔피언    패치 노트    새소식 다운로드 (메뉴 작성)</h3> -->
                    <nav class="navbar navbar-expand-lg bg-body-tertiary" class= "navbar" style="background-color: #e3f2fd;" data-bs-theme="light">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="#">홈페이지</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">메인페이지</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.leagueoflegends.com/ko-kr/how-to-play/">기본정보</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.leagueoflegends.com/ko-kr/champions/">챔피언</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.leagueoflegends.com/ko-kr/news/tags/patch-notes/">패치노트</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.leagueoflegends.com/ko-kr/news/">새소식</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="https://support.riotgames.com/hc/ko" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                고객지원
                                </a>
                                <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="https://download.kr.riotgames.com/league">게임 다운로드</a></li>
                                <li><a class="dropdown-item" href="https://www.leagueoflegends.com/ko-kr/news/community/">롤 커뮤니티</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="https://github.com/">깃 허브 페이지</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                            </ul>
                            <!-- <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" id="search_btn" type="submit">검색하기</button>
                            </form> -->
                            <form class="d-flex" role="search" onsubmit="return googleSearch();">
                            <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
                            <button class="btn btn-outline-success" id="search_button_msg" type="submit">검색하기</button>
                            </form>
                        </div>
                        </div>
                        <a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인</a>
                    </nav>
                </div>
                <hr>
                <div class="container-fluid" style="display: flex; justify-content: center;">
                    <a href="index.html" target="_blank"><img src="image/MAIN.jpg" class="img-fluid" width ="1500" height="500"></a>
                </div>
                <hr>
                <div style="display : flex; justify-content: center;">
                    <table class = "table caption-top" border = "1">
                        <caption>인기 캐릭터</caption>
                        <tbody class="table-group-divider">
                        <tr class="table-primary">
                            <td>#</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                            <tr bgcolor = "red" class="table-secondary">
                                <td width = "80">1</td>
                                <td>사이온</td>
                                <td>아리</td>
                                <td>가렌</td>
                                <td>가렌2</td>
                            </tr>
                            <tr bgcolor = "grey" class="table-success">
                                <td>공백</td>
                                <td colspan="4"><a href="https://www.leagueoflegends.com/ko-kr/" target="_blank">롤 웹사이트 접속하기</a></td>
                            </tr>
                            <tr class="table-danger">
                                <td bgcolor="blue"><b>2</b></td>
                                <td>카직스</td>
                                <td>루시안</td>
                                <td>루시안2</td>
                                <td colspan="2"><img src="image/TABLE.png" width="50 height = "50><font size = "13">바이, 바이2</font></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <div style="display: flex; justify-content: center;">
                    <h3 style="font-size: 24px; font-weight: bold; font-style: italic; color: white; font-family: '굴림';">라이엇 게임 회사 정보 2024년 X월 작성됨</h3>
                </div>
            </body>
        </html>


