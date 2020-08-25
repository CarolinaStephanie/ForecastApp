import type from './HomeTypes';

export const updateHistory = (data) => ({
  type: type.UPDATE_HISTORY,
  payload: { data },
});

export const updateFavorite = (data) => ({
  type: type.UPDATE_FAVORITE,
  payload: { data },
});
