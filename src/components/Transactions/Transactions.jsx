import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Transactions.module.css"
import Loading from "../Loading/Loading";

export default function Transactions(){
    const [custom , setCustomer] = useState(null);
    const [transactions , setTransications] = useState(null)
  
    async function getCustomer(){
        const options = {
          method : "GET",
          url : "http://localhost:3001/customers"
        }
        let {data} = await axios.request(options);
        // console.log(data)
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
     {transactions == null ? (<Loading/>) : (
    <div className="flex justify-center items-center">
         <div className="w-fit">
     <div className="w-full flex mb-6 ">
     </div>
     {custom == null ? (<h1>loading</h1>) : (
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
          {transactions.map((transaction)=> <tr key={transaction.id}>
            <th>
            { custom.map((customer) => <p key={customer.id}>
                    {customer.id == transaction.customer_id ? (<span>
                        {transaction.id}
                    </span>) : ("")}
                </p>)}
            </th>
            <th>
                { custom.map((customer) => <p key={customer.id}>
                    {customer.id == transaction.customer_id ? (<span>
                        {customer.name}
                    </span>) : ("")}
                </p>)}
            </th>
            <th>
            { custom.map((customer) => <p key={customer.id}>
                    {customer.id == transaction.customer_id ? (<span>
                        {transaction.amount}
                    </span>) : ("")}
                </p>)}
            </th>
            <th>
            { custom.map((customer) => <p key={customer.id}>
                    {customer.id == transaction.customer_id ? (<span>
                        {transaction.date}
                    </span>) : ("")}
                </p>)}
            </th>
          </tr>)}
        </tbody>
    </table>
     )}
 </div>
    </div>
   )} 
    </>)
}