import path from 'path'
import { applyEntries } from './'

describe('applyEntries', () => {
    it('should load core root processes', () => {
        const entries = {}
        const globPath = path.join(
            __dirname,
            '..',
            'process',
            'ecosystem',
            'root'
        )
        applyEntries(entries, globPath, '**/*.js')
        expect(entries).toHaveProperty('config')
    })
})
