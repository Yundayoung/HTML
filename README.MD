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
<details>
<summary>index.html</summary>

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

</details>
- login
<details>
<summary>login.html</summary>

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
                
                <!-- <script type="text/javascript" src="js/js_test.js"></script>
                <script type="text/javascript" defer src="js/js_data_type.js"></script> -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js" integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script type="module" defer src="../js/js_login.js"></script>
                <!-- <script type="text/javascript" defer src="../js/js_session.js"></script>
                <script type="text/javascript" defer src="../js/crypto.js"></script>
                <script type="text/javascript" defer src="../js/js_ jwt_token.js"></script> -->

                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <link rel="stylesheet" href="../css/login.css">

            </head>
            <body class="text-center">
                <section class="vh-100 gradient-custom">
                    <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">
                
                            <div class="mb-md-5 mt-md-4 pb-5">
                
                                <h2 class="fw-bold mb-2 text-uppercase">로그인</h2>
                                <p class="text-white-50 mb-5">Please enter your login and password!</p>
                
                                <form method="get" action="/login/index_login.html" id="login_form">

                                    <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" name="id"/>
                                    <label class="form-label" for="typeEmailX">이메일</label>
                                    </div>
                    
                                    <div data-mdb-input-init class="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" name="password"/>
                                    <label class="form-label" for="typePasswordX">비밀번호</label>
                                    </div>
                    
                                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                    
                                    <div class="checkbox mb-3">
                                    <label>
                                    <input type="checkbox" value="remember-me" id="idSaveCheck"> 아이디 기억
                                    </label>
                                    </div>

                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id="login_btn" type="button">로그인</button>
                    
                                </form>

                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                </div>
                
                            </div>
                            <div>
                                <p class="mb-0">계정이 없나요? <a href="/login/join.html" class="text-white-50 fw-bold">회원가입</a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </body>
        </html>


</details>
<details>
<summary>index_login.html</summary>

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
                <script type="module" defer src="../js/js_login2.js"></script>
                <!-- <script type="text/javascript" defer src="../js/js_session.js"></script>
                <script type="text/javascript" defer src="../js/crypto.js"></script>
                <script type="text/javascript" defer src="../js/js_ jwt_token.js"></script> -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            </head>
            <body style="background-color: black;"></body>
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
                                <a class="nav-link" href="login/profile.html" target='_blank'>기본정보(프로필)</a>
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
                        <a href="logout/logout.html" class="btn btn-outline-success" id="logout_btn">로그아웃</a>
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

</details>
<details>
<summary>join.html</summary>

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
                
                <!-- <script type="text/javascript" src="js/js_test.js"></script>
                <script type="text/javascript" defer src="js/js_data_type.js"></script> -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js" integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script type="module" defer src="../js/js_join.js"></script>
                <!-- <script type="text/javascript" defer src="../js/js_session.js"></script>
                <script type="text/javascript" defer src="../js/crypto.js"></script>
                <script type="text/javascript" defer src="../js/js_ jwt_token.js"></script> -->

                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <link rel="stylesheet" href="../css/login.css">

            </head>
            <body class="text-center"></body>>
                <section class="vh-100 gradient-custom">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style="border-radius: 25px;">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">회원가입</p>

                                    <form class="mx-1 mx-md-4" id="join_form">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" class="form-control" />
                                        <label class="form-label" for="form3Example1c">이름</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" class="form-control" />
                                        <label class="form-label" for="form3Example3c">이메일</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" class="form-control" />
                                        <label class="form-label" for="form3Example4c">비밀번호</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" class="form-control" />
                                        <label class="form-label" for="form3Example4cd">비밀번호 재입력</label>
                                        </div>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                        <label class="form-check-label" for="form2Example3">
                                        I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"  id="join_btn">가입하기</button>
                                    </div>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    class="img-fluid" alt="Sample image">

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>


