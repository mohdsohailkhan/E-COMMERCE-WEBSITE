import { Row , Col} from "react-bootstrap";
import loginPic from '../assets/2.png'
import logo from '../assets/7.png'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}){
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
                        <input  className="password"  type="password" placeholder="Enter Password"/>
                        <br/>
                        <button  className="joinButon" onClick={() => {
                            localStorage.setItem('UserEmail',email)
                            navigate('/')
                            setUser(email)
                        }}>Start Shopping</button>
                        <p className="linkpara">Join the club? <a href="/register">Click here</a></p>
                    </div>
                </Col>
                <Col><img  className="rightImg" src={loginPic}/></Col>
            </Row>
        </div>
    )
}