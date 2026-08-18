import { spawn } from "node:child_process";

const env = {
  ...process.env,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000",
};

const children = [];
let shuttingDown = false;

function start(command, args, name) {
  const child = spawn(command, args, {
    env,
    stdio: "inherit",
    shell: true,
  });

  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }
    shuttingDown = true;
    for (const other of children) {
      if (other !== child && !other.killed) {
        other.kill();
      }
    }
    process.exit(code ?? (signal ? 1 : 0));
  });

  children.push(child);
  console.log(`[hazel] started ${name}`);
}

start("npm", ["run", "start:api"], "fastapi");
start("npm", ["run", "start:frontend"], "nextjs");

const stop = () => {
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exit(0);
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
