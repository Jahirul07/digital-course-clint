import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Register = () => {
    const {loginWithGoogle, createUser, updateUserProfile} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      form.reset();
      handleUpdateUserProfile(name)

      createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(e => console.log(e))
    }

    const handleGoogleSignIn = () =>{
     
      loginWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch( error => console.log(error))
    }
    const handleUpdateUserProfile = (name) =>{
      const profile = {
        displayName: name
      }
      updateUserProfile(profile)
      .then( () => {})
      .catch(error => console.error(error))
    }

    return (
        <div>
        <div>
            <Form onSubmit={handleSubmit} className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        <h4>Register with Social Media</h4>
        <div className='m2-5'>
           <button onClick={handleGoogleSignIn} className='rounded me-3'><span><FaGoogle></FaGoogle></span></button>
            <button className='rounded me-3'><span><FaGithub></FaGithub></span></button>
            <button className='rounded'><span><FaTwitter></FaTwitter></span></button>
        </div>
        </div>
        
    );
};

export default Register;