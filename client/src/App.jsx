import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Customer from "./components/Customer/Customer";
import Goldsmith from "./components/Goldsmith/Goldsmith";
import Billing from "./components/Billing/Billing";
import Report from "./components/Report/Report";
import Stock from "./components/Stock/Stock";
import Navbar from "./components/Navbar/Navbar";
import Master from "./components/Master/Master";
import MasterCustomer from "./components/Master/Mastercustomer";
import Customertrans from "./components/Customer/Customertrans";
import AddCustomer from "./components/Billing/Addcustomer";
import CustomerReport from "./components/Report/customer.report";
import Overallreport from "./components/Report/overallreport";
import GoldsmithDetails from "./components/Goldsmith/GoldsmithDetails";
import Jobcarddd from "./components/Goldsmith/Jobcarddd";
import JobcardddReport from "./components/Report/jobcardddReport";
import ReceiptReport from "./components/Report/receiptreport";
import Receipt from "./components/ReceiptVoucher/receiptvoucher";
import Customerorders from "./components/Customer/Customerorders";
import Orderreport from "./components/Report/orderreport";
import SrJobCard from "./components/Goldsmith/SrJobCard";
import JobCardReport from "./components/Report/SrJobCardReport";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}

        {/* Protected routes for regular users */}
        <Route
          path="/customer"
          element={
              <PageWithNavbar>
                <Customer />
              </PageWithNavbar>   
          }
        />
        <Route
          path="/goldsmith"
          element={
              <PageWithNavbar>
                <Goldsmith />
              </PageWithNavbar>       
          }
        />
        <Route
          path="/bill"
          element={
              <PageWithNavbar>
                <Billing />
              </PageWithNavbar>
          }
        />
        <Route
          path="/report"
          element={
              <PageWithNavbar>
                <Report />
              </PageWithNavbar>        
          }
        />
        <Route
          path="/customerreport"
          element={
              <PageWithNavbar>
                <CustomerReport />
              </PageWithNavbar>          
          }
        />
        <Route
          path="/overallreport"
          element={
              <PageWithNavbar>
                <Overallreport />
              </PageWithNavbar>      
          }
        />
        <Route
          path="/orderreport"
          element={
              <PageWithNavbar>
                <Orderreport />
              </PageWithNavbar>      
          }
        />
        <Route
          path="/receiptreport"
          element={
              <PageWithNavbar>
                <ReceiptReport />
              </PageWithNavbar>        
          }
        />
        <Route
          path="/receiptvoucher"
          element={
              <PageWithNavbar>
                <Receipt />
              </PageWithNavbar>      
          }
        />
        <Route
          path="/stock"
          element={
              <PageWithNavbar>
                <Stock />
              </PageWithNavbar>  
          }
        />
        <Route
          path="/customertrans"
          element={
              <PageWithNavbar>
                <Customertrans />
              </PageWithNavbar>  
          }
        />
        <Route
          path="/customerorders"
          element={
              <PageWithNavbar>
                <Customerorders />
              </PageWithNavbar>   
          }
        />
        <Route
          path="/jobCardReport"
          element={
              <PageWithNavbar>
                <JobCardReport />
              </PageWithNavbar>
          }
        />
        <Route
          path="/goldsmithdetails/:id/:name"
          element={
              <PageWithNavbar>
                <GoldsmithDetails />
              </PageWithNavbar>
          }
        />
        <Route
          path="/jobcarddd"
          element={
              <PageWithNavbar>
                <Jobcarddd />
              </PageWithNavbar>  
          }
        />
        <Route
          path="/jobcardddReport"
          element={
              <PageWithNavbar>
                <JobcardddReport />
              </PageWithNavbar>          
          }
        />
        <Route
          path="/jobcard/:id/:goldsmithname"
          element={
              <PageWithNavbar>
                <SrJobCard/>
              </PageWithNavbar>            
          }
        />
        <Route
          path="/addcustomer"
          element={
              <AddCustomer />            
          }
        />
        {/* Admin-only routes */}
        <Route 
          path="/master" 
          element={
              <Master />            
          } 
        />
        <Route 
          path="/mastercustomer" 
          element={
              <MasterCustomer />            
          } 
        />
        
      </Routes>
    </BrowserRouter>
  );
}

function PageWithNavbar({ children }) {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/home"];
  if (hideNavbarPaths.includes(location.pathname)) {
    return children;
  }

  return (
    <>
      <div className="noPrint-nav">
        <Navbar />
      </div>
      <div style={{ paddingTop: '64px' }}>
        {children}
      </div>
    </>
  );
}

export default App;