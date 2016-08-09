var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Fly Bird\u003a Acceleration ";
cs.scriptColor = "\u0023ff0038";
cs.objectSingletons = {};
/* ACTION: main */
function a_x9Kx9wHRpmQAKu8Z(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x9Kx9wHRpmQAKu8Z$0;
  s.name = "main";
  s.$board = undefined;
  s.$sprite = undefined;
  s.$sprite2 = undefined;
  s.$perform3 = undefined;
  s.$sprite3 = undefined;
  s.$perform5 = undefined;
  s.$perform6 = undefined;
  s.$perform4 = undefined;
  s.$action = undefined;
  s.$perform = undefined;
  s.$i = undefined;
  s.$pipe = undefined;
  s.$perform2 = undefined;
  s.$mutey = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$text = undefined;
  s.$perform7 = undefined;
  s.$perform71 = undefined;
  s.$textbomb = undefined;
  s.$perform8 = undefined;
  s.$textstar = undefined;
  s.$perform9 = undefined;
  s.$textbutton = undefined;
  s.$tapped2 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$tapped3 = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  return s;
}
cs.registerAction("main", "x9Kx9wHRpmQAKu8Z", a_x9Kx9wHRpmQAKu8Z, true);

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

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_x9Kx9wHRpmQAKu8Z$0(s) {
  (s.pc = "xY2u8Jb1SmgAKqSY");
  var t_libcall_0 = s.libs["VU1iOSr7dvKXw44u"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_x9Kx9wHRpmQAKu8Z$1));
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$0, 'a_x9Kx9wHRpmQAKu8Z$0');

function a_x9Kx9wHRpmQAKu8Z$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_1);
  (s.pc = "xgjcBsJtNsLEcEkE");
  var t_libcall_2 = s.libs["VU1iOSr7dvKXw44u"]["set life"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_x9Kx9wHRpmQAKu8Z$2, 5));
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$1, 'a_x9Kx9wHRpmQAKu8Z$1');

function a_x9Kx9wHRpmQAKu8Z$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "xORyZWbvNtZChyC4");
  var t_libcall_4 = s.libs["VU1iOSr7dvKXw44u"]["set background scene"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_x9Kx9wHRpmQAKu8Z$3, /* flappy bird2 */ s.d.$xe0bynvkQ2HcOs4w, "horizontal"));
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$2, 'a_x9Kx9wHRpmQAKu8Z$2');

function a_x9Kx9wHRpmQAKu8Z$3(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  (s.pc = "x9RTkEDI8OFnp2wh");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$4);
  (ok1(s, /* flappy bird2 */ s.d.$xe0bynvkQ2HcOs4w) && lib.Wall.set_background_picture(/* flappy bird2 */ s.d.$xe0bynvkQ2HcOs4w, t_resumeCtx_6));
  return a_x9Kx9wHRpmQAKu8Z$4;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$3, 'a_x9Kx9wHRpmQAKu8Z$3');

function a_x9Kx9wHRpmQAKu8Z$4(s) {
  (s.pc = "mtJSvAzWh44Kr4c0");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$5);
  var t_call_8 = lib.Wall.ask_string("What\u0027s your name?", t_resumeCtx_7);
  return a_x9Kx9wHRpmQAKu8Z$5;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$4, 'a_x9Kx9wHRpmQAKu8Z$4');

function a_x9Kx9wHRpmQAKu8Z$5(s) {
  var t_pauseRes_9 = s.pauseValue;
  (/* name */ s.d.$xqRuAH23OLi5N8wa = t_pauseRes_9);
  s.rt.logDataWrite();
  (s.pc = "wt40t2jzwHWBtyDT");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$6);
  var t_call_11 = (ok2(s, s.$board, /* flappy bird */ s.d.$MmUBbRhIhiNZQXLW) && s.$board.create_picture(/* flappy bird */ s.d.$MmUBbRhIhiNZQXLW, t_resumeCtx_10));
  return a_x9Kx9wHRpmQAKu8Z$6;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$5, 'a_x9Kx9wHRpmQAKu8Z$5');

function a_x9Kx9wHRpmQAKu8Z$6(s) {
  var t_pauseRes_12 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_12);
  (s.$sprite = t_pauseRes_12);
  (s.pc = "SBbAn4jN6Fc8XlIl");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.set_width(100, s));
  (s.pc = "zj62r5FvBzSJk0kJ");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.set_acceleration_y(400, s));
  (s.pc = "bVzyCoNFoBZ86zZA");
  var t_call_13 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 / 3));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_14) && s.$sprite.set_x(t_infix_14, s));
  (s.pc = "EXvQfLZDNc5lDtQa");
  var t_call_15 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 / 2));
  var t_infix_17 = (ok1(s, t_infix_16) && (t_infix_16 - 100));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_17) && s.$sprite.set_y(t_infix_17, s));
  (s.pc = "X0gC7B08ak88sq5R");
  var t_resumeCtx_18 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$7);
  var t_call_19 = (ok2(s, s.$board, /* star */ s.d.$JK1IfNulNoBWpzhx) && s.$board.create_picture(/* star */ s.d.$JK1IfNulNoBWpzhx, t_resumeCtx_18));
  return a_x9Kx9wHRpmQAKu8Z$7;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$6, 'a_x9Kx9wHRpmQAKu8Z$6');

function a_x9Kx9wHRpmQAKu8Z$7(s) {
  var t_pauseRes_20 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_20);
  (s.$sprite2 = t_pauseRes_20);
  (s.pc = "x0vIJzrDDO42nM8c");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.set_width(75, s));
  (s.pc = "akeaZ0ykCNyr5oJW");
  var t_call_21 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 / 3));
  var t_call_23 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_24 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_25 = (ok2(s, t_call_23, t_call_24) && (t_call_23 - t_call_24));
  var t_infix_26 = (ok1(s, t_infix_25) && (t_infix_25 - 50));
  s.rt.logObjectMutation(s.$sprite2);
  (ok3(s, s.$sprite2, t_infix_22, t_infix_26) && s.$sprite2.set_pos(t_infix_22, t_infix_26, s));
  (s.pc = "o14lLUCuzvb3uoY4");
  var t_infix_27 = (0 - 150);
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_infix_27) && s.$sprite2.set_speed_x(t_infix_27, s));
  (s.pc = "kKc6phw2WLjp4N5x");
  var t_infix_28 = (0 - 20);
  var t_call_29 = (ok1(s, t_infix_28) && lib.Math_.random_range(t_infix_28, 20, s));
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_call_29) && s.$sprite2.set_speed_y(t_call_29, s));
  (s.pc = "fZiy58RevA2N08gh");
  var t_lmbv_30 = s.$sprite2;
  var t_lmbv_31 = s.$sprite;
  var t_lmbProxy_32 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$8(t_lmbProxy_32(la0), la1, t_lmbv_30, t_lmbv_31) });
  (s.pc = "jEr3iX5Y0GONes2D");
  var t_call_33 = (ok2(s, s.$sprite2, s.$perform3) && s.$sprite2.on_every_frame(s.$perform3, s));
  t_call_33;
  (s.pc = "K4YTUQvVPFBd4fo4");
  var t_libcall_34 = s.libs["VU1iOSr7dvKXw44u"]["board"](s);
  return s.rt.enter(t_libcall_34.invoke(t_libcall_34, a_x9Kx9wHRpmQAKu8Z$9));
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$7, 'a_x9Kx9wHRpmQAKu8Z$7');

function a_x9Kx9wHRpmQAKu8Z$9(s) {
  var t_actRes_35 = s.rt.returnedFrom.result;
  var t_resumeCtx_36 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$10);
  var t_call_37 = (ok2(s, t_actRes_35, /* bomb */ s.d.$IWNa94V6rxsPK7sK) && t_actRes_35.create_picture(/* bomb */ s.d.$IWNa94V6rxsPK7sK, t_resumeCtx_36));
  return a_x9Kx9wHRpmQAKu8Z$10;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$9, 'a_x9Kx9wHRpmQAKu8Z$9');

function a_x9Kx9wHRpmQAKu8Z$10(s) {
  var t_pauseRes_38 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_38);
  (s.$sprite3 = t_pauseRes_38);
  (s.pc = "Fi00Na81nZ57Ywy4");
  s.rt.logObjectMutation(s.$sprite3);
  (ok1(s, s.$sprite3) && s.$sprite3.set_width(49, s));
  (s.pc = "xmDEkTKVOi8L9790");
  var t_call_39 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_40 = (ok1(s, t_call_39) && (t_call_39 / 3));
  var t_infix_41 = (ok1(s, t_infix_40) && (t_infix_40 + 50));
  var t_call_42 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_43 = (ok1(s, t_call_42) && (0 - t_call_42));
  var t_infix_44 = (ok1(s, t_infix_43) && (t_infix_43 / 3));
  s.rt.logObjectMutation(s.$sprite3);
  (ok3(s, s.$sprite3, t_infix_41, t_infix_44) && s.$sprite3.set_pos(t_infix_41, t_infix_44, s));
  (s.pc = "HwGD4hxnIX176Gry");
  var t_infix_45 = (0 - 150);
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_infix_45) && s.$sprite3.set_speed_x(t_infix_45, s));
  (s.pc = "P2tL1At3V2IDi2KW");
  var t_infix_46 = (0 - 10);
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_infix_46) && s.$sprite3.set_acceleration_x(t_infix_46, s));
  (s.pc = "yxFw9lHWytzCzn9B");
  var t_infix_47 = (0 - 20);
  var t_call_48 = (ok1(s, t_infix_47) && lib.Math_.random_range(t_infix_47, 20, s));
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_call_48) && s.$sprite3.set_speed_y(t_call_48, s));
  (s.pc = "x4ysU229PnV2Dy6S");
  var t_lmbv_49 = s.$sprite3;
  var t_lmbv_50 = s.$sprite;
  var t_lmbv_51 = s.$board;
  var t_lmbProxy_52 = s.libs.mkLambdaProxy;
  (s.$perform5 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$11(t_lmbProxy_52(la0), la1, t_lmbv_49, t_lmbv_50, t_lmbv_51) });
  (s.pc = "V5JXj21gEickdMdv");
  var t_call_53 = (ok2(s, s.$sprite3, s.$perform5) && s.$sprite3.on_every_frame(s.$perform5, s));
  t_call_53;
  (s.pc = "UZ5jUHVlZkQJvrcl");
  var t_lmbv_54 = s.$sprite3;
  var t_lmbv_55 = s.$board;
  var t_lmbProxy_56 = s.libs.mkLambdaProxy;
  (s.$perform6 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$12(t_lmbProxy_56(la0), la1, t_lmbv_54, t_lmbv_55) });
  (s.pc = "OJpI1WdaLqmPhvPU");
  var t_call_57 = (ok2(s, s.$sprite3, s.$perform6) && s.$sprite3.on_every_frame(s.$perform6, s));
  t_call_57;
  (s.pc = "FHW6NGxEi40gV4wc");
  var t_lmbv_58 = s.$sprite2;
  var t_lmbv_59 = s.$board;
  var t_lmbProxy_60 = s.libs.mkLambdaProxy;
  (s.$perform4 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$13(t_lmbProxy_60(la0), la1, t_lmbv_58, t_lmbv_59) });
  (s.pc = "xLSDmzMet02UyQxO");
  var t_call_61 = (ok2(s, s.$sprite2, s.$perform4) && s.$sprite2.on_every_frame(s.$perform4, s));
  t_call_61;
  (s.pc = "tTu5biviJKbJmH4I");
  var t_lmbv_62 = s.$sprite;
  var t_lmbProxy_63 = s.libs.mkLambdaProxy;
  (s.$action = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$14(t_lmbProxy_63(la0), la1, t_lmbv_62) });
  (s.pc = "aTGFlHWLnKyraK3s");
  var t_libcall_64 = s.libs["y83vK3X8NE0kTjCd"]["on button pressed"](s);
  return s.rt.enter(t_libcall_64.invoke(t_libcall_64, a_x9Kx9wHRpmQAKu8Z$15, s.$action));
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$10, 'a_x9Kx9wHRpmQAKu8Z$10');

function a_x9Kx9wHRpmQAKu8Z$15(s) {
  var t_actRes_65 = s.rt.returnedFrom.result;
  t_actRes_65;
  (s.pc = "j2L2A3DB9cMGS3Vv");
  var t_lmbv_66 = s.$sprite;
  var t_lmbv_67 = s.$board;
  var t_lmbProxy_68 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$16(t_lmbProxy_68(la0), la1, t_lmbv_66, t_lmbv_67) });
  (s.pc = "Q1aUEncURAe394hP");
  var t_call_69 = (ok2(s, s.$sprite, s.$perform) && s.$sprite.on_every_frame(s.$perform, s));
  t_call_69;
  (s.pc = "HUmGIeAhXEb0chJc");
  s.t_bnd_70 = 3;
  (s.$i = 0);
  return a_x9Kx9wHRpmQAKu8Z$17;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$15, 'a_x9Kx9wHRpmQAKu8Z$15');

function a_x9Kx9wHRpmQAKu8Z$17(s) {
  if ((s.$i < s.t_bnd_70)) {
  (s.pc = "xUSs3cbISSb7EK3T");
  var t_call_71 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_72 = (ok2(s, s.$board, t_call_71) && s.$board.create_rectangle(80, t_call_71, s));
  s.rt.markAllocated(t_call_72);
  (s.$pipe = t_call_72);
  (s.pc = "qtsqmtMQo2e4sioh");
  var t_call_73 = lib.Colors.green(s);
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_call_73) && s.$pipe.set_color(t_call_73, s));
  (s.pc = "L9v4Sbw75zR6ALqc");
  var t_infix_74 = (0 - 200);
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_infix_74) && s.$pipe.set_speed_x(t_infix_74, s));
  (s.pc = "fgl9JRCFCRU4l0Ec");
  var t_infix_75 = (0 - 50);
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_infix_75) && s.$pipe.set_acceleration_x(t_infix_75, s));
  (s.pc = "weyf9soC7jI129nA");
  var t_call_76 = (ok1(s, s.$board) && s.$board.height(s));
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_call_76) && s.$pipe.set_y(t_call_76, s));
  (s.pc = "xZYiMFdPk37DJ4uS");
  var t_call_77 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_78 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_79 = (ok2(s, s.$i, t_call_78) && (s.$i * t_call_78));
  var t_infix_80 = (ok1(s, t_infix_79) && (t_infix_79 / 2));
  var t_infix_81 = (ok2(s, t_call_77, t_infix_80) && (t_call_77 + t_infix_80));
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_infix_81) && s.$pipe.set_x(t_infix_81, s));
  (s.pc = "D47xbj73f9CnoNQc");
  var t_lmbv_82 = s.$pipe;
  var t_lmbv_83 = s.$board;
  var t_lmbv_84 = s.$sprite;
  var t_lmbProxy_85 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$19(t_lmbProxy_85(la0), la1, t_lmbv_82, t_lmbv_83, t_lmbv_84) });
  (s.pc = "qk7qh2zDAykzKy67");
  var t_call_86 = (ok2(s, s.$pipe, s.$perform2) && s.$pipe.on_every_frame(s.$perform2, s));
  t_call_86;
  (s.$i++);
  return a_x9Kx9wHRpmQAKu8Z$17;
  }
  (s.pc = "y7rbatgwX2pKyaRK");
  var t_resumeCtx_87 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$20);
  var t_call_88 = (ok2(s, s.$board, /* Mute sound */ s.d.$rFnrqd2iJS88FPKo) && s.$board.create_picture(/* Mute sound */ s.d.$rFnrqd2iJS88FPKo, t_resumeCtx_87));
  return a_x9Kx9wHRpmQAKu8Z$20;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$17, 'a_x9Kx9wHRpmQAKu8Z$17');

