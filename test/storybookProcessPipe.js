const { spawn } = require('child_process')

const p = spawn('node', [
    'C:\\Work\\Repos\\mhy\\node_modules\\@storybook\\react\\bin\\index.js',
    '--port',
    9000,
    '--host',
    'localhost',
    '--config-dir',
    'C:\\Work\\Repos\\mhy\\dist\\config\\storybook\\.storybook'
], {
    shell: true,
    stdio: 'pipe'
})

p.stdout && p.stdout.on('data', cb)
p.stderr && p.stderr.on('error', cb)

if (process.env.MHY_ENV === 'cli') {
    p.on && p.on('data', cb)
    p.on && p.on('error', cb)
}

function cb(line) {
    console.log(line.toString('utf8').trim())
}