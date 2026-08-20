import { FaTrashAlt } from "react-icons/fa";
import {  FaCircleCheck } from "react-icons/fa6";
import { auth, db } from "../../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PostCard = ({ post }) => {

    const navigate = useNavigate();

    const { author, description, id, image, createdAt } = post

    async function handleDelete() {
        const document = doc(db, "posts", id);
        await deleteDoc(document);
        toast.success("Post deleted successfully");
        navigate(0)

    }

    return (
        <div className="w-full max-w-[600px] bg-black text-white px-4 py-3 border-b border-gray-800">

            {/* Profile Section */}
            <div className="flex gap-3">


                <img
                    src={author.profilePicture }
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">

                    {/* Username */}
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-[15px]">
                            {author.name }
                        </span>

                        <FaCircleCheck className="text-blue-500 text-[15px]" />

                        <span className="text-gray-500 text-[15px]">
                            {author.email}
                        </span>


                        {
                            author.userId === auth.currentUser.uid &&
                            <div onClick={handleDelete} className="ml-auto flex gap-3 text-gray-500 cursor-pointer">
                                <FaTrashAlt />
                            </div>
                        }

                    </div>

                    {/* Translation */}
                    <span className="text-gray-500 text-[14px]">
                        {createdAt?.toDate().toLocaleString() }
                    </span>

                    {/* Description */}
                    <div className="mt-2 text-[15px] leading-5">
                        {description }
                    </div>


                    {/* Media */}
                    <div className="mt-3 rounded-2xl overflow-hidden">
                        <img
                            src={image }
                            alt="Post"
                            className="w-full max-h-[500px] object-cover"
                        />
                    </div>

                   

                </div>
            </div>
        </div>
    );
};

