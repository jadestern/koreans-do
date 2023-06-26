export type Chat = {
  id: number
}

export type MessageType = {
  type?: 'message' | 'card'
  afterId?: number
  afterType?: 'button' | 'message' | 'card-theme' | 'card-content' | 'input'
  sender: 'me' | 'you'
  content: string | HTMLDivElement
} & Chat

export type ButtonType = {
  chatIds: number[]
} & Chat


export type CardType = {
  category?: string
  title: string
  description: string
  buttonLabel: string
  onClick: () => void
}

export type ThemeCardType = CardType

export type ContentCardType = CardType & {
  imageUrl: string
}

export type CustomWindow = Window & {
  gtag: Gtag.Gtag,
}