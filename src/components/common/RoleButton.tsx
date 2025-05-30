import React from "react";
import { RoleButtonProps } from "@/utils/interface/commonInterface";

const RoleButton: React.FC<RoleButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm md:text-lg/6 p-2 md:p-4 border-2 border-[var(--mainColor)] font-semibold rounded-md shadow-md hover:bg-[var(--mainColor)] hover:text-white cursor-pointer"
    >
      {children}
    </button>
  );
};

export default RoleButton;