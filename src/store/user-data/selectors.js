export const getUsersData = (state) => state.userData.data;
export const getPaginationData = (state) => ({
  nextPage: state.userData.nextPage,
  prevPage: state.userData.prevPage,
  page: state.userData.page,
  usersCount: state.userData.usersData.length,
});
