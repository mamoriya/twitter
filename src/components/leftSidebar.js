import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHouse,
  FaMagnifyingGlass,
  FaBell,
  FaUserPlus,
} from "react-icons/fa6";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";


export const LeftSidebar = () => {
  const [showLogout, setShowLogout] = useState(false);


  const [user, setuser] = useState();

  const navigate = useNavigate();
  // console.log("auther is ", auth.currentUser);


  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("isAuth");
    setShowLogout(false);
    navigate(0);
  };

  useEffect(() => {
    const userdetail = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => userdetail();
  }, [])

  return (
    <aside className="w-[280px] h-screen bg-black text-white px-5 py-4 flex flex-col">

      {/* X Logo */}
      <div className="text-4xl font-bold mb-6 px-4">
        Twitter
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">

        <Link
          to="/home"
          className="flex items-center gap-5 px-4 py-3 rounded-full hover:bg-gray-900 text-xl font-semibold"
        >
          <FaHouse /> <span>Home</span>
        </Link>

        <Link
          to="/explore"
          className="flex items-center gap-5 px-4 py-3 rounded-full hover:bg-gray-900 text-xl"
        >
          <FaMagnifyingGlass /><span>Explore</span>

        </Link>

        <Link
          to="/notification"
          className="flex items-center gap-5 px-4 py-3 rounded-full hover:bg-gray-900 text-xl"
        >
          <FaBell />
          <span>Notifications</span>
        </Link>

        <Link
          to="/follow"
          className="flex items-center gap-5 px-4 py-3 rounded-full hover:bg-gray-900 text-xl"
        >
          <FaUserPlus />
          <span>Follow</span>
        </Link>



      </nav>

      {/* Post Button */}
      <Link
        to="/add-post"
        className="w-full flex items-center justify-center bg-white text-black font-bold text-lg py-3 rounded-full mt-5 hover:bg-gray-200"
      >
        Post
      </Link>

      {/* Profile */}
      <div className="mt-auto">
        <button
          type="button"
          onClick={() => setShowLogout((current) => !current)}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-full hover:bg-gray-900 cursor-pointer text-left"
        >
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <p className="font-bold text-sm truncate">
              {user?.displayName}
            </p>

            <p className="text-gray-500 text-sm turncate">
              {user?.email}
            </p>
          </div>
        </button>

        {showLogout && (
          <button
            onClick={handleLogout}
            type="button"
            className="mt-2 w-full rounded-full border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/20"
          >
            Logout
          </button>
        )}
      </div>

    </aside>
  );
};