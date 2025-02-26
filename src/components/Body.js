import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from './Shimmer';

const Body = () => {
  const [productData, setProductData] = useState([]);
  const [input, setInput] = useState("");
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const ApiData = await fetch("https://fakestoreapi.com/products");
    const json = await ApiData.json();
    console.log(json);
    setProductData(json);
    setProductsData(json);
  };
  const handleFilter = () => {
    const filterProduts = productData.filter((res) => res.rating.rate > 4);
    setProductsData(filterProduts);
    console.log(filterProduts, "clicked");
  };
  // const handleSearch = () => {
  //   const searchFilter = productData.filter((res) =>
  //     res.title.toLowerCase().includes(input.toLowerCase())
  //   );
  //   setProductsData(searchFilter);
  // };
  const handleSearch = (e) => {
    const searchFilter = productData.filter((res) =>
      res.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsData(searchFilter);

  };
  const filterClear = () => {
    setProductsData();
    setInput("");
    console.log(productData);
  };
  return (
    <div>
      <input
        type="text"
        // value={input}
        // onChange={(e)=>setInput(e.target.value)}
        onChange={handleSearch}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      {/* <button className="filter-btn" onClick={handleFilter}>
        Filter Products
      </button> */}
      {/* <button className="filter-btn" onClick={filterClear}>
        Clear Filter
      </button> */}
      {productsData.length === 0 && <Shimmer/>}
      <div className="res-cards">
        {productsData.map((products) => {
          return (
            <>
              <Card
                key={products.id}
                image={products.image}
                title={products.title}
                price={products.price}
                rating={products.rating.rate}
                description={products.description}
                category={products.category}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
