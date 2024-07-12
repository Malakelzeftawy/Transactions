import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Bar, Line } from "react-chartjs-2";




export default function TransactionsGraph(){

    const [graph , setGraph] = useState(null)

    async function getgraph(){
        const option = {
          method : "GET",
          url : "http://localhost:3001/graph"
        }
        let {data} = await axios.request(option);
        console.log(data)
        setGraph(data)
      }

      useEffect(()=>{
        getgraph()
      },[])
    return (<>

    {graph == null ? <Loading/> : 
    <section className="bg-black py-8">
      <div className="flex justify-center items-center flex-col border-b-2">
        <h1  className="text-white text-xl font-bold mb-10 ">Customers-Transactions-Graph</h1>
      <div className=" w-full md:w-2/3 mb-20">
       <Line  
        data={{
            labels : graph.map((gra) => gra.name),
            datasets : [
                {
                    label : "amount" , 
                    data : graph.map((gra) => gra.total),
                    backgroundColor : ["pink"],
                    borderColor : ["white"],
                    fill : true,
                    tension : 0.4,
                    showLine : true
                    
                }
            ]
            
        }}
        options={{ 
            plugins : {},
            
            scales : {
                y : {
                    beginAtZero : true
                }, 
                              

            } 
        
        }}
        />
       </div>
      </div>
      
        <div className="grid grid-cols-12 gap-8 mt-16">
            <div className="col-span-12 text-center text-xl font-bold text-white">Transaction Graph for each customer</div>
           {graph.map((gra)=> <div className="col-span-6 " key={gra.id}>
            <Bar
            data={{
                labels : [gra.transactions[0].date1 , gra.transactions[1].date2] ,
                datasets : [
                    {
                        label : "amount" ,
                        data : [gra.transactions[0].amount1 , gra.transactions[1].amount2] ,
                        backgroundColor : ["pink" , "white"],
                        borderRadius : 5
                    }
                ]
            }}
            />
            <p className="text-center text-xl font-bold text-white">{gra.name}</p>
           </div>)}
        </div>
    </section>
    }
    
    
    </>)
}