import { Link, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <>
    <div className="container">
    <h3 className="text-2xl">Gallery</h3>
    <p className="mb-4">Lorem ipsum dolor sit amet.</p>
    <div className="row">
        <div className="w-1/4">
<ul className=" flex flex-wrap gap-y-2 flex-col">
    <li><Link to=''>Web</Link></li>
    <li><Link to='Mopile'>Mopile</Link></li>
    <li><Link to='Ux'>Ux</Link></li>
</ul>


        </div>
        <div className="w-3/4">
        <Outlet>

        </Outlet>
        
        </div>
    </div>
    </div>
    
    </>

  )
}
