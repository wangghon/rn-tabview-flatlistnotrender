import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

let enhance = applyMiddleware(thunk);

const create = enhance(createStore);

export default (create(reducers));
