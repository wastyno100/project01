




function loginBtn(){
    const userId = document.querySelector('#login_id').value;
    const userPw = document.querySelector('#login_pw').value;

    const login = userData.find((data)=>{
        return data.id == userId && data.pw == userPw
    })

    if (login){
            alert("로그인 되었습니다.");
            const loginData = JSON.stringify({
                id: userId,
                pw: userPw,
                loginyn: "y"
            })
            sessionStorage.setItem("loginData", loginData);
            location.href="C:\work\minipj01\cake-main\index.html"
            
    }else if (!login){
        alert("아이디 또는 비밀번호가 틀립니다.");
    }
    
    
    
}

function logout() {
    sessionStorage.clear("loginData");
    location.reload();
}
