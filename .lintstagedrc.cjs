const path = require('path')

const relativePaths = (paths) =>
  paths
    // FIXME Bug with fast-glob from prettier: Explicitly specified file was ignored due to negative glob patterns: "app\api\auth\[...nextauth]\route.ts".
    .filter((it) => !it.includes('['))
    .map((it) => path.relative(process.cwd(), it))
    .map((it) => `"${it}"`)

module.exports = {
  '*.{js,cjs,mjs,jsx,ts,tsx}': (filenames) => {
    const paths = relativePaths(filenames).join(` --file `)
    return `next lint --fix --file ${paths}`
  },
  '*': (filenames) => {
    const paths = relativePaths(filenames).join(' ')
    return `prettier -w -u --cache ${paths}`
  },
}
