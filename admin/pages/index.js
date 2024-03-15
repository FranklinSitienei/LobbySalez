import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form className="flex flex-col rounded-lg shadow-md bg-gray-100 p-4 justify-center">
        <h2 className="items-center font-bold">Welcome To Your Dash Mr/Mrs Admin...</h2>
        <label className="relative flex flex-col mt-10">
          <span className="font-medium mb-2">Email</span>
          <input type="text" value="" placeholder="Email Needed..." className="border-grey-100 focus:border-green-500 outline-none relative bg-transparent text-black focus:ring-0" />
        </label><label className="relative flex flex-col">
          <span className="font-medium mb-2">Password</span>
          <input type="text" value="" placeholder="8 characters" className="border-grey-100 focus:border-green-500 outline-none relative bg-transparent text-black focus:ring-0" />
        </label>
        <h2 className="items-center text-center font-bold">OR</h2>
        <h4 className="items-center text-center font-light">Login with:</h4>
        <button className="bg-gray-300 hover:bg-black hover:text-white flex items-center gap-2 justify-center">
          <FcGoogle size={20} /> Google
        </button>
        {/* <span>
          <button className="bg-gray-300 hover:bg-black hover:text-white mt-5">
            Apple
          </button>
        </span> */}
      </form>
    </div>
  );
}
