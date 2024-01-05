let log = console.log.bind(console), keyData = document.getElementById('key_data'), midi;
let AudioContext;
let context;
let btnBox = document.getElementById('content'), btn = document.getElementsByClassName('button');
let data, cmd, channel, type, note, velocity;

try {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
}
catch(e){
  alert('Web Audio API is not supported in this browser')
}

const startButton = document.querySelector('button');
startButton.addEventListener('click', ()=>{
  ctx = new AudioContext();
  console.log(ctx);
})

if (navigator.requestMIDIAccess){
  navigator.requestMIDIAccess({
    sysex: true
  })
  .then(onMIDISuccess, onMIDIFailure);
} else {
  alert("No MIDI support in your browser.")
}

function onMIDISuccess(midiAccess){
  console.log('MIDI Access Object', midiAccess);
  midi = midiAccess;
  let inputs = midi.inputs.values();
  for (let input = inputs.next(); input && !input.done; input = inputs.next()){
    input.value.onmidimessage = onMIDIMessage;
  }
}

// document.addEventListener('keydown', keyController);

const listInputs =(inputs) => {
  let input = inputs.value;
  log("Input port : [ type: ' " + input.type + "'id'" + input.id)
}

function onMIDIFailure(e){
  console.log('No access to MIDI devices or your browser ' + e)
}

function onMIDIMessage(e){
  data = e.data,
  cmd = data[0] >> 4,
  channel = data[0] & 0xf,
  type = data[0] & 0xf0, 
  note = data[1], 
  velocity = data[2];

  switch(type){
    case 144: 
      noteOn(note, velocity);
      break;
    case 128:
      noteOff(note, velocity);
      break;
  }
  logger(keyData, 'key data', data)
}

function noteOn(midiNote, velocity) {
  if (audioContext.state !== 'running') audioContext.resume();
    player(midiNote, velocity);
}