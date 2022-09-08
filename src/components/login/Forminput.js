import React, { useState } from "react";
import { Forminputs, Forminputing} from "./Login.styled";

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (e) => {
    setFocused(true);
  };

  console.log(focused)
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
