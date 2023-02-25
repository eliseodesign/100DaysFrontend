import create from 'zustand'

interface Notification {
  id:number,
  user:string,
  message:string,
  time:string,
  opened:boolean,
  img:string
}

interface Noti {
  notifications: Notification[],
  setNoti:(newNoti:Notification[])=>void
}

export const useNoti = create<Noti>((set)=>({
  notifications: [
    {
      id: 0,
      user: 'Mark Webber',
      message: 'reacted to your recent post My first tournament today!',
      time: '1m ago', 
      opened: false,
      img: '0.webp'
    },
    {
      id: 1,
      user: 'Angela Gray',
      message: 'followed you',
      time: '5m ago',
      opened: false,
      img: '1.webp'
    },
    {
      id: 2,
      user: 'Jacob Thompson',
      message: 'has joined your group Chess Club',
      time: '1 day ago',
      opened: false,
      img: '2.webp'
    },
    {
      id: 3,
      user: 'Rizky Hasanuddin',
      message: 'sent you a private message\nHello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and\nI\'m already having lots of fun and improving my game.',
      time: '5 days ago',
      opened: false,
      img: '3.webp'
    },
    {
      id: 4,
      user: 'Kimberly Smith',
      message: 'commented on your picture',
      time: '1 week ago',
      opened: false,
      img: '4.webp'
    },
    {
      id: 5,
      user: 'Nathan Peterson',
      message: 'reacted to your recent post 5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      opened: false,
      img: '5.webp'
    },
    {
      id: 6,
      user: 'Anna Kim',
      message: 'left the group Chess Club',
      time: '2 weeks ago',
      opened: false,
      img: '6.webp'
    }
  ],
  setNoti: (newNoti) => set(() => ({ notifications: newNoti })),
  
}))