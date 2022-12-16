import SignUp from "./Components/SignUp";
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
  
    
        <Router>
          <AuthProvider>
            <Routes>
            <Route element={<PrivateRoute/>}>
                  <Route exact path="/" element= {<Dashboard/>}/>
                </Route>
              <Route path="/signup" element= {<SignUp/>}/>
              <Route path="/login" element = {<Login/>} />

            </Routes>
          </AuthProvider>
        </Router>
      
  
    
  )
}

export default App;
