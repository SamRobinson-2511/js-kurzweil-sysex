const log = (input) =>{
  console.log(input);
}



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
    input.addEventListener('click', handleInPort);
    input.addEventListener('midimessage', handleInput)
    
  })

  const outputs = midiAccess.outputs;
  const outputIterator = outputs.values();
  const output = outputIterator.next().value;
  
  const outputSelect = document.getElementById('selectOutport')
  outputs.forEach(output => {
    console.log(output)
    let option = output.name;
    let outputPort = document.createElement("option");
    outputPort.textContent = option;
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

function failure(){
  alert('could not connect')
}

function updateDevices(event){
  console.log(event, 
    `
    Name:  ${event.port.name}
    Brand: ${event.port.manufacturer} 
    State: ${event.port.state}
    Type: ${event.port.type}
    Sysex: ${event.port}
    `   
   )
}

//callbacks 
const handleInput = (input) => {
  console.log(input)
  const command = input.data[0];
  const note = input.data[1];
  const velocity = input.data[2];
  const cctl = input.data[1];
  const value = input.data[2];

  switch (command) {
    case 144: //note on
      if (velocity > 0){
        noteOn(note, velocity)
      } else {
        noteOff(note, velocity)
      }
      break;
    case 128://note off
      //note off
      break;
    case 191:
      console.log(cctl, value)
      break;
  }
}

//note messages
const noteOn = (note, velocity) => {
  console.log('this is note on callback')
}
const noteOff = (note) => {
  console.log('this is note off callback')
}


//cctl messages
const cctlIn = (cc, value) => {
  console.log(cc, value)
}

//sysex messages







//select MIDI inport 
const handleInPort = (e) =>{
  console.log('here', e.target.value)
}

//select MIDI outport
const setOutPort = (e) => {
  let outport = MIDIOutput.send();
  console.log(outport)
  
  let output = document.getElementById('selectOutport')
  console.log(e.target.value())
}






//callback functions 
const handleButton = (event) => {
  const id = event.target.id;
    console.log(id)
  }
  

const playNoteScreen =(event)=>{
  console.log(event.target)
  
}

const handleOutput = () => {
  console.log('here')
}

function keyPressed(e){
  console.log(e.value)

  
}
