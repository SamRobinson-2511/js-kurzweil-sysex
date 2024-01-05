const header = "0xFO";
const footer = "0xF7"
let log = console.log.bind(console)
let context = new AudioContext(), oscillators = {};
const startButton = document.getElementById('start');
const listButton = document.getElementById('list')
let midiInputs = MIDIAccess.inputs;
let input = [];




const success = (midi) => {
  log(midi)
  
  let inputs = midi.inputs.values();
  for (let input = inputs.next();
    input && !input.done;
    input = inputs.next()){
      input.value.onmidimessage = onMIDIMessage;
  }
  let outputs = midi.outputs.values();
  for (let output = outputs.next();
    output && !output.done;
    output = outputs.next()){
      output.value.onmidimessage = onMIDIMessage;
  }
}


startButton.addEventListener('click', ()=> {
  ctx = new AudioContext();
  log(ctx);
})

listButton.addEventListener('click', (e) =>{


})


function listInputs(midi){
  log(midi)
}


const failure = () => log('No access to MIDI')

const onMIDIMessage = (message) => {
  log(message.data)
  let frequency = midiNoteToFrequency(message.data[1])
  if(message.data[0] === 144 && message.data[2] > 0){
    playNote(frequency);
  } 
  if(message.data[0] === 128 || message.data[2] === 0){
    stopNote(frequency);
  }
};
const midiNoteToFrequency = (note) => Math.pow(2, ((note - 69) / 12)) * 440;

const playNote = (frequency) => {
  oscillators[frequency] = context.createOscillator();
  oscillators[frequency].frequency.value = frequency;
  oscillators[frequency].connect(context.destination);
  oscillators[frequency].start(context.currentTime);
}

const stopNote = (frequency) => {
  oscillators[frequency].stop(context.currentTime);
  oscillators[frequency].disconnect();
}


if (navigator.requestMIDIAccess){
  navigator.requestMIDIAccess({
    sysex: true
  })
  .then(success, failure)
}
