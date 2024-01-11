const sysexHeader = [0xF0, 0x07, 0x00, 0x78, 0x14, 0x09];
const endSysex = [0x7F, 0xF7]




const edit = 0x20;
const f1 = 0x22;
// const f2 = ;
// const f3 = ; 
// const f4 = ;
// const f5 = ;
// const f6 = ; 
// const exit = ;
let sysexMessage = null;







if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}


function success (midiAccess){
  midiAccess.addEventListener('statechange', updateDevices);

  const inputs = midiAccess.inputs;
  const inputSelect = document.getElementById('selectInport')
  
  inputs.forEach(input => {
    let device = input.name;
    let inPort = document.createElement('option');
    inPort.text = device;
    inputSelect.appendChild(inPort)
    input.addEventListener('onchange', handleInPort);

  })

  const outputs = midiAccess.outputs;
  const outputSelect = document.getElementById('selectOutport')
  outputs.forEach(output => {
    let option = output.name;
    let channel = output.channel;
    let outputPort = document.createElement("option");
    let outChannel = document.createElement("channel")
    outputPort.textContent = option;
    outChannel.textContent = channel;
    outputPort.id = option;  
    outputSelect.appendChild(outputPort)
    output.addEventListener('onchange', setOutPort)
  })

  const buttons = document.querySelectorAll('.button')
  buttons.forEach(button => {
    button.addEventListener('click', handleButton)
  });

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('click', playNoteScreen);
  });

  
  }

function updateDevices(event){

   console.log(
     `
     ID: ${event.port.id}
     Name:  ${event.port.name}
     Brand: ${event.port.manufacturer} 
     State: ${event.port.state}
     Type: ${event.port.type}
     Sysex: ${event.port}
     `   
    )
}
function failure(){
  alert('could not connect')
}

//select MIDI inport 
const handleInPort = () =>{
  console.log('here', e.target.value)
}

//select MIDI outport
const setOutPort = (e) => {
  console.log(e)
}




const handleInput = (input) => {
  const command = input.data[0];
  const note = input.data[1];
  const velocity = input.data[2];
  

  switch (command) {
    case 144: //note on 
    if (velocity > 0) {
      noteOn(note, velocity)
    } else {
      noteOff(note, velocity);
    }
    break;
    case 128: //noteoff
      noteOff(note, velocity);
      break;
  }
}

//callback functions 
const handleButton = (event) => {
  const id = event.target.id;
    console.log(id)
  }
  

const noteOn = (note, velocity) => {
  console.log(note, velocity)
  
  

  
}
const playNoteScreen =(event)=>{
  console.log(event.target)
  
}

const noteOff = (note, velocity) => {
  console.log(note, velocity)
}

const handleOutput = () => {
  console.log('here')
}




function keyPressed(e){
  console.log(e.value)

  // switch(e.key){
    
    


    // case "Numpad0":
    //   console.log('1 pressed')
    //   break;

    // case "Numpad":
    //   console.log('1 pressed')
    //   break;

    // case "Numpad2":
    //   console.log('2 pressed')
    //   break;

    // case "Numpad3":
    //   console.log('3 pressed')
    //   break;

    // case "Numpad4":
    //   console.log('4 pressed')
    //   break;

    //   case "Numpad5":
    //     console.log('5 pressed')
    //     break;
  
    //   case "Numpad6":
    //     console.log('6 pressed')
    //     break;
  
    //   case "Numpad7":
    //     console.log('7 pressed')
    //     break;
  
    //   case "Numpad8":
    //     console.log('8 pressed')
    //     break;

    //   case "Numpad9":
    //     console.log('9 pressed')
    //     break;
  // }
}
