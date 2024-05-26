import { useContext } from "react";
import registerPage from "../../../assets/others/registerPage.jpg";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import SocialLogin from "../../ShareCompo/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //!React Hook Form->
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log("User created", result.user);

        //! axiosPublic
        const formInfo = {
          email: data.email,
          password: data.password,
        };
        axiosPublic.post("/users", formInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Registration successfully");
            reset();
            logoutUser().then((result) => {
              console.log(result);
              navigate("/login", { replace: true });
            });
          }
        });
      })
      .catch((error) => {
        toast.error("Fail to resgistration");
        console.log(error);
      });
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);

  //   //! Email
  //   createUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <div className="min-h-screen hero bg-base-100">
        <div className="flex hero-content ">
          <div className="w-1/2 text-center lg:text-left">
            <img className="" src={registerPage} alt="" />
          </div>
          <div className="w-1/2 max-w-lg shadow-2xl card shrink-0 bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {/*//! error handling with react hook */}
                {errors.email && <span>This field is required</span>}
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password Must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password Must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password Must have one uppercase, one lowercase , one number
                    and one special characters
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="mt-6 form-control">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <Link className="text-violet-700" to="/login">
                  Already have Account?{" "}
                  <span className="ml-2 font-bold">Login Now</span>
                </Link>
              </div>
            </form>
            {/* Form END */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
