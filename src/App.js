import './App.css';
import  Profile from './images/a.png';
import  email from './images/email.jpg';
import  pass from './images/pass.png';
function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={Profile} alt='profile' className='profile'/>
            </div>

          </div>

          <div>
            <h1>Register Form</h1>
            <div>
              <img src={email} alt='email' className='email' />
              <input type='text' placeholder='user name' className='name' />
            </div>
            <div className='second-input'>
              <img src={pass} alt='pass' className='pass' />
              <input type='text' placeholder='password' className='name' />
            </div>

            <div className='second-input'>
              <img src={pass} alt='pass' className='pass' />
              <input type='text' placeholder='Conform your password' className='name' />
            </div>

            <div className='second-input'>
              <img src={pass} alt='pass' className='pass' />
              <input type='text' placeholder='Adress' className='name' />
            </div>
            <div className='login-button'>
            <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}



export default App;
