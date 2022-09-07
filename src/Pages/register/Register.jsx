import './register.css'
import {Link} from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>

        <span className="registerTitle">Register</span>

        <form className="registerForm">

            <label>User Name</label>
            <input className='registerInput' type="text" placeholder="Enter your user name" />

            <label>Email</label>
            <input className='registerInput' type="email" placeholder="Enter your email..." />

            <label>Password</label>
            <input className='registerInput' type="password" />

            <button className="registerButton">Register</button>

            <button className="loginRegisterButton">
                <Link className='link' to='/login'>LOGIN</Link>
            </button>

        </form>
    </div>
  )
}