function a_x9Kx9wHRpmQAKu8Z$20(s) {
  var t_pauseRes_89 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_89);
  (s.$mutey = t_pauseRes_89);
  (s.pc = "rALBiZ43N5T1yiMX");
  var t_call_90 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_91 = (ok1(s, t_call_90) && (t_call_90 - 35));
  var t_call_92 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_93 = (ok1(s, t_call_92) && (t_call_92 - 50));
  s.rt.logObjectMutation(s.$mutey);
  (ok3(s, s.$mutey, t_infix_91, t_infix_93) && s.$mutey.set_pos(t_infix_91, t_infix_93, s));
  (s.pc = "boYixMadEjb1bCWc");
  s.rt.logObjectMutation(s.$mutey);
  (ok1(s, s.$mutey) && s.$mutey.set_width(50, s));
  (s.pc = "xrSTAGWt4DolfdVT");
  var t_lmbProxy_94 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_x9Kx9wHRpmQAKu8Z$21(t_lmbProxy_94(la0), la1, la2, la3) });
  (s.pc = "tDeHODKVoGy2TikJ");
  var t_call_95 = (ok2(s, s.$mutey, s.$tapped) && s.$mutey.on_tap(s.$tapped, s));
  t_call_95;
  (s.pc = "xm622nEjuybLiImd");
  var t_call_96 = (ok2(s, s.$board, /* name */ s.d.$xqRuAH23OLi5N8wa) && s.$board.create_text(100, 20, 18, /* name */ s.d.$xqRuAH23OLi5N8wa, s));
  s.rt.markAllocated(t_call_96);
  (s.$text = t_call_96);
  (s.pc = "VO0W2gpDdhFK2CiM");
  var t_call_97 = lib.Colors.red(s);
  var t_call_98 = (ok1(s, t_call_97) && t_call_97.darken(0.2, s));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_98) && s.$text.set_color(t_call_98, s));
  (s.pc = "ZhBPYFdZGi91z8ed");
  var t_lmbv_99 = s.$text;
  var t_lmbv_100 = s.$sprite;
  var t_lmbProxy_101 = s.libs.mkLambdaProxy;
  (s.$perform7 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$22(t_lmbProxy_101(la0), la1, t_lmbv_99, t_lmbv_100) });
  (s.pc = "ISd3t4GJSWfpID8f");
  var t_call_102 = (ok2(s, s.$text, s.$perform7) && s.$text.on_every_frame(s.$perform7, s));
  t_call_102;
  (s.pc = "xCULKBNWFkNbwEhf");
  var t_call_103 = (ok2(s, s.$board, /* name */ s.d.$xqRuAH23OLi5N8wa) && s.$board.create_text(100, 20, 18, /* name */ s.d.$xqRuAH23OLi5N8wa, s));
  s.rt.markAllocated(t_call_103);
  (s.$text = t_call_103);
  (s.pc = "JGV0d28ixGq0fD34");
  var t_call_104 = lib.Colors.red(s);
  var t_call_105 = (ok1(s, t_call_104) && t_call_104.darken(0.2, s));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_105) && s.$text.set_color(t_call_105, s));
  (s.pc = "OZeyekeKoC6Bsmld");
  var t_lmbv_106 = s.$text;
  var t_lmbv_107 = s.$sprite;
  var t_lmbProxy_108 = s.libs.mkLambdaProxy;
  (s.$perform71 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$23(t_lmbProxy_108(la0), la1, t_lmbv_106, t_lmbv_107) });
  (s.pc = "BCPtMDVkzzti7LI7");
  var t_call_109 = (ok2(s, s.$text, s.$perform71) && s.$text.on_every_frame(s.$perform71, s));
  t_call_109;
  (s.pc = "emf8yitlW7hWDydi");
  var t_concat_110 = lib.String_.concatAny(/* name */ s.d.$xqRuAH23OLi5N8wa, "\u0027s enemy");
  var t_call_111 = (ok2(s, s.$board, t_concat_110) && s.$board.create_text(100, 20, 18, t_concat_110, s));
  s.rt.markAllocated(t_call_111);
  (s.$textbomb = t_call_111);
  (s.pc = "EAG0OWFlQLGbPjSY");
  var t_lmbv_112 = s.$textbomb;
  var t_lmbv_113 = s.$sprite3;
  var t_lmbProxy_114 = s.libs.mkLambdaProxy;
  (s.$perform8 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$24(t_lmbProxy_114(la0), la1, t_lmbv_112, t_lmbv_113) });
  (s.pc = "VNmRMk2lTo2bHEgI");
  var t_call_115 = (ok2(s, s.$textbomb, s.$perform8) && s.$textbomb.on_every_frame(s.$perform8, s));
  t_call_115;
  (s.pc = "kViEkAe9abTVIToy");
  var t_call_116 = lib.Colors.black(s);
  var t_call_117 = (ok1(s, t_call_116) && t_call_116.darken(0.5, s));
  s.rt.logObjectMutation(s.$textbomb);
  (ok2(s, s.$textbomb, t_call_117) && s.$textbomb.set_color(t_call_117, s));
  (s.pc = "LSZIHR947Rqt1WgD");
  var t_concat_118 = lib.String_.concatAny(/* name */ s.d.$xqRuAH23OLi5N8wa, "\u0027s prize");
  var t_call_119 = (ok2(s, s.$board, t_concat_118) && s.$board.create_text(100, 20, 18, t_concat_118, s));
  s.rt.markAllocated(t_call_119);
  (s.$textstar = t_call_119);
  (s.pc = "vVcpmktF49CoTvnD");
  var t_lmbv_120 = s.$textstar;
  var t_lmbv_121 = s.$sprite2;
  var t_lmbProxy_122 = s.libs.mkLambdaProxy;
  (s.$perform9 = function(la0, la1) { return a_a_x9Kx9wHRpmQAKu8Z$25(t_lmbProxy_122(la0), la1, t_lmbv_120, t_lmbv_121) });
  (s.pc = "hOfm3SiooP2EC9FK");
  var t_call_123 = (ok2(s, s.$textstar, s.$perform9) && s.$textstar.on_every_frame(s.$perform9, s));
  t_call_123;
  var t_elseIf_124 = true;
  (s.pc = "xUruDw21OMgLXxGv");
  var t_call_125 = (ok1(s, /* name */ s.d.$xqRuAH23OLi5N8wa) && lib.String_.ends_with(/* name */ s.d.$xqRuAH23OLi5N8wa, "s", s));
  ok1(s, t_call_125);
  if (t_call_125) {
  (s.pc = "xAEpukvkZ7YFKnBg");
  var t_concat_126 = lib.String_.concatAny(/* name */ s.d.$xqRuAH23OLi5N8wa, "\u0027 prize");
  s.rt.logObjectMutation(s.$textstar);
  (ok2(s, s.$textstar, t_concat_126) && s.$textstar.set_text(t_concat_126, s));
  (s.pc = "xz2y9g1IQfDnIOCe");
  var t_concat_127 = lib.String_.concatAny(/* name */ s.d.$xqRuAH23OLi5N8wa, "\u0027 enemy");
  s.rt.logObjectMutation(s.$textbomb);
  (ok2(s, s.$textbomb, t_concat_127) && s.$textbomb.set_text(t_concat_127, s));
  } else {
  (s.pc = "AOnjr0swFpaeWLJm");
  null;
  }
  (s.pc = "B4Mk8H74I9NCP1iD");
  var t_resumeCtx_128 = s.rt.getBlockingResumeCtx(a_x9Kx9wHRpmQAKu8Z$27);
  var t_call_129 = (ok2(s, s.$board, /* text */ s.d.$d2242sKU6O2Ip0bu) && s.$board.create_picture(/* text */ s.d.$d2242sKU6O2Ip0bu, t_resumeCtx_128));
  return a_x9Kx9wHRpmQAKu8Z$27;
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$20, 'a_x9Kx9wHRpmQAKu8Z$20');

function a_x9Kx9wHRpmQAKu8Z$27(s) {
  var t_pauseRes_130 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_130);
  (s.$textbutton = t_pauseRes_130);
  (s.pc = "nq2aOdE5HP7yHht4");
  var t_call_131 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_132 = (ok1(s, t_call_131) && (t_call_131 - 110));
  var t_call_133 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_134 = (ok1(s, t_call_133) && (t_call_133 - 50));
  s.rt.logObjectMutation(s.$textbutton);
  (ok3(s, s.$textbutton, t_infix_132, t_infix_134) && s.$textbutton.set_pos(t_infix_132, t_infix_134, s));
  (s.pc = "rexCMic04gYsbJua");
  s.rt.logObjectMutation(s.$textbutton);
  (ok1(s, s.$textbutton) && s.$textbutton.set_width(50, s));
  (s.pc = "xZ9se7MRkx22C1M4");
  var t_lmbv_135 = s.$textstar;
  var t_lmbv_136 = s.$textbomb;
  var t_lmbv_137 = s.$textbutton;
  var t_lmbv_138 = s.$tapped3;
  var t_lmbProxy_139 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_x9Kx9wHRpmQAKu8Z$28(t_lmbProxy_139(la0), la1, la2, la3, t_lmbv_135, t_lmbv_136, t_lmbv_137, t_lmbv_138) });
  (s.pc = "mpAWDuKR79vT0WcM");
  var t_call_140 = (ok2(s, s.$textbutton, s.$tapped2) && s.$textbutton.on_tap(s.$tapped2, s));
  t_call_140;
  return s.rt.leave();
}
cs.registerStep(a_x9Kx9wHRpmQAKu8Z$27, 'a_x9Kx9wHRpmQAKu8Z$27');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::8 */
function a_a_x9Kx9wHRpmQAKu8Z$8(previous, returnAddr, $sprite2, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$8$0;
  s.name = "main";
  s.$sprite2 = $sprite2;
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a8", "a_x9Kx9wHRpmQAKu8Z$8", a_a_x9Kx9wHRpmQAKu8Z$8, true);

function a_a_x9Kx9wHRpmQAKu8Z$8$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "cnLpDYUde7wD5RyF");
  var t_call_1 = (ok2(s, s.$sprite2, s.$sprite) && s.$sprite2.overlaps_with(s.$sprite, s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "atkDAQYtLOO3Owhv");
  var t_libcall_2 = s.libs["VU1iOSr7dvKXw44u"]["add score"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_x9Kx9wHRpmQAKu8Z$8$2, 10));
  } else {
  (s.pc = "tnDpHf8S3duEeli0");
  null;
  }
  return a_a_x9Kx9wHRpmQAKu8Z$8$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$8$0, 'a_a_x9Kx9wHRpmQAKu8Z$8$0');

function a_a_x9Kx9wHRpmQAKu8Z$8$2(s) {
  (s.pc = "Hx2HVToU8hJFRk2g");
  var t_infix_3 = (0 - 50);
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_infix_3) && s.$sprite2.set_y(t_infix_3, s));
  (s.pc = "Fzz4w6DCamto9dMN");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "xv93WpQZ3GyQQZhE");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_x9Kx9wHRpmQAKu8Z$8$3);
  (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.play(t_resumeCtx_4));
  return a_a_x9Kx9wHRpmQAKu8Z$8$3;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$8$2, 'a_a_x9Kx9wHRpmQAKu8Z$8$2');

function a_a_x9Kx9wHRpmQAKu8Z$8$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$8$1, 'a_a_x9Kx9wHRpmQAKu8Z$8$1');

function a_a_x9Kx9wHRpmQAKu8Z$8$3(s) {
  return a_a_x9Kx9wHRpmQAKu8Z$8$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$8$3, 'a_a_x9Kx9wHRpmQAKu8Z$8$3');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::11 */
function a_a_x9Kx9wHRpmQAKu8Z$11(previous, returnAddr, $sprite3, $sprite, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$11$0;
  s.name = "main";
  s.$sprite3 = $sprite3;
  s.$sprite = $sprite;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a11", "a_x9Kx9wHRpmQAKu8Z$11", a_a_x9Kx9wHRpmQAKu8Z$11, true);

function a_a_x9Kx9wHRpmQAKu8Z$11$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xzhWt4Awis84aGew");
  var t_call_1 = (ok2(s, s.$sprite3, s.$sprite) && s.$sprite3.overlaps_with(s.$sprite, s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "tQNEmlAjK6aoOQwj");
  var t_call_2 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 3));
  var t_call_4 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 / 2));
  var t_infix_6 = (ok1(s, t_infix_5) && (t_infix_5 - 100));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_infix_3, t_infix_6) && s.$sprite.set_pos(t_infix_3, t_infix_6, s));
  (s.pc = "olrn7AFp1AMVl5hL");
  var t_libcall_7 = s.libs["VU1iOSr7dvKXw44u"]["remove life"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_a_x9Kx9wHRpmQAKu8Z$11$2, 1));
  } else {
  (s.pc = "x0ZUxB8JzAsmXkqf");
  null;
  }
  return a_a_x9Kx9wHRpmQAKu8Z$11$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$11$0, 'a_a_x9Kx9wHRpmQAKu8Z$11$0');

function a_a_x9Kx9wHRpmQAKu8Z$11$2(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  (s.pc = "COD6AvV4wRh4ssHJ");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_a_x9Kx9wHRpmQAKu8Z$11$3);
  (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.play(t_resumeCtx_9));
  return a_a_x9Kx9wHRpmQAKu8Z$11$3;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$11$2, 'a_a_x9Kx9wHRpmQAKu8Z$11$2');

function a_a_x9Kx9wHRpmQAKu8Z$11$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$11$1, 'a_a_x9Kx9wHRpmQAKu8Z$11$1');

function a_a_x9Kx9wHRpmQAKu8Z$11$3(s) {
  (s.pc = "y5N8fIv6RADNYErf");
  var t_infix_10 = (0 - 50);
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_infix_10) && s.$sprite3.set_y(t_infix_10, s));
  return a_a_x9Kx9wHRpmQAKu8Z$11$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$11$3, 'a_a_x9Kx9wHRpmQAKu8Z$11$3');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::12 */
