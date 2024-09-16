import React from "react";
import { useFormStatus } from "react-dom";
interface btn{
  name:string
}

const AuthButton = ({name}:btn) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? "bg-gray-500" : "bg-orange-500"
      } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
    >
      {pending ? "Loading..." : name}
    </button>
  );
};

export default AuthButton;
