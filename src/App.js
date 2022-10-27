import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import ToggleButton from "./components/ToggleButton";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode is Enable Successfully.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode is Enable Successfully.", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Nitish"
        about="AboutText"
        toggleMode={toggleMode}
        mode={mode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about"> */}
        <ToggleButton mode={mode}/>
        {/* </Route> */}
        {/* <Route path="/"> */}
        <TextForm  mode={mode} />
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
