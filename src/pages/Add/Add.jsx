import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = ({url}) => {
 

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData (data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category:"Salad"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else {
           toast.error(response.data.message)
        }
    }

  return (
      <>
        <div className='add w-[70%] mb-[50px] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
              <form className='flex-col gap-[20px]' onSubmit={onSubmitHandler}>
                  <div className="add-image-upload flex-col ">
                      <p>Upload Image</p>
                      <label htmlFor="image" required>
                          <img className='w-[120px]  ' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                      </label>
                      <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
                  </div>
                  <div className="add-product-name w-[max(40%,280px)]  flex-col">
                      <p>Product Name</p>
                      <input onChange={onChangeHandler} value={data.name} className='p-[10px] border-[1.5px]' type="text" name='name' placeholder='Type Here' required/>
                  </div>
                  <div className='add-product-description w-[max(40%,280px)] flex-col'>
                      <p>Product Description</p>
                      <textarea onChange={onChangeHandler} value={data.description} className='p-[10px] border-[1.5px]' name="description" rows='6' placeholder='Write Content Here ' required></textarea>
                  </div>
                  <div className="add-category-price flex gap-[30px]">
                      <div className="add-category flex-col">
                          <p>Product Category</p>
                          <select onChange={onChangeHandler} value={data.category} name="category" className='max-w-[120px] border-[1.5px] p-[10px]'>
                              <option value="Salad">Salad</option>
                              <option value="Rolls">Rolls</option>
                              <option value="Deserts">Deserts</option>
                              <option value="Sandwich">Sandwich</option>
                              <option value="Cake">Cake</option>
                              <option value="Pure Veg">Pure Veg</option>
                              <option value="Pasta">Pasta</option>
                              <option value="Noodles">Noodles</option>
                              <option value="Swallow">Swallow</option>
                              <option value="Rice">Rice</option>
                              <option value="Grills">Grills</option>
                              <option value="Yam">Yam</option>
                              <option value="Beans">Beans</option>
                              <option value="Breads">Breads</option>
                          </select>
                      </div>
                      <div className="add-price flex-col">
                          <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} className='max-w-[120px] border-[1.5px] p-[10px]' type="Number" name='price' placeholder='$20' required/>
                      </div>
                  </div>
                  <button type='submit' className='add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer'>Add</button>
              </form>  
      </div>
      </>
  )
}

export default Add