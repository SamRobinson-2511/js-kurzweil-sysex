
MIDIClient.init;
MIDIClient.destinations;

~edit = Button.new();
~edit.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x20, 0x7F, 0xF7])});
~edit.string = 'edit';



(
//window
Window.closeAll;
Window.new('REV500 programmer', Rect(1000, 1000, 100, 400)).front;


r = MIDIOut.newByName("Micro Express USB #9", "Port 1");

~preDelay = Knob.new();
~preDelay.action_({});
~preDelay.string = 'predelay';

w.layout_( GridLayout()).front;
)



