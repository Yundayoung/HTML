# HTML 프로젝트 - 깃허브
- [프로젝트 메인 주소](https://yundayoung.github.io/HTML/) 
- 자바웹프로그래밍(1) 개발 내용 정리

## 목차
- 실습 내용, 응용 및 연습 문제, 홈페이지 내용 수정 정리
- 사용한 소스코드 총정리

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
                    <a href="index.html" target="_blank"><img src="image/MAIN3.jpg" class="img-fluid" width ="1500" height="500"></a>
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
                    <a href="index.html" target="_blank"><img src="image/MAIN3.jpg" class="img-fluid" width ="1500" height="500"></a>
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
                    <a href="index.html" target="_blank"><img src="image/MAIN3.jpg" class="img-fluid" width ="1500" height="500"></a>
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
<summary>popup.html</summary>

        <!DOCTYPE html>
        <html> 
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>팝업창 확인
                </title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script defer type="text/javascript" src="../js/js_popup.js"></script>
            </head>    
            <body onload="show_clock();">
                <h1>팝업창확인</h1>
                <h1 class="display-1"><i class="bi bi-alarm"></i> 우왕 곧 종강이당!<br><br></h1>
                <h1 class="display-4"><div id="divClock" class="clock"></div></h1>
                <div id="divClock" class="clock">
                <h1 class="display-4"><div id="Time" class="clock"></div></h1>

                <input class="form-check-input" type="checkbox" id="check_popup" onclick="closePopup();">
                <label class="form-check-label" for="flexCheckChecked">하루에 한번만 열기</label>
            </body>
        </html>

 
</details>
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
<details>
<summary>crypto.js</summary>

        import { session_set, session_get, session_check } from './js_session.js';

        function encodeByAES256(key, data){ //
            const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(""), // IV 초기화 벡터
                padding: CryptoJS.pad.Pkcs7, // 패딩
                mode: CryptoJS.mode.CBC // 운영 모드
            });
            return cipher.toString();
        }

        function decodeByAES256(key, data){
            const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(""),
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
            });
            return cipher.toString(CryptoJS.enc.Utf8);
        }

        export function encrypt_text(password){
            const k = "key"; // 클라이언트 키
            const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
            const b = password;
            const eb = encodeByAES256(rk, b); // 실제 암호화
            return eb;
            console.log(eb);
        }

        export function decrypt_text(){
            const k = "key"; // 서버의 키
            const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
            const eb = session_get();
            const b = decodeByAES256(rk, eb); // 실제 복호화
            console.log(b); 
        }
        
</details>
<details>
<summary>js_jwt_token.js</summary>

        // JWT 비밀 키 (실제 운영 환경에서는 복잡한 키 사용 필수)
        const JWT_SECRET = "your_secret_key_here";
        
        export function generateJWT(payload) {
            // 1. 헤더 생성 및 Base64 인코딩
            const header = { alg: "HS256", typ: "JWT" };
            const encodedHeader = btoa(JSON.stringify(header));
            // 2. 페이로드 Base64 인코딩
            const encodedPayload = btoa(JSON.stringify(payload)); // JSON 형태로 변환 후 인코딩
            // 3. 서명 생성 (HMAC-SHA256 알고리즘 사용)
            const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
            const encodedSignature = CryptoJS.enc.Base64.stringify(signature);
            // 4. 최종 토큰 조합
            return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
        }

        function verifyJWT(token) { // 토큰검증
            try {
                // 1. 토큰을헤더, 페이로드, 서명으로분할
                const parts = token.split('.');
                if (parts.length!== 3) return null; // 형식오류체크
            
                const [encodedHeader, encodedPayload, encodedSignature] = parts;
                // 2. 서명재계산및비교
                const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
                const calculatedSignature= CryptoJS.enc.Base64.stringify(signature);
                if (calculatedSignature!== encodedSignature) return null; // 서명불일치
                // 3. 페이로드파싱및만료시간검증
                const payload = JSON.parse(atob(encodedPayload)); // 디코딩후해석
                if (payload.exp< Math.floor(Date.now() / 1000)) { // 밀리초단위
                    console.log('보안토큰이만료되었습니다');
                    return null;
                }
                return payload; // 검증성공
            } catch (error) {
                return null; // 파싱오류또는기타예외처리
            }
        }

        function isAuthenticated() { // 사용자 인증 상태 확인
            const token = localStorage.getItem('jwt_token');
            if (!token) return false; // 토큰 없음
            const payload = verifyJWT(token);
            console.log(payload);
            return !!payload; // 페이로드 유무로 인증 상태 판단
        }
            
        export function checkAuth() { // 인증 검사 수행
            const authenticated = isAuthenticated(); // 한 번만 검증 호출
            
            if (authenticated) {
                alert('정상적으로 토큰이 검증되었습니다.');
            } else {
                alert('토큰 검증 에러!! 인증되지 않은 접근입니다.');
                window.location.href = '../login/login.html'; // 로그인 페이지 이동
            }
        }

