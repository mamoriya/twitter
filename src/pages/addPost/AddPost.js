import { useState } from "react";
import { auth, db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

export const AddPost = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const postRef = collection(db, "posts")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(auth);
    // console.log("Description:", description);
    // console.log("Image:", image);

    const document = {
      description: description,
      image: image ? URL.createObjectURL(image) : null,
      author: {
        userId: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        profilePicture: auth.currentUser.photoURL,
      },
      createdAt: new Date(),
    }

    try {
      await addDoc(postRef, document);
      setDescription("");
      setImage(null);
      toast.success("Post added successfully");
    } catch (error) {
      toast.error("Error adding document: ", error);
    }

  };

  return (
    <div className="w-full max-w-[600px] bg-black text-white border border-gray-800 rounded-xl p-5">

      <h2 className="text-xl font-bold mb-5">
        Create Post
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            What's happening?
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something..."
            rows="5"
            className="
              w-full
              bg-transparent
              border
              border-gray-700
              rounded-lg
              p-3
              text-white
              placeholder-gray-500
              outline-none
              focus:border-blue-500
              resize-none
            "
          />
        </div>

        {/* Image */}
        <div className="mb-5">

          <label className="block text-sm font-medium mb-2">
            Add Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="
              w-full
              text-sm
              text-gray-400
              file:mr-4
              file:py-2
              file:px-4
              file:rounded-full
              file:border-0
              file:bg-blue-500
              file:text-white
              file:font-semibold
              hover:file:bg-blue-600
            "
          />

        </div>

        {/* Image Preview */}
        {image && (
          <div className="mb-5">

            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full max-h-[350px] object-cover rounded-xl"
            />

          </div>
        )}

        {/* Post Button */}
        <div className="flex justify-end">

          <button
            type="submit"
            disabled={!description.trim() && !image}
            className="
              bg-blue-500
              hover:bg-blue-600
              disabled:bg-gray-700
              disabled:text-gray-500
              text-white
              font-bold
              px-6
              py-2
              rounded-full
            "
          >
            Post
          </button>

        </div>

      </form>
    </div>
  );
};