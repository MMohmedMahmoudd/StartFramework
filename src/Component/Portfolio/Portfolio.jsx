import { useEffect, useState } from "react";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
useEffect;

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
    <section className="Portfolio py-14  w-full flex justify-center items-center">
    <div className="container  pt-14 w-full text-center">
        <div className="data w-3/4 mx-auto">
        <h1 className="text-[#2c3e50] text-5xl max-sm:text-4xl uppercase font-bold mt-28">
        portfolio component
        </h1>
        <div className="shapeParent w-full flex justify-center items-center">
            <div className="shape w-1/6 relative flex pt-5 justify-between items-center">
                <div className="shapeleft left-0 absolute w-20 h-1 bg-slate-700"></div>
                <div className="star absolute w-50 left-24"><i className="fa-solid fa-star text-slate-700"></i></div>
                <div className="shaperight right-0 absolute w-24 h-1 bg-slate-700"></div>
            </div>
        </div>
          <div className="cards flex flex-wrap mt-16">
            {[img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="imgCard max-sm:w-full max-md:w-1/2 w-1/3 px-5 cursor-pointer mb-10"
                onClick={() => handleImageClick(imgSrc)}
              >
                <div className="box rounded-2xl overflow-hidden group relative">
                  <img src={imgSrc} alt={`img${index + 1}`} />
                  <div className="layer absolute inset-0 items-center justify-center bg-[#1abc9c] opacity-90 hidden transition-all duration-500 group-hover:flex">
                    <i className="fa-solid fa-plus text-white text-9xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cards flex mb-10 flex-wrap">
            {[img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="imgCard max-sm:w-full max-md:w-1/2 w-1/3 px-5 cursor-pointer mb-10"
                onClick={() => handleImageClick(imgSrc)}
              >
                <div className="box rounded-2xl overflow-hidden group relative">
                  <img src={imgSrc} alt={`img${index + 1}`} />
                  <div className="layer absolute inset-0 items-center justify-center bg-[#1abc9c] opacity-90 hidden transition-all duration-500 group-hover:flex">
                    <i className="fa-solid fa-plus text-white text-9xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-blue-400 bg-opacity-50 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-2xl mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}