import { useContext, useEffect, useRef, useState } from "react";
import loginPage from "../../../assets/others/loginPage.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../ShareCompo/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const captChaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const [captchaStatus, setCaptchaStatus] = useState(""); // Add captchaStatus state

  //navigete location
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  //!Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCaptcha = (e) => {
    e.preventDefault();
    const user_Captcha_Value = captChaRef.current.value;
    console.log(user_Captcha_Value);
    if (validateCaptcha(user_Captcha_Value)) {
      setDisable(false);
      setCaptchaStatus("success"); // Set captchaStatus to success
      console.log("Captcha validation success");
    } else {
      setDisable(true);
      setCaptchaStatus("error"); // Set captchaStatus to error
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  return (
    <div>
      <div className="min-h-screen hero bg-base-100">
        <div className="flex hero-content ">
          <div className="w-1/2 text-center lg:text-left">
            <img className="" src={loginPage} alt="" />
          </div>
          <div className="w-1/2 max-w-lg shadow-2xl card shrink-0 bg-base-100">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* Captcha */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <div>
                    <input
                      ref={captChaRef}
                      type="text"
                      name="captcha"
                      placeholder="Write CaptCha"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* <div>
                    <button onClick={handleCaptcha} className=" btn">
                      Check Captcha
                      <span className="loading loading-spinner"></span>
                    </button>
                  </div> */}

                  <div>
                    <button
                      onClick={handleCaptcha}
                      className={`btn ${
                        captchaStatus === "success"
                          ? " btn-success text-white bg-green-600"
                          : "btn-error text-white bg-red-600"
                      }`}
                    >
                      {captchaStatus === "success"
                        ? "Captcha Valid"
                        : "Check Captcha"}
                      {captchaStatus === "error" && (
                        <span className="loading loading-spinner"></span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 form-control">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
              <div>
                <Link className="text-violet-700" to="/register">
                  Dont have Account?{" "}
                  <span className="ml-2 font-bold">Register Now</span>
                </Link>
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