</details>
<details>
<summary>js_data_type.js</summary>

        let number = 5;
        let str = "문자열 입력"; // “ “도 묶음 가능
        let prime = 1.5123;
        let is_ok = true; // 참
        let is_not = false; // 거짓
        let undefi; // 변수 이름만, 초기화 x
        let empty = null; // 비어 있음

        console.log(undefi, empty); // 여러 개 출력

        const sym1 = Symbol('test'); // 심볼 함수로 값 생성
        let symbolVar1 = sym1; // 변수 초기화

        const airline = ["비행기", 320, "airbus", ["V1", true]];
        // 다양한 데이터 배열

        // 빈 객체 생성
        const obj1 = {};

        // 속성을 추가하여 객체생성
        const obj2 = {
            name: "John Doe",
            age: 30,
            isMale: true,
        };

        console.log(symbolVar1.toString()); // 문자열 변환 출력
        console.log(obj1, obj2, airline); // 여러 개 출력

        const users = new Map(); // 사용자 정보 Map 객체 생성
        users.set("user1", { // 사용자 정보 추가
        id: 1, password: "password123",
        });
        users.set("user2", {
        id: 2, password: "password456",
        });

        // Map 객체의 모든 사용자 정보 반복출력
        for (const [username, user] of users) {
            console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
            console.log(`비밀번호: ${user.password}`);
        }
        // Set 객체 활용 (예), 이름만 저장할 Set 객체 생성
        const usernames = new Set();

        usernames.add("user1"); // 사용자 이름 추가
        usernames.add("user2");

        // Set 객체의 모든 사용자 이름 반복출력
        for (const username of usernames) {
            console.log(`사용자 이름: ${username}`);
        }

