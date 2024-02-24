import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import prisma from '@/lib/prisma';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (id: number) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id: id },
                select: {
                    id: true,
                    email: true,
                    fullname: true,
                    role: true,
                },
            });
            return user;
        } catch (error) {
            return {};
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload || {};
        });
    },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
