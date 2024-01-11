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
  const inputIterator = inputs.values();
  const input = inputIterator.next().value;
  const inputSelect = document.getElementById('selectInport')
  
  inputs.forEach(input => {
    const device = input.name;
    const inPort = document.createElement('option');
    inPort.text = device;
    inputSelect.appendChild(inPort)
    input.addEventListener('onchange', handleInPort);
  })

  const outputs = midiAccess.outputs;
  const outputIterator = outputs.values();
  const output = outputIterator.next().value;
  
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
    output.addEventListener('change', setOutPort)
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

function sendMIDIMessage(midiAccess, data){
  const output = midiAccess.output;
  console.log(output)
  const noteOnMessage = [0x90, 60, 127];
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
  let outport = MIDIOutput.send();
  console.log(outport)
  
  let output = document.getElementById('selectOutport')
  console.log(e.target.value())
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

  
}
