import Success from "@/components/Success";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SuccessPage = () => {
  const router = useRouter();
  const makeRequest = async (x: any) => {
    "use server";
    try {
      await fetch(`http://localhost:3000/api/confirm/${x}`, {
        method: "PUT",
      });
      setTimeout(() => {
        router.push("/orders");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Success makeRequest={makeRequest} />
    </>
  );
};

export default SuccessPage;
