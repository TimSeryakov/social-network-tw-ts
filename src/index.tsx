import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./Render";
import {state} from "./redux/state";


rerenderEntireTree(state)

serviceWorker.unregister();
