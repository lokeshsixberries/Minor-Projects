import { useEffect } from "react";
import { useState } from "react";
import size from "./data";
import "./table.css";
export default function Table() {
  const [colorArr, setColorArray] = useState([]);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [time, setTime] = useState(true);
  const [BoxCount, setBoxCount] = useState(size);
  const [turn, setTurn] = useState(3);
  const [level, setLevel] = useState(1);

  const sameColorBox = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setPrimaryColor(color);
  };

  const differentBox = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setSecondaryColor(color);
  };

  const setColor = () => {
    let firstBox = Math.floor(Math.random() * 20) + 1;
    let secondBox = Math.floor(Math.random() * 20) + 1;
    if (firstBox === secondBox) {
      setColor();
    } else {
      setColorArray([firstBox, secondBox]);
    }
    sameColorBox();
    differentBox();

    setTimeout(() => {
      setTime(false);
    }, 200);
  };

  useEffect(() => {
    if (primaryColor === secondaryColor) {
      sameColorBox();
      differentBox();
    }
  }, [primaryColor, secondaryColor]);

  const setBox = (box) => {
    setBoxCount((current) =>
      current.map((obj) => {
        if (obj.value === box.value) {
          return { ...obj, selected: !obj.selected };
        }
        return obj;
      })
    );
  };

  const resetAll = () => {
    setTime(true);
    setBoxCount((current) =>
      current.map((obj) => {
        if (obj.value) {
          return { ...obj, selected: false };
        }
        return obj;
      })
    );
  };

  const submitAnswer = () => {
    const tempArray = [];
    const selectedBox = BoxCount.filter((item) => item.selected);
    (selectedBox || []).map((item) => {
      tempArray.push(item.value);
    });
    if (tempArray.every((item) => colorArr.includes(item))) {
      resetAll(true);
      setLevel(level + 1);
    } else {
      turn > 0
        ? setTurn(turn - 1)
        : window.confirm("You Lose,press Yes  to play Again")
        ? window.location.reload()
        : window.top.close();
    }
  };

  useEffect(() => {
    document.title = `Level ${level}`;
  }, [level]);

  return (
    <>
      <div className="main">
        <div className="tablediv">
          {BoxCount.map((item, index) => (
            <div
              className="table"
              style={
                time
                  ? primaryColor !== secondaryColor &&
                    colorArr.includes(item.value)
                    ? {
                        backgroundColor: secondaryColor,
                        border: "1px solid black",
                      }
                    : {
                        backgroundColor: primaryColor,
                        border: "1px solid black",
                      }
                  : item.selected
                  ? { backgroundColor: "black", border: "1px solid black" }
                  : { backgroundColor: "white", border: "1px solid black" }
              }
              onClick={() => !time && setBox(item)}
            ></div>
          ))}
        </div>

        <div className="btnStartContainer">
          <h1>No of Life : {turn}</h1>
          {time ? (
            <button className="btnStart" onClick={() => setColor()}>
              Start
            </button>
          ) : (
            <button className="btnStart" onClick={() => submitAnswer()}>
              Submit
            </button>
          )}

          <button className="btnStart" onClick={() => resetAll(true)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
