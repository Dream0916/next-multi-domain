import React from "react";

interface CustomContainerProps {
  children?: React.ReactNode;
}

export const CustomContainer = (props: CustomContainerProps) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full">{props.children}</div>
    </div>
  );
};
