import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { store } from "./store";
import {
  addNumber,
  divideNumber,
  multiplyNumber,
  subtractNumber,
} from "./store/calculator/calculator";

const Calculator = () => {
  const result = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch();
  const state = store.getState();
  console.log(state);

  const addHandler = () => {
    dispatch(addNumber(5));
  };
  const divideHandler = () => {
    dispatch(divideNumber(4));
  };
  const subtractHandler = () => {
    dispatch(subtractNumber(10));
  };
  const multiplyHandler = () => {
    dispatch(multiplyNumber(2));
  };

  return (
    <MainCounter>
      <h1>Redux Calculater</h1>
      <DivValue>Result: {result}</DivValue>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </MainCounter>
  );
};

export default Calculator;

const MainCounter = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }
`;

const DivValue = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`;
