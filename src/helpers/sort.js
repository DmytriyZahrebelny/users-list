export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';

export const sort = (list, attribute, direction = SORT_ASC) => {
  return list.sort((a, b) => {
    if (a[attribute] === b[attribute]) {
      return 0;
    }
    if (direction === SORT_DESC) {
      return a[attribute] > b[attribute] ? -1 : 1;
    }

    return a[attribute] > b[attribute] ? 1 : -1;
  });
};
