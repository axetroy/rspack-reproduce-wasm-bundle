import { sha1 } from '@axetroy/wasm-hasher-sha1'

console.log(sha1)

import('./render').then(exports => {
    exports.render()
})
