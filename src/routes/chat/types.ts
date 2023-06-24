export type Chat = {
  id: number
}

export type MessageType = {
  type?: 'message' | 'card'
  afterId: number
  afterType: 'button' | 'message' | 'card' | 'input'
  sender: 'me' | 'you'
  content: string | HTMLDivElement
} & Chat

export type ButtonType = {
  chatIds: number[]
} & Chat
