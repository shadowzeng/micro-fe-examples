import {registerMicroApps, setDefaultMountApp, start} from 'qiankun';
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <header></header>
      <div className="main-app-content">
        <div id="sub-app-container"></div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

registerMicroApps([
  {
    name: 'app-angular', // app name registered
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app-angular',
  },
  {
    name: 'app-react',
    entry: '//localhost:9000/subapp/react',
    container: '#container',
    activeRule: '/app-react',
  },
]);

setDefaultMountApp("app-react");
start();