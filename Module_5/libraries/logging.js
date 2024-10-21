class Logging {
  log(message) {
    console.log(`[log:] ${message}`);
  }
}

module.exports = new Logging();
