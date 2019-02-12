import rimraf from 'rimraf'

describe('babel compilation', async () => {
    let results
    const cwd = path.resolve(__dirname, 'sample')
    const dist = path.resolve(cwd, 'dist')

    beforeAll(async () => {
        rimraf.sync(dist)
        let { stdout: s } = await spawn(['bb', '--mhy-prod'], cwd)
        results = s
    })

    it('should generate output folder', () => {
        expect(fs.existsSync(dist)).toBeTruthy()
    })

    it('should generate output file', () => {
        expect(fs.existsSync(path.resolve(dist, 'index.js'))).toBeTruthy()
    })

    it('should match terminal output', () => {
        expect(results).toMatchSnapshot()
    })
})
