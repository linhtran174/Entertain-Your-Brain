var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "wooden labyrinth!";
cs.scriptColor = "\u0023007fff";
cs.objectSingletons = {};
/* ACTION: main */
function a_LwwJRdPdO4fsTQcO(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_LwwJRdPdO4fsTQcO$0;
  s.name = "main";
  s.$board = undefined;
  s.$labyrinth = undefined;
  s.$BoardSize = undefined;
  s.$Acceleration = undefined;
  s.$HolesActives = undefined;
  s.$middleX = undefined;
  s.$middleY = undefined;
  s.$HoleSize = undefined;
  s.$marble = undefined;
  s.$Marblewidt = undefined;
  s.$marbleOx = undefined;
  s.$marbleOy = undefined;
  s.$hole1 = undefined;
  s.$hole2 = undefined;
  s.$hole3 = undefined;
  s.$hole4 = undefined;
  s.$hole5 = undefined;
  s.$hole6 = undefined;
  s.$hole7 = undefined;
  s.$hole8 = undefined;
  s.$LeftWall = undefined;
  s.$RightWall = undefined;
  s.$TopWall = undefined;
  s.$BottomWall = undefined;
  s.$MiniWall1_L = undefined;
  s.$MiniWall2_T = undefined;
  s.$MiniWall3_R = undefined;
  s.$MiniWall4 = undefined;
  s.$MiniWall5 = undefined;
  s.$MiniWall6 = undefined;
  s.$MiniWall7 = undefined;
  s.$MiniWall8 = undefined;
  s.$MiniWall9 = undefined;
  s.$MiniWall10 = undefined;
  s.$EndTrigger = undefined;
  s.$soundPlaying = undefined;
  s.$soundDuration = undefined;
  s.$startTime = undefined;
  s.$spriteStart = undefined;
  s.$perform2 = undefined;
  s.$currSfx = undefined;
  s.$perform = undefined;
  s.$p = undefined;
  s.$xPad = undefined;
  s.$yPad = undefined;
  s.$rawSpeed = undefined;
  s.$Pen = undefined;
  s.$done = undefined;
  s.$holeFelt = undefined;
  s.$sprite = undefined;
  s.$perform3 = undefined;
  s.$x = undefined;
  s.$b = undefined;
  s.$seconds = undefined;
  return s;
}
cs.registerAction("main", "LwwJRdPdO4fsTQcO", a_LwwJRdPdO4fsTQcO, true);

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

function a_LwwJRdPdO4fsTQcO$0(s) {
  (s.pc = "xpSR4EbbvEaHuapt");
  var t_libcall_0 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_LwwJRdPdO4fsTQcO$1));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$0, 'a_LwwJRdPdO4fsTQcO$0');

function a_LwwJRdPdO4fsTQcO$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_1);
  (s.pc = "KRK2YYKLDw24wowG");
  (/* gameActive */ s.d.$nYoKbWGXIsyY2Zmismy14Djb = true);
  s.rt.logDataWrite();
  (s.pc = "xWo6oT0KAJJJ4CVH");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$2);
  var t_call_3 = (ok2(s, s.$board, /* wooden labyrinth easy */ s.d.$QA1wrriszz0wgvoY8ChqMPNT) && s.$board.create_picture(/* wooden labyrinth easy */ s.d.$QA1wrriszz0wgvoY8ChqMPNT, t_resumeCtx_2));
  return a_LwwJRdPdO4fsTQcO$2;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$1, 'a_LwwJRdPdO4fsTQcO$1');

function a_LwwJRdPdO4fsTQcO$2(s) {
  var t_pauseRes_4 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_4);
  (s.$labyrinth = t_pauseRes_4);
  (s.pc = "XGXwyZlhwqPjG22s");
  s.rt.logObjectMutation(s.$board);
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$3);
  (ok2(s, s.$board, /* wood floor */ s.d.$YEy7YxYlzcVzCZ1SpoP8lfIv) && s.$board.set_background_picture(/* wood floor */ s.d.$YEy7YxYlzcVzCZ1SpoP8lfIv, t_resumeCtx_5));
  return a_LwwJRdPdO4fsTQcO$3;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$2, 'a_LwwJRdPdO4fsTQcO$2');

function a_LwwJRdPdO4fsTQcO$3(s) {
  (s.pc = "xkN1R0ukOlcztlcq");
  (/* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP = 0);
  s.rt.logDataWrite();
  (s.pc = "YGAp9G3OG2MeDPIA");
  var t_libcall_6 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["start timer"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_LwwJRdPdO4fsTQcO$4));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$3, 'a_LwwJRdPdO4fsTQcO$3');

function a_LwwJRdPdO4fsTQcO$4(s) {
  (s.pc = "xRxuja4LY5hBc9Rd");
  var t_libcall_7 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_LwwJRdPdO4fsTQcO$5));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$4, 'a_LwwJRdPdO4fsTQcO$4');

function a_LwwJRdPdO4fsTQcO$5(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  var t_infix_9 = (ok2(s, t_actRes_8, /* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP) && (t_actRes_8 + /* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP));
  var t_libcall_10 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["set score"](s);
  return s.rt.enter(t_libcall_10.invoke(t_libcall_10, a_LwwJRdPdO4fsTQcO$6, t_infix_9));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$5, 'a_LwwJRdPdO4fsTQcO$5');

function a_LwwJRdPdO4fsTQcO$6(s) {
  (s.pc = "VlRJO7IJ463m6SU4");
  var t_call_11 = lib.Colors.transparent(s);
  var t_call_12 = lib.Colors.transparent(s);
  var t_call_13 = lib.Colors.white(s);
  var t_libcall_14 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["set hud colors"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_LwwJRdPdO4fsTQcO$7, t_call_11, t_call_12, t_call_13));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$6, 'a_LwwJRdPdO4fsTQcO$6');

function a_LwwJRdPdO4fsTQcO$7(s) {
  (s.pc = "IyRbF1wL8RTAnVm1");
  (ok1(s, s.$board) && s.$board.set_debug_mode(false, s));
  (s.pc = "pZ1XPc2S5FrcK57Q");
  (s.$BoardSize = 0.9);
  var t_elseIf_15 = true;
  (s.pc = "u5n32kMcMnWsw2qi");
  var t_call_16 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_17 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_18 = (ok2(s, t_call_16, t_call_17) && (t_call_16 < t_call_17));
  ok1(s, t_infix_18);
  if (t_infix_18) {
  (s.pc = "xwKKeOtAXexJrl6t");
  var t_call_19 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_20 = (ok2(s, t_call_19, s.$BoardSize) && (t_call_19 * s.$BoardSize));
  s.rt.logObjectMutation(s.$labyrinth);
  (ok2(s, s.$labyrinth, t_infix_20) && s.$labyrinth.set_width(t_infix_20, s));
  } else {
  (s.pc = "nsBGytdNAfGTD534");
  var t_call_21 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_22 = (ok2(s, t_call_21, s.$BoardSize) && (t_call_21 * s.$BoardSize));
  s.rt.logObjectMutation(s.$labyrinth);
  (ok2(s, s.$labyrinth, t_infix_22) && s.$labyrinth.set_width(t_infix_22, s));
  }
  (s.pc = "v8IJmdb3ymn1CkXt");
  s.rt.logObjectMutation(s.$labyrinth);
  (ok1(s, s.$labyrinth) && s.$labyrinth.set_z_index(100, s));
  (s.pc = "fk24jXJ6uUMoSiTP");
  var t_call_23 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_24 = (ok1(s, t_call_23) && (t_call_23 * 7.5));
  (s.$Acceleration = t_infix_24);
  (s.pc = "tPkRxlbj6MZYPqhS");
  (s.$HolesActives = true);
  (s.pc = "xgN2UqGOdMCKwdFm");
  var t_call_25 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_26 = (ok1(s, t_call_25) && (t_call_25 * 0.5));
  (s.$middleX = t_infix_26);
  (s.pc = "xNFcu5P7oABlj0Rz");
  var t_call_27 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_28 = (ok1(s, t_call_27) && (t_call_27 * 0.5));
  (s.$middleY = t_infix_28);
  (s.pc = "dM24XJpTlqwkq65V");
  var t_call_29 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 * 0.07));
  (s.$HoleSize = t_infix_30);
  (s.pc = "xZun1DdNAXrytu4N");
  var t_resumeCtx_31 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$9);
  var t_call_32 = (ok2(s, s.$board, /* marble_metal */ s.d.$vF4J4H2pjA9vcu4zSQUW1Wh7) && s.$board.create_picture(/* marble_metal */ s.d.$vF4J4H2pjA9vcu4zSQUW1Wh7, t_resumeCtx_31));
  return a_LwwJRdPdO4fsTQcO$9;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$7, 'a_LwwJRdPdO4fsTQcO$7');

function a_LwwJRdPdO4fsTQcO$9(s) {
  var t_pauseRes_33 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_33);
  (s.$marble = t_pauseRes_33);
  (s.pc = "LgOI4sVCapnwp7xz");
  var t_call_34 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 * 0.05));
  (s.$Marblewidt = t_infix_35);
  (s.pc = "kY6mcNhnoqBt4zY2");
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, s.$Marblewidt) && s.$marble.set_width(s.$Marblewidt, s));
  (s.pc = "u19UC2dRCHuH1Zpy");
  var t_call_36 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 * 0.05));
  var t_infix_38 = (ok2(s, s.$middleX, t_infix_37) && (s.$middleX - t_infix_37));
  (s.$marbleOx = t_infix_38);
  (s.pc = "bHYH71YJ1wrvQqGK");
  var t_call_39 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_40 = (ok1(s, t_call_39) && (t_call_39 * 0.42));
  var t_infix_41 = (ok2(s, s.$middleY, t_infix_40) && (s.$middleY - t_infix_40));
  (s.$marbleOy = t_infix_41);
  (s.pc = "b2PCnwMPXKBuB4I2");
  s.rt.logObjectMutation(s.$marble);
  (ok3(s, s.$marble, s.$marbleOx, s.$marbleOy) && s.$marble.set_pos(s.$marbleOx, s.$marbleOy, s));
  (s.pc = "xMihT4pAV8UdXNuM");
  return s.rt.enter(a_wHINppPXvyeywVjHHl8I2Y58(s, a_LwwJRdPdO4fsTQcO$10, s.$board, s.$HoleSize, s.$middleX, s.$labyrinth, s.$middleY));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$9, 'a_LwwJRdPdO4fsTQcO$9');

function a_LwwJRdPdO4fsTQcO$10(s) {
  (s.$hole1 = s.rt.returnedFrom.results[0]);
  (s.$hole2 = s.rt.returnedFrom.results[1]);
  (s.$hole3 = s.rt.returnedFrom.results[2]);
  (s.$hole4 = s.rt.returnedFrom.results[3]);
  (s.$hole5 = s.rt.returnedFrom.results[4]);
  (s.$hole6 = s.rt.returnedFrom.results[5]);
  (s.$hole7 = s.rt.returnedFrom.results[6]);
  (s.$hole8 = s.rt.returnedFrom.results[7]);
  (s.pc = "hoM2p6j2NM5xs9CT");
  return s.rt.enter(a_xvCKgWXbKTWbT7rwAZ4Q9R1r(s, a_LwwJRdPdO4fsTQcO$11, s.$board, s.$labyrinth, s.$middleX, s.$middleY));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$10, 'a_LwwJRdPdO4fsTQcO$10');

function a_LwwJRdPdO4fsTQcO$11(s) {
  (s.$LeftWall = s.rt.returnedFrom.results[0]);
  (s.$RightWall = s.rt.returnedFrom.results[1]);
  (s.$TopWall = s.rt.returnedFrom.results[2]);
  (s.$BottomWall = s.rt.returnedFrom.results[3]);
  (s.pc = "yEFVT5RaGNp0OSS1");
  return s.rt.enter(a_JRafGmu444XzAE2AdQSBZHm3(s, a_LwwJRdPdO4fsTQcO$12, s.$board, s.$labyrinth, s.$middleX, s.$middleY));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$11, 'a_LwwJRdPdO4fsTQcO$11');

function a_LwwJRdPdO4fsTQcO$12(s) {
  (s.$MiniWall1_L = s.rt.returnedFrom.results[0]);
  (s.$MiniWall2_T = s.rt.returnedFrom.results[1]);
  (s.$MiniWall3_R = s.rt.returnedFrom.results[2]);
  (s.$MiniWall4 = s.rt.returnedFrom.results[3]);
  (s.$MiniWall5 = s.rt.returnedFrom.results[4]);
  (s.$MiniWall6 = s.rt.returnedFrom.results[5]);
  (s.$MiniWall7 = s.rt.returnedFrom.results[6]);
  (s.$MiniWall8 = s.rt.returnedFrom.results[7]);
  (s.$MiniWall9 = s.rt.returnedFrom.results[8]);
  (s.$MiniWall10 = s.rt.returnedFrom.results[9]);
  (s.pc = "WjM46jykQf7jDb56");
  var t_call_42 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_43 = (ok1(s, t_call_42) && (t_call_42 * 0.06));
  var t_call_44 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_45 = (ok1(s, t_call_44) && (t_call_44 * 0.1));
  var t_call_46 = (ok3(s, s.$board, t_infix_43, t_infix_45) && s.$board.create_rectangle(t_infix_43, t_infix_45, s));
  s.rt.markAllocated(t_call_46);
  (s.$EndTrigger = t_call_46);
  (s.pc = "uGBKUlttNrf6IsDd");
  var t_call_47 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_48 = (ok1(s, t_call_47) && (t_call_47 * 0.08));
  var t_infix_49 = (ok2(s, s.$middleX, t_infix_48) && (s.$middleX + t_infix_48));
  var t_call_50 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_51 = (ok1(s, t_call_50) && (t_call_50 * 0.4));
  var t_infix_52 = (ok2(s, s.$middleY, t_infix_51) && (s.$middleY - t_infix_51));
  s.rt.logObjectMutation(s.$EndTrigger);
  (ok3(s, s.$EndTrigger, t_infix_49, t_infix_52) && s.$EndTrigger.set_pos(t_infix_49, t_infix_52, s));
  (s.pc = "XZh4Op0LtEqTQk2U");
  s.rt.logObjectMutation(s.$EndTrigger);
  (ok1(s, s.$EndTrigger) && s.$EndTrigger.hide(s));
  (s.pc = "xvuwk3kKFrS4pmDz");
  (s.$soundPlaying = false);
  (s.pc = "xl77D2EI0kEwjGKS");
  var t_resumeCtx_53 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$13);
  var t_call_54 = (ok1(s, /* marble roll fast loop */ s.d.$DISkikGcIZnASAHrM8Nut9id) && /* marble roll fast loop */ s.d.$DISkikGcIZnASAHrM8Nut9id.duration(t_resumeCtx_53));
  return a_LwwJRdPdO4fsTQcO$13;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$12, 'a_LwwJRdPdO4fsTQcO$12');

function a_LwwJRdPdO4fsTQcO$13(s) {
  var t_pauseRes_55 = s.pauseValue;
  (s.$soundDuration = t_pauseRes_55);
  (s.pc = "xmuTqquLbgM4pPaT");
  var t_libcall_56 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_56.invoke(t_libcall_56, a_LwwJRdPdO4fsTQcO$14));
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$13, 'a_LwwJRdPdO4fsTQcO$13');

function a_LwwJRdPdO4fsTQcO$14(s) {
  var t_actRes_57 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_57);
  (s.pc = "xIlrgKIp9ANNRY8L");
  var t_resumeCtx_58 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$15);
  var t_call_59 = (ok2(s, s.$board, /* start STRING */ s.d.$X9GQyA15AVTIubzPNIcAmDAY) && s.$board.create_picture(/* start STRING */ s.d.$X9GQyA15AVTIubzPNIcAmDAY, t_resumeCtx_58));
  return a_LwwJRdPdO4fsTQcO$15;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$14, 'a_LwwJRdPdO4fsTQcO$14');

function a_LwwJRdPdO4fsTQcO$15(s) {
  var t_pauseRes_60 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_60);
  (s.$spriteStart = t_pauseRes_60);
  (s.pc = "i7wxOmVlagLz84Iw");
  var t_call_61 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_62 = (ok1(s, t_call_61) && (t_call_61 * 0.5));
  s.rt.logObjectMutation(s.$spriteStart);
  (ok2(s, s.$spriteStart, t_infix_62) && s.$spriteStart.set_width(t_infix_62, s));
  (s.pc = "rZR4g1HCP2PZM0Na");
  var t_resumeCtx_63 = s.rt.getBlockingResumeCtx(a_LwwJRdPdO4fsTQcO$16);
  (ok1(s, /* whistles_short */ s.d.$tgh5Edxvtz4OSMjNlIQQvxEI) && /* whistles_short */ s.d.$tgh5Edxvtz4OSMjNlIQQvxEI.play(t_resumeCtx_63));
  return a_LwwJRdPdO4fsTQcO$16;
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$15, 'a_LwwJRdPdO4fsTQcO$15');

function a_LwwJRdPdO4fsTQcO$16(s) {
  (s.pc = "fTXfbpb7uc0kswoZ");
  (ok1(s, s.$board) && s.$board.post_to_wall(s));
  (s.pc = "ZeYBIMyrI08jnATP");
  var t_lmbv_64 = s.$spriteStart;
  var t_lmbProxy_65 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_LwwJRdPdO4fsTQcO$17(t_lmbProxy_65(la0), la1, t_lmbv_64) });
  (s.pc = "wJIJZsLzq2Jbo5Kl");
  var t_call_66 = (ok2(s, s.$spriteStart, s.$perform2) && s.$spriteStart.on_every_frame(s.$perform2, s));
  t_call_66;
  (s.pc = "vXCfu7Mh81p41CxK");
  s.rt.logObjectMutation(s.$marble);
  (ok1(s, s.$marble) && s.$marble.set_z_index(999, s));
  (s.pc = "xt51dwJS2a5pYfEX");
  s.rt.logObjectMutation(s.$marble);
  (ok1(s, s.$marble) && s.$marble.set_opacity(100, s));
  (s.pc = "ripwU3HSHbosJs2h");
  (s.$currSfx = /* marble roll fast loop */ s.d.$DISkikGcIZnASAHrM8Nut9id);
  (s.pc = "fb8FOKhCtM2bZuGJ");
  var t_lmbv_67 = s.$marble;
  var t_lmbv_68 = s.$Acceleration;
  var t_lmbv_69 = s.$RightWall;
  var t_lmbv_70 = s.$LeftWall;
  var t_lmbv_71 = s.$MiniWall3_R;
  var t_lmbv_72 = s.$MiniWall1_L;
  var t_lmbv_73 = s.$TopWall;
  var t_lmbv_74 = s.$BottomWall;
  var t_lmbv_75 = s.$MiniWall2_T;
  var t_lmbv_76 = s.$MiniWall4;
  var t_lmbv_77 = s.$MiniWall5;
  var t_lmbv_78 = s.$MiniWall6;
  var t_lmbv_79 = s.$MiniWall7;
  var t_lmbv_80 = s.$MiniWall8;
  var t_lmbv_81 = s.$MiniWall9;
  var t_lmbv_82 = s.$MiniWall10;
  var t_lmbv_83 = s.$HolesActives;
  var t_lmbv_84 = s.$hole1;
  var t_lmbv_85 = s.$hole2;
  var t_lmbv_86 = s.$hole3;
  var t_lmbv_87 = s.$hole4;
  var t_lmbv_88 = s.$hole5;
  var t_lmbv_89 = s.$hole6;
  var t_lmbv_90 = s.$hole7;
  var t_lmbv_91 = s.$hole8;
  var t_lmbv_92 = s.$marbleOx;
  var t_lmbv_93 = s.$marbleOy;
  var t_lmbv_94 = s.$done;
  var t_lmbv_95 = s.$middleX;
  var t_lmbv_96 = s.$labyrinth;
  var t_lmbv_97 = s.$middleY;
  var t_lmbv_98 = s.$EndTrigger;
  var t_lmbv_99 = s.$board;
  var t_lmbv_100 = s.$perform3;
  var t_lmbProxy_101 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_LwwJRdPdO4fsTQcO$18(t_lmbProxy_101(la0), la1, t_lmbv_67, t_lmbv_68, t_lmbv_69, t_lmbv_70, t_lmbv_71, t_lmbv_72, t_lmbv_73, t_lmbv_74, t_lmbv_75, t_lmbv_76, t_lmbv_77, t_lmbv_78, t_lmbv_79, t_lmbv_80, t_lmbv_81, t_lmbv_82, t_lmbv_83, t_lmbv_84, t_lmbv_85, t_lmbv_86, t_lmbv_87, t_lmbv_88, t_lmbv_89, t_lmbv_90, t_lmbv_91, t_lmbv_92, t_lmbv_93, t_lmbv_94, t_lmbv_95, t_lmbv_96, t_lmbv_97, t_lmbv_98, t_lmbv_99, t_lmbv_100) });
  (s.pc = "xdTIWeWRcTC5OKLL");
  var t_call_102 = (ok2(s, s.$marble, s.$perform) && s.$marble.on_every_frame(s.$perform, s));
  t_call_102;
  return s.rt.leave();
}
cs.registerStep(a_LwwJRdPdO4fsTQcO$16, 'a_LwwJRdPdO4fsTQcO$16');

/* ACTION: a_LwwJRdPdO4fsTQcO::lambda::17 */
function a_a_LwwJRdPdO4fsTQcO$17(previous, returnAddr, $spriteStart) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_LwwJRdPdO4fsTQcO$17$0;
  s.name = "main";
  s.$spriteStart = $spriteStart;
  return s;
}
cs.registerLambda("a_LwwJRdPdO4fsTQcO\u003a\u003alambda\u003a\u003a17", "a_LwwJRdPdO4fsTQcO$17", a_a_LwwJRdPdO4fsTQcO$17, true);

function a_a_LwwJRdPdO4fsTQcO$17$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "u46oiniVtRBJBvwD");
  var t_call_1 = (ok1(s, s.$spriteStart) && s.$spriteStart.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "OMvUZGOJp5uj0xRj");
  var t_call_2 = (ok1(s, s.$spriteStart) && s.$spriteStart.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 * 1.02));
  s.rt.logObjectMutation(s.$spriteStart);
  (ok2(s, s.$spriteStart, t_infix_3) && s.$spriteStart.set_width(t_infix_3, s));
  (s.pc = "b0fHi6uspIG51Hag");
  s.rt.logObjectMutation(s.$spriteStart);
  (ok1(s, s.$spriteStart) && s.$spriteStart.set_opacity(1, s));
  (s.pc = "EvzcURF3Q2VHuQ9r");
  s.rt.logObjectMutation(s.$spriteStart);
  (ok1(s, s.$spriteStart) && s.$spriteStart.set_z_index(1000, s));
  (s.pc = "YaSKSt3KoNp24X6u");
  s.t_call_4 = (ok1(s, s.$spriteStart) && s.$spriteStart.opacity(s));
  var t_libcall_5 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_a_LwwJRdPdO4fsTQcO$17$2));
  } else {
  (s.pc = "GOjktMt2d4Uxw80c");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$17$1;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$17$0, 'a_a_LwwJRdPdO4fsTQcO$17$0');

function a_a_LwwJRdPdO4fsTQcO$17$2(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  var t_infix_7 = (ok1(s, t_actRes_6) && (0.8 * t_actRes_6));
  var t_infix_8 = (ok2(s, s.t_call_4, t_infix_7) && (s.t_call_4 - t_infix_7));
  s.rt.logObjectMutation(s.$spriteStart);
  (ok2(s, s.$spriteStart, t_infix_8) && s.$spriteStart.set_opacity(t_infix_8, s));
  var t_elseIf_9 = true;
  (s.pc = "GtZK5mPQu75JGnVe");
  var t_libcall_10 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_10.invoke(t_libcall_10, a_a_LwwJRdPdO4fsTQcO$17$3));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$17$2, 'a_a_LwwJRdPdO4fsTQcO$17$2');

