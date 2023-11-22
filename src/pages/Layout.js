import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div> 
       
       <nav class="navbar background"> 
           <ul class="nav-list"> 
               <div class="logo"> 
               <img src= 
"https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-accounting-icon-in-trendy-style-isolated-background-png-image_1539809.jpg" /> 
<h1>&nbsp;Accounting Application</h1>
               </div> 
               
               <li><h2> </h2></li>
               <li><h2><Link to="/">Home</Link></h2></li> 
               <li><h2> <Link to="/Login">Login</Link></h2></li>
               <li><h2><Link to="/About">About</Link></h2></li>
           </ul> 

         
       </nav> 
       </div>
      

      <Outlet />
    </>
  )
};

export default Layout;