var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Five nights at freddys 2";
cs.scriptColor = "\u0023ff0038";
cs.objectSingletons = {};
/* ACTION: night_1 */
function a_c8wOT744UFqC1Q3K(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_c8wOT744UFqC1Q3K$0;
  s.name = "night_1";
  s.$perform4 = undefined;
  s.$perform7 = undefined;
  s.$perform8 = undefined;
  s.$table = undefined;
  s.$buttonmask = undefined;
  s.$cambutton = undefined;
  s.$phonebut = undefined;
  s.$cam_office = undefined;
  s.$cam_prco = undefined;
  s.$flashlight1 = undefined;
  s.$flashlight2 = undefined;
  s.$perform = undefined;
  s.$touch_down = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$touch_down1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$touch_up = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$touch_down2 = undefined;
  s.$x3 = undefined;
  s.$y3 = undefined;
  s.$touch_up1 = undefined;
  s.$x4 = undefined;
  s.$y4 = undefined;
  s.$touch_down3 = undefined;
  s.$x5 = undefined;
  s.$y5 = undefined;
  s.$touch_up2 = undefined;
  s.$x6 = undefined;
  s.$y6 = undefined;
  s.$perform2 = undefined;
  s.$tapped = undefined;
  s.$x7 = undefined;
  s.$y7 = undefined;
  s.$tapped1 = undefined;
  s.$x8 = undefined;
  s.$y8 = undefined;
  s.$perform3 = undefined;
  s.$touch_up3 = undefined;
  s.$x9 = undefined;
  s.$y9 = undefined;
  s.$touch_up4 = undefined;
  s.$x10 = undefined;
  s.$y10 = undefined;
  s.$touch_up5 = undefined;
  s.$x11 = undefined;
  s.$y11 = undefined;
  s.$freddysmask = undefined;
  s.$touch_up21 = undefined;
  s.$x12 = undefined;
  s.$y12 = undefined;
  s.$perform5 = undefined;
  s.$perform6 = undefined;
  s.$touch_down21 = undefined;
  s.$x13 = undefined;
  s.$y13 = undefined;
  s.$tapped2 = undefined;
  s.$x14 = undefined;
  s.$y14 = undefined;
  s.$tapped3 = undefined;
  s.$x15 = undefined;
  s.$y15 = undefined;
  s.$touch_down31 = undefined;
  s.$x16 = undefined;
  s.$y16 = undefined;
  s.$shb = undefined;
  s.$bunny = undefined;
  s.$touch_down32 = undefined;
  s.$x17 = undefined;
  s.$y17 = undefined;
  s.$tapped4 = undefined;
  s.$x18 = undefined;
  s.$y18 = undefined;
  s.$dialogs = undefined;
  return s;
}
cs.registerAction("night_1", "c8wOT744UFqC1Q3K", a_c8wOT744UFqC1Q3K, false);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_c8wOT744UFqC1Q3K$0(s) {
  (s.pc = "OsCg64AEOAiZ6NQN");
  var t_call_0 = lib.Colors.black(s);
  (ok1(s, t_call_0) && lib.Wall.set_background(t_call_0, s));
  s.t_elseIf_1 = true;
  (s.pc = "eNDGtun3LhkILEp1");
  var t_call_2 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, false, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.t_elseIf_1 = false);
  (s.pc = "E1MjLWt66AyNym4c");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$2);
  lib.Wall.prompt("-\u042d\u044d\u043c... \u0410\u043b\u043b\u043e?\u000a-\u0414\u0436\u0438\u043b\u002c \u044f \u0437\u0434\u0435\u0441\u044c. \u000a-\u041e\u002c \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u043e\u002c \u043d\u043e \u044f \u043a\u043e\u0435-\u0447\u0442\u043e \u043f\u043e\u0447\u0438\u0442\u0430\u043b\u0430 \u043e\u0431  \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0438 \u044d\u0442\u0438 \u043e\u0442\u0437\u044b\u0432\u044b \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u0438. \u000a-\u0414\u0430 \u0437\u043d\u0430\u044e \u044f!...\u000a-\u0422\u044b \u043f\u044b\u0442\u0430\u0435\u0448\u044c\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0430\u0442 \u043f\u0440\u043e\u0442\u0438\u0432 \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430\u002c \u044f \u0437\u043d\u0430\u044e\u002c \u0442\u044b \u0445\u043e\u0447\u0435\u0448\u044c \u043e\u0442\u043e\u043c\u0441\u0442\u0438\u0442\u044c \u043d\u043e \u0442\u0432\u043e\u044f \u0434\u043e...\u000a-\u041f\u043e\u0441\u043b\u0443\u0448\u0430\u0439\u002c \u0435\u0441\u043b\u0438 \u0445\u043e\u0447\u0435\u0448\u044c \u043f\u043e\u043c\u043e\u0447\u044c\u002c \u0441\u043a\u0430\u0436\u0438 \u0447\u0435\u0433\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0435.\u000a-\u0425\u043e\u0440\u043e\u0448\u043e\u002c \u0442\u044b \u0441\u043b\u044b\u0448\u0430\u043b \u043f\u0440\u043e \u043a\u0443\u043a\u043b\u044b. \u041c\u043e\u0439 \u0441\u043e\u0432\u0435\u0442 \u0442\u0435\u0431\u0435\u003a \u0441\u0442\u043e\u0439 \u043d\u0430 \u0441\u0432\u0435\u0442\u0443. \u0412 \u0442\u0435\u043c\u043d\u043e\u0442\u0435 \u0443 \u0442\u0435\u0431\u044f \u043d\u0435\u0442 \u0448\u0430\u043d\u0441\u043e\u0432\u002c \u044f \u0442\u0430\u043a \u0441\u0447\u0438\u0442\u0430\u044e. \u0423 \u0442\u0435\u0431\u044f \u0435\u0441\u0442\u044c \u043a\u0430\u0440\u0442\u0430. \u0422\u044b \u0442\u043e\u0447\u043d\u043e \u0441\u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u043e\u0433\u0443\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0443\u002c \u043d\u043e \u043d\u0443\u0436\u043d\u043e \u043b\u0438. \u041c\u043e\u0436\u0435\u0448\u044c \u043e\u0434\u0435\u0442\u044c \u043c\u0430\u0441\u043a\u0443 \u043c\u0435\u0434\u0432\u0435\u0434\u044f. \u041d\u0430\u0434\u0435\u044e\u0441\u044c\u002c \u0442\u0435\u0431\u044f \u043f\u0440\u0438\u043c\u0443\u0442 \u0437\u0430 \u0441\u0432\u043e\u0435\u0433\u043e.", t_resumeCtx_3);
  return a_c8wOT744UFqC1Q3K$2;
  }
  return a_c8wOT744UFqC1Q3K$1;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$0, 'a_c8wOT744UFqC1Q3K$0');

function a_c8wOT744UFqC1Q3K$2(s) {
  return a_c8wOT744UFqC1Q3K$1;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$2, 'a_c8wOT744UFqC1Q3K$2');

function a_c8wOT744UFqC1Q3K$1(s) {
  if (s.t_elseIf_1) {
  (s.pc = "IpFgTAiMjaAzJP5V");
  var t_call_4 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, true, s));
  ok1(s, t_call_4);
  if (t_call_4) {
  (s.pc = "xLFp3q8uvfn4H9xi");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$4);
  lib.Wall.prompt("-Um... Hello?\u000a-Hello\u002c Jill\u002c I am here. \u000a-Oh\u002c that\u0027s good\u002c but I\u0027ve read something about that place and that news isn\u0027t very good. \u000a-I know! But I nee...\u000a-You want to find something against that place\u002c I know\u002c but it is a bad way of revenge! You daughter will live without lo...\u000a-Listen\u002c if you want to help\u002c tell me some useful.\u000a-Ok\u002c you have heard about animatronics. My advise is that you better stay at light. In shadow you haven\u0027t any chances\u002c I think. On you tablet you can see the map of restaurant. But you can walk on few locations if you want\u002c but I don\u0027t know why. And you can dress up Freddy\u0027s mask. Some animatronics will think that you one of them. ", t_resumeCtx_5);
  return a_c8wOT744UFqC1Q3K$4;
  } else {
  (s.pc = "okoWrWLVJ63Q3RmH");
  null;
  }
  return a_c8wOT744UFqC1Q3K$3;
  }
  return a_c8wOT744UFqC1Q3K$5;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$1, 'a_c8wOT744UFqC1Q3K$1');

function a_c8wOT744UFqC1Q3K$4(s) {
  return a_c8wOT744UFqC1Q3K$3;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$4, 'a_c8wOT744UFqC1Q3K$4');

function a_c8wOT744UFqC1Q3K$3(s) {
  return a_c8wOT744UFqC1Q3K$5;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$3, 'a_c8wOT744UFqC1Q3K$3');

function a_c8wOT744UFqC1Q3K$5(s) {
  (s.pc = "p1u5MXOfd922qP4C");
  (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j = 0);
  s.rt.logDataWrite();
  (s.pc = "hxe3FydaMDXMWlOo");
  (/* officerand */ s.d.$c4THdHvzgAzXqbd9 = 0);
  s.rt.logDataWrite();
  (s.pc = "TUMCkHrLi4Fi9ZLM");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 0);
  s.rt.logDataWrite();
  (s.pc = "fCCW1dD1ah4gRpN1");
  (/* foxyrand */ s.d.$gtvitE5G5LcqAlMF = 0);
  s.rt.logDataWrite();
  (s.pc = "xUBdkp6AgCW8sCn4");
  (/* flashpower */ s.d.$xMYshOcIEGW4RC2E = 15);
  s.rt.logDataWrite();
  (s.pc = "x273H1GoaWkPyZK6");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$perform4 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$6(t_lmbProxy_6(la0), la1) });
  (s.pc = "bVoo4TEZcxznkFQf");
  s.rt.logObjectMutation(null);
  var t_call_7 = (ok1(s, s.$perform4) && lib.Time.run_every(2.6, s.$perform4, s));
  t_call_7;
  (s.pc = "xarZxStENidWhyV3");
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$perform7 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$7(t_lmbProxy_8(la0), la1) });
  (s.pc = "kJhuxR2VZ8HIwW38");
  s.rt.logObjectMutation(null);
  var t_call_9 = (ok1(s, s.$perform7) && lib.Time.run_every(2, s.$perform7, s));
  t_call_9;
  (s.pc = "gc3Ul21bf6lLaVZ1");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$perform8 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$8(t_lmbProxy_10(la0), la1) });
  (s.pc = "Hr1Avm9cZt9aPJfq");
  var t_call_11 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform8) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform8, s));
  t_call_11;
  (s.pc = "z3KKPgKPCberBt1J");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$9);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* freddy's 2 */ s.d.$x254pqFX3FZY6RuY) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* freddy's 2 */ s.d.$x254pqFX3FZY6RuY, t_resumeCtx_12));
  return a_c8wOT744UFqC1Q3K$9;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$5, 'a_c8wOT744UFqC1Q3K$5');

function a_c8wOT744UFqC1Q3K$9(s) {
  (s.pc = "uL4ANHD34qmbf1Ct");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$10);
  var t_call_14 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* table */ s.d.$aXC4vooX5M4S4ugS) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* table */ s.d.$aXC4vooX5M4S4ugS, t_resumeCtx_13));
  return a_c8wOT744UFqC1Q3K$10;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$9, 'a_c8wOT744UFqC1Q3K$9');

function a_c8wOT744UFqC1Q3K$10(s) {
  var t_pauseRes_15 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_15);
  (s.$table = t_pauseRes_15);
  (s.pc = "psEQSpdtOFnhxydB");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.set_width(500, s));
  (s.pc = "DN3QnAdFpfcVTX4P");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.set_pos(500, 320, s));
  (s.pc = "Ei3UV4zRwlR0MSmc");
  var t_call_16 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_rectangle(200, 50, s));
  s.rt.markAllocated(t_call_16);
  (s.$buttonmask = t_call_16);
  (s.pc = "xvTNtlKAU70edMZV");
  var t_call_17 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_rectangle(180, 50, s));
  s.rt.markAllocated(t_call_17);
  (s.$cambutton = t_call_17);
  (s.pc = "dUTMI6wXuAV564Kn");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.set_pos(520, 460, s));
  (s.pc = "VU2xWbdW1Z8fy5QN");
  var t_call_18 = lib.Colors.blue(s);
  s.rt.logObjectMutation(s.$cambutton);
  (ok2(s, s.$cambutton, t_call_18) && s.$cambutton.set_color(t_call_18, s));
  (s.pc = "bruDmDmXXXmgmY5v");
  var t_resumeCtx_19 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$11);
  var t_call_20 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* yellow phone */ s.d.$jBJhN3MEtMlNbtGx) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* yellow phone */ s.d.$jBJhN3MEtMlNbtGx, t_resumeCtx_19));
  return a_c8wOT744UFqC1Q3K$11;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$10, 'a_c8wOT744UFqC1Q3K$10');

