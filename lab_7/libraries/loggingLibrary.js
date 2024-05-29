class Logging {
    log(log) {
        let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        console.log(`[Calculator: ${id}]: ${log}`)
    }
}

module.exports = Logging