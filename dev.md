
# install dev dependencies
npm  install --save-dev react react-dom
# making sure your user has the core package
    add peerDependencies in package.json
# seeing the thing you're building
    using storyBook :: https://storybook.js.org/
    npx sb init
    npm run storybook
    write your code
building to a dist folder and publish to npm
    rollup.js  ///webpack
    npm install rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external   --save-dev
    npm install --save-dev @babel/preset-react
    set up
    add command in package.json file for roolup
npm install --save-dev rollup-plugin-postcss

publish your lib to npm
npm login 
npm publish

# 1. jquery
# 2. datatables.net-dt
# 3. datatables.net-responsive-dt
# 4. datatables.net-buttons
# 5. datatables.net-bs5
npm install --save-dev jquery datatables.net-dt datatables.net-responsive-dt datatables.net-buttons datatables.net-bs5