function a_c8wOT744UFqC1Q3K$11(s) {
  var t_pauseRes_21 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_21);
  (s.$phonebut = t_pauseRes_21);
  (s.pc = "x6jVnlhcxHyYoZMx");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.set_width(140, s));
  (s.pc = "wQ4A1VZd5o2KO1MF");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.set_pos(700, 120, s));
  (s.pc = "ghKJhtQ8QCgwOix1");
  var t_resumeCtx_22 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$12);
  var t_call_23 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* camoffice */ s.d.$lTuAduJcHc4bp2hi) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* camoffice */ s.d.$lTuAduJcHc4bp2hi, t_resumeCtx_22));
  return a_c8wOT744UFqC1Q3K$12;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$11, 'a_c8wOT744UFqC1Q3K$11');

function a_c8wOT744UFqC1Q3K$12(s) {
  var t_pauseRes_24 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_24);
  (s.$cam_office = t_pauseRes_24);
  (s.pc = "oL2YwXsQF0ORSkYU");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.set_width(270, s));
  (s.pc = "z7AZQaOyOLn4xAus");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.set_pos(665, 95, s));
  (s.pc = "hMj4TD1jJuuZ590G");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  (s.pc = "gKZLFk7cWcAgL1li");
  var t_resumeCtx_25 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$13);
  var t_call_26 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* cam_pc */ s.d.$eKO9JpTvSWkYbmy9) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* cam_pc */ s.d.$eKO9JpTvSWkYbmy9, t_resumeCtx_25));
  return a_c8wOT744UFqC1Q3K$13;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$12, 'a_c8wOT744UFqC1Q3K$12');

function a_c8wOT744UFqC1Q3K$13(s) {
  var t_pauseRes_27 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_27);
  (s.$cam_prco = t_pauseRes_27);
  (s.pc = "HqWBmM4ZxuKgWoNv");
  s.rt.logObjectMutation(s.$cam_prco);
  (ok1(s, s.$cam_prco) && s.$cam_prco.set_width(270, s));
  (s.pc = "Gwv0NXjacdAA1VO6");
  s.rt.logObjectMutation(s.$cam_prco);
  (ok1(s, s.$cam_prco) && s.$cam_prco.set_pos(665, 95, s));
  (s.pc = "KSou34ftUCKZiyvF");
  s.rt.logObjectMutation(s.$cam_prco);
  (ok1(s, s.$cam_prco) && s.$cam_prco.hide(s));
  (s.pc = "JEEvghqZOGxO2X6O");
  var t_call_28 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_rectangle(80, 50, s));
  s.rt.markAllocated(t_call_28);
  (s.$flashlight1 = t_call_28);
  (s.pc = "xm4IgOaE45JlroBB");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.set_pos(390, 460, s));
  (s.pc = "vgRw03oc4fK6UmX4");
  var t_call_29 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_rectangle(100, 50, s));
  s.rt.markAllocated(t_call_29);
  (s.$flashlight2 = t_call_29);
  (s.pc = "eylAqVNvu4fHNaXD");
  s.rt.logObjectMutation(s.$flashlight2);
  (ok1(s, s.$flashlight2) && s.$flashlight2.set_pos(400, 460, s));
  (s.pc = "jit3HNL1elsDh8Nw");
  s.rt.logObjectMutation(s.$flashlight2);
  (ok1(s, s.$flashlight2) && s.$flashlight2.hide(s));
  (s.pc = "MRSTB4yOUsFQuHeZ");
  var t_lmbv_30 = s.$flashlight1;
  var t_lmbv_31 = s.$touch_down;
  var t_lmbv_32 = s.$cam_office;
  var t_lmbv_33 = s.$touch_down1;
  var t_lmbv_34 = s.$touch_up;
  var t_lmbv_35 = s.$touch_down2;
  var t_lmbv_36 = s.$touch_up1;
  var t_lmbv_37 = s.$touch_down3;
  var t_lmbv_38 = s.$touch_up2;
  var t_lmbProxy_39 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$14(t_lmbProxy_39(la0), la1, t_lmbv_30, t_lmbv_31, t_lmbv_32, t_lmbv_33, t_lmbv_34, t_lmbv_35, t_lmbv_36, t_lmbv_37, t_lmbv_38) });
  (s.pc = "xC3gu2I1BraRLE7r");
  var t_call_40 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform, s));
  t_call_40;
  (s.pc = "eMXwn2mZyCOCv4GE");
  var t_lmbv_41 = s.$cam_office;
  var t_lmbv_42 = s.$cambutton;
  var t_lmbv_43 = s.$tapped;
  var t_lmbv_44 = s.$tapped1;
  var t_lmbProxy_45 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$15(t_lmbProxy_45(la0), la1, t_lmbv_41, t_lmbv_42, t_lmbv_43, t_lmbv_44) });
  (s.pc = "JPCl1dXIsjd6Z5kH");
  var t_call_46 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform2) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform2, s));
  t_call_46;
  (s.pc = "b9RO6pWIuxCNP7Dk");
  var t_lmbv_47 = s.$flashlight1;
  var t_lmbv_48 = s.$touch_up3;
  var t_lmbv_49 = s.$touch_up4;
  var t_lmbv_50 = s.$touch_up5;
  var t_lmbProxy_51 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$16(t_lmbProxy_51(la0), la1, t_lmbv_47, t_lmbv_48, t_lmbv_49, t_lmbv_50) });
  (s.pc = "xlRe8vFvmir95yzd");
  var t_call_52 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform3) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform3, s));
  t_call_52;
  (s.pc = "Vw3T7OU0uHondbFr");
  var t_resumeCtx_53 = s.rt.getBlockingResumeCtx(a_c8wOT744UFqC1Q3K$17);
  var t_call_54 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mask */ s.d.$KxmCXJdpHesHIRhG) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* mask */ s.d.$KxmCXJdpHesHIRhG, t_resumeCtx_53));
  return a_c8wOT744UFqC1Q3K$17;
}
cs.registerStep(a_c8wOT744UFqC1Q3K$13, 'a_c8wOT744UFqC1Q3K$13');

function a_c8wOT744UFqC1Q3K$17(s) {
  var t_pauseRes_55 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_55);
  (s.$freddysmask = t_pauseRes_55);
  (s.pc = "epG1HjWoJiNv48L0");
  s.rt.logObjectMutation(s.$freddysmask);
  (ok1(s, s.$freddysmask) && s.$freddysmask.hide(s));
  (s.pc = "xIgyUWRzbZUtuVkY");
  s.rt.logObjectMutation(s.$buttonmask);
  (ok1(s, s.$buttonmask) && s.$buttonmask.set_pos(270, 460, s));
  (s.pc = "pRXqYFyEWoXQ5dG6");
  var t_call_56 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$buttonmask);
  (ok2(s, s.$buttonmask, t_call_56) && s.$buttonmask.set_color(t_call_56, s));
  (s.pc = "QvYPlKDr9OnEP6G1");
  var t_lmbv_57 = s.$freddysmask;
  var t_lmbv_58 = s.$cambutton;
  var t_lmbv_59 = s.$flashlight1;
  var t_lmbv_60 = s.$phonebut;
  var t_lmbProxy_61 = s.libs.mkLambdaProxy;
  (s.$touch_up21 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$18(t_lmbProxy_61(la0), la1, la2, la3, t_lmbv_57, t_lmbv_58, t_lmbv_59, t_lmbv_60) });
  (s.pc = "xk4sDNtXrIyu3WP4");
  var t_call_62 = (ok2(s, s.$buttonmask, s.$touch_up21) && s.$buttonmask.on_touch_up(s.$touch_up21, s));
  t_call_62;
  (s.pc = "CC43rSbsV5AidRIT");
  var t_lmbv_63 = s.$flashlight1;
  var t_lmbv_64 = s.$cambutton;
  var t_lmbv_65 = s.$phonebut;
  var t_lmbv_66 = s.$freddysmask;
  var t_lmbv_67 = s.$perform6;
  var t_lmbv_68 = s.$buttonmask;
  var t_lmbv_69 = s.$table;
  var t_lmbProxy_70 = s.libs.mkLambdaProxy;
  (s.$perform5 = function(la0, la1) { return a_a_c8wOT744UFqC1Q3K$19(t_lmbProxy_70(la0), la1, t_lmbv_63, t_lmbv_64, t_lmbv_65, t_lmbv_66, t_lmbv_67, t_lmbv_68, t_lmbv_69) });
  (s.pc = "PpUyw2TygIUNHsto");
  var t_call_71 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform5) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform5, s));
  t_call_71;
  (s.pc = "ZaxNFLPZrrF8jtee");
  var t_lmbv_72 = s.$freddysmask;
  var t_lmbv_73 = s.$cambutton;
  var t_lmbv_74 = s.$flashlight1;
  var t_lmbProxy_75 = s.libs.mkLambdaProxy;
  (s.$touch_down21 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$20(t_lmbProxy_75(la0), la1, la2, la3, t_lmbv_72, t_lmbv_73, t_lmbv_74) });
  (s.pc = "xoPGnqEDyABBTzbB");
  var t_call_76 = (ok2(s, s.$buttonmask, s.$touch_down21) && s.$buttonmask.on_touch_down(s.$touch_down21, s));
  t_call_76;
  (s.pc = "xJYqp5Jlkf3546px");
  var t_lmbv_77 = s.$table;
  var t_lmbv_78 = s.$cam_office;
  var t_lmbv_79 = s.$cam_prco;
  var t_lmbv_80 = s.$flashlight1;
  var t_lmbv_81 = s.$buttonmask;
  var t_lmbv_82 = s.$flashlight2;
  var t_lmbProxy_83 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$21(t_lmbProxy_83(la0), la1, la2, la3, t_lmbv_77, t_lmbv_78, t_lmbv_79, t_lmbv_80, t_lmbv_81, t_lmbv_82) });
  (s.pc = "vvZMcWv1vK1AWejU");
  var t_call_84 = (ok2(s, s.$cam_office, s.$tapped2) && s.$cam_office.on_tap(s.$tapped2, s));
  t_call_84;
  (s.pc = "AJSwSwNT9By2ufvP");
  var t_lmbv_85 = s.$table;
  var t_lmbv_86 = s.$cam_prco;
  var t_lmbv_87 = s.$cam_office;
  var t_lmbv_88 = s.$flashlight1;
  var t_lmbv_89 = s.$buttonmask;
  var t_lmbv_90 = s.$flashlight2;
  var t_lmbProxy_91 = s.libs.mkLambdaProxy;
  (s.$tapped3 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$22(t_lmbProxy_91(la0), la1, la2, la3, t_lmbv_85, t_lmbv_86, t_lmbv_87, t_lmbv_88, t_lmbv_89, t_lmbv_90) });
  (s.pc = "gq2R5I38MyYtLYHu");
  var t_call_92 = (ok2(s, s.$cam_prco, s.$tapped3) && s.$cam_prco.on_tap(s.$tapped3, s));
  t_call_92;
  (s.pc = "iz2mqoQ5jPToKhUV");
  var t_lmbProxy_93 = s.libs.mkLambdaProxy;
  (s.$touch_down31 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$23(t_lmbProxy_93(la0), la1, la2, la3) });
  (s.pc = "rAZrfhQX0OKA69V4");
  var t_call_94 = (ok2(s, s.$flashlight2, s.$touch_down31) && s.$flashlight2.on_touch_down(s.$touch_down31, s));
  t_call_94;
  (s.pc = "skRrzrBHUyuId0gd");
  var t_lmbProxy_95 = s.libs.mkLambdaProxy;
  (s.$touch_down32 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$24(t_lmbProxy_95(la0), la1, la2, la3) });
  (s.pc = "SJGOsQmxwHPxgSt7");
  var t_call_96 = (ok2(s, s.$flashlight2, s.$touch_down32) && s.$flashlight2.on_touch_up(s.$touch_down32, s));
  t_call_96;
  (s.pc = "ARiFujgIN79rcNuR");
  var t_lmbProxy_97 = s.libs.mkLambdaProxy;
  (s.$tapped4 = function(la0, la1, la2, la3) { return a_a_c8wOT744UFqC1Q3K$25(t_lmbProxy_97(la0), la1, la2, la3) });
  (s.pc = "xzwlftBTE6i6MHgd");
  var t_call_98 = (ok2(s, s.$phonebut, s.$tapped4) && s.$phonebut.on_tap(s.$tapped4, s));
  t_call_98;
  return s.rt.leave();
}
cs.registerStep(a_c8wOT744UFqC1Q3K$17, 'a_c8wOT744UFqC1Q3K$17');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::6 */
function a_a_c8wOT744UFqC1Q3K$6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$6$0;
  s.name = "night_1";
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a6", "a_c8wOT744UFqC1Q3K$6", a_a_c8wOT744UFqC1Q3K$6, true);

