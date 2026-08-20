import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";
import { auth, provider } from "../firebase/config";
import loginImage from "../assets/images.png";

export const Login = () => {
  const navigate = useNavigate();


  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log((result));
      localStorage.setItem("isAuth", "true");
      toast.success("Login successful");
      navigate("/");
    }).catch((error) => {
      console.error(error);
      toast.error("Login failed");
    });
  }


  return (
    <div className="min-h-screen bg-black text-white">

      {/* Main Section */}
      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-[1100px] m-auto flex items-center">

          {/* LEFT - LOGIN FORM */}
          <div className="w-full md:w-1/2 max-w-[355px]">

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] mb-12">
              Happening
              <br />
              now.
            </h1>

            {/* Social Buttons */}
            <div className="space-y-4">



              {/* Google */}
              <button
                className="
                  w-full
                  h-[44px]
                  bg-white
                  text-gray-700
                  rounded-full
                  flex
                  items-center
                  justify-center gap-3 text-sm hover:bg-gray-200 transition
                "
                onClick={handleLogin}
              >
                <FaGoogle className="text-[#4285F4]" />
                <span>Continue with Google</span>
              </button>



            </div>

            
            

          </div>

          {/* RIGHT - IMAGE LOGO */}
          <div className="hidden md:flex w-1/2 items-center justify-center">

            <img
              src={loginImage}
              alt="Logo"
              className="w-[420px] max-w-full object-contain"
            />

          </div>

        </div>

      </div>



      {/* FOOTER */}
      <footer className="
        fixed
        bottom-5
        left-0
        right-0
        text-center
        text-[11px]
        text-gray-500
      ">
        About · Get App · Grok · Help · Terms · Privacy · Cookies · Careers ·
        Ads & Business · Developers · News · Accessibility · © 2026 X Corp.
      </footer>

    </div>
  );
};