function a_a_LwwJRdPdO4fsTQcO$17$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$17$1, 'a_a_LwwJRdPdO4fsTQcO$17$1');

function a_a_LwwJRdPdO4fsTQcO$17$3(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  var t_infix_12 = (ok1(s, t_actRes_11) && (t_actRes_11 > 1.25));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (s.pc = "xs8o35rZ2n5YNAkw");
  s.rt.logObjectMutation(s.$spriteStart);
  (ok1(s, s.$spriteStart) && s.$spriteStart.set_opacity(100, s));
  (s.pc = "u5mYN2jZvw2TNS9s");
  s.rt.logObjectMutation(s.$spriteStart);
  (ok1(s, s.$spriteStart) && s.$spriteStart.hide(s));
  } else {
  (s.pc = "sKX0uE544XfRr2za");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$17$1;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$17$3, 'a_a_LwwJRdPdO4fsTQcO$17$3');

/* ACTION: a_LwwJRdPdO4fsTQcO::lambda::18 */
function a_a_LwwJRdPdO4fsTQcO$18(previous, returnAddr, $marble, $Acceleration, $RightWall, $LeftWall, $MiniWall3_R, $MiniWall1_L, $TopWall, $BottomWall, $MiniWall2_T, $MiniWall4, $MiniWall5, $MiniWall6, $MiniWall7, $MiniWall8, $MiniWall9, $MiniWall10, $HolesActives, $hole1, $hole2, $hole3, $hole4, $hole5, $hole6, $hole7, $hole8, $marbleOx, $marbleOy, $done, $middleX, $labyrinth, $middleY, $EndTrigger, $board, $perform3) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_LwwJRdPdO4fsTQcO$18$0;
  s.name = "main";
  s.$p = undefined;
  s.$marble = $marble;
  s.$xPad = undefined;
  s.$Acceleration = $Acceleration;
  s.$yPad = undefined;
  s.$RightWall = $RightWall;
  s.$LeftWall = $LeftWall;
  s.$MiniWall3_R = $MiniWall3_R;
  s.$MiniWall1_L = $MiniWall1_L;
  s.$TopWall = $TopWall;
  s.$BottomWall = $BottomWall;
  s.$MiniWall2_T = $MiniWall2_T;
  s.$MiniWall4 = $MiniWall4;
  s.$MiniWall5 = $MiniWall5;
  s.$MiniWall6 = $MiniWall6;
  s.$MiniWall7 = $MiniWall7;
  s.$MiniWall8 = $MiniWall8;
  s.$MiniWall9 = $MiniWall9;
  s.$MiniWall10 = $MiniWall10;
  s.$HolesActives = $HolesActives;
  s.$hole1 = $hole1;
  s.$hole2 = $hole2;
  s.$hole3 = $hole3;
  s.$hole4 = $hole4;
  s.$hole5 = $hole5;
  s.$hole6 = $hole6;
  s.$hole7 = $hole7;
  s.$hole8 = $hole8;
  s.$marbleOx = $marbleOx;
  s.$marbleOy = $marbleOy;
  s.$Pen = undefined;
  s.$done = $done;
  s.$middleX = $middleX;
  s.$labyrinth = $labyrinth;
  s.$middleY = $middleY;
  s.$holeFelt = undefined;
  s.$EndTrigger = $EndTrigger;
  s.$board = $board;
  s.$sprite = undefined;
  s.$perform3 = $perform3;
  s.$x = undefined;
  s.$rawSpeed = undefined;
  s.$b = undefined;
  s.$seconds = undefined;
  return s;
}
cs.registerLambda("a_LwwJRdPdO4fsTQcO\u003a\u003alambda\u003a\u003a18", "a_LwwJRdPdO4fsTQcO$18", a_a_LwwJRdPdO4fsTQcO$18, true);

function a_a_LwwJRdPdO4fsTQcO$18$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "bXZP2iqQpOlPiCfo");
  ok1(s, /* gameActive */ s.d.$nYoKbWGXIsyY2Zmismy14Djb);
  if (/* gameActive */ s.d.$nYoKbWGXIsyY2Zmismy14Djb) {
  (s.pc = "HfXolhvHXhI15JKf");
  var t_libcall_1 = s.libs["pzkiteluO7znguLL"]["current"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_LwwJRdPdO4fsTQcO$18$2));
  } else {
  (s.pc = "KjboHzeg4tFU49ao");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$18$1;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$0, 'a_a_LwwJRdPdO4fsTQcO$18$0');

function a_a_LwwJRdPdO4fsTQcO$18$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.$p = t_actRes_2);
  (s.pc = "x9V9V8CfnCq8lb5G");
  var t_call_3 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 * 0.25));
  (s.$xPad = t_infix_4);
  (s.pc = "FIruNvdImzyL2f3w");
  var t_call_5 = (ok1(s, s.$p) && s.$p.y(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 * 0.25));
  (s.$yPad = t_infix_6);
  var t_elseIf_7 = true;
  (s.pc = "v1RWdPfoopLnKRo3");
  var t_call_8 = (ok1(s, s.$p) && s.$p.x(s));
  var t_call_9 = (ok1(s, t_call_8) && lib.Math_.abs(t_call_8, s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 < 0.2));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "QHmIQvn0ccbZtEjC");
  (s.$xPad = 0);
  } else {
  (s.pc = "gIpVau60vQUYSJyi");
  null;
  }
  var t_elseIf_11 = true;
  (s.pc = "xwNXHbVcES2kp0a7");
  var t_call_12 = (ok1(s, s.$p) && s.$p.y(s));
  var t_call_13 = (ok1(s, t_call_12) && lib.Math_.abs(t_call_12, s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 < 0.2));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.pc = "f8L2ZfC3v1q2Q7QF");
  (s.$yPad = 0);
  } else {
  (s.pc = "EntRiuoqiex13Ri0");
  null;
  }
  (s.pc = "Ot3s24kNMV4HdMYx");
  var t_infix_15 = (ok2(s, s.$xPad, s.$Acceleration) && (s.$xPad * s.$Acceleration));
  var t_infix_16 = (ok2(s, s.$yPad, s.$Acceleration) && (s.$yPad * s.$Acceleration));
  s.rt.logObjectMutation(s.$marble);
  (ok3(s, s.$marble, t_infix_15, t_infix_16) && s.$marble.set_acceleration(t_infix_15, t_infix_16, s));
  (s.pc = "bELu8bQywJofPjey");
  var t_call_17 = (ok1(s, s.$marble) && s.$marble.speed_x(s));
  var t_call_18 = (ok1(s, s.$marble) && s.$marble.speed_y(s));
  var t_infix_19 = (ok2(s, t_call_17, t_call_18) && (t_call_17 + t_call_18));
  (s.$rawSpeed = t_infix_19);
  (s.pc = "n7efOdY2iW966dQg");
  s.rt.logObjectMutation(s.$marble);
  (ok1(s, s.$marble) && s.$marble.set_friction(0.066, s));
  (s.pc = "D4SCeDbuC5HLqL3U");
  var t_libcall_20 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_20.invoke(t_libcall_20, a_a_LwwJRdPdO4fsTQcO$18$5));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$2, 'a_a_LwwJRdPdO4fsTQcO$18$2');

function a_a_LwwJRdPdO4fsTQcO$18$1(s) {
  var t_elseIf_58 = true;
  (s.pc = "SlrzPpu7VxG4VucH");
  var t_call_59 = (ok2(s, s.$marble, s.$EndTrigger) && s.$marble.overlaps_with(s.$EndTrigger, s));
  ok1(s, t_call_59);
  if (t_call_59) {
  (s.pc = "yJYnkmIgwZ1Eyhwd");
  (/* gameActive */ s.d.$nYoKbWGXIsyY2Zmismy14Djb = false);
  s.rt.logDataWrite();
  (s.pc = "x8zWOkVy77NiSHSt");
  var t_resumeCtx_60 = s.rt.getBlockingResumeCtx(a_a_LwwJRdPdO4fsTQcO$18$18);
  (ok1(s, /* whistles_short */ s.d.$tgh5Edxvtz4OSMjNlIQQvxEI) && /* whistles_short */ s.d.$tgh5Edxvtz4OSMjNlIQQvxEI.play(t_resumeCtx_60));
  return a_a_LwwJRdPdO4fsTQcO$18$18;
  } else {
  (s.pc = "xL2cjojVOYbDUhAb");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$18$17;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$1, 'a_a_LwwJRdPdO4fsTQcO$18$1');

function a_a_LwwJRdPdO4fsTQcO$18$5(s) {
  var t_actRes_21 = s.rt.returnedFrom.result;
  var t_infix_22 = (ok2(s, t_actRes_21, /* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP) && (t_actRes_21 + /* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP));
  var t_libcall_23 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["set score"](s);
  return s.rt.enter(t_libcall_23.invoke(t_libcall_23, a_a_LwwJRdPdO4fsTQcO$18$6, t_infix_22));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$5, 'a_a_LwwJRdPdO4fsTQcO$18$5');

function a_a_LwwJRdPdO4fsTQcO$18$18(s) {
  (s.pc = "x0bhwFzoDjI6E82y");
  s.rt.logObjectMutation(s.$marble);
  (ok1(s, s.$marble) && s.$marble.set_acceleration(0, 0, s));
  (s.pc = "kEP5M3rAWaa5cbNI");
  s.rt.logObjectMutation(s.$marble);
  (ok1(s, s.$marble) && s.$marble.hide(s));
  (s.pc = "cxPFByKyeg2uSNLU");
  var t_resumeCtx_61 = s.rt.getBlockingResumeCtx(a_a_LwwJRdPdO4fsTQcO$18$19);
  var t_call_62 = (ok2(s, s.$board, /* GOAL string */ s.d.$xbyi85xZVqmc4v80ZqRIdEAr) && s.$board.create_picture(/* GOAL string */ s.d.$xbyi85xZVqmc4v80ZqRIdEAr, t_resumeCtx_61));
  return a_a_LwwJRdPdO4fsTQcO$18$19;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$18, 'a_a_LwwJRdPdO4fsTQcO$18$18');

function a_a_LwwJRdPdO4fsTQcO$18$17(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$17, 'a_a_LwwJRdPdO4fsTQcO$18$17');

function a_a_LwwJRdPdO4fsTQcO$18$6(s) {
  (s.pc = "HmF4vW1n8Cet7vdr");
  return s.rt.enter(a_e9dBrxaqzVsPLAVRm0Vcz54Q(s, a_a_LwwJRdPdO4fsTQcO$18$7, s.$RightWall, s.$LeftWall, s.$MiniWall3_R, s.$MiniWall1_L, s.$TopWall, s.$BottomWall, s.$MiniWall2_T, s.$MiniWall4, s.$MiniWall5, s.$MiniWall6, s.$MiniWall7, s.$MiniWall8, s.$MiniWall9, s.$MiniWall10, s.$marble));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$6, 'a_a_LwwJRdPdO4fsTQcO$18$6');

function a_a_LwwJRdPdO4fsTQcO$18$19(s) {
  var t_pauseRes_63 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_63);
  (s.$sprite = t_pauseRes_63);
  (s.pc = "H66DwbJR3C0cWYJ5");
  var t_call_64 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_65 = (ok1(s, t_call_64) && (t_call_64 * 0.8));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_65) && s.$sprite.set_width(t_infix_65, s));
  (s.pc = "XfibmLw1jiDbXONS");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.set_z_index(1200, s));
  (s.pc = "SKnVcx54JNvVQBjU");
  var t_lmbProxy_66 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_a_LwwJRdPdO4fsTQcO$18$20(t_lmbProxy_66(la0), la1) });
  (s.pc = "R5NgJSZ9Z5yS4tQh");
  s.rt.logObjectMutation(null);
  var t_call_67 = (ok1(s, s.$perform3) && lib.Time.run_after(1, s.$perform3, s));
  t_call_67;
  (s.pc = "aertiWqafa8S822l");
  var t_libcall_68 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_68.invoke(t_libcall_68, a_a_LwwJRdPdO4fsTQcO$18$21));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$19, 'a_a_LwwJRdPdO4fsTQcO$18$19');

function a_a_LwwJRdPdO4fsTQcO$18$7(s) {
  (s.pc = "zbxbycj68jrMvU7p");
  (s.$Pen = 0);
  (s.pc = "fkJlx4PkIkMKRWG3");
  return s.rt.enter(a_xSoWeeeFk2K4LMpSRSl0317V(s, a_a_LwwJRdPdO4fsTQcO$18$8, s.$HolesActives, s.$hole1, s.$hole2, s.$hole3, s.$hole4, s.$hole5, s.$hole6, s.$hole7, s.$hole8, s.$marble, s.$marbleOx, s.$marbleOy));
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$7, 'a_a_LwwJRdPdO4fsTQcO$18$7');

function a_a_LwwJRdPdO4fsTQcO$18$21(s) {
  var t_actRes_69 = s.rt.returnedFrom.result;
  (s.$seconds = t_actRes_69);
  return a_a_LwwJRdPdO4fsTQcO$18$17;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$21, 'a_a_LwwJRdPdO4fsTQcO$18$21');

function a_a_LwwJRdPdO4fsTQcO$18$8(s) {
  var t_actRes_24 = s.rt.returnedFrom.result;
  (s.$Pen = t_actRes_24);
  (s.pc = "dbnqNYwP8T1ND37o");
  var t_infix_25 = (ok2(s, /* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP, s.$Pen) && (/* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP + s.$Pen));
  (/* Penality */ s.d.$HfTy5RKkoqQyJQfzVnQ4HkjP = t_infix_25);
  s.rt.logDataWrite();
  var t_elseIf_26 = true;
  (s.pc = "h9KD8He9oYUz6qXt");
  var t_infix_27 = (ok1(s, s.$Pen) && (s.$Pen !== 0));
  ok1(s, t_infix_27);
  if (t_infix_27) {
  (s.pc = "Dt5GQeGqp0kWFiNO");
  var t_lmbProxy_28 = s.libs.mkLambdaProxy;
  (s.$done = function(la0, la1) { return a_a_a_LwwJRdPdO4fsTQcO$18$10(t_lmbProxy_28(la0), la1) });
  (s.pc = "I5JOMW984mDvzCr2");
  var t_call_29 = lib.Colors.red(s);
  var t_call_30 = lib.Colors.transparent(s);
  var t_libcall_31 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["splash text"](s);
  return s.rt.enter(t_libcall_31.invoke(t_libcall_31, a_a_LwwJRdPdO4fsTQcO$18$11, "Penality\u000a\u002b2 sec", 0, t_call_29, t_call_30, s.$done));
  } else {
  (s.pc = "ddP7ztvLPCE4F2GF");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$18$9;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$8, 'a_a_LwwJRdPdO4fsTQcO$18$8');

function a_a_LwwJRdPdO4fsTQcO$18$11(s) {
  var t_actRes_32 = s.rt.returnedFrom.result;
  t_actRes_32;
  return a_a_LwwJRdPdO4fsTQcO$18$9;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$11, 'a_a_LwwJRdPdO4fsTQcO$18$11');

function a_a_LwwJRdPdO4fsTQcO$18$9(s) {
  var t_elseIf_33 = true;
  (s.pc = "o2GG68R4VouY9sYf");
  var t_call_34 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_35 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_36 = (ok1(s, t_call_35) && (t_call_35 * 0.5));
  var t_infix_37 = (ok2(s, s.$middleX, t_infix_36) && (s.$middleX - t_infix_36));
  var t_infix_38 = (ok2(s, t_call_34, t_infix_37) && (t_call_34 < t_infix_37));
  var t_lazy_39 = t_infix_38;
  if ((ok1(s, t_lazy_39) && (!t_lazy_39))) {
  var t_call_40 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_41 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_42 = (ok1(s, t_call_41) && (t_call_41 * 0.5));
  var t_infix_43 = (ok2(s, s.$middleX, t_infix_42) && (s.$middleX + t_infix_42));
  var t_infix_44 = (ok2(s, t_call_40, t_infix_43) && (t_call_40 > t_infix_43));
  (t_lazy_39 = t_infix_44);
  }
  var t_lazy_45 = t_lazy_39;
  if ((ok1(s, t_lazy_45) && (!t_lazy_45))) {
  var t_call_46 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_47 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_48 = (ok1(s, t_call_47) && (t_call_47 * 0.5));
  var t_infix_49 = (ok2(s, s.$middleY, t_infix_48) && (s.$middleY - t_infix_48));
  var t_infix_50 = (ok2(s, t_call_46, t_infix_49) && (t_call_46 < t_infix_49));
  (t_lazy_45 = t_infix_50);
  }
  var t_lazy_51 = t_lazy_45;
  if ((ok1(s, t_lazy_51) && (!t_lazy_51))) {
  var t_call_52 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_53 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_54 = (ok1(s, t_call_53) && (t_call_53 * 0.5));
  var t_infix_55 = (ok2(s, s.$middleY, t_infix_54) && (s.$middleY + t_infix_54));
  var t_infix_56 = (ok2(s, t_call_52, t_infix_55) && (t_call_52 > t_infix_55));
  (t_lazy_51 = t_infix_56);
  }
  ok1(s, t_lazy_51);
  if (t_lazy_51) {
  (s.pc = "s6jKRvaSlkcQJ7uL");
  s.rt.logObjectMutation(s.$marble);
  (ok3(s, s.$marble, s.$marbleOx, s.$marbleOy) && s.$marble.set_pos(s.$marbleOx, s.$marbleOy, s));
  (s.pc = "KIX2yTcqqj8KMXuI");
  (s.$holeFelt = /* Marble falling in a hole */ s.d.$xgaktmo9J4WllASqmCGcBHJ1);
  (s.pc = "At7OkuCtYZuylwnY");
  var t_resumeCtx_57 = s.rt.getBlockingResumeCtx(a_a_LwwJRdPdO4fsTQcO$18$16);
  (ok1(s, s.$holeFelt) && s.$holeFelt.play(t_resumeCtx_57));
  return a_a_LwwJRdPdO4fsTQcO$18$16;
  } else {
  (s.pc = "Lc4dWSt58h6t4prh");
  null;
  }
  return a_a_LwwJRdPdO4fsTQcO$18$15;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$9, 'a_a_LwwJRdPdO4fsTQcO$18$9');

function a_a_LwwJRdPdO4fsTQcO$18$16(s) {
  return a_a_LwwJRdPdO4fsTQcO$18$15;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$16, 'a_a_LwwJRdPdO4fsTQcO$18$16');

function a_a_LwwJRdPdO4fsTQcO$18$15(s) {
  return a_a_LwwJRdPdO4fsTQcO$18$1;
}
cs.registerStep(a_a_LwwJRdPdO4fsTQcO$18$15, 'a_a_LwwJRdPdO4fsTQcO$18$15');

/* ACTION: a_a_LwwJRdPdO4fsTQcO$18::lambda::10 */
function a_a_a_LwwJRdPdO4fsTQcO$18$10(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_LwwJRdPdO4fsTQcO$18$10$0;
  s.name = "a_LwwJRdPdO4fsTQcO\u003a\u003alambda\u003a\u003a18";
  return s;
}
cs.registerLambda("a_a_LwwJRdPdO4fsTQcO$18\u003a\u003alambda\u003a\u003a10", "a_a_LwwJRdPdO4fsTQcO$18$10", a_a_a_LwwJRdPdO4fsTQcO$18$10, true);

function a_a_a_LwwJRdPdO4fsTQcO$18$10$0(s) {
  (s.pc = "Nc9P9zeQxocL0VxR");
  null;
  return s.rt.leave();
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$10$0, 'a_a_a_LwwJRdPdO4fsTQcO$18$10$0');

/* ACTION: a_a_LwwJRdPdO4fsTQcO$18::lambda::20 */
function a_a_a_LwwJRdPdO4fsTQcO$18$20(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_LwwJRdPdO4fsTQcO$18$20$0;
  s.name = "a_LwwJRdPdO4fsTQcO\u003a\u003alambda\u003a\u003a18";
  s.$x = undefined;
  s.$b = undefined;
  return s;
}
cs.registerLambda("a_a_LwwJRdPdO4fsTQcO$18\u003a\u003alambda\u003a\u003a20", "a_a_LwwJRdPdO4fsTQcO$18$20", a_a_a_LwwJRdPdO4fsTQcO$18$20, true);

function a_a_a_LwwJRdPdO4fsTQcO$18$20$0(s) {
  (s.pc = "haLNiDN03oPbJIpz");
  lib.Wall.clear(s);
  var t_elseIf_0 = true;
  (s.pc = "xho7lDaJReiI2YLC");
  var t_libcall_1 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["score"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_a_LwwJRdPdO4fsTQcO$18$20$1));
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$0, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$0');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_infix_3 = (ok1(s, t_actRes_2) && (t_actRes_2 > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "QMx5CuISUvUohROA");
  lib.Wall.set_title("LEADERBOARD", s);
  (s.pc = "LxWDS25O48lZ2oaL");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_a_LwwJRdPdO4fsTQcO$18$20$3);
  (ok1(s, /* wood floor */ s.d.$YEy7YxYlzcVzCZ1SpoP8lfIv) && lib.Wall.set_background_picture(/* wood floor */ s.d.$YEy7YxYlzcVzCZ1SpoP8lfIv, t_resumeCtx_4));
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$3;
  } else {
  (s.pc = "mu5MRzrtDdZRlhvC");
  null;
  }
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$2;
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$1, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$1');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$3(s) {
  (s.pc = "xO1A2efnvb6NMO4x");
  var t_libcall_5 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["score"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_a_a_LwwJRdPdO4fsTQcO$18$20$4));
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$3, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$3');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$2, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$2');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$4(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  var t_infix_7 = (0 - 1);
  var t_infix_8 = (ok2(s, t_actRes_6, t_infix_7) && (t_actRes_6 * t_infix_7));
  var t_libcall_9 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["set score"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_a_a_LwwJRdPdO4fsTQcO$18$20$5, t_infix_8));
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$4, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$4');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$5(s) {
  (s.pc = "DqbPR823e5IVcUgY");
  var t_libcall_10 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["score"](s);
  return s.rt.enter(t_libcall_10.invoke(t_libcall_10, a_a_a_LwwJRdPdO4fsTQcO$18$20$6));
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$5, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$5');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$6(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  s.rt.logObjectMutation(null);
  var t_resumeCtx_12 = s.rt.getAwaitResumeCtx(a_a_a_LwwJRdPdO4fsTQcO$18$20$7);
  (ok1(s, t_actRes_11) && lib.Bazaar.post_leaderboard_score(t_actRes_11, t_resumeCtx_12));
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$7;
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$6, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$6');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$7(s) {
  (s.pc = "mth5Eg4DFKL60gP5");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_a_a_LwwJRdPdO4fsTQcO$18$20$8);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_13);
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$8;
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$7, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$7');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$8(s) {
  (s.pc = "IfvbulXH7F4ljSKh");
  var t_resumeCtx_14 = s.rt.getAwaitResumeCtx(a_a_a_LwwJRdPdO4fsTQcO$18$20$9);
  var t_call_15 = lib.Bazaar.leaderboard_score(t_resumeCtx_14);
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$9;
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$8, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$8');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$9(s) {
  var t_pauseRes_16 = s.pauseValue;
  (s.$x = t_pauseRes_16);
  (s.pc = "rr3XMSjY4tNfVPfm");
  var t_call_17 = lib.Wall.pages(s);
  var t_call_18 = (ok2(s, t_call_17, s.$x) && t_call_17.at(s.$x, s));
  (s.$b = t_call_18);
  (s.pc = "tM3mXSPL6kIYlVPc");
  var t_libcall_19 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["end"](s);
  return s.rt.enter(t_libcall_19.invoke(t_libcall_19, a_a_a_LwwJRdPdO4fsTQcO$18$20$10));
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$9, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$9');