</details>
<details>
<summary>js_join.js</summary>

        import { session_set2 } from './js_session.js';

        function join(){ // 회원가입기능
            let form = document.querySelector("#join_form"); // 로그인폼식별자
            let name = document.querySelector("#form3Example1c");
            let email = document.querySelector("#form3Example3c");
            let password = document.querySelector("#form3Example4c");
            let re_password= document.querySelector("#form3Example4cd");
            let agree = document.querySelector("#form2Example3c");
            
            const nameRegex = /^[가-힣]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

            form.action= "../index.html"; // 로그인성공시이동
            form.method= "get"; // 전송방식

            if(name.value.length=== 0 || email.value.length=== 0 || password.value.length=== 0 || re_password.length=== 0){
                alert("회원가입폼에모든정보를입력해주세요.");
            }

            if (!nameRegex.test(name.value)) { // 이름 검사
                alert("이름은 한글만 입력 가능합니다.");
                name.focus();
                return;
            }
            if (!emailRegex.test(email.value)) { // 이메일 검사
                alert("이메일 형식이 올바르지 않습니다.");
                email.focus();
                return;
            }

            if (!pwRegex.test(password.value)) { // 비밀번호 검사
                alert("비밀번호는 8자 이상이며 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
                password.focus();
                return;
            }
        
            if (password.value !== re_password.value) { // 비밀번호 일치 검사
                alert("비밀번호가 일치하지 않습니다.");
                re_password.focus();
                return;
            }
            
            if (!agree.checked) { // 약관 동의 확인
                alert("약관에 동의하셔야 가입이 가능합니다.");
                return;
            }
            
            else{
                const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입정보객체생성
                session_set2(newSignUp); // 세션저장및객체전달
                form.submit(); // 폼실행
            }
        }

        class SignUp {
            constructor(name, email, password, re_password) {
            // 생성자 함수: 객체 생성 시 회원 정보 초기화
            this._name = name;
            this._email = email;
            this._password = password;
            this._re_password = re_password;
            }
            // 전체 회원 정보를 한 번에 설정하는 함수
            setUserInfo(name, email, password, re_password) {
                this._name = name;
                this._email = email;
                this._password = password;
                this._re_password = re_password;
        }

        // 전체 회원 정보를 한 번에 가져오는 함수
            getUserInfo() {
                return {
                    name: this._name,
                    email: this._email,
                    password: this._password,
                    re_password: this._re_password
                };
            }
        }



        document.getElementById("join_btn").addEventListener('click', join); // 이벤트리스너

</details>
<details>
<summary>js_login.js</summary>

        import { session_set, session_get, session_check } from './js_session.js';
        import { encrypt_text, decrypt_text } from './crypto.js';
        import { generateJWT, checkAuth } from './js_ jwt_token.js';

        function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
            const emailInput = document.getElementById('typeEmailX');
            const idsave_check = document.getElementById('idSaveCheck');
            let get_id = getCookie("id");
            if(get_id) {
                emailInput.value = get_id;
                idsave_check.checked = true;
            }
            session_check(); // 세션 유무 검사
        }

        document.addEventListener('DOMContentLoaded', () => {
            init();
        });

        function init_logined(){
            if(sessionStorage){
                decrypt_text(); // 복호화 함수
            }
            else{
                alert("세션 스토리지 지원 x");
            }
        }

        const check_xss = (input) => {
            // DOMPurify 라이브러리 로드 (CDN 사용)
            const DOMPurify = window.DOMPurify;
            // 입력 값을 DOMPurify로 sanitize
            const sanitizedInput = DOMPurify.sanitize(input);
            // Sanitized된 값과 원본 입력 값 비교
        if (sanitizedInput !== input) {
            // XSS 공격 가능성 발견 시 에러 처리
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
            return false;
            }
            // Sanitized된 값 반환
        return sanitizedInput;
        };

        function setCookie(name, value, expiredays) {
            var date = new Date();
            date.setDate(date.getDate() + expiredays);
            document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
        }
            
        function getCookie(name) {
            var cookie = document.cookie;
            console.log("쿠키를 요청합니다.");

            if (cookie != "") {
                var cookie_array = cookie.split("; ");
                for ( var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "id") 
                        {
                    return cookie_name[1];
                    }
                }
            }
            return ;
        }


        function logout(){
            session_del(); // 세션 삭제
            location.href='../index.html';
        }

        const check_input = () => {
            const loginForm = document.getElementById('login_form');
            const loginBtn = document.getElementById('login_btn');
            const emailInput= document.getElementById('typeEmailX');
            const passwordInput = document.getElementById('typePasswordX');
            
            const c = '아이디, 패스워드를 체크합니다';
            alert(c);

            const emailValue = emailInput.value.trim(); //trim : 공백 제거 함수
            const passwordValue = passwordInput.value.trim();

            const sanitizedPassword = check_xss(passwordValue);
            // check_xss 함수로 비밀번호 Sanitize
            const sanitizedEmail = check_xss(emailValue);
            // check_xss 함수로 비밀번호 Sanitize
            
            // 전역 변수 추가, 맨 위 위치
            const idsave_check = document.getElementById('idSaveCheck');
            const payload = {
                id: emailValue,
                exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
            };
            const jwtToken = generateJWT(payload);

            if (emailValue === '') {
                alert('이메일을 입력하세요.');
                return false;
            }

            if (passwordValue === '') {
                alert('비밀번호를 입력하세요.');
                return false;
            }

            if(emailValue.length > 20) {
                alert('이메일은 20자 이하로 입력해주세요.');
                return false;
            }

            if(passwordValue.length > 15) {
                alert('비밀번호는 15자 이하로 입력해주세요.');
            }

            if (emailValue.length < 5) {
                alert('아이디는최소5글자이상입력해야합니다.');
                return false;
            }
                
            if (passwordValue.length < 10) {
                alert('비밀번호는 반드시 10글자이상 입력해야합니다.');
                return false;
            }
                
            const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/) !== null;
                
            if (!hasSpecialChar) {
            alert('패스워드는 특수문자를 1개이상 포함해야합니다.');
            return false;
            }
                
            const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
            const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
            
                if (!hasUpperCase || !hasLowerCase) {
            alert('패스워드는 대소문자를 1개이상 포함해야합니다.');
            return false;
            }

            // 3글자 이상 반복 확인 (예: aaa, 111, 가나다가나다)
            const repeatedPattern = /(.{1,3})\1+/;
            if (repeatedPattern.test(emailValue) || repeatedPattern.test(passwordValue)) {
                return alert('3글자 이상 반복된 패턴은 사용할 수 없습니다.');
            }

            // 연속된 숫자 두 개 이상 반복 확인 (예: 12아이디12 → 12 반복)
            const numPattern = /(\d{2})[\s\S]*\1/;
            if (numPattern.test(emailValue) || numPattern.test(passwordValue)) {
                return alert('같은 숫자 두 자리가 반복되면 안 됩니다. (예: 1212)');
            }


            if (!sanitizedEmail) {
                // Sanitize된 비밀번호 사용
            return false;
                }
                if (!sanitizedPassword) {
                // Sanitize된 비밀번호 사용
            return false;
            }
            
            
            // 검사 마무리 단계 쿠키 저장, 최하단 submit 이전
            if(idsave_check.checked == true) { // 아이디 체크 o
                alert("쿠키를 저장합니다.", emailValue);
                setCookie("id", emailValue, 1); // 1일 저장
                alert("쿠키 값 :" + emailValue);
            }
            else{ // 아이디 체크 x
                setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
            }    

            console.log('이메일:', emailValue);
            console.log('비밀번호:', passwordValue);
            session_set(); // 세션 생성
            localStorage.setItem('jwt_token', jwtToken);
            loginForm.submit();
        };

        document.getElementById("login_btn").addEventListener('click', check_input);
        
