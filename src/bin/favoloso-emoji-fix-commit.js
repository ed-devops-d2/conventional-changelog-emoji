#!/usr/bin/env node
const fs = require("fs");
const fixCommitMessage = require("../lint/fix-commit-message");

try {
  const message = fixCommitMessage(
    fs.readFileSync(process.env.HUSKY_GIT_PARAMS, "utf8")
  );

  if (message != null) {
    fs.writeFileSync(process.env.HUSKY_GIT_PARAMS, message, {
      encoding: "utf8"
    });
  }

  process.exit(0);
} catch (err) {
  process.stderr.write(err);
  process.exit(1);
}