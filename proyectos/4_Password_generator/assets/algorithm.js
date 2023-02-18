const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const SYMBOLS = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '.', '/', '=', '?', '^', '_', '|', '~'];

const letterRandom = (upp = false) => {
  if(upp){
    return LETTERS[Math.floor(Math.random()*26)].toUpperCase()
  }
  return LETTERS[Math.floor(Math.random()*26)]
}
const symbolRandom = () => SYMBOLS[Math.floor(Math.random()*18)]
const isUpp = () => Math.floor(Math.random()*2)
const functRandom = () => Math.floor(Math.random()*4)

export default function createPassword(len, upp = false, num = false, sym = false){

  let password = []
  for(let i = 0; i < len; i++){

    let letter = ""
    switch(functRandom()){
      case 0:
        letter = letterRandom(upp)
        break
      case 1:
        letter = letterRandom(upp)
        break
      case 2:
        if(sym){
          letter = symbolRandom()
        }else{
          letter =  letterRandom(upp)
        }
        break
      case 3:
        if(num){
          letter =  Math.floor(Math. random()*10)
        }else{
          letter = letterRandom(upp)
        }
        break
    }
    
    password = [...password, letter]
  }

  return password.join("")
}


