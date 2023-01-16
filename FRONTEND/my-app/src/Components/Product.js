import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../Context/TokenContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  // connect to server
  const SERVER = "http://127.0.0.1:8000/app/";

  const { token, setToken } = useContext(TokenContext);

  // usestate that point if the user is connect or not
  const [logged, setlogged] = useState(false);

  // use Effect to change from unlogged to logged mood (after the token approved)
  useEffect(() => {
    if (token) setlogged(true);
  }, [token]);

  // use stata for products (in order to display by GET)
  const [data, setData] = useState([]);

  // func to update the login with the token into Bearer token type and approve the access to the products
  const getProducts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get(SERVER + "product", config)
      .then((res) => setData(res.data));
  };

  return (
    <div>
      <br />

      <h4>want to add product ? </h4>

      {logged && (
        <Link to="/AddProduct">
          <button className="btn btn-primary">add product</button>
        </Link>
      )}

      {!logged && <h6>you have to log in in order to add product</h6>}

      <br />

      <h4>your products:</h4>
      {logged && <button onClick={() => getProducts()}>get data</button>}
      {!logged && <h6>you have to log in in order to see your products</h6>}

      {data.map((item, i) => (
        <div key={i}>
          desc: {item.desc} <br />
          price: {item.price} <br />
          user: {item.user} <br />
          image: <img src={"http://127.0.0.1:8000" + item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Product;
