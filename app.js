// let log = console.log.bind(console)
let ctx = new AudioContext(), oscillators = {};
const startButton = document.querySelector('button');


startButton.addEventListener('click', ()=> {
  ctx = new AudioContext();
  console.log(ctx);
})

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess()
  .then(success, failure);
}

function success (midi){
  let inputs = midi.inputs.values();
  for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
    input.value.onmidimessage = onMIDIMessage;
  }
}

function failure(){
  console.error('No access to your MIDI devices.')
}

function onMIDIMessage(message){
  let frequency = midiNoteToFrequency(message.data[1]);

  if (message.data[0] === 144 && message.data[2] > 0 ){
    playNote(frequency);
  }
  if (message.data[0] === 128 || message.data[2] === 0){
    stopNote(frequency);
  }
  if (message.data[0] === 172)
}

function midiNoteToFrequency (note) {
  return Math.pow(2, ((note-69) / 12)) * 440;
}

function playNote(frequency){
  oscillators[frequency] = ctx.createOscillator();
  oscillators[frequency].frequency.value = frequency;
  oscillators[frequency].connect(ctx.destination);
  oscillators[frequency].start(ctx.currentTime);
  console.log(frequency);
}

function stopNote (frequency){
  oscillators[frequency].stop(ctx.currentTime);
  oscillators[frequency].disconnect();
}
