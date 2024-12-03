import fs from "node:fs";
import { parse } from "csv-parse";

const csvPath = new URL("./tasks.csv", import.meta.url);
const stream = fs.createReadStream(csvPath);
const csvParse = parse({
  delimiter: ",",
  skipEmptyLines: true,
  fromLine: 2,
});

(async () => {
  const lines = stream.pipe(csvParse);
  for await (const line of lines) {
    const [title, description] = line.toString().split(",");
    addTask({ title, description });
  }
})();

function addTask({ title, description }) {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });
}
