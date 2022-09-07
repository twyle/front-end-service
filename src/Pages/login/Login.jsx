import './login.css'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>

        <span className="loginTitle">Login</span>

        <form className="loginForm">

            <label>Email</label>
            <input className='loginInput' type="email" placeholder="Enter your email..." />

            <label>Password</label>
            <input className='loginInput' type="password" />

            <button className="loginButton">Login</button>

            <button className="registerLogginButton">
              <Link className='link' to='/register'>REGISTER</Link>
            </button>

        </form>
    </div>
  )
}
