import {baseApi} from '@/services/baseApi.ts';
import {
    CardType,
    CreateCardParamsType,
    GetCardByIdParamsType,
    GetCardsParamsType,
    GetCardsResponseType, GetRandomCardParamsType, GradeCardParamsType, UpdateCardParamsType
} from './cardsApi.types';

export const cardsApi = baseApi.injectEndpoints({
    endpoints: builder => ({
    getCards: builder.query<GetCardsResponseType ,GetCardsParamsType>({
    query: ({id, params}) => ({
        url: `decks/${id}/cards`,
        params: params
    }),
        providesTags: ['Cards']
    }),
    createCard: builder.mutation<CardType, CreateCardParamsType>({
        query: ({id, body}) => ({
            url: `decks/${id}/cards`,
            method: 'POST',
        body
        }),
        invalidatesTags: ['Decks','Cards']
    }),
    getRandomCard: builder.query<CardType, GetRandomCardParamsType>({
        query: ({id, params}) => ({
            url: `decks/${id}/learn`,
        params: params
        }),
        providesTags: ['Cards']
    }),
    gradeCard: builder.mutation<void, GradeCardParamsType>({
        query: ({id,body}) => ({
            url: `decks/${id}/learn`,
            body
        }),
        invalidatesTags: ['Cards']
    }),
        getCardById: builder.query<CardType, GetCardByIdParamsType>({
            query: ({ id }) => ({
                url: `cards/${id}`,
                method: 'GET',
            }),
            providesTags: ['Cards'],
        }),
        updateCard: builder.mutation<CardType, UpdateCardParamsType>({
            query: ({ id, body }) => ({
                url: `cards/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Cards'],
        }),
        deleteCard: builder.mutation<void, GetCardByIdParamsType>({
            query: ({id}) => ({
                url: `cards/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cards'],
        })
    })
})