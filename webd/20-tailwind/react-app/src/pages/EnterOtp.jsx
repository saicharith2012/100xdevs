import Heading from "../components/Heading";
import Button from "../components/Button";
import OTPField from "../components/OTPField";
import { useState } from "react";

export default function EnterOtp() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="page">
      <Heading />
      <h2 className="sec-heading">Check Your Email For A Code</h2>
      <p className="text-white/60 mb-5">
        Please enter the verification code sent to your email id
        <span className="text-white"> saicharithp@gmail.com</span>
      </p>

      <OTPField setDisabled={setDisabled} number={6} />

      <div className="flex items-center">
        <img src="time.png" className="w-4 h-4 opacity-60 mr-2"></img>
        <span className="text-white/60 text-sm">09:32</span>
      </div>

      <Button disabled={disabled} >
        Signup
      </Button>
      <p className="text-white/60">
        Can't find the email? Click <a className="underline text-white">here</a>{" "}
        to resend.
      </p>
    </div>
  );
}
