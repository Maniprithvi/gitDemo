"use client";

import React, { useState } from "react";
import CategorySelect from "./forms/categorySelect";
import Form1 from "./forms/form1";
import Form2 from "./forms/form2";
import Form3 from "./forms/form3";
import { UserFormContextProvider } from "@/app/actions/context/eventform";

interface Props {
  handleModal: () => void;
}
const EventForm = ({handleModal }: Props) => {
  const [step, setStep] = useState(1);

  const handleClose =()=>{
    handleModal()
  }
  const goToNextStep = () => {
    setStep((prevStep) => prevStep + 1); // Move to the next step
    console.log("Next step clicked"); // Debugging console log
  };

  const goToPrevStep = () => {
    setStep((prevStep) => prevStep - 1); // Move to the previous step
    console.log("Previous step clicked"); // Debugging console log
  };

  return (
    <div className="w-full">
      <UserFormContextProvider>
        {step == 1 && <CategorySelect setStep={goToNextStep} />}
        {step === 2 && (
          <Form1 setStep={goToNextStep} goToPrevStep={goToPrevStep} />
        )}
        {step === 3 && (
          <Form2 goToPrevStep={goToPrevStep} setStep={goToNextStep} />
        )}
        {step === 4 && <Form3 goToPrevStep={goToPrevStep} handleclose ={handleClose} />}
      </UserFormContextProvider>
    </div>
  );
};

export default EventForm;
