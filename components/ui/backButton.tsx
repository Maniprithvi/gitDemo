"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { faLessThan, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/")}>
      <FontAwesomeIcon icon={faLessThan} /> back to home page
    </button>
  );
};

export default BackButton;
