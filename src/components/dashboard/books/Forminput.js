import React, { useState } from "react";
import { Forminputs, Forminputing } from "./Books.styled";

const Forminput = (props) => {
  const [setFocused] = useState(false);

  const handleFocused = (e) => {
    setFocused(true);
  };
  const { onChange, errorMessage, id, ...inputProps } = props;

  return (
    <Forminputs>
      <Forminputing
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
      />
    </Forminputs>
  );
};

export default Forminput;
