import { useState } from "react";

export const FollowCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex items-start gap-3 px-4 py-4 hover:bg-gray-950">

      {/* Profile Image */}
      <img
        src={user.image}
        alt={user.name}
        className="w-11 h-11 rounded-full object-cover shrink-0"
      />

      {/* User Details */}
      <div className="flex-1 min-w-0">

        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="font-bold text-white truncate">
              {user.name}
            </p>

            <p className="text-gray-500 text-sm">
              @{user.username}
            </p>
          </div>

          {/* Follow Button */}
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={` font-bold text-sm px-5 py-2 rounded-full  ${
              isFollowing
                ? "bg-black text-white border border-gray-600"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>

        </div>

        {/* Bio */}
        <p className="text-gray-200 text-sm mt-1">
          {user.bio}
        </p>

      </div>

    </div>
  );
};