function a_a_c8wOT744UFqC1Q3K$6$0(s) {
  (s.pc = "GSr4KguznHMXN9yB");
  var t_call_0 = lib.Math_.random_range(0, 18, s);
  (/* foxyrand */ s.d.$gtvitE5G5LcqAlMF = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "SS68E4Cykzm1qKBR");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$6$1);
  (ok1(s, /* sound */ s.d.$OmiVbAWQlk0n4mrs) && /* sound */ s.d.$OmiVbAWQlk0n4mrs.play(t_resumeCtx_1));
  return a_a_c8wOT744UFqC1Q3K$6$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$6$0, 'a_a_c8wOT744UFqC1Q3K$6$0');

function a_a_c8wOT744UFqC1Q3K$6$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$6$1, 'a_a_c8wOT744UFqC1Q3K$6$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::7 */
function a_a_c8wOT744UFqC1Q3K$7(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$7$0;
  s.name = "night_1";
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a7", "a_c8wOT744UFqC1Q3K$7", a_a_c8wOT744UFqC1Q3K$7, true);

function a_a_c8wOT744UFqC1Q3K$7$0(s) {
  (s.pc = "kmo2DXLX3rjjhlb2");
  var t_infix_0 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 + 1));
  (/* officerand */ s.d.$c4THdHvzgAzXqbd9 = t_infix_0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$7$0, 'a_a_c8wOT744UFqC1Q3K$7$0');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::8 */
function a_a_c8wOT744UFqC1Q3K$8(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$8$0;
  s.name = "night_1";
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a8", "a_c8wOT744UFqC1Q3K$8", a_a_c8wOT744UFqC1Q3K$8, true);

function a_a_c8wOT744UFqC1Q3K$8$0(s) {
  (s.pc = "rqPYhWw3G1TH7rR4");
  var t_infix_0 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd + 0.3));
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = t_infix_0);
  s.rt.logDataWrite();
  (s.pc = "EcRybC7286RQt1pu");
  var t_infix_1 = (ok1(s, /* hallrand */ s.d.$KWeDAG9hhFxa3K5j) && (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j + 0.3));
  (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j = t_infix_1);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$8$0, 'a_a_c8wOT744UFqC1Q3K$8$0');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::14 */
function a_a_c8wOT744UFqC1Q3K$14(previous, returnAddr, $flashlight1, $touch_down, $cam_office, $touch_down1, $touch_up, $touch_down2, $touch_up1, $touch_down3, $touch_up2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$14$0;
  s.name = "night_1";
  s.$flashlight1 = $flashlight1;
  s.$touch_down = $touch_down;
  s.$cam_office = $cam_office;
  s.$touch_down1 = $touch_down1;
  s.$touch_up = $touch_up;
  s.$touch_down2 = $touch_down2;
  s.$touch_up1 = $touch_up1;
  s.$touch_down3 = $touch_down3;
  s.$touch_up2 = $touch_up2;
  s.$x = undefined;
  s.$y = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$x3 = undefined;
  s.$y3 = undefined;
  s.$x4 = undefined;
  s.$y4 = undefined;
  s.$x5 = undefined;
  s.$y5 = undefined;
  s.$x6 = undefined;
  s.$y6 = undefined;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14", "a_c8wOT744UFqC1Q3K$14", a_a_c8wOT744UFqC1Q3K$14, true);

function a_a_c8wOT744UFqC1Q3K$14$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "mzdaTmL0KG4oqlPs");
  var t_infix_1 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd < 9));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "Btfv4wlwBtdryM8c");
  var t_lmbv_2 = s.$cam_office;
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$touch_down = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$2(t_lmbProxy_3(la0), la1, la2, la3, t_lmbv_2) });
  (s.pc = "ZDwyo74JgIxy5pBA");
  var t_call_4 = (ok2(s, s.$flashlight1, s.$touch_down) && s.$flashlight1.on_touch_down(s.$touch_down, s));
  t_call_4;
  } else {
  (s.pc = "npmHTjVYYEQOa1Hb");
  null;
  }
  var t_elseIf_5 = true;
  (s.pc = "xtMePXKI4rcbjsRG");
  var t_infix_6 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd >= 9));
  var t_lazy_7 = t_infix_6;
  if ((ok1(s, t_lazy_7) && t_lazy_7)) {
  var t_infix_8 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd <= 12));
  (t_lazy_7 = t_infix_8);
  }
  ok1(s, t_lazy_7);
  if (t_lazy_7) {
  (s.pc = "mIpCG70pnSff4CrK");
  var t_lmbv_9 = s.$cam_office;
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$touch_down1 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$5(t_lmbProxy_10(la0), la1, la2, la3, t_lmbv_9) });
  (s.pc = "C44rgR8K724deOzf");
  var t_call_11 = (ok2(s, s.$flashlight1, s.$touch_down1) && s.$flashlight1.on_touch_down(s.$touch_down1, s));
  t_call_11;
  (s.pc = "VnFC4VgihkjhiMlY");
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$touch_up = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$6(t_lmbProxy_12(la0), la1, la2, la3) });
  (s.pc = "XZ31qH79uYDi8gjA");
  var t_call_13 = (ok2(s, s.$flashlight1, s.$touch_up) && s.$flashlight1.on_touch_up(s.$touch_up, s));
  t_call_13;
  } else {
  (s.pc = "OxdUwkAFcf85PAVs");
  null;
  }
  var t_elseIf_14 = true;
  (s.pc = "He3TfcAeMG63I9N4");
  var t_infix_15 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd === 13));
  ok1(s, t_infix_15);
  if (t_infix_15) {
  (s.pc = "owjfvEDrwexKUom6");
  var t_lmbv_16 = s.$cam_office;
  var t_lmbProxy_17 = s.libs.mkLambdaProxy;
  (s.$touch_down2 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$8(t_lmbProxy_17(la0), la1, la2, la3, t_lmbv_16) });
  (s.pc = "Za3T6g517213I0MU");
  var t_call_18 = (ok2(s, s.$flashlight1, s.$touch_down2) && s.$flashlight1.on_touch_down(s.$touch_down2, s));
  t_call_18;
  (s.pc = "c2etlDlgBqdEXv7V");
  var t_lmbProxy_19 = s.libs.mkLambdaProxy;
  (s.$touch_up1 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$9(t_lmbProxy_19(la0), la1, la2, la3) });
  (s.pc = "I9c24CfPx3sLyxOT");
  var t_call_20 = (ok2(s, s.$flashlight1, s.$touch_up1) && s.$flashlight1.on_touch_up(s.$touch_up1, s));
  t_call_20;
  } else {
  (s.pc = "YebJ4rxC0HxA1VyI");
  null;
  }
  var t_elseIf_21 = true;
  (s.pc = "bW0rdIRNRrxr2uos");
  var t_infix_22 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd >= 14));
  var t_lazy_23 = t_infix_22;
  if ((ok1(s, t_lazy_23) && t_lazy_23)) {
  var t_infix_24 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd <= 16));
  (t_lazy_23 = t_infix_24);
  }
  ok1(s, t_lazy_23);
  if (t_lazy_23) {
  (s.pc = "rUr5V4muiXNfw06K");
  var t_lmbv_25 = s.$cam_office;
  var t_lmbProxy_26 = s.libs.mkLambdaProxy;
  (s.$touch_down3 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$12(t_lmbProxy_26(la0), la1, la2, la3, t_lmbv_25) });
  (s.pc = "xUYPPt72t3P9sPee");
  var t_call_27 = (ok2(s, s.$flashlight1, s.$touch_down3) && s.$flashlight1.on_touch_down(s.$touch_down3, s));
  t_call_27;
  (s.pc = "dbR7YqNk0yNCmY4C");
  var t_lmbProxy_28 = s.libs.mkLambdaProxy;
  (s.$touch_up2 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$14$13(t_lmbProxy_28(la0), la1, la2, la3) });
  (s.pc = "Rq7DUWKwLUAWK4GU");
  var t_call_29 = (ok2(s, s.$flashlight1, s.$touch_up2) && s.$flashlight1.on_touch_up(s.$touch_up2, s));
  t_call_29;
  } else {
  (s.pc = "R4fY892G5gTd44rE");
  null;
  }
  var t_elseIf_30 = true;
  (s.pc = "a2bdv58jDi24PYzA");
  var t_infix_31 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd === 17));
  ok1(s, t_infix_31);
  if (t_infix_31) {
  (s.pc = "efDj2HYLT1Xafgq5");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 0);
  s.rt.logDataWrite();
  } else {
  (s.pc = "xXBvKzcDDfOeCKvT");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$14$0, 'a_a_c8wOT744UFqC1Q3K$14$0');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::15 */
function a_a_c8wOT744UFqC1Q3K$15(previous, returnAddr, $cam_office, $cambutton, $tapped, $tapped1) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$15$0;
  s.name = "night_1";
  s.$cam_office = $cam_office;
  s.$cambutton = $cambutton;
  s.$tapped = $tapped;
  s.$tapped1 = $tapped1;
  s.$x = undefined;
  s.$y = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a15", "a_c8wOT744UFqC1Q3K$15", a_a_c8wOT744UFqC1Q3K$15, true);

function a_a_c8wOT744UFqC1Q3K$15$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ebb39rTT2ynTt8u1");
  var t_call_1 = (ok1(s, s.$cam_office) && s.$cam_office.is_visible(s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "CEQiP5jU57ajrGUw");
  var t_lmbv_3 = s.$cam_office;
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$15$2(t_lmbProxy_4(la0), la1, la2, la3, t_lmbv_3) });
  (s.pc = "S7BRzO2NwGLdajek");
  var t_call_5 = (ok2(s, s.$cambutton, s.$tapped) && s.$cambutton.on_tap(s.$tapped, s));
  t_call_5;
  } else {
  (s.pc = "H2CDLWGfZaY5CVGm");
  null;
  }
  var t_elseIf_6 = true;
  (s.pc = "xfTQG1Mo4PIhg8Y2");
  var t_call_7 = (ok1(s, s.$cam_office) && s.$cam_office.is_visible(s));
  ok1(s, t_call_7);
  if (t_call_7) {
  (s.pc = "cAYVhjEfQnRnzV3w");
  var t_lmbv_8 = s.$cam_office;
  var t_lmbProxy_9 = s.libs.mkLambdaProxy;
  (s.$tapped1 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$15$4(t_lmbProxy_9(la0), la1, la2, la3, t_lmbv_8) });
  (s.pc = "yHO3PI95viLz5TSo");
  var t_call_10 = (ok2(s, s.$cambutton, s.$tapped1) && s.$cambutton.on_tap(s.$tapped1, s));
  t_call_10;
  } else {
  (s.pc = "aHvT6ekHne4Y7ZWK");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$15$0, 'a_a_c8wOT744UFqC1Q3K$15$0');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::16 */