function a_a_x9Kx9wHRpmQAKu8Z$12(previous, returnAddr, $sprite3, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$12$0;
  s.name = "main";
  s.$sprite3 = $sprite3;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a12", "a_x9Kx9wHRpmQAKu8Z$12", a_a_x9Kx9wHRpmQAKu8Z$12, true);

function a_a_x9Kx9wHRpmQAKu8Z$12$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "x4a13QFZOsVeFEhb");
  var t_call_1 = (ok1(s, s.$sprite3) && s.$sprite3.x(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 0));
  var t_lazy_3 = t_infix_2;
  if ((ok1(s, t_lazy_3) && (!t_lazy_3))) {
  var t_call_4 = (ok1(s, s.$sprite3) && s.$sprite3.y(s));
  var t_call_5 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_6 = (ok2(s, t_call_4, t_call_5) && (t_call_4 > t_call_5));
  (t_lazy_3 = t_infix_6);
  }
  var t_lazy_7 = t_lazy_3;
  if ((ok1(s, t_lazy_7) && (!t_lazy_7))) {
  var t_call_8 = (ok1(s, s.$sprite3) && s.$sprite3.y(s));
  var t_call_9 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_10 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_11 = (ok2(s, t_call_9, t_call_10) && (t_call_9 - t_call_10));
  var t_infix_12 = (ok2(s, t_call_8, t_infix_11) && (t_call_8 < t_infix_11));
  (t_lazy_7 = t_infix_12);
  }
  ok1(s, t_lazy_7);
  if (t_lazy_7) {
  (s.pc = "Ysz09essaL4WCagl");
  var t_call_13 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 + 100));
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_infix_14) && s.$sprite3.set_x(t_infix_14, s));
  (s.pc = "wQ2QEIqi8SdJGQy3");
  var t_call_15 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 / 2));
  var t_call_17 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_18 = (ok1(s, t_call_17) && (t_call_17 / 5));
  var t_call_19 = (ok2(s, t_infix_16, t_infix_18) && lib.Math_.random_range(t_infix_16, t_infix_18, s));
  s.rt.logObjectMutation(s.$sprite3);
  (ok2(s, s.$sprite3, t_call_19) && s.$sprite3.set_y(t_call_19, s));
  } else {
  (s.pc = "xvNdGGK4hbzPG6yG");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$12$0, 'a_a_x9Kx9wHRpmQAKu8Z$12$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::13 */
function a_a_x9Kx9wHRpmQAKu8Z$13(previous, returnAddr, $sprite2, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$13$0;
  s.name = "main";
  s.$sprite2 = $sprite2;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a13", "a_x9Kx9wHRpmQAKu8Z$13", a_a_x9Kx9wHRpmQAKu8Z$13, true);

function a_a_x9Kx9wHRpmQAKu8Z$13$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ictZCqj1K264p1LX");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.x(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 0));
  var t_lazy_3 = t_infix_2;
  if ((ok1(s, t_lazy_3) && (!t_lazy_3))) {
  var t_call_4 = (ok1(s, s.$sprite2) && s.$sprite2.y(s));
  var t_call_5 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_6 = (ok2(s, t_call_4, t_call_5) && (t_call_4 > t_call_5));
  (t_lazy_3 = t_infix_6);
  }
  var t_lazy_7 = t_lazy_3;
  if ((ok1(s, t_lazy_7) && (!t_lazy_7))) {
  var t_call_8 = (ok1(s, s.$sprite2) && s.$sprite2.y(s));
  var t_call_9 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_10 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_11 = (ok2(s, t_call_9, t_call_10) && (t_call_9 - t_call_10));
  var t_infix_12 = (ok2(s, t_call_8, t_infix_11) && (t_call_8 < t_infix_11));
  (t_lazy_7 = t_infix_12);
  }
  ok1(s, t_lazy_7);
  if (t_lazy_7) {
  (s.pc = "bHjkix3ykpeOkZEX");
  var t_call_13 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 + 100));
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_infix_14) && s.$sprite2.set_x(t_infix_14, s));
  (s.pc = "QGfcUL6nNgr41Puf");
  var t_call_15 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 / 2));
  var t_call_17 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_18 = (ok1(s, t_call_17) && (t_call_17 / 5));
  var t_call_19 = (ok2(s, t_infix_16, t_infix_18) && lib.Math_.random_range(t_infix_16, t_infix_18, s));
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_call_19) && s.$sprite2.set_y(t_call_19, s));
  (s.pc = "p4EMSPMpDirIr42C");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.show(s));
  } else {
  (s.pc = "bBYkgkfpW24aV6oU");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$13$0, 'a_a_x9Kx9wHRpmQAKu8Z$13$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::14 */
function a_a_x9Kx9wHRpmQAKu8Z$14(previous, returnAddr, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$14$0;
  s.name = "main";
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a14", "a_x9Kx9wHRpmQAKu8Z$14", a_a_x9Kx9wHRpmQAKu8Z$14, true);

function a_a_x9Kx9wHRpmQAKu8Z$14$0(s) {
  (s.pc = "xb69u0YzFwqTln5E");
  var t_infix_0 = (0 - 200);
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_0) && s.$sprite.set_speed_y(t_infix_0, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$14$0, 'a_a_x9Kx9wHRpmQAKu8Z$14$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::16 */
function a_a_x9Kx9wHRpmQAKu8Z$16(previous, returnAddr, $sprite, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$16$0;
  s.name = "main";
  s.$sprite = $sprite;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a16", "a_x9Kx9wHRpmQAKu8Z$16", a_a_x9Kx9wHRpmQAKu8Z$16, true);

function a_a_x9Kx9wHRpmQAKu8Z$16$0(s) {
  (s.pc = "FA1CfAWz3j0GtUNF");
  var t_call_0 = (ok1(s, s.$sprite) && s.$sprite.speed_y(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 / 10));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_1) && s.$sprite.set_angle(t_infix_1, s));
  var t_elseIf_2 = true;
  (s.pc = "RHBCyIx17zAogmhU");
  var t_call_3 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_call_4 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_5 = (ok2(s, t_call_3, t_call_4) && (t_call_3 > t_call_4));
  var t_lazy_6 = t_infix_5;
  if ((ok1(s, t_lazy_6) && (!t_lazy_6))) {
  var t_call_7 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 < 0));
  (t_lazy_6 = t_infix_8);
  }
  ok1(s, t_lazy_6);
  if (t_lazy_6) {
  (s.pc = "tJGKm2KXSUh3p4RL");
  var t_libcall_9 = s.libs["VU1iOSr7dvKXw44u"]["remove life"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_a_x9Kx9wHRpmQAKu8Z$16$3, 1));
  } else {
  (s.pc = "hwAwZoOIOVxjlRTe");
  null;
  }
  return a_a_x9Kx9wHRpmQAKu8Z$16$2;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$16$0, 'a_a_x9Kx9wHRpmQAKu8Z$16$0');

function a_a_x9Kx9wHRpmQAKu8Z$16$3(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  (s.pc = "DIvobbHSV81igOWf");
  var t_call_11 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 / 3));
  var t_call_13 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 / 2));
  var t_infix_15 = (ok1(s, t_infix_14) && (t_infix_14 - 100));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_infix_12, t_infix_15) && s.$sprite.set_pos(t_infix_12, t_infix_15, s));
  return a_a_x9Kx9wHRpmQAKu8Z$16$2;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$16$3, 'a_a_x9Kx9wHRpmQAKu8Z$16$3');

function a_a_x9Kx9wHRpmQAKu8Z$16$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$16$2, 'a_a_x9Kx9wHRpmQAKu8Z$16$2');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::19 */
function a_a_x9Kx9wHRpmQAKu8Z$19(previous, returnAddr, $pipe, $board, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$19$0;
  s.name = "main";
  s.$pipe = $pipe;
  s.$board = $board;
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a19", "a_x9Kx9wHRpmQAKu8Z$19", a_a_x9Kx9wHRpmQAKu8Z$19, true);

function a_a_x9Kx9wHRpmQAKu8Z$19$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "DwjHOPZUturw8EP8");
  var t_call_1 = (ok1(s, s.$pipe) && s.$pipe.x(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "xST4ZBPHFG4i4UH2");
  var t_libcall_3 = s.libs["VU1iOSr7dvKXw44u"]["add score"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_a_x9Kx9wHRpmQAKu8Z$19$2, 1));
  } else {
  (s.pc = "EY6iweuNDSK15gDv");
  null;
  }
  return a_a_x9Kx9wHRpmQAKu8Z$19$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$0, 'a_a_x9Kx9wHRpmQAKu8Z$19$0');

function a_a_x9Kx9wHRpmQAKu8Z$19$2(s) {
  (s.pc = "gEwidXwzXRIlRuQl");
  var t_call_4 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 + 100));
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_infix_5) && s.$pipe.set_x(t_infix_5, s));
  (s.pc = "I8GyhkdPzQxpIyuU");
  var t_call_6 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_7 = (0 - 150);
  var t_call_8 = (ok1(s, t_infix_7) && lib.Math_.random_range(75, t_infix_7, s));
  var t_infix_9 = (ok2(s, t_call_6, t_call_8) && (t_call_6 - t_call_8));
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_infix_9) && s.$pipe.set_y(t_infix_9, s));
  (s.pc = "oa2eHNUwovcNgOWS");
  var t_call_10 = lib.Colors.random(s);
  s.rt.logObjectMutation(s.$pipe);
  (ok2(s, s.$pipe, t_call_10) && s.$pipe.set_color(t_call_10, s));
  (s.pc = "uPuP1MbCDBfIQVC9");
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_a_x9Kx9wHRpmQAKu8Z$19$3);
  (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.play(t_resumeCtx_11));
  return a_a_x9Kx9wHRpmQAKu8Z$19$3;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$2, 'a_a_x9Kx9wHRpmQAKu8Z$19$2');

function a_a_x9Kx9wHRpmQAKu8Z$19$1(s) {
  var t_elseIf_12 = true;
  (s.pc = "StoYZEm29eAiLisl");
  var t_call_13 = (ok2(s, s.$pipe, s.$sprite) && s.$pipe.overlaps_with(s.$sprite, s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "szXdCFqBvYCv7pt0");
  var t_call_14 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 / 3));
  var t_call_16 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_17 = (ok1(s, t_call_16) && (t_call_16 / 2));
  var t_infix_18 = (ok1(s, t_infix_17) && (t_infix_17 - 100));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_infix_15, t_infix_18) && s.$sprite.set_pos(t_infix_15, t_infix_18, s));
  (s.pc = "VqVt5IoveRPjvJGH");
  var t_libcall_19 = s.libs["VU1iOSr7dvKXw44u"]["remove life"](s);
  return s.rt.enter(t_libcall_19.invoke(t_libcall_19, a_a_x9Kx9wHRpmQAKu8Z$19$5, 1));
  } else {
  (s.pc = "xV8PYz6dSPiYkV25");
  null;
  }
  return a_a_x9Kx9wHRpmQAKu8Z$19$4;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$1, 'a_a_x9Kx9wHRpmQAKu8Z$19$1');

function a_a_x9Kx9wHRpmQAKu8Z$19$3(s) {
  return a_a_x9Kx9wHRpmQAKu8Z$19$1;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$3, 'a_a_x9Kx9wHRpmQAKu8Z$19$3');

function a_a_x9Kx9wHRpmQAKu8Z$19$5(s) {
  var t_actRes_20 = s.rt.returnedFrom.result;
  t_actRes_20;
  (s.pc = "PjvVt92UIrYxbJtY");
  var t_resumeCtx_21 = s.rt.getBlockingResumeCtx(a_a_x9Kx9wHRpmQAKu8Z$19$6);
  (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.play(t_resumeCtx_21));
  return a_a_x9Kx9wHRpmQAKu8Z$19$6;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$5, 'a_a_x9Kx9wHRpmQAKu8Z$19$5');

function a_a_x9Kx9wHRpmQAKu8Z$19$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$4, 'a_a_x9Kx9wHRpmQAKu8Z$19$4');

