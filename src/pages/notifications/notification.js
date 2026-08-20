import { FaBell } from "react-icons/fa6";
import { NotificationCard } from "./NotificationCard";


export const Notification = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="flex gap-4 px-5 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">
          Notifications
        </h1>
        {/* Notification Icon */}
        <div className="text-blue-500 text-xl pt-1">
          <FaBell />
        </div>
      </div>

      {/* Notification */}
      <NotificationCard />

      <NotificationCard />

      <NotificationCard />

    </div>
  );
};