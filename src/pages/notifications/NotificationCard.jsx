

export const NotificationCard = () => {
  return (
    <div className="w-full border-b border-gray-800 px-5 py-5 hover:bg-gray-950">

      <div className="flex gap-4">

        

        {/* User Profile */}
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Notification Content */}
        <div className="flex-1">

          <p className="text-white text-base">
            <span className="font-bold">
              Ayush Mamoriya
            </span>{" "}
            has created a new post.
          </p>

          <p className="text-gray-500 text-sm mt-1">
            See this new post
          </p>

          {/* Time */}
          <p className="text-gray-600 text-xs mt-2">
            2 minutes ago
          </p>

        </div>

      </div>

    </div>
  );
};