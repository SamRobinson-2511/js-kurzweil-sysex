window.AudioContent = window.AudioContext || window.webkitAudioContext;
let ctx;

const startButton = document.querySelector('button');
const oscillators = {};

startButton.addEventListener('click', ()=> {
  ctx = new AudioContext();
  console.log(ctx);
})

const midiToFreq = (n) =>{
  const a = 440;
  return (a / 32) * (2 ** ((n - 9) / 12));
}


if(navigator.requestMIDIAccess){
  navigator.requestMIDIAccess().then(success, failure);
}


function failure(){
  console.log("Could not Connect MIDI")
}

function success(midiAccess){
  midiAccess.addEventListener('statechange', updateDevices);
  const inputs = midiAccess.inputs;
  inputs.forEach((input) => {
    input.addEventListener('midimessage', handleInput)
  })
  const outputs = midiAccess.outputs;
  outputs.forEach((output) => {
    output.addEventListener('midimessage', handleOutput)
  })
}

const handleInput = (input) => {
  const command = input.data[0];
  const note = input.data[1];
  const velocity = input.data[2];
  // console.log(input);

  switch(command){
    case 144:
    if (velocity > 0){
      noteOn(note, velocity)
    }  else {
      noteOff(note)
    }
    break;
    case 128:
    noteOff(note);
    break;
  }
}

const handleOutput = (output) => {
  const channel = output.data[0];
  console.log(output.channel)

}



const noteOn = (note, velocity) =>{
  const osc = ctx.createOscillator();
  oscillators[note.toString()] = osc;
  console.log(oscillators);
  
  const oscGain = ctx.createGain();
  oscGain.gain.value = 0.33;

  const velocityGainAmount = (1/127) * velocity;
  const velocityGain = ctx.createGain();
  velocityGain.gain.value = velocityGainAmount;
  console.log(velocityGainAmount);

  osc.type = 'sine';
  osc.frequency.value = midiToFreq(note);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start();
}

const noteOff = (note) =>{
  const osc = oscillators[note.toString()];
  osc.stop();
  delete oscillators[note.toString()];
  console.log(oscillators);
  
}

function updateDevices(e){
  console.log(
    `
    Name: ${e.port.name}, 
    Brand: ${e.port.manufacturer}
    State: ${e.port.state},
    Type: ${e.port.type}
    `
  )
}

