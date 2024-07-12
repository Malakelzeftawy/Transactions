import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CustomerTable.module.css"
import Loading from "../Loading/Loading";




export default function CustomerTable(){

    const [custom , setCustomer] = useState(null);
    const [transactions , setTransications] = useState(null)
    const [search , setSearch] = useState("");
  
    async function getCustomer(){
        const options = {
          method : "GET",
          url : "http://localhost:3001/customers"
        }
        let {data} = await axios.request(options);
        setCustomer(data)
      }

      useEffect(()=>{
        getCustomer()
      },[])


      async function getTransications(){
        const options = {
            method : "GET",
            url : "http://localhost:3001/transactions"
        }
        let {data} = await axios.request(options);
        setTransications(data);
      }
useEffect(()=>{
    getTransications()
},[])




    return(<>
   {custom == null ? (<Loading/>) : (
     <section className=" flex justify-center items-center">
        <div className="w-fit my-2">
         <div className="w-full flex mb-6 gap-3">
     <input type="text" placeholder="Search Customer" className="outline-none w-full  rounded-xl bg-transparent border border-gray-300 px-2 py-2 text-white" 
     onChange={(e)=> setSearch(e.target.value)}
     />

      
     

     
     </div>
     {transactions == null ? ("") : (
        <table className={`table ${styles.table}`}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Transactions Amounts</th>
                <th>Transactions Date</th>
            </tr>
        </thead>
        <tbody>
          {custom.filter((customer)=> {
            return search.toLocaleLowerCase() === '' ? customer : customer.name.toLocaleLowerCase().includes(search) 
          }).map((customer)=> <tr key={customer.id}>
            <th>{customer.id}</th>
            <th>{customer.name}</th>
            <th>
                {transactions.map((transaction)=> <p key={transaction.id}>
                    {transaction.customer_id == customer.id ? (<span>
                        {transaction.amount} 
                    </span> ) : ("")}
                     </p>)}
            </th>
            <th>
                {transactions.map((transaction)=> <p key={transaction.id}>
                    {transaction.customer_id == customer.id ? (<span>
                        {transaction.date}
                    </span>) : ("")}
                </p>)}
            </th>
          </tr>)}
        </tbody>
    </table>
     )}
 </div>
     </section>
   )}
   
   
    </>)
}