import React, { useState } from "react";
interface VerifyProps {
  onVerify: (code: string) => Promise<{ success: boolean; message: string }>;
  setSignupCode: (newSignupCode: string) => void;
  verificationData: { success: boolean; message: string } | null;
}
const Verify: React.FC<VerifyProps> = ({
  setSignupCode,
  onVerify,
  verificationData,
}) => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

  const [remainingTime, setRemainingTime] = useState(30);
  let timer: ReturnType<typeof setInterval> | null = null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCodeNumber = verificationCode.join("");

    setSignupCode(verificationCodeNumber);
    console.log(verificationCodeNumber, "typed code");
    console.log(verificationData?.success);
    onVerify(verificationCodeNumber);
    {
      verificationData?.success && (
        <div>
          <p>{verificationData.message}</p>
        </div>
      );
    }
    {
      verificationData?.success === false && (
        <div>
          <p>{verificationData.message}</p>
        </div>
      );
    }
  };

  const handleResendCode = () => {
    setRemainingTime(30);
  };

  const handleCodeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

  React.useEffect(() => {
    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [remainingTime]);

  return (
    <div className="flex items-center justify-center h-[20vh]">
      <div className="flex-col items-center justify-center w-[50%] ">
        <form onSubmit={handleVerify}>
          <div className="flex justify-center my-4">
            <h1 className="font-bold text-4xl text-gray-700">Verify Email!</h1>
          </div>
          <div className="flex space-x-4 justify-between my-10">
            <p className="text-gray-500">
              We've sent a verification code to the email address you provided.
              To complete the verification process, please enter the code here.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {verificationCode.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="0"
                  className="w-12 h-12 text-center text-2xl border-indigo-500 rounded bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={code || ""}
                  onChange={(e) => handleCodeInput(e, index)}
                />
              ))}
            </div>
          </div>
          <div className="my-8 flex items-center justify-center space-x-2">
            <p className="text-gray-500">
              You can request to{" "}
              <span
                className="text-indigo-700 cursor-pointer"
                onClick={handleResendCode}
              >
                Resend code
              </span>{" "}
              in{" "}
              <span className="text-indigo-700">{remainingTime} second(s)</span>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
