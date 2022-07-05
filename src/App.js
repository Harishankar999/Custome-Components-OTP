import "./App.css";
import Pin from "./Components/Pin";
import { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <Pin length={4} setOtpHandler={(value) => setOtp(value)} />
      <h4>The OTP IS {otp}</h4>
    </div>
  );
}

export default App;
