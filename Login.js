import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-auto'>
                    <form action=''>
                        <div className='mb-3'>
                            <label style={{ display: "flex" }} htmlFor='email'><strong>Email</strong></label>
                            <input type='text' placeholder='Enter Email' name='email' className='form-control rounded-1' />
                        </div>
                        <div className='mb-3'>
                            <label style={{ display: "flex" }} htmlFor='password'><strong>Password</strong></label>
                            <input type='text' placeholder='Enter Password' name='password' className="form-control rounded-1" />
                        </div>
                        <div>
                            <button className="btn btn-success w-100"><strong>Log in</strong></button>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">You are agree to your terms and policies</label>
                            </div>
                            <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none '><strong>Create Account</strong></Link>
                        </div>
                        {/* <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> */}
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;