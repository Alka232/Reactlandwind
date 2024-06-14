import { useEffect, useState } from "react";

const Products = ( ()=> {
const [products,setProducts]=useState([])

const fetchProducts= async ()=>{
const response = await fetch("https://dummyjson.com/products");
const data=await response.json()
console.log(data);
setProducts(data.products)
}

useEffect(()=>{
fetchProducts()
},[])
// const fetchProducts=fetch("https://dummyjson.com/products");
// fetchProducts.then(res =>{
// console.log(res.json());
// })


return(

<>
    <div className="py-12 px-[8.7rem]">
        <h1 className="font-bold text-2xl capitalize py-3 text-center">Products List</h1>
        <p className="text-red-500 animate-bounce text-xl pb-3 text-center">Below data is comming from Live API</p>
        <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th className="border border-slate-300 py-2 px-4">S.No</th>
                    <th className="border border-slate-300 py-2 px-4">Title</th>
                    <th className="border border-slate-300 py-2 px-4">Description</th>
                    <th className="border border-slate-300 py-2 px-4">Price</th>
                    <th className="border border-slate-300 py-2 px-4">Discount Percentage</th>
                    <th className="border border-slate-300 py-2 px-4">Rating</th>
                    <th className="border border-slate-300 py-2 px-4">Stock</th>
                    <th className="border border-slate-300 py-2 px-4">Brand</th>
                    <th className="border border-slate-300 py-2 px-4">Category</th>
                    <th className="border border-slate-300 py-2 px-4">Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((product, index) => {
                    return (
                      index < 4 && (
                        <tr key={index}>
                          <td className="border border-slate-300 py-2 px-4">{index + 1}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.title}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.description}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.price}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.discountPercentage}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.rating}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.stock}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.brand}</td>
                          <td className="border border-slate-300 py-2 px-4">{product.category}</td>
                          <td className="border border-slate-300 py-2 px-4"><img src={product.thumbnail} alt={product.title}/></td>
                        </tr>
                      )
                    );
                  })
                }

            </tbody>
        </table>
    </div>
</>
)
})
export default Products