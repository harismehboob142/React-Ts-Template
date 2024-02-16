import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: any;
  onKeyDown?: any;
}
const Form = ({ onKeyDown, onSubmit, children }: FormProps) => {
  return (
    <React.Fragment>
      <form onKeyDown={onKeyDown} onSubmit={onSubmit}>
        {children}
      </form>
    </React.Fragment>
  );
};
export default Form;