function a_a_x9Kx9wHRpmQAKu8Z$19$6(s) {
  return a_a_x9Kx9wHRpmQAKu8Z$19$4;
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$19$6, 'a_a_x9Kx9wHRpmQAKu8Z$19$6');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::21 */
function a_a_x9Kx9wHRpmQAKu8Z$21(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$21$0;
  s.name = "main";
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a21", "a_x9Kx9wHRpmQAKu8Z$21", a_a_x9Kx9wHRpmQAKu8Z$21, true);

function a_a_x9Kx9wHRpmQAKu8Z$21$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "yxbcaOQi8ZdtPeuq");
  var t_call_1 = (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.volume(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 > 0));
  var t_lazy_3 = t_infix_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_call_4 = (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.volume(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 > 0));
  (t_lazy_3 = t_infix_5);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (t_elseIf_0 = false);
  (s.pc = "IRsrNKTcMvlcpVP8");
  s.rt.logObjectMutation(/* lose */ s.d.$vgYeRgkHo0IrivZl);
  (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.set_volume(0, s));
  (s.pc = "Dz8hQhViY2e9ZysQ");
  s.rt.logObjectMutation(/* point */ s.d.$vvug51vzJGrdDcEY);
  (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.set_volume(0, s));
  }
  if (t_elseIf_0) {
  (s.pc = "dtGJQTv3KVOzPRmS");
  var t_call_6 = (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.volume(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 === 0));
  var t_lazy_8 = t_infix_7;
  if ((ok1(s, t_lazy_8) && t_lazy_8)) {
  var t_call_9 = (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.volume(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 === 0));
  (t_lazy_8 = t_infix_10);
  }
  ok1(s, t_lazy_8);
  if (t_lazy_8) {
  (s.pc = "Fi6fsGnUrFo21E7T");
  s.rt.logObjectMutation(/* lose */ s.d.$vgYeRgkHo0IrivZl);
  (ok1(s, /* lose */ s.d.$vgYeRgkHo0IrivZl) && /* lose */ s.d.$vgYeRgkHo0IrivZl.set_volume(20, s));
  (s.pc = "lVEW12vxUQhgJO4m");
  s.rt.logObjectMutation(/* point */ s.d.$vvug51vzJGrdDcEY);
  (ok1(s, /* point */ s.d.$vvug51vzJGrdDcEY) && /* point */ s.d.$vvug51vzJGrdDcEY.set_volume(20, s));
  } else {
  (s.pc = "BVFnEkl24fRz4LsP");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$21$0, 'a_a_x9Kx9wHRpmQAKu8Z$21$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::22 */
function a_a_x9Kx9wHRpmQAKu8Z$22(previous, returnAddr, $text, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$22$0;
  s.name = "main";
  s.$text = $text;
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a22", "a_x9Kx9wHRpmQAKu8Z$22", a_a_x9Kx9wHRpmQAKu8Z$22, true);

function a_a_x9Kx9wHRpmQAKu8Z$22$0(s) {
  (s.pc = "hnBp3Ez2Ii3o4lgz");
  var t_call_0 = (ok1(s, s.$sprite) && s.$sprite.x(s));
  var t_call_1 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 - 50));
  s.rt.logObjectMutation(s.$text);
  (ok3(s, s.$text, t_call_0, t_infix_2) && s.$text.set_pos(t_call_0, t_infix_2, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$22$0, 'a_a_x9Kx9wHRpmQAKu8Z$22$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::23 */
function a_a_x9Kx9wHRpmQAKu8Z$23(previous, returnAddr, $text, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$23$0;
  s.name = "main";
  s.$text = $text;
  s.$sprite = $sprite;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a23", "a_x9Kx9wHRpmQAKu8Z$23", a_a_x9Kx9wHRpmQAKu8Z$23, true);

function a_a_x9Kx9wHRpmQAKu8Z$23$0(s) {
  (s.pc = "D8ZBsRNCY2UE9owl");
  var t_call_0 = (ok1(s, s.$sprite) && s.$sprite.x(s));
  var t_call_1 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 - 50));
  s.rt.logObjectMutation(s.$text);
  (ok3(s, s.$text, t_call_0, t_infix_2) && s.$text.set_pos(t_call_0, t_infix_2, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$23$0, 'a_a_x9Kx9wHRpmQAKu8Z$23$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::24 */
function a_a_x9Kx9wHRpmQAKu8Z$24(previous, returnAddr, $textbomb, $sprite3) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$24$0;
  s.name = "main";
  s.$textbomb = $textbomb;
  s.$sprite3 = $sprite3;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a24", "a_x9Kx9wHRpmQAKu8Z$24", a_a_x9Kx9wHRpmQAKu8Z$24, true);

function a_a_x9Kx9wHRpmQAKu8Z$24$0(s) {
  (s.pc = "fKc4nP596O5OaI2H");
  var t_call_0 = (ok1(s, s.$sprite3) && s.$sprite3.x(s));
  var t_call_1 = (ok1(s, s.$sprite3) && s.$sprite3.y(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 - 50));
  s.rt.logObjectMutation(s.$textbomb);
  (ok3(s, s.$textbomb, t_call_0, t_infix_2) && s.$textbomb.set_pos(t_call_0, t_infix_2, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$24$0, 'a_a_x9Kx9wHRpmQAKu8Z$24$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::25 */
function a_a_x9Kx9wHRpmQAKu8Z$25(previous, returnAddr, $textstar, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$25$0;
  s.name = "main";
  s.$textstar = $textstar;
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a25", "a_x9Kx9wHRpmQAKu8Z$25", a_a_x9Kx9wHRpmQAKu8Z$25, true);

function a_a_x9Kx9wHRpmQAKu8Z$25$0(s) {
  (s.pc = "j5TOQ8TjBp7AHc2Q");
  var t_call_0 = lib.Colors.random(s);
  s.rt.logObjectMutation(s.$textstar);
  (ok2(s, s.$textstar, t_call_0) && s.$textstar.set_color(t_call_0, s));
  (s.pc = "GKAcxFtPUKz8Ag1z");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.x(s));
  var t_call_2 = (ok1(s, s.$sprite2) && s.$sprite2.y(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 - 50));
  s.rt.logObjectMutation(s.$textstar);
  (ok3(s, s.$textstar, t_call_1, t_infix_3) && s.$textstar.set_pos(t_call_1, t_infix_3, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$25$0, 'a_a_x9Kx9wHRpmQAKu8Z$25$0');

/* ACTION: a_x9Kx9wHRpmQAKu8Z::lambda::28 */
function a_a_x9Kx9wHRpmQAKu8Z$28(previous, returnAddr, $x, $y, $textstar, $textbomb, $textbutton, $tapped3) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x9Kx9wHRpmQAKu8Z$28$0;
  s.name = "main";
  s.$textstar = $textstar;
  s.$textbomb = $textbomb;
  s.$textbutton = $textbutton;
  s.$tapped3 = $tapped3;
  s.$x1 = undefined;
  s.$y1 = undefined;
  return s;
}
cs.registerLambda("a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a28", "a_x9Kx9wHRpmQAKu8Z$28", a_a_x9Kx9wHRpmQAKu8Z$28, true);

function a_a_x9Kx9wHRpmQAKu8Z$28$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ptlI2K5mWpS4VYfb");
  var t_call_1 = (ok1(s, s.$textstar) && s.$textstar.is_visible(s));
  var t_lazy_2 = t_call_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_call_3 = (ok1(s, s.$textbomb) && s.$textbomb.is_visible(s));
  (t_lazy_2 = t_call_3);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "eF06Bqul63YLScpD");
  s.rt.logObjectMutation(s.$textstar);
  (ok1(s, s.$textstar) && s.$textstar.hide(s));
  (s.pc = "yFLNfmAm2IVlJGHq");
  s.rt.logObjectMutation(s.$textbomb);
  (ok1(s, s.$textbomb) && s.$textbomb.hide(s));
  } else {
  (s.pc = "tedZxlPz3zV6DGF4");
  var t_lmbv_4 = s.$textbomb;
  var t_lmbv_5 = s.$textstar;
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$tapped3 = function(la0, la1, la2, la3) { return a_a_a_x9Kx9wHRpmQAKu8Z$28$3(t_lmbProxy_6(la0), la1, la2, la3, t_lmbv_4, t_lmbv_5) });
  (s.pc = "SY2IE7VOTjadpqg2");
  var t_call_7 = (ok2(s, s.$textbutton, s.$tapped3) && s.$textbutton.on_tap(s.$tapped3, s));
  t_call_7;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_x9Kx9wHRpmQAKu8Z$28$0, 'a_a_x9Kx9wHRpmQAKu8Z$28$0');

/* ACTION: a_a_x9Kx9wHRpmQAKu8Z$28::lambda::3 */
function a_a_a_x9Kx9wHRpmQAKu8Z$28$3(previous, returnAddr, $x, $y, $textbomb, $textstar) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_x9Kx9wHRpmQAKu8Z$28$3$0;
  s.name = "a_x9Kx9wHRpmQAKu8Z\u003a\u003alambda\u003a\u003a28";
  s.$textbomb = $textbomb;
  s.$textstar = $textstar;
  return s;
}
cs.registerLambda("a_a_x9Kx9wHRpmQAKu8Z$28\u003a\u003alambda\u003a\u003a3", "a_a_x9Kx9wHRpmQAKu8Z$28$3", a_a_a_x9Kx9wHRpmQAKu8Z$28$3, true);

function a_a_a_x9Kx9wHRpmQAKu8Z$28$3$0(s) {
  (s.pc = "V6nMSKdFK34XdRRg");
  s.rt.logObjectMutation(s.$textbomb);
  (ok1(s, s.$textbomb) && s.$textbomb.show(s));
  (s.pc = "XRpjcLiVO3pW8l5f");
  s.rt.logObjectMutation(s.$textstar);
  (ok1(s, s.$textstar) && s.$textstar.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_x9Kx9wHRpmQAKu8Z$28$3$0, 'a_a_a_x9Kx9wHRpmQAKu8Z$28$3$0');

cs.registerArtResource("Picture", "$MmUBbRhIhiNZQXLW", ".\u002fart\u002fl0_MmUBbRhIhiNZQXLW");
cs.registerArtResource("Picture", "$xe0bynvkQ2HcOs4w", ".\u002fart\u002fl0_xe0bynvkQ2HcOs4w");
cs.registerArtResource("Sound", "$vvug51vzJGrdDcEY", ".\u002fart\u002fl0_vvug51vzJGrdDcEY");
cs.registerArtResource("Picture", "$IWNa94V6rxsPK7sK", ".\u002fart\u002fl0_IWNa94V6rxsPK7sK");
cs.registerArtResource("Sound", "$vgYeRgkHo0IrivZl", ".\u002fart\u002fl0_vgYeRgkHo0IrivZl");
cs.registerArtResource("Picture", "$JK1IfNulNoBWpzhx", ".\u002fart\u002fl0_JK1IfNulNoBWpzhx");
cs.registerArtResource("Picture", "$rFnrqd2iJS88FPKo", ".\u002fart\u002fl0_rFnrqd2iJS88FPKo");
cs.registerArtResource("Picture", "$d2242sKU6O2Ip0bu", ".\u002fart\u002fl0_d2242sKU6O2Ip0bu");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Fly Bird\u003a Acceleration  \u0028rivma\u0029";
  bnd.scriptId = "rivma";
  bnd.topScriptId = "rivma";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["VU1iOSr7dvKXw44u"] = {};
  bnd = bnds["VU1iOSr7dvKXw44u"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "VU1iOSr7dvKXw44u");
  bnd.scriptName = "game \u0028vuatb\u0029";
  bnd.scriptId = "vuatb";
  bnd.topScriptId = "rivma";
    lib["set life"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "set life");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "add score");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "remove life");
    lib["start"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "start");
    lib["board"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "board");
    lib["set background scene"] = cs.mkLibProxyFactory(bnd, "VU1iOSr7dvKXw44u", "set background scene");
  lib = libs["y83vK3X8NE0kTjCd"] = {};
  bnd = bnds["y83vK3X8NE0kTjCd"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "y83vK3X8NE0kTjCd");
  bnd.scriptName = "gamepad \u0028mfft\u0029";
  bnd.scriptId = "mfft";
  bnd.topScriptId = "rivma";
    lib["on button pressed"] = cs.mkLibProxyFactory(bnd, "y83vK3X8NE0kTjCd", "on button pressed");
  bnd = bnds["VU1iOSr7dvKXw44u"];
  bnd["this$lib"] = "VU1iOSr7dvKXw44u";
  bnd = bnds["y83vK3X8NE0kTjCd"];
  bnd["this$lib"] = "y83vK3X8NE0kTjCd";
    resolve = bnd["FAAwwQWlwuPOJZ9p"] = {};
    bnd["FAAwwQWlwuPOJZ9p" + "$lib"] = "VU1iOSr7dvKXw44u";
      resolve["board"] = libs["VU1iOSr7dvKXw44u"]["board"];
      resolve["start"] = libs["VU1iOSr7dvKXw44u"]["start"];
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
  if(!d.hasOwnProperty("$xqRuAH23OLi5N8wa")) d.$xqRuAH23OLi5N8wa = "";

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$MmUBbRhIhiNZQXLW = undefined;
  d.$xe0bynvkQ2HcOs4w = undefined;
  d.$vvug51vzJGrdDcEY = undefined;
  d.$IWNa94V6rxsPK7sK = undefined;
  d.$vgYeRgkHo0IrivZl = undefined;
  d.$JK1IfNulNoBWpzhx = undefined;
  d.$rFnrqd2iJS88FPKo = undefined;
  d.$xqRuAH23OLi5N8wa = "";
  d.$d2242sKU6O2Ip0bu = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "rivma";
cs.scriptGuid = "d3814b33-2c88-4e7e-8f81-3bbfe4f9c1a6";
}),

// **************************************************************
"VU1iOSr7dvKXw44u": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "game";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: initialize */
function a_Ayu95FKZqA9xPdjQXSANLGvP(previous, returnAddr, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Ayu95FKZqA9xPdjQXSANLGvP$0;
  s.name = "initialize";
  s.$width = $width;
  s.$height = $height;
  s.$ratio = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("initialize", "Ayu95FKZqA9xPdjQXSANLGvP", a_Ayu95FKZqA9xPdjQXSANLGvP, true);

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

function a_Ayu95FKZqA9xPdjQXSANLGvP$0(s) {
  (s.pc = "Clk2zqeLTyzvKFNp");
  var t_call_0 = lib.Wall.width(s);
  var t_call_1 = lib.Wall.height(s);
  var t_infix_2 = (ok2(s, t_call_0, t_call_1) && (t_call_0 / t_call_1));
  (s.$ratio = t_infix_2);
  var t_elseIf_3 = true;
  (s.pc = "lHC24tGRfxpXZxgk");
  var t_infix_4 = (ok1(s, s.$width) && (s.$width < 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$height) && (s.$height < 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  var t_elseIf_7 = true;
  (s.pc = "xZ5BAygKRsMnteqb");
  var t_infix_8 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "Ye23loceGoB42QXd");
  var t_infix_9 = (ok1(s, s.$ratio) && (800 * s.$ratio));
  (s.$width = t_infix_9);
  (s.pc = "XOxgQshg475aS5Hk");
  (s.$height = 800);
  } else {
  (s.pc = "JqNvfilYjyb1v6dO");
  (s.$width = 800);
  (s.pc = "sEmxz8ZVPjbzQaT5");
  var t_infix_10 = (ok1(s, s.$ratio) && (800 / s.$ratio));
  (s.$height = t_infix_10);
  }
  } else {
  (s.pc = "R62oLL8OCQUJFGyq");
  null;
  }
  var t_elseIf_11 = true;
  (s.pc = "jhe41v4xeIFpAnXk");
  var t_infix_12 = (ok2(s, s.$width, s.$height) && (s.$width < s.$height));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  var t_elseIf_13 = true;
  (s.pc = "Qe4DsmxnWXWundDd");
  var t_infix_14 = (ok1(s, s.$width) && (s.$width < 0));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  var t_elseIf_15 = true;
  (s.pc = "mo0yRpxiwtI2oz42");
  var t_infix_16 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (s.pc = "sLJ2pYjNI9NO4jGv");
  var t_infix_17 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_17);
  } else {
  (s.pc = "Jhg52rbRIg7gqUJH");
  null;
  }
  (s.pc = "lohlOvEl2FCCHlN8");
  var t_infix_18 = (ok2(s, s.$height, s.$ratio) && (s.$height * s.$ratio));
  (s.$width = t_infix_18);
  } else {
  (s.pc = "atvUTkEkPEXLLvCm");
  null;
  }
  (s.pc = "xZv5qx7QK0pfbIwx");
  var t_call_19 = (ok2(s, s.$width, s.$height) && lib.Media.create_portrait_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_19);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_19);
  s.rt.logDataWrite();
  } else {
  var t_elseIf_20 = true;
  (s.pc = "mbaxWZ8Upqc4dY2m");
  var t_infix_21 = (ok1(s, s.$height) && (s.$height < 0));
  ok1(s, t_infix_21);
  if (t_infix_21) {
  var t_elseIf_22 = true;
  (s.pc = "urxU2iGbiBiGNGbM");
  var t_infix_23 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_23);
  if (t_infix_23) {
  (s.pc = "xzVsM6nAQXKxe7pq");
  var t_infix_24 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_24);
  } else {
  (s.pc = "fDxwDNPMm7ENfyRz");
  null;
  }
  (s.pc = "Y2iBY1rS8V2IYESl");
  var t_infix_25 = (ok2(s, s.$width, s.$ratio) && (s.$width / s.$ratio));
  (s.$height = t_infix_25);
  } else {
  (s.pc = "indzcfv0SxCzV8Dh");
  null;
  }
  (s.pc = "IisORl3LBXmnPKgW");
  var t_call_26 = (ok2(s, s.$width, s.$height) && lib.Media.create_landscape_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_26);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_26);
  s.rt.logDataWrite();
  }
  (s.pc = "cpH4M20Y66Y5LRJs");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0);
  s.rt.logDataWrite();
  (s.pc = "ekMv5bgzPxBK4CW4");
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = 3);
  s.rt.logDataWrite();
  (s.pc = "jbZnUix7Lx1Q7ZDV");
  var t_call_27 = lib.Invalid.datetime(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_27);
  s.rt.logDataWrite();
  (s.pc = "w1UaCIU8Ev4ebPlb");
  var t_call_28 = lib.Invalid.sprite(s);
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_call_28);
  s.rt.logDataWrite();
  (s.pc = "JOr3eMPViQ4dHWhw");
  var t_call_29 = lib.Invalid.sprite(s);
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_call_29);
  s.rt.logDataWrite();
  (s.pc = "my4nhbFyphwdVePb");
  var t_call_30 = lib.Invalid.sprite(s);
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_call_30);
  s.rt.logDataWrite();
  (s.pc = "jLtQyZzuywVmboyz");
  var t_infix_31 = (0 - 1);
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = t_infix_31);
  s.rt.logDataWrite();
  (s.pc = "ZZUqmmdXH7QdhMrH");
  var t_call_32 = lib.String_.split("---\u003b\u2764\u003b\u2764\u2764\u003b\u2764\u2764\u2764", "\u003b", s);
  s.rt.markAllocated(t_call_32);
  (/* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m = t_call_32);
  s.rt.logDataWrite();
  (s.pc = "xKSYee6TFDQOfML9");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$9));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$0, 'a_Ayu95FKZqA9xPdjQXSANLGvP$0');

function a_Ayu95FKZqA9xPdjQXSANLGvP$9(s) {
  var t_actRes_33 = s.rt.returnedFrom.result;
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_actRes_33);
  s.rt.logDataWrite();
  (s.pc = "Yyg0CzGMYWO9TQ47");
  var t_call_34 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 - 132));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_35) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_pos(t_infix_35, 20, s));
  (s.pc = "CtaIZxAjWA3KSV2x");
  var t_call_36 = lib.Colors.orange(s);
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_call_36) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_color(t_call_36, s));
  (s.pc = "kTjf5SscJwSXMOxR");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$10));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$9, 'a_Ayu95FKZqA9xPdjQXSANLGvP$9');

function a_Ayu95FKZqA9xPdjQXSANLGvP$10(s) {
  var t_actRes_37 = s.rt.returnedFrom.result;
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_actRes_37);
  s.rt.logDataWrite();
  (s.pc = "lD26N7zVYcw4OA2B");
  var t_call_38 = lib.Colors.red(s);
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, t_call_38) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(t_call_38, s));
  (s.pc = "ShXHDkMQszri4hgi");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_pos(84, 20, s));
  (s.pc = "DF79Mzy4RLJvr5lu");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$11));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$10, 'a_Ayu95FKZqA9xPdjQXSANLGvP$10');

function a_Ayu95FKZqA9xPdjQXSANLGvP$11(s) {
  var t_actRes_39 = s.rt.returnedFrom.result;
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_actRes_39);
  s.rt.logDataWrite();
  (s.pc = "flUJeGo9oH4ZKL7k");
  var t_call_40 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_41 = (ok1(s, t_call_40) && (t_call_40 / 2));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_infix_41) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_pos(t_infix_41, 20, s));
  var t_elseIf_42 = true;
  (s.pc = "nvzUAhKiUrDNx9ua");
  var t_call_43 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_44 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_45 = (ok2(s, t_call_43, t_call_44) && (t_call_43 < t_call_44));
  ok1(s, t_infix_45);
  if (t_infix_45) {
  (s.pc = "tprbh6Qbs4RtbWGE");
  var t_call_46 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 / 10.5));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_47) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_y(t_infix_47, s));
  (s.pc = "vo1skKgdHy2wqGAI");
  var t_call_48 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  (s.$y = t_call_48);
  (s.pc = "xIiwhrp5beNVxp0W");
  var t_call_49 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_49) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_y(t_call_49, s));
  (s.pc = "xRtkSt16gx2kVUQE");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$y) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_y(s.$y, s));
  (s.pc = "xVMKJwJbqH32RaBs");
  var t_call_50 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_51 = (ok1(s, t_call_50) && (t_call_50 - 64));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_51) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_x(t_infix_51, s));
  (s.pc = "sftDMBB4Rc62DLVK");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_x(64, s));
  } else {
  (s.pc = "YAVjZYpqa10ZOU6i");
  null;
  }
  (s.pc = "lVFXy8tvC2YO5VaY");
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_Ayu95FKZqA9xPdjQXSANLGvP$13, 0));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$11, 'a_Ayu95FKZqA9xPdjQXSANLGvP$11');

function a_Ayu95FKZqA9xPdjQXSANLGvP$13(s) {
  (s.pc = "u1GLYt6g45euiwLd");
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_Ayu95FKZqA9xPdjQXSANLGvP$14, 3));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$13, 'a_Ayu95FKZqA9xPdjQXSANLGvP$13');

function a_Ayu95FKZqA9xPdjQXSANLGvP$14(s) {
  var t_actRes_52 = s.rt.returnedFrom.result;
  t_actRes_52;
  return s.rt.leave();
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$14, 'a_Ayu95FKZqA9xPdjQXSANLGvP$14');

/* ACTION: set score */
function a_oKY8zayGQ3QsufrQiKXXS9sh(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_oKY8zayGQ3QsufrQiKXXS9sh$0;
  s.name = "set score";
  s.$value = $value;
  s.$anim = undefined;
  return s;
}
cs.registerAction("set score", "oKY8zayGQ3QsufrQiKXXS9sh", a_oKY8zayGQ3QsufrQiKXXS9sh, false);

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_oKY8zayGQ3QsufrQiKXXS9sh$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_oKY8zayGQ3QsufrQiKXXS9sh$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_oKY8zayGQ3QsufrQiKXXS9sh$3;
  }
  return a_oKY8zayGQ3QsufrQiKXXS9sh$2;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$0, 'a_oKY8zayGQ3QsufrQiKXXS9sh$0');

