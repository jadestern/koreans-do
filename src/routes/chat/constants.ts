type Chat = {
  id: number,
  groupId: number, // 같은 묶음으로 나오는 id
  beforeId: number, // 이전 채팅의 id
  content: string,
}

export const YOU_CHATS: Chat[] = [
  {
    id: 0,
    groupId: 0,
    beforeId: -1,
    content: 'Hi. <strong>Welcome to We Koreans Now Do this.</strong><br />I\'m Elisa, a native Korean living in Seoul right now. Nice to meet you.'
  },
]

export const ME_CHATS: Chat[] = [
  {
    id: 0,
    groupId: 0,
    beforeId: 0,
    content: 'Nice to meet you, too.'
  },
]