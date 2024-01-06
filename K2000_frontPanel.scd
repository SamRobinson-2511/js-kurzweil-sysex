//make a new window
(
Window.closeAll;
w = Window.new('K2000R Sysex', Rect(200, 300, 400, 500));
w.front;
)

Window.screenBounds;

(
var win, topButton, bottomButton;
Window.closeAll;
win = Window.new('K2000R Sysex', Rect(
	(Window.screenBounds.width - 500) /2,
	(Window.screenBounds.height - 500) /2,
	500,
	500)
);
win.alwaysOnTop_(true);
win.front;
topButton = 8.collect({ Button.new() });
bottomButton = 8.collect({ Button.new() });
// win.layout_(HLayout(*button));
win.layout_(GridLayout.rows(topButton, bottomButton));
)

k = MIDIOut.newByName("Micro Express USB #9", "Port 1");


//GUI buttons and functions - going to refactor soon for my own brain
(
Window.closeAll;
w = Window.new("K2000r Sysex", bounds: Rect(1000, 100, 100, 400)).front;

~edit = Button.new();
~edit.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x20, 0x7F, 0xF7])});
~edit.string = 'edit';

~f1 = Button.new();
~f1.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x22, 0x7F, 0xF7])});
~f1.string = 'f1';

~f2 = Button.new();
~f2.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x23, 0x7F, 0xF7])});
~f2.string = 'f2';

~f3 = Button.new();
~f3.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x24, 0x7F, 0xF7])});
~f3.string = 'f3';

~f4 = Button.new();
~f4.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x25, 0x7F, 0xF7])});
~f4.string = 'f4';

~f5 = Button.new();
~f5.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x26, 0x7F, 0xF7])});
~f5.string = 'f5';

~f6 = Button.new();
~f6.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x27, 0x7F, 0xF7])});
~f6.string = 'f6';

~exit = Button.new();
~exit.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x21, 0x7F, 0xF7])});
~exit.string = 'exit';

~program = Button.new();
~program.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x40, 0x7F, 0xF7]) });
~program.string = 'program';

~setup = Button.new();
~setup.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x41, 0x7F, 0xF7])});
~setup.string='setup';

~qAccess = Button.new();
~qAccess.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x42, 0x7F, 0xF7])});
~qAccess.string = 'qAccess';

~effects = Button.new();
~effects.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x47, 0x7F, 0xF7])});
~effects.string = 'effects';

~midi = Button.new();
~midi.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x44, 0x7F, 0xF7])});
~midi.string = 'midi';

~master = Button.new();
~master.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x43, 0x7F, 0xF7])});
~master.string = 'master';

~song = Button.new();
~song.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x46, 0x7F, 0xF7])});
~song.string = 'song';

~disk = Button.new();
~disk.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x45, 0x7F, 0xF7])});
~disk.string = 'disk';

~n1 = Button.new();
~n1.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x1, 0x7F, 0xF7])});
~n1.string = '1';

~n2 = Button.new();
~n2.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x2, 0x7F, 0xF7])});
~n2.string = '2';

~n3 = Button.new();
~n3.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x3, 0x7F, 0xF7])});
~n3.string = '3';

~n4 = Button.new();
~n4.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x4, 0x7F, 0xF7])});
~n4.string = '4';

~n5 = Button.new();
~n5.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x5, 0x7F, 0xF7])});
~n5.string = '5';

~n6 = Button.new();
~n6.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x6, 0x7F, 0xF7])});
~n6.string = '6';

~n7 = Button.new();
~n7.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x7, 0x7F, 0xF7])});
~n7.string = '7';

~n8 = Button.new();
~n8.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x8, 0x7F, 0xF7])});
~n8.string = '8';

~n9 = Button.new();
~n9.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x9, 0x7F, 0xF7])});
~n9.string = '9';

~n0 = Button.new();
~n0.action_({k.sysex(Int8Array[0xF0, 0x07, 0x00, 0x78, 0x14, 0x09, 0x0, 0x7F, 0xF7])});
~n0.string = '0';




/*w.layout_((HLayout(~edit, ~f1, ~f2, ~f3, ~f4, ~f5, ~f6, ~f8)));*/
/*w.layout_(
 	VLayout(
 		HLayout(~n1, ~n2, ~n3),
 		HLayout(~n4, ~n5, ~n6),
 		HLayout(~n7, ~n8, ~n9),
 		HLayout(~npm, ~n0, ~nclr)
);
);*/

w.layout_(
	VLayout(
		HLayout(~edit, ~f1, ~f2, ~f3, ~f4, ~f5, ~f6, ~f8, ~exit),
		HLayout(~program, ~setup, ~qAccess, ~effects, ~midi, ~master, ~song, ~disk),
		HLayout(~n1, ~n2, ~n3),
		HLayout(~n4, ~n5, ~n6),
		HLayout(~n7, ~n8, ~n9)
	)
	);
);


)


/*a = [~edit, ~f1, ~f2, ~f3, ~f4, ~f5, ~f6, ~exit]
b = [~program, ~setup, ~qAccess, ~effects, ~midi, ~master, ~song, ~disk] */







/*~program.visible_(true);
~program.visible_(false);
~program.visible;

~program.enabled_(true);
~program.visible_(false);
~program.visible;

~program.background_(Color.new255(171, 39, 193));*/



Button.browse;






(
Window.closeAll;
w = Window.new("K2000R SysEx", bounds: Rect(1000, 100, 100, 400)).front);
w.alwaysOnTop_(true);
~b1 = Button.new();
~b1.action_({ |v| v.value.postln; });
w.layout_(HLayout(~b1));
)