</details>
<details>
<summary>js_login2.js</summary>

        import { session_set, session_get, session_check } from './js_session.js';
        import { encrypt_text, decrypt_text } from './crypto.js';
        import { generateJWT, checkAuth } from './js_ jwt_token.js';

        function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
            const emailInput = document.getElementById('typeEmailX');
            const idsave_check = document.getElementById('idSaveCheck');
            let get_id = getCookie("id");
            if(get_id) {
                emailInput.value = get_id;
                idsave_check.checked = true;
            }
            session_check(); // 세션 유무 검사
        }

        document.addEventListener('DOMContentLoaded', () => {
            checkAuth(); //토큰 검증
            init_logined(); //복호화
        });

        function init_logined(){
            if(sessionStorage){
                decrypt_text(); // 복호화 함수
            }
            else{
                alert("세션 스토리지 지원 x");
            }
        }

        const check_xss = (input) => {
            // DOMPurify 라이브러리 로드 (CDN 사용)
            const DOMPurify = window.DOMPurify;
            // 입력 값을 DOMPurify로 sanitize
            const sanitizedInput = DOMPurify.sanitize(input);
            // Sanitized된 값과 원본 입력 값 비교
        if (sanitizedInput !== input) {
            // XSS 공격 가능성 발견 시 에러 처리
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
            return false;
            }
            // Sanitized된 값 반환
        return sanitizedInput;
        };

        function setCookie(name, value, expiredays) {
            var date = new Date();
            date.setDate(date.getDate() + expiredays);
            document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
        }
            
        function getCookie(name) {
            var cookie = document.cookie;
            console.log("쿠키를 요청합니다.");

            if (cookie != "") {
                var cookie_array = cookie.split("; ");
                for ( var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "id") 
                        {
                    return cookie_name[1];
                    }
                }
            }
            return ;
        }

        function logout(){
            session_del(); // 세션 삭제
            location.href='../index.html';
        }

        const check_input = () => {
            const loginForm = document.getElementById('login_form');
            const loginBtn = document.getElementById('login_btn');
            const emailInput= document.getElementById('typeEmailX');
            const passwordInput = document.getElementById('typePasswordX');
            
            const c = '로그아웃 되었습니다';
            alert(c);

            const emailValue = emailInput.value.trim(); //trim : 공백 제거 함수
            const passwordValue = passwordInput.value.trim();

            const sanitizedPassword = check_xss(passwordValue);
            // check_xss 함수로 비밀번호 Sanitize
            const sanitizedEmail = check_xss(emailValue);
            // check_xss 함수로 비밀번호 Sanitize
            
            // 전역 변수 추가, 맨 위 위치
            const idsave_check = document.getElementById('idSaveCheck');
            const payload = {
                id: emailValue,
                exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
            };
            const jwtToken = generateJWT(payload);

            if (emailValue === '') {
                alert('이메일을 입력하세요.');
                return false;
            }

            if (passwordValue === '') {
                alert('비밀번호를 입력하세요.');
                return false;
            }

            if (emailValue.length < 5) {
                alert('아이디는최소5글자이상입력해야합니다.');
                return false;
            }
                
            if (passwordValue.length < 12) {
                alert('비밀번호는 반드시 12글자이상 입력해야합니다.');
                return false;
            }
                
            const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/) !== null;
                
            if (!hasSpecialChar) {
            alert('패스워드는 특수문자를 1개이상 포함해야합니다.');
            return false;
            }
                
            const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
            const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
            
                if (!hasUpperCase || !hasLowerCase) {
            alert('패스워드는 대소문자를 1개이상 포함해야합니다.');
            return false;
            }

            if (!sanitizedEmail) {
                // Sanitize된 비밀번호 사용
            return false;
                }
                if (!sanitizedPassword) {
                // Sanitize된 비밀번호 사용
            return false;
            }
            
            
            // 검사 마무리 단계 쿠키 저장, 최하단 submit 이전
            if(idsave_check.checked == true) { // 아이디 체크 o
                alert("쿠키를 저장합니다.", emailValue);
                setCookie("id", emailValue, 1); // 1일 저장
                alert("쿠키 값 :" + emailValue);
            }
            else{ // 아이디 체크 x
                setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
            }    

            console.log('이메일:', emailValue);
            console.log('비밀번호:', passwordValue);
            session_set(); // 세션 생성
            localStorage.setItem('jwt_token', jwtToken);
            loginForm.submit();
        };

        document.getElementById("logout_btn").addEventListener('click', check_input);
        