function a_a_a_LwwJRdPdO4fsTQcO$18$20$10(s) {
  var t_actRes_20 = s.rt.returnedFrom.result;
  t_actRes_20;
  return a_a_a_LwwJRdPdO4fsTQcO$18$20$2;
}
cs.registerStep(a_a_a_LwwJRdPdO4fsTQcO$18$20$10, 'a_a_a_LwwJRdPdO4fsTQcO$18$20$10');

cs.registerArtResource("Picture", "$QA1wrriszz0wgvoY8ChqMPNT", ".\u002fart\u002fl0_QA1wrriszz0wgvoY8ChqMPNT");
/* ACTION: CreateHoles */
function a_wHINppPXvyeywVjHHl8I2Y58(previous, returnAddr, $board, $HoleSize, $middleX, $labyrinth, $middleY) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_wHINppPXvyeywVjHHl8I2Y58$0;
  s.name = "CreateHoles";
  s.results = [];
  s.$board = $board;
  s.$HoleSize = $HoleSize;
  s.$middleX = $middleX;
  s.$labyrinth = $labyrinth;
  s.$middleY = $middleY;
  s.results[0] = undefined;
  s.results[1] = undefined;
  s.results[2] = undefined;
  s.results[3] = undefined;
  s.results[4] = undefined;
  s.results[5] = undefined;
  s.results[6] = undefined;
  s.results[7] = undefined;
  return s;
}
cs.registerAction("CreateHoles", "wHINppPXvyeywVjHHl8I2Y58", a_wHINppPXvyeywVjHHl8I2Y58, false);

function a_wHINppPXvyeywVjHHl8I2Y58$0(s) {
  (s.pc = "wb8t4oXsORciLwtR");
  var t_call_0 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_0);
  (s.results[0] = t_call_0);
  (s.pc = "vehdUkSzLMXv1LeW");
  var t_call_1 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 * 0.135));
  var t_infix_3 = (ok2(s, s.$middleX, t_infix_2) && (s.$middleX - t_infix_2));
  var t_call_4 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 * 0.125));
  var t_infix_6 = (ok2(s, s.$middleY, t_infix_5) && (s.$middleY - t_infix_5));
  s.rt.logObjectMutation(s.results[0]);
  (ok3(s, s.results[0], t_infix_3, t_infix_6) && s.results[0].set_pos(t_infix_3, t_infix_6, s));
  (s.pc = "lh4721a3eAX2OzxJ");
  s.rt.logObjectMutation(s.results[0]);
  (ok1(s, s.results[0]) && s.results[0].hide(s));
  (s.pc = "q2sDgDVaCeJqhYJw");
  var t_call_7 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_7);
  (s.results[1] = t_call_7);
  (s.pc = "xFgnSFSfWf3mzoca");
  var t_call_8 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 * 0.29));
  var t_infix_10 = (ok2(s, s.$middleX, t_infix_9) && (s.$middleX - t_infix_9));
  var t_call_11 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 * 0.275));
  var t_infix_13 = (ok2(s, s.$middleY, t_infix_12) && (s.$middleY - t_infix_12));
  s.rt.logObjectMutation(s.results[1]);
  (ok3(s, s.results[1], t_infix_10, t_infix_13) && s.results[1].set_pos(t_infix_10, t_infix_13, s));
  (s.pc = "FmJMGaQkxbjatOsO");
  s.rt.logObjectMutation(s.results[1]);
  (ok1(s, s.results[1]) && s.results[1].hide(s));
  (s.pc = "L2RLPi22ptv9ozZO");
  var t_call_14 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_14);
  (s.results[2] = t_call_14);
  (s.pc = "QGEkCDWt26Of54Cl");
  var t_call_15 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 * 0.325));
  var t_infix_17 = (ok2(s, s.$middleX, t_infix_16) && (s.$middleX - t_infix_16));
  var t_call_18 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_19 = (ok1(s, t_call_18) && (t_call_18 * 0.218));
  var t_infix_20 = (ok2(s, s.$middleY, t_infix_19) && (s.$middleY + t_infix_19));
  s.rt.logObjectMutation(s.results[2]);
  (ok3(s, s.results[2], t_infix_17, t_infix_20) && s.results[2].set_pos(t_infix_17, t_infix_20, s));
  (s.pc = "WbtbfjA06HDzIPp7");
  s.rt.logObjectMutation(s.results[2]);
  (ok1(s, s.results[2]) && s.results[2].hide(s));
  (s.pc = "UjPdCUnKTAePttA7");
  var t_call_21 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_21);
  (s.results[3] = t_call_21);
  (s.pc = "xVtbS6V44FLkdCSv");
  var t_call_22 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_23 = (ok1(s, t_call_22) && (t_call_22 * 0.083));
  var t_infix_24 = (ok2(s, s.$middleX, t_infix_23) && (s.$middleX + t_infix_23));
  var t_call_25 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_26 = (ok1(s, t_call_25) && (t_call_25 * 0.095));
  var t_infix_27 = (ok2(s, s.$middleY, t_infix_26) && (s.$middleY + t_infix_26));
  s.rt.logObjectMutation(s.results[3]);
  (ok3(s, s.results[3], t_infix_24, t_infix_27) && s.results[3].set_pos(t_infix_24, t_infix_27, s));
  (s.pc = "xcoibqZlsQz0APPg");
  s.rt.logObjectMutation(s.results[3]);
  (ok1(s, s.results[3]) && s.results[3].hide(s));
  (s.pc = "XPro6B6kgzkjrLkT");
  var t_call_28 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_28);
  (s.results[4] = t_call_28);
  (s.pc = "xlYub3fydFjpNyPp");
  var t_call_29 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 * 0.115));
  var t_infix_31 = (ok2(s, s.$middleX, t_infix_30) && (s.$middleX - t_infix_30));
  var t_call_32 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_33 = (ok1(s, t_call_32) && (t_call_32 * 0.365));
  var t_infix_34 = (ok2(s, s.$middleY, t_infix_33) && (s.$middleY + t_infix_33));
  s.rt.logObjectMutation(s.results[4]);
  (ok3(s, s.results[4], t_infix_31, t_infix_34) && s.results[4].set_pos(t_infix_31, t_infix_34, s));
  (s.pc = "azp1lBH24PAGhhtB");
  s.rt.logObjectMutation(s.results[4]);
  (ok1(s, s.results[4]) && s.results[4].hide(s));
  (s.pc = "H4pbmX2vY30tneWN");
  var t_call_35 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_35);
  (s.results[5] = t_call_35);
  (s.pc = "f9P7W4BB7GiEUfhw");
  var t_call_36 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 * 0.36));
  var t_infix_38 = (ok2(s, s.$middleX, t_infix_37) && (s.$middleX + t_infix_37));
  var t_call_39 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_40 = (ok1(s, t_call_39) && (t_call_39 * 0.33));
  var t_infix_41 = (ok2(s, s.$middleY, t_infix_40) && (s.$middleY + t_infix_40));
  s.rt.logObjectMutation(s.results[5]);
  (ok3(s, s.results[5], t_infix_38, t_infix_41) && s.results[5].set_pos(t_infix_38, t_infix_41, s));
  (s.pc = "x15txq7RVo669kad");
  s.rt.logObjectMutation(s.results[5]);
  (ok1(s, s.results[5]) && s.results[5].hide(s));
  (s.pc = "xr4YqtIbOG9UpVTZ");
  var t_call_42 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_42);
  (s.results[6] = t_call_42);
  (s.pc = "H1acRHusYhTow89m");
  var t_call_43 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_44 = (ok1(s, t_call_43) && (t_call_43 * 0.175));
  var t_infix_45 = (ok2(s, s.$middleX, t_infix_44) && (s.$middleX + t_infix_44));
  var t_call_46 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 * 0));
  var t_infix_48 = (ok2(s, s.$middleY, t_infix_47) && (s.$middleY + t_infix_47));
  s.rt.logObjectMutation(s.results[6]);
  (ok3(s, s.results[6], t_infix_45, t_infix_48) && s.results[6].set_pos(t_infix_45, t_infix_48, s));
  (s.pc = "t8KdYOoQu6hzjHwi");
  s.rt.logObjectMutation(s.results[6]);
  (ok1(s, s.results[6]) && s.results[6].hide(s));
  (s.pc = "Ozk6pQhQYpQH442i");
  var t_call_49 = (ok3(s, s.$board, s.$HoleSize, s.$HoleSize) && s.$board.create_rectangle(s.$HoleSize, s.$HoleSize, s));
  s.rt.markAllocated(t_call_49);
  (s.results[7] = t_call_49);
  (s.pc = "AdToL7yFRoamYjKS");
  var t_call_50 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_51 = (ok1(s, t_call_50) && (t_call_50 * 0.28));
  var t_infix_52 = (ok2(s, s.$middleX, t_infix_51) && (s.$middleX + t_infix_51));
  var t_call_53 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_54 = (ok1(s, t_call_53) && (t_call_53 * 0.235));
  var t_infix_55 = (ok2(s, s.$middleY, t_infix_54) && (s.$middleY - t_infix_54));
  s.rt.logObjectMutation(s.results[7]);
  (ok3(s, s.results[7], t_infix_52, t_infix_55) && s.results[7].set_pos(t_infix_52, t_infix_55, s));
  (s.pc = "yZg4CVLsjP9T4QAj");
  s.rt.logObjectMutation(s.results[7]);
  (ok1(s, s.results[7]) && s.results[7].hide(s));
  return s.rt.leave();
}
cs.registerStep(a_wHINppPXvyeywVjHHl8I2Y58$0, 'a_wHINppPXvyeywVjHHl8I2Y58$0');

/* ACTION: CheckHolesCollision */
function a_xSoWeeeFk2K4LMpSRSl0317V(previous, returnAddr, $HolesActives, $hole1, $hole2, $hole3, $hole4, $hole5, $hole6, $hole7, $hole8, $marble, $marbleOx, $marbleOy) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xSoWeeeFk2K4LMpSRSl0317V$0;
  s.name = "CheckHolesCollision";
  s.$HolesActives = $HolesActives;
  s.$hole1 = $hole1;
  s.$hole2 = $hole2;
  s.$hole3 = $hole3;
  s.$hole4 = $hole4;
  s.$hole5 = $hole5;
  s.$hole6 = $hole6;
  s.$hole7 = $hole7;
  s.$hole8 = $hole8;
  s.$marble = $marble;
  s.$marbleOx = $marbleOx;
  s.$marbleOy = $marbleOy;
  s.result = undefined;
  s.$i = undefined;
  s.$Obj = undefined;
  s.$holeFelt = undefined;
  return s;
}
cs.registerAction("CheckHolesCollision", "xSoWeeeFk2K4LMpSRSl0317V", a_xSoWeeeFk2K4LMpSRSl0317V, false);

function a_xSoWeeeFk2K4LMpSRSl0317V$0(s) {
  (s.pc = "a4su72crWYcH5Yk2");
  (s.result = 0);
  var t_elseIf_0 = true;
  (s.pc = "xWAG7gX2SHWoZYJ5");
  ok1(s, s.$HolesActives);
  if (s.$HolesActives) {
  (s.pc = "IHzlWrWCDtBbpIQh");
  s.t_bnd_1 = 8;
  (s.$i = 0);
  return a_xSoWeeeFk2K4LMpSRSl0317V$2;
  } else {
  (s.pc = "xHXIZA8BGHleuSWY");
  null;
  }
  return a_xSoWeeeFk2K4LMpSRSl0317V$1;
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$0, 'a_xSoWeeeFk2K4LMpSRSl0317V$0');

function a_xSoWeeeFk2K4LMpSRSl0317V$2(s) {
  if ((s.$i < s.t_bnd_1)) {
  (s.pc = "xUmx2QW1mAmwuFvy");
  (s.$Obj = s.$hole1);
  var t_elseIf_2 = true;
  (s.pc = "EGqhC4O1UUkxR3L5");
  var t_infix_3 = (ok1(s, s.$i) && (s.$i === 1));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (t_elseIf_2 = false);
  (s.pc = "mssO7quph07ZHPzN");
  (s.$Obj = s.$hole2);
  }
  if (t_elseIf_2) {
  (s.pc = "t2ghPiZFo9Ma4gZP");
  var t_infix_4 = (ok1(s, s.$i) && (s.$i === 2));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (t_elseIf_2 = false);
  (s.pc = "Elfw6Y1Qs3C8qOMQ");
  (s.$Obj = s.$hole3);
  }
  }
  if (t_elseIf_2) {
  (s.pc = "Iq4AD9zxdlAf3mHy");
  var t_infix_5 = (ok1(s, s.$i) && (s.$i === 3));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (t_elseIf_2 = false);
  (s.pc = "F4i1YRwFNFP9YNvU");
  (s.$Obj = s.$hole4);
  }
  }
  if (t_elseIf_2) {
  (s.pc = "QaC0zEuWxi7njWsD");
  var t_infix_6 = (ok1(s, s.$i) && (s.$i === 4));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (t_elseIf_2 = false);
  (s.pc = "oQ07yDcp9gkcu5cI");
  (s.$Obj = s.$hole5);
  }
  }
  if (t_elseIf_2) {
  (s.pc = "UMqkiju6NCustd4n");
  var t_infix_7 = (ok1(s, s.$i) && (s.$i === 5));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (t_elseIf_2 = false);
  (s.pc = "LxvJhioSv2eCU6lG");
  (s.$Obj = s.$hole6);
  }
  }
  if (t_elseIf_2) {
  (s.pc = "rxWIkDRRLpR7pThJ");
  var t_infix_8 = (ok1(s, s.$i) && (s.$i === 6));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (t_elseIf_2 = false);
  (s.pc = "Zl2sKHqR4ODW7vuw");
  (s.$Obj = s.$hole7);
  }
  }
  if (t_elseIf_2) {
  (s.pc = "MEowryeIPHO4tHEt");
  var t_infix_9 = (ok1(s, s.$i) && (s.$i === 7));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "Z4ZcnUMFmHNsymMJ");
  (s.$Obj = s.$hole8);
  } else {
  (s.pc = "aRQMc0Gb8cx1GwNl");
  null;
  }
  }
  var t_elseIf_10 = true;
  (s.pc = "KFQHea4G1aMX5arO");
  var t_call_11 = (ok2(s, s.$marble, s.$Obj) && s.$marble.overlaps_with(s.$Obj, s));
  ok1(s, t_call_11);
  if (t_call_11) {
  (s.pc = "xncnXKprJXuRtL74");
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, s.$Obj) && s.$marble.move_towards(s.$Obj, 0.15, s));
  (s.pc = "pUdHwni3Wf5koGdY");
  var t_call_12 = (ok1(s, s.$marble) && s.$marble.speed_x(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 * 0.9));
  var t_call_14 = (ok1(s, s.$marble) && s.$marble.speed_y(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 * 0.9));
  s.rt.logObjectMutation(s.$marble);
  (ok3(s, s.$marble, t_infix_13, t_infix_15) && s.$marble.set_speed(t_infix_13, t_infix_15, s));
  var t_elseIf_16 = true;
  (s.pc = "g042pecoyHohJHrN");
  var t_call_17 = (ok1(s, s.$Obj) && s.$Obj.x(s));
  var t_call_18 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_infix_19 = (ok2(s, t_call_17, t_call_18) && (t_call_17 - t_call_18));
  var t_call_20 = (ok1(s, t_infix_19) && lib.Math_.abs(t_infix_19, s));
  var t_call_21 = (ok1(s, s.$marble) && s.$marble.width(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 * 0.5));
  var t_infix_23 = (ok2(s, t_call_20, t_infix_22) && (t_call_20 <= t_infix_22));
  var t_lazy_24 = t_infix_23;
  if ((ok1(s, t_lazy_24) && t_lazy_24)) {
  var t_call_25 = (ok1(s, s.$Obj) && s.$Obj.y(s));
  var t_call_26 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_infix_27 = (ok2(s, t_call_25, t_call_26) && (t_call_25 - t_call_26));
  var t_call_28 = (ok1(s, t_infix_27) && lib.Math_.abs(t_infix_27, s));
  var t_call_29 = (ok1(s, s.$marble) && s.$marble.width(s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 * 0.5));
  var t_infix_31 = (ok2(s, t_call_28, t_infix_30) && (t_call_28 <= t_infix_30));
  (t_lazy_24 = t_infix_31);
  }
  ok1(s, t_lazy_24);
  if (t_lazy_24) {
  (s.pc = "lYxSqEbKUTrNA4HO");
  s.rt.logObjectMutation(s.$marble);
  (ok3(s, s.$marble, s.$marbleOx, s.$marbleOy) && s.$marble.set_pos(s.$marbleOx, s.$marbleOy, s));
  (s.pc = "EErY0ATEsHImOEUH");
  (s.$holeFelt = /* Marble falling in a hole */ s.d.$xgaktmo9J4WllASqmCGcBHJ1);
  (s.pc = "TOT4pQ7AsUt1jv2v");
  var t_resumeCtx_32 = s.rt.getBlockingResumeCtx(a_xSoWeeeFk2K4LMpSRSl0317V$20);
  (ok1(s, s.$holeFelt) && s.$holeFelt.play(t_resumeCtx_32));
  return a_xSoWeeeFk2K4LMpSRSl0317V$20;
  } else {
  (s.pc = "xe7lgFnac42PxxUQ");
  null;
  }
  return a_xSoWeeeFk2K4LMpSRSl0317V$19;
  } else {
  (s.pc = "nipGkGQGaPXFksDi");
  null;
  }
  return a_xSoWeeeFk2K4LMpSRSl0317V$17;
  }
  return a_xSoWeeeFk2K4LMpSRSl0317V$1;
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$2, 'a_xSoWeeeFk2K4LMpSRSl0317V$2');

function a_xSoWeeeFk2K4LMpSRSl0317V$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$1, 'a_xSoWeeeFk2K4LMpSRSl0317V$1');

function a_xSoWeeeFk2K4LMpSRSl0317V$20(s) {
  (s.pc = "fGwkmCJWj0wBhu2S");
  var t_infix_33 = (ok1(s, s.result) && (s.result + 2));
  (s.result = t_infix_33);
  return a_xSoWeeeFk2K4LMpSRSl0317V$19;
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$20, 'a_xSoWeeeFk2K4LMpSRSl0317V$20');

function a_xSoWeeeFk2K4LMpSRSl0317V$19(s) {
  return a_xSoWeeeFk2K4LMpSRSl0317V$17;
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$19, 'a_xSoWeeeFk2K4LMpSRSl0317V$19');

function a_xSoWeeeFk2K4LMpSRSl0317V$17(s) {
  (s.$i++);
  return a_xSoWeeeFk2K4LMpSRSl0317V$2;
}
cs.registerStep(a_xSoWeeeFk2K4LMpSRSl0317V$17, 'a_xSoWeeeFk2K4LMpSRSl0317V$17');

/* ACTION: CreateLimitWalls */
function a_xvCKgWXbKTWbT7rwAZ4Q9R1r(previous, returnAddr, $board, $labyrinth, $middleX, $middleY) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xvCKgWXbKTWbT7rwAZ4Q9R1r$0;
  s.name = "CreateLimitWalls";
  s.results = [];
  s.$board = $board;
  s.$labyrinth = $labyrinth;
  s.$middleX = $middleX;
  s.$middleY = $middleY;
  s.results[0] = undefined;
  s.results[1] = undefined;
  s.results[2] = undefined;
  s.results[3] = undefined;
  return s;
}
cs.registerAction("CreateLimitWalls", "xvCKgWXbKTWbT7rwAZ4Q9R1r", a_xvCKgWXbKTWbT7rwAZ4Q9R1r, false);

function a_xvCKgWXbKTWbT7rwAZ4Q9R1r$0(s) {
  (s.pc = "xuWY7sG1LhVUant1");
  var t_call_0 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 * 0.046));
  var t_call_2 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_call_3 = (ok3(s, s.$board, t_infix_1, t_call_2) && s.$board.create_rectangle(t_infix_1, t_call_2, s));
  s.rt.markAllocated(t_call_3);
  (s.results[0] = t_call_3);
  (s.pc = "hs0WD8Yy0BTvgaTH");
  var t_call_4 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 * 0.5));
  var t_infix_6 = (ok2(s, s.$middleX, t_infix_5) && (s.$middleX - t_infix_5));
  var t_call_7 = (ok1(s, s.results[0]) && s.results[0].width(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 * 0.5));
  var t_infix_9 = (ok2(s, t_infix_6, t_infix_8) && (t_infix_6 + t_infix_8));
  s.rt.logObjectMutation(s.results[0]);
  (ok3(s, s.results[0], t_infix_9, s.$middleY) && s.results[0].set_pos(t_infix_9, s.$middleY, s));
  (s.pc = "jlGZvEUGvXT4Sriy");
  s.rt.logObjectMutation(s.results[0]);
  (ok1(s, s.results[0]) && s.results[0].hide(s));
  (s.pc = "ifEtJ5sGPX4C97e3");
  var t_call_10 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_11 = (ok1(s, t_call_10) && (t_call_10 * 0.046));
  var t_call_12 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_call_13 = (ok3(s, s.$board, t_infix_11, t_call_12) && s.$board.create_rectangle(t_infix_11, t_call_12, s));
  s.rt.markAllocated(t_call_13);
  (s.results[1] = t_call_13);
  (s.pc = "xU3xzr3EwB56ezLD");
  var t_call_14 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 * 0.5));
  var t_infix_16 = (ok2(s, s.$middleX, t_infix_15) && (s.$middleX + t_infix_15));
  var t_call_17 = (ok1(s, s.results[0]) && s.results[0].width(s));
  var t_infix_18 = (ok1(s, t_call_17) && (t_call_17 * 0.5));
  var t_infix_19 = (ok2(s, t_infix_16, t_infix_18) && (t_infix_16 - t_infix_18));
  s.rt.logObjectMutation(s.results[1]);
  (ok3(s, s.results[1], t_infix_19, s.$middleY) && s.results[1].set_pos(t_infix_19, s.$middleY, s));
  (s.pc = "bIKbbXv8aZbQ1Smi");
  s.rt.logObjectMutation(s.results[1]);
  (ok1(s, s.results[1]) && s.results[1].hide(s));
  (s.pc = "kDqy3DsGoqiSGoE9");
  var t_call_20 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_call_21 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 * 0.046));
  var t_call_23 = (ok3(s, s.$board, t_call_20, t_infix_22) && s.$board.create_rectangle(t_call_20, t_infix_22, s));
  s.rt.markAllocated(t_call_23);
  (s.results[2] = t_call_23);
  (s.pc = "cZDBP81cntEvoccZ");
  var t_call_24 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_25 = (ok1(s, t_call_24) && (t_call_24 * 0.5));
  var t_infix_26 = (ok2(s, s.$middleY, t_infix_25) && (s.$middleY - t_infix_25));
  var t_call_27 = (ok1(s, s.results[2]) && s.results[2].height(s));
  var t_infix_28 = (ok1(s, t_call_27) && (t_call_27 * 0.5));
  var t_infix_29 = (ok2(s, t_infix_26, t_infix_28) && (t_infix_26 + t_infix_28));
  s.rt.logObjectMutation(s.results[2]);
  (ok3(s, s.results[2], s.$middleX, t_infix_29) && s.results[2].set_pos(s.$middleX, t_infix_29, s));
  (s.pc = "us7j4WEmY0UaBFBZ");
  s.rt.logObjectMutation(s.results[2]);
  (ok1(s, s.results[2]) && s.results[2].hide(s));
  (s.pc = "NokzTWQ12Ck9MF5F");
  var t_call_30 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_call_31 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_32 = (ok1(s, t_call_31) && (t_call_31 * 0.046));
  var t_call_33 = (ok3(s, s.$board, t_call_30, t_infix_32) && s.$board.create_rectangle(t_call_30, t_infix_32, s));
  s.rt.markAllocated(t_call_33);
  (s.results[3] = t_call_33);
  (s.pc = "Czq5ilZq2ki1AnIe");
  var t_call_34 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 * 0.5));
  var t_infix_36 = (ok2(s, s.$middleY, t_infix_35) && (s.$middleY + t_infix_35));
  var t_call_37 = (ok1(s, s.results[3]) && s.results[3].height(s));
  var t_infix_38 = (ok1(s, t_call_37) && (t_call_37 * 0.5));
  var t_infix_39 = (ok2(s, t_infix_36, t_infix_38) && (t_infix_36 - t_infix_38));
  s.rt.logObjectMutation(s.results[3]);
  (ok3(s, s.results[3], s.$middleX, t_infix_39) && s.results[3].set_pos(s.$middleX, t_infix_39, s));
  (s.pc = "LxvBPl4fb3a53fZl");
  s.rt.logObjectMutation(s.results[3]);
  (ok1(s, s.results[3]) && s.results[3].hide(s));
  return s.rt.leave();
}
cs.registerStep(a_xvCKgWXbKTWbT7rwAZ4Q9R1r$0, 'a_xvCKgWXbKTWbT7rwAZ4Q9R1r$0');

