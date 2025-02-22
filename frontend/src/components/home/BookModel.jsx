import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!book) return null; // Prevent rendering if no book data

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative animate-fade-in"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        />

        {/* Book Information */}
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear || "Unknown Year"}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id || "No ID"}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title || "No Title"}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author || "No Author"}</h2>
        </div>

        {/* Additional Content */}
        <p className="mt-4">Additional Details</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          libero repellat dolores ipsum non dolore, fugit quam, sequi mollitia
          ea voluptates incidunt cupiditate nostrum dicta alias eveniet
          sapiente laudantium eum rem sit eos expedita? Tempore magnam
          accusantium architecto veritatis accusamus perferendis sunt vero
          neque ab?
        </p>
      </div>
    </div>
  );
};

export default BookModel;
