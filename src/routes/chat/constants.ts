import type { ButtonType, MessageType } from './types'

export const YOU_CHATS: MessageType[] = [
  {
    id: 0,
    afterId: 0,
    afterType: 'button',
    sender: 'you',
    content:
      "Hi. <strong>Welcome to We Koreans Now Do this.</strong><br />I'm Elisa, a native Korean living in Seoul right now. Nice to meet you.",
  },
  {
    id: 1,
    afterId: 3,
    afterType: 'message',
    sender: 'me',
    content: 'Nice to meet you, too.',
  },
  {
    id: 2,
    afterId: 3,
    afterType: 'message',
    sender: 'me',
    content: 'Hi, Elisa.',
  },
  {
    id: 3,
    afterId: 1,
    afterType: 'button',
    sender: 'you',
    content: 'Are you thinking of coming to Korea?',
  },
  {
    id: 4,
    afterId: 7,
    afterType: 'message',
    sender: 'me',
    content: 'Yes! How did you know that?',
  },
  {
    id: 5,
    afterId: 10,
    afterType: 'message',
    sender: 'me',
    content: 'Not right now',
  },
  {
    id: 6,
    afterId: 13,
    afterType: 'message',
    sender: 'me',
    content: "No, I'm just looking around.",
  },
  {
    id: 7,
    afterId: 8,
    afterType: 'message',
    sender: 'you',
    content: 'Haha, I can read your mind.',
  },
  {
    id: 8,
    afterId: 9,
    afterType: 'message',
    sender: 'you',
    content: 'Please tell me what is the most difficult thing when you consider coming to Korea.',
  },
  {
    id: 9,
    afterId: 2,
    afterType: 'button',
    sender: 'you',
    content: 'If I know your problem, I may give you some helpful tips for that!',
  },
  {
    id: 10,
    afterId: 11,
    afterType: 'message',
    sender: 'you',
    content: 'Oh, that sounds great.',
  },
  {
    id: 11,
    afterId: 12,
    afterType: 'message',
    sender: 'you',
    content: `I'm happy that someday you will experience the real Korea!
Please tell me what is the most difficult thing when you consider coming to Korea.`,
  },
  {
    id: 12,
    afterId: -1,
    afterType: 'message',
    sender: 'you',
    content: `Oh, great. If you leave your e-mail address,
I will send you the latest trendy information about Korea!`,
  },
  {
    id: 13,
    afterId: 16,
    afterType: 'message',
    sender: 'me',
    content: `I can only see the shallow information about Korea.
I'd like to know what Koreans do recently.`,
  },
  {
    id: 14,
    afterId: 17,
    afterType: 'message',
    sender: 'me',
    content: `There are too many information,
so I don't know what to do.`,
  },
  {
    id: 15,
    afterId: 20,
    afterType: 'message',
    sender: 'me',
    content: `There are other things.`,
  },
  {
    id: 16,
    afterId: 19,
    afterType: 'message',
    sender: 'you',
    content: `Great! I am the perfect person to tell you
what the real Korea is like right now.`,
  },
  {
    id: 17,
    afterId: 18,
    afterType: 'message',
    sender: 'you',
    content: 'I get that. Every time I go on a trip, I have the same issue.',
  },
  {
    id: 18,
    afterId: 19,
    afterType: 'message',
    sender: 'you',
    content: `I can show you some trendy places that you should definitely go! You don't have to hesitate.`,
  },
  {
    id: 19,
    afterId: -1,
    afterType: 'card',
    sender: 'you',
    content: `Can you tell me what kind of trip you prefer?`,
  },
  {
    id: 20,
    afterId: -1,
    afterType: 'input', // TODO input 후에 대한 처리
    sender: 'you',
    content: `Thank you! If you leave your e-mail address,
I will send you the tips for this!`,
  },
  {
    id: 21,
    afterId: 22,
    afterType: 'message',
    sender: 'you',
    content: `Excellent Choice!`,
  },
  {
    id: 22,
    afterId: -1,
    afterType: 'input',
    sender: 'you',
    content: `If you leave your e-mail address,
I will send you the detailed information about this.
You can get it in a day.`,
  },
]
export const BUTTONS: ButtonType[] = [
  {
    id: 0,
    chatIds: [1, 2],
  },
  {
    id: 1,
    chatIds: [4, 5, 6],
  },
  {
    id: 2,
    chatIds: [13, 14, 15],
  },
]