/* ACTION: CreateLevel1 */
function a_JRafGmu444XzAE2AdQSBZHm3(previous, returnAddr, $board, $labyrinth, $middleX, $middleY) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_JRafGmu444XzAE2AdQSBZHm3$0;
  s.name = "CreateLevel1";
  s.results = [];
  s.$board = $board;
  s.$labyrinth = $labyrinth;
  s.$middleX = $middleX;
  s.$middleY = $middleY;
  s.results[0] = undefined;
  s.results[1] = undefined;
  s.results[2] = undefined;
  s.results[3] = undefined;
  s.results[4] = undefined;
  s.results[5] = undefined;
  s.results[6] = undefined;
  s.results[7] = undefined;
  s.results[8] = undefined;
  s.results[9] = undefined;
  return s;
}
cs.registerAction("CreateLevel1", "JRafGmu444XzAE2AdQSBZHm3", a_JRafGmu444XzAE2AdQSBZHm3, false);

function a_JRafGmu444XzAE2AdQSBZHm3$0(s) {
  (s.pc = "jOJBoNJjrtJ2DYre");
  var t_call_0 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 * 0.028));
  var t_call_2 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 * 0.1));
  var t_call_4 = (ok3(s, s.$board, t_infix_1, t_infix_3) && s.$board.create_rectangle(t_infix_1, t_infix_3, s));
  s.rt.markAllocated(t_call_4);
  (s.results[0] = t_call_4);
  (s.pc = "sD3Y7oR7uH5G2K7N");
  var t_call_5 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 * 0.01));
  var t_infix_7 = (ok2(s, s.$middleX, t_infix_6) && (s.$middleX + t_infix_6));
  var t_call_8 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 * 0.4));
  var t_infix_10 = (ok2(s, s.$middleY, t_infix_9) && (s.$middleY - t_infix_9));
  s.rt.logObjectMutation(s.results[0]);
  (ok3(s, s.results[0], t_infix_7, t_infix_10) && s.results[0].set_pos(t_infix_7, t_infix_10, s));
  (s.pc = "vkcc86RyiMXWo5tx");
  s.rt.logObjectMutation(s.results[0]);
  (ok1(s, s.results[0]) && s.results[0].hide(s));
  (s.pc = "jS2cLVSKdLjboPg7");
  var t_call_11 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 * 0.425));
  var t_call_13 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 * 0.02));
  var t_call_15 = (ok3(s, s.$board, t_infix_12, t_infix_14) && s.$board.create_rectangle(t_infix_12, t_infix_14, s));
  s.rt.markAllocated(t_call_15);
  (s.results[1] = t_call_15);
  (s.pc = "MPS24wNC855OzUyL");
  var t_call_16 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_17 = (ok1(s, t_call_16) && (t_call_16 * 0.012));
  var t_infix_18 = (ok2(s, s.$middleX, t_infix_17) && (s.$middleX + t_infix_17));
  var t_call_19 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_20 = (ok1(s, t_call_19) && (t_call_19 * 0.347));
  var t_infix_21 = (ok2(s, s.$middleY, t_infix_20) && (s.$middleY - t_infix_20));
  s.rt.logObjectMutation(s.results[1]);
  (ok3(s, s.results[1], t_infix_18, t_infix_21) && s.results[1].set_pos(t_infix_18, t_infix_21, s));
  (s.pc = "PsnpCO6798qAkIv0");
  s.rt.logObjectMutation(s.results[1]);
  (ok1(s, s.results[1]) && s.results[1].hide(s));
  (s.pc = "jhL7spTwTIcRpfm2");
  var t_call_22 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_23 = (ok1(s, t_call_22) && (t_call_22 * 0.03));
  var t_call_24 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_25 = (ok1(s, t_call_24) && (t_call_24 * 0.11));
  var t_call_26 = (ok3(s, s.$board, t_infix_23, t_infix_25) && s.$board.create_rectangle(t_infix_23, t_infix_25, s));
  s.rt.markAllocated(t_call_26);
  (s.results[2] = t_call_26);
  (s.pc = "xjsIr1jy7jXIxY1Y");
  var t_call_27 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_28 = (ok1(s, t_call_27) && (t_call_27 * 0.21));
  var t_infix_29 = (ok2(s, s.$middleX, t_infix_28) && (s.$middleX + t_infix_28));
  var t_call_30 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_31 = (ok1(s, t_call_30) && (t_call_30 * 0.3));
  var t_infix_32 = (ok2(s, s.$middleY, t_infix_31) && (s.$middleY - t_infix_31));
  s.rt.logObjectMutation(s.results[2]);
  (ok3(s, s.results[2], t_infix_29, t_infix_32) && s.results[2].set_pos(t_infix_29, t_infix_32, s));
  (s.pc = "NWQZPjFJiY7wIJAB");
  s.rt.logObjectMutation(s.results[2]);
  (ok1(s, s.results[2]) && s.results[2].hide(s));
  (s.pc = "JIHyzA2GRj92W1gS");
  var t_call_33 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_34 = (ok1(s, t_call_33) && (t_call_33 * 0.028));
  var t_call_35 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_36 = (ok1(s, t_call_35) && (t_call_35 * 0.39));
  var t_call_37 = (ok3(s, s.$board, t_infix_34, t_infix_36) && s.$board.create_rectangle(t_infix_34, t_infix_36, s));
  s.rt.markAllocated(t_call_37);
  (s.results[3] = t_call_37);
  (s.pc = "TbWufusiuisCd53j");
  var t_call_38 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_39 = (ok1(s, t_call_38) && (t_call_38 * 0.32));
  var t_infix_40 = (ok2(s, s.$middleX, t_infix_39) && (s.$middleX - t_infix_39));
  var t_call_41 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_42 = (ok1(s, t_call_41) && (t_call_41 * 0.033));
  var t_infix_43 = (ok2(s, s.$middleY, t_infix_42) && (s.$middleY - t_infix_42));
  s.rt.logObjectMutation(s.results[3]);
  (ok3(s, s.results[3], t_infix_40, t_infix_43) && s.results[3].set_pos(t_infix_40, t_infix_43, s));
  (s.pc = "sHWCLcbIU2RAZKAc");
  s.rt.logObjectMutation(s.results[3]);
  (ok1(s, s.results[3]) && s.results[3].hide(s));
  (s.pc = "xltz7CwUVQRDUN08");
  var t_call_44 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_45 = (ok1(s, t_call_44) && (t_call_44 * 0.028));
  var t_call_46 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 * 0.055));
  var t_call_48 = (ok3(s, s.$board, t_infix_45, t_infix_47) && s.$board.create_rectangle(t_infix_45, t_infix_47, s));
  s.rt.markAllocated(t_call_48);
  (s.results[4] = t_call_48);
  (s.pc = "xZctuvTKJI3hF0Qh");
  var t_call_49 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_50 = (ok1(s, t_call_49) && (t_call_49 * 0.31));
  var t_infix_51 = (ok2(s, s.$middleX, t_infix_50) && (s.$middleX - t_infix_50));
  var t_call_52 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_53 = (ok1(s, t_call_52) && (t_call_52 * 0.311));
  var t_infix_54 = (ok2(s, s.$middleY, t_infix_53) && (s.$middleY + t_infix_53));
  s.rt.logObjectMutation(s.results[4]);
  (ok3(s, s.results[4], t_infix_51, t_infix_54) && s.results[4].set_pos(t_infix_51, t_infix_54, s));
  (s.pc = "xsNumucA04VNlaS0");
  s.rt.logObjectMutation(s.results[4]);
  (ok1(s, s.results[4]) && s.results[4].hide(s));
  (s.pc = "ImocOBjLE8Bd1qGq");
  var t_call_55 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_56 = (ok1(s, t_call_55) && (t_call_55 * 0.028));
  var t_call_57 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_58 = (ok1(s, t_call_57) && (t_call_57 * 0.39));
  var t_call_59 = (ok3(s, s.$board, t_infix_56, t_infix_58) && s.$board.create_rectangle(t_infix_56, t_infix_58, s));
  s.rt.markAllocated(t_call_59);
  (s.results[5] = t_call_59);
  (s.pc = "xjecTNJOeO2sVkzz");
  var t_call_60 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_61 = (ok1(s, t_call_60) && (t_call_60 * 0.122));
  var t_infix_62 = (ok2(s, s.$middleX, t_infix_61) && (s.$middleX - t_infix_61));
  var t_call_63 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_64 = (ok1(s, t_call_63) && (t_call_63 * 0.12));
  var t_infix_65 = (ok2(s, s.$middleY, t_infix_64) && (s.$middleY + t_infix_64));
  s.rt.logObjectMutation(s.results[5]);
  (ok3(s, s.results[5], t_infix_62, t_infix_65) && s.results[5].set_pos(t_infix_62, t_infix_65, s));
  (s.pc = "izFZ2qi26atichYo");
  s.rt.logObjectMutation(s.results[5]);
  (ok1(s, s.results[5]) && s.results[5].hide(s));
  (s.pc = "xK7MY3C42jUbJG9S");
  var t_call_66 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_67 = (ok1(s, t_call_66) && (t_call_66 * 0.028));
  var t_call_68 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_69 = (ok1(s, t_call_68) && (t_call_68 * 0.17));
  var t_call_70 = (ok3(s, s.$board, t_infix_67, t_infix_69) && s.$board.create_rectangle(t_infix_67, t_infix_69, s));
  s.rt.markAllocated(t_call_70);
  (s.results[6] = t_call_70);
  (s.pc = "M5w7eJT54u2Subbg");
  var t_call_71 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_72 = (ok1(s, t_call_71) && (t_call_71 * 0.09));
  var t_infix_73 = (ok2(s, s.$middleX, t_infix_72) && (s.$middleX + t_infix_72));
  var t_call_74 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_75 = (ok1(s, t_call_74) && (t_call_74 * 0.263));
  var t_infix_76 = (ok2(s, s.$middleY, t_infix_75) && (s.$middleY + t_infix_75));
  s.rt.logObjectMutation(s.results[6]);
  (ok3(s, s.results[6], t_infix_73, t_infix_76) && s.results[6].set_pos(t_infix_73, t_infix_76, s));
  (s.pc = "A49CnvyUh8D615Ct");
  s.rt.logObjectMutation(s.results[6]);
  (ok1(s, s.results[6]) && s.results[6].hide(s));
  (s.pc = "xScpzyPRkGgkr2xn");
  var t_call_77 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_78 = (ok1(s, t_call_77) && (t_call_77 * 0.028));
  var t_call_79 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_80 = (ok1(s, t_call_79) && (t_call_79 * 0.17));
  var t_call_81 = (ok3(s, s.$board, t_infix_78, t_infix_80) && s.$board.create_rectangle(t_infix_78, t_infix_80, s));
  s.rt.markAllocated(t_call_81);
  (s.results[7] = t_call_81);
  (s.pc = "MvuKmd47Hm5KgaRL");
  var t_call_82 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_83 = (ok1(s, t_call_82) && (t_call_82 * 0.285));
  var t_infix_84 = (ok2(s, s.$middleX, t_infix_83) && (s.$middleX + t_infix_83));
  var t_call_85 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_86 = (ok1(s, t_call_85) && (t_call_85 * 0.38));
  var t_infix_87 = (ok2(s, s.$middleY, t_infix_86) && (s.$middleY + t_infix_86));
  s.rt.logObjectMutation(s.results[7]);
  (ok3(s, s.results[7], t_infix_84, t_infix_87) && s.results[7].set_pos(t_infix_84, t_infix_87, s));
  (s.pc = "xaCAi4PyEGyqpnId");
  s.rt.logObjectMutation(s.results[7]);
  (ok1(s, s.results[7]) && s.results[7].hide(s));
  (s.pc = "R0JbW1xBSmRacf2l");
  var t_call_88 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_89 = (ok1(s, t_call_88) && (t_call_88 * 0.028));
  var t_call_90 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_91 = (ok1(s, t_call_90) && (t_call_90 * 0.43));
  var t_call_92 = (ok3(s, s.$board, t_infix_89, t_infix_91) && s.$board.create_rectangle(t_infix_89, t_infix_91, s));
  s.rt.markAllocated(t_call_92);
  (s.results[8] = t_call_92);
  (s.pc = "fmH0xu7vj7PoO74t");
  var t_call_93 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_94 = (ok1(s, t_call_93) && (t_call_93 * 0.347));
  var t_infix_95 = (ok2(s, s.$middleX, t_infix_94) && (s.$middleX + t_infix_94));
  var t_call_96 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_97 = (ok1(s, t_call_96) && (t_call_96 * 0.058));
  var t_infix_98 = (ok2(s, s.$middleY, t_infix_97) && (s.$middleY - t_infix_97));
  s.rt.logObjectMutation(s.results[8]);
  (ok3(s, s.results[8], t_infix_95, t_infix_98) && s.results[8].set_pos(t_infix_95, t_infix_98, s));
  (s.pc = "JQWwrjJkNuDf3bmi");
  s.rt.logObjectMutation(s.results[8]);
  (ok1(s, s.results[8]) && s.results[8].hide(s));
  (s.pc = "W44BbzAsPT4GBOqc");
  var t_call_99 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_100 = (ok1(s, t_call_99) && (t_call_99 * 0.29));
  var t_call_101 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_102 = (ok1(s, t_call_101) && (t_call_101 * 0.025));
  var t_call_103 = (ok3(s, s.$board, t_infix_100, t_infix_102) && s.$board.create_rectangle(t_infix_100, t_infix_102, s));
  s.rt.markAllocated(t_call_103);
  (s.results[9] = t_call_103);
  (s.pc = "U1kTTM2m4jIdtoag");
  var t_call_104 = (ok1(s, s.$labyrinth) && s.$labyrinth.width(s));
  var t_infix_105 = (ok1(s, t_call_104) && (t_call_104 * 0.2));
  var t_infix_106 = (ok2(s, s.$middleX, t_infix_105) && (s.$middleX + t_infix_105));
  var t_call_107 = (ok1(s, s.$labyrinth) && s.$labyrinth.height(s));
  var t_infix_108 = (ok1(s, t_call_107) && (t_call_107 * 0.075));
  var t_infix_109 = (ok2(s, s.$middleY, t_infix_108) && (s.$middleY - t_infix_108));
  s.rt.logObjectMutation(s.results[9]);
  (ok3(s, s.results[9], t_infix_106, t_infix_109) && s.results[9].set_pos(t_infix_106, t_infix_109, s));
  (s.pc = "G4N5CANeJxrpB2p7");
  s.rt.logObjectMutation(s.results[9]);
  (ok1(s, s.results[9]) && s.results[9].hide(s));
  return s.rt.leave();
}
cs.registerStep(a_JRafGmu444XzAE2AdQSBZHm3$0, 'a_JRafGmu444XzAE2AdQSBZHm3$0');

