import { MdOutlineErrorOutline } from "react-icons/md";
import ErrorPageImage from "./errorPic/Error-page.png"; // Corrected import statement

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-600">
      <div className="flex items-center gap-2 ">
        <div>
          <h2 className="text-5xl font-bold">Page Not Found</h2>
        </div>
        <div className="text-5xl font-bold">
          <MdOutlineErrorOutline />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <img className="w-1/2" src={ErrorPageImage} alt="Error Page" />
      </div>
    </div>
  );
};

export default Error;
