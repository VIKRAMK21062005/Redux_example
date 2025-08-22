# Redux Basics

## What is Redux?

👉 **Redux** is a state management library for JavaScript applications.  
It helps manage and share data (state) across multiple components in a predictable and centralized way.

---

## 🔹 Why Do We Need Redux?

Normally in React:

- Each component has its own state (`useState`).
- To share data, we pass props down (this is called **prop drilling**).

This becomes messy in large apps because:

- Many components need the same data (like logged-in user, cart, theme).
- Passing props through 5–6 levels is painful.
- Hard to debug when state is spread everywhere.

👉 **Redux solves this problem by:**

- Having **one central store** (like a database for your app’s state).
- Components can **read (`useSelector`)** and **update (`useDispatch`)** state directly, without messy props.
- Every state change is **predictable and traceable**.

---

## 🔹 Core Concepts of Redux

### Store 🏦
- Central place where the state lives.  
- Like a "locker" for your app’s data.

### Action 📩
- A plain object that describes what happened.  
- Example:  
  ```js
  { type: "WITHDRAW_MONEY", payload: 500 }
  ```

### Reducer 🔄
- A pure function that decides how the state changes based on the action.  
- Example:  
  ```js
  function bankReducer(state, action) {
    if (action.type === "WITHDRAW_MONEY") {
      return state - action.payload;
    }
    return state;
  }
  ```

### Dispatch 📢
- A function to send actions to the reducer.  
- Example:  
  ```js
  dispatch({ type: "WITHDRAW_MONEY", payload: 500 })
  ```

### useSelector 👀
- React hook to read data from the store.

### useDispatch 🚀
- React hook to send actions to update the store.

---

## 🔹 Real-Life Analogy (Bank Example 💰)

- **Store** = Locker (your money is inside).  
- **Reducer** = Bank Rules (how deposit/withdraw happens).  
- **Action** = Slip (deposit slip / withdrawal slip).  
- **Payload** = Amount (e.g., ₹500).  
- **Dispatch** = Giving slip to cashier.  
- **useSelector** = Checking balance on screen.  
