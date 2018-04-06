import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let enhance = applyMiddleware(thunk);

const create = enhance(createStore);

export default (create(reducers));