</details>
<details>
<summary>js_map.js</summary>

        // 마커를 담을 배열입니다
        var markers = [];

        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.380139, 126.925288), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        var geocoder = new kakao.maps.services.Geocoder();

        var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
            infowindow = new kakao.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var content = '<div class="bAddr">' +
                                    '<span class="title">법정동 주소정보</span>' + 
                                    detailAddr + 
                                '</div>';

                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);

                    // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'idle', function() {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
            // 좌표로 행정동 주소 정보를 요청합니다
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
        }

        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var infoDiv = document.getElementById('centerAddr');

                for(var i = 0; i < result.length; i++) {
                    // 행정동의 region_type 값은 'H' 이므로
                    if (result[i].region_type === 'H') {
                        infoDiv.innerHTML = result[i].address_name;
                        break;
                    }
                }
            }    
        }

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도 타입 컨트롤을 지도에 표시합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        // 지도에 지형정보를 표시하도록 지도타입을 추가합니다
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

        //////////////////////////////////////////////////////////////////////////////////////////

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
            var resultDiv = document.getElementById('clickLatlng');
            resultDiv.innerHTML = message;
        });

        ///////////////////////////////////////////////////////////////////////////////////////

        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places();  

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        // 키워드로 장소를 검색합니다
        searchPlaces();

        // 키워드 검색을 요청하는 함수입니다
        function searchPlaces() {

            var keyword = document.getElementById('keyword').value;

            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                alert('키워드를 입력해주세요!');
                return false;
            }

            // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
            ps.keywordSearch( keyword, placesSearchCB); 
        }

        // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 정상적으로 검색이 완료됐으면
                // 검색 목록과 마커를 표출합니다
                displayPlaces(data);

                // 페이지 번호를 표출합니다
                displayPagination(pagination);

            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                alert('검색 결과가 존재하지 않습니다.');
                return;

            } else if (status === kakao.maps.services.Status.ERROR) {

                alert('검색 결과 중 오류가 발생했습니다.');
                return;

            }
        }

        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places) {

            var listEl = document.getElementById('placesList'), 
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds(), 
            listStr = '';
            
            // 검색 결과 목록에 추가된 항목들을 제거합니다
            removeAllChildNods(listEl);

            // 지도에 표시되고 있는 마커를 제거합니다
            removeMarker();
            
            for ( var i=0; i<places.length; i++ ) {

                // 마커를 생성하고 지도에 표시합니다
                var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                    marker = addMarker(placePosition, i), 
                    itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(placePosition);

                // 마커와 검색결과 항목에 mouseover 했을때
                // 해당 장소에 인포윈도우에 장소명을 표시합니다
                // mouseout 했을 때는 인포윈도우를 닫습니다
                (function(marker, title) {
                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                        displayInfowindow(marker, title);
                    });

                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                        infowindow.close();
                    });

                    itemEl.onmouseover =  function () {
                        displayInfowindow(marker, title);
                    };

                    itemEl.onmouseout =  function () {
                        infowindow.close();
                    };
                })(marker, places[i].place_name);

                fragment.appendChild(itemEl);
            }

            // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
            listEl.appendChild(fragment);
            menuEl.scrollTop = 0;

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        }

        // 검색결과 항목을 Element로 반환하는 함수입니다
        function getListItem(index, places) {

            var el = document.createElement('li'),
            itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                        '<div class="info">' +
                        '   <h5>' + places.place_name + '</h5>';

            if (places.road_address_name) {
                itemStr += '    <span>' + places.road_address_name + '</span>' +
                            '   <span class="jibun gray">' +  places.address_name  + '</span>';
            } else {
                itemStr += '    <span>' +  places.address_name  + '</span>'; 
            }
                        
            itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                        '</div>';           

            el.innerHTML = itemStr;
            el.className = 'item';

            return el;
        }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, idx, title) {
            var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
                imgOptions =  {
                    spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                    spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                    offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                },
                markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                    marker = new kakao.maps.Marker({
                    position: position, // 마커의 위치
                    image: markerImage 
                });

            marker.setMap(map); // 지도 위에 마커를 표출합니다
            markers.push(marker);  // 배열에 생성된 마커를 추가합니다

            return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }   
            markers = [];
        }

        // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
        function displayPagination(pagination) {
            var paginationEl = document.getElementById('pagination'),
                fragment = document.createDocumentFragment(),
                i; 

            // 기존에 추가된 페이지번호를 삭제합니다
            while (paginationEl.hasChildNodes()) {
                paginationEl.removeChild (paginationEl.lastChild);
            }

            for (i=1; i<=pagination.last; i++) {
                var el = document.createElement('a');
                el.href = "#";
                el.innerHTML = i;

                if (i===pagination.current) {
                    el.className = 'on';
                } else {
                    el.onclick = (function(i) {
                        return function() {
                            pagination.gotoPage(i);
                        }
                    })(i);
                }

                fragment.appendChild(el);
            }
            paginationEl.appendChild(fragment);
        }

        // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        // 인포윈도우에 장소명을 표시합니다
        function displayInfowindow(marker, title) {
            var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

            infowindow.setContent(content);
            infowindow.open(map, marker);
        }

        // 검색결과 목록의 자식 Element를 제거하는 함수입니다
        function removeAllChildNods(el) {   
            while (el.hasChildNodes()) {
                el.removeChild (el.lastChild);
            }
        }

        ////////////////////////////////////////////////////////////////////////

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
            infowindow = new kakao.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var content = '<div class="bAddr">' +
                                    '<span class="title">법정동 주소정보</span>' + 
                                    detailAddr + 
                                '</div>';

                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);

                    // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'idle', function() {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
            // 좌표로 행정동 주소 정보를 요청합니다
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
        }

        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var infoDiv = document.getElementById('centerAddr');

                for(var i = 0; i < result.length; i++) {
                    // 행정동의 region_type 값은 'H' 이므로
                    if (result[i].region_type === 'H') {
                        infoDiv.innerHTML = result[i].address_name;
                        break;
                    }
                }
            }    
        }

