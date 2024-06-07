import "./App.css";
import Category from "./Category";
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
    let[finalCategory,setFinalCategory]=useState([])
    let getCategory=()=>{
        axios.get('https://dummyjson.com/products/category-list')
        .then((res) =>res.data)
        .then((finalRes) => {
            setFinalCategory(finalRes);
        })
    }
    let getProducts=()=>{
        axios.get('https://dummyjson.com/products')
        .then((proRes) =>proRes.data)
        .then((finalRes) => {
            console.log(finalRes);
        })
    }
    useEffect(()=>{
        getCategory();
        getProducts();
    },[])
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[10px] ">
            {" "}
            Our Product
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>

              <Category  finalCategory={finalCategory} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <ProductItems /> 
                <ProductItems /> 
                <ProductItems /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems() {
    return(
        <div className="shadow-lg  text-center pb-4">
                  <img
                    src="https://yuvaanjewels.com/wp-content/uploads/2023/10/IMG_20231031_142404_214.jpg"alt="Astrid Polki Bracelet"/>
                  <h4>IPHONE</h4>
                  <b>₹ 1,00,000</b>
        </div>
    )
}
