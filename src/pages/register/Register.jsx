import { useRef } from "react";
import { useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const emailRef = useRef();
    const passRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPass(passRef.current.value);
    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                {email === "" ? (
                    <div className="input">
                        <input
                            type="email"
                            placeholder="Email address"
                            ref={emailRef}
                        />
                        <button
                            className="registerButton"
                            onClick={handleStart}
                        >
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form
                        className="input"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <input
                            type="password"
                            placeholder="Your password"
                            ref={passRef}
                        />
                        <button
                            type="submit"
                            className="registerButton"
                            onClick={handleFinish}
                        >
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