/* ACTION: PhysicCheck */
function a_e9dBrxaqzVsPLAVRm0Vcz54Q(previous, returnAddr, $RightWall, $LeftWall, $MiniWall3_R, $MiniWall1_L, $TopWall, $BottomWall, $MiniWall2_T, $MiniWall4, $MiniWall5, $MiniWall6, $MiniWall7, $MiniWall8, $MiniWall9, $MiniWall10, $marble) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_e9dBrxaqzVsPLAVRm0Vcz54Q$0;
  s.name = "PhysicCheck";
  s.$RightWall = $RightWall;
  s.$LeftWall = $LeftWall;
  s.$MiniWall3_R = $MiniWall3_R;
  s.$MiniWall1_L = $MiniWall1_L;
  s.$TopWall = $TopWall;
  s.$BottomWall = $BottomWall;
  s.$MiniWall2_T = $MiniWall2_T;
  s.$MiniWall4 = $MiniWall4;
  s.$MiniWall5 = $MiniWall5;
  s.$MiniWall6 = $MiniWall6;
  s.$MiniWall7 = $MiniWall7;
  s.$MiniWall8 = $MiniWall8;
  s.$MiniWall9 = $MiniWall9;
  s.$MiniWall10 = $MiniWall10;
  s.$marble = $marble;
  s.$SoundPlaying = undefined;
  s.$Strenght_min = undefined;
  s.$wallHit = undefined;
  s.$Duration = undefined;
  s.$startTime = undefined;
  s.$MarginCol = undefined;
  s.$TempoWall = undefined;
  s.$k = undefined;
  s.$SpeedMarbleHitX = undefined;
  s.$SpeedMarbleHitY = undefined;
  return s;
}
cs.registerAction("PhysicCheck", "e9dBrxaqzVsPLAVRm0Vcz54Q", a_e9dBrxaqzVsPLAVRm0Vcz54Q, false);

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$0(s) {
  (s.pc = "WmNh94BsxvCUpd8N");
  (s.$SoundPlaying = false);
  (s.pc = "zP52BTwjAJuxPvom");
  (s.$Strenght_min = 50);
  (s.pc = "bbIqdLBbA8Vzdrnn");
  null;
  (s.pc = "ZI2D6qHZ6yEYC3nk");
  (s.$wallHit = /* marble hit wood wall (slow-med) */ s.d.$xRHa92AhY2O1UXhIEj4zigN3);
  (s.pc = "Dh2hOeNbRLGea5jd");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_e9dBrxaqzVsPLAVRm0Vcz54Q$1);
  var t_call_1 = (ok1(s, s.$wallHit) && s.$wallHit.duration(t_resumeCtx_0));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$1;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$0, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$0');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  (s.$Duration = t_pauseRes_2);
  (s.pc = "tIDHOHKZcz9XXTDy");
  var t_libcall_3 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_e9dBrxaqzVsPLAVRm0Vcz54Q$2));
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$1, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$1');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$2(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_4);
  (s.pc = "I4JHB0yavNNOkY7r");
  (s.$MarginCol = 0.01);
  (s.pc = "h3WpYAxuuYI1GVca");
  (s.$TempoWall = s.$RightWall);
  (s.pc = "MLD9b9LOTALAdkyI");
  s.t_bnd_5 = 14;
  (s.$k = 0);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$3;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$2, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$2');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$3(s) {
  if ((s.$k < s.t_bnd_5)) {
  var t_elseIf_6 = true;
  (s.pc = "xfmOowEDOAmI2Vk2");
  var t_infix_7 = (ok1(s, s.$k) && (s.$k === 1));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (t_elseIf_6 = false);
  (s.pc = "zrVkkoaJKXUXx2Xb");
  (s.$TempoWall = s.$RightWall);
  }
  if (t_elseIf_6) {
  (s.pc = "fOZUmR4E8ZlOAIx9");
  var t_infix_8 = (ok1(s, s.$k) && (s.$k === 0));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (t_elseIf_6 = false);
  (s.pc = "Al8mP9iJRNzAjjRP");
  (s.$TempoWall = s.$LeftWall);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "a422dVn6csP5m3Rs");
  var t_infix_9 = (ok1(s, s.$k) && (s.$k === 2));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (t_elseIf_6 = false);
  (s.pc = "CVeqG4dJ0OUTvaxi");
  (s.$TempoWall = s.$MiniWall3_R);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "ae44gcEj40neJGeR");
  var t_infix_10 = (ok1(s, s.$k) && (s.$k === 3));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (t_elseIf_6 = false);
  (s.pc = "dyWXY9vFGOrzXQmW");
  (s.$TempoWall = s.$MiniWall1_L);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "zraO75bxJMSgNIRN");
  var t_infix_11 = (ok1(s, s.$k) && (s.$k === 4));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (t_elseIf_6 = false);
  (s.pc = "x6kIfy0F4oHjfqRv");
  (s.$TempoWall = s.$TopWall);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "fcgWbeaJKMfkpS1x");
  var t_infix_12 = (ok1(s, s.$k) && (s.$k === 5));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (t_elseIf_6 = false);
  (s.pc = "PWpLBBHNC4ECYijZ");
  (s.$TempoWall = s.$BottomWall);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "VtISSoR56a8UATFQ");
  var t_infix_13 = (ok1(s, s.$k) && (s.$k === 6));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (t_elseIf_6 = false);
  (s.pc = "EG0BShnc840N7EUh");
  (s.$TempoWall = s.$MiniWall2_T);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "hu2w35ouRUpDt9DI");
  var t_infix_14 = (ok1(s, s.$k) && (s.$k === 7));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (t_elseIf_6 = false);
  (s.pc = "xaRbRsIwwv10mGHs");
  (s.$TempoWall = s.$MiniWall4);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "gxGMRoAOchwMRfd1");
  var t_infix_15 = (ok1(s, s.$k) && (s.$k === 8));
  ok1(s, t_infix_15);
  if (t_infix_15) {
  (t_elseIf_6 = false);
  (s.pc = "Y3wRhjHCBwladdr8");
  (s.$TempoWall = s.$MiniWall5);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "hctWJnbCvUxcOjNG");
  var t_infix_16 = (ok1(s, s.$k) && (s.$k === 9));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (t_elseIf_6 = false);
  (s.pc = "J1keJ0o7gdZ4vlk1");
  (s.$TempoWall = s.$MiniWall6);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "COzbPd2Y0I7QA9cs");
  var t_infix_17 = (ok1(s, s.$k) && (s.$k === 10));
  ok1(s, t_infix_17);
  if (t_infix_17) {
  (t_elseIf_6 = false);
  (s.pc = "J9dobbWNCwVljSWv");
  (s.$TempoWall = s.$MiniWall7);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "xlsbwYB0epylKoYu");
  var t_infix_18 = (ok1(s, s.$k) && (s.$k === 11));
  ok1(s, t_infix_18);
  if (t_infix_18) {
  (t_elseIf_6 = false);
  (s.pc = "cPSlpMQJ7WeL8EDG");
  (s.$TempoWall = s.$MiniWall8);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "NXlZxUPBVhxFwmn6");
  var t_infix_19 = (ok1(s, s.$k) && (s.$k === 12));
  ok1(s, t_infix_19);
  if (t_infix_19) {
  (t_elseIf_6 = false);
  (s.pc = "ZnMrpulmWuaOgi3r");
  (s.$TempoWall = s.$MiniWall9);
  }
  }
  if (t_elseIf_6) {
  (s.pc = "Ixltwfbdof78UUk7");
  var t_infix_20 = (ok1(s, s.$k) && (s.$k === 13));
  ok1(s, t_infix_20);
  if (t_infix_20) {
  (s.pc = "xtJMKZE9hCxf2pq4");
  (s.$TempoWall = s.$MiniWall10);
  } else {
  (s.pc = "IOv4zv6XjOLuKLVd");
  null;
  }
  }
  var t_elseIf_21 = true;
  (s.pc = "dDSqmZ6DbmaCA26X");
  var t_call_22 = (ok2(s, s.$marble, s.$TempoWall) && s.$marble.overlaps_with(s.$TempoWall, s));
  ok1(s, t_call_22);
  if (t_call_22) {
  (s.pc = "wYYxvWd1mXkWj4AA");
  var t_call_23 = (ok1(s, s.$marble) && s.$marble.speed_x(s));
  var t_call_24 = (ok1(s, t_call_23) && lib.Math_.abs(t_call_23, s));
  (s.$SpeedMarbleHitX = t_call_24);
  (s.pc = "qAtm8O6PiM4DGuRP");
  var t_call_25 = (ok1(s, s.$marble) && s.$marble.speed_y(s));
  var t_call_26 = (ok1(s, t_call_25) && lib.Math_.abs(t_call_25, s));
  (s.$SpeedMarbleHitY = t_call_26);
  s.t_elseIf_27 = true;
  (s.pc = "P4cgseQyKx0xaEAu");
  var t_call_28 = (ok1(s, s.$TempoWall) && s.$TempoWall.height(s));
  var t_call_29 = (ok1(s, s.$TempoWall) && s.$TempoWall.width(s));
  var t_infix_30 = (ok2(s, t_call_28, t_call_29) && (t_call_28 > t_call_29));
  ok1(s, t_infix_30);
  if (t_infix_30) {
  (s.t_elseIf_27 = false);
  s.t_elseIf_31 = true;
  (s.pc = "FHbM51PZpEPLgE7N");
  var t_call_32 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_33 = (ok1(s, s.$TempoWall) && s.$TempoWall.x(s));
  var t_infix_34 = (ok2(s, t_call_32, t_call_33) && (t_call_32 > t_call_33));
  ok1(s, t_infix_34);
  if (t_infix_34) {
  (s.t_elseIf_31 = false);
  var t_elseIf_35 = true;
  (s.pc = "xlq07nhhG4U24UGI");
  var t_call_36 = (ok1(s, s.$SoundPlaying) && lib.Boolean_.not(s.$SoundPlaying, s));
  var t_lazy_37 = t_call_36;
  if ((ok1(s, t_lazy_37) && t_lazy_37)) {
  var t_infix_38 = (ok2(s, s.$SpeedMarbleHitX, s.$Strenght_min) && (s.$SpeedMarbleHitX > s.$Strenght_min));
  (t_lazy_37 = t_infix_38);
  }
  ok1(s, t_lazy_37);
  if (t_lazy_37) {
  (s.pc = "xyJuwbNcTnR4Kac6");
  s.rt.logObjectMutation(s.$wallHit);
  (ok2(s, s.$wallHit, s.$SpeedMarbleHitX) && s.$wallHit.set_volume(s.$SpeedMarbleHitX, s));
  (s.pc = "LWUG2uDGFLIkIXng");
  (s.$SoundPlaying = true);
  (s.pc = "Rtvrhh92tVL2Ke6Z");
  var t_resumeCtx_39 = s.rt.getBlockingResumeCtx(a_e9dBrxaqzVsPLAVRm0Vcz54Q$37);
  (ok1(s, s.$wallHit) && s.$wallHit.play(t_resumeCtx_39));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$37;
  } else {
  (s.pc = "e0QaVevz2bt4FHJL");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$36;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$34;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$33;
  } else {
  (s.pc = "vNLRXNVpVDk3JTsM");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$32;
  }
  return s.rt.leave();
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$3, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$3');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$37(s) {
  (s.pc = "X9sCutWpVPkZJART");
  var t_libcall_40 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_40.invoke(t_libcall_40, a_e9dBrxaqzVsPLAVRm0Vcz54Q$38));
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$37, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$37');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$36(s) {
  (s.pc = "GoKq3kZqeKmSkbJs");
  var t_call_42 = (ok1(s, s.$marble) && s.$marble.speed_x(s));
  var t_infix_43 = (ok1(s, t_call_42) && (0 - t_call_42));
  var t_infix_44 = (ok1(s, t_infix_43) && (t_infix_43 * 0.5));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_44) && s.$marble.set_speed_x(t_infix_44, s));
  (s.pc = "b8ft4po1r1wSEoXc");
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$39;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$36, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$36');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$34(s) {
  if (s.t_elseIf_31) {
  (s.pc = "B5oku617RE0gu2yR");
  var t_call_50 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_51 = (ok1(s, s.$TempoWall) && s.$TempoWall.x(s));
  var t_infix_52 = (ok2(s, t_call_50, t_call_51) && (t_call_50 < t_call_51));
  ok1(s, t_infix_52);
  if (t_infix_52) {
  var t_elseIf_53 = true;
  (s.pc = "Wxglz0mEGYpQYyOb");
  var t_call_54 = (ok1(s, s.$SoundPlaying) && lib.Boolean_.not(s.$SoundPlaying, s));
  var t_lazy_55 = t_call_54;
  if ((ok1(s, t_lazy_55) && t_lazy_55)) {
  var t_infix_56 = (ok2(s, s.$SpeedMarbleHitX, s.$Strenght_min) && (s.$SpeedMarbleHitX > s.$Strenght_min));
  (t_lazy_55 = t_infix_56);
  }
  ok1(s, t_lazy_55);
  if (t_lazy_55) {
  (s.pc = "vXy05BZE4MfwJ4Jm");
  s.rt.logObjectMutation(s.$wallHit);
  (ok2(s, s.$wallHit, s.$SpeedMarbleHitX) && s.$wallHit.set_volume(s.$SpeedMarbleHitX, s));
  (s.pc = "xF4VzbW2tFmMbutV");
  (s.$SoundPlaying = true);
  (s.pc = "xtNGyAI55RowEJjI");
  var t_resumeCtx_57 = s.rt.getBlockingResumeCtx(a_e9dBrxaqzVsPLAVRm0Vcz54Q$44);
  (ok1(s, s.$wallHit) && s.$wallHit.play(t_resumeCtx_57));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$44;
  } else {
  (s.pc = "qvoFj1igNhIIhvP4");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$43;
  } else {
  (s.pc = "fUax0JQW2sVtucuL");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$41;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$48;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$34, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$34');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$33(s) {
  if (s.t_elseIf_27) {
  (s.pc = "EciOUeA0QPXSpbfR");
  var t_call_69 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_70 = (ok1(s, s.$TempoWall) && s.$TempoWall.y(s));
  var t_infix_71 = (ok2(s, t_call_69, t_call_70) && (t_call_69 > t_call_70));
  ok1(s, t_infix_71);
  if (t_infix_71) {
  (s.t_elseIf_27 = false);
  var t_elseIf_72 = true;
  (s.pc = "RUMF8F4ZXD4jPwyn");
  var t_call_73 = (ok1(s, s.$SoundPlaying) && lib.Boolean_.not(s.$SoundPlaying, s));
  var t_lazy_74 = t_call_73;
  if ((ok1(s, t_lazy_74) && t_lazy_74)) {
  var t_infix_75 = (ok2(s, s.$SpeedMarbleHitY, s.$Strenght_min) && (s.$SpeedMarbleHitY > s.$Strenght_min));
  (t_lazy_74 = t_infix_75);
  }
  ok1(s, t_lazy_74);
  if (t_lazy_74) {
  (s.pc = "sfOGfHjXKXYbMwHj");
  s.rt.logObjectMutation(s.$wallHit);
  (ok2(s, s.$wallHit, s.$SpeedMarbleHitY) && s.$wallHit.set_volume(s.$SpeedMarbleHitY, s));
  (s.pc = "gROwmWAjZwV48X5q");
  (s.$SoundPlaying = true);
  (s.pc = "G5ImhkI2SUi9XehG");
  var t_resumeCtx_76 = s.rt.getBlockingResumeCtx(a_e9dBrxaqzVsPLAVRm0Vcz54Q$52);
  (ok1(s, s.$wallHit) && s.$wallHit.play(t_resumeCtx_76));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$52;
  } else {
  (s.pc = "AiNT2rRbgC5XtwCv");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$51;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$49;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$56;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$33, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$33');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$32(s) {
  (s.pc = "jROZ5L5xNnMFPm7m");
  null;
  (s.$k++);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$3;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$32, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$32');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$38(s) {
  var t_actRes_41 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_41);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$36;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$38, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$38');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$39(s) {
  var t_call_45 = (ok2(s, s.$marble, s.$TempoWall) && s.$marble.overlaps_with(s.$TempoWall, s));
  if (t_call_45) {
  (s.pc = "JQKLgbHKXoP1E2I4");
  var t_call_46 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_47 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_infix_48 = (ok1(s, t_call_47) && (t_call_47 * 0.001));
  var t_infix_49 = (ok2(s, t_call_46, t_infix_48) && (t_call_46 + t_infix_48));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_49) && s.$marble.set_x(t_infix_49, s));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$39;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$34;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$39, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$39');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$44(s) {
  (s.pc = "xodWpaG2Hv71jLiR");
  var t_libcall_58 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_58.invoke(t_libcall_58, a_e9dBrxaqzVsPLAVRm0Vcz54Q$45));
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$44, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$44');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$43(s) {
  (s.pc = "CtbSrivnvuRAOeAe");
  var t_call_60 = (ok1(s, s.$marble) && s.$marble.speed_x(s));
  var t_infix_61 = (ok1(s, t_call_60) && (0 - t_call_60));
  var t_infix_62 = (ok1(s, t_infix_61) && (t_infix_61 * 0.5));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_62) && s.$marble.set_speed_x(t_infix_62, s));
  (s.pc = "JdeH49UHIaeNcZNa");
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$46;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$43, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$43');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$41(s) {
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$48;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$41, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$41');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$48(s) {
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$33;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$48, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$48');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$52(s) {
  (s.pc = "De32c6wcsbZwk3FO");
  var t_libcall_77 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_77.invoke(t_libcall_77, a_e9dBrxaqzVsPLAVRm0Vcz54Q$53));
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$52, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$52');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$51(s) {
  (s.pc = "otP4k9pg2IaTc2vO");
  var t_call_79 = (ok1(s, s.$marble) && s.$marble.speed_y(s));
  var t_infix_80 = (ok1(s, t_call_79) && (0 - t_call_79));
  var t_infix_81 = (ok1(s, t_infix_80) && (t_infix_80 * 0.5));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_81) && s.$marble.set_speed_y(t_infix_81, s));
  (s.pc = "xd9OxIRXbE481Pwm");
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$54;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$51, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$51');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$49(s) {
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$56;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$49, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$49');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$56(s) {
  if (s.t_elseIf_27) {
  (s.pc = "k01XN3yGxEwcpapU");
  var t_call_87 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_88 = (ok1(s, s.$TempoWall) && s.$TempoWall.y(s));
  var t_infix_89 = (ok2(s, t_call_87, t_call_88) && (t_call_87 < t_call_88));
  ok1(s, t_infix_89);
  if (t_infix_89) {
  var t_elseIf_90 = true;
  (s.pc = "KGTNJxrKdTzYzCrF");
  var t_call_91 = (ok1(s, s.$SoundPlaying) && lib.Boolean_.not(s.$SoundPlaying, s));
  var t_lazy_92 = t_call_91;
  if ((ok1(s, t_lazy_92) && t_lazy_92)) {
  var t_infix_93 = (ok2(s, s.$SpeedMarbleHitY, s.$Strenght_min) && (s.$SpeedMarbleHitY > s.$Strenght_min));
  (t_lazy_92 = t_infix_93);
  }
  ok1(s, t_lazy_92);
  if (t_lazy_92) {
  (s.pc = "zb2IyGHUzG9Ia84W");
  s.rt.logObjectMutation(s.$wallHit);
  (ok2(s, s.$wallHit, s.$SpeedMarbleHitY) && s.$wallHit.set_volume(s.$SpeedMarbleHitY, s));
  (s.pc = "AkQIPSpYYfEcUfK7");
  (s.$SoundPlaying = true);
  (s.pc = "xXIK2bwwiVRtx38P");
  var t_resumeCtx_94 = s.rt.getBlockingResumeCtx(a_e9dBrxaqzVsPLAVRm0Vcz54Q$60);
  (ok1(s, s.$wallHit) && s.$wallHit.play(t_resumeCtx_94));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$60;
  } else {
  (s.pc = "pC57MF9A86i7HkdP");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$59;
  } else {
  (s.pc = "VtG5o3HfNJrSnHtf");
  null;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$57;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$64;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$56, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$56');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$45(s) {
  var t_actRes_59 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_59);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$43;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$45, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$45');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$46(s) {
  var t_call_63 = (ok2(s, s.$marble, s.$TempoWall) && s.$marble.overlaps_with(s.$TempoWall, s));
  if (t_call_63) {
  (s.pc = "pk4db4vcXVQtluFf");
  var t_call_64 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_call_65 = (ok1(s, s.$marble) && s.$marble.x(s));
  var t_infix_66 = (0 - 0.001);
  var t_infix_67 = (ok2(s, t_call_65, t_infix_66) && (t_call_65 * t_infix_66));
  var t_infix_68 = (ok2(s, t_call_64, t_infix_67) && (t_call_64 + t_infix_67));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_68) && s.$marble.set_x(t_infix_68, s));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$46;
  }
  (s.pc = "ytyk6EaD2lZAvd8a");
  null;
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$41;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$46, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$46');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$53(s) {
  var t_actRes_78 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_78);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$51;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$53, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$53');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$54(s) {
  var t_call_82 = (ok2(s, s.$marble, s.$TempoWall) && s.$marble.overlaps_with(s.$TempoWall, s));
  if (t_call_82) {
  (s.pc = "wJgsPoIjDq9Eqdo9");
  var t_call_83 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_84 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_infix_85 = (ok1(s, t_call_84) && (t_call_84 * 0.001));
  var t_infix_86 = (ok2(s, t_call_83, t_infix_85) && (t_call_83 + t_infix_85));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_86) && s.$marble.set_y(t_infix_86, s));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$54;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$49;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$54, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$54');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$60(s) {
  (s.pc = "GOo3uSYFtrblfdsa");
  var t_libcall_95 = s.libs["xqf21a4nsexaKORh5KxXhn3C"]["current time"](s);
  return s.rt.enter(t_libcall_95.invoke(t_libcall_95, a_e9dBrxaqzVsPLAVRm0Vcz54Q$61));
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$60, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$60');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$59(s) {
  (s.pc = "irgjGompW6nRVPSp");
  var t_call_97 = (ok1(s, s.$marble) && s.$marble.speed_y(s));
  var t_infix_98 = (ok1(s, t_call_97) && (0 - t_call_97));
  var t_infix_99 = (ok1(s, t_infix_98) && (t_infix_98 * 0.5));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_99) && s.$marble.set_speed_y(t_infix_99, s));
  (s.pc = "Cxy3ybFbT4cyXWGO");
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$62;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$59, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$59');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$57(s) {
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$64;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$57, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$57');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$64(s) {
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$32;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$64, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$64');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$61(s) {
  var t_actRes_96 = s.rt.returnedFrom.result;
  (s.$startTime = t_actRes_96);
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$59;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$61, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$61');

function a_e9dBrxaqzVsPLAVRm0Vcz54Q$62(s) {
  var t_call_100 = (ok2(s, s.$marble, s.$TempoWall) && s.$marble.overlaps_with(s.$TempoWall, s));
  if (t_call_100) {
  (s.pc = "k5yZocwaAEOKu1CL");
  var t_call_101 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_call_102 = (ok1(s, s.$marble) && s.$marble.y(s));
  var t_infix_103 = (0 - 0.001);
  var t_infix_104 = (ok2(s, t_call_102, t_infix_103) && (t_call_102 * t_infix_103));
  var t_infix_105 = (ok2(s, t_call_101, t_infix_104) && (t_call_101 + t_infix_104));
  s.rt.logObjectMutation(s.$marble);
  (ok2(s, s.$marble, t_infix_105) && s.$marble.set_y(t_infix_105, s));
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$62;
  }
  return a_e9dBrxaqzVsPLAVRm0Vcz54Q$57;
}
cs.registerStep(a_e9dBrxaqzVsPLAVRm0Vcz54Q$62, 'a_e9dBrxaqzVsPLAVRm0Vcz54Q$62');

cs.registerArtResource("Picture", "$vF4J4H2pjA9vcu4zSQUW1Wh7", ".\u002fart\u002fl0_vF4J4H2pjA9vcu4zSQUW1Wh7");
cs.registerArtResource("Picture", "$YEy7YxYlzcVzCZ1SpoP8lfIv", ".\u002fart\u002fl0_YEy7YxYlzcVzCZ1SpoP8lfIv");
cs.registerArtResource("Picture", "$xbyi85xZVqmc4v80ZqRIdEAr", ".\u002fart\u002fl0_xbyi85xZVqmc4v80ZqRIdEAr");
cs.registerArtResource("Sound", "$DISkikGcIZnASAHrM8Nut9id", ".\u002fart\u002fl0_DISkikGcIZnASAHrM8Nut9id");
cs.registerArtResource("Picture", "$X9GQyA15AVTIubzPNIcAmDAY", ".\u002fart\u002fl0_X9GQyA15AVTIubzPNIcAmDAY");
cs.registerArtResource("Sound", "$xgaktmo9J4WllASqmCGcBHJ1", ".\u002fart\u002fl0_xgaktmo9J4WllASqmCGcBHJ1");
cs.registerArtResource("Sound", "$xRHa92AhY2O1UXhIEj4zigN3", ".\u002fart\u002fl0_xRHa92AhY2O1UXhIEj4zigN3");
cs.registerArtResource("Sound", "$tgh5Edxvtz4OSMjNlIQQvxEI", ".\u002fart\u002fl0_tgh5Edxvtz4OSMjNlIQQvxEI");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "wooden labyrinth! \u0028lopp\u0029";
  bnd.scriptId = "lopp";
  bnd.topScriptId = "lopp";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["pzkiteluO7znguLL"] = {};
  bnd = bnds["pzkiteluO7znguLL"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "pzkiteluO7znguLL");
  bnd.scriptName = "gamepad \u0028clfwa\u0029";
  bnd.scriptId = "clfwa";
  bnd.topScriptId = "lopp";
    lib["current"] = cs.mkLibProxyFactory(bnd, "pzkiteluO7znguLL", "current");
  lib = libs["xqf21a4nsexaKORh5KxXhn3C"] = {};
  bnd = bnds["xqf21a4nsexaKORh5KxXhn3C"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "xqf21a4nsexaKORh5KxXhn3C");
  bnd.scriptName = "game \u0028hnooa\u0029";
  bnd.scriptId = "hnooa";
  bnd.topScriptId = "lopp";
    lib["set score"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "set score");
    lib["start timer"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "start timer");
    lib["score"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "score");
    lib["current time"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "current time");
    lib["end"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "end");
    lib["start"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "start");
    lib["board"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "board");
    lib["splash text"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "splash text");
    lib["set hud colors"] = cs.mkLibProxyFactory(bnd, "xqf21a4nsexaKORh5KxXhn3C", "set hud colors");
  bnd = bnds["pzkiteluO7znguLL"];
  bnd["this$lib"] = "pzkiteluO7znguLL";
    resolve = bnd["vIOEa4LjBL2h78vLd1Ls3U5z"] = {};
    bnd["vIOEa4LjBL2h78vLd1Ls3U5z" + "$lib"] = "xqf21a4nsexaKORh5KxXhn3C";
      resolve["board"] = libs["xqf21a4nsexaKORh5KxXhn3C"]["board"];
      resolve["start"] = libs["xqf21a4nsexaKORh5KxXhn3C"]["start"];
  bnd = bnds["xqf21a4nsexaKORh5KxXhn3C"];
  bnd["this$lib"] = "xqf21a4nsexaKORh5KxXhn3C";
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
  if(!d.hasOwnProperty("$HfTy5RKkoqQyJQfzVnQ4HkjP")) d.$HfTy5RKkoqQyJQfzVnQ4HkjP = 0;
  if(!d.hasOwnProperty("$nYoKbWGXIsyY2Zmismy14Djb")) d.$nYoKbWGXIsyY2Zmismy14Djb = false;

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$QA1wrriszz0wgvoY8ChqMPNT = undefined;
  d.$vF4J4H2pjA9vcu4zSQUW1Wh7 = undefined;
  d.$YEy7YxYlzcVzCZ1SpoP8lfIv = undefined;
  d.$xbyi85xZVqmc4v80ZqRIdEAr = undefined;
  d.$DISkikGcIZnASAHrM8Nut9id = undefined;
  d.$X9GQyA15AVTIubzPNIcAmDAY = undefined;
  d.$xgaktmo9J4WllASqmCGcBHJ1 = undefined;
  d.$xRHa92AhY2O1UXhIEj4zigN3 = undefined;
  d.$tgh5Edxvtz4OSMjNlIQQvxEI = undefined;
  d.$HfTy5RKkoqQyJQfzVnQ4HkjP = 0;
  d.$nYoKbWGXIsyY2Zmismy14Djb = false;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "lopp";
cs.scriptGuid = "aaaf0ae6-2fa4-4b12-982c-86346866b8c9";
}),

// **************************************************************
"pzkiteluO7znguLL": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "gamepad";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: current */
function a_qDcj96avRPrOW0HP9ddHIGDX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qDcj96avRPrOW0HP9ddHIGDX$0;
  s.name = "current";
  s.result = undefined;
  s.$now = undefined;
  s.$dt = undefined;
  s.$vector = undefined;
  s.$coll = undefined;
  return s;
}
cs.registerAction("current", "qDcj96avRPrOW0HP9ddHIGDX", a_qDcj96avRPrOW0HP9ddHIGDX, false);

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

function a_qDcj96avRPrOW0HP9ddHIGDX$0(s) {
  (s.pc = "1.d1");
  return s.rt.enter(a_O5jlHid249RIgTQx4Il4dMsQ(s, a_qDcj96avRPrOW0HP9ddHIGDX$1));
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$0, 'a_qDcj96avRPrOW0HP9ddHIGDX$0');

function a_qDcj96avRPrOW0HP9ddHIGDX$1(s) {
  (s.pc = "1.d4");
  var t_call_0 = lib.Time.now(s);
  (s.$now = t_call_0);
  (s.pc = "1.d7");
  return s.rt.enter(a_AKyPSHgYSnMUTq5QWdoGYf4b(s, a_qDcj96avRPrOW0HP9ddHIGDX$2, s.$now));
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$1, 'a_qDcj96avRPrOW0HP9ddHIGDX$1');

