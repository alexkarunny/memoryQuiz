import {baseApi} from '@/services/baseApi.ts';
import {
    DecksResponseType,
    DeckType,
    DeleteDeckParamsType, DeleteDeckResponseType, GetDeckByIdParamsType,
    GetDecksParamsType, UpdateDeckParamsType
} from './decksApi.types';


export const decksApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getDecks: builder.query<DecksResponseType,Partial<GetDecksParamsType> | void >({
            query: params => ({
                url: `decks`,
                ... (params ? { params: params ?? {} } : null)
            }),
            providesTags: ['Decks']
        }),
        createDeck: builder.mutation<DeckType, FormData>({
            query: body => ({
                url: `decks`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Decks']
        }),
        deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckParamsType>({
            query: ({id}) => ({
                url: `decks/${id}` ,
                method: 'DELETE',
            }),
            invalidatesTags: ['Decks']
        }),
        updateDeck: builder.mutation<DeckType , UpdateDeckParamsType>({
            query: ({id, body}) => ({
                url: `decks/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Decks']
        }),
        getDeckById: builder.query<DeckType, GetDeckByIdParamsType>({
            query: ({id}) => ({
                url: `decks/${id}`,
            }),
            providesTags: ['Decks']
        })
    })
})

export const {useGetDecksQuery,useCreateDeckMutation,useDeleteDeckMutation,useUpdateDeckMutation,useGetDeckByIdQuery } = decksApi