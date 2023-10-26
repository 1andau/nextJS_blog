import { ReactNode } from "react";


interface ContainerProps {
    children: ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="w-full">{children}</div>;
  };
  
  export default Container;