function a_a_c8wOT744UFqC1Q3K$16(previous, returnAddr, $flashlight1, $touch_up, $touch_up1, $touch_up2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$16$0;
  s.name = "night_1";
  s.$flashlight1 = $flashlight1;
  s.$touch_up = $touch_up;
  s.$touch_up1 = $touch_up1;
  s.$touch_up2 = $touch_up2;
  s.$x = undefined;
  s.$y = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a16", "a_c8wOT744UFqC1Q3K$16", a_a_c8wOT744UFqC1Q3K$16, true);

function a_a_c8wOT744UFqC1Q3K$16$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xCw2n6RS40NaiOzv");
  var t_infix_1 = (ok1(s, /* hallrand */ s.d.$KWeDAG9hhFxa3K5j) && (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j < 10));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "Pgc5oxmsgwotWu8E");
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$touch_up = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$16$2(t_lmbProxy_2(la0), la1, la2, la3) });
  (s.pc = "hZUg2n8ezyO5rRPR");
  var t_call_3 = (ok2(s, s.$flashlight1, s.$touch_up) && s.$flashlight1.on_touch_up(s.$touch_up, s));
  t_call_3;
  } else {
  (s.pc = "xw269RNSRSAYicHg");
  null;
  }
  var t_elseIf_4 = true;
  (s.pc = "p87LLttPB8qzQuF8");
  var t_infix_5 = (ok1(s, /* hallrand */ s.d.$KWeDAG9hhFxa3K5j) && (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j === 10));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "GHiDYB93GyXxvZZJ");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$touch_up1 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$16$4(t_lmbProxy_6(la0), la1, la2, la3) });
  (s.pc = "LU8R94GNkRL8APId");
  var t_call_7 = (ok2(s, s.$flashlight1, s.$touch_up1) && s.$flashlight1.on_touch_up(s.$touch_up1, s));
  t_call_7;
  } else {
  (s.pc = "j5qTi2yFAdsdJbJ4");
  null;
  }
  var t_elseIf_8 = true;
  (s.pc = "BG3LA8s2nUIhcYWr");
  var t_infix_9 = (ok1(s, /* hallrand */ s.d.$KWeDAG9hhFxa3K5j) && (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j === 11));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "AzZLseveqJ5vQjBO");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$touch_up2 = function(la0, la1, la2, la3) { return a_a_a_c8wOT744UFqC1Q3K$16$6(t_lmbProxy_10(la0), la1, la2, la3) });
  (s.pc = "yVLfHDStaHsyJpIY");
  var t_call_11 = (ok2(s, s.$flashlight1, s.$touch_up2) && s.$flashlight1.on_touch_up(s.$touch_up2, s));
  t_call_11;
  } else {
  (s.pc = "Vbi0Fef12rI0S3Wr");
  null;
  }
  var t_elseIf_12 = true;
  (s.pc = "C5KWGe4RT5JfbvN0");
  var t_infix_13 = (ok1(s, /* hallrand */ s.d.$KWeDAG9hhFxa3K5j) && (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j === 12));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "Qldg2KZf4LW9pCGO");
  (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j = 1);
  s.rt.logDataWrite();
  } else {
  (s.pc = "M6m0eKit5pb0pQVT");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$16$0, 'a_a_c8wOT744UFqC1Q3K$16$0');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::18 */
function a_a_c8wOT744UFqC1Q3K$18(previous, returnAddr, $x, $y, $freddysmask, $cambutton, $flashlight1, $phonebut) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$18$0;
  s.name = "night_1";
  s.$freddysmask = $freddysmask;
  s.$cambutton = $cambutton;
  s.$flashlight1 = $flashlight1;
  s.$phonebut = $phonebut;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a18", "a_c8wOT744UFqC1Q3K$18", a_a_c8wOT744UFqC1Q3K$18, true);

function a_a_c8wOT744UFqC1Q3K$18$0(s) {
  (s.pc = "xJuY6hJExrLtYH6Y");
  (/* hallrand */ s.d.$KWeDAG9hhFxa3K5j = 1);
  s.rt.logDataWrite();
  (s.pc = "xOsTbYmIdOE2f1ww");
  (/* officerand */ s.d.$c4THdHvzgAzXqbd9 = 2);
  s.rt.logDataWrite();
  (s.pc = "Qh9jCbr5jM6IImL3");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$18$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* freddy's 2 */ s.d.$x254pqFX3FZY6RuY) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* freddy's 2 */ s.d.$x254pqFX3FZY6RuY, t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$18$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$18$0, 'a_a_c8wOT744UFqC1Q3K$18$0');

function a_a_c8wOT744UFqC1Q3K$18$1(s) {
  (s.pc = "F11TbMu8ZEaxpkKd");
  s.rt.logObjectMutation(s.$freddysmask);
  (ok1(s, s.$freddysmask) && s.$freddysmask.hide(s));
  (s.pc = "x6dLiQneeI8HmVd3");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.show(s));
  (s.pc = "o02IZ1CMffEh2Cd4");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.show(s));
  (s.pc = "ShxKBaWwOnhV2gLy");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$18$1, 'a_a_c8wOT744UFqC1Q3K$18$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::19 */
function a_a_c8wOT744UFqC1Q3K$19(previous, returnAddr, $flashlight1, $cambutton, $phonebut, $freddysmask, $perform6, $buttonmask, $table) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$19$0;
  s.name = "night_1";
  s.$flashlight1 = $flashlight1;
  s.$cambutton = $cambutton;
  s.$phonebut = $phonebut;
  s.$freddysmask = $freddysmask;
  s.$perform6 = $perform6;
  s.$buttonmask = $buttonmask;
  s.$table = $table;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a19", "a_c8wOT744UFqC1Q3K$19", a_a_c8wOT744UFqC1Q3K$19, true);

function a_a_c8wOT744UFqC1Q3K$19$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "A64h04Y0kTBMikCU");
  var t_infix_1 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 >= 20));
  var t_lazy_2 = t_infix_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_infix_3 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 < 22));
  (t_lazy_2 = t_infix_3);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "lCWWU7Z6vqPSAr3T");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$19$3);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* oldbonnieoffice */ s.d.$tnvtHu6IQbeBcGFZ) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* oldbonnieoffice */ s.d.$tnvtHu6IQbeBcGFZ, t_resumeCtx_4));
  return a_a_c8wOT744UFqC1Q3K$19$3;
  } else {
  (s.pc = "OlsBzNVA2tP2eELb");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$19$2;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$0, 'a_a_c8wOT744UFqC1Q3K$19$0');

function a_a_c8wOT744UFqC1Q3K$19$3(s) {
  (s.pc = "jo2jOMAL7zkT5NWG");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.hide(s));
  (s.pc = "ZiAmOqEp4Hpffgn2");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.hide(s));
  (s.pc = "hiL2eG4NZPoZ5n4m");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.hide(s));
  return a_a_c8wOT744UFqC1Q3K$19$2;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$3, 'a_a_c8wOT744UFqC1Q3K$19$3');

function a_a_c8wOT744UFqC1Q3K$19$2(s) {
  var t_elseIf_5 = true;
  (s.pc = "OQ0BBSq4X0HnGs6R");
  var t_infix_6 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 >= 23));
  var t_lazy_7 = t_infix_6;
  if ((ok1(s, t_lazy_7) && t_lazy_7)) {
  var t_infix_8 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 < 24));
  (t_lazy_7 = t_infix_8);
  }
  ok1(s, t_lazy_7);
  if (t_lazy_7) {
  (s.pc = "DRwWjBrsWihAnq1G");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$19$6);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* oldchikaoffice */ s.d.$eY68WNtKXNWd7itH) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* oldchikaoffice */ s.d.$eY68WNtKXNWd7itH, t_resumeCtx_9));
  return a_a_c8wOT744UFqC1Q3K$19$6;
  } else {
  (s.pc = "xtuKK34plL9icZJf");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$19$5;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$2, 'a_a_c8wOT744UFqC1Q3K$19$2');

function a_a_c8wOT744UFqC1Q3K$19$6(s) {
  (s.pc = "xBILq9gpkxdeO25m");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.hide(s));
  (s.pc = "x4aFEEQiM0WoAO2O");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.hide(s));
  (s.pc = "S2EORRhVawkraNoX");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.hide(s));
  return a_a_c8wOT744UFqC1Q3K$19$5;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$6, 'a_a_c8wOT744UFqC1Q3K$19$6');

function a_a_c8wOT744UFqC1Q3K$19$5(s) {
  var t_elseIf_10 = true;
  (s.pc = "Uw1mwvBgjinPr4nR");
  var t_infix_11 = (ok1(s, /* officerand */ s.d.$c4THdHvzgAzXqbd9) && (/* officerand */ s.d.$c4THdHvzgAzXqbd9 >= 24));
  var t_lazy_12 = t_infix_11;
  if ((ok1(s, t_lazy_12) && t_lazy_12)) {
  var t_call_13 = (ok1(s, s.$freddysmask) && s.$freddysmask.is_visible(s));
  var t_call_14 = (ok1(s, t_call_13) && lib.Boolean_.not(t_call_13, s));
  (t_lazy_12 = t_call_14);
  }
  ok1(s, t_lazy_12);
  if (t_lazy_12) {
  (s.pc = "onVIEGD3tE0J3rvx");
  var t_lmbv_15 = s.$flashlight1;
  var t_lmbv_16 = s.$buttonmask;
  var t_lmbv_17 = s.$cambutton;
  var t_lmbv_18 = s.$phonebut;
  var t_lmbv_19 = s.$table;
  var t_lmbProxy_20 = s.libs.mkLambdaProxy;
  (s.$perform6 = function(la0, la1) { return a_a_a_c8wOT744UFqC1Q3K$19$9(t_lmbProxy_20(la0), la1, t_lmbv_15, t_lmbv_16, t_lmbv_17, t_lmbv_18, t_lmbv_19) });
  (s.pc = "x5gFZTB1HAD4WIb4");
  s.rt.logObjectMutation(null);
  var t_call_21 = (ok1(s, s.$perform6) && lib.Time.on_every_frame(s.$perform6, s));
  t_call_21;
  } else {
  (s.pc = "xNKT147lIO01u5yk");
  null;
  }
  var t_elseIf_22 = true;
  (s.pc = "Magm5WP7b5nwp5jF");
  var t_infix_23 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd >= 10));
  var t_lazy_24 = t_infix_23;
  if ((ok1(s, t_lazy_24) && t_lazy_24)) {
  var t_infix_25 = (ok1(s, /* toysrand */ s.d.$o6bMzTGaumJU5jZd) && (/* toysrand */ s.d.$o6bMzTGaumJU5jZd <= 13));
  (t_lazy_24 = t_infix_25);
  }
  var t_lazy_26 = t_lazy_24;
  if ((ok1(s, t_lazy_26) && t_lazy_26)) {
  var t_infix_27 = (ok1(s, /* foxyrand */ s.d.$gtvitE5G5LcqAlMF) && (/* foxyrand */ s.d.$gtvitE5G5LcqAlMF > 10));
  (t_lazy_26 = t_infix_27);
  }
  var t_lazy_28 = t_lazy_26;
  if ((ok1(s, t_lazy_28) && t_lazy_28)) {
  var t_infix_29 = (ok1(s, /* foxyrand */ s.d.$gtvitE5G5LcqAlMF) && (/* foxyrand */ s.d.$gtvitE5G5LcqAlMF <= 13));
  (t_lazy_28 = t_infix_29);
  }
  ok1(s, t_lazy_28);
  if (t_lazy_28) {
  (s.pc = "xg2JroDyhVQ6xCna");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_30 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$19$14);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* foxyjump */ s.d.$bTXv4PmceUGSZbyu) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* foxyjump */ s.d.$bTXv4PmceUGSZbyu, t_resumeCtx_30));
  return a_a_c8wOT744UFqC1Q3K$19$14;
  } else {
  (s.pc = "bvvhGaJ5brcRa6EA");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$19$13;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$5, 'a_a_c8wOT744UFqC1Q3K$19$5');

function a_a_c8wOT744UFqC1Q3K$19$14(s) {
  (s.pc = "BldtOuMzfSB4PddS");
  var t_resumeCtx_31 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$19$15);
  (ok1(s, /* scream */ s.d.$gPGJvX5v92ZTNov6) && /* scream */ s.d.$gPGJvX5v92ZTNov6.play(t_resumeCtx_31));
  return a_a_c8wOT744UFqC1Q3K$19$15;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$14, 'a_a_c8wOT744UFqC1Q3K$19$14');

function a_a_c8wOT744UFqC1Q3K$19$13(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$13, 'a_a_c8wOT744UFqC1Q3K$19$13');

function a_a_c8wOT744UFqC1Q3K$19$15(s) {
  (s.pc = "yuo8TJl8mq6jYsLb");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.delete_(s));
  (s.pc = "JfigjxQf0kms9LWM");
  s.rt.logObjectMutation(s.$buttonmask);
  (ok1(s, s.$buttonmask) && s.$buttonmask.delete_(s));
  (s.pc = "x7qn2IyKaCVHC49i");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.delete_(s));
  (s.pc = "qGYHMV0aw9K27rCu");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.delete_(s));
  (s.pc = "x8s1LVTh5pWR3wuu");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.delete_(s));
  return a_a_c8wOT744UFqC1Q3K$19$13;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$19$15, 'a_a_c8wOT744UFqC1Q3K$19$15');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::20 */
function a_a_c8wOT744UFqC1Q3K$20(previous, returnAddr, $x, $y, $freddysmask, $cambutton, $flashlight1) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$20$0;
  s.name = "night_1";
  s.$freddysmask = $freddysmask;
  s.$cambutton = $cambutton;
  s.$flashlight1 = $flashlight1;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a20", "a_c8wOT744UFqC1Q3K$20", a_a_c8wOT744UFqC1Q3K$20, true);

