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
        <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th className="border border-slate-300 py-2 px-4">title</th>
                    <th className="border border-slate-300 py-2 px-4">description</th>
                    <th className="border border-slate-300 py-2 px-4">price</th>
                    <th className="border border-slate-300 py-2 px-4">discountPercentage</th>
                    <th className="border border-slate-300 py-2 px-4">rating</th>
                    <th className="border border-slate-300 py-2 px-4">stock</th>
                    <th className="border border-slate-300 py-2 px-4">brand</th>
                    <th className="border border-slate-300 py-2 px-4">category</th>
                    <th className="border border-slate-300 py-2 px-4">thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((product)=>{
                return(
                <tr>
                    <td className="border border-slate-300 py-2 px-4">{product.title}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.description}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.price}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.discountPercentage}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.rating}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.stock}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.brand}</td>
                    <td className="border border-slate-300 py-2 px-4">{product.category}</td>
                    <td className="border border-slate-300 py-2 px-4"><img src={product.thumbnail}/></td>
                </tr>
                )

                })
                }

            </tbody>
        </table>
    </div>
</>
)
})
export default Products