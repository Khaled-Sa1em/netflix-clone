import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   user: null,
// }

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    logIn(state, action) {
      state.user = action.payload
    },
    logOut(state) {
      state.user = null
    },
    // signUp(state, action) {
    //   state.value += action.payload
    // },
  },
})

export const selectUser = (state) => state.user.user
export const { logIn, logOut } = userSlice.actions
export default userSlice.reducer
