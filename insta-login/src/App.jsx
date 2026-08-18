import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  // Login states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Signup states
  const [signupData, setSignupData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log("Signup Data:", signupData);

    // Jab backend ready ho jaye to yahan API call kar sakte hain
    /*
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Signup error:", error);
    }
    */
  };

  // =========================
  // CREATE ACCOUNT PAGE
  // =========================

  if (isSignup) {
    return (
      <main className="page signup-page">
        <div className="signup-container">
          <div className="signup-box">

            <h1 className="instagram-logo">Instagram</h1>

            <h2>
              Sign up to see photos and videos
              <br />
              from your friends.
            </h2>

            <button className="facebook-button">
              <span>f</span>
              Log in with Facebook
            </button>

            <div className="or-container">
              <div className="line"></div>
              <span>OR</span>
              <div className="line"></div>
            </div>

            <form onSubmit={handleSignup}>

              <input
                type="text"
                name="email"
                placeholder="Mobile number or email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />

              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={signupData.fullName}
                onChange={handleSignupChange}
                required
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={handleSignupChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />

              <p className="signup-info">
                People who use our service may have uploaded your
                contact information to Instagram.
                <span> Learn More</span>
              </p>

              <p className="signup-info">
                By signing up, you agree to our Terms, Privacy Policy
                and Cookies Policy.
              </p>

              <button className="signup-button" type="submit">
                Sign up
              </button>

            </form>
          </div>

          <div className="already-account">
            Have an account?
            <button onClick={() => setIsSignup(false)}>
              Log in
            </button>
          </div>

          <p className="get-app">Get the app.</p>

          <div className="app-buttons">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </div>
      </main>
    );
  }

  // =========================
  // LOGIN PAGE
  // =========================

  return (
    <main className="page">
      <section className="left-side">

        <h2>
          See everyday moments from
          <br />
          your <span>close friends.</span>
        </h2>

        <div className="photo-container">
          <img src="/photo.jpg" alt="Moments" />
        </div>

      </section>

      <section className="right-side">
        <div className="login-container">

          <h1>Log into Instagram</h1>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Mobile number, username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button" type="submit">
              Log in
            </button>

          </form>

          <button className="forgot-button">
            Forgot password?
          </button>

          <button
            className="create-button"
            onClick={() => setIsSignup(true)}
          >
            Create new account
          </button>

        </div>
      </section>
    </main>
  );
}

export default App;
