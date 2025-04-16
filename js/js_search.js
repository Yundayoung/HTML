document.getElementById("search_btn").addEventListener('click', search_message);
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
    const badWords = ["시발", "씨발", "새끼", "병신", "개새끼","존나","좆","등신"]; //개인적으로 추가

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