function a_a_c8wOT744UFqC1Q3K$20$0(s) {
  (s.pc = "pPuludR24zw05ICF");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$20$1);
  (ok1(s, /* breath */ s.d.$Ynp3klW44k0xwzJ2) && /* breath */ s.d.$Ynp3klW44k0xwzJ2.play(t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$20$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$20$0, 'a_a_c8wOT744UFqC1Q3K$20$0');

function a_a_c8wOT744UFqC1Q3K$20$1(s) {
  (s.pc = "ln6UiAn3UrB4FKtY");
  s.rt.logObjectMutation(s.$freddysmask);
  (ok1(s, s.$freddysmask) && s.$freddysmask.show(s));
  (s.pc = "wCTiyLv8m0qOSUe6");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.hide(s));
  (s.pc = "xjbXJEcAS8z5Mw6d");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$20$1, 'a_a_c8wOT744UFqC1Q3K$20$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::21 */
function a_a_c8wOT744UFqC1Q3K$21(previous, returnAddr, $x, $y, $table, $cam_office, $cam_prco, $flashlight1, $buttonmask, $flashlight2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$21$0;
  s.name = "night_1";
  s.$table = $table;
  s.$cam_office = $cam_office;
  s.$cam_prco = $cam_prco;
  s.$flashlight1 = $flashlight1;
  s.$buttonmask = $buttonmask;
  s.$flashlight2 = $flashlight2;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a21", "a_c8wOT744UFqC1Q3K$21", a_a_c8wOT744UFqC1Q3K$21, true);

function a_a_c8wOT744UFqC1Q3K$21$0(s) {
  (s.pc = "xPT3N5BPx77WxCqp");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$21$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* prizecorner */ s.d.$xk1xNhA2LVVAYEhl) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* prizecorner */ s.d.$xk1xNhA2LVVAYEhl, t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$21$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$21$0, 'a_a_c8wOT744UFqC1Q3K$21$0');

function a_a_c8wOT744UFqC1Q3K$21$1(s) {
  (s.pc = "qIGnv2EQtmheP9rB");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.hide(s));
  (s.pc = "TCQV125OGsQJveX8");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  (s.pc = "TEKmLTg2DAdG22Su");
  s.rt.logObjectMutation(s.$cam_prco);
  (ok1(s, s.$cam_prco) && s.$cam_prco.show(s));
  (s.pc = "une1pJnqnrxEla44");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.hide(s));
  (s.pc = "xg55sUOzNN2ksJhr");
  s.rt.logObjectMutation(s.$buttonmask);
  (ok1(s, s.$buttonmask) && s.$buttonmask.hide(s));
  (s.pc = "j1AJx7o2bcLis2Lf");
  s.rt.logObjectMutation(s.$flashlight2);
  (ok1(s, s.$flashlight2) && s.$flashlight2.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$21$1, 'a_a_c8wOT744UFqC1Q3K$21$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::22 */
function a_a_c8wOT744UFqC1Q3K$22(previous, returnAddr, $x, $y, $table, $cam_prco, $cam_office, $flashlight1, $buttonmask, $flashlight2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$22$0;
  s.name = "night_1";
  s.$table = $table;
  s.$cam_prco = $cam_prco;
  s.$cam_office = $cam_office;
  s.$flashlight1 = $flashlight1;
  s.$buttonmask = $buttonmask;
  s.$flashlight2 = $flashlight2;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a22", "a_c8wOT744UFqC1Q3K$22", a_a_c8wOT744UFqC1Q3K$22, true);

function a_a_c8wOT744UFqC1Q3K$22$0(s) {
  (s.pc = "xatB602a999ijaxe");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$22$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* freddy's 2 */ s.d.$x254pqFX3FZY6RuY) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* freddy's 2 */ s.d.$x254pqFX3FZY6RuY, t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$22$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$22$0, 'a_a_c8wOT744UFqC1Q3K$22$0');

function a_a_c8wOT744UFqC1Q3K$22$1(s) {
  (s.pc = "ojMWhtVZoyAG6EBz");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.show(s));
  (s.pc = "e4bffyVdHmjuLEZL");
  s.rt.logObjectMutation(s.$cam_prco);
  (ok1(s, s.$cam_prco) && s.$cam_prco.hide(s));
  (s.pc = "puP4VwfDGtK4OtWm");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.show(s));
  (s.pc = "VVj2FMvNPlJqgVoc");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.show(s));
  (s.pc = "giCCKNcLLdGrFo7Y");
  s.rt.logObjectMutation(s.$buttonmask);
  (ok1(s, s.$buttonmask) && s.$buttonmask.show(s));
  (s.pc = "Y4wBXI5b0ZcqNDUT");
  s.rt.logObjectMutation(s.$flashlight2);
  (ok1(s, s.$flashlight2) && s.$flashlight2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$22$1, 'a_a_c8wOT744UFqC1Q3K$22$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::23 */
function a_a_c8wOT744UFqC1Q3K$23(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$23$0;
  s.name = "night_1";
  s.$shb = undefined;
  s.$bunny = undefined;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a23", "a_c8wOT744UFqC1Q3K$23", a_a_c8wOT744UFqC1Q3K$23, true);

function a_a_c8wOT744UFqC1Q3K$23$0(s) {
  (s.pc = "xciSIpzE1TsBB3aD");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$23$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* prizecornerlight */ s.d.$VC7zkBzi0Ggkg42M) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* prizecornerlight */ s.d.$VC7zkBzi0Ggkg42M, t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$23$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$23$0, 'a_a_c8wOT744UFqC1Q3K$23$0');

function a_a_c8wOT744UFqC1Q3K$23$1(s) {
  (s.pc = "nY6PgGUPcE2yAyAj");
  var t_call_1 = lib.Math_.random_range(0, 100, s);
  (s.$shb = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "ijhvAI92gzkWCGaQ");
  var t_infix_3 = (ok1(s, s.$shb) && (s.$shb >= 90));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "rnw22VUGVclSlj0Y");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$23$3);
  var t_call_5 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* shadowbunny */ s.d.$n8A3sOrjWOZE166j) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_picture(/* shadowbunny */ s.d.$n8A3sOrjWOZE166j, t_resumeCtx_4));
  return a_a_c8wOT744UFqC1Q3K$23$3;
  } else {
  (s.pc = "z3KLRKoBwVa5nbwJ");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$23$2;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$23$1, 'a_a_c8wOT744UFqC1Q3K$23$1');

function a_a_c8wOT744UFqC1Q3K$23$3(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$bunny = t_pauseRes_6);
  (s.pc = "xup8CzBzb2f4Y4C1");
  s.rt.logObjectMutation(s.$bunny);
  (ok1(s, s.$bunny) && s.$bunny.set_width(150, s));
  (s.pc = "LhFf94j67DUfHRPO");
  s.rt.logObjectMutation(s.$bunny);
  (ok1(s, s.$bunny) && s.$bunny.set_pos(480, 260, s));
  (s.pc = "gvYYT2hzBU7p7PkY");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$23$4);
  (ok1(s, /* scream */ s.d.$gPGJvX5v92ZTNov6) && /* scream */ s.d.$gPGJvX5v92ZTNov6.play(t_resumeCtx_7));
  return a_a_c8wOT744UFqC1Q3K$23$4;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$23$3, 'a_a_c8wOT744UFqC1Q3K$23$3');

function a_a_c8wOT744UFqC1Q3K$23$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$23$2, 'a_a_c8wOT744UFqC1Q3K$23$2');

function a_a_c8wOT744UFqC1Q3K$23$4(s) {
  return a_a_c8wOT744UFqC1Q3K$23$2;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$23$4, 'a_a_c8wOT744UFqC1Q3K$23$4');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::24 */
function a_a_c8wOT744UFqC1Q3K$24(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$24$0;
  s.name = "night_1";
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a24", "a_c8wOT744UFqC1Q3K$24", a_a_c8wOT744UFqC1Q3K$24, true);

function a_a_c8wOT744UFqC1Q3K$24$0(s) {
  (s.pc = "Km1U47YuTwRT6cW9");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$24$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* prizecorner */ s.d.$xk1xNhA2LVVAYEhl) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* prizecorner */ s.d.$xk1xNhA2LVVAYEhl, t_resumeCtx_0));
  return a_a_c8wOT744UFqC1Q3K$24$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$24$0, 'a_a_c8wOT744UFqC1Q3K$24$0');

function a_a_c8wOT744UFqC1Q3K$24$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$24$1, 'a_a_c8wOT744UFqC1Q3K$24$1');

/* ACTION: a_c8wOT744UFqC1Q3K::lambda::25 */
function a_a_c8wOT744UFqC1Q3K$25(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_c8wOT744UFqC1Q3K$25$0;
  s.name = "night_1";
  s.$dialogs = undefined;
  return s;
}
cs.registerLambda("a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a25", "a_c8wOT744UFqC1Q3K$25", a_a_c8wOT744UFqC1Q3K$25, true);

function a_a_c8wOT744UFqC1Q3K$25$0(s) {
  (s.pc = "TtXutJz4PtxKpnrK");
  var t_call_0 = lib.Math_.random_range(0, 23, s);
  (/* officerand */ s.d.$c4THdHvzgAzXqbd9 = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "zEAIwVPWewEJDTya");
  var t_call_1 = lib.Math_.random_range(1, 3, s);
  (s.$dialogs = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "S4Tg8Uv8AR7y6Q2n");
  var t_infix_3 = (ok1(s, s.$dialogs) && (s.$dialogs === 1));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  s.t_elseIf_4 = true;
  (s.pc = "xqUG4u2hnGGvjQ1D");
  var t_call_5 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, false, s));
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.t_elseIf_4 = false);
  (s.pc = "jtoY6AHmYUFCBfys");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$3);
  lib.Wall.prompt("-\u0414\u0430?\u000a-\u0422\u044b \u0437\u0434\u0435\u0441\u044c \u0443\u0436\u0435 \u0431\u044b\u043b\u0430\u002c \u0442\u0430\u043a \u0432\u0435\u0434\u044c?\u000a-\u0410\u0433\u0430\u002c \u044f \u0441 \u0441\u0435\u043c\u044c\u0435\u0439 \u0445\u043e\u0434\u0438\u043b\u0430\u002c \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043c\u0435\u0441\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c... \u042f \u0437\u0430\u0431\u044b\u043b\u0430 \u043a\u0430\u043a. \u0414\u0436\u0435\u0439\u043d \u0441\u043a\u0430\u0437\u0430\u043b\u0430\u002c \u0447\u0442\u043e \u0427\u0438\u043a\u0430 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u043e. \u041d\u043e \u044f \u043d\u0430\u0448\u043b\u0430 \u0435\u0435 \u0441\u0442\u0440\u0430\u0448\u043d\u043e\u0439.", t_resumeCtx_6);
  return a_a_c8wOT744UFqC1Q3K$25$3;
  }
  return a_a_c8wOT744UFqC1Q3K$25$2;
  } else {
  (s.pc = "QOo58jVXQs4jrb1D");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$0, 'a_a_c8wOT744UFqC1Q3K$25$0');

function a_a_c8wOT744UFqC1Q3K$25$3(s) {
  return a_a_c8wOT744UFqC1Q3K$25$2;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$3, 'a_a_c8wOT744UFqC1Q3K$25$3');

function a_a_c8wOT744UFqC1Q3K$25$2(s) {
  if (s.t_elseIf_4) {
  (s.pc = "TsX6BInSRpC26qM4");
  var t_call_7 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, true, s));
  ok1(s, t_call_7);
  if (t_call_7) {
  (s.pc = "x0lQBHnOT53z9NQe");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$5);
  lib.Wall.prompt("-Yes?\u000a-You\u0027ve been at Freddy\u0027s\u002c haven\u0027t you?\u000a-Yeah\u002c I with my family was long time ago when it called... Oh\u002c I forget. Jane said that Chika is pretty cool. But I found her scariest.", t_resumeCtx_8);
  return a_a_c8wOT744UFqC1Q3K$25$5;
  } else {
  (s.pc = "xyi67ITqDIEVpqpl");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$4;
  }
  return a_a_c8wOT744UFqC1Q3K$25$6;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$2, 'a_a_c8wOT744UFqC1Q3K$25$2');

function a_a_c8wOT744UFqC1Q3K$25$1(s) {
  var t_elseIf_9 = true;
  (s.pc = "JN7nV4qnBEUVX2md");
  var t_infix_10 = (ok1(s, s.$dialogs) && (s.$dialogs === 2));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  s.t_elseIf_11 = true;
  (s.pc = "xPDVAwBIV9PkiGAL");
  var t_call_12 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, false, s));
  ok1(s, t_call_12);
  if (t_call_12) {
  (s.t_elseIf_11 = false);
  (s.pc = "Q2axkCAtYhV6Yy3e");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$9);
  lib.Wall.prompt("-\u0427\u0442\u043e \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435?\u000a-\u041d\u0443\u002c \u043e\u043d\u043e \u0441\u0442\u0430\u0440\u043e\u0435 \u0438 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u0433\u0430\u0442\u0443\u044e \u0438\u0441\u0442\u043e\u0440\u0438\u044e. \u0410\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u0435\u0435! \u041d\u0435 \u0441\u043b\u043e\u043c\u0430\u0439 \u0447\u0435\u0433\u043e-\u043d\u0438\u0431\u0443\u0434\u044c.", t_resumeCtx_13);
  return a_a_c8wOT744UFqC1Q3K$25$9;
  }
  return a_a_c8wOT744UFqC1Q3K$25$8;
  } else {
  (s.pc = "RRCTep27RRqh7Xx2");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$7;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$1, 'a_a_c8wOT744UFqC1Q3K$25$1');

