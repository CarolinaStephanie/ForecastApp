import * as actions from './HistoryActions';

export const updateHistory = (name, remove = false) => async (dispatch, getState) => {
  const {
    historyList: { data },
  } = getState();
  let newData = [];

  if (remove) {
    dispatch(actions.updateHistory(data.filter((city) => city !== name)));
  } else if (!data.includes(name)) {
    if (data.length === 5) {
      newData = [name, ...data.slice(0, 4)];
    } else {
      newData = [name, ...data];
    }
    dispatch(actions.updateHistory(newData));
  }
};
