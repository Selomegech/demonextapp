"use client";
import React, { useState, useEffect } from "react";
import Verify from "../UI/Verify";
import { useRouter } from 'next/router';

const Page = () => {
  const [signupCode, setSignupCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const storedEmail = localStorage.getItem("signupEmail");
    if (storedEmail) {
      console.log(storedEmail);
      setEmail(storedEmail);
    }
  }, []);

  const handleVerify = async (code: string) => {
    try {
      console.log(email, code, "verificaiton data");
      const response = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp: code }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        console.log(signupCode);
        alert("signedup successfully");
        console.log(data.message);
        setIsVerified(true);
        setSignupCode("");
        return data;
      } else {
        const data = await response.json();
        console.log(data, "data from error");
        console.log(data.message);
        setSignupCode("");
        return null;
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setSignupCode("");
      return null;
    }
  };
  const [verificationData, setVerificationData] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const router = useRouter();
 

  return (
    <div className="flex items-center justify-center h-screen">
      {!isVerified && (
        <Verify
          onVerify={handleVerify}
          setSignupCode={setSignupCode}
          verificationData={verificationData}
        />
      )}
      {isVerified && (
        router.push('/page')
      )}
    </div>
  );
};

export default Page;
