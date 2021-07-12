const fs = require('fs')

const loadData = () => {
    const data = fs.readFileSync('data/users.json', 'utf-8')
    const buffer = JSON.parse(data)

    return buffer
}

module.exports = { loadData }