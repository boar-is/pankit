const path = require('path')

const relativePaths = (paths) =>
  paths.map((it) => path.relative(process.cwd(), it))

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const paths = relativePaths(filenames).join(` --file `)
    return `next lint --fix --file ${paths}`
  },
  '*': (filenames) => {
    const paths = relativePaths(filenames).join(' ')
    return `prettier -w -u --cache ${paths}`
  },
}