</details>
<details>
<summary>profile.html</summary>

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
                <!-- <script type="text/javascript" src="js/js_test.js"></script> -->
                <script type="text/javascript" src="js/js_popup.js"></script>
                <!-- <script type="text/javascript" defer src="js/js_search.js"></script> -->
                <script type="text/javascript" defer src="js/js_data_type.js"></script>
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6b100e5aa9546394b35ee93527d18459&libraries=services,clusterer,drawing"></script>
                <link rel="stylesheet" href="../css/profile.css">
                <script type="text/javascript" defer src="js/js_map.js"></script>


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
                                <a class="nav-link" href="login/profile.html" target='_blank'>기본정보(프로필)</a>
                            </li>
                            </ul>
                            <!-- <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" id="search_btn" type="submit">검색하기</button>
                            </form> -->
                            <form class="d-flex" role="search" onsubmit="return googleSearch();">
                            <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
                            <button class="btn btn-outline-success" id="search_btn" type="submit">검색하기</button>
                            </form>
                        </div>
                        </div>
                        <a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인</a>
                    </nav>

                </div>
                <hr>
                <section style="background-color: #eee;">
                    <div class="container py-5">
                        <div class="row">
                        <div class="col">
                            <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="../login/index_login.html">메인페이지</a></li>
                                <li class="breadcrumb-item"><a href="../login/login.html">로그인</a></li>
                                <li class="breadcrumb-item active" aria-current="page">사용자 프로필</li>
                            </ol>
                            </nav>
                        </div>
                        </div>

                        <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="../image/PROFLIE.jpg" alt="avatar"
                                class="rounded-circle img-fluid" style="width: 150px;">
                                <h5 class="my-3">윤다영</h5>
                                <p class="text-muted mb-1">대학생</p>
                                <p class="text-muted mb-4">성결대학교 미디어소프트웨어학과</p>
                                <div class="d-flex justify-content-center mb-2">
                                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">팔로우</button>
                                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary ms-1">메세지</button>
                                </div>
                            </div>
                            </div>
                            <div class="card mb-4 mb-lg-0">
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush rounded-3">
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fas fa-globe fa-lg text-warning"></i>
                                    <p class="mb-0">https://mdbootstrap.com</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-github fa-lg text-body"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                    <p class="mb-0">@mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">윤다영</p>
                                </div>
                                </div>
                                <hr>
                                <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Dayoung22@example.com</p>
                                </div>
                                </div>
                                <hr>
                                <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Phone</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(010)234-5678</p>
                                </div>
                                </div>
                                <hr>
                                <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(098)765-4321</p>
                                </div>
                                </div>
                                <hr>
                                <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Korea, Seoul</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                <div class="card-body">
                                    <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Game Engine
                                    </p>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Unity 3D</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Unreal Engine</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Native</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Godot</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                <div class="card-body">
                                    <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Computer Graphics
                                    </p>
                                    <p class="mb-1" style="font-size: .77rem;">Ray Tracing</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Rasterization</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Graphics Pipeline</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Shader</p>
                                    <div class="progress rounded" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1" style="font-size: .77rem;">Rendering Equation</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!-- <div id="map" style="width: 750px;height:400px;"></div> -->
                            <div class="map_wrap">
                                <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>

                                <div id="menu_wrap" class="bg_white">
                                    <div class="option">
                                        <div>
                                            <form onsubmit="searchPlaces(); return false;">
                                                키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15"> 
                                                <button type="submit">검색하기</button> 
                                            </form>
                                        </div>
                                        <div class="hAddr">
                                            <span class="title">지도중심기준 행정동 주소정보</span>
                                            <span id="centerAddr"></span>
                                        </div>
                                    </div>
                                    <hr>
                                    <ul id="placesList"></ul>
                                    <div id="pagination"></div>
                                </div>
                            </div>
                            <p><em>지도를 클릭해주세요!</em></p>
                            <div id="clickLatlng"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>


                <!-- <div class="container-fluid" style="display: flex; justify-content: center;">
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

