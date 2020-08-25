import * as actions from './HomeActions';

export const updateHomeList = (name, remove = false, list, actionName) => async (dispatch) => {
  let newList = [];

  if (remove) {
    dispatch(actions[actionName](list.filter((city) => city !== name)));
  } else if (!list.includes(name)) {
    if (list.length === 5) {
      newList = [name, ...list.slice(0, 4)];
    } else {
      newList = [name, ...list];
    }
    dispatch(actions[actionName](newList));
  }
};
