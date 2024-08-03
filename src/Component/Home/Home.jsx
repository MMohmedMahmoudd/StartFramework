import logo from "../../assets/avataaars.svg"
export default function Home() {
  return (
    <>
    <div className="container my-16 flex flex-col gap-y-5 flex-wrap justify-center items-center">
      <div className="image mt-12 justify-center items-center w-1/2 mx-auto my-auto">
      <img className="w-1/4 mx-auto " src={logo} />
      </div>
      <h2 className="text-4xl uppercase font-extrabold text-white">start Framework</h2>
      <div className="shape w-1/4 relative flex pt-5 justify-between items-center">
        <div className="shapeleft left-0 absolute w-48 h-1 bg-white"></div>
        <div className="star absolute right-48 w-50 left-48"><i className="fa-solid fa-star text-white"></i></div>
        <div className="shaperight right-0 absolute w-48 h-1 bg-white"></div>
      </div>
      <div className="title flex justify-center items-center w-1/4 text-white">
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  )
}
