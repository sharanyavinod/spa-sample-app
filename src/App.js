import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { normalize } from 'path';

import AEMPage from './components/AEMPage';
import AEMLeaf from './components/AEMLeaf';
import VirtualPage from './components/VirtualPage';

//to be moved out of app
const toAEMPath = (path) => {
    const isLoadedInAEM = window.location.origin === process.env.REACT_APP_AEM_HOST;

    if(isLoadedInAEM) {
        const wcmMode = document.head.querySelector('meta[property="cq:wcmmode"]')?.getAttribute('content');
        const isEditorMode = wcmMode === "edit";
        const editorPrefix = isEditorMode ? '(/editor.html)?' : '';

        const aemPathPrefix = `/content/${process.env.REACT_APP_AEM_PROJECT_NAME}`;
        const EXTENSION = 'html';

        const newPath = normalize(`${editorPrefix}${aemPathPrefix}${path}(.${EXTENSION})?`);
        return newPath;
    }
    return path;
};

const App = () => {
    return (
      <div className="App">
        <nav>
            <ul className="app-nav">
              <li>
                <Link to="/leaf">Leaf</Link>
              </li>
              <li>
                <Link to="/virtual">Virtual</Link>
              </li>
              <li>
                <Link to="/page">Page</Link>
              </li>
            </ul>
            </nav>
        <hr />

        <Switch>
          <Route path={toAEMPath("/leaf")}>
            <AEMLeaf />
          </Route>
          <Route path={toAEMPath("/virtual")}>
           <VirtualPage />
         </Route>
         <Route path={toAEMPath("/page")}>
           <AEMPage />
         </Route>
        </Switch>
    </div>
);
}
export default App;