function a_oKY8zayGQ3QsufrQiKXXS9sh$3(s) {
  return a_oKY8zayGQ3QsufrQiKXXS9sh$2;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$3, 'a_oKY8zayGQ3QsufrQiKXXS9sh$3');

function a_oKY8zayGQ3QsufrQiKXXS9sh$2(s) {
  (s.pc = "jia5eGpMgyK70yu7");
  var t_call_0 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_1 = (ok1(s, t_call_0) && lib.Number_.to_string(t_call_0, s));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_call_1) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_text(t_call_1, s));
  (s.pc = "xQiqEsIGlVBWEId8");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = s.$value);
  s.rt.logDataWrite();
  var t_elseIf_2 = true;
  (s.pc = "xolTOrWos40PlDsI");
  var t_infix_3 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m < 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "x6X2fk4vDwHtW7kW");
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.hide(s));
  } else {
  (s.pc = "jdbScDz352fC51ZD");
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.show(s));
  (s.pc = "xK4S7FrNcjoVbrXT");
  var t_call_4 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.create_animation(s));
  (s.$anim = t_call_4);
  (s.pc = "xvRwFDBdhXE6rfYC");
  var t_call_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Number_.to_string(t_call_5, s));
  (ok2(s, s.$anim, t_call_6) && s.$anim.text(1, "cubic", "inout", t_call_6, s));
  }
  return s.rt.leave();
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$2, 'a_oKY8zayGQ3QsufrQiKXXS9sh$2');

/* ACTION: set life */
function a_l4svuo4DZFDcDqJbGklzHLTi(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l4svuo4DZFDcDqJbGklzHLTi$0;
  s.name = "set life";
  s.$value = $value;
  return s;
}
cs.registerAction("set life", "l4svuo4DZFDcDqJbGklzHLTi", a_l4svuo4DZFDcDqJbGklzHLTi, true);

function a_l4svuo4DZFDcDqJbGklzHLTi$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_l4svuo4DZFDcDqJbGklzHLTi$5, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_l4svuo4DZFDcDqJbGklzHLTi$5;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$4;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$0, 'a_l4svuo4DZFDcDqJbGklzHLTi$0');

function a_l4svuo4DZFDcDqJbGklzHLTi$5(s) {
  return a_l4svuo4DZFDcDqJbGklzHLTi$4;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$5, 'a_l4svuo4DZFDcDqJbGklzHLTi$5');

function a_l4svuo4DZFDcDqJbGklzHLTi$4(s) {
  (s.pc = "HrH1awtB4sa44j1P");
  var t_call_0 = (ok1(s, s.$value) && lib.Math_.max(0, s.$value, s));
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = t_call_0);
  s.rt.logDataWrite();
  var t_elseIf_1 = true;
  (s.pc = "KKSJ0NQA0LL2KCCt");
  var t_infix_2 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV <= 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "UPv3xvSjaIsOHLKO");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_l4svuo4DZFDcDqJbGklzHLTi$2));
  } else {
  (s.pc = "LscHG2xvkJeUZdfP");
  null;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$1;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$4, 'a_l4svuo4DZFDcDqJbGklzHLTi$4');

function a_l4svuo4DZFDcDqJbGklzHLTi$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "O8ZDpX4rPiqIH7PJ");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_l4svuo4DZFDcDqJbGklzHLTi$3));
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$2, 'a_l4svuo4DZFDcDqJbGklzHLTi$2');

function a_l4svuo4DZFDcDqJbGklzHLTi$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$1, 'a_l4svuo4DZFDcDqJbGklzHLTi$1');

function a_l4svuo4DZFDcDqJbGklzHLTi$3(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_l4svuo4DZFDcDqJbGklzHLTi$1;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$3, 'a_l4svuo4DZFDcDqJbGklzHLTi$3');

/* ACTION: evolve */
function a_gswamj84uYSwqLED2VvLdKi6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gswamj84uYSwqLED2VvLdKi6$0;
  s.name = "evolve";
  return s;
}
cs.registerAction("evolve", "gswamj84uYSwqLED2VvLdKi6", a_gswamj84uYSwqLED2VvLdKi6, true);

function a_gswamj84uYSwqLED2VvLdKi6$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "V02U4MCe9H2MP9DW");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xtVboJorI0AoA2Ll");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.evolve(s));
  var t_elseIf_2 = true;
  (s.pc = "ZyuqlVaK8jZ4RcTi");
  var t_infix_3 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV >= 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "Zzh3zjzuxyYn2f3X");
  return s.rt.enter(a_XjXM7AL67NDGlzsZgg9s44uq(s, a_gswamj84uYSwqLED2VvLdKi6$3));
  } else {
  (s.pc = "lhvgXMp2DzC2GTbM");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
  } else {
  (s.pc = "a59YXO2F5n4BTpGQ");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$1;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$0, 'a_gswamj84uYSwqLED2VvLdKi6$0');

function a_gswamj84uYSwqLED2VvLdKi6$3(s) {
  return a_gswamj84uYSwqLED2VvLdKi6$2;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$3, 'a_gswamj84uYSwqLED2VvLdKi6$3');

function a_gswamj84uYSwqLED2VvLdKi6$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "fr31zBhiCvv05kR8");
  var t_call_5 = lib.Boolean_.not((/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY == undefined), s);
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "Im49UQ654OeS2n44");
  return s.rt.enter(a_PojbQsm32lz5k054APQR8Jb1(s, a_gswamj84uYSwqLED2VvLdKi6$5));
  } else {
  (s.pc = "Z2w9OOKaAGL2CdCJ");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$4;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$2, 'a_gswamj84uYSwqLED2VvLdKi6$2');

function a_gswamj84uYSwqLED2VvLdKi6$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$1, 'a_gswamj84uYSwqLED2VvLdKi6$1');

function a_gswamj84uYSwqLED2VvLdKi6$5(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  return a_gswamj84uYSwqLED2VvLdKi6$4;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$5, 'a_gswamj84uYSwqLED2VvLdKi6$5');

function a_gswamj84uYSwqLED2VvLdKi6$4(s) {
  return a_gswamj84uYSwqLED2VvLdKi6$1;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$4, 'a_gswamj84uYSwqLED2VvLdKi6$4');

/* ACTION: create text */
function a_UMupj4ChNfQ8E2uvW694p1tX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_UMupj4ChNfQ8E2uvW694p1tX$0;
  s.name = "create text";
  s.result = undefined;
  return s;
}
cs.registerAction("create text", "UMupj4ChNfQ8E2uvW694p1tX", a_UMupj4ChNfQ8E2uvW694p1tX, false);

function a_UMupj4ChNfQ8E2uvW694p1tX$0(s) {
  (s.pc = "r2pD3YM0AhwqdeoJ");
  var t_call_0 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(100, 20, 28, "", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "DfUPvQHARvqZmkPa");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_z_index(1000, s));
  (s.pc = "xvp7IxArcVElQk4H");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_friction(1, s));
  (s.pc = "Sh16Yvgqws3F2ttd");
  var t_call_1 = lib.Colors.foreground(s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_1) && s.result.set_color(t_call_1, s));
  return s.rt.leave();
}
cs.registerStep(a_UMupj4ChNfQ8E2uvW694p1tX$0, 'a_UMupj4ChNfQ8E2uvW694p1tX$0');

/* ACTION: evolve life */
function a_XjXM7AL67NDGlzsZgg9s44uq(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XjXM7AL67NDGlzsZgg9s44uq$0;
  s.name = "evolve life";
  s.$l = undefined;
  s.$s = undefined;
  return s;
}
cs.registerAction("evolve life", "XjXM7AL67NDGlzsZgg9s44uq", a_XjXM7AL67NDGlzsZgg9s44uq, false);

function a_XjXM7AL67NDGlzsZgg9s44uq$0(s) {
  (s.pc = "x69dm0I2qdoTbeEa");
  var t_call_0 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && lib.Math_.ceiling(/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s));
  (s.$l = t_call_0);
  (s.pc = "MkDJrwcWdlaEAj5i");
  var t_call_1 = (ok1(s, s.$l) && lib.Number_.to_string(s.$l, s));
  var t_concat_2 = lib.String_.concatAny("\u2764 ", t_call_1);
  (s.$s = t_concat_2);
  var t_elseIf_3 = true;
  (s.pc = "NnjfQ48F1IZTeEU4");
  var t_call_4 = (ok1(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.count(s));
  var t_infix_5 = (ok2(s, s.$l, t_call_4) && (s.$l < t_call_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "xUcDUL43eSf74Few");
  var t_call_6 = (ok2(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m, s.$l) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.at(s.$l, s));
  (s.$s = t_call_6);
  } else {
  (s.pc = "mGcvKApcSmL7WBY4");
  null;
  }
  (s.pc = "Bv24Vr22toZdfAsj");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$s) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_text(s.$s, s));
  return s.rt.leave();
}
cs.registerStep(a_XjXM7AL67NDGlzsZgg9s44uq$0, 'a_XjXM7AL67NDGlzsZgg9s44uq$0');

/* ACTION: evolve timer */
function a_PojbQsm32lz5k054APQR8Jb1(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_PojbQsm32lz5k054APQR8Jb1$0;
  s.name = "evolve timer";
  s.$elapsed = undefined;
  return s;
}
cs.registerAction("evolve timer", "PojbQsm32lz5k054APQR8Jb1", a_PojbQsm32lz5k054APQR8Jb1, true);

function a_PojbQsm32lz5k054APQR8Jb1$0(s) {
  (s.pc = "tSYdAJQ9rmGX28Ph");
  return s.rt.enter(a_q4EB482ElguyYpuPEwTgQQ4e(s, a_PojbQsm32lz5k054APQR8Jb1$1));
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$0, 'a_PojbQsm32lz5k054APQR8Jb1$0');

function a_PojbQsm32lz5k054APQR8Jb1$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$elapsed = t_actRes_0);
  (s.pc = "zaYbaDOnN52N0y3T");
  var t_call_1 = (ok1(s, s.$elapsed) && lib.Math_.round_with_precision(s.$elapsed, 1, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Number_.to_string(t_call_1, s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_2) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_text(t_call_2, s));
  var t_elseIf_3 = true;
  (s.pc = "x5HB6TM2gE95ePes");
  var t_infix_4 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$elapsed) && (s.$elapsed === 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  (s.pc = "M7CIY2SvsjyqZLbG");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_PojbQsm32lz5k054APQR8Jb1$4));
  } else {
  (s.pc = "LUDwr34kig2TmDtQ");
  null;
  }
  return a_PojbQsm32lz5k054APQR8Jb1$3;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$1, 'a_PojbQsm32lz5k054APQR8Jb1$1');

function a_PojbQsm32lz5k054APQR8Jb1$4(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_PojbQsm32lz5k054APQR8Jb1$3;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$4, 'a_PojbQsm32lz5k054APQR8Jb1$4');

function a_PojbQsm32lz5k054APQR8Jb1$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$3, 'a_PojbQsm32lz5k054APQR8Jb1$3');

/* ACTION: current time */
function a_q4EB482ElguyYpuPEwTgQQ4e(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_q4EB482ElguyYpuPEwTgQQ4e$0;
  s.name = "current time";
  s.result = undefined;
  return s;
}
cs.registerAction("current time", "q4EB482ElguyYpuPEwTgQQ4e", a_q4EB482ElguyYpuPEwTgQQ4e, false);

