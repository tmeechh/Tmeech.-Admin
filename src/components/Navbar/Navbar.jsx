import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
      <>
          <div className='navbar flex justify-between items-center py-[8px] px-[4%]'>
              <div className='flex flex-col'>
              <h1 className="logo w-[max(10%,80px)] text-[38px] font-[900] text-[#FFEA00]">Tmeech.</h1>
                  <p className='text-[15px] font-[900] mt-[-15px] pl-[10px]'>Admin Panel</p>
                </div>
              <img className='profile w-[40px] rounded-full' src={assets.profile_image} alt="" />
         </div>
      </>
  )
}

export default Navbar