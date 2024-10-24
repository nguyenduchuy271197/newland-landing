import { cn } from "@/lib/utils";
import React from "react";

interface ContainerFluidProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerFluidProps> = ({
  children,
  className = "",
  fluid = false,
  ...props
}) => {
  const containerClass = fluid
    ? "w-full"
    : "w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-xl";

  return (
    <div className={cn(containerClass, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
