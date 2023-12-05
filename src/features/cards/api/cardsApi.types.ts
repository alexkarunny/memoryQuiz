export type GetCardsResponseType = {
    items: CardType
    pagination: CardsPaginationType
}
type CardsPaginationType = {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
}

export type CardType = {
    id: string
    deckId: string
    userId: string
    question: string
    answer: string
    shots: number
    answerImg: string
    questionImg: string
    questionVideo: string
    answerVideo: string
    rating: number
    created: string
    updated: string
}

export type GetCardsParamsType = {
    id: string
    params: {
        question: string
        answer: string
        orderBy: string
        currentPage: number
        itemsPerPage: number
    }
}

export type CreateCardParamsType = {
    id: string
    body: FormData
}

export type GetRandomCardParamsType = {
    id: string
    params: {
        previousCardId: string
    }
}

export type GradeCardParamsType = {
    id: string
    body: {
        cardId: string
        grade: number
    }
}

export type GetCardByIdParamsType = Pick<GetRandomCardParamsType, 'id'>

export type UpdateCardParamsType = {
    id: string
    body: FormData
}
