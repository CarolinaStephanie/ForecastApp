import type from './HistoryTypes';

export const updateHistory = (data) => ({
  type: type.UPDATE_HISTORY,
  payload: { data },
});
