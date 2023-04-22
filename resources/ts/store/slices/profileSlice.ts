import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Define a type for the slice state
interface IProfileState {
  token: string;
}

// Define the initial state using that type
const initialState: IProfileState = {
  token: '',
} as IProfileState;

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IProfileState>) => {
      state.token = action.payload.token
    },
  },
});

export const { set } = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile.token;

export default profileSlice.reducer;
