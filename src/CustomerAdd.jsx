import React, { useState } from "react";
import { addCustomer } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addCustomerHandler = () => {
    if (input) {
      dispatch(addCustomer(input));
      setInput(""); // clear input
    }
  };

  return (
    <div>
      <h3>Add New Customer</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={handleChange}
      />
      <button onClick={addCustomerHandler} style={{padding:'3px',marginLeft:'5px'}}>Add</button>
    </div>
  );
};

export default CustomerAdd;
