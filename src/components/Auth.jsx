import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "./store/auth/authReducer";
import styled from "styled-components";

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });

  const inputchangeHandler = (name) => {
    return (e) => {
      setState((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
  };

  const inputchangeHandlerPassword = (password) => {
    return (e) => {
      setState((prevState) => ({ ...prevState, [password]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email.includes("@") && formState.password === "123") {
      dispatch(logIn(formState.email));
      setState({
        email: "",
        password: "",
      });
    }
  };
  return (
    <MainAuth>
      <section>
        <form onSubmit={submitHandler}>
          <DivControl>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputchangeHandler("email")}
              value={formState.email}
            />
          </DivControl>
          <DivControl>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputchangeHandlerPassword("password")}
              value={formState.password}
            />
          </DivControl>
          <button>Login</button>
        </form>
      </section>
    </MainAuth>
  );
};

export default Auth;

const MainAuth = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

const DivControl = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`;