function a_q4EB482ElguyYpuPEwTgQQ4e$0(s) {
  (s.pc = "C4ggpXXT0fM11xJ2");
  var t_call_0 = lib.Time.now(s);
  var t_call_1 = (ok2(s, t_call_0, /* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY) && t_call_0.subtract(/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY, s));
  (s.result = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "hAkzFccDnEQ4eexF");
  var t_infix_3 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "xlavYFgnlGubTeEu");
  var t_infix_4 = (ok2(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY, s.result) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY - s.result));
  var t_call_5 = (ok1(s, t_infix_4) && lib.Math_.max(0, t_infix_4, s));
  (s.result = t_call_5);
  } else {
  (s.pc = "WJJVGOd9tHBSUjdP");
  null;
  }
  if (s.previous.needsPicker) {
  s.rt.displayResult("seconds", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_q4EB482ElguyYpuPEwTgQQ4e$0, 'a_q4EB482ElguyYpuPEwTgQQ4e$0');

/* ACTION: add score */
function a_xINhkUFpWzhMPF0ROZX4TSm4(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xINhkUFpWzhMPF0ROZX4TSm4$0;
  s.name = "add score";
  s.$value = $value;
  s.$sprite = undefined;
  s.$anim = undefined;
  return s;
}
cs.registerAction("add score", "xINhkUFpWzhMPF0ROZX4TSm4", a_xINhkUFpWzhMPF0ROZX4TSm4, false);

function a_xINhkUFpWzhMPF0ROZX4TSm4$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_xINhkUFpWzhMPF0ROZX4TSm4$6, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_xINhkUFpWzhMPF0ROZX4TSm4$6;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$5;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$0, 'a_xINhkUFpWzhMPF0ROZX4TSm4$0');

function a_xINhkUFpWzhMPF0ROZX4TSm4$6(s) {
  return a_xINhkUFpWzhMPF0ROZX4TSm4$5;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$6, 'a_xINhkUFpWzhMPF0ROZX4TSm4$6');

function a_xINhkUFpWzhMPF0ROZX4TSm4$5(s) {
  var t_elseIf_0 = true;
  (s.pc = "VurwTOF3FLa4ejcU");
  var t_infix_1 = (ok1(s, s.$value) && (s.$value > 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "dvQS5eDbxUvHojRk");
  var t_infix_2 = (ok2(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s.$value) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m + s.$value));
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_xINhkUFpWzhMPF0ROZX4TSm4$2, t_infix_2));
  } else {
  (s.pc = "SuassihgZuEM2j6L");
  null;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$1;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$5, 'a_xINhkUFpWzhMPF0ROZX4TSm4$5');

function a_xINhkUFpWzhMPF0ROZX4TSm4$2(s) {
  var t_elseIf_3 = true;
  (s.pc = "sfOOtfKb4Xf1BwcX");
  var t_infix_4 = (ok1(s, s.$value) && (s.$value > 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "l3wCIj7Pgnwwaxa6");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_xINhkUFpWzhMPF0ROZX4TSm4$4));
  } else {
  (s.pc = "L1obvlUe4KPSJiqm");
  null;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$3;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$2, 'a_xINhkUFpWzhMPF0ROZX4TSm4$2');

function a_xINhkUFpWzhMPF0ROZX4TSm4$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$1, 'a_xINhkUFpWzhMPF0ROZX4TSm4$1');

function a_xINhkUFpWzhMPF0ROZX4TSm4$4(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  (s.$sprite = t_actRes_5);
  (s.pc = "SpicJAYTeJmiPCCz");
  var t_call_6 = (ok1(s, s.$value) && lib.Math_.ceiling(s.$value, s));
  var t_call_7 = (ok1(s, t_call_6) && lib.Number_.to_string(t_call_6, s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_7) && s.$sprite.set_text(t_call_7, s));
  (s.pc = "jsbm2wkw4a611R5L");
  var t_call_8 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.x(s));
  var t_call_9 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.y(s));
  s.rt.logObjectMutation(s.$sprite);
  (ok3(s, s.$sprite, t_call_8, t_call_9) && s.$sprite.set_pos(t_call_8, t_call_9, s));
  (s.pc = "xoIUTQpKKecgzCBQ");
  var t_call_10 = (ok1(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.color(s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_10) && s.$sprite.set_color(t_call_10, s));
  (s.pc = "A2Yn5zDjzdNo1bNy");
  var t_call_11 = (ok1(s, s.$sprite) && s.$sprite.create_animation(s));
  (s.$anim = t_call_11);
  (s.pc = "QTO5DnOJkIqirrb8");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "cubic", 1.5, s));
  (s.pc = "A4CmMqj3KJAY3UGU");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  return a_xINhkUFpWzhMPF0ROZX4TSm4$3;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$4, 'a_xINhkUFpWzhMPF0ROZX4TSm4$4');

function a_xINhkUFpWzhMPF0ROZX4TSm4$3(s) {
  return a_xINhkUFpWzhMPF0ROZX4TSm4$1;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$3, 'a_xINhkUFpWzhMPF0ROZX4TSm4$3');

/* ACTION: remove life */
function a_qoY1RsaFEb0jJJuZq8SkbAp3(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qoY1RsaFEb0jJJuZq8SkbAp3$0;
  s.name = "remove life";
  s.$value = $value;
  return s;
}
cs.registerAction("remove life", "qoY1RsaFEb0jJJuZq8SkbAp3", a_qoY1RsaFEb0jJJuZq8SkbAp3, true);

function a_qoY1RsaFEb0jJJuZq8SkbAp3$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_qoY1RsaFEb0jJJuZq8SkbAp3$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$3;
  }
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$2;
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$0, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$0');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$3(s) {
  return a_qoY1RsaFEb0jJJuZq8SkbAp3$2;
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$3, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$3');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$2(s) {
  (s.pc = "YQ51m4VCvuQWTj3G");
  var t_infix_0 = (ok2(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s.$value) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV - s.$value));
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_qoY1RsaFEb0jJJuZq8SkbAp3$1, t_infix_0));
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$2, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$2');

function a_qoY1RsaFEb0jJJuZq8SkbAp3$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_qoY1RsaFEb0jJJuZq8SkbAp3$1, 'a_qoY1RsaFEb0jJJuZq8SkbAp3$1');

/* ACTION: end */
function a_a14qLDjp7EtajVvdEd1rS18X(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a14qLDjp7EtajVvdEd1rS18X$0;
  s.name = "end";
  return s;
}
cs.registerAction("end", "a14qLDjp7EtajVvdEd1rS18X", a_a14qLDjp7EtajVvdEd1rS18X, true);

function a_a14qLDjp7EtajVvdEd1rS18X$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "GEyVdP7gHEhMYuLh");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  var t_elseIf_2 = true;
  (s.pc = "PNm4kHsAAvLeTCPN");
  var t_call_3 = lib.Boolean_.not((/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju == undefined), s);
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "OmNZGM9KWiapFko7");
  return s.rt.enter((ok1(s, /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju) && /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju(s, a_a14qLDjp7EtajVvdEd1rS18X$3)));
  } else {
  var t_elseIf_4 = true;
  (s.pc = "oCdsISU82CsuPzFb");
  var t_infix_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "ckNPHuv2TzqnX5lX");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_6 = s.rt.getAwaitResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$6);
  (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Bazaar.post_leaderboard_score(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, t_resumeCtx_6));
  return a_a14qLDjp7EtajVvdEd1rS18X$6;
  } else {
  (s.pc = "oXY0warzW1Ph52Hk");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
  } else {
  (s.pc = "W7P9Wn4LvpYVd9wW");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$1;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$0, 'a_a14qLDjp7EtajVvdEd1rS18X$0');

function a_a14qLDjp7EtajVvdEd1rS18X$3(s) {
  (s.pc = "xKYF8z0LLaVOQks4");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$4));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$3, 'a_a14qLDjp7EtajVvdEd1rS18X$3');

function a_a14qLDjp7EtajVvdEd1rS18X$6(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$6, 'a_a14qLDjp7EtajVvdEd1rS18X$6');

function a_a14qLDjp7EtajVvdEd1rS18X$5(s) {
  (s.pc = "WX2o7oS0pkjUgsJI");
  return s.rt.enter(a_joFUGC04wxnpsBuC02e32Cvy(s, a_a14qLDjp7EtajVvdEd1rS18X$7));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$5, 'a_a14qLDjp7EtajVvdEd1rS18X$5');

function a_a14qLDjp7EtajVvdEd1rS18X$2(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$1;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$2, 'a_a14qLDjp7EtajVvdEd1rS18X$2');

function a_a14qLDjp7EtajVvdEd1rS18X$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$1, 'a_a14qLDjp7EtajVvdEd1rS18X$1');

function a_a14qLDjp7EtajVvdEd1rS18X$4(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$4, 'a_a14qLDjp7EtajVvdEd1rS18X$4');

function a_a14qLDjp7EtajVvdEd1rS18X$7(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  var t_elseIf_8 = true;
  (s.pc = "rhOI9dY2tXLRulK2");
  var t_infix_9 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "xsAtimVBXCdfhLa7");
  lib.Wall.clear(s);
  (s.pc = "xtYyymf0Hs7Nmj3a");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$9);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_10);
  return a_a14qLDjp7EtajVvdEd1rS18X$9;
  } else {
  (s.pc = "J10ZriS06QW5z4ju");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$8;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$7, 'a_a14qLDjp7EtajVvdEd1rS18X$7');

function a_a14qLDjp7EtajVvdEd1rS18X$9(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$8;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$9, 'a_a14qLDjp7EtajVvdEd1rS18X$9');

function a_a14qLDjp7EtajVvdEd1rS18X$8(s) {
  (s.pc = "NA2pzhNdz5RT9LrY");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$10));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$8, 'a_a14qLDjp7EtajVvdEd1rS18X$8');

function a_a14qLDjp7EtajVvdEd1rS18X$10(s) {
  (s.pc = "ixtnMJPUsyivodZ2");
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$11);
  lib.Time.stop(t_resumeCtx_11);
  return a_a14qLDjp7EtajVvdEd1rS18X$11;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$10, 'a_a14qLDjp7EtajVvdEd1rS18X$10');

function a_a14qLDjp7EtajVvdEd1rS18X$11(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$11, 'a_a14qLDjp7EtajVvdEd1rS18X$11');

/* ACTION: start */
function a_rUM4WD97vl3DCMmQPvBzb6jc(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rUM4WD97vl3DCMmQPvBzb6jc$0;
  s.name = "start";
  s.result = undefined;
  return s;
}
cs.registerAction("start", "rUM4WD97vl3DCMmQPvBzb6jc", a_rUM4WD97vl3DCMmQPvBzb6jc, true);

function a_rUM4WD97vl3DCMmQPvBzb6jc$0(s) {
  (s.pc = "itfyVKsFJ72c4STK");
  var t_infix_0 = (0 - 1);
  var t_infix_1 = (0 - 1);
  return s.rt.enter(a_XQPjg13t37zIEtpt44U6ff92(s, a_rUM4WD97vl3DCMmQPvBzb6jc$1, t_infix_0, t_infix_1));
}
cs.registerStep(a_rUM4WD97vl3DCMmQPvBzb6jc$0, 'a_rUM4WD97vl3DCMmQPvBzb6jc$0');

function a_rUM4WD97vl3DCMmQPvBzb6jc$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.result = t_actRes_2);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_rUM4WD97vl3DCMmQPvBzb6jc$1, 'a_rUM4WD97vl3DCMmQPvBzb6jc$1');

/* ACTION: game over */
function a_joFUGC04wxnpsBuC02e32Cvy(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_joFUGC04wxnpsBuC02e32Cvy$0;
  s.name = "game over";
  s.$message = undefined;
  s.$text = undefined;
  s.$i = undefined;
  return s;
}
cs.registerAction("game over", "joFUGC04wxnpsBuC02e32Cvy", a_joFUGC04wxnpsBuC02e32Cvy, true);

function a_joFUGC04wxnpsBuC02e32Cvy$0(s) {
  (s.pc = "bR2JRRWa79KdtZFj");
  (s.$message = "game over");
  (s.pc = "M2lvKKOoUSyjBCSv");
  var t_call_0 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(200, 40, 40, s.$message, s));
  s.rt.markAllocated(t_call_0);
  (s.$text = t_call_0);
  (s.pc = "JMxAY8MaxP9BJkYm");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.set_opacity(0, s));
  (s.pc = "G0kMTi3FwR2Te2TL");
  var t_infix_1 = (720 / 5);
  s.t_bnd_2 = t_infix_1;
  (s.$i = 0);
  return a_joFUGC04wxnpsBuC02e32Cvy$1;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$0, 'a_joFUGC04wxnpsBuC02e32Cvy$0');

function a_joFUGC04wxnpsBuC02e32Cvy$1(s) {
  if ((s.$i < s.t_bnd_2)) {
  (s.pc = "x8gGwdunz5TOunUX");
  var t_call_3 = (ok1(s, s.$text) && s.$text.opacity(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 + 0.05));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_4) && s.$text.set_opacity(t_infix_4, s));
  (s.pc = "UZreYUZJfIfRGKib");
  var t_call_5 = lib.Colors.random(s);
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_5) && s.$text.set_color(t_call_5, s));
  (s.pc = "ceUd1V8yfqAFQqBu");
  var t_call_6 = (ok1(s, s.$text) && s.$text.angle(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 + 5));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_7) && s.$text.set_angle(t_infix_7, s));
  (s.pc = "x92Ig40jCZ7U1SyU");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  (s.pc = "tZWU4KGKKBKVwDn8");
  var t_resumeCtx_8 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$3);
  lib.Time.sleep(0.02, t_resumeCtx_8);
  return a_joFUGC04wxnpsBuC02e32Cvy$3;
  }
  (s.pc = "TU2xkLuKEQOh3DbW");
  var t_resumeCtx_9 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$4);
  lib.Time.sleep(2, t_resumeCtx_9);
  return a_joFUGC04wxnpsBuC02e32Cvy$4;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$1, 'a_joFUGC04wxnpsBuC02e32Cvy$1');

function a_joFUGC04wxnpsBuC02e32Cvy$3(s) {
  (s.$i++);
  return a_joFUGC04wxnpsBuC02e32Cvy$1;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$3, 'a_joFUGC04wxnpsBuC02e32Cvy$3');

function a_joFUGC04wxnpsBuC02e32Cvy$4(s) {
  (s.pc = "cMsaragG8BtT1kXr");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.delete_(s));
  (s.pc = "uRIMBM6HQm2N2Nxd");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$4, 'a_joFUGC04wxnpsBuC02e32Cvy$4');

/* ACTION: reset */
function a_Kv3t1TJgZdpYJpx9reGXtTW2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Kv3t1TJgZdpYJpx9reGXtTW2$0;
  s.name = "reset";
  return s;
}
cs.registerAction("reset", "Kv3t1TJgZdpYJpx9reGXtTW2", a_Kv3t1TJgZdpYJpx9reGXtTW2, false);

function a_Kv3t1TJgZdpYJpx9reGXtTW2$0(s) {
  (s.pc = "xLdUoT2qnoqxmytB");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_Kv3t1TJgZdpYJpx9reGXtTW2$1));
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$0, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$0');

function a_Kv3t1TJgZdpYJpx9reGXtTW2$1(s) {
  (s.pc = "JuuhG6ReNJxwspTc");
  var t_call_0 = lib.Invalid.action(s);
  (/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju = t_call_0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$1, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$1');

/* ACTION: start with fixed size */
function a_XQPjg13t37zIEtpt44U6ff92(previous, returnAddr, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XQPjg13t37zIEtpt44U6ff92$0;
  s.name = "start with fixed size";
  s.$width = $width;
  s.$height = $height;
  s.result = undefined;
  s.$perform = undefined;
  return s;
}
cs.registerAction("start with fixed size", "XQPjg13t37zIEtpt44U6ff92", a_XQPjg13t37zIEtpt44U6ff92, true);

function a_XQPjg13t37zIEtpt44U6ff92$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_XQPjg13t37zIEtpt44U6ff92$5, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "width", "$width"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "height", "$height"));
  return a_XQPjg13t37zIEtpt44U6ff92$5;
  }
  return a_XQPjg13t37zIEtpt44U6ff92$4;
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$0, 'a_XQPjg13t37zIEtpt44U6ff92$0');

function a_XQPjg13t37zIEtpt44U6ff92$5(s) {
  return a_XQPjg13t37zIEtpt44U6ff92$4;
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$5, 'a_XQPjg13t37zIEtpt44U6ff92$5');

function a_XQPjg13t37zIEtpt44U6ff92$4(s) {
  (s.pc = "xnuJIIH3pQuwhAsw");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_XQPjg13t37zIEtpt44U6ff92$1));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$4, 'a_XQPjg13t37zIEtpt44U6ff92$4');

