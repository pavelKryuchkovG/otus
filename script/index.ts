import { createInterface } from "readline";

import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("Введите выражение: ", (answer: string) => {
      const result = runner(answer);

      if (result !== undefined) {
        // eslint-disable-next-line no-console
        console.log(`Результат: ${result}`);
      }

      resolve(null);
    });
  });

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
