import { baseApi } from '@/services/baseApi'

import {
  DeckType,
  DecksResponseType,
  DeleteDeckParamsType,
  DeleteDeckResponseType,
  GetDeckByIdParamsType,
  GetDecksParamsType,
  UpdateDeckParamsType,
} from './decksApi.types'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<DeckType, FormData>({
      invalidatesTags: ['Decks'],
      query: body => ({
        body,
        method: 'POST',
        url: `decks`,
      }),
    }),
    deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckParamsType>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `decks/${id}`,
      }),
    }),
    getDeckById: builder.query<DeckType, GetDeckByIdParamsType>({
      providesTags: ['Decks'],
      query: ({ id }) => ({
        url: `decks/${id}`,
      }),
    }),
    getDecks: builder.query<DecksResponseType, Partial<GetDecksParamsType> | void>({
      providesTags: ['Decks'],
      query: params => ({
        url: `decks`,
        ...(params ? { params: params ?? {} } : null),
      }),
    }),
    updateDeck: builder.mutation<DeckType, UpdateDeckParamsType>({
      invalidatesTags: ['Decks'],
      query: ({ body, id }) => ({
        body,
        method: 'PATCH',
        url: `decks/${id}`,
      }),
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksApi
