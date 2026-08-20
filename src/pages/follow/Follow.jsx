import { collection, getDocs } from "firebase/firestore";
import { FollowCard } from "./FollowCard";
import { db } from "../../firebase/config";
import {  useEffect } from "react";

export const Follow = () => {




  const users = [
    {
      id: 1,
      name: "ShivDayal Kumawat Nangal",
      username: "ShivDay94014279",
      image: "https://i.pravatar.cc/100?img=11",
      bio: "पूर्व प्रदेश अध्यक्ष राजस्थान कुमावत युवा शक्ति",
    },
    {
      id: 2,
      name: "Garg ",
      username: "gargtts",
      image: "https://i.pravatar.cc/100?img=12",
      bio: "Git gud bitches",
    },
    {
      id: 3,
      name: "Chandra Prakash Saini",
      username: "chandusa inhp",
      image: "https://i.pravatar.cc/100?img=13",
      bio: "Public fighter !! National President- Fule Brigade !!",
    },
    {
      id: 4,
      name: "WalterBlack",
      username: "Samosaholic",
      image: "https://i.pravatar.cc/100?img=14",
      bio: "WalterBlack : I Cook Memes ",
    },
    {
      id: 5,
      name: "ISRO",
      username: "isro",
      image: "https://i.pravatar.cc/100?img=15",
      bio: "Indian Space Research Organisation",
    },
    {
      id: 6,
      name: "Ranjeet Saini Haramara",
      username: "RHaramara",
      image: "https://i.pravatar.cc/100?img=16",
      bio: "Ranjeet Saini Haramara",
    },
    {
      id: 7,
      name: "Joe Rogan",
      username: "joerogan",
      image: "https://i.pravatar.cc/100?img=17",
      bio: "Dragon Believer",
    },
    {
      id: 8,
      name: "जय द्वारकाधीश",
      username: "JaiDwarkadhish_",
      image: "https://i.pravatar.cc/100?img=18",
      bio: "",
    },
  ];

  useEffect(() => {
    async function fetchUsers() {
      const user = await getDocs(collection(db, "users"));
      console.log("user size is ", user);
    }
    fetchUsers();
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-gray-800 px-4 py-4">
        <h1 className="text-xl font-bold">
          Follow
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">

        <button className="flex-1 py-4 text-gray-500 hover:text-white hover:border-b-2 hover:border-blue-500 ">
          Who to follow
        </button>

        <button className="flex-1 py-4 text-gray-500 hover:text-white hover:border-b-2 hover:border-blue-500">
          Creators for you
        </button>

      </div>

      {/* Heading */}
      <h2 className="text-xl font-bold px-4 py-5">
        Suggested for you
      </h2>

      {/* Users */}
      {users.map((user) => (
        <FollowCard
          key={user.id}
          user={user}
        />
      ))}

    </div>
  );
};