</details>
<details>
<summary>js_popup.js</summary>

        // var close_time; // 시간 정보
        // var close_time2 = 50; // 10초 설정

        // clearTimeout(close_time); // 재호출 정지
        // close_time= setTimeout("close_window()", 50000);
        //  // 1/1000 초 지정, 바로 시작 
        // show_time(); // 실시간 시간 보여주기

        // function show_time(){
        //     let divClock = document.getElementById('Time');
        //     divClock.innerText = close_time2; // 10초 삽입 시작
        //    close_time2--; // 1초씩 감소
        //    setTimeout(show_time, 1000);  //1초마다 갱신
        // }

        function close_window() { // 함수 정의
            window.close(); // 윈도우 닫기
        }

        function setCookie(name, value, expiredays) {
            var date = new Date();
            date.setDate(date.getDate() + expiredays);
            document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
        }
            
        function getCookie(name) {
            var cookie = document.cookie;
            console.log("쿠키를 요청합니다.");

            if (cookie != "") {
                var cookie_array = cookie.split("; ");
                for ( var index in cookie_array) {
                    var cookie_name = cookie_array[index].split("=");
                    if (cookie_name[0] == "popupYN") 
                        {
                    return cookie_name[1];
                    }
                }
            }
            return ;
        }

        function closePopup() {
            if (document.getElementById('check_popup').value) 
            {
                setCookie("popupYN", "N", 1);
                console.log("쿠키를 설정합니다.");
                self.close();
            }
        }


        function pop_up() {
            var cookieCheck = getCookie("popupYN");
            if (cookieCheck != "N"){
            window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
            }
        }

        function over(obj) {
            obj.src="image/LOGO2.png";
        }
        function out(obj) {
            obj.src="image/LOGO.png";
        }

        // const over = (obj) => { //화살표 생김 ES 6버전 이후후
        //     obj.src = "image/LOGO.png";
        // };

        function show_clock(){
            let currentDate= new Date(); // 현재시스템날짜객체생성
            let divClock= document.getElementById('divClock');
            let msg = "현재시간: ";
            if(currentDate.getHours()>12){  // 12시보다크면오후아니면오전
                msg += "오후";
                msg += currentDate.getHours()-12+"시";
            }
            else {
                msg += "오전";
                msg += currentDate.getHours()+"시";
            }
            msg += currentDate.getMinutes()+"분";
            msg += currentDate.getSeconds()+"초";
            divClock.innerText= msg;
            
            if (currentDate.getMinutes()>58) {    //정각1분전빨강색출력
                divClock.style.color="red";
            }
            setTimeout(show_clock, 1000);  //1초마다갱신
        }


