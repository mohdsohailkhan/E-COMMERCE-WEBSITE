import { Row , Col} from "react-bootstrap";
import loginPic from '../assets/3.png'
import logo from '../assets/7.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register({setUser}){
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div className="totalPage">
            <Row>
                <Col>
                    <div className="leftContext">
                        <div className='loginPageLogo'>
                            <img className='loginlogo' src={logo} />
                            <h2 className="instaHeading">InstaBuy!</h2>
                        </div>
                        <h1 className="loginheading">InstaBuy!</h1>
                        <p  className="loginpara">One place where brands <br/>come together from all across the <br/> world</p>
                        <input className="username" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter Username"/>
                        <input  className="password" type="password" placeholder="Enter Password"/>
                        <br/>
                        <input  className="fullname" placeholder="Enter Full Name"/>
                        <br/>
                        <button  className="joinButon" 
                         onClick={() => {
                            localStorage.setItem('UserEmail',email)
                            navigate('/')
                           setUser(email)
                        }}>Join the club</button>
                        <p className="linkpara">Already a members? <a href="/login">Click here</a></p>
                    </div>
                </Col>
                <Col><img  className="rightImg" src={loginPic}/></Col>
            </Row>
        </div>
    )
}