import './Dashboard.css';
import './LoginUi.css';
import { useNavigate } from "react-router-dom";

    
function Dashboard() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      
        //Prevent page reload
        event.preventDefault();
        navigate("/");
    };
  return (
    <body>
        <div> 
       
           
       <div class="centered">  <h1 class="header">Welcome To The Dashboard .You have Logged in successfully! </h1> <div className="app new">
    <div className="login-form">
      <div className="title">Accounting Application</div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Enter Salary </label>
          <input type="text" name="uname"  />
         
        </div>
        <div className="input-container">
          <label>Daily Expenses </label>
          <input type="password" name="pass"  />
          
        </div>
        <div className="input-container">
          <label>Monthly Expenses </label>
          <input type="password" name="pass"  />
          
        </div>
        <div className="input-container">
          <label>Yearly Expenses</label>
          <input type="password" name="pass"  />
          
        </div>
        <div className="input-container">
          <label>Total</label>
          <input type="password" name="pass"  />
          
        </div>
        <div className="input-container">
          <label>Remaining</label>
          <input type="password" name="pass"  />
          
        </div>
        <div className="input-container">
          <label>Savings</label>
          <input type="password" name="pass"  />
          
        </div>
        <button class="button1" type="button" Value="<-- Logout">Submit</button><br/>
        <div className="button-container">
        
          <input type="submit" Value=" Logout"/>
        </div>
      </form>
    </div>
    </div>
    </div>

    
</div>
       
        </div>
        </body>

    
  );
}

export default Dashboard;