</details>
<details>
<summary>js_search.js</summary>

        document.getElementById("search_button_msg").addEventListener('click', search_message);
        function search_message(){
        alert("검색을 수행합니다!");
        }

        // const search_message = () => {
        //     const c = '검색을 수행합니다';
        //     alert(c);
        // };

        // function googleSearch() {
        //     const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
        //     const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        //     // 새 창에서 구글 검색을 수행
        //     window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
        //     return false;
        // }


        //위 코드를 활용해 비속어 필터 기능 추가, 개인적으로 바꿨으므로 지워도 괜찮음, 위에 있는 주석처리 코드가 원본
        function googleSearch() {
            const searchTerm = document.getElementById("search_input").value.trim(); // 공백을 제거하고 검색어 자체만 확인, 공백도 걸러줌

            // 공백 검사
            if (searchTerm.length === 0) {
                alert("검색어를 입력해주세요.");
                return false; // 함수 중단
            }

            // 비속어 리스트 정의
            const badWords = ["시발", "씨발", "새끼", "병신", "개새끼","존나"]; //개인적으로 추가

            // 반복문을 이용한 비속어 검사
            for (let i = 0; i < badWords.length; i++) {
                if (searchTerm.includes(badWords[i])) {
                    alert("부적절한 단어가 포함되어 있습니다. 다시 입력해주세요.");
                    return false; // 함수 중단
                }
            }

            // 조건 통과 시 구글 검색 수행
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            window.open(googleSearchUrl, "_blank");
            return false;
        }

