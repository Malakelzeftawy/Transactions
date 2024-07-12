import CustomerTable from "./components/CustomerTable/CustomerTable"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home/Home"
import TransactionsGraph from "./components/TransactionsGraph/TransactionsGraph"
import Transactions from "./components/Transactions/Transactions"
import { Chart as ChartJS } from "chart.js/auto"

function App() {

  
const routes = createBrowserRouter([
  {path : "/" , element : <Layout/> , children :[
    {index : true , element : <Home/>},
    {path : "/customers" , element : <CustomerTable/>},
    {path : "/transactions" , element : <Transactions/>},
    {path : "/graphs" , element : <TransactionsGraph/>}
  ]}
])
  return (
    <>

    <RouterProvider router={routes} ></RouterProvider>
    </>
  )
}

export default App




