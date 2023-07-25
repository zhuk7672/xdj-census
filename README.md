This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


<!-- // links.map((v, i) => {
//   // return <NavLink key={i} to={v.to+`/${v.name}/${'abc'}`}>{v.name}</NavLink> //使用params方法传递参数
//   // return <NavLink key={i} to={v.to+`?name=${v.name}&abc=abc`}>{v.name}</NavLink> //使用search方法传递参数
//   // return <NavLink key={i} to={{pathname:v.to,state:{name:v.name,abc:'abc'}}}>{v.name}</NavLink> //使用state方法传递参数
// })

// const {name,abc} = this.props.match.params
// const {name,abc} = this.props.location.state
// const {name,abc} = qs.parse(this.props.location.search.slice(1)) //需要使用字符串方法slice(1)去掉search参数中的首字母? 

{/* <Route path="/home/:name/:abc" component={Home}></Route>    */}
{/* <Route path="/about" component={About}></Route> */}
{/* <Route path="/home" component={Home}></Route> */}
{/* <Redirect to="/about"></Redirect> */} -->

<!-- 
export default connect(
  state => ({sum:state.countSum}), //映射状态 
  // state => ({sum:state.countSum,abc:state.xxx}), //映射多个reducer状态  
  {
    // createCountSumFun:createCountSumFun,
    createCountSumFun,
    createCountDecrementFun,
    createCountAsynSumFun
  }  //映射操作状态的方法
)(About) -->