</details>
<details>
<summary>js_session.js</summary>

        import { encrypt_text, decrypt_text } from './crypto.js';


        //  export function session_set() { //세션 저장
        //     let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
        //     let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
        //     let random = new Date(); // 랜덤 타임스탬프
                
        //     const obj = { // 객체 선언
        //         id : id.value,
        //         otp : random
        //     }

        //     if (sessionStorage) {
        //         let en_text = encrypt_text(session_pass.value);
        //         sessionStorage.setItem("Session_Storage_id", session_id.value);
        //         sessionStorage.setItem("Session_Storage_pass", en_text);
        //     } else {
        //         alert("로컬 스토리지 지원 x");
        //     }
        // }

        export function session_set() { //세션 저장(객체)
            let session_id = document.querySelector("#typeEmailX"); //DOM 트리에서 ID 검색
            let session_pass = document.querySelector("#typePasswordX"); //DOM 트리에서 pass 검색색
            let random = new Date(); // 랜덤 타임스탬프

            const obj = { // 객체 선언
                id : session_id.value,
                otp : random
            }
            
            if (sessionStorage) {
                const objString = JSON.stringify(obj); // 객체-> JSON 문자열 변환
                let en_text = encrypt_text(objString); // 암호화
                
                sessionStorage.setItem("Session_Storage_id", session_id.value);
                sessionStorage.setItem("Session_Storage_object", objString);
                sessionStorage.setItem("Session_Storage_pass", en_text);
            } else {
                alert("세션 스토리지 지원 x");
            }
        }

        export function session_set2(obj) { //세션 저장(객체)
            let session_id = document.querySelector("#typeEmailX"); //DOM 트리에서 ID 검색
            let session_pass = document.querySelector("#typePasswordX"); //DOM 트리에서 pass 검색색
            let random = new Date(); // 랜덤 타임스탬프
            
            if (sessionStorage) {
                const objString = JSON.stringify(obj); // 객체-> JSON 문자열 변환
                let en_text = encrypt_text(objString); // 암호화
                
                sessionStorage.setItem("Session_Storage_join", objString);    } else {
                alert("세션 스토리지 지원 x");
            }
        }

        export function session_get() { //세션 읽기
            if (sessionStorage) {
                return sessionStorage.getItem("Session_Storage_pass");
            } 
            else {
                alert("세션 스토리지 지원 x");
            }
        }

        export function session_check() { //세션 검사
            if (sessionStorage.getItem("Session_Storage_id")) {
                alert("이미 로그인 되었습니다.");
                location.href='../login/index.html'; // 로그인된 페이지로 이동
            }
        }

        function session_del() {//세션 삭제
            if (sessionStorage) {
            sessionStorage.removeItem("Session_Storage_test");
            alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
            } 
            else {
            alert("세션 스토리지 지원 x");
            }
        }

</details>
<details>
<summary>js_test.js</summary>

        var jb = 'hi'; // 변수 선언 후 주석 가능(한줄 주석)
        var a = 1;
        var b;
        b = 5;
        c = 10;

        /*
        여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
        */

        if(true) {
            let c = 'let접근';
            var c_1 = 'var 접근';
        }
        //console.log(C); //Error?
        console.log(c_1);

        let d = 5;
        //let d = '값 재할당'; //Error?
        console.log(d);

        const e = '상수1 접근';
        //e = 5;
        //const f // Error?
        console.log(e);

</details>



