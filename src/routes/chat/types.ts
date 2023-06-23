export type Chat = {
  id: number,
  sender?: 'me' | 'you',
  groupId: number, // 같은 묶음으로 나오는 id
  beforeId: number, // 이전 채팅의 id
  content: string,
}