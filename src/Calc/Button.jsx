import { useEffect } from "react";
const Btns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Oper = ["0","+", "-", "*", "/", "="];
export default function Button({
  input,
  handleInput,
  setHistory,
  setOutPut,
  outPut,
  history,
}) {
  const handleBtnClick = (number) => {
    if (number !== "=") {
      let tempStr = input.concat(number);
      handleInput(tempStr);
    }

    if (number === "=") {
      setOutPut(eval(input));
    }
  };

  useEffect(() => {
    setHistory([
      ...history,
      {
        id: history.length,
        date: new Date(),
        problem: input,
        output: outPut,
      },
    ]);
  }, [outPut]);
  return (
    <>
      <div>
        {(Btns || []).map((item) => {
          return (
            <button className="keyBtns" onClick={() => handleBtnClick(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        {(Oper || []).map((item) => {
          return (
            <button className="OperBtns" onClick={() => handleBtnClick(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
