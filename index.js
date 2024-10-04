import * as core from '@actions/core';

try {
  const timestamp = new Date().toISOString();
  console.log(`Current timestamp: ${timestamp}`);
  core.setOutput("timestamp", timestamp);
} catch (error) {
  core.setFailed(error.message);
}
