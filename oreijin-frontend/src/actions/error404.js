export const NOT_FOUND = 'NOT_FOUND';
export const RESET_NOT_FOUND = 'RESET_NOT_FOUND';

export const notFound = () => ({
  type: NOT_FOUND,
});

export const resetNotFound = () => ({
  type: RESET_NOT_FOUND,
});
