//@ts-nocheck
import { useEffect, useState,forceUpdate } from "react";
import { fetchTexts, insertText } from "../services/api";


export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [texts, setTexts] = useState([]); // TODO FIX THIS
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAndLoadTexts();
  }, []);

  function fetchAndLoadTexts() {
    fetchTexts()
      .then((result) => {
        console.log(result);
        setTexts(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false)); // maybe TODO make a vscode extension that looks for errors and suggests fixes for them automatically and asks for accept or not
  }

  async function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    if (typeof inputValue === "string") {
      setInputValue(""); 
      await insertText(inputValue);
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
      <div>
        {texts.map((t) => (
          // <div key={t.id} style={{block:"inline"}}><div style={{block:"inline"}}>{t.timestamp}</div><div style={{block:"inline"}}> {t.text} </div> </div>
          <li key={t.id}>{t.text} </li>
        ))}
      </div>
    </>
  );
}

