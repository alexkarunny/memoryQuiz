import { baseApi } from '@/services/baseApi'

import {
  CardType,
  CreateCardParamsType,
  GetCardByIdParamsType,
  GetCardsParamsType,
  GetCardsResponseType,
  GetRandomCardParamsType,
  GradeCardParamsType,
  UpdateCardParamsType,
} from './cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CardType, CreateCardParamsType>({
      invalidatesTags: ['Decks', 'Cards'],
      query: ({ body, id }) => ({
        body,
        method: 'POST',
        url: `decks/${id}/cards`,
      }),
    }),
    deleteCard: builder.mutation<void, GetCardByIdParamsType>({
      invalidatesTags: ['Cards'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `cards/${id}`,
      }),
    }),
    getCardById: builder.query<CardType, GetCardByIdParamsType>({
      providesTags: ['Cards'],
      query: ({ id }) => ({
        method: 'GET',
        url: `cards/${id}`,
      }),
    }),
    getCards: builder.query<GetCardsResponseType, GetCardsParamsType>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        params: params,
        url: `decks/${id}/cards`,
      }),
    }),
    getRandomCard: builder.query<CardType, GetRandomCardParamsType>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        params: params,
        url: `decks/${id}/learn`,
      }),
    }),
    gradeCard: builder.mutation<void, GradeCardParamsType>({
      invalidatesTags: ['Cards'],
      query: ({ body, id }) => ({
        body,
        url: `decks/${id}/learn`,
      }),
    }),
    updateCard: builder.mutation<CardType, UpdateCardParamsType>({
      invalidatesTags: ['Cards'],
      query: ({ body, id }) => ({
        body,
        method: 'PATCH',
        url: `cards/${id}`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardByIdQuery,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useGradeCardMutation,
  useUpdateCardMutation,
} = cardsApi
