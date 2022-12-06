import { GoogleAuthProvider } from 'firebase/auth';
import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const {loginWithGoogle} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

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
          <Form className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          <div>
          <h4>Register with Social Media</h4>
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