function a_qDcj96avRPrOW0HP9ddHIGDX$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$dt = t_actRes_1);
  (s.pc = "1.da");
  var t_call_2 = (ok1(s, /* Vector */ s.d.$BdGhpbmca) && /* Vector */ s.d.$BdGhpbmca.create(s));
  s.rt.markAllocated(t_call_2);
  (s.$vector = t_call_2);
  (s.pc = "1.dd");
  var t_call_3 = lib.Senses.gamepads(s);
  (s.$coll = t_call_3);
  var t_elseIf_4 = true;
  (s.pc = "1.dg");
  var t_call_5 = (ok1(s, s.$coll) && s.$coll.count(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 > 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "1.dk0");
  var t_call_7 = (ok1(s, s.$coll) && s.$coll.at(0, s));
  return s.rt.enter(a_qDlKG3i3k2K4V8WDC0PeMN11(s, a_qDcj96avRPrOW0HP9ddHIGDX$4, s.$dt, s.$vector, t_call_7));
  } else {
  (s.pc = "1.dl0");
  return s.rt.enter(a_l4qZbEXuo0rCJ9p2l2546YMX(s, a_qDcj96avRPrOW0HP9ddHIGDX$5, s.$dt, s.$vector));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$3;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$2, 'a_qDcj96avRPrOW0HP9ddHIGDX$2');

function a_qDcj96avRPrOW0HP9ddHIGDX$4(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$3;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$4, 'a_qDcj96avRPrOW0HP9ddHIGDX$4');

function a_qDcj96avRPrOW0HP9ddHIGDX$5(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$3;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$5, 'a_qDcj96avRPrOW0HP9ddHIGDX$5');

function a_qDcj96avRPrOW0HP9ddHIGDX$3(s) {
  s.t_elseIf_8 = true;
  (s.pc = "1.dl");
  ok1(s, /* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G);
  if (/* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G) {
  (s.t_elseIf_8 = false);
  (s.pc = "1.dp0");
  return s.rt.enter(a_NARYT4r1qcmrRmDNdAjtkOcD(s, a_qDcj96avRPrOW0HP9ddHIGDX$7, s.$dt, s.$vector));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$6;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$3, 'a_qDcj96avRPrOW0HP9ddHIGDX$3');

function a_qDcj96avRPrOW0HP9ddHIGDX$7(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$6;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$7, 'a_qDcj96avRPrOW0HP9ddHIGDX$7');

function a_qDcj96avRPrOW0HP9ddHIGDX$6(s) {
  if (s.t_elseIf_8) {
  (s.pc = "1.dq");
  var t_libcall_9 = s.libs["vIOEa4LjBL2h78vLd1Ls3U5z"]["board"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_qDcj96avRPrOW0HP9ddHIGDX$8));
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$11;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$6, 'a_qDcj96avRPrOW0HP9ddHIGDX$6');

function a_qDcj96avRPrOW0HP9ddHIGDX$8(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  var t_call_11 = (ok1(s, t_actRes_10) && t_actRes_10.touched(s));
  ok1(s, t_call_11);
  if (t_call_11) {
  (s.pc = "1.du0");
  return s.rt.enter(a_uYKZvu9VJlQJWlN4YZ8bPdOY(s, a_qDcj96avRPrOW0HP9ddHIGDX$10, s.$dt, s.$vector));
  } else {
  (s.pc = "1.dv0");
  null;
  }
  return a_qDcj96avRPrOW0HP9ddHIGDX$9;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$8, 'a_qDcj96avRPrOW0HP9ddHIGDX$8');

function a_qDcj96avRPrOW0HP9ddHIGDX$11(s) {
  (s.pc = "1.dv");
  if (s.$vector) {
  var t_recOp_12 = s.$vector[("$x")];
  }
  if (s.$vector) {
  var t_recOp_13 = s.$vector[("$y")];
  }
  if (s.$vector) {
  var t_recOp_14 = s.$vector[("$z")];
  }
  var t_call_15 = (ok3(s, t_recOp_12, t_recOp_13, t_recOp_14) && lib.Math_.create_vector3(t_recOp_12, t_recOp_13, t_recOp_14, s));
  (/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 = t_call_15);
  s.rt.logDataWrite();
  (s.pc = "1.dy");
  (/* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK = s.$now);
  s.rt.logDataWrite();
  (s.pc = "1.dB");
  (s.result = /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1);
  if (s.previous.needsPicker) {
  s.rt.displayResult("p", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$11, 'a_qDcj96avRPrOW0HP9ddHIGDX$11');

function a_qDcj96avRPrOW0HP9ddHIGDX$10(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$9;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$10, 'a_qDcj96avRPrOW0HP9ddHIGDX$10');

function a_qDcj96avRPrOW0HP9ddHIGDX$9(s) {
  return a_qDcj96avRPrOW0HP9ddHIGDX$11;
}
cs.registerStep(a_qDcj96avRPrOW0HP9ddHIGDX$9, 'a_qDcj96avRPrOW0HP9ddHIGDX$9');

/* ACTION: compute touch */
function a_uYKZvu9VJlQJWlN4YZ8bPdOY(previous, returnAddr, $dt, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uYKZvu9VJlQJWlN4YZ8bPdOY$0;
  s.name = "compute touch";
  s.$dt = $dt;
  s.$vector = $vector;
  s.$board = undefined;
  s.$dist = undefined;
  s.$r = undefined;
  s.$m = undefined;
  s.$p = undefined;
  return s;
}
cs.registerAction("compute touch", "uYKZvu9VJlQJWlN4YZ8bPdOY", a_uYKZvu9VJlQJWlN4YZ8bPdOY, false);

function a_uYKZvu9VJlQJWlN4YZ8bPdOY$0(s) {
  (s.pc = "1.k0");
  var t_call_0 = (ok1(s, /* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G) && lib.Boolean_.not(/* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G, s));
  (ok1(s, t_call_0) && lib.Contract.assert(t_call_0, "", s));
  (s.pc = "1.k3");
  var t_libcall_1 = s.libs["vIOEa4LjBL2h78vLd1Ls3U5z"]["board"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_uYKZvu9VJlQJWlN4YZ8bPdOY$1));
}
cs.registerStep(a_uYKZvu9VJlQJWlN4YZ8bPdOY$0, 'a_uYKZvu9VJlQJWlN4YZ8bPdOY$0');

function a_uYKZvu9VJlQJWlN4YZ8bPdOY$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_2);
  (s.pc = "1.k6");
  var t_call_3 = (ok1(s, s.$board) && s.$board.touch_current(s));
  var t_call_4 = (ok1(s, s.$board) && s.$board.touch_start(s));
  var t_call_5 = (ok2(s, t_call_3, t_call_4) && t_call_3.subtract(t_call_4, s));
  (s.$dist = t_call_5);
  (s.pc = "1.k9");
  var t_call_6 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_7 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_8 = (ok2(s, t_call_6, t_call_7) && lib.Math_.min(t_call_6, t_call_7, s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 * 0.3));
  (s.$r = t_infix_9);
  (s.pc = "1.kc");
  var t_call_10 = (ok1(s, s.$dist) && s.$dist.x(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.abs(t_call_10, s));
  var t_call_12 = (ok1(s, s.$dist) && s.$dist.y(s));
  var t_call_13 = (ok1(s, t_call_12) && lib.Math_.abs(t_call_12, s));
  var t_call_14 = (ok2(s, t_call_11, t_call_13) && lib.Math_.max(t_call_11, t_call_13, s));
  var t_call_15 = (ok2(s, s.$r, t_call_14) && lib.Math_.max(s.$r, t_call_14, s));
  (s.$m = t_call_15);
  (s.pc = "1.kf");
  var t_infix_16 = (ok1(s, s.$m) && (1 / s.$m));
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_17 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_keyboard factor")];
  }
  var t_infix_18 = (ok2(s, t_infix_16, t_recOp_17) && (t_infix_16 * t_recOp_17));
  var t_call_19 = (ok2(s, s.$dist, t_infix_18) && s.$dist.scale(t_infix_18, s));
  (s.$p = t_call_19);
  (s.pc = "1.ki");
  var t_infix_20 = (0 - 1);
  if (s.$vector) {
  var t_recOp_21 = s.$vector[("$x")];
  }
  var t_call_22 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_23 = (ok2(s, t_recOp_21, t_call_22) && (t_recOp_21 + t_call_22));
  var t_call_24 = (ok2(s, t_infix_20, t_infix_23) && lib.Math_.clamp(t_infix_20, 1, t_infix_23, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_24, s);
  }
  (s.pc = "1.kl");
  var t_infix_25 = (0 - 1);
  if (s.$vector) {
  var t_recOp_26 = s.$vector[("$y")];
  }
  var t_call_27 = (ok1(s, s.$p) && s.$p.y(s));
  var t_infix_28 = (ok2(s, t_recOp_26, t_call_27) && (t_recOp_26 + t_call_27));
  var t_call_29 = (ok2(s, t_infix_25, t_infix_28) && lib.Math_.clamp(t_infix_25, 1, t_infix_28, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_29, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_uYKZvu9VJlQJWlN4YZ8bPdOY$1, 'a_uYKZvu9VJlQJWlN4YZ8bPdOY$1');

/* ACTION: compute keyboard */
function a_l4qZbEXuo0rCJ9p2l2546YMX(previous, returnAddr, $seconds, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_l4qZbEXuo0rCJ9p2l2546YMX$0;
  s.name = "compute keyboard";
  s.$seconds = $seconds;
  s.$vector = $vector;
  s.$ramp = undefined;
  s.$deramp = undefined;
  s.$f = undefined;
  s.$click = undefined;
  return s;
}
cs.registerAction("compute keyboard", "l4qZbEXuo0rCJ9p2l2546YMX", a_l4qZbEXuo0rCJ9p2l2546YMX, false);

function a_l4qZbEXuo0rCJ9p2l2546YMX$0(s) {
  (s.pc = "1.p0");
  (s.$ramp = 0.4);
  (s.pc = "1.p3");
  (s.$deramp = 0.9);
  (s.pc = "1.p6");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_0 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_keyboard factor")];
  }
  (s.$f = t_recOp_0);
  var t_elseIf_1 = true;
  (s.pc = "1.p9");
  var t_call_2 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_infix_4 = (ok1(s, s.$seconds) && (s.$seconds > 0));
  (t_lazy_3 = t_infix_4);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (s.pc = "1.pd0");
  var t_call_5 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_5, s);
  }
  (s.pc = "1.pd3");
  var t_call_6 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_6, s);
  }
  (s.pc = "1.pd6");
  var t_call_7 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.z(s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_7, s);
  }
  } else {
  (s.pc = "1.pe0");
  null;
  }
  var t_elseIf_8 = true;
  (s.pc = "1.pe");
  var t_call_9 = (ok1(s, /* left key */ s.d.$VnuZVlq4It4ey9uDsKs4YbdR) && lib.Senses.is_key_pressed(/* left key */ s.d.$VnuZVlq4It4ey9uDsKs4YbdR, s));
  ok1(s, t_call_9);
  if (t_call_9) {
  (t_elseIf_8 = false);
  (s.pc = "1.pi0");
  var t_infix_10 = (0 - 1);
  if (s.$vector) {
  var t_recOp_11 = s.$vector[("$x")];
  }
  var t_infix_12 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_13 = (ok2(s, t_recOp_11, t_infix_12) && (t_recOp_11 - t_infix_12));
  var t_infix_14 = (ok2(s, t_infix_13, s.$f) && (t_infix_13 * s.$f));
  var t_call_15 = (ok2(s, t_infix_10, t_infix_14) && lib.Math_.clamp(t_infix_10, 0, t_infix_14, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_15, s);
  }
  }
  if (t_elseIf_8) {
  (s.pc = "1.pj");
  var t_call_16 = (ok1(s, /* right key */ s.d.$aTuZ6YFViE62QFkIlkkwKW12) && lib.Senses.is_key_pressed(/* right key */ s.d.$aTuZ6YFViE62QFkIlkkwKW12, s));
  ok1(s, t_call_16);
  if (t_call_16) {
  (s.pc = "1.pn0");
  if (s.$vector) {
  var t_recOp_17 = s.$vector[("$x")];
  }
  var t_infix_18 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_19 = (ok2(s, t_recOp_17, t_infix_18) && (t_recOp_17 + t_infix_18));
  var t_infix_20 = (ok2(s, t_infix_19, s.$f) && (t_infix_19 * s.$f));
  var t_call_21 = (ok1(s, t_infix_20) && lib.Math_.clamp(0, 1, t_infix_20, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_21, s);
  }
  } else {
  (s.pc = "1.po0");
  if (s.$vector) {
  var t_recOp_22 = s.$vector[("$x")];
  }
  var t_infix_23 = (ok2(s, t_recOp_22, s.$deramp) && (t_recOp_22 * s.$deramp));
  var t_infix_24 = (ok2(s, t_infix_23, s.$f) && (t_infix_23 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_infix_24, s);
  }
  var t_elseIf_25 = true;
  (s.pc = "1.po3");
  if (s.$vector) {
  var t_recOp_26 = s.$vector[("$x")];
  }
  var t_call_27 = (ok1(s, t_recOp_26) && lib.Math_.abs(t_recOp_26, s));
  var t_infix_28 = (ok1(s, t_call_27) && (t_call_27 < 0.05));
  ok1(s, t_infix_28);
  if (t_infix_28) {
  (s.pc = "1.po70");
  if (s.$vector) {
  s.$vector.perform_set("$x", 0, s);
  }
  } else {
  (s.pc = "1.po80");
  null;
  }
  }
  }
  var t_elseIf_29 = true;
  (s.pc = "1.po");
  var t_call_30 = (ok1(s, /* down key */ s.d.$TOlXyopWIthfSNmQ7K8HEulk) && lib.Senses.is_key_pressed(/* down key */ s.d.$TOlXyopWIthfSNmQ7K8HEulk, s));
  ok1(s, t_call_30);
  if (t_call_30) {
  (t_elseIf_29 = false);
  (s.pc = "1.ps0");
  if (s.$vector) {
  var t_recOp_31 = s.$vector[("$y")];
  }
  var t_infix_32 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_33 = (ok2(s, t_recOp_31, t_infix_32) && (t_recOp_31 + t_infix_32));
  var t_infix_34 = (ok2(s, t_infix_33, s.$f) && (t_infix_33 * s.$f));
  var t_call_35 = (ok1(s, t_infix_34) && lib.Math_.clamp(0, 1, t_infix_34, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_35, s);
  }
  }
  if (t_elseIf_29) {
  (s.pc = "1.pt");
  var t_call_36 = (ok1(s, /* up key */ s.d.$YkBWyq8FAIP9GNsp2XZd9aam) && lib.Senses.is_key_pressed(/* up key */ s.d.$YkBWyq8FAIP9GNsp2XZd9aam, s));
  ok1(s, t_call_36);
  if (t_call_36) {
  (s.pc = "1.px0");
  var t_infix_37 = (0 - 1);
  if (s.$vector) {
  var t_recOp_38 = s.$vector[("$y")];
  }
  var t_infix_39 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_40 = (ok2(s, t_recOp_38, t_infix_39) && (t_recOp_38 - t_infix_39));
  var t_infix_41 = (ok2(s, t_infix_40, s.$f) && (t_infix_40 * s.$f));
  var t_call_42 = (ok2(s, t_infix_37, t_infix_41) && lib.Math_.clamp(t_infix_37, 0, t_infix_41, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_42, s);
  }
  } else {
  (s.pc = "1.py0");
  if (s.$vector) {
  var t_recOp_43 = s.$vector[("$y")];
  }
  var t_infix_44 = (ok2(s, t_recOp_43, s.$deramp) && (t_recOp_43 * s.$deramp));
  var t_infix_45 = (ok2(s, t_infix_44, s.$f) && (t_infix_44 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_infix_45, s);
  }
  var t_elseIf_46 = true;
  (s.pc = "1.py3");
  if (s.$vector) {
  var t_recOp_47 = s.$vector[("$y")];
  }
  var t_call_48 = (ok1(s, t_recOp_47) && lib.Math_.abs(t_recOp_47, s));
  var t_infix_49 = (ok1(s, t_call_48) && (t_call_48 < 0.05));
  ok1(s, t_infix_49);
  if (t_infix_49) {
  (s.pc = "1.py70");
  if (s.$vector) {
  s.$vector.perform_set("$y", 0, s);
  }
  } else {
  (s.pc = "1.py80");
  null;
  }
  }
  }
  (s.pc = "1.py");
  s.t_lazy_50 = /* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G;
  if ((ok1(s, s.t_lazy_50) && s.t_lazy_50)) {
  var t_libcall_51 = s.libs["vIOEa4LjBL2h78vLd1Ls3U5z"]["board"](s);
  return s.rt.enter(t_libcall_51.invoke(t_libcall_51, a_l4qZbEXuo0rCJ9p2l2546YMX$32));
  }
  return a_l4qZbEXuo0rCJ9p2l2546YMX$31;
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$0, 'a_l4qZbEXuo0rCJ9p2l2546YMX$0');

function a_l4qZbEXuo0rCJ9p2l2546YMX$32(s) {
  var t_actRes_52 = s.rt.returnedFrom.result;
  var t_call_53 = (ok1(s, t_actRes_52) && t_actRes_52.touched(s));
  (s.t_lazy_50 = t_call_53);
  return a_l4qZbEXuo0rCJ9p2l2546YMX$31;
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$32, 'a_l4qZbEXuo0rCJ9p2l2546YMX$32');

function a_l4qZbEXuo0rCJ9p2l2546YMX$31(s) {
  (s.$click = s.t_lazy_50);
  var t_elseIf_54 = true;
  (s.pc = "1.pB");
  var t_call_55 = (ok1(s, /* button key */ s.d.$Lpz9hXJq4RUQjd5quEu4cq12) && lib.Senses.is_key_pressed(/* button key */ s.d.$Lpz9hXJq4RUQjd5quEu4cq12, s));
  var t_lazy_56 = t_call_55;
  if ((ok1(s, t_lazy_56) && (!t_lazy_56))) {
  (t_lazy_56 = s.$click);
  }
  ok1(s, t_lazy_56);
  if (t_lazy_56) {
  (s.pc = "1.pF0");
  if (s.$vector) {
  var t_recOp_57 = s.$vector[("$z")];
  }
  var t_infix_58 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_59 = (ok2(s, t_recOp_57, t_infix_58) && (t_recOp_57 + t_infix_58));
  var t_infix_60 = (ok2(s, t_infix_59, s.$f) && (t_infix_59 * s.$f));
  var t_call_61 = (ok1(s, t_infix_60) && lib.Math_.clamp(0, 1, t_infix_60, s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_61, s);
  }
  } else {
  (s.pc = "1.pG0");
  if (s.$vector) {
  var t_recOp_62 = s.$vector[("$z")];
  }
  var t_infix_63 = (ok2(s, t_recOp_62, s.$deramp) && (t_recOp_62 * s.$deramp));
  var t_infix_64 = (ok2(s, t_infix_63, s.$f) && (t_infix_63 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_infix_64, s);
  }
  var t_elseIf_65 = true;
  (s.pc = "1.pG3");
  if (s.$vector) {
  var t_recOp_66 = s.$vector[("$z")];
  }
  var t_infix_67 = (ok1(s, t_recOp_66) && (t_recOp_66 < 0.05));
  ok1(s, t_infix_67);
  if (t_infix_67) {
  (s.pc = "1.pG70");
  if (s.$vector) {
  s.$vector.perform_set("$z", 0, s);
  }
  } else {
  (s.pc = "1.pG80");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_l4qZbEXuo0rCJ9p2l2546YMX$31, 'a_l4qZbEXuo0rCJ9p2l2546YMX$31');

/* ACTION: check last current */
function a_AKyPSHgYSnMUTq5QWdoGYf4b(previous, returnAddr, $now) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_AKyPSHgYSnMUTq5QWdoGYf4b$0;
  s.name = "check last current";
  s.$now = $now;
  s.result = undefined;
  return s;
}
cs.registerAction("check last current", "AKyPSHgYSnMUTq5QWdoGYf4b", a_AKyPSHgYSnMUTq5QWdoGYf4b, false);

function a_AKyPSHgYSnMUTq5QWdoGYf4b$0(s) {
  (s.pc = "1.u0");
  (s.result = 0);
  var t_elseIf_0 = true;
  (s.pc = "1.u3");
  var t_call_1 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "1.u70");
  var t_call_2 = (ok2(s, s.$now, /* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK) && s.$now.subtract(/* _current time */ s.d.$k7HatejkjqfIA242SSMpitAK, s));
  (s.result = t_call_2);
  var t_elseIf_3 = true;
  (s.pc = "1.u73");
  var t_infix_4 = (ok1(s, s.result) && (s.result > 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "1.u770");
  var t_call_5 = lib.Invalid.vector3(s);
  (/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "1.u773");
  (s.result = 0);
  } else {
  (s.pc = "1.u780");
  null;
  }
  } else {
  (s.pc = "1.u80");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_AKyPSHgYSnMUTq5QWdoGYf4b$0, 'a_AKyPSHgYSnMUTq5QWdoGYf4b$0');

/* ACTION: compute accelerometer */
function a_NARYT4r1qcmrRmDNdAjtkOcD(previous, returnAddr, $dt, $vector) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_NARYT4r1qcmrRmDNdAjtkOcD$0;
  s.name = "compute accelerometer";
  s.$dt = $dt;
  s.$vector = $vector;
  s.$p = undefined;
  s.$x = undefined;
  return s;
}
cs.registerAction("compute accelerometer", "NARYT4r1qcmrRmDNdAjtkOcD", a_NARYT4r1qcmrRmDNdAjtkOcD, false);

function a_NARYT4r1qcmrRmDNdAjtkOcD$0(s) {
  (s.pc = "1.U0");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_NARYT4r1qcmrRmDNdAjtkOcD$1);
  var t_call_1 = lib.Senses.acceleration_quick(t_resumeCtx_0);
  return a_NARYT4r1qcmrRmDNdAjtkOcD$1;
}
cs.registerStep(a_NARYT4r1qcmrRmDNdAjtkOcD$0, 'a_NARYT4r1qcmrRmDNdAjtkOcD$0');

