const {
  createSlice,
  createAsyncThunk,
  createDraftSafeSelector,
} = require("@reduxjs/toolkit");
import Axios from "axios";
import { FS } from "src/redux/slice/other/constants";

const client = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const fetchData = createAsyncThunk(
  "firstSlice/fetchData",
  async (_, thunkAPI) => {
    const res = await client.get("/").then((res) => res.data);
    console.log(res);
    return res;
  }
);

const initialState = {
  fetchDataStatus: FS.INITIAL,
  posts: undefined,
};

const testSlice = createSlice({
  name: "testSlice",
  initialState: initialState,
  reducers: {
    test: (state, action) => {},
  },
  extraReducers: {
    [fetchData.pending](state) {
      state.fetchDataStatus = FS.FETCHING;
    },
    [fetchData.fulfilled](state, action) {
      if (state.fetchDataStatus !== FS.FAIL) {
        state.fetchDataStatus = FS.SUCCESS;
      }
      state.posts = action.payload;
    },
    [fetchData.rejected](state) {
      state.fetchDataStatus = FS.FAIL;
      state.posts = undefined;
    },
  },
});

export default testSlice.reducer;
export const { test } = testSlice.actions;

export const selectDataSlice = (state) => state.dataSlice;

export const selectData = createDraftSafeSelector(
  (state) => selectDataSlice(state).posts,
  (dataPosts) => {
    if (!dataPosts) return null;
    return {
      posts: dataPosts,
    };
  }
);
