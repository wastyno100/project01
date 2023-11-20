window.onload = () => {
    if(sessionStorage.getItem("loginData")){
        alert("잘못된 요청입니다.");
    }
}

function loginBtn(){
    const userId = document.querySelector('#login_id').value;
    const userPw = document.querySelector('#login_pw').value;

    const login = userData.find((data)=>{
        return data.id == userId && data.pw == userPw
    })

if (!login){
        return alert("아이디 또는 비밀번호가 틀립니다.");
    }

const loginData = JSON.stringify({
    id: userId,
    pw: userPw
})

console.log(loginData);

    sessionStorage.setItem("loginData", loginData);
    location.href = "index.html";
}

function logout() {
    sessionStorage.clear("loginData");
    location.reload();
}