function a_NARYT4r1qcmrRmDNdAjtkOcD$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  (s.$p = t_pauseRes_2);
  (s.pc = "1.U3");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_3 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_accelerometer factor")];
  }
  (s.$x = t_recOp_3);
  (s.pc = "1.U6");
  var t_infix_4 = (0 - 1);
  if (s.$vector) {
  var t_recOp_5 = s.$vector[("$x")];
  }
  var t_call_6 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_7 = (ok2(s, t_call_6, s.$x) && (t_call_6 * s.$x));
  var t_infix_8 = (ok2(s, t_recOp_5, t_infix_7) && (t_recOp_5 + t_infix_7));
  var t_call_9 = (ok2(s, t_infix_4, t_infix_8) && lib.Math_.clamp(t_infix_4, 1, t_infix_8, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_9, s);
  }
  (s.pc = "1.U9");
  var t_infix_10 = (0 - 1);
  if (s.$vector) {
  var t_recOp_11 = s.$vector[("$y")];
  }
  var t_call_12 = (ok1(s, s.$p) && s.$p.y(s));
  var t_infix_13 = (ok2(s, t_call_12, s.$x) && (t_call_12 * s.$x));
  var t_infix_14 = (ok2(s, t_recOp_11, t_infix_13) && (t_recOp_11 + t_infix_13));
  var t_call_15 = (ok2(s, t_infix_10, t_infix_14) && lib.Math_.clamp(t_infix_10, 1, t_infix_14, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_15, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_NARYT4r1qcmrRmDNdAjtkOcD$1, 'a_NARYT4r1qcmrRmDNdAjtkOcD$1');


//Ent_BdGhpbmca
function Ent_BdGhpbmca(p) {
  this.parent = p;
}
Ent_BdGhpbmca.prototype = new lib.ObjectEntry();
Ent_BdGhpbmca.prototype.keys = [];
Ent_BdGhpbmca.prototype.values = ["$x", "$y", "$z"];
Ent_BdGhpbmca.prototype.fields = ["$x", "$y", "$z"];
Ent_BdGhpbmca.prototype["$x_realname"] = "x";
Ent_BdGhpbmca.prototype["$y_realname"] = "y";
Ent_BdGhpbmca.prototype["$z_realname"] = "z";
Ent_BdGhpbmca.prototype["$x"] = 0;
Ent_BdGhpbmca.prototype["$y"] = 0;
Ent_BdGhpbmca.prototype["$z"] = 0;
//Tbl_BdGhpbmca
function Tbl_BdGhpbmca(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BdGhpbmca.prototype = new lib.ObjectSingleton();
Tbl_BdGhpbmca.prototype.entryCtor = Ent_BdGhpbmca;
cs.objectSingletons["Vector"] = function(d) { return d.$BdGhpbmca };
Tbl_BdGhpbmca.prototype.selfCtor = Tbl_BdGhpbmca;
Tbl_BdGhpbmca.prototype.stableName = "BdGhpbmca";
Tbl_BdGhpbmca.prototype.entryKindName = "Vector";

// jsonimport
Ent_BdGhpbmca.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$x", ctx.importNumber(json, "x"), s);
  this.perform_set("$y", ctx.importNumber(json, "y"), s);
  this.perform_set("$z", ctx.importNumber(json, "z"), s);
}
cs.registerGlobal("$BdGhpbmca");
/* ACTION: initialize */
function a_O5jlHid249RIgTQx4Il4dMsQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_O5jlHid249RIgTQx4Il4dMsQ$0;
  s.name = "initialize";
  return s;
}
cs.registerAction("initialize", "O5jlHid249RIgTQx4Il4dMsQ", a_O5jlHid249RIgTQx4Il4dMsQ, false);

function a_O5jlHid249RIgTQx4Il4dMsQ$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "1.77.0");
  var t_call_1 = (ok1(s, /* left key */ s.d.$VnuZVlq4It4ey9uDsKs4YbdR) && lib.String_.is_empty(/* left key */ s.d.$VnuZVlq4It4ey9uDsKs4YbdR, s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "1.77.40");
  (/* left key */ s.d.$VnuZVlq4It4ey9uDsKs4YbdR = "left");
  s.rt.logDataWrite();
  (s.pc = "1.77.43");
  (/* right key */ s.d.$aTuZ6YFViE62QFkIlkkwKW12 = "right");
  s.rt.logDataWrite();
  (s.pc = "1.77.46");
  (/* up key */ s.d.$YkBWyq8FAIP9GNsp2XZd9aam = "up");
  s.rt.logDataWrite();
  (s.pc = "1.77.49");
  (/* down key */ s.d.$TOlXyopWIthfSNmQ7K8HEulk = "down");
  s.rt.logDataWrite();
  (s.pc = "1.77.4c");
  (/* button key */ s.d.$Lpz9hXJq4RUQjd5quEu4cq12 = "space");
  s.rt.logDataWrite();
  (s.pc = "1.77.4f");
  var t_call_2 = lib.Senses.has_accelerometer(s);
  (/* _accelerometer */ s.d.$zKu4ADE6HhE7UI5GvT3xWZ2G = t_call_2);
  s.rt.logDataWrite();
  (s.pc = "1.77.4i");
  var t_call_3 = (ok1(s, /* Settings */ s.d.$EBTBDXQl4wWAeztoI6v6uXr7) && /* Settings */ s.d.$EBTBDXQl4wWAeztoI6v6uXr7.create(s));
  s.rt.markAllocated(t_call_3);
  (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ = t_call_3);
  s.rt.logDataWrite();
  (s.pc = "1.77.4l");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_accelerometer factor", 2.5, s);
  }
  (s.pc = "1.77.4o");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_keyboard factor", 1, s);
  }
  (s.pc = "1.77.4r");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_touch factor", 1, s);
  }
  (s.pc = "1.77.4u");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ.perform_set("$_gamepad factor", 1, s);
  }
  } else {
  (s.pc = "1.77.50");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_O5jlHid249RIgTQx4Il4dMsQ$0, 'a_O5jlHid249RIgTQx4Il4dMsQ$0');


//Ent_EBTBDXQl4wWAeztoI6v6uXr7
function Ent_EBTBDXQl4wWAeztoI6v6uXr7(p) {
  this.parent = p;
}
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype = new lib.ObjectEntry();
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.keys = [];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.values = ["$_accelerometer factor", "$_keyboard factor", "$_touch factor", "$_gamepad factor"];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.fields = ["$_accelerometer factor", "$_keyboard factor", "$_touch factor", "$_gamepad factor"];
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer factor_realname"] = "_accelerometer factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_keyboard factor_realname"] = "_keyboard factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_touch factor_realname"] = "_touch factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_gamepad factor_realname"] = "_gamepad factor";
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_accelerometer factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_keyboard factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_touch factor"] = 0;
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype["$_gamepad factor"] = 0;
//Tbl_EBTBDXQl4wWAeztoI6v6uXr7
function Tbl_EBTBDXQl4wWAeztoI6v6uXr7(l) {
  this.libName = l;
  this.initParent();
}
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype = new lib.ObjectSingleton();
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.entryCtor = Ent_EBTBDXQl4wWAeztoI6v6uXr7;
cs.objectSingletons["Settings"] = function(d) { return d.$EBTBDXQl4wWAeztoI6v6uXr7 };
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.selfCtor = Tbl_EBTBDXQl4wWAeztoI6v6uXr7;
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.stableName = "EBTBDXQl4wWAeztoI6v6uXr7";
Tbl_EBTBDXQl4wWAeztoI6v6uXr7.prototype.entryKindName = "Settings";

// jsonimport
Ent_EBTBDXQl4wWAeztoI6v6uXr7.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$_accelerometer factor", ctx.importNumber(json, "_accelerometer factor"), s);
  this.perform_set("$_keyboard factor", ctx.importNumber(json, "_keyboard factor"), s);
  this.perform_set("$_touch factor", ctx.importNumber(json, "_touch factor"), s);
  this.perform_set("$_gamepad factor", ctx.importNumber(json, "_gamepad factor"), s);
}
cs.registerGlobal("$EBTBDXQl4wWAeztoI6v6uXr7");
/* ACTION: compute gamepad */
function a_qDlKG3i3k2K4V8WDC0PeMN11(previous, returnAddr, $seconds, $vector, $gp) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qDlKG3i3k2K4V8WDC0PeMN11$0;
  s.name = "compute gamepad";
  s.$seconds = $seconds;
  s.$vector = $vector;
  s.$gp = $gp;
  s.$ramp = undefined;
  s.$deramp = undefined;
  s.$f = undefined;
  s.$p = undefined;
  return s;
}
cs.registerAction("compute gamepad", "qDlKG3i3k2K4V8WDC0PeMN11", a_qDlKG3i3k2K4V8WDC0PeMN11, false);

function a_qDlKG3i3k2K4V8WDC0PeMN11$0(s) {
  (s.pc = "1.119.0");
  (s.$ramp = 0.4);
  (s.pc = "1.119.3");
  (s.$deramp = 0.9);
  (s.pc = "1.119.6");
  if (/* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ) {
  var t_recOp_0 = /* _settings */ s.d.$wzrHF0ZiaaIPCBlykVeDL7ZQ[("$_keyboard factor")];
  }
  (s.$f = t_recOp_0);
  var t_elseIf_1 = true;
  (s.pc = "1.119.9");
  var t_call_2 = lib.Boolean_.not((/* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1 == undefined), s);
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_infix_4 = (ok1(s, s.$seconds) && (s.$seconds > 0));
  (t_lazy_3 = t_infix_4);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (s.pc = "1.119.d0");
  var t_call_5 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_5, s);
  }
  (s.pc = "1.119.d3");
  var t_call_6 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_6, s);
  }
  (s.pc = "1.119.d6");
  var t_call_7 = (ok1(s, /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1) && /* _current */ s.d.$LJp5GBFLELwUrK3r6yVHOfL1.z(s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_7, s);
  }
  } else {
  (s.pc = "1.119.e0");
  null;
  }
  (s.pc = "1.119.f");
  var t_call_8 = (ok1(s, s.$gp) && s.$gp.axes("left stick", s));
  (s.$p = t_call_8);
  var t_elseIf_9 = true;
  (s.pc = "1.119.i");
  var t_call_10 = (ok1(s, s.$p) && s.$p.x(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.abs(t_call_10, s));
  var t_infix_12 = (ok1(s, t_call_11) && (t_call_11 > 0.07));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (t_elseIf_9 = false);
  (s.pc = "1.119.m0");
  var t_call_13 = (ok1(s, s.$p) && s.$p.x(s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_13, s);
  }
  }
  if (t_elseIf_9) {
  (s.pc = "1.119.n");
  var t_call_14 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("left", s));
  ok1(s, t_call_14);
  if (t_call_14) {
  (t_elseIf_9 = false);
  (s.pc = "1.119.r0");
  var t_infix_15 = (0 - 1);
  if (s.$vector) {
  var t_recOp_16 = s.$vector[("$x")];
  }
  var t_infix_17 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_18 = (ok2(s, t_recOp_16, t_infix_17) && (t_recOp_16 - t_infix_17));
  var t_infix_19 = (ok2(s, t_infix_18, s.$f) && (t_infix_18 * s.$f));
  var t_call_20 = (ok2(s, t_infix_15, t_infix_19) && lib.Math_.clamp(t_infix_15, 0, t_infix_19, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_20, s);
  }
  }
  }
  if (t_elseIf_9) {
  (s.pc = "1.119.s");
  var t_call_21 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("right", s));
  ok1(s, t_call_21);
  if (t_call_21) {
  (s.pc = "1.119.w0");
  if (s.$vector) {
  var t_recOp_22 = s.$vector[("$x")];
  }
  var t_infix_23 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_24 = (ok2(s, t_recOp_22, t_infix_23) && (t_recOp_22 + t_infix_23));
  var t_infix_25 = (ok2(s, t_infix_24, s.$f) && (t_infix_24 * s.$f));
  var t_call_26 = (ok1(s, t_infix_25) && lib.Math_.clamp(0, 1, t_infix_25, s));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_call_26, s);
  }
  } else {
  (s.pc = "1.119.x0");
  if (s.$vector) {
  var t_recOp_27 = s.$vector[("$x")];
  }
  var t_infix_28 = (ok2(s, t_recOp_27, s.$deramp) && (t_recOp_27 * s.$deramp));
  var t_infix_29 = (ok2(s, t_infix_28, s.$f) && (t_infix_28 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$x", t_infix_29, s);
  }
  var t_elseIf_30 = true;
  (s.pc = "1.119.x3");
  if (s.$vector) {
  var t_recOp_31 = s.$vector[("$x")];
  }
  var t_call_32 = (ok1(s, t_recOp_31) && lib.Math_.abs(t_recOp_31, s));
  var t_infix_33 = (ok1(s, t_call_32) && (t_call_32 < 0.05));
  ok1(s, t_infix_33);
  if (t_infix_33) {
  (s.pc = "1.119.x70");
  if (s.$vector) {
  s.$vector.perform_set("$x", 0, s);
  }
  } else {
  (s.pc = "1.119.x80");
  null;
  }
  }
  }
  var t_elseIf_34 = true;
  (s.pc = "1.119.x");
  var t_call_35 = (ok1(s, s.$p) && s.$p.y(s));
  var t_call_36 = (ok1(s, t_call_35) && lib.Math_.abs(t_call_35, s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 > 0.07));
  ok1(s, t_infix_37);
  if (t_infix_37) {
  (t_elseIf_34 = false);
  (s.pc = "1.119.B0");
  var t_call_38 = (ok1(s, s.$p) && s.$p.y(s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_38, s);
  }
  }
  if (t_elseIf_34) {
  (s.pc = "1.119.C");
  var t_call_39 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("down", s));
  ok1(s, t_call_39);
  if (t_call_39) {
  (t_elseIf_34 = false);
  (s.pc = "1.119.G0");
  if (s.$vector) {
  var t_recOp_40 = s.$vector[("$y")];
  }
  var t_infix_41 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_42 = (ok2(s, t_recOp_40, t_infix_41) && (t_recOp_40 + t_infix_41));
  var t_infix_43 = (ok2(s, t_infix_42, s.$f) && (t_infix_42 * s.$f));
  var t_call_44 = (ok1(s, t_infix_43) && lib.Math_.clamp(0, 1, t_infix_43, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_44, s);
  }
  }
  }
  if (t_elseIf_34) {
  (s.pc = "1.119.H");
  var t_call_45 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("up", s));
  ok1(s, t_call_45);
  if (t_call_45) {
  (s.pc = "1.119.L0");
  var t_infix_46 = (0 - 1);
  if (s.$vector) {
  var t_recOp_47 = s.$vector[("$y")];
  }
  var t_infix_48 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_49 = (ok2(s, t_recOp_47, t_infix_48) && (t_recOp_47 - t_infix_48));
  var t_infix_50 = (ok2(s, t_infix_49, s.$f) && (t_infix_49 * s.$f));
  var t_call_51 = (ok2(s, t_infix_46, t_infix_50) && lib.Math_.clamp(t_infix_46, 0, t_infix_50, s));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_call_51, s);
  }
  } else {
  (s.pc = "1.119.M0");
  if (s.$vector) {
  var t_recOp_52 = s.$vector[("$y")];
  }
  var t_infix_53 = (ok2(s, t_recOp_52, s.$deramp) && (t_recOp_52 * s.$deramp));
  var t_infix_54 = (ok2(s, t_infix_53, s.$f) && (t_infix_53 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$y", t_infix_54, s);
  }
  var t_elseIf_55 = true;
  (s.pc = "1.119.M3");
  if (s.$vector) {
  var t_recOp_56 = s.$vector[("$y")];
  }
  var t_call_57 = (ok1(s, t_recOp_56) && lib.Math_.abs(t_recOp_56, s));
  var t_infix_58 = (ok1(s, t_call_57) && (t_call_57 < 0.05));
  ok1(s, t_infix_58);
  if (t_infix_58) {
  (s.pc = "1.119.M70");
  if (s.$vector) {
  s.$vector.perform_set("$y", 0, s);
  }
  } else {
  (s.pc = "1.119.M80");
  null;
  }
  }
  }
  var t_elseIf_59 = true;
  (s.pc = "1.119.M");
  var t_call_60 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("x", s));
  var t_lazy_61 = t_call_60;
  if ((ok1(s, t_lazy_61) && (!t_lazy_61))) {
  var t_call_62 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("a", s));
  (t_lazy_61 = t_call_62);
  }
  var t_lazy_63 = t_lazy_61;
  if ((ok1(s, t_lazy_63) && (!t_lazy_63))) {
  var t_call_64 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("left trigger", s));
  (t_lazy_63 = t_call_64);
  }
  var t_lazy_65 = t_lazy_63;
  if ((ok1(s, t_lazy_65) && (!t_lazy_65))) {
  var t_call_66 = (ok1(s, s.$gp) && s.$gp.is_button_pressed("right trigger", s));
  (t_lazy_65 = t_call_66);
  }
  ok1(s, t_lazy_65);
  if (t_lazy_65) {
  (s.pc = "1.119.Q0");
  if (s.$vector) {
  var t_recOp_67 = s.$vector[("$z")];
  }
  var t_infix_68 = (ok2(s, s.$seconds, s.$ramp) && (s.$seconds / s.$ramp));
  var t_infix_69 = (ok2(s, t_recOp_67, t_infix_68) && (t_recOp_67 + t_infix_68));
  var t_infix_70 = (ok2(s, t_infix_69, s.$f) && (t_infix_69 * s.$f));
  var t_call_71 = (ok1(s, t_infix_70) && lib.Math_.clamp(0, 1, t_infix_70, s));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_call_71, s);
  }
  } else {
  (s.pc = "1.119.R0");
  if (s.$vector) {
  var t_recOp_72 = s.$vector[("$z")];
  }
  var t_infix_73 = (ok2(s, t_recOp_72, s.$deramp) && (t_recOp_72 * s.$deramp));
  var t_infix_74 = (ok2(s, t_infix_73, s.$f) && (t_infix_73 * s.$f));
  if (s.$vector) {
  s.$vector.perform_set("$z", t_infix_74, s);
  }
  var t_elseIf_75 = true;
  (s.pc = "1.119.R3");
  if (s.$vector) {
  var t_recOp_76 = s.$vector[("$z")];
  }
  var t_infix_77 = (ok1(s, t_recOp_76) && (t_recOp_76 < 0.05));
  ok1(s, t_infix_77);
  if (t_infix_77) {
  (s.pc = "1.119.R70");
  if (s.$vector) {
  s.$vector.perform_set("$z", 0, s);
  }
  } else {
  (s.pc = "1.119.R80");
  null;
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_qDlKG3i3k2K4V8WDC0PeMN11$0, 'a_qDlKG3i3k2K4V8WDC0PeMN11$0');

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
  if(!d.hasOwnProperty("$k7HatejkjqfIA242SSMpitAK")) d.$k7HatejkjqfIA242SSMpitAK = lib.DateTime.defaultValue;
  if(!d.hasOwnProperty("$VnuZVlq4It4ey9uDsKs4YbdR")) d.$VnuZVlq4It4ey9uDsKs4YbdR = "";
  if(!d.hasOwnProperty("$aTuZ6YFViE62QFkIlkkwKW12")) d.$aTuZ6YFViE62QFkIlkkwKW12 = "";
  if(!d.hasOwnProperty("$YkBWyq8FAIP9GNsp2XZd9aam")) d.$YkBWyq8FAIP9GNsp2XZd9aam = "";
  if(!d.hasOwnProperty("$TOlXyopWIthfSNmQ7K8HEulk")) d.$TOlXyopWIthfSNmQ7K8HEulk = "";
  if(!d.hasOwnProperty("$Lpz9hXJq4RUQjd5quEu4cq12")) d.$Lpz9hXJq4RUQjd5quEu4cq12 = "";
  if(!d.hasOwnProperty("$zKu4ADE6HhE7UI5GvT3xWZ2G")) d.$zKu4ADE6HhE7UI5GvT3xWZ2G = false;
  if(!d.hasOwnProperty("$BdGhpbmca") || !d["$BdGhpbmca"]) d.$BdGhpbmca = new Tbl_BdGhpbmca(d.libName);
  if(!d.hasOwnProperty("$EBTBDXQl4wWAeztoI6v6uXr7") || !d["$EBTBDXQl4wWAeztoI6v6uXr7"]) d.$EBTBDXQl4wWAeztoI6v6uXr7 = new Tbl_EBTBDXQl4wWAeztoI6v6uXr7(d.libName);

};

cs._initGlobals2 = function(d) {
d.$BdGhpbmca.name = "Vector";d.$EBTBDXQl4wWAeztoI6v6uXr7.name = "Settings";};

cs._resetGlobals = function(d) {
  d.$LJp5GBFLELwUrK3r6yVHOfL1 = undefined;
  d.$k7HatejkjqfIA242SSMpitAK = lib.DateTime.defaultValue;
  d.$VnuZVlq4It4ey9uDsKs4YbdR = "";
  d.$aTuZ6YFViE62QFkIlkkwKW12 = "";
  d.$YkBWyq8FAIP9GNsp2XZd9aam = "";
  d.$TOlXyopWIthfSNmQ7K8HEulk = "";
  d.$Lpz9hXJq4RUQjd5quEu4cq12 = "";
  d.$zKu4ADE6HhE7UI5GvT3xWZ2G = false;
  d.$BdGhpbmca = undefined;
  d.$EBTBDXQl4wWAeztoI6v6uXr7 = undefined;
  d.$wzrHF0ZiaaIPCBlykVeDL7ZQ = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "current";
cs.authorId = "unknown";
cs.scriptId = "lopp";
cs.scriptGuid = "aaaf0ae6-2fa4-4b12-982c-86346866b8c9";
}),

