//우편번호 검색, 자동완성 (Daum)
function zipCodeSearch() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zip_code').value = data.zonecode;
                document.getElementById("adress_input").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("adress_input_details").focus();
            }
        }).open();
    }
    
    // [필수]
    // 비밀번호, 비밀번호 확인이 서로 같지않으면 회원가입 불가, alert - 회원가입 버튼 클릭에 조건을 넣어본다
    // 모든 항목 입력 안했을 시 회원가입 불가 - 검색해보기
    // 모든 약관 동의 체크 안할 시 회원가입 불가 - 검색해보기
    // 회원가입 버튼 클릭시 이름, 아이디, 비밀번호, 전화번호는 로컬스토리지에 저장 - 세션스토리지 응용해서 해보기
    // 로그인페이지에서도 로컬스토리지에 있는 회원가입 정보 불러와서 로그인 가능하게 연결
    // 아이디 중복확인 (data.js, 로컬스토리지 id데이터랑 같은게 있으면 alert 또는 innerHTML, 회원가입 불가) - find 사용해보기

    // [선택]
    // 약관 스크롤 넣기
    // 성별 선택 추가


    // function signUpButton(){
        
    //     if(){
    //         alert("넘어감");
    //     }else if(){
    //         alert("안넘어감");
    //     }
    // }

    function idtesttest(){
        const testid = document.querySelector('.testid').value;

        const idfind = userData.find((data)=>{
            return data.id == testid
        })

        if(idfind){
            alert("중복되는 아이디가 존재합니다.");
        }else if(testid.length == ""){
            alert("아이디 입력값이 없습니다.");
        }else if(!idfind){
            alert("사용 가능한 아이디 입니다.");
        }

    }

    function passwordMatch(){
        const upPw = document.querySelector('.signup_pw').value;
        const upPwCk = document.querySelector('.signup_pw_check').value;
        
        if(upPw.length == "" || upPwCk.length == ""){
            alert("입력값이 없습니다.");
        }else if(upPw == upPwCk){
            alert("비번같음");
        }else if(upPw != upPwCk){
            alert("비번안같음");
        }
    }