import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Random String Generator</title>
                    <script src="../components/script.js"></script>
        </head>
        <body>
        <h1>Random String Generator</h1>
        <button id="generateBtn">Generate Random String</button>
        <input type="text" id="randomString" readonly>
        </body>
    </main>
  );
}
