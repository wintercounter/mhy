export default class MhyWatchPlugin {
    apply(jestHooks) {
        jestHooks.onFileChange(() => {
            console.log('mhy:ui:clear')
            console.log('Preparing tests...')
        })
    }
}
