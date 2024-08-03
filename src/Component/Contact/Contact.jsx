import  { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <div className="contact bg-white mt-20 py-10 w-full text-center">
        <div className="data">
          <h1 className="text-[#2c3e50] text-5xl max-sm:text-4xl uppercase font-bold mt-7">
            Contant component
          </h1>
          <div className="shapeParent w-full flex justify-center items-center">
            <div className="shape w-1/6 relative flex pt-5 justify-between items-center">
                <div className="shapeleft left-0 absolute w-28 h-1 bg-slate-700"></div>
                <div className="star absolute w-50 left-36"><i className="fa-solid fa-star text-slate-700"></i></div>
                <div className="shaperight right-0 absolute w-28 h-1 bg-slate-700"></div>
            </div>
        </div>
          <form className="max-w-3xl mx-auto p-10">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="userName"
                id="userName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-emerald-600 appearance-none dark:text-black dark:border-emerald-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="userName"
                className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name
              </label>
            </div>

            <div className="relative z-0 w-full my-14 group">
              <input
                type="text"
                name="age"
                id="age"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-emerald-600 appearance-none dark:text-black dark:border-emerald-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="age"
                className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Age
              </label>
            </div>

            <div className="relative z-0 w-full my-14 group">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-emerald-600 appearance-none dark:text-black dark:border-emerald-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="userEmail"
                className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Email
              </label>
            </div>

            <div className="relative z-0 w-full my-14 group">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-emerald-600 appearance-none dark:text-black dark:border-emerald-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="userPassword"
                className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Password
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-emerald-500 px-5 py-2 rounded-md block font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}