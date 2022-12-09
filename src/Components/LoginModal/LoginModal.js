import React, { useContext } from 'react';
import '../../App.css'
import login from '../../assets/login.png'
import { AuthProvider } from '../../UserContext/UserContext';
import googleIcon from '../../assets/google.png'


const LoginModal = () => {
    const { singUpUser, signInUser } = useContext(AuthProvider)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(firstName, lastName, email, password);
        singUpUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <div className='modall'>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <div className="alert alert-success w-100 d-none d-lg-block" role="alert">
                                Let's learn, share and inspire each other with our passion for computer engineering. Sign up now.
                            </div>
                            <button type="button" className="btn-close bg-secondary rounded-pill modalClose" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="conatiner-fluid">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h3 className='my-3'>Create Account</h3>
                                    <p className='d-none d-lg-block' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" >All ready have an accoint?<span className='text-primary fw-bold'>Sign In</span></p>
                                </div>
                                <div className="row rounded-3">
                                    <div className="col-sm-12 col-lg-6">
                                        <form onSubmit={handleSignUp}>
                                            <div className="row p-0 m-0">
                                                <div className="col-6 px-0">
                                                    <input className='p-2 w-100 light' type="text" name="firstName" placeholder='First Name' id="" />
                                                </div>
                                                <div className="col-6 px-0">
                                                    <input className='p-2 w-100 light' type="text" name="lastName" placeholder='Last Name' id="" />
                                                </div>
                                            </div>
                                            <div className="row p-0 m-0">
                                                <input className='p-2 light' placeholder='Email' type="email" name="email" id="" />
                                                <div className='px-0 position-relative'>
                                                    <span className='position-absolute top-0 end-0 me-2 mt-2 text-muted'><i class="bi bi-eye"></i></span>
                                                    <input className='p-2 light w-100' placeholder='Password' type="password" name="password" id="" />
                                                </div>
                                                <input className='p-2 light' placeholder='Confirm Password' type="password" name="" id="" />
                                                <input className='d-none d-lg-block p-2 my-4 fw-bold text-center bg-primary text-white text-center rounded-pill loginBorder w-100'  value={'Create Account'} type="submit" name="" id="" />

                                                <div className='d-lg-none d-sm-block d-flex align-items-center justify-content-between my-2'>
                                                    <input className='p-2 my-3 fw-bold text-center bg-primary text-white text-center rounded-pill loginBorder w-50' value={'Create Account'} type="submit" name="" id="" />
                                                    <p data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">or,SignIn</p>
                                                </div>
                                            </div>

                                        </form>
                                        <div className='text-center loginBorder w-100 my-2 d-flex align-items-center justify-content-center'>
                                            <span><i className="bi bi-facebook text-primary"></i></span>
                                            <p className='mb-0 p-2 fw-bold '>Sign In with facebook</p>
                                        </div>
                                        <div className='text-center loginBorder w-100 d-flex align-items-center justify-content-center'>
                                            <span><img src={googleIcon} style={{ height: '16px' }} alt="" /></span>
                                            <p className='mb-0 p-2 fw-bold '>Sign In with google</p>
                                        </div>
                                    </div>
                                    <div className=" col-sm-12 col-lg-6  p-5">
                                        <img src={login} alt="" className='d-none d-lg-block' />
                                        <p>By Sign up, you agree to our terms and condition.Privacy and policy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header p-0 ">
                            <div className="alert alert-success w-100 d-none d-lg-block" role="alert">
                                Let's learn, share and inspire each other with our passion for computer engineering. Sign up now.
                            </div>
                            <button type="button" className="btn-close bg-secondary rounded-pill modalClose" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="conatiner-fluid">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h3 className='my-3'>Welcome back!</h3>
                                    <p className='d-none d-lg-block' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" >Have'nt any account? <span className='text-primary fw-bold'>Sign Up</span> </p>
                                </div>
                                <div className="row rounded-3">
                                    <div className="col-sm-12 col-lg-6">
                                        <form onSubmit={handleSignIn}>
                                            <div className="row p-0 m-0">
                                                <input className='p-2 light' placeholder='Email' type="email" name="email" id="" />
                                                <div className='px-0 position-relative'>
                                                    <span className='position-absolute top-0 end-0 me-2 mt-2 text-muted'><i class="bi bi-eye"></i></span>
                                                    <input className='p-2 light w-100' placeholder='Password' type="password" name="password" id="" />
                                                </div>
                                                <input className='d-none d-lg-block my-4 p-2 fw-bold bg-primary text-center text-white rounded-pill loginBorder'data-bs-dismiss="modal" value={'Sign in'} type="submit" />

                                                <div className='d-lg-none d-sm-block d-flex align-items-center justify-content-between'>
                                                    <input className='p-2 my-4 fw-bold text-center bg-primary text-white text-center rounded-pill loginBorder w-50'data-bs-dismiss="modal" value={'Sign In'} type="submit" name="" id="" />
                                                    <p className='' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">or,Create account</p>
                                                </div>

                                            </div>
                                        </form>
                                        <div className='text-center loginBorder w-100 my-2 d-flex align-items-center justify-content-center'>
                                            <span><i className="bi bi-facebook text-primary"></i></span>
                                            <p className='mb-0 p-2 fw-bold '>Sign In with facebook</p>
                                        </div>
                                        <div className='text-center loginBorder w-100 d-flex align-items-center justify-content-center'>
                                            <span><img src={googleIcon} style={{ height: '16px' }} alt="" /></span>
                                            <p className='mb-0 p-2 fw-bold '>Sign In with google</p>
                                        </div>

                                        <p className='fw-bold text-center my-5'>Forgot Password?</p>
                                    </div>
                                    <div className="d-none d-lg-block col-lg-6 p-5">
                                        <img src={login} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginModal;