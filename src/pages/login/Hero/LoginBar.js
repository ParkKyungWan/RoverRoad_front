import { useNavigate } from "react-router-dom";

//scss
import './LoginBar.scss';

export default function LoginBar(){
    
    let navigate = useNavigate();
    function toLogin() {
        navigate("/login");
    }
    function toRegister() {
        navigate("/register");
    }

    return(
        <div className="loginBar">
            <button className="select login push" onClick={toLogin} >로그인</button>
            <button className="select regist push" onClick={toRegister}>회원가입</button>
        </div>
    )
}
