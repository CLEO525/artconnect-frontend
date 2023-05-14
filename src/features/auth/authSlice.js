import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api";

//login action 생성자
//createAsyncThunk 함수를 사용하여 loginAsync 액션 생성자를 작성.
//비동기 작업을 수행하고 성공 또는 실패했을 때 액션을 디스패치
export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ id, pwd }, { rejectWithValue }) => {
    try {
      const response = await login(id, pwd);
      if (response.loginSuccess) {
        return response;
      } else {
        return rejectWithValue(response);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {},
  //createSlice 함수에서 액션 생성자들을 처리하는 방법을 정의
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      })
      //요청이 성공하면 fulfilled 액션을 디스패치
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
