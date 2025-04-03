import React, { useRef, useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/Input";

export default function VerifyAge() {
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef();

  useRef(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="page">
      <Heading />
      <h2 className="sec-heading">Verify Your Age</h2>
      <p className="text-white/60 mb-5">
        Please confirm your birth year. This data will not be stored.
      </p>
      <Input
        placeholder={"Your Birth Year"}
        type={"text"}
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value.length === 4) {
            setDisabled(false);
          } else if (e.target.value.length > 4) {
            e.target.value =
              e.target.value[0] +
              e.target.value[1] +
              e.target.value[2] +
              e.target.value[3];
          } else if (isNaN(e.target.value)) {
            e.target.value = "";
          } else {
            setDisabled(true);
          }
        }}
      ></Input>
      <Button disabled={disabled}>Continue</Button>
    </div>
  );
}