</details>
- logout
<details>
<summary>logout.html</summary>

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
                        <a class="navbar-brand" href="#">홈페이지 테스트</a>
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

</details>
- popup
<details>
<summary>popup.html</summary>

        <!DOCTYPE html>
        <html> 
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>우왕 곧 종강이다!!!
                </title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script defer type="text/javascript" src="../js/js_popup.js"></script>
            </head>    
            <body onload="show_clock();">
                <h1>팝업창확인</h1>
                <h1 class="display-1"><i class="bi bi-alarm"></i> 팝업창 확인<br><br></h1>
                <h1 class="display-4"><div id="divClock" class="clock"></div></h1>
                <div id="divClock" class="clock">
                <h1 class="display-4"><div id="Time" class="clock"></div></h1>

                <input class="form-check-input" type="checkbox" id="check_popup" onclick="closePopup();">
                <label class="form-check-label" for="flexCheckChecked">하루에 한번만 열기</label>
            </body>
        </html>

 
</details>
- css
<details>
<summary>login.css</summary>

        .gradient-custom {
            /* fallback for old browsers */
            background: #6a11cb;
            
            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
            
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
            }

</details>
<details>
<summary>profile.css</summary>

        .map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
        .map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
        .map_wrap {position:relative;width:100%;height:500px;}
        #menu_wrap {position:absolute;top:0;left:0;bottom:0;width:250px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255, 255, 255, 0.7);z-index: 1;font-size:12px;border-radius: 10px;}
        .bg_white {background:#fff;}
        #menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}
        #menu_wrap .option{text-align: center;}
        #menu_wrap .option p {margin:10px 0;}  
        #menu_wrap .option button {margin-left:5px;}
        #placesList li {list-style: none;}
        #placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}
        #placesList .item span {display: block;margin-top:4px;}
        #placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
        #placesList .item .info{padding:10px 0 10px 55px;}
        #placesList .info .gray {color:#8a8a8a;}
        #placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
        #placesList .info .tel {color:#009900;}
        #placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
        #placesList .item .marker_1 {background-position: 0 -10px;}
        #placesList .item .marker_2 {background-position: 0 -56px;}
        #placesList .item .marker_3 {background-position: 0 -102px}
        #placesList .item .marker_4 {background-position: 0 -148px;}
        #placesList .item .marker_5 {background-position: 0 -194px;}
        #placesList .item .marker_6 {background-position: 0 -240px;}
        #placesList .item .marker_7 {background-position: 0 -286px;}
        #placesList .item .marker_8 {background-position: 0 -332px;}
        #placesList .item .marker_9 {background-position: 0 -378px;}
        #placesList .item .marker_10 {background-position: 0 -423px;}
        #placesList .item .marker_11 {background-position: 0 -470px;}
        #placesList .item .marker_12 {background-position: 0 -516px;}
        #placesList .item .marker_13 {background-position: 0 -562px;}
        #placesList .item .marker_14 {background-position: 0 -608px;}
        #placesList .item .marker_15 {background-position: 0 -654px;}
        #pagination {margin:10px auto;text-align: center;}
        #pagination a {display:inline-block;margin-right:10px;}
        #pagination .on {font-weight: bold; cursor: default;color:#777;}

</details>
- js
<details>
<summary>crypto.js</summary>
</details>
<details>
<summary>js_jwt_token.js</summary>
</details>
<details>
<summary>js_data_type.js</summary>
</details>
<details>
<summary>js_join.js</summary>
</details>
<details>
<summary>js_login.js</summary>
</details>
<details>
<summary>js_login2.js</summary>
</details>
<details>
<summary>js_map.js</summary>
</details>
<details>
<summary>js_popup.js</summary>
</details>
<details>
<summary>js_search.js</summary>
</details>
<details>
<summary>js_session.js</summary>
</details>
<details>
<summary>js_test.js</summary>
</details>