function a_a_c8wOT744UFqC1Q3K$25$5(s) {
  return a_a_c8wOT744UFqC1Q3K$25$4;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$5, 'a_a_c8wOT744UFqC1Q3K$25$5');

function a_a_c8wOT744UFqC1Q3K$25$4(s) {
  return a_a_c8wOT744UFqC1Q3K$25$6;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$4, 'a_a_c8wOT744UFqC1Q3K$25$4');

function a_a_c8wOT744UFqC1Q3K$25$6(s) {
  return a_a_c8wOT744UFqC1Q3K$25$1;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$6, 'a_a_c8wOT744UFqC1Q3K$25$6');

function a_a_c8wOT744UFqC1Q3K$25$9(s) {
  return a_a_c8wOT744UFqC1Q3K$25$8;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$9, 'a_a_c8wOT744UFqC1Q3K$25$9');

function a_a_c8wOT744UFqC1Q3K$25$8(s) {
  if (s.t_elseIf_11) {
  (s.pc = "e9p4EY2QXjCxaZwy");
  var t_call_14 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, true, s));
  ok1(s, t_call_14);
  if (t_call_14) {
  (s.pc = "xqxFzsSjGAutIEzm");
  var t_resumeCtx_15 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$11);
  lib.Wall.prompt("-What can you say about this place?\u000a-Well\u002c I heard that some things is very old. Be carefull! You can brake somethings.", t_resumeCtx_15);
  return a_a_c8wOT744UFqC1Q3K$25$11;
  } else {
  (s.pc = "xzOgP2FbbOGbplOQ");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$10;
  }
  return a_a_c8wOT744UFqC1Q3K$25$12;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$8, 'a_a_c8wOT744UFqC1Q3K$25$8');

function a_a_c8wOT744UFqC1Q3K$25$7(s) {
  var t_elseIf_16 = true;
  (s.pc = "CEODHKgYUPb1vnYt");
  var t_infix_17 = (ok1(s, s.$dialogs) && (s.$dialogs === 3));
  ok1(s, t_infix_17);
  if (t_infix_17) {
  s.t_elseIf_18 = true;
  (s.pc = "UKCwhlCIdOaM3kEE");
  var t_call_19 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, false, s));
  ok1(s, t_call_19);
  if (t_call_19) {
  (s.t_elseIf_18 = false);
  (s.pc = "DCNV3S9NVIrkl6P3");
  var t_resumeCtx_20 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$15);
  lib.Wall.prompt("-\u042f \u043d\u0435 \u043c\u043e\u0433\u0443 \u0435\u0439 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c", t_resumeCtx_20);
  return a_a_c8wOT744UFqC1Q3K$25$15;
  }
  return a_a_c8wOT744UFqC1Q3K$25$14;
  } else {
  (s.pc = "EfESN5nyKSYJHwbh");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$13;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$7, 'a_a_c8wOT744UFqC1Q3K$25$7');

function a_a_c8wOT744UFqC1Q3K$25$11(s) {
  return a_a_c8wOT744UFqC1Q3K$25$10;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$11, 'a_a_c8wOT744UFqC1Q3K$25$11');

function a_a_c8wOT744UFqC1Q3K$25$10(s) {
  return a_a_c8wOT744UFqC1Q3K$25$12;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$10, 'a_a_c8wOT744UFqC1Q3K$25$10');

function a_a_c8wOT744UFqC1Q3K$25$12(s) {
  return a_a_c8wOT744UFqC1Q3K$25$7;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$12, 'a_a_c8wOT744UFqC1Q3K$25$12');

function a_a_c8wOT744UFqC1Q3K$25$15(s) {
  return a_a_c8wOT744UFqC1Q3K$25$14;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$15, 'a_a_c8wOT744UFqC1Q3K$25$15');

function a_a_c8wOT744UFqC1Q3K$25$14(s) {
  if (s.t_elseIf_18) {
  (s.pc = "O2mCSrW9W0L6TeU0");
  var t_call_21 = (ok1(s, /* tr */ s.d.$yZ8YuawaD5ZKnq0K) && lib.Boolean_.equals(/* tr */ s.d.$yZ8YuawaD5ZKnq0K, true, s));
  ok1(s, t_call_21);
  if (t_call_21) {
  (s.pc = "BFiXT3ktWRFbh4TS");
  var t_resumeCtx_22 = s.rt.getBlockingResumeCtx(a_a_c8wOT744UFqC1Q3K$25$17);
  lib.Wall.prompt("-I could\u0027t call her.", t_resumeCtx_22);
  return a_a_c8wOT744UFqC1Q3K$25$17;
  } else {
  (s.pc = "iaOLNWwoB6Y6yV4j");
  null;
  }
  return a_a_c8wOT744UFqC1Q3K$25$16;
  }
  return a_a_c8wOT744UFqC1Q3K$25$18;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$14, 'a_a_c8wOT744UFqC1Q3K$25$14');

function a_a_c8wOT744UFqC1Q3K$25$13(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$13, 'a_a_c8wOT744UFqC1Q3K$25$13');

function a_a_c8wOT744UFqC1Q3K$25$17(s) {
  return a_a_c8wOT744UFqC1Q3K$25$16;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$17, 'a_a_c8wOT744UFqC1Q3K$25$17');

function a_a_c8wOT744UFqC1Q3K$25$16(s) {
  return a_a_c8wOT744UFqC1Q3K$25$18;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$16, 'a_a_c8wOT744UFqC1Q3K$25$16');

function a_a_c8wOT744UFqC1Q3K$25$18(s) {
  return a_a_c8wOT744UFqC1Q3K$25$13;
}
cs.registerStep(a_a_c8wOT744UFqC1Q3K$25$18, 'a_a_c8wOT744UFqC1Q3K$25$18');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::2 */
function a_a_a_c8wOT744UFqC1Q3K$14$2(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$2$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a2", "a_a_c8wOT744UFqC1Q3K$14$2", a_a_a_c8wOT744UFqC1Q3K$14$2, true);

function a_a_a_c8wOT744UFqC1Q3K$14$2$0(s) {
  (s.pc = "c4zFe6IGODORj04k");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$14$2$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* flashlight */ s.d.$MHHH4iyKWspXUiXb) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* flashlight */ s.d.$MHHH4iyKWspXUiXb, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$14$2$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$2$0, 'a_a_a_c8wOT744UFqC1Q3K$14$2$0');

function a_a_a_c8wOT744UFqC1Q3K$14$2$1(s) {
  (s.pc = "bQRiuj2KyxRIMJoQ");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$2$1, 'a_a_a_c8wOT744UFqC1Q3K$14$2$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::5 */
function a_a_a_c8wOT744UFqC1Q3K$14$5(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$5$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a5", "a_a_c8wOT744UFqC1Q3K$14$5", a_a_a_c8wOT744UFqC1Q3K$14$5, true);

function a_a_a_c8wOT744UFqC1Q3K$14$5$0(s) {
  (s.pc = "xWR19MIsNmyhrTeC");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$14$5$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* foxy */ s.d.$xSUtXQXJpxtE8XlV) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* foxy */ s.d.$xSUtXQXJpxtE8XlV, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$14$5$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$5$0, 'a_a_a_c8wOT744UFqC1Q3K$14$5$0');

function a_a_a_c8wOT744UFqC1Q3K$14$5$1(s) {
  (s.pc = "mEM0rpKNYWo3imVR");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$5$1, 'a_a_a_c8wOT744UFqC1Q3K$14$5$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::6 */
function a_a_a_c8wOT744UFqC1Q3K$14$6(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$6$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a6", "a_a_c8wOT744UFqC1Q3K$14$6", a_a_a_c8wOT744UFqC1Q3K$14$6, true);

function a_a_a_c8wOT744UFqC1Q3K$14$6$0(s) {
  (s.pc = "hall8cpaaLUsmoce");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$6$0, 'a_a_a_c8wOT744UFqC1Q3K$14$6$0');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::8 */
function a_a_a_c8wOT744UFqC1Q3K$14$8(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$8$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a8", "a_a_c8wOT744UFqC1Q3K$14$8", a_a_a_c8wOT744UFqC1Q3K$14$8, true);

function a_a_a_c8wOT744UFqC1Q3K$14$8$0(s) {
  (s.pc = "e5AsSwfaZxwLMUBw");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$14$8$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* manglehall */ s.d.$bDKIvsIRhpDVntCb) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* manglehall */ s.d.$bDKIvsIRhpDVntCb, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$14$8$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$8$0, 'a_a_a_c8wOT744UFqC1Q3K$14$8$0');

function a_a_a_c8wOT744UFqC1Q3K$14$8$1(s) {
  (s.pc = "VU2fYloRNNNYnhwN");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$8$1, 'a_a_a_c8wOT744UFqC1Q3K$14$8$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::9 */
function a_a_a_c8wOT744UFqC1Q3K$14$9(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$9$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a9", "a_a_c8wOT744UFqC1Q3K$14$9", a_a_a_c8wOT744UFqC1Q3K$14$9, true);

function a_a_a_c8wOT744UFqC1Q3K$14$9$0(s) {
  (s.pc = "NXY942mbtCrLdXad");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$9$0, 'a_a_a_c8wOT744UFqC1Q3K$14$9$0');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::12 */
function a_a_a_c8wOT744UFqC1Q3K$14$12(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$12$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a12", "a_a_c8wOT744UFqC1Q3K$14$12", a_a_a_c8wOT744UFqC1Q3K$14$12, true);

function a_a_a_c8wOT744UFqC1Q3K$14$12$0(s) {
  (s.pc = "g6PovqaHoWLbJSPx");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$14$12$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* freddyhall */ s.d.$ESp4kZ2F4ug7uVav) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* freddyhall */ s.d.$ESp4kZ2F4ug7uVav, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$14$12$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$12$0, 'a_a_a_c8wOT744UFqC1Q3K$14$12$0');

function a_a_a_c8wOT744UFqC1Q3K$14$12$1(s) {
  (s.pc = "Z5ibuyx40EsKnk4X");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$12$1, 'a_a_a_c8wOT744UFqC1Q3K$14$12$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$14::lambda::13 */
function a_a_a_c8wOT744UFqC1Q3K$14$13(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$14$13$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a14";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$14\u003a\u003alambda\u003a\u003a13", "a_a_c8wOT744UFqC1Q3K$14$13", a_a_a_c8wOT744UFqC1Q3K$14$13, true);

function a_a_a_c8wOT744UFqC1Q3K$14$13$0(s) {
  (s.pc = "xaZbLAn0iyKrlj5L");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$14$13$0, 'a_a_a_c8wOT744UFqC1Q3K$14$13$0');

/* ACTION: a_a_c8wOT744UFqC1Q3K$15::lambda::2 */
function a_a_a_c8wOT744UFqC1Q3K$15$2(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$15$2$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a15";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$15\u003a\u003alambda\u003a\u003a2", "a_a_c8wOT744UFqC1Q3K$15$2", a_a_a_c8wOT744UFqC1Q3K$15$2, true);

function a_a_a_c8wOT744UFqC1Q3K$15$2$0(s) {
  (s.pc = "UUivjFqlSTxSMTZZ");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$15$2$0, 'a_a_a_c8wOT744UFqC1Q3K$15$2$0');

/* ACTION: a_a_c8wOT744UFqC1Q3K$15::lambda::4 */
function a_a_a_c8wOT744UFqC1Q3K$15$4(previous, returnAddr, $x, $y, $cam_office) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$15$4$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a15";
  s.$cam_office = $cam_office;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$15\u003a\u003alambda\u003a\u003a4", "a_a_c8wOT744UFqC1Q3K$15$4", a_a_a_c8wOT744UFqC1Q3K$15$4, true);

function a_a_a_c8wOT744UFqC1Q3K$15$4$0(s) {
  (s.pc = "xt1EKSuVrDse2rvN");
  s.rt.logObjectMutation(s.$cam_office);
  (ok1(s, s.$cam_office) && s.$cam_office.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$15$4$0, 'a_a_a_c8wOT744UFqC1Q3K$15$4$0');

/* ACTION: a_a_c8wOT744UFqC1Q3K$16::lambda::2 */
function a_a_a_c8wOT744UFqC1Q3K$16$2(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$16$2$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a16";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$16\u003a\u003alambda\u003a\u003a2", "a_a_c8wOT744UFqC1Q3K$16$2", a_a_a_c8wOT744UFqC1Q3K$16$2, true);

function a_a_a_c8wOT744UFqC1Q3K$16$2$0(s) {
  (s.pc = "mw65ORt7fWBCNfeY");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$16$2$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* freddy's 2 */ s.d.$x254pqFX3FZY6RuY) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* freddy's 2 */ s.d.$x254pqFX3FZY6RuY, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$16$2$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$2$0, 'a_a_a_c8wOT744UFqC1Q3K$16$2$0');

function a_a_a_c8wOT744UFqC1Q3K$16$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$2$1, 'a_a_a_c8wOT744UFqC1Q3K$16$2$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$16::lambda::4 */
function a_a_a_c8wOT744UFqC1Q3K$16$4(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$16$4$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a16";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$16\u003a\u003alambda\u003a\u003a4", "a_a_c8wOT744UFqC1Q3K$16$4", a_a_a_c8wOT744UFqC1Q3K$16$4, true);

function a_a_a_c8wOT744UFqC1Q3K$16$4$0(s) {
  (s.pc = "LHR2CrR3d2XxaVOu");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$16$4$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* toychikahall */ s.d.$lMS247LKLkxYHDyi) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* toychikahall */ s.d.$lMS247LKLkxYHDyi, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$16$4$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$4$0, 'a_a_a_c8wOT744UFqC1Q3K$16$4$0');

function a_a_a_c8wOT744UFqC1Q3K$16$4$1(s) {
  (s.pc = "WF1ZtCnxB5kveezR");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 3);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$4$1, 'a_a_a_c8wOT744UFqC1Q3K$16$4$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$16::lambda::6 */
function a_a_a_c8wOT744UFqC1Q3K$16$6(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$16$6$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a16";
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$16\u003a\u003alambda\u003a\u003a6", "a_a_c8wOT744UFqC1Q3K$16$6", a_a_a_c8wOT744UFqC1Q3K$16$6, true);

function a_a_a_c8wOT744UFqC1Q3K$16$6$0(s) {
  (s.pc = "M1J7WR7RZZyQ2pYZ");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$16$6$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* toybunnyhall */ s.d.$x5sGLn1udO2mwn0V) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* toybunnyhall */ s.d.$x5sGLn1udO2mwn0V, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$16$6$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$6$0, 'a_a_a_c8wOT744UFqC1Q3K$16$6$0');

function a_a_a_c8wOT744UFqC1Q3K$16$6$1(s) {
  (s.pc = "O20b0Kv2FMD4p54Q");
  (/* toysrand */ s.d.$o6bMzTGaumJU5jZd = 3);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$16$6$1, 'a_a_a_c8wOT744UFqC1Q3K$16$6$1');

/* ACTION: a_a_c8wOT744UFqC1Q3K$19::lambda::9 */
function a_a_a_c8wOT744UFqC1Q3K$19$9(previous, returnAddr, $flashlight1, $buttonmask, $cambutton, $phonebut, $table) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_c8wOT744UFqC1Q3K$19$9$0;
  s.name = "a_c8wOT744UFqC1Q3K\u003a\u003alambda\u003a\u003a19";
  s.$flashlight1 = $flashlight1;
  s.$buttonmask = $buttonmask;
  s.$cambutton = $cambutton;
  s.$phonebut = $phonebut;
  s.$table = $table;
  return s;
}
cs.registerLambda("a_a_c8wOT744UFqC1Q3K$19\u003a\u003alambda\u003a\u003a9", "a_a_c8wOT744UFqC1Q3K$19$9", a_a_a_c8wOT744UFqC1Q3K$19$9, true);

function a_a_a_c8wOT744UFqC1Q3K$19$9$0(s) {
  (s.pc = "iGmHrprgCaAlcZgL");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$19$9$1);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* chika */ s.d.$gMyFv9sxnjQTSBFV) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* chika */ s.d.$gMyFv9sxnjQTSBFV, t_resumeCtx_0));
  return a_a_a_c8wOT744UFqC1Q3K$19$9$1;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$19$9$0, 'a_a_a_c8wOT744UFqC1Q3K$19$9$0');

function a_a_a_c8wOT744UFqC1Q3K$19$9$1(s) {
  (s.pc = "Vn5qdMsq6MiFoWJL");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_a_c8wOT744UFqC1Q3K$19$9$2);
  (ok1(s, /* scream */ s.d.$gPGJvX5v92ZTNov6) && /* scream */ s.d.$gPGJvX5v92ZTNov6.play(t_resumeCtx_1));
  return a_a_a_c8wOT744UFqC1Q3K$19$9$2;
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$19$9$1, 'a_a_a_c8wOT744UFqC1Q3K$19$9$1');

