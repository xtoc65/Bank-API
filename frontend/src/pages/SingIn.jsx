import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/singIn.css";

function SingIn() {
  return (
    <main className="sing-in">
      <section>
        <div>
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sing In</h1>
          <form className="input">
            <div class="wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button">Sign In</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SingIn;