// **************************************************************
"xqf21a4nsexaKORh5KxXhn3C": (function (cs) {
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
  (s.pc = "2.61");
  var t_call_0 = lib.Wall.width(s);
  var t_call_1 = lib.Wall.height(s);
  var t_infix_2 = (ok2(s, t_call_0, t_call_1) && (t_call_0 / t_call_1));
  (s.$ratio = t_infix_2);
  var t_elseIf_3 = true;
  (s.pc = "2.64");
  var t_infix_4 = (ok1(s, s.$width) && (s.$width < 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$height) && (s.$height < 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  var t_elseIf_7 = true;
  (s.pc = "2.680");
  var t_infix_8 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "2.6840");
  var t_infix_9 = (ok1(s, s.$ratio) && (800 * s.$ratio));
  (s.$width = t_infix_9);
  (s.pc = "2.6843");
  (s.$height = 800);
  } else {
  (s.pc = "2.6850");
  (s.$width = 800);
  (s.pc = "2.6853");
  var t_infix_10 = (ok1(s, s.$ratio) && (800 / s.$ratio));
  (s.$height = t_infix_10);
  }
  } else {
  (s.pc = "2.690");
  null;
  }
  var t_elseIf_11 = true;
  (s.pc = "2.69");
  var t_infix_12 = (ok2(s, s.$width, s.$height) && (s.$width < s.$height));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  var t_elseIf_13 = true;
  (s.pc = "2.6d0");
  var t_infix_14 = (ok1(s, s.$width) && (s.$width < 0));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  var t_elseIf_15 = true;
  (s.pc = "2.6d40");
  var t_infix_16 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (s.pc = "2.6d440");
  var t_infix_17 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_17);
  } else {
  (s.pc = "2.6d450");
  null;
  }
  (s.pc = "2.6d45");
  var t_infix_18 = (ok2(s, s.$height, s.$ratio) && (s.$height * s.$ratio));
  (s.$width = t_infix_18);
  } else {
  (s.pc = "2.6d50");
  null;
  }
  (s.pc = "2.6d5");
  var t_call_19 = (ok2(s, s.$width, s.$height) && lib.Media.create_portrait_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_19);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_19);
  s.rt.logDataWrite();
  } else {
  var t_elseIf_20 = true;
  (s.pc = "2.6e0");
  var t_infix_21 = (ok1(s, s.$height) && (s.$height < 0));
  ok1(s, t_infix_21);
  if (t_infix_21) {
  var t_elseIf_22 = true;
  (s.pc = "2.6e40");
  var t_infix_23 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_23);
  if (t_infix_23) {
  (s.pc = "2.6e440");
  var t_infix_24 = (ok1(s, s.$ratio) && (1 / s.$ratio));
  (s.$ratio = t_infix_24);
  } else {
  (s.pc = "2.6e450");
  null;
  }
  (s.pc = "2.6e45");
  var t_infix_25 = (ok2(s, s.$width, s.$ratio) && (s.$width / s.$ratio));
  (s.$height = t_infix_25);
  } else {
  (s.pc = "2.6e50");
  null;
  }
  (s.pc = "2.6e5");
  var t_call_26 = (ok2(s, s.$width, s.$height) && lib.Media.create_landscape_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_26);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_26);
  s.rt.logDataWrite();
  }
  (s.pc = "2.6e");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = 0);
  s.rt.logDataWrite();
  (s.pc = "2.6h");
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = 1);
  s.rt.logDataWrite();
  (s.pc = "2.6k");
  var t_call_27 = lib.Invalid.datetime(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_27);
  s.rt.logDataWrite();
  (s.pc = "2.6n");
  var t_call_28 = lib.Invalid.sprite(s);
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_call_28);
  s.rt.logDataWrite();
  (s.pc = "2.6q");
  var t_call_29 = lib.Invalid.sprite(s);
  (/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl = t_call_29);
  s.rt.logDataWrite();
  (s.pc = "2.6t");
  var t_call_30 = lib.Invalid.sprite(s);
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_call_30);
  s.rt.logDataWrite();
  (s.pc = "2.6w");
  var t_infix_31 = (0 - 1);
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = t_infix_31);
  s.rt.logDataWrite();
  (s.pc = "2.6z");
  var t_call_32 = lib.String_.split(" \u003b\u003b\u003b", "\u003b", s);
  s.rt.markAllocated(t_call_32);
  (/* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m = t_call_32);
  s.rt.logDataWrite();
  (s.pc = "2.6C");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$9));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$0, 'a_Ayu95FKZqA9xPdjQXSANLGvP$0');

function a_Ayu95FKZqA9xPdjQXSANLGvP$9(s) {
  var t_actRes_33 = s.rt.returnedFrom.result;
  (/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl = t_actRes_33);
  s.rt.logDataWrite();
  (s.pc = "2.6F");
  var t_call_34 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 * 0.5));
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, t_infix_35) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_pos(t_infix_35, 20, s));
  (s.pc = "2.6I");
  var t_call_36 = lib.Colors.orange(s);
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, t_call_36) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_color(t_call_36, s));
  (s.pc = "2.6L");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$10));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$9, 'a_Ayu95FKZqA9xPdjQXSANLGvP$9');

function a_Ayu95FKZqA9xPdjQXSANLGvP$10(s) {
  var t_actRes_37 = s.rt.returnedFrom.result;
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_actRes_37);
  s.rt.logDataWrite();
  (s.pc = "2.6O");
  var t_call_38 = lib.Colors.red(s);
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, t_call_38) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(t_call_38, s));
  (s.pc = "2.6R");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_pos(84, 20, s));
  (s.pc = "2.6U");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_Ayu95FKZqA9xPdjQXSANLGvP$11));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$10, 'a_Ayu95FKZqA9xPdjQXSANLGvP$10');

function a_Ayu95FKZqA9xPdjQXSANLGvP$11(s) {
  var t_actRes_39 = s.rt.returnedFrom.result;
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_actRes_39);
  s.rt.logDataWrite();
  (s.pc = "2.6X");
  var t_call_40 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_41 = (ok1(s, t_call_40) && (t_call_40 / 2));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_infix_41) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_pos(t_infix_41, 20, s));
  var t_elseIf_42 = true;
  (s.pc = "2.6.62.");
  var t_call_43 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_44 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_45 = (ok2(s, t_call_43, t_call_44) && (t_call_43 < t_call_44));
  ok1(s, t_infix_45);
  if (t_infix_45) {
  (s.pc = "2.6.66.0");
  var t_call_46 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 / 10.5));
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, t_infix_47) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_y(t_infix_47, s));
  (s.pc = "2.6.66.3");
  var t_call_48 = (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.y(s));
  (s.$y = t_call_48);
  (s.pc = "2.6.66.6");
  var t_call_49 = (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.y(s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_49) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_y(t_call_49, s));
  (s.pc = "2.6.66.9");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$y) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_y(s.$y, s));
  (s.pc = "2.6.66.c");
  var t_call_50 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_51 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_52 = (ok1(s, t_call_51) && (t_call_51 * 0.5));
  var t_infix_53 = (ok2(s, t_call_50, t_infix_52) && (t_call_50 - t_infix_52));
  var t_call_54 = (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.width(s));
  var t_infix_55 = (ok1(s, t_call_54) && (t_call_54 * 0.5));
  var t_infix_56 = (ok2(s, t_infix_53, t_infix_55) && (t_infix_53 - t_infix_55));
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, t_infix_56) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_x(t_infix_56, s));
  (s.pc = "2.6.66.f");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_x(64, s));
  } else {
  (s.pc = "2.6.67.0");
  null;
  }
  (s.pc = "2.6.67.");
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_Ayu95FKZqA9xPdjQXSANLGvP$13, 0));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$11, 'a_Ayu95FKZqA9xPdjQXSANLGvP$11');

function a_Ayu95FKZqA9xPdjQXSANLGvP$13(s) {
  (s.pc = "2.6.70.");
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_Ayu95FKZqA9xPdjQXSANLGvP$14, 1));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$13, 'a_Ayu95FKZqA9xPdjQXSANLGvP$13');

function a_Ayu95FKZqA9xPdjQXSANLGvP$14(s) {
  var t_actRes_57 = s.rt.returnedFrom.result;
  t_actRes_57;
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
  (s.pc = "2.c1");
  var t_call_0 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_1 = (ok1(s, t_call_0) && lib.Number_.to_string(t_call_0, s));
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, t_call_1) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_text(t_call_1, s));
  (s.pc = "2.c4");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = s.$value);
  s.rt.logDataWrite();
  var t_elseIf_2 = true;
  (s.pc = "2.c7");
  var t_infix_3 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m < 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.cb0");
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.hide(s));
  } else {
  (s.pc = "2.cc0");
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.show(s));
  (s.pc = "2.cc3");
  var t_call_4 = (ok1(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.create_animation(s));
  (s.$anim = t_call_4);
  (s.pc = "2.cc6");
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
  (s.pc = "2.h1");
  var t_call_0 = (ok1(s, s.$value) && lib.Math_.max(0, s.$value, s));
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = t_call_0);
  s.rt.logDataWrite();
  var t_elseIf_1 = true;
  (s.pc = "2.h4");
  var t_infix_2 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV <= 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "2.h80");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_l4svuo4DZFDcDqJbGklzHLTi$2));
  } else {
  (s.pc = "2.h90");
  null;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$1;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$4, 'a_l4svuo4DZFDcDqJbGklzHLTi$4');

function a_l4svuo4DZFDcDqJbGklzHLTi$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "2.h83");
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

/* ACTION: start timer */
function a_xR8UEUDLaI6qbCw4GQtfFiwQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xR8UEUDLaI6qbCw4GQtfFiwQ$0;
  s.name = "start timer";
  return s;
}
cs.registerAction("start timer", "xR8UEUDLaI6qbCw4GQtfFiwQ", a_xR8UEUDLaI6qbCw4GQtfFiwQ, false);

function a_xR8UEUDLaI6qbCw4GQtfFiwQ$0(s) {
  (s.pc = "2.m1");
  var t_call_0 = lib.Time.now(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "2.m4");
  var t_infix_1 = (0 - 1);
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = t_infix_1);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xR8UEUDLaI6qbCw4GQtfFiwQ$0, 'a_xR8UEUDLaI6qbCw4GQtfFiwQ$0');

/* ACTION: score */
function a_xleVEbMbZTbU7BJfeUMUPpMk(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xleVEbMbZTbU7BJfeUMUPpMk$0;
  s.name = "score";
  s.result = undefined;
  return s;
}
cs.registerAction("score", "xleVEbMbZTbU7BJfeUMUPpMk", a_xleVEbMbZTbU7BJfeUMUPpMk, false);

function a_xleVEbMbZTbU7BJfeUMUPpMk$0(s) {
  (s.pc = "2.D1");
  (s.result = /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m);
  if (s.previous.needsPicker) {
  s.rt.displayResult("r", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_xleVEbMbZTbU7BJfeUMUPpMk$0, 'a_xleVEbMbZTbU7BJfeUMUPpMk$0');

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
  (s.pc = "2.J0");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "2.J40");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.evolve(s));
  var t_elseIf_2 = true;
  (s.pc = "2.J43");
  var t_infix_3 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV >= 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.J470");
  return s.rt.enter(a_XjXM7AL67NDGlzsZgg9s44uq(s, a_gswamj84uYSwqLED2VvLdKi6$3));
  } else {
  (s.pc = "2.J480");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
  } else {
  (s.pc = "2.J50");
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
  (s.pc = "2.J48");
  var t_call_5 = lib.Boolean_.not((/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY == undefined), s);
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "2.J4c0");
  return s.rt.enter(a_PojbQsm32lz5k054APQR8Jb1(s, a_gswamj84uYSwqLED2VvLdKi6$5));
  } else {
  (s.pc = "2.J4d0");
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
  (s.pc = "2.P0");
  var t_call_0 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(100, 20, 28, "", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "2.P3");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_z_index(1000, s));
  (s.pc = "2.P6");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_friction(1, s));
  (s.pc = "2.P9");
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
  (s.pc = "2.U0");
  var t_call_0 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && lib.Math_.ceiling(/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s));
  (s.$l = t_call_0);
  (s.pc = "2.U3");
  var t_call_1 = (ok1(s, s.$l) && lib.Number_.to_string(s.$l, s));
  var t_concat_2 = lib.String_.concatAny("\u2764 ", t_call_1);
  (s.$s = t_concat_2);
  var t_elseIf_3 = true;
  (s.pc = "2.U6");
  var t_call_4 = (ok1(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.count(s));
  var t_infix_5 = (ok2(s, s.$l, t_call_4) && (s.$l < t_call_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "2.Ua0");
  var t_call_6 = (ok2(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m, s.$l) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.at(s.$l, s));
  (s.$s = t_call_6);
  } else {
  (s.pc = "2.Ub0");
  null;
  }
  (s.pc = "2.Ub");
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
  (s.pc = "2.Z0");
  return s.rt.enter(a_q4EB482ElguyYpuPEwTgQQ4e(s, a_PojbQsm32lz5k054APQR8Jb1$1));
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$0, 'a_PojbQsm32lz5k054APQR8Jb1$0');

function a_PojbQsm32lz5k054APQR8Jb1$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$elapsed = t_actRes_0);
  (s.pc = "2.Z3");
  var t_call_1 = (ok1(s, s.$elapsed) && lib.Math_.round_with_precision(s.$elapsed, 1, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Number_.to_string(t_call_1, s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_2) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_text(t_call_2, s));
  var t_elseIf_3 = true;
  (s.pc = "2.Z6");
  var t_infix_4 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  var t_lazy_5 = t_infix_4;
  if ((ok1(s, t_lazy_5) && t_lazy_5)) {
  var t_infix_6 = (ok1(s, s.$elapsed) && (s.$elapsed === 0));
  (t_lazy_5 = t_infix_6);
  }
  ok1(s, t_lazy_5);
  if (t_lazy_5) {
  (s.pc = "2.Za0");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_PojbQsm32lz5k054APQR8Jb1$4));
  } else {
  (s.pc = "2.Zb0");
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
  (s.pc = "2.74.1");
  var t_call_0 = lib.Time.now(s);
  var t_call_1 = (ok2(s, t_call_0, /* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY) && t_call_0.subtract(/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY, s));
  (s.result = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "2.74.4");
  var t_infix_3 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.74.80");
  var t_infix_4 = (ok2(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY, s.result) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY - s.result));
  var t_call_5 = (ok1(s, t_infix_4) && lib.Math_.max(0, t_infix_4, s));
  (s.result = t_call_5);
  } else {
  (s.pc = "2.74.90");
  null;
  }
  if (s.previous.needsPicker) {
  s.rt.displayResult("seconds", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_q4EB482ElguyYpuPEwTgQQ4e$0, 'a_q4EB482ElguyYpuPEwTgQQ4e$0');

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
  (s.pc = "2.100.1");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  var t_elseIf_2 = true;
  (s.pc = "2.100.50");
  var t_call_3 = lib.Boolean_.not((/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju == undefined), s);
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "2.100.540");
  return s.rt.enter((ok1(s, /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju) && /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju(s, a_a14qLDjp7EtajVvdEd1rS18X$3)));
  } else {
  var t_elseIf_4 = true;
  (s.pc = "2.100.550");
  var t_infix_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "2.100.5540");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_6 = s.rt.getAwaitResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$6);
  (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Bazaar.post_leaderboard_score(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, t_resumeCtx_6));
  return a_a14qLDjp7EtajVvdEd1rS18X$6;
  } else {
  (s.pc = "2.100.5550");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
  } else {
  (s.pc = "2.100.60");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$1;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$0, 'a_a14qLDjp7EtajVvdEd1rS18X$0');

function a_a14qLDjp7EtajVvdEd1rS18X$3(s) {
  (s.pc = "2.100.543");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$4));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$3, 'a_a14qLDjp7EtajVvdEd1rS18X$3');

function a_a14qLDjp7EtajVvdEd1rS18X$6(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$6, 'a_a14qLDjp7EtajVvdEd1rS18X$6');

function a_a14qLDjp7EtajVvdEd1rS18X$5(s) {
  (s.pc = "2.100.555");
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
  (s.pc = "2.100.558");
  var t_infix_9 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "2.100.55c0");
  lib.Wall.clear(s);
  (s.pc = "2.100.55c3");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$9);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_10);
  return a_a14qLDjp7EtajVvdEd1rS18X$9;
  } else {
  (s.pc = "2.100.55d0");
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
  (s.pc = "2.100.55d");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$10));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$8, 'a_a14qLDjp7EtajVvdEd1rS18X$8');

function a_a14qLDjp7EtajVvdEd1rS18X$10(s) {
  (s.pc = "2.100.55g");
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
  (s.pc = "2.105.1");
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
  (s.pc = "2.110.0");
  (s.$message = "");
  (s.pc = "2.110.3");
  var t_call_0 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(230, 43, 43, s.$message, s));
  s.rt.markAllocated(t_call_0);
  (s.$text = t_call_0);
  (s.pc = "2.110.6");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.set_opacity(0, s));
  (s.pc = "2.110.9");
  var t_infix_1 = (720 / 5);
  s.t_bnd_2 = t_infix_1;
  (s.$i = 0);
  return a_joFUGC04wxnpsBuC02e32Cvy$1;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$0, 'a_joFUGC04wxnpsBuC02e32Cvy$0');

function a_joFUGC04wxnpsBuC02e32Cvy$1(s) {
  if ((s.$i < s.t_bnd_2)) {
  (s.pc = "2.110.d0");
  var t_call_3 = (ok1(s, s.$text) && s.$text.opacity(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 + 0.05));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_4) && s.$text.set_opacity(t_infix_4, s));
  (s.pc = "2.110.d3");
  var t_call_5 = lib.Colors.white(s);
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_5) && s.$text.set_color(t_call_5, s));
  (s.pc = "2.110.d6");
  var t_call_6 = (ok1(s, s.$text) && s.$text.angle(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 + 5));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_7) && s.$text.set_angle(t_infix_7, s));
  (s.pc = "2.110.d9");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  (s.pc = "2.110.dc");
  var t_resumeCtx_8 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$3);
  lib.Time.sleep(0.02, t_resumeCtx_8);
  return a_joFUGC04wxnpsBuC02e32Cvy$3;
  }
  (s.pc = "2.110.d");
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
  (s.pc = "2.110.g");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.delete_(s));
  (s.pc = "2.110.j");
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
  (s.pc = "2.115.1");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_Kv3t1TJgZdpYJpx9reGXtTW2$1));
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$0, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$0');

function a_Kv3t1TJgZdpYJpx9reGXtTW2$1(s) {
  (s.pc = "2.115.4");
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
  (s.pc = "2.120.1");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_XQPjg13t37zIEtpt44U6ff92$1));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$4, 'a_XQPjg13t37zIEtpt44U6ff92$4');

function a_XQPjg13t37zIEtpt44U6ff92$1(s) {
  (s.pc = "2.120.4");
  return s.rt.enter(a_Ayu95FKZqA9xPdjQXSANLGvP(s, a_XQPjg13t37zIEtpt44U6ff92$2, s.$width, s.$height));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$1, 'a_XQPjg13t37zIEtpt44U6ff92$1');

function a_XQPjg13t37zIEtpt44U6ff92$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "2.120.b0");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_XQPjg13t37zIEtpt44U6ff92$3(t_lmbProxy_1(la0), la1) });
  (s.pc = "2.120.7");
  var t_call_2 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  t_call_2;
  (s.pc = "2.120.b");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.post_to_wall(s));
  (s.pc = "2.120.e");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (s.pc = "2.120.h");
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
  (s.pc = "2.120.b20");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_a_XQPjg13t37zIEtpt44U6ff92$3$1));
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$0, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$0');

function a_a_XQPjg13t37zIEtpt44U6ff92$3$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  var t_elseIf_1 = true;
  (s.pc = "2.120.b23");
  var t_call_2 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "2.120.b270");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  } else {
  (s.pc = "2.120.b280");
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
  (s.pc = "2.130.1");
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
  (s.pc = "2.151.0");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "2.151.40");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.clear_every_frame_timers(s));
  } else {
  (s.pc = "2.151.50");
  null;
  }
  (s.pc = "2.151.5");
  var t_call_2 = lib.Invalid.board(s);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xpQAnETcU9aowS6g7p1qZZbf$0, 'a_xpQAnETcU9aowS6g7p1qZZbf$0');

/* ACTION: splash text */
function a_a7BJpaIAFIQXxK4dh0p7dx24(previous, returnAddr, $message, $seconds, $foreground, $background, $done) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a7BJpaIAFIQXxK4dh0p7dx24$0;
  s.name = "splash text";
  s.$message = $message;
  s.$seconds = $seconds;
  s.$foreground = $foreground;
  s.$background = $background;
  s.$done = $done;
  s.$back = undefined;
  s.$text = undefined;
  s.$text_anim = undefined;
  s.$anim2 = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerAction("splash text", "a7BJpaIAFIQXxK4dh0p7dx24", a_a7BJpaIAFIQXxK4dh0p7dx24, true);

function a_a7BJpaIAFIQXxK4dh0p7dx24$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.156.1");
  var t_infix_1 = (ok1(s, s.$seconds) && (s.$seconds < 0.5));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "2.156.50");
  (s.$seconds = 0.5);
  } else {
  (s.pc = "2.156.60");
  null;
  }
  (s.pc = "2.156.6");
  var t_call_2 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_3 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_call_4 = (ok3(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, t_call_2, t_call_3) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_rectangle(t_call_2, t_call_3, s));
  s.rt.markAllocated(t_call_4);
  (s.$back = t_call_4);
  (s.pc = "2.156.9");
  s.rt.logObjectMutation(s.$back);
  (ok2(s, s.$back, s.$background) && s.$back.set_color(s.$background, s));
  (s.pc = "2.156.c");
  var t_call_5 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_6 = (ok3(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, t_call_5, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(t_call_5, 2, 60, s.$message, s));
  s.rt.markAllocated(t_call_6);
  (s.$text = t_call_6);
  (s.pc = "2.156.f");
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, s.$foreground) && s.$text.set_color(s.$foreground, s));
  (s.pc = "2.156.i");
  var t_infix_7 = (0 - 80);
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_7) && s.$text.move(0, t_infix_7, s));
  (s.pc = "2.156.l");
  var t_call_8 = (ok1(s, s.$text) && s.$text.create_animation(s));
  (s.$text_anim = t_call_8);
  (s.pc = "2.156.o");
  s.rt.logObjectMutation(s.$text_anim);
  (ok2(s, s.$text_anim, s.$seconds) && s.$text_anim.sleep(s.$seconds, s));
  (s.pc = "2.156.r");
  s.rt.logObjectMutation(s.$text_anim);
  (ok1(s, s.$text_anim) && s.$text_anim.puff_out(0.9, "cubic", 1.5, s));
  (s.pc = "2.156.u");
  s.rt.logObjectMutation(s.$text_anim);
  (ok1(s, s.$text_anim) && s.$text_anim.delete_(s));
  (s.pc = "2.156.x");
  var t_call_9 = (ok1(s, s.$back) && s.$back.create_animation(s));
  (s.$anim2 = t_call_9);
  (s.pc = "2.156.A");
  var t_infix_10 = (ok1(s, s.$seconds) && (s.$seconds + 0.7));
  s.rt.logObjectMutation(s.$anim2);
  (ok2(s, s.$anim2, t_infix_10) && s.$anim2.sleep(t_infix_10, s));
  (s.pc = "2.156.D");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.fade_out(0.2, "cubic", s));
  (s.pc = "2.156.G");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.delete_(s));
  (s.pc = "2.156.N0");
  var t_lmbv_11 = s.$done;
  var t_lmbProxy_12 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_a7BJpaIAFIQXxK4dh0p7dx24$2(t_lmbProxy_12(la0), la1, t_lmbv_11) });
  (s.pc = "2.156.J");
  s.rt.logObjectMutation(s.$anim2);
  var t_call_13 = (ok2(s, s.$anim2, s.$handler) && s.$anim2.on_stop(s.$handler, s));
  t_call_13;
  (s.pc = "2.156.N");
  var t_resumeCtx_14 = s.rt.getAsyncResumeCtx();
  (ok1(s, s.$anim2) && s.$anim2.wait(t_resumeCtx_14));
  t_resumeCtx_14.task;
  return s.rt.leave();
}
cs.registerStep(a_a7BJpaIAFIQXxK4dh0p7dx24$0, 'a_a7BJpaIAFIQXxK4dh0p7dx24$0');

/* ACTION: a_a7BJpaIAFIQXxK4dh0p7dx24::lambda::2 */
function a_a_a7BJpaIAFIQXxK4dh0p7dx24$2(previous, returnAddr, $done) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$0;
  s.name = "splash text";
  s.$done = $done;
  return s;
}
cs.registerLambda("a_a7BJpaIAFIQXxK4dh0p7dx24\u003a\u003alambda\u003a\u003a2", "a_a7BJpaIAFIQXxK4dh0p7dx24$2", a_a_a7BJpaIAFIQXxK4dh0p7dx24$2, true);

function a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$0(s) {
  (s.pc = "2.156.N20");
  return s.rt.enter((ok1(s, s.$done) && s.$done(s, a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$1)));
}
cs.registerStep(a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$0, 'a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$0');

function a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$1, 'a_a_a7BJpaIAFIQXxK4dh0p7dx24$2$1');

/* ACTION: set hud colors */
function a_OMEJVlEdU2VpPg82GXpsMZTs(previous, returnAddr, $life, $timer, $score) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_OMEJVlEdU2VpPg82GXpsMZTs$0;
  s.name = "set hud colors";
  s.$life = $life;
  s.$timer = $timer;
  s.$score = $score;
  return s;
}
cs.registerAction("set hud colors", "OMEJVlEdU2VpPg82GXpsMZTs", a_OMEJVlEdU2VpPg82GXpsMZTs, false);

function a_OMEJVlEdU2VpPg82GXpsMZTs$0(s) {
  (s.pc = "2.176.1");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$life) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(s.$life, s));
  (s.pc = "2.176.4");
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, s.$timer) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_color(s.$timer, s));
  (s.pc = "2.176.7");
  s.rt.logObjectMutation(/* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl);
  (ok2(s, /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl, s.$score) && /* _score txt */ s.d.$xNAWDOf7EuGiiCdQwY6RN8Xl.set_color(s.$score, s));
  (s.pc = "2.176.a");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_OMEJVlEdU2VpPg82GXpsMZTs$0, 'a_OMEJVlEdU2VpPg82GXpsMZTs$0');

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
  d.$xNAWDOf7EuGiiCdQwY6RN8Xl = undefined;
  d.$x2fjfvNmVawvnAWKndzdfxls = undefined;
  d.$x4cIV8c7P0QJsADCfcHm2ApY = 0;
  d.$emzufgdY6lsG2RaaCYaxwN8m = undefined;
  d.$Eu2dngMaA73jYqD6d0u8iCju = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set score";
cs.authorId = "unknown";
cs.scriptId = "lopp";
cs.scriptGuid = "aaaf0ae6-2fa4-4b12-982c-86346866b8c9";
})}