function a_XQPjg13t37zIEtpt44U6ff92$1(s) {
  (s.pc = "xUWsaURY4G0KHWcS");
  return s.rt.enter(a_Ayu95FKZqA9xPdjQXSANLGvP(s, a_XQPjg13t37zIEtpt44U6ff92$2, s.$width, s.$height));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$1, 'a_XQPjg13t37zIEtpt44U6ff92$1');

function a_XQPjg13t37zIEtpt44U6ff92$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "NGgspE16GddTzQpD");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_XQPjg13t37zIEtpt44U6ff92$3(t_lmbProxy_1(la0), la1) });
  (s.pc = "CctsikpPaxGUdxUU");
  var t_call_2 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  t_call_2;
  (s.pc = "nggfDbuDWSW8HkO7");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.post_to_wall(s));
  (s.pc = "qe89fHKQxAlM428p");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (s.pc = "rmmerjSOecJSwDqC");
  lib.App.log("game\u003a end initialize", s);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$2, 'a_XQPjg13t37zIEtpt44U6ff92$2');

/* ACTION: a_XQPjg13t37zIEtpt44U6ff92::lambda::3 */
function a_a_XQPjg13t37zIEtpt44U6ff92$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_XQPjg13t37zIEtpt44U6ff92$3$0;
  s.name = "start with fixed size";
  return s;
}
cs.registerLambda("a_XQPjg13t37zIEtpt44U6ff92\u003a\u003alambda\u003a\u003a3", "a_XQPjg13t37zIEtpt44U6ff92$3", a_a_XQPjg13t37zIEtpt44U6ff92$3, true);

function a_a_XQPjg13t37zIEtpt44U6ff92$3$0(s) {
  (s.pc = "iAVXIMARzmZHG9C4");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_a_XQPjg13t37zIEtpt44U6ff92$3$1));
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$0, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$0');

function a_a_XQPjg13t37zIEtpt44U6ff92$3$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  var t_elseIf_1 = true;
  (s.pc = "xp5Ar4dvRYXdJEWH");
  var t_call_2 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "KatnpCQDlegi4a82");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  } else {
  (s.pc = "K6ow1Yy191hlla70");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$1, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$1');

/* ACTION: board */
function a_y5RrO2ILX7gVIvFQMpo6XjGo(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_y5RrO2ILX7gVIvFQMpo6XjGo$0;
  s.name = "board";
  s.result = undefined;
  return s;
}
cs.registerAction("board", "y5RrO2ILX7gVIvFQMpo6XjGo", a_y5RrO2ILX7gVIvFQMpo6XjGo, false);

function a_y5RrO2ILX7gVIvFQMpo6XjGo$0(s) {
  (s.pc = "nXVJcphXOyIll9oE");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  if (s.previous.needsPicker) {
  s.rt.displayResult("board", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_y5RrO2ILX7gVIvFQMpo6XjGo$0, 'a_y5RrO2ILX7gVIvFQMpo6XjGo$0');

/* ACTION: clear board */
function a_xpQAnETcU9aowS6g7p1qZZbf(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xpQAnETcU9aowS6g7p1qZZbf$0;
  s.name = "clear board";
  return s;
}
cs.registerAction("clear board", "xpQAnETcU9aowS6g7p1qZZbf", a_xpQAnETcU9aowS6g7p1qZZbf, false);

function a_xpQAnETcU9aowS6g7p1qZZbf$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "otzjU0KwlOeyFv7W");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xb2iFSOWUmUxd3BO");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.clear_every_frame_timers(s));
  } else {
  (s.pc = "d4ZYKVbKyo0E1768");
  null;
  }
  (s.pc = "znTtVcKS99o5PuwK");
  var t_call_2 = lib.Invalid.board(s);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xpQAnETcU9aowS6g7p1qZZbf$0, 'a_xpQAnETcU9aowS6g7p1qZZbf$0');

/* ACTION: set background scene */
function a_x8hRsIT9CAZerwKF(previous, returnAddr, $pic, $direction) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x8hRsIT9CAZerwKF$0;
  s.name = "set background scene";
  s.$pic = $pic;
  s.$direction = $direction;
  s.$b = undefined;
  s.$scene = undefined;
  s.$layer = undefined;
  s.$perform = undefined;
  s.$perform1 = undefined;
  return s;
}
cs.registerAction("set background scene", "x8hRsIT9CAZerwKF", a_x8hRsIT9CAZerwKF, true);

function a_x8hRsIT9CAZerwKF$0(s) {
  (s.pc = "cXnTiVb5rm0qSDSX");
  var t_call_0 = (ok1(s, s.$direction) && lib.String_.trim(s.$direction, " \u0009", s));
  var t_call_1 = (ok1(s, t_call_0) && lib.String_.to_lower_case(t_call_0, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.String_.equals(t_call_1, "horizontal", s));
  (s.$b = t_call_2);
  (s.pc = "FjQX2QH2ZqBHBOpO");
  var t_call_3 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.background_scene(s));
  (s.$scene = t_call_3);
  (s.pc = "xbEzCcsY22RoPtXj");
  (ok1(s, s.$scene) && s.$scene.clear(s));
  (s.pc = "S7bkh6r4pVcHgV8c");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_x8hRsIT9CAZerwKF$1);
  var t_call_5 = (ok1(s, s.$pic) && s.$pic.clone(t_resumeCtx_4));
  return a_x8hRsIT9CAZerwKF$1;
}
cs.registerStep(a_x8hRsIT9CAZerwKF$0, 'a_x8hRsIT9CAZerwKF$0');

function a_x8hRsIT9CAZerwKF$1(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$pic = t_pauseRes_6);
  var t_elseIf_7 = true;
  (s.pc = "VxjO3KnRByvOLvVK");
  ok1(s, s.$b);
  if (s.$b) {
  (s.pc = "U2a67VkZZO12op2U");
  var t_infix_8 = (0 - 1);
  var t_call_9 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_x8hRsIT9CAZerwKF$3);
  (ok3(s, s.$pic, t_infix_8, t_call_9) && s.$pic.resize(t_infix_8, t_call_9, t_resumeCtx_10));
  return a_x8hRsIT9CAZerwKF$3;
  } else {
  (s.pc = "p7Io8ZWoL2G6yL92");
  var t_call_11 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_12 = (0 - 1);
  s.rt.logObjectMutation(s.$pic);
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_x8hRsIT9CAZerwKF$4);
  (ok3(s, s.$pic, t_call_11, t_infix_12) && s.$pic.resize(t_call_11, t_infix_12, t_resumeCtx_13));
  return a_x8hRsIT9CAZerwKF$4;
  }
  return a_x8hRsIT9CAZerwKF$2;
}
cs.registerStep(a_x8hRsIT9CAZerwKF$1, 'a_x8hRsIT9CAZerwKF$1');

function a_x8hRsIT9CAZerwKF$3(s) {
  return a_x8hRsIT9CAZerwKF$2;
}
cs.registerStep(a_x8hRsIT9CAZerwKF$3, 'a_x8hRsIT9CAZerwKF$3');

function a_x8hRsIT9CAZerwKF$4(s) {
  return a_x8hRsIT9CAZerwKF$2;
}
cs.registerStep(a_x8hRsIT9CAZerwKF$4, 'a_x8hRsIT9CAZerwKF$4');

function a_x8hRsIT9CAZerwKF$2(s) {
  (s.pc = "ozFKGP79IQraapHB");
  s.rt.logObjectMutation(s.$scene);
  var t_resumeCtx_14 = s.rt.getBlockingResumeCtx(a_x8hRsIT9CAZerwKF$5);
  var t_call_15 = (ok2(s, s.$scene, s.$pic) && s.$scene.create_layer(0, s.$pic, t_resumeCtx_14));
  return a_x8hRsIT9CAZerwKF$5;
}
cs.registerStep(a_x8hRsIT9CAZerwKF$2, 'a_x8hRsIT9CAZerwKF$2');

function a_x8hRsIT9CAZerwKF$5(s) {
  var t_pauseRes_16 = s.pauseValue;
  (s.$layer = t_pauseRes_16);
  var t_elseIf_17 = true;
  (s.pc = "eGk2b4ExeTM73Kg5");
  var t_call_18 = lib.Boolean_.not((/* background scene move */ s.d.$oJd6t0JYUca8Bpha == undefined), s);
  ok1(s, t_call_18);
  if (t_call_18) {
  (s.pc = "TrbtdU7nPhE4r4tN");
  (ok1(s, /* background scene move */ s.d.$oJd6t0JYUca8Bpha) && /* background scene move */ s.d.$oJd6t0JYUca8Bpha.delete_(s));
  } else {
  (s.pc = "BGus53T8sa33bUMq");
  null;
  }
  var t_elseIf_19 = true;
  (s.pc = "lAeYACw4EOAzqkI9");
  ok1(s, s.$b);
  if (s.$b) {
  (s.pc = "dDXqnuq6ZX0XYuiq");
  var t_lmbv_20 = s.$scene;
  var t_lmbProxy_21 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_x8hRsIT9CAZerwKF$8(t_lmbProxy_21(la0), la1, t_lmbv_20) });
  (s.pc = "LZGihYJA823COO24");
  var t_call_22 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  (/* background scene move */ s.d.$oJd6t0JYUca8Bpha = t_call_22);
  s.rt.logDataWrite();
  } else {
  (s.pc = "CcNlh4HGCmc6EI44");
  var t_lmbv_23 = s.$scene;
  var t_lmbProxy_24 = s.libs.mkLambdaProxy;
  (s.$perform1 = function(la0, la1) { return a_a_x8hRsIT9CAZerwKF$9(t_lmbProxy_24(la0), la1, t_lmbv_23) });
  (s.pc = "wzNI5zIvycykPz4e");
  var t_call_25 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform1) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform1, s));
  (/* background scene move */ s.d.$oJd6t0JYUca8Bpha = t_call_25);
  s.rt.logDataWrite();
  }
  return s.rt.leave();
}
cs.registerStep(a_x8hRsIT9CAZerwKF$5, 'a_x8hRsIT9CAZerwKF$5');

/* ACTION: a_x8hRsIT9CAZerwKF::lambda::8 */
function a_a_x8hRsIT9CAZerwKF$8(previous, returnAddr, $scene) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x8hRsIT9CAZerwKF$8$0;
  s.name = "set background scene";
  s.$scene = $scene;
  return s;
}
cs.registerLambda("a_x8hRsIT9CAZerwKF\u003a\u003alambda\u003a\u003a8", "a_x8hRsIT9CAZerwKF$8", a_a_x8hRsIT9CAZerwKF$8, true);

function a_a_x8hRsIT9CAZerwKF$8$0(s) {
  (s.pc = "OpD6ZCcvZ2IeZrER");
  var t_call_0 = (ok1(s, s.$scene) && s.$scene.view_x(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 + 1));
  s.rt.logObjectMutation(s.$scene);
  (ok2(s, s.$scene, t_infix_1) && s.$scene.set_view_x(t_infix_1, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x8hRsIT9CAZerwKF$8$0, 'a_a_x8hRsIT9CAZerwKF$8$0');

/* ACTION: a_x8hRsIT9CAZerwKF::lambda::9 */
function a_a_x8hRsIT9CAZerwKF$9(previous, returnAddr, $scene) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_x8hRsIT9CAZerwKF$9$0;
  s.name = "set background scene";
  s.$scene = $scene;
  return s;
}
cs.registerLambda("a_x8hRsIT9CAZerwKF\u003a\u003alambda\u003a\u003a9", "a_x8hRsIT9CAZerwKF$9", a_a_x8hRsIT9CAZerwKF$9, true);

function a_a_x8hRsIT9CAZerwKF$9$0(s) {
  (s.pc = "xRSy4Rcl9aKAtAcs");
  var t_call_0 = (ok1(s, s.$scene) && s.$scene.view_y(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 + 1));
  s.rt.logObjectMutation(s.$scene);
  (ok2(s, s.$scene, t_infix_1) && s.$scene.set_view_y(t_infix_1, s));
  return s.rt.leave();
}
cs.registerStep(a_a_x8hRsIT9CAZerwKF$9$0, 'a_a_x8hRsIT9CAZerwKF$9$0');

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
  if(!d.hasOwnProperty("$xubkD4SENn7AllzejMhYSTOV")) d.$xubkD4SENn7AllzejMhYSTOV = 0;
  if(!d.hasOwnProperty("$lp3pSLpGr7O3RGbDzuSQiJ5m")) d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0;
  if(!d.hasOwnProperty("$TzLNjDeJYpMRpdgNFuqgE2PY")) d.$TzLNjDeJYpMRpdgNFuqgE2PY = lib.DateTime.defaultValue;
  if(!d.hasOwnProperty("$x4cIV8c7P0QJsADCfcHm2ApY")) d.$x4cIV8c7P0QJsADCfcHm2ApY = 0;

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$xW5SJ4MKJ44wSSDVuZgZG3iS = undefined;
  d.$xubkD4SENn7AllzejMhYSTOV = 0;
  d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0;
  d.$TzLNjDeJYpMRpdgNFuqgE2PY = lib.DateTime.defaultValue;
  d.$pHEIAaLyqWXgpyUd6dIeYp2X = undefined;
  d.$AejJAmPMk38UG2URZk5hXYh6 = undefined;
  d.$x2fjfvNmVawvnAWKndzdfxls = undefined;
  d.$x4cIV8c7P0QJsADCfcHm2ApY = 0;
  d.$emzufgdY6lsG2RaaCYaxwN8m = undefined;
  d.$Eu2dngMaA73jYqD6d0u8iCju = undefined;
  d.$oJd6t0JYUca8Bpha = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set score";
cs.authorId = "unknown";
cs.scriptId = "rivma";
cs.scriptGuid = "d3814b33-2c88-4e7e-8f81-3bbfe4f9c1a6";
}),

// **************************************************************
"y83vK3X8NE0kTjCd": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "gamepad";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: on button pressed */
function a_WXa1HIFpjLPPuHwF(previous, returnAddr, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_WXa1HIFpjLPPuHwF$0;
  s.name = "on button pressed";
  s.$action = $action;
  s.result = undefined;
  s.$handler = undefined;
  s.$ev = undefined;
  s.$tapped = undefined;
  s.$ev2 = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$state = undefined;
  s.$btn_name = undefined;
  s.$perform = undefined;
  s.$ev3 = undefined;
  s.$pressed = undefined;
  return s;
}
cs.registerAction("on button pressed", "WXa1HIFpjLPPuHwF", a_WXa1HIFpjLPPuHwF, true);

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

function a_WXa1HIFpjLPPuHwF$0(s) {
  (s.pc = "kCNUrJ58ODLFjqSE");
  var t_call_0 = (ok1(s, /* Gamepad Event Binding */ s.d.$B5CwXDSpNzCP42Ri) && /* Gamepad Event Binding */ s.d.$B5CwXDSpNzCP42Ri.create(s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "ruht2urgD9P0Owdx");
  var t_call_1 = lib.Create.Collection_of(s, lib.EventBinding);
  s.rt.markAllocated(t_call_1);
  if (s.result) {
  s.result.perform_set("$bindings", t_call_1, s);
  }
  (s.pc = "P3izRPTD4J4M0Utd");
  var t_lmbv_2 = s.$action;
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_WXa1HIFpjLPPuHwF$2(t_lmbProxy_3(la0), la1, t_lmbv_2) });
  (s.pc = "MVLlCR56fgCGJEwb");
  var t_call_4 = (ok1(s, s.$handler) && lib.Senses.on_key_pressed("space", s.$handler, s));
  (s.$ev = t_call_4);
  (s.pc = "IJCZAy2QOOIGsiph");
  if (s.result) {
  var t_recOp_5 = s.result[("$bindings")];
  }
  s.rt.logObjectMutation(t_recOp_5);
  (ok2(s, t_recOp_5, s.$ev) && t_recOp_5.add(s.$ev, s));
  (s.pc = "FI2pqcbqJr5B5nYd");
  var t_lmbv_6 = s.$action;
  var t_lmbProxy_7 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_WXa1HIFpjLPPuHwF$4(t_lmbProxy_7(la0), la1, la2, la3, t_lmbv_6) });
  (s.pc = "nQ0624TgT5d7Np4l");
  var t_libcall_8 = s.libs["FAAwwQWlwuPOJZ9p"]["board"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_WXa1HIFpjLPPuHwF$5));
}
cs.registerStep(a_WXa1HIFpjLPPuHwF$0, 'a_WXa1HIFpjLPPuHwF$0');

