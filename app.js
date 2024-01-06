

const connectButton = document.getElementById('connect')
const listButton = document.getElementById('list');




if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}


function success (midiAccess){
  console.log(midiAccess)
  midiAccess.addEventListener('statechange', updateDevices)
  
  const inputPorts = midiAccess.inputs.values();
  console.log(inputPorts)
  for (const input of inputPorts){
    console.table(
      `
      MIDI Input Port: ${input.name}
      `
      )
  }

  const outputPorts = midiAccess.outputs.values();
  for (const output of outputPorts){
  // console.log(
  //   `
  //   MIDI Output Port: ${output.name}
  //   MIDI Output ID: ${output.id}
  //   Sysex: ${output.sysexEnabled}
  //   `
  //   )
  
  }
}





function updateDevices(event){
   console.log(
     `
     Name:  ${event.port.name}
     Brand: ${event.port.manufacturer}, 
     State: ${event.port.state}, 
     Type: ${event.port.type}
     Sysex: ${event.port}
     `   
    )
}

function failure(){
  console.log('could not connect')
}

const handleInput = (input) => {
  const command = input.data[0];
  const note = input.data[1];
  const velocity = input.data[2];
  console.log(command, note, velocity);

  switch (command) {
    case 144: //note on 
    if (velocity > 0) {
      noteOn(note, velocity)
    } else {
      noteOff(note);
    }
    break;
    case 128: //noteoff
      noteOff();
      break;
  }
}

const noteOn = (note, velocity) => {
  console.log(note, velocity)
}

const noteOff = (note) => {
}

const handleOutput = () => {
  console.log('here')
}

