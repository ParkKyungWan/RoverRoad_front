import React from 'react';

//scss
import './RegisterForm.scss';

//image
export default function RegisterForm(){
    
    return(
        <form className='register form'>
            <input type="name" className='register input' placeholder='이름'/>
            <input type="age" className='register input' placeholder='나이' />
            <input type="id" className='register input' placeholder='아이디' />
            <input type="password" className='register input' placeholder='비밀번호' />
            <input type="submit" className='register submit push' value='가입하기'/>
            <p className='register inform'>“가입하기” 버튼을 누르면 ROVER ROAD의 <br/> <u>이용 약관</u> 및 <u>개인정보처리정책</u>에 동의합니다.</p>
        </form>
    )
}