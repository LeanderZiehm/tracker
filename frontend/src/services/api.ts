const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
console.log(API_URL);


export async function fetchTexts() {
  const response = await fetch(`${API_URL}/getTexts/`);
  if (!response.ok) throw new Error("fetch texts failed");
  return response.json();
}

export async function insertText(text: string) {
  const response = await fetch(`${API_URL}/insertText`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ text }), 
  });

  if (!response.ok) throw new Error("post fetch texts failed");
  return response.json();
}

// curl -X 'POST' \
//   'https://api.tracker.leanderziehm.com/insertText' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "text": "string"
// }'




// export async function depreciated_insertText_via_get(text:string) {
//   const response = await fetch(`${API_URL}/insertText/${text}`);
//   if (!response.ok) throw new Error("fetch texts failed");
//   return response.json();
// }
