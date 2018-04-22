import React from "react";


export default file => {
  switch (file.tag) {
    case "INFJ": {
      return (
          <div>
       <p>INTROVERT INTUITIVE FEELING JUDGE </p>
       <p>DOCTOR</p>
       </div>
      );
    }
    case "INTP": {
      return (
          <div>
        <p>INTROVERT THINKING PART  </p>
        <p>DOCTOR</p>
        </div>
      );
    }
  
    default: {
      return (
        <p>  </p>
      );
    }
  }
};
