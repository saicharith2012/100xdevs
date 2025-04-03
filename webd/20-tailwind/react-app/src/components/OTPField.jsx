import { useEffect, useRef, React } from "react";

export default function OTPField({ setDisabled, number }) {
  const ref = useRef(Array(number).fill(0));

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  return (
    <div className="flex gap-2 mb-2">
      {Array(number)
        .fill(1)
        .map((_, index) => {
          return (
            <SubOTPbox
              key={index}
              reference={(e) => (ref.current[index] = e)}
              onChange={(e) => {
                if (isNaN(e.target.value)) {
                  e.target.value = "";
                } else if (index !== number - 1) {
                  ref.current[index + 1].focus();
                } else if (index === number - 1) {
                  e.target.value = e.target.value[0];
                  setDisabled(false);
                }
              }}
              goBack={() => {
                if (ref.current[index].value !== "" || index === 0) {
                  ref.current[index].value = "";
                  setDisabled(true);
                } else {
                  ref.current[index - 1].focus();
                  ref.current[index - 1].value = "";
                }
              }}
            />
          );
        })}
    </div>
  );
}

const SubOTPbox = ({ reference, onChange, goBack }) => {
  return (
    <input
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          goBack();
        }
      }}
      ref={reference}
      type="text"
      className="w-[40px] h-[50px] px-2.5 bg-cblue-400/70 rounded-2xl border-gray-100/10 border-1 focus:outline-0 text-white text-center text-xl"
    ></input>
  );
};
