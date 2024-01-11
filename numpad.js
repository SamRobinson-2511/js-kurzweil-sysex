// const sysexHeader = [0xF0, 0x07, 0x00, 0x78, 0x14, 0x09];
// const endSysex = [0x7F, 0xF7];

const numpad = document.getElementById('numpad');
numpad.addEventListener('keydown', (e)=>{
  switch(e.key){
    
    case 0:
      if (length > 0){
        numPad(0);
      }
      break;

    case "Numpad1":
      console.log(e.key)
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

function numPad (midiAccess, portID){
  const sysEx = [0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x0, 0x7F, 0xF7];
  const output = midiAccess.outputs.get(portID);
  output.send(sysEx)
  console.log('here')
}