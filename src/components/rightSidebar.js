import {
  FaMagnifyingGlass,
  FaEllipsis
} from "react-icons/fa6";

export const RightSidebar = () => {
  return (
    <aside className="w-[300px] bg-black text-white px-3 py-2 ">

      {/* Search */}
      <div className="relative mb-3">
        <FaMagnifyingGlass className="absolute left-3 top-3 text-gray-500 text-sm" />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-black border border-gray-700 rounded-full py-2 pl-9 pr-4 text-sm text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Subscribe to Premium */}
      <div className="border border-gray-700 rounded-xl p-4 mb-3">

        <h2 className="text-lg font-bold">
          Subscribe to Premium
        </h2>

        <p className="text-sm mt-1 text-gray-300 leading-4">
          Get rid of ads, see your analytics, boost your
          replies and unlock 20+ features.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full mt-3">
          Subscribe
        </button>

      </div>

      {/* Today's News */}
      <div className="border border-gray-700 rounded-xl p-3 mb-3">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            Today's News
          </h2>

          {/* <FaXmark className="text-gray-400 cursor-pointer" /> */}
        </div>

        {/* News 1 */}
        <div className="mb-5 cursor-pointer">
          <p className="font-semibold text-sm leading-4">
            Father Dies After Attack Linked to Son's
            School Inspection in West Bengal
          </p>

          <div className="flex items-center gap-2 mt-1">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt=""
              className="w-5 h-5 rounded-full"
            />

            <span className="text-xs text-gray-500">
              2 days ago · News · 106.9K posts
            </span>
          </div>
        </div>

        {/* News 2 */}
        <div className="mb-5 cursor-pointer">
          <p className="font-semibold text-sm leading-4">
            Trump Calls India's Photo ID Voting to Push
            SAVE Act
          </p>

          <div className="flex items-center gap-2 mt-1">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt=""
              className="w-5 h-5 rounded-full"
            />

            <span className="text-xs text-gray-500">
              13 hours ago · News · 22.7K posts
            </span>
          </div>
        </div>

        {/* News 3 */}
        <div>
          <p className="font-semibold text-sm leading-4">
            BJP Reshuffles Leadership, Replaces IT Cell
            Chief After 11 Years
          </p>

          <div className="flex items-center gap-2 mt-1">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt=""
              className="w-5 h-5 rounded-full"
            />

            <span className="text-xs text-gray-500">
              2 days ago · News · 107.9K posts
            </span>
          </div>
        </div>

      </div>

      {/* What's Happening */}
      <div className="border border-gray-700 rounded-xl p-3 mb-3">

        <h2 className="text-lg font-bold mb-4">
          What's happening
        </h2>

        {/* Trend 1 */}
        <div className="mb-5">
          <p className="text-xs text-gray-500">
            Trending in India
          </p>

          <div className="flex justify-between">
            <p className="font-bold text-sm">
              #BIRCS
            </p>

            <FaEllipsis className="text-gray-500" />
          </div>
        </div>

        {/* Trend 2 */}
        <div className="mb-5">
          <p className="text-xs text-gray-500">
            Entertainment · Trending
          </p>

          <div className="flex justify-between">
            <p className="font-bold text-sm">
              #Mega158
            </p>

            <FaEllipsis className="text-gray-500" />
          </div>
        </div>

        {/* Trend 3 */}
        <div className="mb-5">
          <p className="text-xs text-gray-500">
            Trending in India
          </p>

          <div className="flex justify-between">
            <p className="font-bold text-sm">
              #PunjabSchoolsTransforming
            </p>

            <FaEllipsis className="text-gray-500" />
          </div>
        </div>

        {/* Trend 4 */}
        <div>
          <p className="text-xs text-gray-500">
            SAP S/500 · Trending
          </p>

          <div className="flex justify-between">
            <p className="font-bold text-sm">
              #amulBigBurgerstock
            </p>

            <FaEllipsis className="text-gray-500" />
          </div>
        </div>

        <button className="text-blue-400 text-sm mt-5">
          Show more
        </button>

      </div>

      {/* Who To Follow */}
      <div className="border border-gray-700 rounded-xl p-3">

        <h2 className="text-lg font-bold mb-4">
          Who to follow
        </h2>

        {/* User 1 */}
        <div className="flex items-center gap-2 mb-4">

          <img
            src="https://i.pravatar.cc/50?img=10"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate">
              The Saini Community
            </p>

            <p className="text-gray-500 text-xs">
              @Kshatriya_Saini
            </p>
          </div>

          <button className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full">
            Follow
          </button>

        </div>

        {/* User 2 */}
        <div className="flex items-center gap-2 mb-4">

          <img
            src="https://i.pravatar.cc/50?img=11"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate">
              SportsCenter 
            </p>

            <p className="text-gray-500 text-xs">
              @SportsCenter
            </p>
          </div>

          <button className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full">
            Follow
          </button>

        </div>

        {/* User 3 */}
        <div className="flex items-center gap-2">

          <img
            src="https://i.pravatar.cc/50?img=12"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate">
              Homes & Gardens
            </p>

            <p className="text-gray-500 text-xs">
              @homesandgardens
            </p>
          </div>

          <button className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full">
            Follow
          </button>

        </div>

        <button className="text-blue-400 text-sm mt-4">
          Show more
        </button>

      </div>

    </aside>
  );
};