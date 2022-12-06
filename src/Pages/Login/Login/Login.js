import { GoogleAuthProvider } from 'firebase/auth';
import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const {loginWithGoogle, signIn} = useContext(AuthContext);

  const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = event => {
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
                
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () =>{
     
      loginWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch( error => console.log(error))
    }
    return (
        <div>
          <Form onSubmit={handleSubmit} className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          <div>
          <h4>Login with Social Media</h4>
        <div className='m2-5'>
           <button onClick={handleGoogleSignIn} className='rounded me-3'><span><FaGoogle></FaGoogle></span></button>
            <button className='rounded me-3'><span><FaGithub></FaGithub></span></button>
            <button className='rounded'><span><FaTwitter></FaTwitter></span></button>
        </div>
          </div>
        </div>
    );
};

export default Login;