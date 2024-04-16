import { apiSlice } from './apiSlice';

const USER_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/auth`,
                method: 'POST',
                body:data
            })
        }),
        register: builder.mutation({
            query: (date) => ({
                usrl: `${USER_URL}/register`,
                method: 'POSt',
                body:data
            })
        })
    })
})

export const { useRegisterMutation } = usersApiSlice;