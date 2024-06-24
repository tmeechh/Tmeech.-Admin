import { assets } from '../../assets/assets'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
      <>
          <div className='sidebar text-[max(1vw,10px)]  w-[18%] min-h-[100vh] border-[1.5px] border-[solid] border-[#a9a9a9] border-t-0 '>
              <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
                  <NavLink to="/add" className=" sidebar-option flex items-center gap-[12px] border-[1px] border-[solid] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-t-[3px] rounded-b-[0px] rounded-l-[0px] rounded-r-[3px] cursor-pointer">
                      <p className='plus-icon text-[25px]  bg-white justify-center flex items-center border-[black] border-[1px] rounded-[50px] w-[40px] h-[40px]'>+</p>
                      <p>Add Items</p>
                  </NavLink>
                  <NavLink to="/list" className="sidebar-option flex items-center gap-[12px] border-[1px] border-[solid] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-t-[3px] rounded-b-[0px] rounded-l-[0px] rounded-r-[3px] cursor-pointer">
                      <img className='w-[40px]' src={assets.checklist} alt="" />
                      <p>List Items</p>
                  </NavLink>
                  <NavLink to="/orders" className="sidebar-option flex items-center gap-[12px] border-[1px] border-[solid] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-t-[3px] rounded-b-[0px] rounded-l-[0px] rounded-r-[3px] cursor-pointer">
                      <img className='w-[40px]' src={assets.order_icon} alt="" />
                      <p>Orders</p>
                  </NavLink>
              </div>
        </div>
      </>
  )
}

export default Sidebar