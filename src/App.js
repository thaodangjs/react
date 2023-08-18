import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const data = await res.json();
    setAdvice(data.joke);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
