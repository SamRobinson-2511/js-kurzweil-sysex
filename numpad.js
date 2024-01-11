const numpad =document.getElementById('numpad');
numpad.addEventListener('keydown', (e)=>{
  switch(e.code){
    
    case "Numpad0":
      console.log('0 pressed')
      
      break;

    case "Numpad1":
      console.log('1 pressed')
      break;

    case "Numpad2":
      console.log('2 pressed')
      break;

    case "Numpad3":
      console.log('3 pressed')
      break;

    case "Numpad4":
      console.log('4 pressed')
      break;

      case "Numpad5":
        console.log('5 pressed')
        break;
  
      case "Numpad6":
        console.log('6 pressed')
        break;
  
      case "Numpad7":
        console.log('7 pressed')
        break;
  
      case "Numpad8":
        console.log('8 pressed')
        break;

      case "Numpad9":
        console.log('9 pressed')
        break;
  }

})

1