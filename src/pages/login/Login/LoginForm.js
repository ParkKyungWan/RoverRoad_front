import React from 'react';

//scss
import './LoginForm.scss';

//image
export default function LoginForm(){
    
    

    return(
        <form className='login form'>
            <input type="id" className='login input' placeholder='아이디'/>
            <input type="password" className='login input' placeholder='비밀번호' />
            <input type="submit" className='login submit push' value='로그인'/>
        </form>
    )
}
