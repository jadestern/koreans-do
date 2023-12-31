import type { ButtonType, MessageType } from './types'

export const YOU_CHATS: MessageType[] = [
  {
    id: 0,
    afterId: 0,
    afterType: 'button',
    sender: 'you',
    content:
      `Hi. Welcome to <strong>What Koreans Really Do.</strong>
I'm Elisa, a native Korean living in Seoul right now. Nice to meet you.`,
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
    content: 'Are you planning a trip to Korea?',
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
    content: 'Not at this moment, but someday maybe.',
  },
  {
    id: 6,
    afterId: 12,
    afterType: 'message',
    sender: 'me',
    content: "No, I'm just looking around.",
  },
  {
    id: 7,
    afterId: 8,
    afterType: 'message',
    sender: 'you',
    content: 'Haha, I can read your mind :)',
  },
  {
    id: 8,
    afterId: 9,
    afterType: 'message',
    sender: 'you',
    content: 'Can you tell me what the most challenging aspect is when preparing for a trip to Korea?',
  },
  {
    id: 9,
    afterId: 2,
    afterType: 'button',
    sender: 'you',
    content: 'If you tell me, I may give you some helpful tips!',
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
    afterId: 9,
    afterType: 'message',
    sender: 'you',
    content: `I'm glad you think that someday you'll experience Korea!
Can you tell me what the most challenging aspect is when preparing for a trip to Korea?`,
  },
  {
    id: 12,
    afterId: -1,
    afterType: 'input',
    sender: 'you',
    content: `Oh, great. If you leave your e-mail address,
I will send you the latest trendy information about Korea!`,
  },
  {
    id: 13,
    afterId: 16,
    afterType: 'message',
    sender: 'me',
    content: `I can only find the shallow information about Korea.
I'd like to know what Koreans are really up to these days.`,
  },
  {
    id: 14,
    afterId: 17,
    afterType: 'message',
    sender: 'me',
    content: `There is too much information,
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
    content: `Great! I am the perfect person to help you out.`,
  },
  {
    id: 17,
    afterId: 18,
    afterType: 'message',
    sender: 'you',
    content: 'Yes, every time I go on a trip, I face the same issue.',
  },
  {
    id: 18,
    afterId: 19,
    afterType: 'message',
    sender: 'you',
    content: `I'd like to recommend you some trendy places that you should definitely love to go!`,
  },
  {
    id: 19,
    afterId: -1,
    afterType: 'card-theme',
    sender: 'you',
    content: `Can you tell me what kind of trip you prefer?`,
  },
  {
    id: 20,
    afterId: -1,
    afterType: 'input',
    sender: 'you',
    content: `Thank you for your answer!
If you leave your e-mail address,
I will send you the tips for your difficulties!`,
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
    content: `Please leave an e-mail for more information.
Then you will directly get to the content.`,
  },
  {
    id: 23,
    sender: 'you',
    content: `Thank you for your feedback!
I will send you the detailed information about this.`,
  },
  {
    id: 24,
    afterId: -1,
    afterType: 'input',
    sender: 'you',
    content: `Sorry. I don't understand your email. Could you type it again?`,
  }
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
export const THEMES_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY/values/%ED%85%8C%EB%A7%88?alt=json&key=AIzaSyBGmfyRxB3e0g3EhakIkgN9WWboHYmFgz0'
export const CONTENTS_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY/values/%EC%BD%98%ED%85%90%EC%B8%A0%28%EC%A0%95%EB%A6%AC%29?alt=json&key=AIzaSyBGmfyRxB3e0g3EhakIkgN9WWboHYmFgz0'
