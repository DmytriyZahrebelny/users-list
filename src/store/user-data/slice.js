import { createSlice } from '@reduxjs/toolkit';
import { sort } from '../../helpers/sort';

export const usersDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data: [],
    usersData: [],
    currentPages: [],
    prevPage: null,
    page: 0,
    nextPage: 1,
    maxCountPages: 0,
  },
  reducers: {
    addUserData: (state, action) => {
      const [first, second, third] = [...action.payload].sort((a, b) => b.pageviews - a.pageviews);

      state.usersData = action.payload.map((item) => {
        if (item.pageviews === first.pageviews) {
          return { ...item, gold: 'gold' };
        }
        if (item.pageviews === second.pageviews) {
          return { ...item, silver: 'silver' };
        }
        if (item.pageviews === third.pageviews) {
          return { ...item, bronze: 'bronze' };
        }
        return item;
      });

      state.data = state.usersData.slice(0, 10);
      state.maxCountPages = Math.ceil(action.payload.length / 10);
    },
    nextPageData: (state) => {
      state.page += 1;
      state.nextPage = state.maxCountPages > state.nextPage + 1 ? state.page + 1 : null;
      state.data = state.usersData.slice(state.page * 10, state.page * 10 + 10);
      state.prevPage = state.page === 1 ? 0 : state.page - 1;
    },
    prevPageData: (state) => {
      state.page -= 1;
      state.prevPage = state.prevPage - 1 >= 0 ? state.page - 1 : null;
      state.data = state.usersData.slice(state.page * 10, state.page * 10 + 10);
      state.nextPage = state.page + 1;
    },
    searchData: (state, action) => {
      if (action.payload === '') {
        state.data = state.usersData.slice(0, 10);
      } else {
        state.data = state.usersData.filter(({ name }) =>
          name.toLowerCase().includes(action.payload.toLowerCase().trim())
        );
      }
    },
    sortByName: (state, action) => {
      state.usersData = sort(state.usersData, 'name', action.payload);
      state.data = state.usersData.slice(state.page * 10, state.page * 10 + 10);
    },
    sortByPageviews: (state, action) => {
      state.usersData = sort(state.usersData, 'pageviews', action.payload);
      state.data = state.usersData.slice(state.page * 10, state.page * 10 + 10);
    },
  },
});
