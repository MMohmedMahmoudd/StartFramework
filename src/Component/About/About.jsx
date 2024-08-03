
export default function About() {
  return (
    <>
    <section className="About py-28 my-24">
    <div className="container py-28 my-24  flex justify-around items-center flex-wrap flex-col gap-y-1 h-50 my-5 p-3 rounded ">
      <h2 className="text-5xl text-white font-bold uppercase">about component</h2>
      <div className="shape w-1/4 relative flex pt-5 justify-between items-center">
        <div className="shapeleft left-0 absolute w-48 h-1 bg-white"></div>
        <div className="star absolute right-48 w-50 left-48"><i className="fa-solid fa-star text-white"></i></div>
        <div className="shaperight right-0 absolute w-48 h-1 bg-white"></div>
      </div>
      <div className="row w-3/4 gap-x-4 pt-8 text-white  mx-auto columns-6 flex justify-center items-center">
        <div className="w-2/5 flex justify-start items-start">
        <p className="text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="w-2/5 flex justify-start items-center">
        <p className="text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>
    </div>
    </section>
    </>
  )
}
