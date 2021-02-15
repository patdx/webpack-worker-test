// https://github.com/GoogleChromeLabs/worker-plugin/blob/master/src/loader.js
// https://github.com/webpack/webpack/blob/923be31fba88468b70499428e1f2b83aad49af84/lib/dependencies/WorkerPlugin.js

import Bree from "bree";
import { Worker } from "worker_threads";

import("./shared").then((m) => m.hello());

const createWorker = () => new Worker(new URL("./worker", import.meta.url));

const bree = new Bree({
  root: false,
  jobs: [
    {
      name: "my-worker",
      factory: createWorker,
      interval: "5 seconds",
    },
  ],
});

new Promise((resolve) => {
  setTimeout(() => {}, 20000000);
});

bree.start();
