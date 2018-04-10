import _ from 'lodash';
import { createSelector } from 'reselect';

const getInbox = state => state.inbox.data;

const reduceInbox = (inbox) => {
  return _.reduce(inbox, (acc, item) => {
    if (_.get(item, ['title'])) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export const getInboxSelector = createSelector(
  [getInbox],
  (inbox) => reduceInbox(inbox),
);