function a_a_a_c8wOT744UFqC1Q3K$19$9$2(s) {
  (s.pc = "bUZcXj7BLz0l9J6o");
  s.rt.logObjectMutation(s.$flashlight1);
  (ok1(s, s.$flashlight1) && s.$flashlight1.delete_(s));
  (s.pc = "QDLuHB4oVuGj12S9");
  s.rt.logObjectMutation(s.$buttonmask);
  (ok1(s, s.$buttonmask) && s.$buttonmask.delete_(s));
  (s.pc = "xrH7zR3Yr8J4AvmJ");
  s.rt.logObjectMutation(s.$cambutton);
  (ok1(s, s.$cambutton) && s.$cambutton.delete_(s));
  (s.pc = "x1iCdjP3jl3QrYyp");
  s.rt.logObjectMutation(s.$phonebut);
  (ok1(s, s.$phonebut) && s.$phonebut.delete_(s));
  (s.pc = "d0SjCayBkwcHXkGW");
  s.rt.logObjectMutation(s.$table);
  (ok1(s, s.$table) && s.$table.delete_(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_c8wOT744UFqC1Q3K$19$9$2, 'a_a_a_c8wOT744UFqC1Q3K$19$9$2');

/* ACTION: gameloop */
function a_xwuVHAzfBfp2Ru5t(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xwuVHAzfBfp2Ru5t$0;
  s.name = "gameloop";
  return s;
}
cs.registerAction("gameloop", "xwuVHAzfBfp2Ru5t", a_xwuVHAzfBfp2Ru5t, true);
cs.registerEventHandler("gameloop", null, a_xwuVHAzfBfp2Ru5t);

function a_xwuVHAzfBfp2Ru5t$0(s) {
  (s.pc = "r1N2OvGF1xoQymwV");
  (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.post_to_wall(s));
  (s.pc = "dhXx6SJKA3O4gL9o");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.evolve(s));
  return s.rt.leave();
}
cs.registerStep(a_xwuVHAzfBfp2Ru5t$0, 'a_xwuVHAzfBfp2Ru5t$0');

cs.registerArtResource("Picture", "$x254pqFX3FZY6RuY", ".\u002fart\u002fl0_x254pqFX3FZY6RuY");
cs.registerArtResource("Picture", "$xSUtXQXJpxtE8XlV", ".\u002fart\u002fl0_xSUtXQXJpxtE8XlV");
cs.registerArtResource("Picture", "$MHHH4iyKWspXUiXb", ".\u002fart\u002fl0_MHHH4iyKWspXUiXb");
cs.registerArtResource("Picture", "$ESp4kZ2F4ug7uVav", ".\u002fart\u002fl0_ESp4kZ2F4ug7uVav");
cs.registerArtResource("Picture", "$x5sGLn1udO2mwn0V", ".\u002fart\u002fl0_x5sGLn1udO2mwn0V");
cs.registerArtResource("Picture", "$lMS247LKLkxYHDyi", ".\u002fart\u002fl0_lMS247LKLkxYHDyi");
cs.registerArtResource("Picture", "$KxmCXJdpHesHIRhG", ".\u002fart\u002fl0_KxmCXJdpHesHIRhG");
/* ACTION: menu */
function a_q7IU92NkKjJKabYo(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_q7IU92NkKjJKabYo$0;
  s.name = "menu";
  s.$starttile = undefined;
  s.$starttext = undefined;
  s.$perform2 = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("menu", "q7IU92NkKjJKabYo", a_q7IU92NkKjJKabYo, false);

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_q7IU92NkKjJKabYo$0(s) {
  (s.pc = "xhvTqC8X4DXeVcyH");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_q7IU92NkKjJKabYo$1);
  var t_call_1 = lib.Wall.ask_boolean("Do you need translation?", "Yes for English\u002c No for Russian", t_resumeCtx_0);
  return a_q7IU92NkKjJKabYo$1;
}
cs.registerStep(a_q7IU92NkKjJKabYo$0, 'a_q7IU92NkKjJKabYo$0');

function a_q7IU92NkKjJKabYo$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  (/* tr */ s.d.$yZ8YuawaD5ZKnq0K = t_pauseRes_2);
  s.rt.logDataWrite();
  (s.pc = "Frde2ZqJYi84JU7E");
  var t_call_3 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_3);
  (/* board */ s.d.$xPKieK5HAvhF8AFI = t_call_3);
  s.rt.logDataWrite();
  (s.pc = "XwMxvkNxhjbeNSLr");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_q7IU92NkKjJKabYo$2);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0, t_resumeCtx_4));
  return a_q7IU92NkKjJKabYo$2;
}
cs.registerStep(a_q7IU92NkKjJKabYo$1, 'a_q7IU92NkKjJKabYo$1');

function a_q7IU92NkKjJKabYo$2(s) {
  (s.pc = "lqMO1SkKiR7bVSbx");
  (/* menurand */ s.d.$YcgQVqvem2z1oeHO = 0);
  s.rt.logDataWrite();
  (s.pc = "xkkbn2b1ssnK94Q4");
  var t_call_5 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_rectangle(200, 70, s));
  s.rt.markAllocated(t_call_5);
  (s.$starttile = t_call_5);
  (s.pc = "xPp28U3EgkpRWupS");
  s.rt.logObjectMutation(s.$starttile);
  (ok1(s, s.$starttile) && s.$starttile.set_pos(150, 150, s));
  (s.pc = "Gp8EZKmtLDzXfDVb");
  var t_call_6 = lib.Colors.black(s);
  s.rt.logObjectMutation(s.$starttile);
  (ok2(s, s.$starttile, t_call_6) && s.$starttile.set_color(t_call_6, s));
  (s.pc = "IOlkZmi7K3rvkcb5");
  var t_call_7 = (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.create_text(100, 20, 60, "Start", s));
  s.rt.markAllocated(t_call_7);
  (s.$starttext = t_call_7);
  (s.pc = "kcrEzvm6ACpoDi4J");
  s.rt.logObjectMutation(s.$starttext);
  (ok1(s, s.$starttext) && s.$starttext.set_pos(150, 100, s));
  (s.pc = "xxM947zGXmNZTBPI");
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_q7IU92NkKjJKabYo$3(t_lmbProxy_8(la0), la1) });
  (s.pc = "Z5yqTuUI20gxS2Du");
  var t_call_9 = (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, s.$perform2) && /* board */ s.d.$xPKieK5HAvhF8AFI.add_on_every_frame(s.$perform2, s));
  t_call_9;
  (s.pc = "xNDIlgfQ1nVYKjU6");
  var t_lmbv_10 = s.$starttext;
  var t_lmbv_11 = s.$starttile;
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_q7IU92NkKjJKabYo$4(t_lmbProxy_12(la0), la1, la2, la3, t_lmbv_10, t_lmbv_11) });
  (s.pc = "eS2aa0h4lJ3xF2Km");
  var t_call_13 = (ok2(s, s.$starttile, s.$tapped) && s.$starttile.on_tap(s.$tapped, s));
  t_call_13;
  return s.rt.leave();
}
cs.registerStep(a_q7IU92NkKjJKabYo$2, 'a_q7IU92NkKjJKabYo$2');

/* ACTION: a_q7IU92NkKjJKabYo::lambda::3 */
function a_a_q7IU92NkKjJKabYo$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_q7IU92NkKjJKabYo$3$0;
  s.name = "menu";
  return s;
}
cs.registerLambda("a_q7IU92NkKjJKabYo\u003a\u003alambda\u003a\u003a3", "a_q7IU92NkKjJKabYo$3", a_a_q7IU92NkKjJKabYo$3, true);

