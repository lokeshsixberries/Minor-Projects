export default function Card({ outPut, history, setHistory }) {
  const deleteCard = (index) => {
    if(index>-1){
        setHistory((history || []).filter(item => item.id!== index))
    }
    else{
        setHistory([])
    }
    console.log(index);
  };
  return (
    <>
      <div className="card-container">
        {(history || []).map((item, index) => {
          return (
            <>
              {item.output && (
                <>
                  <div className="row">
                    <div className="col-10">
                      <div className="card outPutCard my-1">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-1">{index}</div>
                            <div className="col-4">{`${item.date.getDate()}/${item.date.getMonth()}/${item.date.getYear()}`}</div>
                            <div className="col-7">{item.output}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-danger my-1 clearBtn"
                        onClick={() => deleteCard(index)}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
