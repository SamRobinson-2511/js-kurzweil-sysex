

const connectButton = document.getElementById('connect')






if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}


function success (midiAccess){
  midiAccess.addEventListener('statechange', updateDevices);

  const inputs = midiAccess.inputs;
  inputs.forEach(input => {
    input.addEventListener('midimessage', handleInput);

  })

  const outputs = midiAccess.outputs;
  const outputSelect = document.getElementById('selectOutport')
  outputs.forEach(output => {
    let option = output.name;
    let outputPort = document.createElement('option');
    outputPort.textContent = option;
    outputPort.value = option;
    outputSelect.appendChild(outputPort)
    output.addEventListener('click', setOutPort)
  })

  const buttons = document.querySelectorAll('.button')
  buttons.forEach(button => {
    button.addEventListener('click', handleButton)
  });

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('click', playNote);
  });

  
  }

function updateDevices(event){

  //  console.log(
  //    `
  //    Name:  ${event.port.name}
  //    Brand: ${event.port.manufacturer} 
  //    State: ${event.port.state}
  //    Type: ${event.port.type}
  //    Sysex: ${event.port}
  //    `   
  //   )
}
function failure(){
  alert('could not connect')
}

//select MIDI outport
const setOutPort =(e)=>{
  console.log(e.target.value)
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
  console.log(event.target)

}

const noteOn = (note, velocity) => {
  console.log(note, velocity)
}
const playNote =(event)=>{
  console.log(event.target)
}

const noteOff = (note, velocity) => {
  console.log(note, velocity)
}

const handleOutput = () => {
  console.log('here')
}

