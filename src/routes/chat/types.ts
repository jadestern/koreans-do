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
  isContent?: boolean
  category?: string
  title: string
  description: string
  buttonLabel: string
  onClick: () => void
}

export type CustomWindow = Window & {
  gtag: Gtag.Gtag,
  emailModal: {
    showModal: () => void
  }
}

type FetchData = {
  title: string
  description: string
}

export type ThemeData = FetchData

export type ContentData = FetchData & {
  category: string
  imageUrl: string
  searchLink: string
}
