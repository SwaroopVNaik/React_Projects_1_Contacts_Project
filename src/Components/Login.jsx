import React, { useRef, useEffect, useState } from 'react';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current?.value.trim() || '';
    const password = passwordRef.current?.value || '';

    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    setMessage(`Logging in with email: ${email}`);
  };

  return (
    <div className="login-background">
      <div className="login-shell container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="login-card p-4 p-sm-5 border-0 rounded-4 shadow-lg">
              <div className="text-center mb-4">
                <h1 className="display-6 text-gradient">Welcome Back</h1>
                <p className="text-muted">Unlock the neon login experience.</p>
              </div>
              {message && <div className="alert alert-warning shadow-sm">{message}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4 input-glow">
                  <label htmlFor="email" className="form-label text-dark fw-semibold">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control form-control-lg"
                    ref={emailRef}
                    placeholder="enter your email"
                  />
                </div>

                <div className="mb-3 position-relative input-glow">
                  <label htmlFor="password" className="form-label text-dark fw-semibold">
                    Password
                  </label>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control form-control-lg"
                    ref={passwordRef}
                    placeholder="enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>

                <div className="form-check form-switch text-white mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I accept the <span className="text-primary">terms and conditions</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-gradient btn-lg w-100 mb-2"
                  disabled={!accepted}
                >
                  Sign In
                </button>
                <p className="text-center text-muted small">
                  Accept the terms to activate the login button.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;