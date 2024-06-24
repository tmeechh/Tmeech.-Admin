import { useState } from 'react'
import './Orders.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  },[])

  return (
      <>
      <div className='order-add w-[82%]'>
        <h3 className='font-black text-[18px] mt-[20px] px-[30px]'>Order Page</h3>
        <div className="order-list">
          {orders.map((order,index) => (
            <div key={index} className="order-item items-start gap-[10px] border-[1px] border-[solid] border-[#FFEA00] p-[20px] my-[30px] mx-[30px] text-[14px] text-[#505050]">
              <img className='' src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food font-[800]">
                  {order.items.map((item,index) => {
                       if (index===order.items.length-1) {
                        return item.name + " x " + item.quantity
                    }
                       else {
                         return item.name + " x " + item.quantity + ", "
                    }
                     })}
                </p>
                <p className="order-item-name mt-[30px] mb-[5px] font-[800]">
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className="order-item-address mb-[10px]">
                  <p>{order.address.street + ","}</p>
                  <p>{order.address.city + ", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
                <p className='order-item-phone'>{order.address.email}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#FFF5CC] border-[1px] border-[solid] border-[#FFEA00] w-[max(10vw,120px)] p-[10px] outline-none'>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
             </div>
          ))}
        </div>
          </div>
      </>
  )
}

export default Orders