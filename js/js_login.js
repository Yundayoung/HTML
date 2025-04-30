const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput= document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = emailInput.value.trim(); //trim : 공백 제거 함수
    const passwordValue = passwordInput.value.trim();
    
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
       
    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    loginForm.submit();
};

document.getElementById("login_btn").addEventListener('click', check_input);
   