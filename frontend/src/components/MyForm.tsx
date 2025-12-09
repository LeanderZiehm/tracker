import { useEffect, useState,forceUpdate } from "react";
import { fetchTexts, insertText } from "../services/api";

function TodoComponent() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [texts, setTexts] = useState([]); // TODO FIX THIS
  const [error, setError] = useState(null);
  // const [rerenderPlease,setRerender] = useState(0);

  useEffect(() => {
    fetchAndLoadTexts();
  }, []);
  // rerenderPlease

  function fetchAndLoadTexts() {
    fetchTexts()
      .then((result) => {
        console.log(result);
        setTexts(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false)); // maybe TODO make a vscode extension that looks for errors and suggests fixes for them automatically and asks for accept or not
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (typeof inputValue === "string") {
      insertText(inputValue);
      setInputValue(""); // optional: clear input after submit
      // fetchAndLoadTexts();
      // setRerender(rerenderPlease+1);
      // this.forceUpdate()
      fetchAndLoadTexts();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={{width: "370px"}}
          name="inputText"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        {texts.map((t) => (
          <li id={t.id}><div>{t.timestamp}</div><div> {t.text} </div> </li>
        ))}
      </p>
      {/* <p>{JSON.stringify(texts)}</p> */}
    </>
  );
}

export default TodoComponent;
