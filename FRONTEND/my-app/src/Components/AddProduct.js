// in this component you will add data (after logged) to the specific user

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TokenContext } from '../Context/TokenContext';


const AddProduct = () => {

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);
  
  const {token, setToken} = useContext(TokenContext);
  
  const MYSERVER ="http://127.0.0.1:8000/app/product"

  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handletDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('desc', desc);
    formData.append('price', price);

    try {
      const res = await axios.post(MYSERVER, formData, config, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(res.data.imageUrl);
    } catch (err) {
      console.error(err);
    }

  
  };

  const stam = () => {
    console.log(token)
  }

  return (
    <div>
      <br/>
      <h5>add product</h5>
      <br/>
      {/* <button onClick={stam}>print</button>  */}
      <form onSubmit={handleImageUpload}>
        product desc: <input type="text" onChange={handletDescChange} /> <br/><br/>
        product price: <input type="text" onChange={handlePriceChange} />  <br/><br/>
        image: <input type="file" onChange={handleImageChange} />  <br/><br/>
        <button type="submit">add product</button>  <br/><br/>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
};

export default AddProduct;
