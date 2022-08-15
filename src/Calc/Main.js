import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import Card from "./Card";
export default function Main() {
  const [input, setInput] = useState("");
  const [outPut, setOutPut] = useState("");
  const [history, setHistory] = useState([]);
  console.log(history);
  return (
    <>
      <div className="container my-5">
        <div className="card calcCard">
          <div className="card-body">
            <div className="row">
              <div className="col-6 leftPart">
                <Display input={input} handleInput={setInput} />
                <Button
                  input={input}
                  handleInput={setInput}
                  setOutPut={setOutPut}
                  setHistory={setHistory}
                  outPut={outPut}
                  history={history}
                />
              </div>
              <div className="col-6 rightPart">
                <Card
                  outPut={outPut}
                  history={history}
                  setHistory={setHistory}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