function a_WXa1HIFpjLPPuHwF$5(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  s.rt.logObjectMutation(t_actRes_9);
  var t_call_10 = (ok2(s, t_actRes_9, s.$tapped) && t_actRes_9.on_tap(s.$tapped, s));
  (s.$ev2 = t_call_10);
  (s.pc = "b4DyggOZsb42VJew");
  if (s.result) {
  var t_recOp_11 = s.result[("$bindings")];
  }
  s.rt.logObjectMutation(t_recOp_11);
  (ok2(s, t_recOp_11, s.$ev2) && t_recOp_11.add(s.$ev2, s));
  (s.pc = "A0Kvs4Rx4Zez5CLb");
  var t_call_12 = (ok1(s, /* Button State */ s.d.$PtpGyZJTdYtckhRv) && /* Button State */ s.d.$PtpGyZJTdYtckhRv.create(s));
  s.rt.markAllocated(t_call_12);
  (s.$state = t_call_12);
  (s.pc = "gg0O0MVZAT1CAzK2");
  (s.$btn_name = "a");
  (s.pc = "Z5xTM2xdjWs32GnQ");
  return s.rt.enter(a_MqSmFDsxMgTB4xkn(s, a_WXa1HIFpjLPPuHwF$7, s.$btn_name));
}
cs.registerStep(a_WXa1HIFpjLPPuHwF$5, 'a_WXa1HIFpjLPPuHwF$5');

function a_WXa1HIFpjLPPuHwF$7(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  if (s.$state) {
  s.$state.perform_set("$pressed", t_actRes_13, s);
  }
  (s.pc = "xkNjoDPruQAqd4Vy");
  var t_lmbv_14 = s.$btn_name;
  var t_lmbv_15 = s.$state;
  var t_lmbv_16 = s.$action;
  var t_lmbProxy_17 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_WXa1HIFpjLPPuHwF$9(t_lmbProxy_17(la0), la1, t_lmbv_14, t_lmbv_15, t_lmbv_16) });
  (s.pc = "ES84jGq7VtcYYzsk");
  var t_libcall_18 = s.libs["FAAwwQWlwuPOJZ9p"]["board"](s);
  return s.rt.enter(t_libcall_18.invoke(t_libcall_18, a_WXa1HIFpjLPPuHwF$10));
}
cs.registerStep(a_WXa1HIFpjLPPuHwF$7, 'a_WXa1HIFpjLPPuHwF$7');

function a_WXa1HIFpjLPPuHwF$10(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  var t_call_20 = (ok2(s, t_actRes_19, s.$perform) && t_actRes_19.add_on_every_frame(s.$perform, s));
  (s.$ev3 = t_call_20);
  (s.pc = "xjU7OfAyEY1t2Zlg");
  if (s.result) {
  var t_recOp_21 = s.result[("$bindings")];
  }
  s.rt.logObjectMutation(t_recOp_21);
  (ok2(s, t_recOp_21, s.$ev3) && t_recOp_21.add(s.$ev3, s));
  return s.rt.leave();
}
cs.registerStep(a_WXa1HIFpjLPPuHwF$10, 'a_WXa1HIFpjLPPuHwF$10');

/* ACTION: a_WXa1HIFpjLPPuHwF::lambda::2 */
function a_a_WXa1HIFpjLPPuHwF$2(previous, returnAddr, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_WXa1HIFpjLPPuHwF$2$0;
  s.name = "on button pressed";
  s.$action = $action;
  return s;
}
cs.registerLambda("a_WXa1HIFpjLPPuHwF\u003a\u003alambda\u003a\u003a2", "a_WXa1HIFpjLPPuHwF$2", a_a_WXa1HIFpjLPPuHwF$2, true);

function a_a_WXa1HIFpjLPPuHwF$2$0(s) {
  (s.pc = "ad3dhq1Q6xkQBaw3");
  return s.rt.enter((ok1(s, s.$action) && s.$action(s, a_a_WXa1HIFpjLPPuHwF$2$1)));
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$2$0, 'a_a_WXa1HIFpjLPPuHwF$2$0');

function a_a_WXa1HIFpjLPPuHwF$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$2$1, 'a_a_WXa1HIFpjLPPuHwF$2$1');

/* ACTION: a_WXa1HIFpjLPPuHwF::lambda::4 */
function a_a_WXa1HIFpjLPPuHwF$4(previous, returnAddr, $x, $y, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_WXa1HIFpjLPPuHwF$4$0;
  s.name = "on button pressed";
  s.$action = $action;
  return s;
}
cs.registerLambda("a_WXa1HIFpjLPPuHwF\u003a\u003alambda\u003a\u003a4", "a_WXa1HIFpjLPPuHwF$4", a_a_WXa1HIFpjLPPuHwF$4, true);

function a_a_WXa1HIFpjLPPuHwF$4$0(s) {
  (s.pc = "wL3nosJAQfhAa9jG");
  return s.rt.enter((ok1(s, s.$action) && s.$action(s, a_a_WXa1HIFpjLPPuHwF$4$1)));
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$4$0, 'a_a_WXa1HIFpjLPPuHwF$4$0');

function a_a_WXa1HIFpjLPPuHwF$4$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$4$1, 'a_a_WXa1HIFpjLPPuHwF$4$1');

/* ACTION: a_WXa1HIFpjLPPuHwF::lambda::9 */
function a_a_WXa1HIFpjLPPuHwF$9(previous, returnAddr, $btn_name, $state, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_WXa1HIFpjLPPuHwF$9$0;
  s.name = "on button pressed";
  s.$btn_name = $btn_name;
  s.$pressed = undefined;
  s.$state = $state;
  s.$action = $action;
  return s;
}
cs.registerLambda("a_WXa1HIFpjLPPuHwF\u003a\u003alambda\u003a\u003a9", "a_WXa1HIFpjLPPuHwF$9", a_a_WXa1HIFpjLPPuHwF$9, true);

function a_a_WXa1HIFpjLPPuHwF$9$0(s) {
  (s.pc = "H1O6JVSByAsdB5gl");
  return s.rt.enter(a_MqSmFDsxMgTB4xkn(s, a_a_WXa1HIFpjLPPuHwF$9$1, s.$btn_name));
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$9$0, 'a_a_WXa1HIFpjLPPuHwF$9$0');

function a_a_WXa1HIFpjLPPuHwF$9$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$pressed = t_actRes_0);
  var t_elseIf_1 = true;
  (s.pc = "XBao9npXj3jLj44Y");
  var t_lazy_2 = s.$pressed;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  if (s.$state) {
  var t_recOp_3 = s.$state[("$pressed")];
  }
  var t_call_4 = (ok1(s, t_recOp_3) && lib.Boolean_.not(t_recOp_3, s));
  (t_lazy_2 = t_call_4);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "zrfrKef5j3G6I87r");
  s.t_task_5 = s.rt.mkActionTask();
  return s.rt.enterAsync(s.t_task_5, (ok1(s, s.$action) && s.$action(s, a_a_WXa1HIFpjLPPuHwF$9$5)));
  } else {
  (s.pc = "gmLPmC2jB3xD6LA9");
  null;
  }
  return a_a_WXa1HIFpjLPPuHwF$9$4;
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$9$1, 'a_a_WXa1HIFpjLPPuHwF$9$1');

function a_a_WXa1HIFpjLPPuHwF$9$5(s) {
  s.t_task_5;
  return a_a_WXa1HIFpjLPPuHwF$9$4;
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$9$5, 'a_a_WXa1HIFpjLPPuHwF$9$5');

function a_a_WXa1HIFpjLPPuHwF$9$4(s) {
  (s.pc = "Qp92pguhEJ964LjX");
  if (s.$state) {
  s.$state.perform_set("$pressed", s.$pressed, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_a_WXa1HIFpjLPPuHwF$9$4, 'a_a_WXa1HIFpjLPPuHwF$9$4');


//Ent_PtpGyZJTdYtckhRv
function Ent_PtpGyZJTdYtckhRv(p) {
  this.parent = p;
}
Ent_PtpGyZJTdYtckhRv.prototype = new lib.ObjectEntry();
Ent_PtpGyZJTdYtckhRv.prototype.keys = [];
Ent_PtpGyZJTdYtckhRv.prototype.values = ["$pressed"];
Ent_PtpGyZJTdYtckhRv.prototype.fields = ["$pressed"];
Ent_PtpGyZJTdYtckhRv.prototype["$pressed_realname"] = "pressed";
Ent_PtpGyZJTdYtckhRv.prototype["$pressed"] = false;
//Tbl_PtpGyZJTdYtckhRv
function Tbl_PtpGyZJTdYtckhRv(l) {
  this.libName = l;
  this.initParent();
}
Tbl_PtpGyZJTdYtckhRv.prototype = new lib.ObjectSingleton();
Tbl_PtpGyZJTdYtckhRv.prototype.entryCtor = Ent_PtpGyZJTdYtckhRv;
cs.objectSingletons["Button State"] = function(d) { return d.$PtpGyZJTdYtckhRv };
Tbl_PtpGyZJTdYtckhRv.prototype.selfCtor = Tbl_PtpGyZJTdYtckhRv;
Tbl_PtpGyZJTdYtckhRv.prototype.stableName = "PtpGyZJTdYtckhRv";
Tbl_PtpGyZJTdYtckhRv.prototype.entryKindName = "Button State";

// jsonimport
Ent_PtpGyZJTdYtckhRv.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$pressed", ctx.importBoolean(json, "pressed"), s);
}
cs.registerGlobal("$PtpGyZJTdYtckhRv");
/* ACTION: is button pressed in any gamepad */
function a_MqSmFDsxMgTB4xkn(previous, returnAddr, $btn_name) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_MqSmFDsxMgTB4xkn$0;
  s.name = "is button pressed in any gamepad";
  s.$btn_name = $btn_name;
  s.result = undefined;
  s.$gps = undefined;
  s.$gamepad = undefined;
  return s;
}
cs.registerAction("is button pressed in any gamepad", "MqSmFDsxMgTB4xkn", a_MqSmFDsxMgTB4xkn, false);

function a_MqSmFDsxMgTB4xkn$0(s) {
  (s.pc = "C7AW20Gvnp2I6cxZ");
  (s.result = false);
  (s.pc = "AZmGfN4J5U6UVomG");
  var t_call_0 = lib.Senses.gamepads(s);
  (s.$gps = t_call_0);
  (s.pc = "YlD0rGhPyywGrYvr");
  s.t_collArr_1 = (ok1(s, s.$gps) && s.$gps.get_enumerator());
  s.t_idx_2 = 0;
  return a_MqSmFDsxMgTB4xkn$1;
}
cs.registerStep(a_MqSmFDsxMgTB4xkn$0, 'a_MqSmFDsxMgTB4xkn$0');

function a_MqSmFDsxMgTB4xkn$1(s) {
  if ((s.t_idx_2 < (s.t_collArr_1.length))) {
  (s.$gamepad = s.t_collArr_1[(s.t_idx_2)]);
  (s.t_idx_2++);
  var t_call_3 = (ok1(s, s.result) && lib.Boolean_.not(s.result, s));
  var t_lazy_4 = t_call_3;
  if ((ok1(s, t_lazy_4) && t_lazy_4)) {
  var t_call_5 = (ok1(s, s.$gamepad) && s.$gamepad.is_connected(s));
  (t_lazy_4 = t_call_5);
  }
  var t_lazy_6 = t_lazy_4;
  if ((ok1(s, t_lazy_6) && t_lazy_6)) {
  var t_call_7 = (ok2(s, s.$gamepad, s.$btn_name) && s.$gamepad.is_button_pressed(s.$btn_name, s));
  (t_lazy_6 = t_call_7);
  }
  if (t_lazy_6) {
  (s.pc = "gzc7udJGZ2ZXqcDr");
  (s.result = true);
  }
  return a_MqSmFDsxMgTB4xkn$1;
  }
  return s.rt.leave();
}
cs.registerStep(a_MqSmFDsxMgTB4xkn$1, 'a_MqSmFDsxMgTB4xkn$1');


//Ent_B5CwXDSpNzCP42Ri
function Ent_B5CwXDSpNzCP42Ri(p) {
  this.parent = p;
}
Ent_B5CwXDSpNzCP42Ri.prototype = new lib.ObjectEntry();
Ent_B5CwXDSpNzCP42Ri.prototype.keys = [];
Ent_B5CwXDSpNzCP42Ri.prototype.values = ["$bindings"];
Ent_B5CwXDSpNzCP42Ri.prototype.fields = ["$bindings"];
Ent_B5CwXDSpNzCP42Ri.prototype["$bindings_realname"] = "bindings";
//Tbl_B5CwXDSpNzCP42Ri
function Tbl_B5CwXDSpNzCP42Ri(l) {
  this.libName = l;
  this.initParent();
}
Tbl_B5CwXDSpNzCP42Ri.prototype = new lib.ObjectSingleton();
Tbl_B5CwXDSpNzCP42Ri.prototype.entryCtor = Ent_B5CwXDSpNzCP42Ri;
cs.objectSingletons["Gamepad Event Binding"] = function(d) { return d.$B5CwXDSpNzCP42Ri };
Tbl_B5CwXDSpNzCP42Ri.prototype.selfCtor = Tbl_B5CwXDSpNzCP42Ri;
Tbl_B5CwXDSpNzCP42Ri.prototype.stableName = "B5CwXDSpNzCP42Ri";
Tbl_B5CwXDSpNzCP42Ri.prototype.entryKindName = "Gamepad Event Binding";

// jsonimport
Ent_B5CwXDSpNzCP42Ri.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$B5CwXDSpNzCP42Ri");
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
  if(!d.hasOwnProperty("$PtpGyZJTdYtckhRv") || !d["$PtpGyZJTdYtckhRv"]) d.$PtpGyZJTdYtckhRv = new Tbl_PtpGyZJTdYtckhRv(d.libName);
  if(!d.hasOwnProperty("$B5CwXDSpNzCP42Ri") || !d["$B5CwXDSpNzCP42Ri"]) d.$B5CwXDSpNzCP42Ri = new Tbl_B5CwXDSpNzCP42Ri(d.libName);

};

cs._initGlobals2 = function(d) {
d.$PtpGyZJTdYtckhRv.name = "Button State";d.$B5CwXDSpNzCP42Ri.name = "Gamepad Event Binding";};

cs._resetGlobals = function(d) {
  d.$PtpGyZJTdYtckhRv = undefined;
  d.$B5CwXDSpNzCP42Ri = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "current";
cs.authorId = "unknown";
cs.scriptId = "rivma";
cs.scriptGuid = "d3814b33-2c88-4e7e-8f81-3bbfe4f9c1a6";
})}
