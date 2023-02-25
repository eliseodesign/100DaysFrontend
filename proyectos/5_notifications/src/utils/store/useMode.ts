import create from 'zustand'

interface Mode{
  dark:boolean
}
const useMode = create<Mode>(()=>({
  dark:false
}))