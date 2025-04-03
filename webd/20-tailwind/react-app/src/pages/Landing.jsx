import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";

export default function Landing() {
  const inputRef = useRef();

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="page">
      <Heading />
      <h2 className="sec-heading">Let's Get Started</h2>

      <Input
        onChange={(e) => {String(e.target.value).match(regex) ? setDisabled(false) : setDisabled(true)}}
        ref={inputRef}
        placeholder={"Email Id"}
        type={"text"}
      ></Input>

      <Button disabled={disabled}>Continue</Button>
    </div>
  );
}