function a_a_q7IU92NkKjJKabYo$3$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "gV24MrDURl8bxGxn");
  var t_infix_1 = (ok1(s, /* menurand */ s.d.$YcgQVqvem2z1oeHO) && (/* menurand */ s.d.$YcgQVqvem2z1oeHO === 3));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "CaAhBz4Nu5yEUxfE");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_a_q7IU92NkKjJKabYo$3$2);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mainmenu2 */ s.d.$HIPj0Qc5iIVn6vKY) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* mainmenu2 */ s.d.$HIPj0Qc5iIVn6vKY, t_resumeCtx_2));
  return a_a_q7IU92NkKjJKabYo$3$2;
  } else {
  (s.pc = "x8IW4c07snNAS14W");
  null;
  }
  return a_a_q7IU92NkKjJKabYo$3$1;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$0, 'a_a_q7IU92NkKjJKabYo$3$0');

function a_a_q7IU92NkKjJKabYo$3$2(s) {
  return a_a_q7IU92NkKjJKabYo$3$1;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$2, 'a_a_q7IU92NkKjJKabYo$3$2');

function a_a_q7IU92NkKjJKabYo$3$1(s) {
  var t_elseIf_3 = true;
  (s.pc = "vdPOT2qaO2Le8rTU");
  var t_infix_4 = (ok1(s, /* menurand */ s.d.$YcgQVqvem2z1oeHO) && (/* menurand */ s.d.$YcgQVqvem2z1oeHO === 4));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "bONIJ1ghfIjyKALm");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_a_q7IU92NkKjJKabYo$3$4);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0, t_resumeCtx_5));
  return a_a_q7IU92NkKjJKabYo$3$4;
  } else {
  (s.pc = "lphjmU24ftT26tdQ");
  null;
  }
  return a_a_q7IU92NkKjJKabYo$3$3;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$1, 'a_a_q7IU92NkKjJKabYo$3$1');

function a_a_q7IU92NkKjJKabYo$3$4(s) {
  return a_a_q7IU92NkKjJKabYo$3$3;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$4, 'a_a_q7IU92NkKjJKabYo$3$4');

function a_a_q7IU92NkKjJKabYo$3$3(s) {
  var t_elseIf_6 = true;
  (s.pc = "xUwRl5FESKIIJwHP");
  var t_infix_7 = (ok1(s, /* menurand */ s.d.$YcgQVqvem2z1oeHO) && (/* menurand */ s.d.$YcgQVqvem2z1oeHO === 6));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (s.pc = "rM5voSDFgVPfs6l4");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a_q7IU92NkKjJKabYo$3$6);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mainmenu3 */ s.d.$xLEpKnzv2roCMLuV) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* mainmenu3 */ s.d.$xLEpKnzv2roCMLuV, t_resumeCtx_8));
  return a_a_q7IU92NkKjJKabYo$3$6;
  } else {
  (s.pc = "nE8ElK2bLbBUrzPx");
  null;
  }
  return a_a_q7IU92NkKjJKabYo$3$5;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$3, 'a_a_q7IU92NkKjJKabYo$3$3');

function a_a_q7IU92NkKjJKabYo$3$6(s) {
  return a_a_q7IU92NkKjJKabYo$3$5;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$6, 'a_a_q7IU92NkKjJKabYo$3$6');

function a_a_q7IU92NkKjJKabYo$3$5(s) {
  var t_elseIf_9 = true;
  (s.pc = "xqHvm26xa5Mfl97X");
  var t_infix_10 = (ok1(s, /* menurand */ s.d.$YcgQVqvem2z1oeHO) && (/* menurand */ s.d.$YcgQVqvem2z1oeHO === 8));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "HT1NlCWlFbXn2VOo");
  s.rt.logObjectMutation(/* board */ s.d.$xPKieK5HAvhF8AFI);
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_a_q7IU92NkKjJKabYo$3$8);
  (ok2(s, /* board */ s.d.$xPKieK5HAvhF8AFI, /* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0) && /* board */ s.d.$xPKieK5HAvhF8AFI.set_background_picture(/* mainmenu1 */ s.d.$DHWwsP3rB2nOasC0, t_resumeCtx_11));
  return a_a_q7IU92NkKjJKabYo$3$8;
  } else {
  (s.pc = "knCj4VWMsRSnUke4");
  null;
  }
  return a_a_q7IU92NkKjJKabYo$3$7;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$5, 'a_a_q7IU92NkKjJKabYo$3$5');

function a_a_q7IU92NkKjJKabYo$3$8(s) {
  (s.pc = "zPj3U8wUB1JPx5ub");
  (/* menurand */ s.d.$YcgQVqvem2z1oeHO = 0);
  s.rt.logDataWrite();
  return a_a_q7IU92NkKjJKabYo$3$7;
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$8, 'a_a_q7IU92NkKjJKabYo$3$8');

function a_a_q7IU92NkKjJKabYo$3$7(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$3$7, 'a_a_q7IU92NkKjJKabYo$3$7');

/* ACTION: a_q7IU92NkKjJKabYo::lambda::4 */
function a_a_q7IU92NkKjJKabYo$4(previous, returnAddr, $x, $y, $starttext, $starttile) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_q7IU92NkKjJKabYo$4$0;
  s.name = "menu";
  s.$starttext = $starttext;
  s.$starttile = $starttile;
  return s;
}
cs.registerLambda("a_q7IU92NkKjJKabYo\u003a\u003alambda\u003a\u003a4", "a_q7IU92NkKjJKabYo$4", a_a_q7IU92NkKjJKabYo$4, true);

function a_a_q7IU92NkKjJKabYo$4$0(s) {
  (s.pc = "yrKYWW6ZZxADRHIL");
  (ok1(s, /* board */ s.d.$xPKieK5HAvhF8AFI) && /* board */ s.d.$xPKieK5HAvhF8AFI.clear_background_picture(s));
  (s.pc = "jS92DPoE4FVeUira");
  s.rt.logObjectMutation(s.$starttext);
  (ok1(s, s.$starttext) && s.$starttext.delete_(s));
  (s.pc = "xOV4nphPGcoYSowM");
  s.rt.logObjectMutation(s.$starttile);
  (ok1(s, s.$starttile) && s.$starttile.delete_(s));
  (s.pc = "lr0yHR4NQk9Ibnix");
  return s.rt.enter(a_c8wOT744UFqC1Q3K(s, a_a_q7IU92NkKjJKabYo$4$1));
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$4$0, 'a_a_q7IU92NkKjJKabYo$4$0');

function a_a_q7IU92NkKjJKabYo$4$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_q7IU92NkKjJKabYo$4$1, 'a_a_q7IU92NkKjJKabYo$4$1');

cs.registerArtResource("Sound", "$OmiVbAWQlk0n4mrs", ".\u002fart\u002fl0_OmiVbAWQlk0n4mrs");
cs.registerArtResource("Picture", "$tnvtHu6IQbeBcGFZ", ".\u002fart\u002fl0_tnvtHu6IQbeBcGFZ");
cs.registerArtResource("Picture", "$bDKIvsIRhpDVntCb", ".\u002fart\u002fl0_bDKIvsIRhpDVntCb");
cs.registerArtResource("Sound", "$gPGJvX5v92ZTNov6", ".\u002fart\u002fl0_gPGJvX5v92ZTNov6");
cs.registerArtResource("Picture", "$lTuAduJcHc4bp2hi", ".\u002fart\u002fl0_lTuAduJcHc4bp2hi");
cs.registerArtResource("Picture", "$DHWwsP3rB2nOasC0", ".\u002fart\u002fl0_DHWwsP3rB2nOasC0");
cs.registerArtResource("Picture", "$HIPj0Qc5iIVn6vKY", ".\u002fart\u002fl0_HIPj0Qc5iIVn6vKY");
cs.registerArtResource("Picture", "$xLEpKnzv2roCMLuV", ".\u002fart\u002fl0_xLEpKnzv2roCMLuV");
cs.registerArtResource("Picture", "$xk1xNhA2LVVAYEhl", ".\u002fart\u002fl0_xk1xNhA2LVVAYEhl");
cs.registerArtResource("Picture", "$eKO9JpTvSWkYbmy9", ".\u002fart\u002fl0_eKO9JpTvSWkYbmy9");
cs.registerArtResource("Picture", "$eY68WNtKXNWd7itH", ".\u002fart\u002fl0_eY68WNtKXNWd7itH");
cs.registerArtResource("Picture", "$VC7zkBzi0Ggkg42M", ".\u002fart\u002fl0_VC7zkBzi0Ggkg42M");
cs.registerArtResource("Picture", "$n8A3sOrjWOZE166j", ".\u002fart\u002fl0_n8A3sOrjWOZE166j");
cs.registerArtResource("Picture", "$gMyFv9sxnjQTSBFV", ".\u002fart\u002fl0_gMyFv9sxnjQTSBFV");
cs.registerArtResource("Sound", "$Ynp3klW44k0xwzJ2", ".\u002fart\u002fl0_Ynp3klW44k0xwzJ2");
cs.registerArtResource("Picture", "$jBJhN3MEtMlNbtGx", ".\u002fart\u002fl0_jBJhN3MEtMlNbtGx");
cs.registerArtResource("Picture", "$aXC4vooX5M4S4ugS", ".\u002fart\u002fl0_aXC4vooX5M4S4ugS");
cs.registerArtResource("Picture", "$bTXv4PmceUGSZbyu", ".\u002fart\u002fl0_bTXv4PmceUGSZbyu");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Five nights at freddys 2 \u0028xdgjc\u0029";
  bnd.scriptId = "xdgjc";
  bnd.topScriptId = "xdgjc";
    lib["gameloop"] = cs.mkLibProxyFactory(bnd, "this", "gameloop");
    lib["menu"] = cs.mkLibProxyFactory(bnd, "this", "menu");
}());
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {
  if(!d.hasOwnProperty("$o6bMzTGaumJU5jZd")) d.$o6bMzTGaumJU5jZd = 0;
  if(!d.hasOwnProperty("$KWeDAG9hhFxa3K5j")) d.$KWeDAG9hhFxa3K5j = 0;
  if(!d.hasOwnProperty("$c4THdHvzgAzXqbd9")) d.$c4THdHvzgAzXqbd9 = 0;
  if(!d.hasOwnProperty("$YcgQVqvem2z1oeHO")) d.$YcgQVqvem2z1oeHO = 0;
  if(!d.hasOwnProperty("$gtvitE5G5LcqAlMF")) d.$gtvitE5G5LcqAlMF = 0;
  if(!d.hasOwnProperty("$xMYshOcIEGW4RC2E")) d.$xMYshOcIEGW4RC2E = 0;
  if(!d.hasOwnProperty("$yZ8YuawaD5ZKnq0K")) d.$yZ8YuawaD5ZKnq0K = false;

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$xPKieK5HAvhF8AFI = undefined;
  d.$x254pqFX3FZY6RuY = undefined;
  d.$xSUtXQXJpxtE8XlV = undefined;
  d.$MHHH4iyKWspXUiXb = undefined;
  d.$o6bMzTGaumJU5jZd = 0;
  d.$ESp4kZ2F4ug7uVav = undefined;
  d.$KWeDAG9hhFxa3K5j = 0;
  d.$x5sGLn1udO2mwn0V = undefined;
  d.$lMS247LKLkxYHDyi = undefined;
  d.$KxmCXJdpHesHIRhG = undefined;
  d.$c4THdHvzgAzXqbd9 = 0;
  d.$OmiVbAWQlk0n4mrs = undefined;
  d.$tnvtHu6IQbeBcGFZ = undefined;
  d.$bDKIvsIRhpDVntCb = undefined;
  d.$gPGJvX5v92ZTNov6 = undefined;
  d.$lTuAduJcHc4bp2hi = undefined;
  d.$DHWwsP3rB2nOasC0 = undefined;
  d.$HIPj0Qc5iIVn6vKY = undefined;
  d.$YcgQVqvem2z1oeHO = 0;
  d.$xLEpKnzv2roCMLuV = undefined;
  d.$xk1xNhA2LVVAYEhl = undefined;
  d.$eKO9JpTvSWkYbmy9 = undefined;
  d.$eY68WNtKXNWd7itH = undefined;
  d.$VC7zkBzi0Ggkg42M = undefined;
  d.$n8A3sOrjWOZE166j = undefined;
  d.$gMyFv9sxnjQTSBFV = undefined;
  d.$Ynp3klW44k0xwzJ2 = undefined;
  d.$jBJhN3MEtMlNbtGx = undefined;
  d.$aXC4vooX5M4S4ugS = undefined;
  d.$gtvitE5G5LcqAlMF = 0;
  d.$bTXv4PmceUGSZbyu = undefined;
  d.$xMYshOcIEGW4RC2E = 0;
  d.$yZ8YuawaD5ZKnq0K = false;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "menu";
cs.authorId = "unknown";
cs.scriptId = "xdgjc";
cs.scriptGuid = "cfde21ba-edef-48f9-c829-7e956d6b04b1";
})}
