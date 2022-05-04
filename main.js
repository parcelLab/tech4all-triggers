const sift = require('sift')
const _ = require('lodash')
const chalk = require('chalk')

const tracking = require(`./trackings/${process.argv[3]}.js`)

const triggerFileConfig = require(`./triggers/${process.argv[2]}.js`)

_.forEach(triggerFileConfig, (triggers, eventName) => {
    if (triggers.length === 0) return true
    console.log(`Testing ${chalk.red.bold(eventName)}`)

    _.forEach(triggers, (trigger, index) => {
        const filter = sift(trigger.Filter)

        const isPass = filter(tracking)
        const resultMessage = isPass ? chalk.green('Pass') : chalk.red('Fail')

        console.log(` ↪ ${chalk.yellow(index)} ${resultMessage} ${trigger.Message}`)
    })

    console.log('')
})
