// const sysexHeader = [0xF0, 0x07, 0x00, 0x78, 0x14, 0x09];
// const endSysex = [0x7F, 0xF7];

const numpad = document.getElementById('numpad');

numpad.addEventListener('keydown', (e)=>{
  // console.log(e)
  
  switch(e.key){
    
    case "0":
      console.log(e.key)
      handleButton()
      break;

    case "1":
      console.log(e.key)
      break;

    case "2":
      console.log('2 pressed')
      break;

    case "3":
      console.log('3 pressed')
      break;

    case "4":
      console.log('4 pressed')
      break;

      case "5":
        console.log('5 pressed')
        break;
  
      case "6":
        console.log('6 pressed')
        break;
  
      case "7":
        console.log('7 pressed')
        break;
  
      case "8":
        console.log('8 pressed')
        break;

      case "9":
        console.log('9 pressed')
        break;
  }
})

function numPad (midiAccess, portID){
  console.log('here')
}

const handleButton = (event) => {
  const id = event.target.id;
  console.log(id)
  const key = event.key;
  key === id ? console.log(`here ${key}`):null;
}

