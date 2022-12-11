import _ from "lodash";

// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {
  for (let i = 0; i < 10_000_000; i++) {
    _.chunk(["a", "b", "c", "d"], 2);
  }

  postMessage("Worker done work!");
});

export default null as any;
