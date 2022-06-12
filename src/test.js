import axios from "axios";

async function gigi() {
  const res = await axios.get(
    "https://run.mocky.io/v3/2a7a1ac1-e7b8-456f-82f9-b23dcf653b93"
  );

  return res;
}

console.log("prima");

gigi();

console.log("dopo");
