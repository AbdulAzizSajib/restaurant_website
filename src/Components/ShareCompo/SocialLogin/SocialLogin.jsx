import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const Navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res.data);
        Navigate("/");

        //!

        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          photoURL: res.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Navigate("/");
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="w-1/2 divider"></div>
      <h2 className="text-xl font-bold text-center">Register With</h2>
      <div className="flex justify-center">
        <hr className="items-center w-1/2 border-2"></hr>
      </div>
      <div>
        <div className="flex p-6 justify-evenly">
          <button
            onClick={() => handleSocialLogin(googleSignIn)}
            className="btn btn-outline"
          >
            <FaGoogle></FaGoogle>
            Google
          </button>
          <button className="btn btn-outline">
            <FaGithub></FaGithub>
            Google
          </button>
          <button className="btn btn-outline">
            <FaFacebook></FaFacebook>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
