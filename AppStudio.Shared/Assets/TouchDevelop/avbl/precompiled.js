var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Brain Training ";
cs.scriptColor = "\u0023007fff";
cs.objectSingletons = {};
/* ACTION: main */
function a_Apxoi0VesSBXIz9PLx65FHFL(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Apxoi0VesSBXIz9PLx65FHFL$0;
  s.name = "main";
  return s;
}
cs.registerAction("main", "Apxoi0VesSBXIz9PLx65FHFL", a_Apxoi0VesSBXIz9PLx65FHFL, true);

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

function a_Apxoi0VesSBXIz9PLx65FHFL$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "W9clZmS2CBwv9Ysm");
  var t_call_1 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.count(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 === 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "xYwL1wl79ZL38LRi");
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 0);
  s.rt.logDataWrite();
  (s.pc = "R4CSZWfDTMKXUpZS");
  var t_call_3 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.add_row(s));
  if (t_call_3) {
  t_call_3.perform_set("tYOOFsXQB7ClRutqdGre45P0", /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg, s);
  }
  (s.pc = "UNrwAQ45cP0qgQJJ");
  var t_call_4 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.row_at(0, s));
  (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV = t_call_4);
  s.rt.logDataWrite();
  } else {
  (s.pc = "slIbbt2PmJxvQ1WW");
  var t_call_5 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.row_at(0, s));
  (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "xjuCh2vKVc7vq6pN");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_6 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("tYOOFsXQB7ClRutqdGre45P0", s);
  }
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = t_recOp_6);
  s.rt.logDataWrite();
  }
  (s.pc = "adcbUtGqrjcCf4FO");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_Apxoi0VesSBXIz9PLx65FHFL$4));
}
cs.registerStep(a_Apxoi0VesSBXIz9PLx65FHFL$0, 'a_Apxoi0VesSBXIz9PLx65FHFL$0');

function a_Apxoi0VesSBXIz9PLx65FHFL$4(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return s.rt.leave();
}
cs.registerStep(a_Apxoi0VesSBXIz9PLx65FHFL$4, 'a_Apxoi0VesSBXIz9PLx65FHFL$4');

/* ACTION: paintKeys */
function a_tSxtWTSBiDr298yBBNHQR32u(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tSxtWTSBiDr298yBBNHQR32u$0;
  s.name = "paintKeys";
  s.$KeysBackground = undefined;
  s.$Help = undefined;
  s.$tapped5 = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$Acheivements = undefined;
  s.$tapped6 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$Home = undefined;
  s.$tapped8 = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$tapped7 = undefined;
  s.$x3 = undefined;
  s.$y3 = undefined;
  s.$up = undefined;
  s.$tapped = undefined;
  s.$x4 = undefined;
  s.$y4 = undefined;
  s.$down = undefined;
  s.$tapped2 = undefined;
  s.$x5 = undefined;
  s.$y5 = undefined;
  s.$right = undefined;
  s.$tapped3 = undefined;
  s.$x6 = undefined;
  s.$y6 = undefined;
  s.$left = undefined;
  s.$tapped4 = undefined;
  s.$x7 = undefined;
  s.$y7 = undefined;
  return s;
}
cs.registerAction("paintKeys", "tSxtWTSBiDr298yBBNHQR32u", a_tSxtWTSBiDr298yBBNHQR32u, true);

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_tSxtWTSBiDr298yBBNHQR32u$0(s) {
  (s.pc = "HuF7RxsW74vYBqjW");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$1);
  var t_call_1 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* BGKeys */ s.d.$IHMiy5VQVa1ERjPHixGu4wam) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* BGKeys */ s.d.$IHMiy5VQVa1ERjPHixGu4wam, t_resumeCtx_0));
  return a_tSxtWTSBiDr298yBBNHQR32u$1;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$0, 'a_tSxtWTSBiDr298yBBNHQR32u$0');

function a_tSxtWTSBiDr298yBBNHQR32u$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (s.$KeysBackground = t_pauseRes_2);
  (s.pc = "axcougCz3GcoHXOl");
  null;
  (s.pc = "vZvImzTDNCQAg3oY");
  var t_call_3 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 - 30));
  s.rt.logObjectMutation(s.$KeysBackground);
  (ok2(s, s.$KeysBackground, t_infix_4) && s.$KeysBackground.set_pos(400, t_infix_4, s));
  (s.pc = "xlONJmzRsOVOynIk");
  s.rt.logObjectMutation(s.$KeysBackground);
  (ok1(s, s.$KeysBackground) && s.$KeysBackground.set_height(60, s));
  (s.pc = "pW5SBkefnRjYkIFf");
  s.rt.logObjectMutation(s.$KeysBackground);
  (ok1(s, s.$KeysBackground) && s.$KeysBackground.set_width(800, s));
  (s.pc = "aFJKpTF71lgvjo2e");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$2);
  var t_call_6 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* HELP */ s.d.$PeVXx8oDv5OcBsMO4VlSmCkG) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* HELP */ s.d.$PeVXx8oDv5OcBsMO4VlSmCkG, t_resumeCtx_5));
  return a_tSxtWTSBiDr298yBBNHQR32u$2;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$1, 'a_tSxtWTSBiDr298yBBNHQR32u$1');

function a_tSxtWTSBiDr298yBBNHQR32u$2(s) {
  var t_pauseRes_7 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_7);
  (s.$Help = t_pauseRes_7);
  (s.pc = "jju4mPNgDpfBIpL7");
  var t_call_8 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 - 28));
  s.rt.logObjectMutation(s.$Help);
  (ok2(s, s.$Help, t_infix_9) && s.$Help.set_pos(700, t_infix_9, s));
  (s.pc = "xNsexa6898EZer7a");
  s.rt.logObjectMutation(s.$Help);
  (ok1(s, s.$Help) && s.$Help.set_width(30, s));
  (s.pc = "RzqsfQmztexXyRTN");
  var t_lmbProxy_10 = s.libs.mkLambdaProxy;
  (s.$tapped5 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$3(t_lmbProxy_10(la0), la1, la2, la3) });
  (s.pc = "xyTk9mqBiM1AdMZ2");
  var t_call_11 = (ok2(s, s.$Help, s.$tapped5) && s.$Help.on_tap(s.$tapped5, s));
  t_call_11;
  (s.pc = "tB12PzCQ4sZZktqw");
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$4);
  var t_call_13 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* info */ s.d.$j1VukLlGUNlUynqQK0cDYVlG) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* info */ s.d.$j1VukLlGUNlUynqQK0cDYVlG, t_resumeCtx_12));
  return a_tSxtWTSBiDr298yBBNHQR32u$4;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$2, 'a_tSxtWTSBiDr298yBBNHQR32u$2');

function a_tSxtWTSBiDr298yBBNHQR32u$4(s) {
  var t_pauseRes_14 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_14);
  (s.$Acheivements = t_pauseRes_14);
  (s.pc = "QqZNpxYRUYQArkXM");
  s.rt.logObjectMutation(s.$Acheivements);
  (ok1(s, s.$Acheivements) && s.$Acheivements.set_width(30, s));
  (s.pc = "L8nDmgpkrNUVxb6I");
  var t_call_15 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 - 28));
  s.rt.logObjectMutation(s.$Acheivements);
  (ok2(s, s.$Acheivements, t_infix_16) && s.$Acheivements.set_pos(650, t_infix_16, s));
  (s.pc = "TBY0JjMNzt9EHNgu");
  var t_lmbProxy_17 = s.libs.mkLambdaProxy;
  (s.$tapped6 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$5(t_lmbProxy_17(la0), la1, la2, la3) });
  (s.pc = "gwMA2aHRq93ewe1K");
  var t_call_18 = (ok2(s, s.$Acheivements, s.$tapped6) && s.$Acheivements.on_tap(s.$tapped6, s));
  t_call_18;
  (s.pc = "U3KrQWSNzWsk1sT4");
  var t_resumeCtx_19 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$6);
  var t_call_20 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* HOME1 */ s.d.$RjYHAaxrmFEb7AOIdQNv5srJ) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* HOME1 */ s.d.$RjYHAaxrmFEb7AOIdQNv5srJ, t_resumeCtx_19));
  return a_tSxtWTSBiDr298yBBNHQR32u$6;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$4, 'a_tSxtWTSBiDr298yBBNHQR32u$4');

function a_tSxtWTSBiDr298yBBNHQR32u$6(s) {
  var t_pauseRes_21 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_21);
  (s.$Home = t_pauseRes_21);
  (s.pc = "taNK1mZhTjhcHgbH");
  s.rt.logObjectMutation(s.$Home);
  (ok1(s, s.$Home) && s.$Home.set_height(30, s));
  (s.pc = "HHkvN6cgHRdzDQl6");
  var t_call_22 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_23 = (ok1(s, t_call_22) && (t_call_22 - 28));
  s.rt.logObjectMutation(s.$Home);
  (ok2(s, s.$Home, t_infix_23) && s.$Home.set_pos(100, t_infix_23, s));
  (s.pc = "b844mf6pridX6gtp");
  var t_lmbProxy_24 = s.libs.mkLambdaProxy;
  (s.$tapped8 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$7(t_lmbProxy_24(la0), la1, la2, la3) });
  (s.pc = "xC8T2zUfP04PJ2vH");
  var t_call_25 = (ok2(s, s.$Home, s.$tapped8) && s.$Home.on_tap(s.$tapped8, s));
  t_call_25;
  (s.pc = "vfIYvYbmji4KbeKb");
  var t_resumeCtx_26 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$8);
  var t_call_27 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* SPEED */ s.d.$ovIviND2yV2OAQnXKJZ4LLIS) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* SPEED */ s.d.$ovIviND2yV2OAQnXKJZ4LLIS, t_resumeCtx_26));
  return a_tSxtWTSBiDr298yBBNHQR32u$8;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$6, 'a_tSxtWTSBiDr298yBBNHQR32u$6');

function a_tSxtWTSBiDr298yBBNHQR32u$8(s) {
  var t_pauseRes_28 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_28);
  (/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE = t_pauseRes_28);
  s.rt.logDataWrite();
  (s.pc = "hE2IwGU7Ilyr1TrZ");
  var t_call_29 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 - 28));
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok2(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE, t_infix_30) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.set_pos(150, t_infix_30, s));
  (s.pc = "N1Qig6iPdYB0F2bc");
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok1(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.set_width(30, s));
  (s.pc = "pKDDtsYCMnLvlInj");
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok1(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.hide(s));
  (s.pc = "yPlG5p3U4EogFlRz");
  var t_lmbProxy_31 = s.libs.mkLambdaProxy;
  (s.$tapped7 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$9(t_lmbProxy_31(la0), la1, la2, la3) });
  (s.pc = "xZPammXMSo3IVKiU");
  var t_call_32 = (ok2(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE, s.$tapped7) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.on_tap(s.$tapped7, s));
  t_call_32;
  (s.pc = "xad6oZhrHydbTFeu");
  var t_resumeCtx_33 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$10);
  var t_call_34 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* upHit */ s.d.$mSGv6SPyqeKRyu4iW9JRQjnK) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* upHit */ s.d.$mSGv6SPyqeKRyu4iW9JRQjnK, t_resumeCtx_33));
  return a_tSxtWTSBiDr298yBBNHQR32u$10;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$8, 'a_tSxtWTSBiDr298yBBNHQR32u$8');

function a_tSxtWTSBiDr298yBBNHQR32u$10(s) {
  var t_pauseRes_35 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_35);
  (s.$up = t_pauseRes_35);
  (s.pc = "FkxmC9KZuV5u54h4");
  var t_call_36 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 - 28));
  s.rt.logObjectMutation(s.$up);
  (ok2(s, s.$up, t_infix_37) && s.$up.set_pos(430, t_infix_37, s));
  (s.pc = "x7N4iGj7sA1EO7uP");
  s.rt.logObjectMutation(s.$up);
  (ok1(s, s.$up) && s.$up.set_height(40, s));
  (s.pc = "xx7It0DrEawPKdJF");
  var t_lmbProxy_38 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$11(t_lmbProxy_38(la0), la1, la2, la3) });
  (s.pc = "xuzgHYU6si3HDcrj");
  var t_call_39 = (ok2(s, s.$up, s.$tapped) && s.$up.on_tap(s.$tapped, s));
  t_call_39;
  (s.pc = "xzPYb86DmPR6sHbg");
  var t_resumeCtx_40 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$12);
  var t_call_41 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* downHit */ s.d.$rUG2o3YHKEvkJJWecSXF26SV) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* downHit */ s.d.$rUG2o3YHKEvkJJWecSXF26SV, t_resumeCtx_40));
  return a_tSxtWTSBiDr298yBBNHQR32u$12;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$10, 'a_tSxtWTSBiDr298yBBNHQR32u$10');

function a_tSxtWTSBiDr298yBBNHQR32u$12(s) {
  var t_pauseRes_42 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_42);
  (s.$down = t_pauseRes_42);
  (s.pc = "jHTCbOjNo48Lsh3Q");
  var t_call_43 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_44 = (ok1(s, t_call_43) && (t_call_43 - 28));
  s.rt.logObjectMutation(s.$down);
  (ok2(s, s.$down, t_infix_44) && s.$down.set_pos(370, t_infix_44, s));
  (s.pc = "ND9C89ysmc8pgNsY");
  s.rt.logObjectMutation(s.$down);
  (ok1(s, s.$down) && s.$down.set_height(40, s));
  (s.pc = "MPVuFHRcr1R4vSuu");
  var t_lmbProxy_45 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$13(t_lmbProxy_45(la0), la1, la2, la3) });
  (s.pc = "WP7d0rRYUMUbGRPA");
  var t_call_46 = (ok2(s, s.$down, s.$tapped2) && s.$down.on_tap(s.$tapped2, s));
  t_call_46;
  (s.pc = "OnAPRDQ2zdmat94R");
  var t_resumeCtx_47 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$14);
  var t_call_48 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* rightHit */ s.d.$xqSH8omV8h4NL0PVAXXc5cTx) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* rightHit */ s.d.$xqSH8omV8h4NL0PVAXXc5cTx, t_resumeCtx_47));
  return a_tSxtWTSBiDr298yBBNHQR32u$14;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$12, 'a_tSxtWTSBiDr298yBBNHQR32u$12');

function a_tSxtWTSBiDr298yBBNHQR32u$14(s) {
  var t_pauseRes_49 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_49);
  (s.$right = t_pauseRes_49);
  (s.pc = "xoR0Ucyof5J4VtH5");
  var t_call_50 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_51 = (ok1(s, t_call_50) && (t_call_50 - 28));
  s.rt.logObjectMutation(s.$right);
  (ok2(s, s.$right, t_infix_51) && s.$right.set_pos(490, t_infix_51, s));
  (s.pc = "xqjEKuVDijUKlIuX");
  s.rt.logObjectMutation(s.$right);
  (ok1(s, s.$right) && s.$right.set_width(40, s));
  (s.pc = "xzXWS222B9TEyaJD");
  var t_lmbProxy_52 = s.libs.mkLambdaProxy;
  (s.$tapped3 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$15(t_lmbProxy_52(la0), la1, la2, la3) });
  (s.pc = "qO7UFTIJDpbVKqJ6");
  var t_call_53 = (ok2(s, s.$right, s.$tapped3) && s.$right.on_tap(s.$tapped3, s));
  t_call_53;
  (s.pc = "XL6prnld1JjMGR9H");
  var t_resumeCtx_54 = s.rt.getBlockingResumeCtx(a_tSxtWTSBiDr298yBBNHQR32u$16);
  var t_call_55 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* leftHit */ s.d.$DwlO3U3BecxR5iHWzCnq3ygy) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* leftHit */ s.d.$DwlO3U3BecxR5iHWzCnq3ygy, t_resumeCtx_54));
  return a_tSxtWTSBiDr298yBBNHQR32u$16;
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$14, 'a_tSxtWTSBiDr298yBBNHQR32u$14');

function a_tSxtWTSBiDr298yBBNHQR32u$16(s) {
  var t_pauseRes_56 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_56);
  (s.$left = t_pauseRes_56);
  (s.pc = "aPmtDYNy6nDr2w2I");
  var t_call_57 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_58 = (ok1(s, t_call_57) && (t_call_57 - 28));
  s.rt.logObjectMutation(s.$left);
  (ok2(s, s.$left, t_infix_58) && s.$left.set_pos(310, t_infix_58, s));
  (s.pc = "PAIdSTR02T7lqDi5");
  s.rt.logObjectMutation(s.$left);
  (ok1(s, s.$left) && s.$left.set_width(40, s));
  (s.pc = "KAUKGSM239G7ZFtW");
  var t_lmbProxy_59 = s.libs.mkLambdaProxy;
  (s.$tapped4 = function(la0, la1, la2, la3) { return a_a_tSxtWTSBiDr298yBBNHQR32u$17(t_lmbProxy_59(la0), la1, la2, la3) });
  (s.pc = "FrggHNcgcSOXVWBb");
  var t_call_60 = (ok2(s, s.$left, s.$tapped4) && s.$left.on_tap(s.$tapped4, s));
  t_call_60;
  return s.rt.leave();
}
cs.registerStep(a_tSxtWTSBiDr298yBBNHQR32u$16, 'a_tSxtWTSBiDr298yBBNHQR32u$16');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::3 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$3(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$3$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a3", "a_tSxtWTSBiDr298yBBNHQR32u$3", a_a_tSxtWTSBiDr298yBBNHQR32u$3, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$0(s) {
  s.t_elseIf_0 = true;
  (s.pc = "PmDDeCIhoh2jm8Zz");
  var t_infix_1 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.t_elseIf_0 = false);
  var t_elseIf_2 = true;
  (s.pc = "LDlHdkx3YB3T3AMf");
  var t_infix_3 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "Tr2HsKdxQunM2uYw");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$3);
  lib.Wall.prompt("How to play ?\u000a\u000aIt\u0027s easy steps\u000a\u003eLook at the picture that will be shown to you\u000a\u003eTap on the direction that refers to the odd one out triangle\u000a.............................................................................................................................. \u000aNotes \u003a\u000a\u000a\u003eYou\u0027ll receive 10 points score for every right answer \u000a\u003eIf you choose the wrong direction \u002c you\u0027ll lose 10 points score\u000a\u003eIf you stay for the time that you have chosen before with out choosing an answer \u002c you\u0027ll lose another 10 points \u000a\u003eThat time will decrease by 1 second for every 60 points score you gain\u000a\u003eAfter your speed reaches it\u0027s most \u002c you will be able to customize your speed \u000a\u003eYour progress will Increases by 1\u0025 for every 60 points score you gain \u000a\u003eIf your score reaches 0 \u002c you\u0027ll lose a life in exchange for 60 points \u000a\u003eIf you lose all of your lives the game\u0027ll be over \u000a.............................................................................................................................\u000aIn order to play the next level .. you\u0027ll have to earn 200 points ", t_resumeCtx_4);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$3;
  } else {
  (s.pc = "ejTIcTmq2SEYSxrO");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$4);
  lib.Wall.prompt("\u0643\u064a\u0641 \u062a\u0644\u0639\u0628 \u061f\u000a\u000a\u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0633\u0647\u0644\u0629 \u000a\u003e\u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062a\u0649 \u0633\u062a\u0638\u0647\u0631 \u0644\u0643 \u000a\u003e\u0642\u0645 \u0628\u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0645\u0645\u0627\u062b\u0644 \u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0637\u0627\u0626\u0631 \u0627\u0644\u0645\u062e\u062a\u0644\u0641 \u000a..............................................................................................................................\u000a\u0644\u0627\u062d\u0638 \u003a \u000a\u003e\u0633\u0648\u0641 \u062a\u062a\u0644\u0642\u0649 10 \u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0625\u062c\u0627\u0628\u0629 \u0635\u062d\u064a\u062d\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u0642\u0645\u062a \u0628\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u062e\u0627\u0637\u0626 \u0633\u0648\u0641 \u064a\u062e\u0635\u0645 \u0645\u0646\u0643 10 \u0646\u0642\u0627\u0637 \u000a\u003e\u0644\u0648 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u062d\u062f\u062f \u0648\u0644\u0645 \u062a\u0642\u0645 \u0628\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0633\u062a\u062e\u0633\u0631 10 \u0646\u0642\u0627\u0637 \u0625\u0636\u0627\u0641\u064a\u0629\u000a\u003e\u0633\u064a\u062a\u0646\u0627\u0642\u0635 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0630\u0649 \u0642\u0645\u062a \u0628\u0625\u062f\u062e\u0644\u0647 \u0645\u0633\u0628\u0642\u0627\u064b \u0628\u0645\u0642\u062f\u0627\u0631 \u062b\u0627\u0646\u064a\u0629 \u0628\u0639\u062f \u0643\u0644 60 \u0646\u0642\u0637\u0629 \u0625\u0636\u0627\u0641\u064a\u0629\u000a\u003e\u0639\u0646\u062f\u0645\u0627 \u062a\u0635\u0644 \u0644\u0623\u0642\u0635\u0649 \u0633\u0631\u0639\u0629 \u0633\u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0636\u0628\u0637 \u0627\u0644\u0633\u0631\u0639\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u0648\u0635\u0644\u062a \u0646\u0642\u0627\u0637\u0643 \u0625\u0644\u0649 0 \u0633\u0648\u0641 \u064a\u062a\u0645 \u062e\u0635\u0645 \u062d\u064a\u0627\u0629 \u0641\u0649 \u0645\u0642\u0627\u0628\u0644 60 \u0646\u0642\u0637\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u062e\u0633\u0631\u062a \u0643\u0644 \u062d\u064a\u0648\u0627\u062a\u0643 \u0633\u062a\u0646\u062a\u0647\u0649 \u0627\u0644\u0644\u0639\u0628\u0629 \u000a..............................................................................................................................\u000a\u0644\u062a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062a\u0627\u0644\u0649 \u0639\u0644\u064a\u0643 \u062c\u0645\u0639 200 \u0646\u0642\u0637\u0629", t_resumeCtx_5);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$4;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$2;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$1;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$3(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$2;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$3, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$3');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$4(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$2;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$4, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$4');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$2(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$1;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$2, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$2');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$1(s) {
  if (s.t_elseIf_0) {
  (s.pc = "dmNhfa2WNUAMOZq4");
  var t_infix_6 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK === 1));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.t_elseIf_0 = false);
  var t_elseIf_7 = true;
  (s.pc = "x4NgiVxfHGtqa2JW");
  var t_infix_8 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "xP4kUcbn9HIDTWTS");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$7);
  lib.Wall.prompt(" \u003eYou have to detect the direction for most triangles of the picture  \u000a\u003eYou have to select the opposite direction\u000a\u003eYou\u0027ll get 20 points score for every right answer\u000a\u003eIf your score reaches 0 \u002c you\u0027ll lose a life in exchange for 50 points \u000a\u003eIf you lose all of your lives the game\u0027ll be over ", t_resumeCtx_9);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$7;
  } else {
  (s.pc = "Xt190zGDz0ZPsOkg");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$8);
  lib.Wall.prompt("\u003e\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062d\u062f\u062f \u0627\u062a\u062c\u0627\u0647 \u0645\u0639\u0638\u0645 \u0627\u0644\u0637\u064a\u0648\u0631 \u0641\u0649 \u0627\u0644\u0635\u0648\u0631\u0629\u000a\u003e\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062e\u062a\u0627\u0631 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0645\u0639\u0627\u0643\u0633\u000a\u003e\u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 20 \u0646\u0642\u0635\u0629 \u0639\u0646 \u0643\u0644 \u0627\u062c\u0627\u0628\u0629 \u0635\u062d\u064a\u062d\u0629\u000a\u003e\u0644\u0648 \u0648\u0635\u0644\u062a \u0646\u0642\u0627\u0637\u0643 \u0644\u0644\u0635\u0641\u0631 \u0633\u062a\u0628\u0627\u062f\u0644 \u062d\u064a\u0627\u0629 \u0645\u0646 \u062d\u064a\u0648\u0627\u062a\u0643 \u062850 \u0646\u0642\u0637\u0629\u000a\u003e\u0627\u0644\u0644\u0639\u0628\u0629 \u0633\u062a\u0646\u062a\u0647\u0649 \u0628\u0645\u062c\u0631\u062f \u0648\u0635\u0648\u0644 \u062d\u064a\u0648\u0627\u062a\u0643 \u0644\u0644\u0635\u0641\u0631", t_resumeCtx_10);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$8;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$6;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$5;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$9;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$1');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$7(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$6;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$7, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$7');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$8(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$6;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$8, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$8');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$6(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$5;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$6, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$6');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$5(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$9;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$5, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$5');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$9(s) {
  if (s.t_elseIf_0) {
  (s.pc = "AWPAGE5SV2mSC9Jp");
  var t_infix_11 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK === 2));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  var t_elseIf_12 = true;
  (s.pc = "xPPPJq2f4SWVQz9p");
  var t_infix_13 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "rZEg4zuu1nHUEdf4");
  var t_resumeCtx_14 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$12);
  lib.Wall.prompt(" \u003eYou have to detect the direction for most triangles of the picture  \u000a\u003eYou have to select the opposite direction\u000a\u003eYou\u0027ll get 20 points score for every right answer\u000a\u003eYou will lose a life for every Three wrong answers\u000a\u003eIf you lose all of your lives the game\u0027ll be over ", t_resumeCtx_14);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$12;
  } else {
  (s.pc = "x23ZPlDFk39Nmhk0");
  var t_resumeCtx_15 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$3$13);
  lib.Wall.prompt("\u003e\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062d\u062f\u062f \u0627\u062a\u062c\u0627\u0647 \u0645\u0639\u0638\u0645 \u0627\u0644\u0637\u064a\u0648\u0631 \u0641\u0649 \u0627\u0644\u0635\u0648\u0631\u0629\u000a\u003e\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062e\u062a\u0627\u0631 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0645\u0639\u0627\u0643\u0633\u000a\u003e\u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 20 \u0646\u0642\u0635\u0629 \u0639\u0646 \u0643\u0644 \u0627\u062c\u0627\u0628\u0629 \u0635\u062d\u064a\u062d\u0629\u000a\u003e\u0633\u062a\u062e\u0633\u0631 \u062d\u064a\u0627\u0629 \u0639\u0646 \u0643\u0644 3 \u0627\u062c\u0627\u0628\u0627\u062a \u062e\u0627\u0637\u0626\u0629\u000a\u003e\u0627\u0644\u0644\u0639\u0628\u0629 \u0633\u062a\u0646\u062a\u0647\u0649 \u0628\u0645\u062c\u0631\u062f \u0648\u0635\u0648\u0644 \u062d\u064a\u0648\u0627\u062a\u0643 \u0644\u0644\u0635\u0641\u0631", t_resumeCtx_15);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$13;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$11;
  } else {
  (s.pc = "b4wWS4mRjFXLzzk6");
  null;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$10;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$14;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$9, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$9');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$12(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$11;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$12, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$12');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$13(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$11;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$13, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$13');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$11(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$10;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$11, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$11');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$10(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$3$14;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$10, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$10');

function a_a_tSxtWTSBiDr298yBBNHQR32u$3$14(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$3$14, 'a_a_tSxtWTSBiDr298yBBNHQR32u$3$14');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::5 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$5(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$5$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a5", "a_tSxtWTSBiDr298yBBNHQR32u$5", a_a_tSxtWTSBiDr298yBBNHQR32u$5, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$5$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xcLEx227QPipzKqu");
  var t_infix_1 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "lBr42PJNPMqCON4V");
  var t_concat_2 = lib.String_.concatAny("Achievements \u003a\u000a", "Level\u003a ");
  var t_infix_3 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK + 1));
  var t_concat_4 = lib.String_.concatAny(t_concat_2, t_infix_3);
  var t_concat_5 = lib.String_.concatAny(t_concat_4, "\u000aTimer\u003a ");
  var t_concat_6 = lib.String_.concatAny(t_concat_5, /* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp);
  var t_concat_7 = lib.String_.concatAny(t_concat_6, "\u000aRight Answers\u003a ");
  var t_concat_8 = lib.String_.concatAny(t_concat_7, /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf);
  var t_concat_9 = lib.String_.concatAny(t_concat_8, "\u000aWrong Answers\u003a ");
  var t_concat_10 = lib.String_.concatAny(t_concat_9, /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2);
  var t_concat_11 = lib.String_.concatAny(t_concat_10, "\u000aScore\u003a ");
  var t_concat_12 = lib.String_.concatAny(t_concat_11, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm);
  var t_concat_13 = lib.String_.concatAny(t_concat_12, "\u000aProgress\u003a ");
  var t_concat_14 = lib.String_.concatAny(t_concat_13, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4);
  var t_concat_15 = lib.String_.concatAny(t_concat_14, "\u0025");
  var t_resumeCtx_16 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$5$2);
  (ok1(s, t_concat_15) && lib.Wall.prompt(t_concat_15, t_resumeCtx_16));
  return a_a_tSxtWTSBiDr298yBBNHQR32u$5$2;
  } else {
  (s.pc = "ufwjk5zcIqc1PWBA");
  var t_concat_17 = lib.String_.concatAny("\u0627\u0644\u0627\u0646\u062c\u0627\u0632\u0627\u062a \u003a\u000a", "\u0627\u0644\u0645\u0631\u062d\u0644\u0629\u003a ");
  var t_infix_18 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK + 1));
  var t_concat_19 = lib.String_.concatAny(t_concat_17, t_infix_18);
  var t_concat_20 = lib.String_.concatAny(t_concat_19, "\u000a\u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u062a\u0628\u0642\u0649\u003a ");
  var t_concat_21 = lib.String_.concatAny(t_concat_20, /* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp);
  var t_concat_22 = lib.String_.concatAny(t_concat_21, "\u000a\u0627\u0644\u0627\u062c\u0627\u0628\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u062d\u0629\u003a ");
  var t_concat_23 = lib.String_.concatAny(t_concat_22, /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf);
  var t_concat_24 = lib.String_.concatAny(t_concat_23, "\u000a\u0627\u0644\u0627\u062c\u0627\u0628\u0627\u062a \u0627\u0644\u062e\u0627\u0637\u0626\u0629\u003a ");
  var t_concat_25 = lib.String_.concatAny(t_concat_24, /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2);
  var t_concat_26 = lib.String_.concatAny(t_concat_25, "\u000a\u0627\u0644\u0646\u0642\u0627\u0637\u003a ");
  var t_concat_27 = lib.String_.concatAny(t_concat_26, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm);
  var t_concat_28 = lib.String_.concatAny(t_concat_27, "\u000a\u062a\u0642\u062f\u0645\u0643\u003a ");
  var t_concat_29 = lib.String_.concatAny(t_concat_28, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4);
  var t_concat_30 = lib.String_.concatAny(t_concat_29, "\u0025");
  var t_resumeCtx_31 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$5$3);
  (ok1(s, t_concat_30) && lib.Wall.prompt(t_concat_30, t_resumeCtx_31));
  return a_a_tSxtWTSBiDr298yBBNHQR32u$5$3;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$5$1;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$5$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$5$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$5$2(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$5$1;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$5$2, 'a_a_tSxtWTSBiDr298yBBNHQR32u$5$2');

function a_a_tSxtWTSBiDr298yBBNHQR32u$5$3(s) {
  return a_a_tSxtWTSBiDr298yBBNHQR32u$5$1;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$5$3, 'a_a_tSxtWTSBiDr298yBBNHQR32u$5$3');

function a_a_tSxtWTSBiDr298yBBNHQR32u$5$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$5$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$5$1');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::7 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$7(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$7$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a7", "a_tSxtWTSBiDr298yBBNHQR32u$7", a_a_tSxtWTSBiDr298yBBNHQR32u$7, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$7$0(s) {
  (s.pc = "xDY7CdhuOQvy4K5r");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_a_tSxtWTSBiDr298yBBNHQR32u$7$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$7$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$7$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$7$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$7$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$7$1');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::9 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$9(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$9$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a9", "a_tSxtWTSBiDr298yBBNHQR32u$9", a_a_tSxtWTSBiDr298yBBNHQR32u$9, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$9$0(s) {
  (s.pc = "cXL13j5GiCXJJ2NB");
  return s.rt.enter(a_t1FWWQYo2sBFvZY3Y4Js5iP5(s, a_a_tSxtWTSBiDr298yBBNHQR32u$9$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$9$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$9$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$9$1(s) {
  var t_elseIf_0 = true;
  (s.pc = "pjn8xTf6p4diX08m");
  var t_infix_1 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "j2zCySNYqIkIqMnG");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$9$3);
  var t_call_3 = lib.Wall.ask_number("Enter the game speed you want in \u0022Seconds\u0022 \u000a\u000aNote\u003a Less time you enter the \u002c More skills you earn \u003a\u0029\u000a          so it\u0027s better to choose a number between 1 and 5", t_resumeCtx_2);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$9$3;
  } else {
  (s.pc = "e7GYvVnJomfHqzIk");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_a_tSxtWTSBiDr298yBBNHQR32u$9$4);
  var t_call_6 = lib.Wall.ask_number("\u0627\u062f\u062e\u0644 \u0633\u0631\u0639\u0629 \u0627\u0644\u0644\u0639\u0628 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643 \u0628\u0627\u0644\u062b\u0648\u0627\u0646\u0649\u000a\u000a\u0645\u0644\u0627\u062d\u0638\u0629 \u003a \u0648\u0642\u062a \u0627\u0642\u0635\u0631 \u062a\u062f\u062e\u0644\u0647 \u064a\u0633\u0627\u0648\u0649 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0643\u062b\u0631 \u062a\u062c\u0646\u064a\u0647\u0627\u000a\u0648 \u0644\u0630\u0644\u0643 \u0645\u0646 \u0627\u0644\u0627\u0641\u0636\u0644 \u0644\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0631\u0642\u0645 \u0628\u064a\u0646 5 \u0648 1", t_resumeCtx_5);
  return a_a_tSxtWTSBiDr298yBBNHQR32u$9$4;
  }
  return a_a_tSxtWTSBiDr298yBBNHQR32u$9$2;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$9$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$9$1');

function a_a_tSxtWTSBiDr298yBBNHQR32u$9$3(s) {
  var t_pauseRes_4 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_4);
  s.rt.logDataWrite();
  return a_a_tSxtWTSBiDr298yBBNHQR32u$9$2;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$9$3, 'a_a_tSxtWTSBiDr298yBBNHQR32u$9$3');

function a_a_tSxtWTSBiDr298yBBNHQR32u$9$4(s) {
  var t_pauseRes_7 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_7);
  s.rt.logDataWrite();
  return a_a_tSxtWTSBiDr298yBBNHQR32u$9$2;
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$9$4, 'a_a_tSxtWTSBiDr298yBBNHQR32u$9$4');

function a_a_tSxtWTSBiDr298yBBNHQR32u$9$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$9$2, 'a_a_tSxtWTSBiDr298yBBNHQR32u$9$2');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::11 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$11(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$11$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a11", "a_tSxtWTSBiDr298yBBNHQR32u$11", a_a_tSxtWTSBiDr298yBBNHQR32u$11, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$11$0(s) {
  (s.pc = "RxDu1b9PJFYK7oxz");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 1);
  s.rt.logDataWrite();
  (s.pc = "xfyie3dUKZT27pSe");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_a_tSxtWTSBiDr298yBBNHQR32u$11$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$11$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$11$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$11$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$11$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$11$1');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::13 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$13(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$13$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a13", "a_tSxtWTSBiDr298yBBNHQR32u$13", a_a_tSxtWTSBiDr298yBBNHQR32u$13, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$13$0(s) {
  (s.pc = "SXCfGs4jSvZICfGW");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 0);
  s.rt.logDataWrite();
  (s.pc = "DyLHUdUwAiVmSyJS");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_a_tSxtWTSBiDr298yBBNHQR32u$13$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$13$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$13$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$13$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$13$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$13$1');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::15 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$15(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$15$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a15", "a_tSxtWTSBiDr298yBBNHQR32u$15", a_a_tSxtWTSBiDr298yBBNHQR32u$15, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$15$0(s) {
  (s.pc = "MK2puGT2iqUi20rx");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 3);
  s.rt.logDataWrite();
  (s.pc = "xnVIor0kuNYQ6jKN");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_a_tSxtWTSBiDr298yBBNHQR32u$15$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$15$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$15$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$15$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$15$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$15$1');

/* ACTION: a_tSxtWTSBiDr298yBBNHQR32u::lambda::17 */
function a_a_tSxtWTSBiDr298yBBNHQR32u$17(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_tSxtWTSBiDr298yBBNHQR32u$17$0;
  s.name = "paintKeys";
  return s;
}
cs.registerLambda("a_tSxtWTSBiDr298yBBNHQR32u\u003a\u003alambda\u003a\u003a17", "a_tSxtWTSBiDr298yBBNHQR32u$17", a_a_tSxtWTSBiDr298yBBNHQR32u$17, true);

function a_a_tSxtWTSBiDr298yBBNHQR32u$17$0(s) {
  (s.pc = "Zt2bDT4R4EOj8UTr");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 2);
  s.rt.logDataWrite();
  (s.pc = "bImqI12PO4PhPh9S");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_a_tSxtWTSBiDr298yBBNHQR32u$17$1));
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$17$0, 'a_a_tSxtWTSBiDr298yBBNHQR32u$17$0');

function a_a_tSxtWTSBiDr298yBBNHQR32u$17$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_tSxtWTSBiDr298yBBNHQR32u$17$1, 'a_a_tSxtWTSBiDr298yBBNHQR32u$17$1');

/* ACTION: initialize */
function a_qn0u2fqF18R2ci6H2K3Z4maC(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qn0u2fqF18R2ci6H2K3Z4maC$0;
  s.name = "initialize";
  return s;
}
cs.registerAction("initialize", "qn0u2fqF18R2ci6H2K3Z4maC", a_qn0u2fqF18R2ci6H2K3Z4maC, false);

function a_qn0u2fqF18R2ci6H2K3Z4maC$0(s) {
  (s.pc = "xgmOqERYEPCggOv3");
  var t_call_0 = lib.Math_.random(4, s);
  (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "xRbETCQUxzBM1agP");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 0);
  s.rt.logDataWrite();
  var t_elseIf_1 = true;
  (s.pc = "N9b43G7hzQyKvgKP");
  var t_call_2 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.count(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 === 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "xCVHGjIHD1raXY6F");
  return s.rt.enter(a_en0ZX0ns15nlfTYaNwmqk2Pd(s, a_qn0u2fqF18R2ci6H2K3Z4maC$2));
  } else {
  (s.pc = "x0U02XOw5DA6qcQ9");
  return s.rt.enter(a_BzzqwWizcEHC54ODRvqkHzCX(s, a_qn0u2fqF18R2ci6H2K3Z4maC$4));
  }
  return a_qn0u2fqF18R2ci6H2K3Z4maC$1;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$0, 'a_qn0u2fqF18R2ci6H2K3Z4maC$0');

function a_qn0u2fqF18R2ci6H2K3Z4maC$2(s) {
  (s.pc = "k8CPmlPw0qgJMApB");
  return s.rt.enter(a_x0upCuxioZlcbhHobn2kveNP(s, a_qn0u2fqF18R2ci6H2K3Z4maC$3));
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$2, 'a_qn0u2fqF18R2ci6H2K3Z4maC$2');

function a_qn0u2fqF18R2ci6H2K3Z4maC$4(s) {
  return a_qn0u2fqF18R2ci6H2K3Z4maC$1;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$4, 'a_qn0u2fqF18R2ci6H2K3Z4maC$4');

function a_qn0u2fqF18R2ci6H2K3Z4maC$1(s) {
  (s.pc = "gYaxSupcrSxnl2YS");
  (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc = 1);
  s.rt.logDataWrite();
  (s.pc = "gVZZppetPBKt1uJ2");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_qn0u2fqF18R2ci6H2K3Z4maC$5);
  var t_call_5 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* downdown */ s.d.$x0zB4UM8mHYsWTbaswcTtRPA) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* downdown */ s.d.$x0zB4UM8mHYsWTbaswcTtRPA, t_resumeCtx_4));
  return a_qn0u2fqF18R2ci6H2K3Z4maC$5;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$1, 'a_qn0u2fqF18R2ci6H2K3Z4maC$1');

function a_qn0u2fqF18R2ci6H2K3Z4maC$3(s) {
  return a_qn0u2fqF18R2ci6H2K3Z4maC$1;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$3, 'a_qn0u2fqF18R2ci6H2K3Z4maC$3');

function a_qn0u2fqF18R2ci6H2K3Z4maC$5(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW = t_pauseRes_6);
  s.rt.logDataWrite();
  (s.pc = "odYc6eL2tXnm7amO");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.set_width(100, s));
  (s.pc = "N9NRPqMv1cLnvOts");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.hide(s));
  (s.pc = "x5K81cb0kapjRWbr");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_qn0u2fqF18R2ci6H2K3Z4maC$6);
  var t_call_8 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* upup */ s.d.$ZwL79mU290KV77PxaSBmvkoR) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* upup */ s.d.$ZwL79mU290KV77PxaSBmvkoR, t_resumeCtx_7));
  return a_qn0u2fqF18R2ci6H2K3Z4maC$6;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$5, 'a_qn0u2fqF18R2ci6H2K3Z4maC$5');

function a_qn0u2fqF18R2ci6H2K3Z4maC$6(s) {
  var t_pauseRes_9 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_9);
  (/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr = t_pauseRes_9);
  s.rt.logDataWrite();
  (s.pc = "xcmzfkq9Z0gcj2o8");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.set_width(100, s));
  (s.pc = "qTrM3RKvlbLZQlDq");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.hide(s));
  (s.pc = "tBhIH3Yni2qkCUEo");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_qn0u2fqF18R2ci6H2K3Z4maC$7);
  var t_call_11 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* LeftBird2 */ s.d.$vcUc7skKCS7sDvchDmiIGWz2) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* LeftBird2 */ s.d.$vcUc7skKCS7sDvchDmiIGWz2, t_resumeCtx_10));
  return a_qn0u2fqF18R2ci6H2K3Z4maC$7;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$6, 'a_qn0u2fqF18R2ci6H2K3Z4maC$6');

function a_qn0u2fqF18R2ci6H2K3Z4maC$7(s) {
  var t_pauseRes_12 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_12);
  (/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp = t_pauseRes_12);
  s.rt.logDataWrite();
  (s.pc = "Yx8TnQB2afqg47ui");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.set_width(100, s));
  (s.pc = "tuJvdLlf04wBdK7E");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.hide(s));
  (s.pc = "VIpH0ED0fAzVhkar");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_qn0u2fqF18R2ci6H2K3Z4maC$8);
  var t_call_14 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* rightright */ s.d.$NF0kHjjsWYjqnu0z4KYE29wZ) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* rightright */ s.d.$NF0kHjjsWYjqnu0z4KYE29wZ, t_resumeCtx_13));
  return a_qn0u2fqF18R2ci6H2K3Z4maC$8;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$7, 'a_qn0u2fqF18R2ci6H2K3Z4maC$7');

function a_qn0u2fqF18R2ci6H2K3Z4maC$8(s) {
  var t_pauseRes_15 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_15);
  (/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl = t_pauseRes_15);
  s.rt.logDataWrite();
  (s.pc = "xvLGLrG8bX0gRq8G");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.set_width(100, s));
  (s.pc = "qMMrkhmhdAOJ83ef");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.hide(s));
  var t_elseIf_16 = true;
  (s.pc = "R3qIsQRUFdV6QSA1");
  var t_infix_17 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK === 0));
  var t_call_18 = (ok1(s, t_infix_17) && lib.Boolean_.not(t_infix_17, s));
  ok1(s, t_call_18);
  if (t_call_18) {
  (s.pc = "x4tucpy7HL3hAufM");
  return s.rt.enter(a_iOC0hwvLjrZoG8j6hD658X77(s, a_qn0u2fqF18R2ci6H2K3Z4maC$10));
  } else {
  (s.pc = "fbmGvRCburydypf2");
  null;
  }
  return a_qn0u2fqF18R2ci6H2K3Z4maC$9;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$8, 'a_qn0u2fqF18R2ci6H2K3Z4maC$8');

function a_qn0u2fqF18R2ci6H2K3Z4maC$10(s) {
  return a_qn0u2fqF18R2ci6H2K3Z4maC$9;
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$10, 'a_qn0u2fqF18R2ci6H2K3Z4maC$10');

function a_qn0u2fqF18R2ci6H2K3Z4maC$9(s) {
  return s.rt.leave();
}
cs.registerStep(a_qn0u2fqF18R2ci6H2K3Z4maC$9, 'a_qn0u2fqF18R2ci6H2K3Z4maC$9');

/* ACTION: start */
function a_JHneZO0hWQFWeV3LFpeRcni1(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_JHneZO0hWQFWeV3LFpeRcni1$0;
  s.name = "start";
  return s;
}
cs.registerAction("start", "JHneZO0hWQFWeV3LFpeRcni1", a_JHneZO0hWQFWeV3LFpeRcni1, true);

function a_JHneZO0hWQFWeV3LFpeRcni1$0(s) {
  (s.pc = "UlgbGDnjdEOzG7pd");
  return s.rt.enter(a_qn0u2fqF18R2ci6H2K3Z4maC(s, a_JHneZO0hWQFWeV3LFpeRcni1$1));
}
cs.registerStep(a_JHneZO0hWQFWeV3LFpeRcni1$0, 'a_JHneZO0hWQFWeV3LFpeRcni1$0');

function a_JHneZO0hWQFWeV3LFpeRcni1$1(s) {
  (s.pc = "rIEnMK2JXz6jAiq7");
  return s.rt.enter(a_sK4NOdtzedkyOzsoOcpOAUVD(s, a_JHneZO0hWQFWeV3LFpeRcni1$2));
}
cs.registerStep(a_JHneZO0hWQFWeV3LFpeRcni1$1, 'a_JHneZO0hWQFWeV3LFpeRcni1$1');

function a_JHneZO0hWQFWeV3LFpeRcni1$2(s) {
  (s.pc = "wBIeMVKoJXCEJWTR");
  return s.rt.enter(a_tSxtWTSBiDr298yBBNHQR32u(s, a_JHneZO0hWQFWeV3LFpeRcni1$3));
}
cs.registerStep(a_JHneZO0hWQFWeV3LFpeRcni1$2, 'a_JHneZO0hWQFWeV3LFpeRcni1$2');

function a_JHneZO0hWQFWeV3LFpeRcni1$3(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "cYcxoDAMDcbnrFPw");
  var t_libcall_1 = s.libs["game"]["set life"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_JHneZO0hWQFWeV3LFpeRcni1$4, /* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv));
}
cs.registerStep(a_JHneZO0hWQFWeV3LFpeRcni1$3, 'a_JHneZO0hWQFWeV3LFpeRcni1$3');

function a_JHneZO0hWQFWeV3LFpeRcni1$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  var t_elseIf_3 = true;
  (s.pc = "K03hg7TRBlnK3Cql");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_4 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("X4CSEIFJVBf4hIUePN4rc87n", s);
  }
  var t_infix_5 = (ok1(s, t_recOp_4) && (t_recOp_4 === 1));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "xOfOCJoGAfUJ4StG");
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok1(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.show(s));
  } else {
  (s.pc = "xFeBCCGsRx8ZTcfB");
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok1(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.hide(s));
  }
  (s.pc = "xDshN4EXSF003t0Y");
  (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc = 0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_JHneZO0hWQFWeV3LFpeRcni1$4, 'a_JHneZO0hWQFWeV3LFpeRcni1$4');

/* ACTION: showBirds */
function a_sK4NOdtzedkyOzsoOcpOAUVD(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_sK4NOdtzedkyOzsoOcpOAUVD$0;
  s.name = "showBirds";
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("showBirds", "sK4NOdtzedkyOzsoOcpOAUVD", a_sK4NOdtzedkyOzsoOcpOAUVD, false);

function a_sK4NOdtzedkyOzsoOcpOAUVD$0(s) {
  (s.pc = "wTnu5CoKJlPlfAjC");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.hide(s));
  (s.pc = "mrXo7Vs52OaC8oaH");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.hide(s));
  (s.pc = "oZevw44pfxvleEOR");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.hide(s));
  (s.pc = "sammvHYbRv8RxYPv");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.hide(s));
  (s.pc = "GI4XjHZYCgE48WMg");
  var t_call_0 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.width(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 - 100));
  var t_call_2 = (ok1(s, t_infix_1) && lib.Math_.random(t_infix_1, s));
  (s.$x = t_call_2);
  (s.pc = "xpSOPuaM34k4fH22");
  var t_call_3 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 - 100));
  var t_call_5 = (ok1(s, t_infix_4) && lib.Math_.random(t_infix_4, s));
  (s.$y = t_call_5);
  (s.pc = "xWLOXDeRNPxsNWl0");
  return a_sK4NOdtzedkyOzsoOcpOAUVD$1;
}
cs.registerStep(a_sK4NOdtzedkyOzsoOcpOAUVD$0, 'a_sK4NOdtzedkyOzsoOcpOAUVD$0');

function a_sK4NOdtzedkyOzsoOcpOAUVD$1(s) {
  var t_infix_6 = (ok1(s, s.$x) && (s.$x < 100));
  var t_lazy_7 = t_infix_6;
  if ((ok1(s, t_lazy_7) && (!t_lazy_7))) {
  var t_infix_8 = (ok1(s, s.$y) && (s.$y < 50));
  (t_lazy_7 = t_infix_8);
  }
  if (t_lazy_7) {
  (s.pc = "PpFf8nNDJ4PinUXE");
  var t_call_9 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.width(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 - 100));
  var t_call_11 = (ok1(s, t_infix_10) && lib.Math_.random(t_infix_10, s));
  (s.$x = t_call_11);
  (s.pc = "cPdmUVsYZGtW2b6A");
  var t_call_12 = (ok1(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.height(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 - 100));
  var t_call_14 = (ok1(s, t_infix_13) && lib.Math_.random(t_infix_13, s));
  (s.$y = t_call_14);
  return a_sK4NOdtzedkyOzsoOcpOAUVD$1;
  }
  var t_elseIf_15 = true;
  (s.pc = "GXfM4viNUfU3evwX");
  var t_infix_16 = (ok1(s, /* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo) && (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo === 0));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (t_elseIf_15 = false);
  (s.pc = "G5Al1IwsLhT6Vice");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok3(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW, s.$x, s.$y) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.set_pos(s.$x, s.$y, s));
  (s.pc = "JEXaXnpj5oGYMjr1");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.show(s));
  }
  if (t_elseIf_15) {
  (s.pc = "Q1uCzGWd7W42cqzl");
  var t_infix_17 = (ok1(s, /* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo) && (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo === 1));
  ok1(s, t_infix_17);
  if (t_infix_17) {
  (t_elseIf_15 = false);
  (s.pc = "UoAkJ0Llr9HNQik5");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok3(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr, s.$x, s.$y) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.set_pos(s.$x, s.$y, s));
  (s.pc = "Q2UiBRZiwqYGdNo9");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.show(s));
  }
  }
  if (t_elseIf_15) {
  (s.pc = "ucZBywSVwsXGuOpI");
  var t_infix_18 = (ok1(s, /* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo) && (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo === 2));
  ok1(s, t_infix_18);
  if (t_infix_18) {
  (t_elseIf_15 = false);
  (s.pc = "haxV4NE256WkWujO");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok3(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp, s.$x, s.$y) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.set_pos(s.$x, s.$y, s));
  (s.pc = "BLK3AaMvzzNKoCkM");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.show(s));
  }
  }
  if (t_elseIf_15) {
  (s.pc = "xJuO2gSQ4aV1adFc");
  var t_infix_19 = (ok1(s, /* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo) && (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo === 3));
  ok1(s, t_infix_19);
  if (t_infix_19) {
  (s.pc = "n6TXI10Zyta1UxJm");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok3(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl, s.$x, s.$y) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.set_pos(s.$x, s.$y, s));
  (s.pc = "vE9pDaffvLmpEK4N");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.show(s));
  } else {
  (s.pc = "IJEbPD0fFsjxdhP6");
  null;
  }
  }
  (s.pc = "NaT7YDxjcu81nF44");
  return s.rt.enter(a_t1FWWQYo2sBFvZY3Y4Js5iP5(s, a_sK4NOdtzedkyOzsoOcpOAUVD$11));
}
cs.registerStep(a_sK4NOdtzedkyOzsoOcpOAUVD$1, 'a_sK4NOdtzedkyOzsoOcpOAUVD$1');

function a_sK4NOdtzedkyOzsoOcpOAUVD$11(s) {
  return s.rt.leave();
}
cs.registerStep(a_sK4NOdtzedkyOzsoOcpOAUVD$11, 'a_sK4NOdtzedkyOzsoOcpOAUVD$11');

/* ACTION: checkDirection */
function a_qvTcS4o0dmHowiuP67hVwkYP(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qvTcS4o0dmHowiuP67hVwkYP$0;
  s.name = "checkDirection";
  return s;
}
cs.registerAction("checkDirection", "qvTcS4o0dmHowiuP67hVwkYP", a_qvTcS4o0dmHowiuP67hVwkYP, true);

function a_qvTcS4o0dmHowiuP67hVwkYP$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xeJWAsnBB9hF5kod");
  var t_infix_1 = (ok2(s, /* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo, /* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f) && (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo === /* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "xS9VfMLkhVhBando");
  var t_libcall_2 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_qvTcS4o0dmHowiuP67hVwkYP$2, 10));
  } else {
  (s.pc = "BqkfZBAXxpfx38pE");
  var t_resumeCtx_17 = s.rt.getBlockingResumeCtx(a_qvTcS4o0dmHowiuP67hVwkYP$11);
  (ok1(s, /* wrong */ s.d.$wx2K9oDmDUbzx2o4t9a4VnOS) && /* wrong */ s.d.$wx2K9oDmDUbzx2o4t9a4VnOS.play(t_resumeCtx_17));
  return a_qvTcS4o0dmHowiuP67hVwkYP$11;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$1;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$0, 'a_qvTcS4o0dmHowiuP67hVwkYP$0');

function a_qvTcS4o0dmHowiuP67hVwkYP$2(s) {
  (s.pc = "xt1mycINyDFLeL3w");
  var t_infix_3 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm + 10));
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_infix_3);
  s.rt.logDataWrite();
  (s.pc = "r8fzVyBVjWWr3era");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_qvTcS4o0dmHowiuP67hVwkYP$3);
  (ok1(s, /* right */ s.d.$AcTeyqPXO8D0VIyTC4AyG72w) && /* right */ s.d.$AcTeyqPXO8D0VIyTC4AyG72w.play(t_resumeCtx_4));
  return a_qvTcS4o0dmHowiuP67hVwkYP$3;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$2, 'a_qvTcS4o0dmHowiuP67hVwkYP$2');

function a_qvTcS4o0dmHowiuP67hVwkYP$11(s) {
  (s.pc = "KxrN2mAq7kPNG0Tj");
  var t_infix_18 = (ok1(s, /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2) && (/* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2 + 1));
  (/* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2 = t_infix_18);
  s.rt.logDataWrite();
  var t_elseIf_19 = true;
  (s.pc = "N2oDVXIawi2BqdlD");
  var t_infix_20 = (ok1(s, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4) && (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 >= 100));
  ok1(s, t_infix_20);
  if (t_infix_20) {
  var t_elseIf_21 = true;
  (s.pc = "O5rg9dQo1e4lHB64");
  var t_infix_22 = (ok1(s, /* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad) && (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad === 2));
  ok1(s, t_infix_22);
  if (t_infix_22) {
  (s.pc = "EcupoCz7ZTbgRkOp");
  var t_libcall_23 = s.libs["game"]["remove life"](s);
  return s.rt.enter(t_libcall_23.invoke(t_libcall_23, a_qvTcS4o0dmHowiuP67hVwkYP$14, 1));
  } else {
  (s.pc = "wsoD84ETYYXToT1F");
  null;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$13;
  } else {
  (s.pc = "kRBGAG8OVcQ4UHeH");
  null;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$12;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$11, 'a_qvTcS4o0dmHowiuP67hVwkYP$11');

function a_qvTcS4o0dmHowiuP67hVwkYP$1(s) {
  (s.pc = "xnvhnl21VVSYfbwj");
  null;
  (s.pc = "xyEKJ45LCwN03zc3");
  var t_call_39 = lib.Math_.random(4, s);
  (/* allBirds */ s.d.$S20LDaED0mEDQg6212p9xtgo = t_call_39);
  s.rt.logDataWrite();
  (s.pc = "nU3uOgtuZJioFo9u");
  return s.rt.enter(a_sK4NOdtzedkyOzsoOcpOAUVD(s, a_qvTcS4o0dmHowiuP67hVwkYP$21));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$1, 'a_qvTcS4o0dmHowiuP67hVwkYP$1');

function a_qvTcS4o0dmHowiuP67hVwkYP$3(s) {
  var t_elseIf_5 = true;
  (s.pc = "a1F3FZygGylafDVA");
  var t_infix_6 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm > 200));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "WYyDPQFRD8mUuhP4");
  return s.rt.enter(a_UYZKhvVWgcbgE9jr7jpOr3Su(s, a_qvTcS4o0dmHowiuP67hVwkYP$5));
  } else {
  (s.pc = "z2UvxqwTINu5ieg2");
  null;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$4;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$3, 'a_qvTcS4o0dmHowiuP67hVwkYP$3');

function a_qvTcS4o0dmHowiuP67hVwkYP$14(s) {
  var t_actRes_24 = s.rt.returnedFrom.result;
  t_actRes_24;
  (s.pc = "m4lJHwXa486KO9Gy");
  var t_libcall_25 = s.libs["game"]["life"](s);
  return s.rt.enter(t_libcall_25.invoke(t_libcall_25, a_qvTcS4o0dmHowiuP67hVwkYP$15));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$14, 'a_qvTcS4o0dmHowiuP67hVwkYP$14');

function a_qvTcS4o0dmHowiuP67hVwkYP$13(s) {
  (s.pc = "qX63OT4tI0j1zdT4");
  var t_infix_27 = (ok1(s, /* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad) && (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad + 1));
  (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad = t_infix_27);
  s.rt.logDataWrite();
  return a_qvTcS4o0dmHowiuP67hVwkYP$12;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$13, 'a_qvTcS4o0dmHowiuP67hVwkYP$13');

function a_qvTcS4o0dmHowiuP67hVwkYP$12(s) {
  var t_elseIf_28 = true;
  (s.pc = "Wndkz8HxXu9rlfvf");
  var t_infix_29 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm === 0));
  ok1(s, t_infix_29);
  if (t_infix_29) {
  (s.pc = "GMIo7mxt7jBvSrWW");
  var t_libcall_30 = s.libs["game"]["remove life"](s);
  return s.rt.enter(t_libcall_30.invoke(t_libcall_30, a_qvTcS4o0dmHowiuP67hVwkYP$17, 1));
  } else {
  (s.pc = "dYKKt2feEyCLirMd");
  var t_infix_36 = (0 - 10);
  var t_libcall_37 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_37.invoke(t_libcall_37, a_qvTcS4o0dmHowiuP67hVwkYP$20, t_infix_36));
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$16;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$12, 'a_qvTcS4o0dmHowiuP67hVwkYP$12');

function a_qvTcS4o0dmHowiuP67hVwkYP$21(s) {
  (s.pc = "xkt8VDJqlMulsV81");
  var t_call_40 = lib.Time.now(s);
  (/* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3 = t_call_40);
  s.rt.logDataWrite();
  (s.pc = "l6v80T3CCqeTGanb");
  return s.rt.enter(a_x0upCuxioZlcbhHobn2kveNP(s, a_qvTcS4o0dmHowiuP67hVwkYP$22));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$21, 'a_qvTcS4o0dmHowiuP67hVwkYP$21');

function a_qvTcS4o0dmHowiuP67hVwkYP$5(s) {
  (s.pc = "NSKasIDh4g1kKOsb");
  var t_libcall_7 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_7.invoke(t_libcall_7, a_qvTcS4o0dmHowiuP67hVwkYP$6, 10));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$5, 'a_qvTcS4o0dmHowiuP67hVwkYP$5');

function a_qvTcS4o0dmHowiuP67hVwkYP$4(s) {
  (s.pc = "xbX56zg4KIGgWnbp");
  var t_infix_9 = (ok1(s, /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf) && (/* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf + 1));
  (/* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf = t_infix_9);
  s.rt.logDataWrite();
  var t_elseIf_10 = true;
  (s.pc = "x1wu4ZguRkLwZQ1b");
  var t_infix_11 = (ok1(s, /* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz) && (/* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz + 100));
  var t_infix_12 = (ok2(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm, t_infix_11) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm > t_infix_11));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  var t_elseIf_13 = true;
  (s.pc = "oNsmKn5ShBVBATKt");
  var t_infix_14 = (ok1(s, /* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs) && (/* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs === 1));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.pc = "GyXpUSmhcHIfE0FV");
  return s.rt.enter(a_CcD2wney4kaWCKQwXv0UiyDQ(s, a_qvTcS4o0dmHowiuP67hVwkYP$9));
  } else {
  (s.pc = "efSXFBKhJlxzmmki");
  null;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$8;
  } else {
  (s.pc = "XIYSHeeTN14cnJww");
  null;
  }
  return a_qvTcS4o0dmHowiuP67hVwkYP$7;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$4, 'a_qvTcS4o0dmHowiuP67hVwkYP$4');

function a_qvTcS4o0dmHowiuP67hVwkYP$15(s) {
  var t_actRes_26 = s.rt.returnedFrom.result;
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = t_actRes_26);
  s.rt.logDataWrite();
  (s.pc = "xgaQsIcsIsmjs2pQ");
  (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad = 0);
  s.rt.logDataWrite();
  return a_qvTcS4o0dmHowiuP67hVwkYP$13;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$15, 'a_qvTcS4o0dmHowiuP67hVwkYP$15');

function a_qvTcS4o0dmHowiuP67hVwkYP$17(s) {
  var t_actRes_31 = s.rt.returnedFrom.result;
  t_actRes_31;
  (s.pc = "k02WDab3aJt4tvZi");
  var t_libcall_32 = s.libs["game"]["life"](s);
  return s.rt.enter(t_libcall_32.invoke(t_libcall_32, a_qvTcS4o0dmHowiuP67hVwkYP$18));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$17, 'a_qvTcS4o0dmHowiuP67hVwkYP$17');

function a_qvTcS4o0dmHowiuP67hVwkYP$20(s) {
  (s.pc = "uVyJhkc9xQ44SyCX");
  var t_infix_38 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm - 10));
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_infix_38);
  s.rt.logDataWrite();
  (s.pc = "g1HHFe7EB9JPSh06");
  null;
  return a_qvTcS4o0dmHowiuP67hVwkYP$16;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$20, 'a_qvTcS4o0dmHowiuP67hVwkYP$20');

function a_qvTcS4o0dmHowiuP67hVwkYP$16(s) {
  return a_qvTcS4o0dmHowiuP67hVwkYP$1;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$16, 'a_qvTcS4o0dmHowiuP67hVwkYP$16');

function a_qvTcS4o0dmHowiuP67hVwkYP$22(s) {
  return s.rt.leave();
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$22, 'a_qvTcS4o0dmHowiuP67hVwkYP$22');

function a_qvTcS4o0dmHowiuP67hVwkYP$6(s) {
  (s.pc = "xU4fKUtbDvphZx4A");
  var t_infix_8 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm + 10));
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_infix_8);
  s.rt.logDataWrite();
  return a_qvTcS4o0dmHowiuP67hVwkYP$4;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$6, 'a_qvTcS4o0dmHowiuP67hVwkYP$6');

function a_qvTcS4o0dmHowiuP67hVwkYP$9(s) {
  return a_qvTcS4o0dmHowiuP67hVwkYP$8;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$9, 'a_qvTcS4o0dmHowiuP67hVwkYP$9');

function a_qvTcS4o0dmHowiuP67hVwkYP$8(s) {
  (s.pc = "bFrpppodpmmsKXz2");
  var t_infix_15 = (ok1(s, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4) && (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 + 1));
  (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 = t_infix_15);
  s.rt.logDataWrite();
  (s.pc = "JCVzSkShg9hgFMQ0");
  (/* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz = /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm);
  s.rt.logDataWrite();
  (s.pc = "OC6G2y4UMOyB8guj");
  return s.rt.enter(a_WieDq35LUPNpI5PuC6vsh0za(s, a_qvTcS4o0dmHowiuP67hVwkYP$10));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$8, 'a_qvTcS4o0dmHowiuP67hVwkYP$8');

function a_qvTcS4o0dmHowiuP67hVwkYP$7(s) {
  return a_qvTcS4o0dmHowiuP67hVwkYP$1;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$7, 'a_qvTcS4o0dmHowiuP67hVwkYP$7');

function a_qvTcS4o0dmHowiuP67hVwkYP$18(s) {
  var t_actRes_33 = s.rt.returnedFrom.result;
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = t_actRes_33);
  s.rt.logDataWrite();
  (s.pc = "fyrQCea3mRGqQWvj");
  var t_libcall_34 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_34.invoke(t_libcall_34, a_qvTcS4o0dmHowiuP67hVwkYP$19, 50));
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$18, 'a_qvTcS4o0dmHowiuP67hVwkYP$18');

function a_qvTcS4o0dmHowiuP67hVwkYP$10(s) {
  var t_actRes_16 = s.rt.returnedFrom.result;
  t_actRes_16;
  return a_qvTcS4o0dmHowiuP67hVwkYP$7;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$10, 'a_qvTcS4o0dmHowiuP67hVwkYP$10');

function a_qvTcS4o0dmHowiuP67hVwkYP$19(s) {
  (s.pc = "WZf1jwCxyn4X4Gse");
  var t_infix_35 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm + 50));
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_infix_35);
  s.rt.logDataWrite();
  return a_qvTcS4o0dmHowiuP67hVwkYP$16;
}
cs.registerStep(a_qvTcS4o0dmHowiuP67hVwkYP$19, 'a_qvTcS4o0dmHowiuP67hVwkYP$19');

/* ACTION: timer */
function a_t1FWWQYo2sBFvZY3Y4Js5iP5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_t1FWWQYo2sBFvZY3Y4Js5iP5$0;
  s.name = "timer";
  return s;
}
cs.registerAction("timer", "t1FWWQYo2sBFvZY3Y4Js5iP5", a_t1FWWQYo2sBFvZY3Y4Js5iP5, false);

function a_t1FWWQYo2sBFvZY3Y4Js5iP5$0(s) {
  (s.pc = "xjiiIwtVm0S84oOs");
  var t_call_0 = lib.Time.now(s);
  (/* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3 = t_call_0);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_t1FWWQYo2sBFvZY3Y4Js5iP5$0, 'a_t1FWWQYo2sBFvZY3Y4Js5iP5$0');

/* ACTION: gameloop */
function a_xiJOZlQsF4O7pgYQde20Q0qX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xiJOZlQsF4O7pgYQde20Q0qX$0;
  s.name = "gameloop";
  s.$timeDiffrence = undefined;
  return s;
}
cs.registerAction("gameloop", "xiJOZlQsF4O7pgYQde20Q0qX", a_xiJOZlQsF4O7pgYQde20Q0qX, true);
cs.registerEventHandler("gameloop", null, a_xiJOZlQsF4O7pgYQde20Q0qX);

function a_xiJOZlQsF4O7pgYQde20Q0qX$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "AboQlNFAdGT4dChK");
  var t_infix_1 = (ok1(s, /* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc) && (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  s.t_elseIf_2 = true;
  (s.pc = "J4OwnNM4Rin4xOwN");
  var t_call_3 = lib.Senses.is_key_pressed("right", s);
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.t_elseIf_2 = false);
  var t_elseIf_4 = true;
  (s.pc = "eSThgSoIDS2czhQx");
  ok1(s, /* Pressed */ s.d.$tXCGvhwGJoK4GSew);
  if (/* Pressed */ s.d.$tXCGvhwGJoK4GSew) {
  (s.pc = "Cti6fG0kMa5bpApp");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 3);
  s.rt.logDataWrite();
  (s.pc = "anVvNIhiRXUAh8bs");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$4));
  } else {
  (s.pc = "DMFWSlNPR1CGmLju");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$3;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$2;
  } else {
  (s.pc = "hzQbLqcN6B490lNg");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$1;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$0, 'a_xiJOZlQsF4O7pgYQde20Q0qX$0');

function a_xiJOZlQsF4O7pgYQde20Q0qX$4(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  return a_xiJOZlQsF4O7pgYQde20Q0qX$3;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$4, 'a_xiJOZlQsF4O7pgYQde20Q0qX$4');

function a_xiJOZlQsF4O7pgYQde20Q0qX$3(s) {
  (s.pc = "bwCtqxObcwG20OnB");
  (/* Pressed */ s.d.$tXCGvhwGJoK4GSew = false);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$2;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$3, 'a_xiJOZlQsF4O7pgYQde20Q0qX$3');

function a_xiJOZlQsF4O7pgYQde20Q0qX$2(s) {
  if (s.t_elseIf_2) {
  (s.pc = "Bv7d2OEC8XIBd2ZV");
  var t_call_6 = lib.Senses.is_key_pressed("left", s);
  ok1(s, t_call_6);
  if (t_call_6) {
  (s.t_elseIf_2 = false);
  var t_elseIf_7 = true;
  (s.pc = "kfeOFmxDTpyTQBOf");
  ok1(s, /* Pressed */ s.d.$tXCGvhwGJoK4GSew);
  if (/* Pressed */ s.d.$tXCGvhwGJoK4GSew) {
  (s.pc = "zEEAlvRwFEV2ynau");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 2);
  s.rt.logDataWrite();
  (s.pc = "xaAH55uH6ViWJbWz");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$7));
  } else {
  (s.pc = "POuVQhxkaCRh4lda");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$6;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$5;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$8;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$2, 'a_xiJOZlQsF4O7pgYQde20Q0qX$2');

function a_xiJOZlQsF4O7pgYQde20Q0qX$1(s) {
  var t_elseIf_15 = true;
  (s.pc = "KtpJTDlr9ZWJMbfD");
  var t_infix_16 = (ok1(s, /* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA) && (/* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA === 1));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (s.pc = "lvAynsbCHkJ8J1HE");
  var t_call_17 = lib.Time.now(s);
  var t_call_18 = (ok2(s, t_call_17, /* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3) && t_call_17.subtract(/* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3, s));
  (s.$timeDiffrence = t_call_18);
  (s.pc = "GJH16zMX8ZL3K0Qp");
  var t_call_19 = (ok1(s, s.$timeDiffrence) && lib.Math_.floor(s.$timeDiffrence, s));
  (s.$timeDiffrence = t_call_19);
  (s.pc = "xnw3GiubKQ0gGGKN");
  return s.rt.enter(a_Y4iTCsJPct5D6i54Eqh7E8al(s, a_xiJOZlQsF4O7pgYQde20Q0qX$18));
  } else {
  (s.pc = "xGfBNJkmUyzxyvpy");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$17;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$1, 'a_xiJOZlQsF4O7pgYQde20Q0qX$1');

function a_xiJOZlQsF4O7pgYQde20Q0qX$7(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_xiJOZlQsF4O7pgYQde20Q0qX$6;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$7, 'a_xiJOZlQsF4O7pgYQde20Q0qX$7');

function a_xiJOZlQsF4O7pgYQde20Q0qX$6(s) {
  (s.pc = "ovJUpdP4U1eI1loo");
  (/* Pressed */ s.d.$tXCGvhwGJoK4GSew = false);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$5;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$6, 'a_xiJOZlQsF4O7pgYQde20Q0qX$6');

function a_xiJOZlQsF4O7pgYQde20Q0qX$5(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$8;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$5, 'a_xiJOZlQsF4O7pgYQde20Q0qX$5');

function a_xiJOZlQsF4O7pgYQde20Q0qX$8(s) {
  if (s.t_elseIf_2) {
  (s.pc = "mzVnLMD1gjYA4oHA");
  var t_call_9 = lib.Senses.is_key_pressed("down", s);
  ok1(s, t_call_9);
  if (t_call_9) {
  (s.t_elseIf_2 = false);
  var t_elseIf_10 = true;
  (s.pc = "v6cLyeuoSZN5uP1U");
  ok1(s, /* Pressed */ s.d.$tXCGvhwGJoK4GSew);
  if (/* Pressed */ s.d.$tXCGvhwGJoK4GSew) {
  (s.pc = "K2x8m4u81dHXKqmg");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 0);
  s.rt.logDataWrite();
  (s.pc = "dWmvKm6VmuXM494J");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$11));
  } else {
  (s.pc = "i44ga9Ynt44Qjzq2");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$10;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$9;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$12;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$8, 'a_xiJOZlQsF4O7pgYQde20Q0qX$8');

function a_xiJOZlQsF4O7pgYQde20Q0qX$18(s) {
  (s.pc = "x9IUJlqc6ujxo0gz");
  return a_xiJOZlQsF4O7pgYQde20Q0qX$19;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$18, 'a_xiJOZlQsF4O7pgYQde20Q0qX$18');

function a_xiJOZlQsF4O7pgYQde20Q0qX$17(s) {
  return s.rt.leave();
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$17, 'a_xiJOZlQsF4O7pgYQde20Q0qX$17');

function a_xiJOZlQsF4O7pgYQde20Q0qX$11(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  return a_xiJOZlQsF4O7pgYQde20Q0qX$10;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$11, 'a_xiJOZlQsF4O7pgYQde20Q0qX$11');

function a_xiJOZlQsF4O7pgYQde20Q0qX$10(s) {
  (s.pc = "bNOvwbYtQqsYFL67");
  (/* Pressed */ s.d.$tXCGvhwGJoK4GSew = false);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$9;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$10, 'a_xiJOZlQsF4O7pgYQde20Q0qX$10');

function a_xiJOZlQsF4O7pgYQde20Q0qX$9(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$12;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$9, 'a_xiJOZlQsF4O7pgYQde20Q0qX$9');

function a_xiJOZlQsF4O7pgYQde20Q0qX$12(s) {
  if (s.t_elseIf_2) {
  (s.pc = "x1dHDeHA2TPlSyJO");
  var t_call_12 = lib.Senses.is_key_pressed("up", s);
  ok1(s, t_call_12);
  if (t_call_12) {
  var t_elseIf_13 = true;
  (s.pc = "xRqOwzFT7x8iqrSp");
  ok1(s, /* Pressed */ s.d.$tXCGvhwGJoK4GSew);
  if (/* Pressed */ s.d.$tXCGvhwGJoK4GSew) {
  (s.pc = "X3CjvEnU2RVk8hPZ");
  (/* buttonDirection */ s.d.$xEStMTZeWHxa4XQnJzkCs14f = 1);
  s.rt.logDataWrite();
  (s.pc = "MbjcmsjZvRAzgeh9");
  return s.rt.enter(a_qvTcS4o0dmHowiuP67hVwkYP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$15));
  } else {
  (s.pc = "xAv51NpSv4HCxds7");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$14;
  } else {
  (s.pc = "xo2a1Qh86Fi5KVG9");
  (/* Pressed */ s.d.$tXCGvhwGJoK4GSew = true);
  s.rt.logDataWrite();
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$13;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$16;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$12, 'a_xiJOZlQsF4O7pgYQde20Q0qX$12');

function a_xiJOZlQsF4O7pgYQde20Q0qX$19(s) {
  var t_infix_20 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA <= 0));
  if (t_infix_20) {
  var t_elseIf_21 = true;
  (s.pc = "xZbB5u7H9BzmeFHV");
  var t_infix_22 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA < 0));
  ok1(s, t_infix_22);
  if (t_infix_22) {
  (t_elseIf_21 = false);
  (s.pc = "X8f2VePA8JqewTtN");
  var t_infix_23 = (0 - 1);
  var t_infix_24 = (ok2(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, t_infix_23) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA * t_infix_23));
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_infix_24);
  s.rt.logDataWrite();
  }
  if (t_elseIf_21) {
  (s.pc = "xA1j9Aqv50sXh2ex");
  var t_infix_25 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA === 0));
  ok1(s, t_infix_25);
  if (t_infix_25) {
  var t_elseIf_26 = true;
  (s.pc = "bZ7Ue31JaMzf4uOf");
  var t_infix_27 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_27);
  if (t_infix_27) {
  (s.pc = "rriMOAnP22cnU48M");
  var t_resumeCtx_28 = s.rt.getBlockingResumeCtx(a_xiJOZlQsF4O7pgYQde20Q0qX$24);
  var t_call_29 = lib.Wall.ask_number("You can\u0027t enter 0", t_resumeCtx_28);
  return a_xiJOZlQsF4O7pgYQde20Q0qX$24;
  } else {
  (s.pc = "x4ox026c3deHxRVb");
  var t_resumeCtx_31 = s.rt.getBlockingResumeCtx(a_xiJOZlQsF4O7pgYQde20Q0qX$25);
  var t_call_32 = lib.Wall.ask_number("\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u0627\u062f\u062e\u0627\u0644 0", t_resumeCtx_31);
  return a_xiJOZlQsF4O7pgYQde20Q0qX$25;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$23;
  } else {
  (s.pc = "bZ41Eno4X2rf0cAa");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$22;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$27;
  }
  (s.pc = "DpYnikpCaO4MSK6G");
  return a_xiJOZlQsF4O7pgYQde20Q0qX$28;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$19, 'a_xiJOZlQsF4O7pgYQde20Q0qX$19');

function a_xiJOZlQsF4O7pgYQde20Q0qX$15(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  return a_xiJOZlQsF4O7pgYQde20Q0qX$14;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$15, 'a_xiJOZlQsF4O7pgYQde20Q0qX$15');

function a_xiJOZlQsF4O7pgYQde20Q0qX$14(s) {
  (s.pc = "R8xdvXmydEy2dUCx");
  (/* Pressed */ s.d.$tXCGvhwGJoK4GSew = false);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$13;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$14, 'a_xiJOZlQsF4O7pgYQde20Q0qX$14');

function a_xiJOZlQsF4O7pgYQde20Q0qX$13(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$16;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$13, 'a_xiJOZlQsF4O7pgYQde20Q0qX$13');

function a_xiJOZlQsF4O7pgYQde20Q0qX$16(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$1;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$16, 'a_xiJOZlQsF4O7pgYQde20Q0qX$16');

function a_xiJOZlQsF4O7pgYQde20Q0qX$24(s) {
  var t_pauseRes_30 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_30);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$23;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$24, 'a_xiJOZlQsF4O7pgYQde20Q0qX$24');

function a_xiJOZlQsF4O7pgYQde20Q0qX$25(s) {
  var t_pauseRes_33 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_33);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$23;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$25, 'a_xiJOZlQsF4O7pgYQde20Q0qX$25');

function a_xiJOZlQsF4O7pgYQde20Q0qX$23(s) {
  (s.pc = "PcbfiGF1trK4Kfwc");
  return s.rt.enter(a_Y4iTCsJPct5D6i54Eqh7E8al(s, a_xiJOZlQsF4O7pgYQde20Q0qX$26));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$23, 'a_xiJOZlQsF4O7pgYQde20Q0qX$23');

function a_xiJOZlQsF4O7pgYQde20Q0qX$22(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$27;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$22, 'a_xiJOZlQsF4O7pgYQde20Q0qX$22');

function a_xiJOZlQsF4O7pgYQde20Q0qX$27(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$19;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$27, 'a_xiJOZlQsF4O7pgYQde20Q0qX$27');

function a_xiJOZlQsF4O7pgYQde20Q0qX$28(s) {
  var t_infix_34 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA > 10));
  if (t_infix_34) {
  var t_elseIf_35 = true;
  (s.pc = "BwVrEExrQ72aCm2k");
  var t_infix_36 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_36);
  if (t_infix_36) {
  (s.pc = "pF2IMtnAwRpMYOGO");
  var t_resumeCtx_37 = s.rt.getBlockingResumeCtx(a_xiJOZlQsF4O7pgYQde20Q0qX$31);
  var t_call_38 = lib.Wall.ask_number("You can\u0027t put a number that bigger than 10", t_resumeCtx_37);
  return a_xiJOZlQsF4O7pgYQde20Q0qX$31;
  } else {
  (s.pc = "IR5NdiPdBH1hFhm7");
  var t_resumeCtx_40 = s.rt.getBlockingResumeCtx(a_xiJOZlQsF4O7pgYQde20Q0qX$32);
  var t_call_41 = lib.Wall.ask_number("\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u0627\u062f\u062e\u0627\u0644 \u0631\u0642\u0645 \u0627\u0643\u0628\u0631 \u0645\u0646 10", t_resumeCtx_40);
  return a_xiJOZlQsF4O7pgYQde20Q0qX$32;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$30;
  }
  (s.pc = "xV3R5GpegdS8J46M");
  var t_infix_43 = (ok2(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s.$timeDiffrence) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA - s.$timeDiffrence));
  (/* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp = t_infix_43);
  s.rt.logDataWrite();
  var t_elseIf_44 = true;
  (s.pc = "lDOAe06Sqh3fbZAI");
  var t_infix_45 = (ok1(s, /* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp) && (/* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp <= 0));
  var t_lazy_46 = t_infix_45;
  if ((ok1(s, t_lazy_46) && t_lazy_46)) {
  var t_infix_47 = (ok1(s, /* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc) && (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc === 0));
  (t_lazy_46 = t_infix_47);
  }
  ok1(s, t_lazy_46);
  if (t_lazy_46) {
  (s.pc = "Jht2D3eoB1ImcjRp");
  return s.rt.enter(a_t1FWWQYo2sBFvZY3Y4Js5iP5(s, a_xiJOZlQsF4O7pgYQde20Q0qX$36));
  } else {
  (s.pc = "xkJp9p1Oga6rqaCS");
  null;
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$35;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$28, 'a_xiJOZlQsF4O7pgYQde20Q0qX$28');

function a_xiJOZlQsF4O7pgYQde20Q0qX$26(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$22;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$26, 'a_xiJOZlQsF4O7pgYQde20Q0qX$26');

function a_xiJOZlQsF4O7pgYQde20Q0qX$31(s) {
  var t_pauseRes_39 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_39);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$30;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$31, 'a_xiJOZlQsF4O7pgYQde20Q0qX$31');

function a_xiJOZlQsF4O7pgYQde20Q0qX$32(s) {
  var t_pauseRes_42 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_42);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$30;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$32, 'a_xiJOZlQsF4O7pgYQde20Q0qX$32');

function a_xiJOZlQsF4O7pgYQde20Q0qX$30(s) {
  (s.pc = "kNP5dzbx0u7ZOSpM");
  return s.rt.enter(a_Y4iTCsJPct5D6i54Eqh7E8al(s, a_xiJOZlQsF4O7pgYQde20Q0qX$33));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$30, 'a_xiJOZlQsF4O7pgYQde20Q0qX$30');

function a_xiJOZlQsF4O7pgYQde20Q0qX$36(s) {
  var t_elseIf_48 = true;
  (s.pc = "jHOjqJTjdgTmX9Xf");
  var t_infix_49 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm === 0));
  ok1(s, t_infix_49);
  if (t_infix_49) {
  (s.pc = "xCT3G77bm5v3SE1j");
  var t_call_50 = lib.Time.now(s);
  var t_call_51 = (ok2(s, t_call_50, /* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3) && t_call_50.subtract(/* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3, s));
  (s.$timeDiffrence = t_call_51);
  (s.pc = "bPI5BYDouiK6wun1");
  var t_call_52 = (ok1(s, s.$timeDiffrence) && lib.Math_.floor(s.$timeDiffrence, s));
  (s.$timeDiffrence = t_call_52);
  (s.pc = "yDhdaK5Lms4iynb5");
  var t_infix_53 = (ok2(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s.$timeDiffrence) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA - s.$timeDiffrence));
  (/* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp = t_infix_53);
  s.rt.logDataWrite();
  (s.pc = "Stf9B51sHyUbpNiC");
  var t_libcall_54 = s.libs["game"]["remove life"](s);
  return s.rt.enter(t_libcall_54.invoke(t_libcall_54, a_xiJOZlQsF4O7pgYQde20Q0qX$38, 1));
  } else {
  (s.pc = "udN5xj1iBNfr4XiJ");
  var t_call_60 = lib.Time.now(s);
  var t_call_61 = (ok2(s, t_call_60, /* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3) && t_call_60.subtract(/* startTime */ s.d.$pqY45PwpGe6EG6Kk36rvvPm3, s));
  (s.$timeDiffrence = t_call_61);
  (s.pc = "xkHCI1MonAMU2mtm");
  var t_call_62 = (ok1(s, s.$timeDiffrence) && lib.Math_.floor(s.$timeDiffrence, s));
  (s.$timeDiffrence = t_call_62);
  (s.pc = "JQoT5l57q3cqWKoX");
  var t_infix_63 = (ok2(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s.$timeDiffrence) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA - s.$timeDiffrence));
  (/* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp = t_infix_63);
  s.rt.logDataWrite();
  (s.pc = "XP4PsFoTpX6C7M65");
  return s.rt.enter(a_sK4NOdtzedkyOzsoOcpOAUVD(s, a_xiJOZlQsF4O7pgYQde20Q0qX$42));
  }
  return a_xiJOZlQsF4O7pgYQde20Q0qX$37;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$36, 'a_xiJOZlQsF4O7pgYQde20Q0qX$36');

function a_xiJOZlQsF4O7pgYQde20Q0qX$35(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$17;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$35, 'a_xiJOZlQsF4O7pgYQde20Q0qX$35');

function a_xiJOZlQsF4O7pgYQde20Q0qX$33(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$28;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$33, 'a_xiJOZlQsF4O7pgYQde20Q0qX$33');

function a_xiJOZlQsF4O7pgYQde20Q0qX$38(s) {
  var t_actRes_55 = s.rt.returnedFrom.result;
  t_actRes_55;
  (s.pc = "XSHmnK4JdBSXCgqK");
  var t_libcall_56 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_56.invoke(t_libcall_56, a_xiJOZlQsF4O7pgYQde20Q0qX$39, 60));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$38, 'a_xiJOZlQsF4O7pgYQde20Q0qX$38');

function a_xiJOZlQsF4O7pgYQde20Q0qX$42(s) {
  (s.pc = "xVjXlsB1uKhTT34T");
  var t_infix_64 = (0 - 10);
  var t_libcall_65 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_65.invoke(t_libcall_65, a_xiJOZlQsF4O7pgYQde20Q0qX$43, t_infix_64));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$42, 'a_xiJOZlQsF4O7pgYQde20Q0qX$42');

function a_xiJOZlQsF4O7pgYQde20Q0qX$37(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$35;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$37, 'a_xiJOZlQsF4O7pgYQde20Q0qX$37');

function a_xiJOZlQsF4O7pgYQde20Q0qX$39(s) {
  (s.pc = "IYuaGGhWQNotA9f4");
  var t_libcall_57 = s.libs["game"]["life"](s);
  return s.rt.enter(t_libcall_57.invoke(t_libcall_57, a_xiJOZlQsF4O7pgYQde20Q0qX$40));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$39, 'a_xiJOZlQsF4O7pgYQde20Q0qX$39');

function a_xiJOZlQsF4O7pgYQde20Q0qX$43(s) {
  (s.pc = "piAW74Bffb7B6ySP");
  var t_libcall_66 = s.libs["game"]["score"](s);
  return s.rt.enter(t_libcall_66.invoke(t_libcall_66, a_xiJOZlQsF4O7pgYQde20Q0qX$44));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$43, 'a_xiJOZlQsF4O7pgYQde20Q0qX$43');

function a_xiJOZlQsF4O7pgYQde20Q0qX$40(s) {
  var t_actRes_58 = s.rt.returnedFrom.result;
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = t_actRes_58);
  s.rt.logDataWrite();
  (s.pc = "e1IB2h22MiLYW44b");
  return s.rt.enter(a_x0upCuxioZlcbhHobn2kveNP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$41));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$40, 'a_xiJOZlQsF4O7pgYQde20Q0qX$40');

function a_xiJOZlQsF4O7pgYQde20Q0qX$44(s) {
  var t_actRes_67 = s.rt.returnedFrom.result;
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_actRes_67);
  s.rt.logDataWrite();
  (s.pc = "Jy0jSDuCkaIVkDkR");
  var t_libcall_68 = s.libs["game"]["life"](s);
  return s.rt.enter(t_libcall_68.invoke(t_libcall_68, a_xiJOZlQsF4O7pgYQde20Q0qX$45));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$44, 'a_xiJOZlQsF4O7pgYQde20Q0qX$44');

function a_xiJOZlQsF4O7pgYQde20Q0qX$41(s) {
  (s.pc = "Tyex0SKETFtObOdb");
  var t_infix_59 = (ok1(s, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm) && (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm + 50));
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_infix_59);
  s.rt.logDataWrite();
  return a_xiJOZlQsF4O7pgYQde20Q0qX$37;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$41, 'a_xiJOZlQsF4O7pgYQde20Q0qX$41');

function a_xiJOZlQsF4O7pgYQde20Q0qX$45(s) {
  var t_actRes_69 = s.rt.returnedFrom.result;
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = t_actRes_69);
  s.rt.logDataWrite();
  (s.pc = "ZvJ5k2m23QO5SZ12");
  return s.rt.enter(a_x0upCuxioZlcbhHobn2kveNP(s, a_xiJOZlQsF4O7pgYQde20Q0qX$46));
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$45, 'a_xiJOZlQsF4O7pgYQde20Q0qX$45');

function a_xiJOZlQsF4O7pgYQde20Q0qX$46(s) {
  return a_xiJOZlQsF4O7pgYQde20Q0qX$37;
}
cs.registerStep(a_xiJOZlQsF4O7pgYQde20Q0qX$46, 'a_xiJOZlQsF4O7pgYQde20Q0qX$46');

/* ACTION: lvl2 */
function a_UYZKhvVWgcbgE9jr7jpOr3Su(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_UYZKhvVWgcbgE9jr7jpOr3Su$0;
  s.name = "lvl2";
  return s;
}
cs.registerAction("lvl2", "UYZKhvVWgcbgE9jr7jpOr3Su", a_UYZKhvVWgcbgE9jr7jpOr3Su, false);

function a_UYZKhvVWgcbgE9jr7jpOr3Su$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xI2NnkcH7DaW5Iwb");
  var t_infix_1 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "MH5j8pnhZqq2vHxI");
  (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK = 1);
  s.rt.logDataWrite();
  var t_elseIf_2 = true;
  (s.pc = "xhHVftUxW49tTmSX");
  var t_infix_3 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "XptOJBKDlzPNj0xx");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_UYZKhvVWgcbgE9jr7jpOr3Su$3);
  lib.Wall.prompt("Congratulations !!\u000aYou reached level \u00222\u0022\u000a----------------------------------------------------------------\u000aHere we have the same main idea with a small changes .\u000a----------------------------------------------------------------\u000a \u003eYou have to detect the direction for most triangles of the picture  \u000a\u003eYou have to select the opposite direction\u000a\u003eIf your score reaches 0 \u002c you\u0027ll lose a life in exchange for 50 points \u000a----------------------------------------------------------------\u000aNote \u003a your score will be multiplied by 2", t_resumeCtx_4);
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$3;
  } else {
  (s.pc = "SmY55Zs2H1IWdR51");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_UYZKhvVWgcbgE9jr7jpOr3Su$4);
  lib.Wall.prompt("\u0645\u0628\u0631\u0648\u0643 ! \u000a\u0644\u0642\u062f \u0648\u0635\u0644\u062a \u0644\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629\u000a----------------------------------------------------------------\u000a\u0646\u062d\u0646 \u0646\u0645\u062a\u0644\u0643 \u0646\u0641\u0633 \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0647\u0646\u0627 \u0645\u0639 \u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0628\u0633\u064a\u0637\u0629\u000a----------------------------------------------------------------\u000a\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062d\u062f\u062f \u0627\u062a\u062c\u0627\u0647 \u0645\u0639\u0638\u0645 \u0627\u0644\u0637\u064a\u0648\u0631 \u0641\u0649 \u0627\u0644\u0635\u0648\u0631\u0629\u003c\u000a\u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062e\u062a\u0627\u0631 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0645\u0639\u0627\u0643\u0633 \u003c\u000a\u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 20 \u0646\u0642\u0635\u0629 \u0639\u0646 \u0643\u0644 \u0627\u062c\u0627\u0628\u0629 \u0635\u062d\u064a\u062d\u0629\u003c\u000a\u0644\u0648 \u0648\u0635\u0644\u062a \u0646\u0642\u0627\u0637\u0643 \u0644\u0644\u0635\u0641\u0631 \u0633\u062a\u0628\u0627\u062f\u0644 \u062d\u064a\u0627\u0629 \u0645\u0646 \u062d\u064a\u0648\u0627\u062a\u0643 \u062850 \u0646\u0642\u0637\u0629\u003c\u000a\u0627\u0644\u0644\u0639\u0628\u0629 \u0633\u062a\u0646\u062a\u0647\u0649 \u0628\u0645\u062c\u0631\u062f \u0648\u0635\u0648\u0644 \u062d\u064a\u0648\u0627\u062a\u0643 \u0644\u0644\u0635\u0641\u0631\u003c\u000a----------------------------------------------------------------\u000a\u0645\u0644\u0627\u062d\u0638\u0629\u003a \u0646\u0642\u0627\u0637\u0643 \u0627\u0644\u062a\u0649 \u062a\u0643\u0633\u0628\u0647\u0627 \u0633\u062a\u062a\u0636\u0627\u0639\u0641", t_resumeCtx_5);
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$4;
  }
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$2;
  } else {
  (s.pc = "C9q2hgxF3bffPulp");
  null;
  }
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$1;
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$0, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$0');

function a_UYZKhvVWgcbgE9jr7jpOr3Su$3(s) {
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$2;
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$3, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$3');

function a_UYZKhvVWgcbgE9jr7jpOr3Su$4(s) {
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$2;
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$4, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$4');

function a_UYZKhvVWgcbgE9jr7jpOr3Su$2(s) {
  return a_UYZKhvVWgcbgE9jr7jpOr3Su$1;
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$2, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$2');

function a_UYZKhvVWgcbgE9jr7jpOr3Su$1(s) {
  (s.pc = "xxWf1IoUJVbPnVZZ");
  return s.rt.enter(a_iOC0hwvLjrZoG8j6hD658X77(s, a_UYZKhvVWgcbgE9jr7jpOr3Su$5));
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$1, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$1');

function a_UYZKhvVWgcbgE9jr7jpOr3Su$5(s) {
  return s.rt.leave();
}
cs.registerStep(a_UYZKhvVWgcbgE9jr7jpOr3Su$5, 'a_UYZKhvVWgcbgE9jr7jpOr3Su$5');

cs.registerArtResource("Sound", "$AcTeyqPXO8D0VIyTC4AyG72w", ".\u002fart\u002fl0_AcTeyqPXO8D0VIyTC4AyG72w");
cs.registerArtResource("Sound", "$wx2K9oDmDUbzx2o4t9a4VnOS", ".\u002fart\u002fl0_wx2K9oDmDUbzx2o4t9a4VnOS");
cs.registerArtResource("Picture", "$IHMiy5VQVa1ERjPHixGu4wam", ".\u002fart\u002fl0_IHMiy5VQVa1ERjPHixGu4wam");
/* ACTION: Speed2 */
function a_Y4iTCsJPct5D6i54Eqh7E8al(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Y4iTCsJPct5D6i54Eqh7E8al$0;
  s.name = "Speed2";
  return s;
}
cs.registerAction("Speed2", "Y4iTCsJPct5D6i54Eqh7E8al", a_Y4iTCsJPct5D6i54Eqh7E8al, false);

function a_Y4iTCsJPct5D6i54Eqh7E8al$0(s) {
  (s.pc = "fpFEWH7T9bWjJuv2");
  return a_Y4iTCsJPct5D6i54Eqh7E8al$1;
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$0, 'a_Y4iTCsJPct5D6i54Eqh7E8al$0');

function a_Y4iTCsJPct5D6i54Eqh7E8al$1(s) {
  var t_call_0 = lib.Boolean_.equals((/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA == undefined), true, s);
  if (t_call_0) {
  var t_elseIf_1 = true;
  (s.pc = "syLCQ5pPhAtNb9NC");
  true;
  if ((/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA == undefined)) {
  var t_elseIf_2 = true;
  (s.pc = "xRBymbdavyA83BHL");
  var t_infix_3 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "AWtqsfhrEdTvccQR");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_Y4iTCsJPct5D6i54Eqh7E8al$5);
  var t_call_5 = lib.Wall.ask_number("You have to enter a number", t_resumeCtx_4);
  return a_Y4iTCsJPct5D6i54Eqh7E8al$5;
  } else {
  (s.pc = "n8bNuNQ2Lno49cQF");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_Y4iTCsJPct5D6i54Eqh7E8al$6);
  var t_call_8 = lib.Wall.ask_number("\u064a\u062c\u0628 \u0639\u0644\u064a\u0643 \u0627\u0646 \u062a\u062f\u062e\u0644 \u0631\u0642\u0645", t_resumeCtx_7);
  return a_Y4iTCsJPct5D6i54Eqh7E8al$6;
  }
  return a_Y4iTCsJPct5D6i54Eqh7E8al$4;
  } else {
  (s.pc = "ogl2Q8Ajm4tdEE6G");
  null;
  }
  return a_Y4iTCsJPct5D6i54Eqh7E8al$3;
  }
  (s.pc = "w0251JOt4avPlNky");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$1, 'a_Y4iTCsJPct5D6i54Eqh7E8al$1');

function a_Y4iTCsJPct5D6i54Eqh7E8al$5(s) {
  var t_pauseRes_6 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_6);
  s.rt.logDataWrite();
  return a_Y4iTCsJPct5D6i54Eqh7E8al$4;
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$5, 'a_Y4iTCsJPct5D6i54Eqh7E8al$5');

function a_Y4iTCsJPct5D6i54Eqh7E8al$6(s) {
  var t_pauseRes_9 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_9);
  s.rt.logDataWrite();
  return a_Y4iTCsJPct5D6i54Eqh7E8al$4;
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$6, 'a_Y4iTCsJPct5D6i54Eqh7E8al$6');

function a_Y4iTCsJPct5D6i54Eqh7E8al$4(s) {
  return a_Y4iTCsJPct5D6i54Eqh7E8al$3;
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$4, 'a_Y4iTCsJPct5D6i54Eqh7E8al$4');

function a_Y4iTCsJPct5D6i54Eqh7E8al$3(s) {
  return a_Y4iTCsJPct5D6i54Eqh7E8al$1;
}
cs.registerStep(a_Y4iTCsJPct5D6i54Eqh7E8al$3, 'a_Y4iTCsJPct5D6i54Eqh7E8al$3');

/* ACTION: updateGameSpeed2 */
function a_CcD2wney4kaWCKQwXv0UiyDQ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_CcD2wney4kaWCKQwXv0UiyDQ$0;
  s.name = "updateGameSpeed2";
  return s;
}
cs.registerAction("updateGameSpeed2", "CcD2wney4kaWCKQwXv0UiyDQ", a_CcD2wney4kaWCKQwXv0UiyDQ, false);

function a_CcD2wney4kaWCKQwXv0UiyDQ$0(s) {
  (s.pc = "xPzfGcH2u4iHsS3T");
  var t_infix_0 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA - 1));
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_infix_0);
  s.rt.logDataWrite();
  (s.pc = "AnCh2ZEU9DSSiGHH");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s);
  }
  s.t_elseIf_1 = true;
  (s.pc = "ApkHrS1CraIuk012");
  var t_infix_2 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA === 1));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.t_elseIf_1 = false);
  var t_elseIf_3 = true;
  (s.pc = "NqLfiCjK4OzTt247");
  var t_infix_4 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "DmzTqzckauIwoLXC");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$4);
  lib.Wall.prompt("Now you reach the maximum speed \u002c pay attention ", t_resumeCtx_5);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$4;
  } else {
  (s.pc = "xAf6oEZv1KrMh2ql");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$5);
  lib.Wall.prompt("\u0644\u0642\u062f \u0648\u0635\u0644\u062a \u0627\u0644\u0627\u0646 \u0644\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 . \u0631\u0643\u0632 \u0627\u0643\u062b\u0631 ", t_resumeCtx_6);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$5;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$3;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$2;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$0, 'a_CcD2wney4kaWCKQwXv0UiyDQ$0');

function a_CcD2wney4kaWCKQwXv0UiyDQ$4(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$3;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$4, 'a_CcD2wney4kaWCKQwXv0UiyDQ$4');

function a_CcD2wney4kaWCKQwXv0UiyDQ$5(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$3;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$5, 'a_CcD2wney4kaWCKQwXv0UiyDQ$5');

function a_CcD2wney4kaWCKQwXv0UiyDQ$3(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$2;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$3, 'a_CcD2wney4kaWCKQwXv0UiyDQ$3');

function a_CcD2wney4kaWCKQwXv0UiyDQ$2(s) {
  if (s.t_elseIf_1) {
  (s.pc = "CUonE2CxdPMdTamf");
  var t_infix_7 = (ok1(s, /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA) && (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA === 0));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (s.pc = "Q47Emt2eS3IZ5dSs");
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = 1);
  s.rt.logDataWrite();
  var t_elseIf_8 = true;
  (s.pc = "olbgNNdbrVi3jRKO");
  var t_infix_9 = (ok1(s, /* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW) && (/* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW === 1));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  var t_elseIf_10 = true;
  (s.pc = "teXuL4zmKxOP8HE8");
  var t_infix_11 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.pc = "b3cJuIDh7JcS78RH");
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$9);
  lib.Wall.prompt("You have just beat the maximum speed  .\u000aCongratulations ! ", t_resumeCtx_12);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$9;
  } else {
  (s.pc = "forPJoI6CVNSTLJ9");
  var t_resumeCtx_29 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$12);
  lib.Wall.prompt("\u0644\u0642\u062f \u062a\u063a\u0644\u0628\u062a \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649\u000a\u0645\u0628\u0631\u0648\u0643 !", t_resumeCtx_29);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$12;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$8;
  } else {
  (s.pc = "cIQqu1k8APkBmKZ2");
  null;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$7;
  } else {
  (s.pc = "kYZBogd9HET2hQ9R");
  null;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$6;
  }
  return a_CcD2wney4kaWCKQwXv0UiyDQ$16;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$2, 'a_CcD2wney4kaWCKQwXv0UiyDQ$2');

function a_CcD2wney4kaWCKQwXv0UiyDQ$9(s) {
  (s.pc = "x4sKBRW50kEBxusd");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$10);
  lib.Wall.prompt("Now you can customize your speed from the buttons blew .", t_resumeCtx_13);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$10;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$9, 'a_CcD2wney4kaWCKQwXv0UiyDQ$9');

function a_CcD2wney4kaWCKQwXv0UiyDQ$12(s) {
  (s.pc = "Jp6xB3ntCasfbZBN");
  var t_resumeCtx_30 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$13);
  lib.Wall.prompt("\u0627\u0644\u0627\u0646 \u062a\u0633\u062a\u0637\u064a\u0639 \u062a\u0639\u062f\u064a\u0644 \u0633\u0631\u0639\u0629 \u0627\u0644\u0644\u0639\u0628 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0632\u0631 \u0628\u0627\u0644\u0627\u0633\u0641\u0644", t_resumeCtx_30);
  return a_CcD2wney4kaWCKQwXv0UiyDQ$13;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$12, 'a_CcD2wney4kaWCKQwXv0UiyDQ$12');

function a_CcD2wney4kaWCKQwXv0UiyDQ$8(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$7;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$8, 'a_CcD2wney4kaWCKQwXv0UiyDQ$8');

function a_CcD2wney4kaWCKQwXv0UiyDQ$7(s) {
  (s.pc = "Mz9qcoc2xhYON8Ic");
  s.rt.logObjectMutation(/* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE);
  (ok1(s, /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE) && /* EditSpeed2 */ s.d.$Ev7b7ONrwGah6aHmeXw2ykOE.show(s));
  (s.pc = "qUHjznVvquvXPJq1");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("X4CSEIFJVBf4hIUePN4rc87n", 1, s);
  }
  (s.pc = "oRs86XvYuDPH7FhA");
  (/* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW = 0);
  s.rt.logDataWrite();
  (s.pc = "y9EWToe4ope5gOYY");
  (/* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs = 0);
  s.rt.logDataWrite();
  return a_CcD2wney4kaWCKQwXv0UiyDQ$6;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$7, 'a_CcD2wney4kaWCKQwXv0UiyDQ$7');

function a_CcD2wney4kaWCKQwXv0UiyDQ$6(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$16;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$6, 'a_CcD2wney4kaWCKQwXv0UiyDQ$6');

function a_CcD2wney4kaWCKQwXv0UiyDQ$16(s) {
  return s.rt.leave();
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$16, 'a_CcD2wney4kaWCKQwXv0UiyDQ$16');

function a_CcD2wney4kaWCKQwXv0UiyDQ$10(s) {
  (s.pc = "sP3yD2xprcRVwylG");
  var t_concat_14 = lib.String_.concatAny("Achievements \u003a\u000a", "Level\u003a ");
  var t_infix_15 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK + 1));
  var t_concat_16 = lib.String_.concatAny(t_concat_14, t_infix_15);
  var t_concat_17 = lib.String_.concatAny(t_concat_16, "\u000aTimer\u003a ");
  var t_concat_18 = lib.String_.concatAny(t_concat_17, /* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp);
  var t_concat_19 = lib.String_.concatAny(t_concat_18, "\u000aRight Answers\u003a ");
  var t_concat_20 = lib.String_.concatAny(t_concat_19, /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf);
  var t_concat_21 = lib.String_.concatAny(t_concat_20, "\u000aWrong Answers\u003a ");
  var t_concat_22 = lib.String_.concatAny(t_concat_21, /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2);
  var t_concat_23 = lib.String_.concatAny(t_concat_22, "\u000aScore\u003a ");
  var t_concat_24 = lib.String_.concatAny(t_concat_23, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm);
  var t_concat_25 = lib.String_.concatAny(t_concat_24, "\u000aProgress\u003a ");
  var t_concat_26 = lib.String_.concatAny(t_concat_25, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4);
  var t_concat_27 = lib.String_.concatAny(t_concat_26, "\u0025");
  var t_resumeCtx_28 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$11);
  (ok1(s, t_concat_27) && lib.Wall.prompt(t_concat_27, t_resumeCtx_28));
  return a_CcD2wney4kaWCKQwXv0UiyDQ$11;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$10, 'a_CcD2wney4kaWCKQwXv0UiyDQ$10');

function a_CcD2wney4kaWCKQwXv0UiyDQ$13(s) {
  (s.pc = "paWTwnA3l1j4Ka7W");
  var t_concat_31 = lib.String_.concatAny("\u0627\u0644\u0627\u0646\u062c\u0627\u0632\u0627\u062a \u003a\u000a", "\u0627\u0644\u0645\u0631\u062d\u0644\u0629\u003a ");
  var t_infix_32 = (ok1(s, /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK) && (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK + 1));
  var t_concat_33 = lib.String_.concatAny(t_concat_31, t_infix_32);
  var t_concat_34 = lib.String_.concatAny(t_concat_33, "\u000a\u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u062a\u0628\u0642\u0649\u003a ");
  var t_concat_35 = lib.String_.concatAny(t_concat_34, /* countdownTimer */ s.d.$pt4dN9KFvSoIHDo2pBXapOsp);
  var t_concat_36 = lib.String_.concatAny(t_concat_35, "\u000a\u0627\u0644\u0627\u062c\u0627\u0628\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u062d\u0629\u003a ");
  var t_concat_37 = lib.String_.concatAny(t_concat_36, /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf);
  var t_concat_38 = lib.String_.concatAny(t_concat_37, "\u000a\u0627\u0644\u0627\u062c\u0627\u0628\u0627\u062a \u0627\u0644\u062e\u0627\u0637\u0626\u0629\u003a ");
  var t_concat_39 = lib.String_.concatAny(t_concat_38, /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2);
  var t_concat_40 = lib.String_.concatAny(t_concat_39, "\u000a\u0627\u0644\u0646\u0642\u0627\u0637\u003a ");
  var t_concat_41 = lib.String_.concatAny(t_concat_40, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm);
  var t_concat_42 = lib.String_.concatAny(t_concat_41, "\u000a\u062a\u0642\u062f\u0645\u0643\u003a ");
  var t_concat_43 = lib.String_.concatAny(t_concat_42, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4);
  var t_concat_44 = lib.String_.concatAny(t_concat_43, "\u0025");
  var t_resumeCtx_45 = s.rt.getBlockingResumeCtx(a_CcD2wney4kaWCKQwXv0UiyDQ$14);
  (ok1(s, t_concat_44) && lib.Wall.prompt(t_concat_44, t_resumeCtx_45));
  return a_CcD2wney4kaWCKQwXv0UiyDQ$14;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$13, 'a_CcD2wney4kaWCKQwXv0UiyDQ$13');

function a_CcD2wney4kaWCKQwXv0UiyDQ$11(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$8;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$11, 'a_CcD2wney4kaWCKQwXv0UiyDQ$11');

function a_CcD2wney4kaWCKQwXv0UiyDQ$14(s) {
  return a_CcD2wney4kaWCKQwXv0UiyDQ$8;
}
cs.registerStep(a_CcD2wney4kaWCKQwXv0UiyDQ$14, 'a_CcD2wney4kaWCKQwXv0UiyDQ$14');

/* ACTION: updateGameProgress */
function a_WieDq35LUPNpI5PuC6vsh0za(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_WieDq35LUPNpI5PuC6vsh0za$0;
  s.name = "updateGameProgress";
  s.$CompleteTheGame = undefined;
  return s;
}
cs.registerAction("updateGameProgress", "WieDq35LUPNpI5PuC6vsh0za", a_WieDq35LUPNpI5PuC6vsh0za, true);

function a_WieDq35LUPNpI5PuC6vsh0za$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "jBLMQys7XeeTTPrg");
  var t_infix_1 = (ok1(s, /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4) && (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 === 100));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "JsuqoGknxivzhEcx");
  (s.$CompleteTheGame = true);
  var t_elseIf_2 = true;
  (s.pc = "AwBA03ze2Xj9D2Yb");
  var t_infix_3 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "YKu7i4sSAJBD1vI4");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$3);
  lib.Wall.prompt("You have just beat the game .\u000aCongratulation ! ", t_resumeCtx_4);
  return a_WieDq35LUPNpI5PuC6vsh0za$3;
  } else {
  (s.pc = "xyAK2o1188Y0zyV5");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$5);
  lib.Wall.prompt("\u0644\u0642\u062f \u062a\u063a\u0644\u0628\u062a \u0639\u0644\u0649 \u0627\u0644\u0644\u0639\u0628\u0629\u000a\u0645\u0628\u0631\u0648\u0643!", t_resumeCtx_8);
  return a_WieDq35LUPNpI5PuC6vsh0za$5;
  }
  return a_WieDq35LUPNpI5PuC6vsh0za$2;
  } else {
  (s.pc = "CaLrw67eQup2jdSF");
  null;
  }
  return a_WieDq35LUPNpI5PuC6vsh0za$1;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$0, 'a_WieDq35LUPNpI5PuC6vsh0za$0');

function a_WieDq35LUPNpI5PuC6vsh0za$3(s) {
  (s.pc = "OKV8KT0nK3beiJ4g");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$4);
  var t_call_6 = lib.Wall.ask_boolean("", "Do you want to continue playing ??", t_resumeCtx_5);
  return a_WieDq35LUPNpI5PuC6vsh0za$4;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$3, 'a_WieDq35LUPNpI5PuC6vsh0za$3');

function a_WieDq35LUPNpI5PuC6vsh0za$5(s) {
  (s.pc = "QM4QAhOYGRsc2LnV");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$6);
  var t_call_10 = lib.Wall.ask_boolean("", "\u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0628\u0627\u0644\u0644\u0639\u0628 \u061f\u061f", t_resumeCtx_9);
  return a_WieDq35LUPNpI5PuC6vsh0za$6;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$5, 'a_WieDq35LUPNpI5PuC6vsh0za$5');

function a_WieDq35LUPNpI5PuC6vsh0za$2(s) {
  var t_elseIf_12 = true;
  (s.pc = "x2KcWOp4ICA5hWwG");
  var t_call_13 = (ok1(s, s.$CompleteTheGame) && lib.Boolean_.equals(s.$CompleteTheGame, false, s));
  ok1(s, t_call_13);
  if (t_call_13) {
  var t_elseIf_14 = true;
  (s.pc = "Aukr3XgNy92nMBJs");
  var t_infix_15 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_15);
  if (t_infix_15) {
  (s.pc = "rjAC8BoGUq8cI7p1");
  var t_resumeCtx_16 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$9);
  lib.Wall.prompt("Train daily to be the best .. \u003a\u0029", t_resumeCtx_16);
  return a_WieDq35LUPNpI5PuC6vsh0za$9;
  } else {
  (s.pc = "Pnlnto5RbB4qVVR2");
  var t_resumeCtx_18 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$11);
  lib.Wall.prompt("\u062a\u0645\u0631\u0646 \u064a\u0648\u0645\u064a\u0627\u064b \u0644\u062a\u0635\u0628\u062d \u0627\u0644\u0627\u0641\u0636\u0644 .. \u003a\u0029", t_resumeCtx_18);
  return a_WieDq35LUPNpI5PuC6vsh0za$11;
  }
  return a_WieDq35LUPNpI5PuC6vsh0za$8;
  } else {
  (s.pc = "bZgXuRY2PdWF9XHS");
  (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK = 2);
  s.rt.logDataWrite();
  var t_elseIf_22 = true;
  (s.pc = "xgO7wMk6qS1DYgVZ");
  var t_infix_23 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_23);
  if (t_infix_23) {
  (s.pc = "wk7SL5pL2fB4GKa2");
  var t_resumeCtx_24 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$15);
  lib.Wall.prompt("You have to pay attention ...\u000aYou will lose a life for every Three wrong answers\u000a\u000aRemember That you can customize the game speed \u000aGOOD LUCK ! ", t_resumeCtx_24);
  return a_WieDq35LUPNpI5PuC6vsh0za$15;
  } else {
  (s.pc = "GMjvN62t0VgnZ922");
  var t_resumeCtx_25 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$16);
  lib.Wall.prompt("\u064a\u062c\u0628 \u0627\u0646 \u062a\u0631\u0643\u0632 \u000a\u0633\u062a\u062e\u0633\u0631 \u062d\u064a\u0627\u0629 \u0639\u0646 \u0643\u0644 \u062b\u0644\u0627\u062b \u0627\u062c\u0627\u0628\u0627\u062a \u062e\u0627\u0637\u0626\u0629\u000a\u000a\u062a\u0630\u0643\u0631 \u0647\u0630\u0627 \u0627\u0646\u062a \u062a\u0633\u062a\u0637\u064a\u0639 \u0627\u0646 \u062a\u0639\u062f\u0644 \u0641\u0649 \u0633\u0631\u0639\u0629 \u0627\u0644\u0644\u0639\u0628\u000a\u0646\u062a\u0645\u0646\u0649 \u0644\u0643 \u062d\u0638 \u0633\u0639\u064a\u062f ! ", t_resumeCtx_25);
  return a_WieDq35LUPNpI5PuC6vsh0za$16;
  }
  return a_WieDq35LUPNpI5PuC6vsh0za$14;
  }
  return a_WieDq35LUPNpI5PuC6vsh0za$7;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$2, 'a_WieDq35LUPNpI5PuC6vsh0za$2');

function a_WieDq35LUPNpI5PuC6vsh0za$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$1, 'a_WieDq35LUPNpI5PuC6vsh0za$1');

function a_WieDq35LUPNpI5PuC6vsh0za$4(s) {
  var t_pauseRes_7 = s.pauseValue;
  (s.$CompleteTheGame = t_pauseRes_7);
  return a_WieDq35LUPNpI5PuC6vsh0za$2;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$4, 'a_WieDq35LUPNpI5PuC6vsh0za$4');

function a_WieDq35LUPNpI5PuC6vsh0za$6(s) {
  var t_pauseRes_11 = s.pauseValue;
  (s.$CompleteTheGame = t_pauseRes_11);
  return a_WieDq35LUPNpI5PuC6vsh0za$2;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$6, 'a_WieDq35LUPNpI5PuC6vsh0za$6');

function a_WieDq35LUPNpI5PuC6vsh0za$9(s) {
  (s.pc = "is0cEoQq0anUICUH");
  var t_resumeCtx_17 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$10);
  lib.Wall.prompt("bye bye !", t_resumeCtx_17);
  return a_WieDq35LUPNpI5PuC6vsh0za$10;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$9, 'a_WieDq35LUPNpI5PuC6vsh0za$9');

function a_WieDq35LUPNpI5PuC6vsh0za$11(s) {
  (s.pc = "hnGxB8j4wP2HNpGS");
  var t_resumeCtx_19 = s.rt.getBlockingResumeCtx(a_WieDq35LUPNpI5PuC6vsh0za$12);
  lib.Wall.prompt("\u0645\u0639 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 !", t_resumeCtx_19);
  return a_WieDq35LUPNpI5PuC6vsh0za$12;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$11, 'a_WieDq35LUPNpI5PuC6vsh0za$11');

function a_WieDq35LUPNpI5PuC6vsh0za$8(s) {
  (s.pc = "apsDY8qvyGyoMNBS");
  var t_libcall_20 = s.libs["game"]["end"](s);
  return s.rt.enter(t_libcall_20.invoke(t_libcall_20, a_WieDq35LUPNpI5PuC6vsh0za$13));
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$8, 'a_WieDq35LUPNpI5PuC6vsh0za$8');

function a_WieDq35LUPNpI5PuC6vsh0za$15(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$14;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$15, 'a_WieDq35LUPNpI5PuC6vsh0za$15');

function a_WieDq35LUPNpI5PuC6vsh0za$16(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$14;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$16, 'a_WieDq35LUPNpI5PuC6vsh0za$16');

function a_WieDq35LUPNpI5PuC6vsh0za$14(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$7;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$14, 'a_WieDq35LUPNpI5PuC6vsh0za$14');

function a_WieDq35LUPNpI5PuC6vsh0za$7(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$1;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$7, 'a_WieDq35LUPNpI5PuC6vsh0za$7');

function a_WieDq35LUPNpI5PuC6vsh0za$10(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$8;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$10, 'a_WieDq35LUPNpI5PuC6vsh0za$10');

function a_WieDq35LUPNpI5PuC6vsh0za$12(s) {
  return a_WieDq35LUPNpI5PuC6vsh0za$8;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$12, 'a_WieDq35LUPNpI5PuC6vsh0za$12');

function a_WieDq35LUPNpI5PuC6vsh0za$13(s) {
  var t_actRes_21 = s.rt.returnedFrom.result;
  t_actRes_21;
  return a_WieDq35LUPNpI5PuC6vsh0za$7;
}
cs.registerStep(a_WieDq35LUPNpI5PuC6vsh0za$13, 'a_WieDq35LUPNpI5PuC6vsh0za$13');

/* ACTION: create mainmenu */
function a_H4UZUGqb4FLEP4gJGC2upOnJ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_H4UZUGqb4FLEP4gJGC2upOnJ$0;
  s.name = "create mainmenu";
  s.$logo = undefined;
  s.$rect = undefined;
  s.$rect2 = undefined;
  return s;
}
cs.registerAction("create mainmenu", "H4UZUGqb4FLEP4gJGC2upOnJ", a_H4UZUGqb4FLEP4gJGC2upOnJ, true);

function a_H4UZUGqb4FLEP4gJGC2upOnJ$0(s) {
  (s.pc = "l2MoJjg4hmgN2lcC");
  (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc = 1);
  s.rt.logDataWrite();
  (s.pc = "xCqFpE526LfiqCoI");
  var t_call_0 = lib.Media.create_landscape_board(762, 480, s);
  s.rt.markAllocated(t_call_0);
  (/* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "fB7VoITkZqFDn2t4");
  s.rt.logObjectMutation(/* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD);
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$1);
  (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* background */ s.d.$KHDnfQqaScf0CWifPnGyduVG) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.set_background_picture(/* background */ s.d.$KHDnfQqaScf0CWifPnGyduVG, t_resumeCtx_1));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$1;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$0, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$0');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$1(s) {
  (s.pc = "K9jQSympD2xYLhZe");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$2);
  var t_call_3 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* LOGO_TYB */ s.d.$x4VkyHdIjRP1g8Fa12xqideZ) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* LOGO_TYB */ s.d.$x4VkyHdIjRP1g8Fa12xqideZ, t_resumeCtx_2));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$2;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$1, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$1');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$2(s) {
  var t_pauseRes_4 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_4);
  (s.$logo = t_pauseRes_4);
  var t_elseIf_5 = true;
  (s.pc = "xAoRlKqtjhjRT2gC");
  var t_infix_6 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 1));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "jiZRiSYu6wnxp9qH");
  s.rt.logObjectMutation(s.$logo);
  (ok1(s, s.$logo) && s.$logo.delete_(s));
  (s.pc = "eI2XpGehx1XA7mj6");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$4);
  var t_call_8 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* ArabicLogo */ s.d.$GBZdVgFOcNic8i2c44ymqswJ) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* ArabicLogo */ s.d.$GBZdVgFOcNic8i2c44ymqswJ, t_resumeCtx_7));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$4;
  } else {
  (s.pc = "cXw3sAVoD2lxZS8m");
  null;
  }
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$3;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$2, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$2');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$4(s) {
  var t_pauseRes_9 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_9);
  (s.$logo = t_pauseRes_9);
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$3;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$4, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$4');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$3(s) {
  (s.pc = "yAnDMyF6GP0kBNoA");
  s.rt.logObjectMutation(s.$logo);
  (ok1(s, s.$logo) && s.$logo.set_pos(381, 90, s));
  (s.pc = "q5B6DLJI4g8U4zkT");
  s.rt.logObjectMutation(s.$logo);
  (ok1(s, s.$logo) && s.$logo.set_width(350, s));
  (s.pc = "byG8WTnrghsKfyey");
  var t_call_10 = (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.width(s));
  var t_call_11 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, t_call_10) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_rectangle(t_call_10, 10, s));
  s.rt.markAllocated(t_call_11);
  (s.$rect = t_call_11);
  (s.pc = "xEoD48Y6ET30Rf0L");
  var t_call_12 = lib.Colors.black(s);
  s.rt.logObjectMutation(s.$rect);
  (ok2(s, s.$rect, t_call_12) && s.$rect.set_color(t_call_12, s));
  (s.pc = "okSHGhASKd43iapJ");
  s.rt.logObjectMutation(s.$rect);
  (ok1(s, s.$rect) && s.$rect.set_pos(381, 245, s));
  (s.pc = "i6BcHJlFSNbe294B");
  (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.post_to_wall(s));
  var t_elseIf_13 = true;
  (s.pc = "XNT2wmw1pAZ8SgEh");
  var t_infix_14 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.pc = "VlqDEAebER4iPedv");
  var t_resumeCtx_15 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$6);
  var t_call_16 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* PLAY_B */ s.d.$YQBIDm5XkC0q48BIkuAMb348) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* PLAY_B */ s.d.$YQBIDm5XkC0q48BIkuAMb348, t_resumeCtx_15));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$6;
  } else {
  (s.pc = "c7ClmgEmS4i9PpdE");
  var t_resumeCtx_18 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$7);
  var t_call_19 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* ArabicPlay */ s.d.$N80k7z8ISlcPUeb80okfEZq2) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* ArabicPlay */ s.d.$N80k7z8ISlcPUeb80okfEZq2, t_resumeCtx_18));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$7;
  }
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$5;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$3, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$3');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$6(s) {
  var t_pauseRes_17 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_17);
  (/* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18 = t_pauseRes_17);
  s.rt.logDataWrite();
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$5;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$6, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$6');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$7(s) {
  var t_pauseRes_20 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_20);
  (/* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18 = t_pauseRes_20);
  s.rt.logDataWrite();
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$5;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$7, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$7');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$5(s) {
  (s.pc = "Skx6Usi1tCu2T5IU");
  s.rt.logObjectMutation(/* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18);
  (ok1(s, /* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18) && /* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18.set_pos(381, 240, s));
  (s.pc = "H6kE7kU0Wn6pzyi2");
  s.rt.logObjectMutation(/* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18);
  (ok1(s, /* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18) && /* play2 */ s.d.$LDSOj119unllEJ1v9W8aaM18.set_width(90, s));
  (s.pc = "OHysWv5PiG4mW8yF");
  (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.post_to_wall(s));
  (s.pc = "D2iJko1tjdYyTLht");
  var t_call_21 = (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.width(s));
  var t_call_22 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, t_call_21) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_rectangle(t_call_21, 10, s));
  s.rt.markAllocated(t_call_22);
  (s.$rect2 = t_call_22);
  (s.pc = "yyO4el92x1qSogGN");
  var t_call_23 = lib.Colors.black(s);
  s.rt.logObjectMutation(s.$rect2);
  (ok2(s, s.$rect2, t_call_23) && s.$rect2.set_color(t_call_23, s));
  (s.pc = "NWOK9hb2qC82IkGt");
  s.rt.logObjectMutation(s.$rect2);
  (ok1(s, s.$rect2) && s.$rect2.set_pos(381, 301, s));
  (s.pc = "xK9dmf5164wqsc4x");
  (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.post_to_wall(s));
  var t_elseIf_24 = true;
  (s.pc = "oWbZLRNp2cHoQHEg");
  var t_infix_25 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_25);
  if (t_infix_25) {
  (s.pc = "xsEduBwdnkQ3R35B");
  var t_resumeCtx_26 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$9);
  var t_call_27 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* LanguageSitting */ s.d.$xMfqQF16AK6vtH9Y5YkL2r9x) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* LanguageSitting */ s.d.$xMfqQF16AK6vtH9Y5YkL2r9x, t_resumeCtx_26));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$9;
  } else {
  (s.pc = "xDlJeqBwJVi8EVWT");
  var t_resumeCtx_29 = s.rt.getBlockingResumeCtx(a_H4UZUGqb4FLEP4gJGC2upOnJ$10);
  var t_call_30 = (ok2(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD, /* ArabicLanguageSitting */ s.d.$EY4FMN4RiKxPWnC4IvtS6VEq) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.create_picture(/* ArabicLanguageSitting */ s.d.$EY4FMN4RiKxPWnC4IvtS6VEq, t_resumeCtx_29));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$10;
  }
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$8;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$5, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$5');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$9(s) {
  var t_pauseRes_28 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_28);
  (/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC = t_pauseRes_28);
  s.rt.logDataWrite();
  (s.pc = "HAZJ6Zj45YotyEAt");
  s.rt.logObjectMutation(/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC);
  (ok1(s, /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC) && /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC.set_pos(381, 300, s));
  (s.pc = "xXaU18iMcWLtQsLo");
  s.rt.logObjectMutation(/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC);
  (ok1(s, /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC) && /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC.set_width(140, s));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$8;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$9, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$9');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$10(s) {
  var t_pauseRes_31 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_31);
  (/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC = t_pauseRes_31);
  s.rt.logDataWrite();
  (s.pc = "LRnKS6XkJZdwL79j");
  s.rt.logObjectMutation(/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC);
  (ok1(s, /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC) && /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC.set_pos(381, 300, s));
  (s.pc = "cZD6S5PO7RbnJUXK");
  s.rt.logObjectMutation(/* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC);
  (ok1(s, /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC) && /* play3 */ s.d.$xK4KVDLAJbhRWgEoqxMxujyC.set_width(90, s));
  return a_H4UZUGqb4FLEP4gJGC2upOnJ$8;
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$10, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$10');

function a_H4UZUGqb4FLEP4gJGC2upOnJ$8(s) {
  (s.pc = "l9cI2ewX5EqzgdJY");
  (ok1(s, /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD) && /* mainmenu */ s.d.$ADK1w7zCWzIUDAIBPFFcBvAD.post_to_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_H4UZUGqb4FLEP4gJGC2upOnJ$8, 'a_H4UZUGqb4FLEP4gJGC2upOnJ$8');

/* ACTION: tap sprite: play2 */
function a_P4zhoertk9Y8g274cT3pDhdo(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_P4zhoertk9Y8g274cT3pDhdo$0;
  s.name = "tap sprite\u003a play2";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  return s;
}
cs.registerAction("tap sprite\u003a play2", "P4zhoertk9Y8g274cT3pDhdo", a_P4zhoertk9Y8g274cT3pDhdo, true);
cs.registerEventHandler("tap sprite\u003a ", "$LDSOj119unllEJ1v9W8aaM18", a_P4zhoertk9Y8g274cT3pDhdo);

function a_P4zhoertk9Y8g274cT3pDhdo$0(s) {
  (s.pc = "xx3aAjZGJ41ljD37");
  null;
  var t_elseIf_0 = true;
  (s.pc = "xvcKZ8JGolXSLK8W");
  var t_call_1 = (ok1(s, /* GameData table */ s.d.$BdGhpbmcgdGFibGUa) && /* GameData table */ s.d.$BdGhpbmcgdGFibGUa.count(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 === 0));
  var t_call_3 = (ok1(s, t_infix_2) && lib.Boolean_.not(t_infix_2, s));
  ok1(s, t_call_3);
  if (t_call_3) {
  var t_elseIf_4 = true;
  (s.pc = "BxBpuA6PX9yBPZGQ");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_5 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("tprk9Vt7fApuXjG4Bzs6vxR2", s);
  }
  var t_infix_6 = (ok1(s, t_recOp_5) && (t_recOp_5 === 0));
  var t_call_7 = (ok1(s, t_infix_6) && lib.Boolean_.not(t_infix_6, s));
  ok1(s, t_call_7);
  if (t_call_7) {
  var t_elseIf_8 = true;
  (s.pc = "xLV4htmBRo0Bsj1Z");
  var t_infix_9 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "MGqO2M7P5KWaF3hn");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_P4zhoertk9Y8g274cT3pDhdo$5);
  var t_call_11 = lib.Wall.ask_boolean("Resume  ", "Do you want to resume your previous game ??\u000a\u000aNote\u003a If you press \u0022No\u0022 all of your previous progress will be lost", t_resumeCtx_10);
  return a_P4zhoertk9Y8g274cT3pDhdo$5;
  } else {
  (s.pc = "x3BQH8Ml6GdA2b9u");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_P4zhoertk9Y8g274cT3pDhdo$6);
  var t_call_14 = lib.Wall.ask_boolean("\u0627\u0643\u0645\u0627\u0644 \u0627\u0644\u0644\u0639\u0628", "\u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0646 \u062a\u0643\u0645\u0644 \u0627\u0644\u0644\u0639\u0628 \u0628\u0627\u0646\u062c\u0627\u0632\u0627\u062a\u0643 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u061f\u061f\u000a\u000a \u062a\u0642\u062f\u0645\u0643 \u0627\u0644\u0633\u0627\u0628\u0642 \u0633\u064a\u0636\u064a\u0639 \u0022No\u0022 \u0645\u0644\u0627\u062d\u0638\u0629\u003a \u0625\u0630\u0627 \u0627\u062e\u062a\u0631\u062a", t_resumeCtx_13);
  return a_P4zhoertk9Y8g274cT3pDhdo$6;
  }
  return a_P4zhoertk9Y8g274cT3pDhdo$4;
  } else {
  (s.pc = "cer0oQA62JEZLKqX");
  null;
  }
  return a_P4zhoertk9Y8g274cT3pDhdo$3;
  } else {
  (s.pc = "UxbYDiQwloolXzSj");
  null;
  }
  return a_P4zhoertk9Y8g274cT3pDhdo$1;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$0, 'a_P4zhoertk9Y8g274cT3pDhdo$0');

function a_P4zhoertk9Y8g274cT3pDhdo$5(s) {
  var t_pauseRes_12 = s.pauseValue;
  (/* Continue */ s.d.$xQM8xioIPeuY22hADLxozWJu = t_pauseRes_12);
  s.rt.logDataWrite();
  return a_P4zhoertk9Y8g274cT3pDhdo$4;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$5, 'a_P4zhoertk9Y8g274cT3pDhdo$5');

function a_P4zhoertk9Y8g274cT3pDhdo$6(s) {
  var t_pauseRes_15 = s.pauseValue;
  (/* Continue */ s.d.$xQM8xioIPeuY22hADLxozWJu = t_pauseRes_15);
  s.rt.logDataWrite();
  return a_P4zhoertk9Y8g274cT3pDhdo$4;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$6, 'a_P4zhoertk9Y8g274cT3pDhdo$6');

function a_P4zhoertk9Y8g274cT3pDhdo$4(s) {
  return a_P4zhoertk9Y8g274cT3pDhdo$3;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$4, 'a_P4zhoertk9Y8g274cT3pDhdo$4');

function a_P4zhoertk9Y8g274cT3pDhdo$3(s) {
  return a_P4zhoertk9Y8g274cT3pDhdo$1;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$3, 'a_P4zhoertk9Y8g274cT3pDhdo$3');

function a_P4zhoertk9Y8g274cT3pDhdo$1(s) {
  var t_elseIf_16 = true;
  (s.pc = "hbxA8lsvYA6P2qAd");
  var t_call_17 = (ok1(s, /* Continue */ s.d.$xQM8xioIPeuY22hADLxozWJu) && lib.Boolean_.equals(/* Continue */ s.d.$xQM8xioIPeuY22hADLxozWJu, true, s));
  ok1(s, t_call_17);
  if (t_call_17) {
  (s.pc = "xhu4JckP7tMcsq2I");
  (/* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA = 1);
  s.rt.logDataWrite();
  (s.pc = "HlbIg7I2CB9okWYi");
  return s.rt.enter(a_BzzqwWizcEHC54ODRvqkHzCX(s, a_P4zhoertk9Y8g274cT3pDhdo$8));
  } else {
  (s.pc = "Qn7AgTkY9yKRNaTJ");
  (/* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA = 1);
  s.rt.logDataWrite();
  (s.pc = "IGrRGWnj07lqph9q");
  return s.rt.enter(a_en0ZX0ns15nlfTYaNwmqk2Pd(s, a_P4zhoertk9Y8g274cT3pDhdo$10));
  }
  return a_P4zhoertk9Y8g274cT3pDhdo$7;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$1, 'a_P4zhoertk9Y8g274cT3pDhdo$1');

function a_P4zhoertk9Y8g274cT3pDhdo$8(s) {
  (s.pc = "ZxxW9knIMkBo34UC");
  return s.rt.enter(a_Q4op3hUVowZFEtDC8v3XHI1B(s, a_P4zhoertk9Y8g274cT3pDhdo$9));
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$8, 'a_P4zhoertk9Y8g274cT3pDhdo$8');

function a_P4zhoertk9Y8g274cT3pDhdo$10(s) {
  (s.pc = "Kd2XtlmnefCu4I3d");
  return s.rt.enter(a_x0upCuxioZlcbhHobn2kveNP(s, a_P4zhoertk9Y8g274cT3pDhdo$11));
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$10, 'a_P4zhoertk9Y8g274cT3pDhdo$10');

function a_P4zhoertk9Y8g274cT3pDhdo$7(s) {
  return s.rt.leave();
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$7, 'a_P4zhoertk9Y8g274cT3pDhdo$7');

function a_P4zhoertk9Y8g274cT3pDhdo$9(s) {
  var t_actRes_18 = s.rt.returnedFrom.result;
  t_actRes_18;
  return a_P4zhoertk9Y8g274cT3pDhdo$7;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$9, 'a_P4zhoertk9Y8g274cT3pDhdo$9');

function a_P4zhoertk9Y8g274cT3pDhdo$11(s) {
  (s.pc = "QomGGfTkYd45Ufk1");
  return s.rt.enter(a_BzzqwWizcEHC54ODRvqkHzCX(s, a_P4zhoertk9Y8g274cT3pDhdo$12));
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$11, 'a_P4zhoertk9Y8g274cT3pDhdo$11');

function a_P4zhoertk9Y8g274cT3pDhdo$12(s) {
  (s.pc = "oqGNa4xcSWsgTmgi");
  return s.rt.enter(a_Q4op3hUVowZFEtDC8v3XHI1B(s, a_P4zhoertk9Y8g274cT3pDhdo$13));
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$12, 'a_P4zhoertk9Y8g274cT3pDhdo$12');

function a_P4zhoertk9Y8g274cT3pDhdo$13(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  t_actRes_19;
  return a_P4zhoertk9Y8g274cT3pDhdo$7;
}
cs.registerStep(a_P4zhoertk9Y8g274cT3pDhdo$13, 'a_P4zhoertk9Y8g274cT3pDhdo$13');

/* ACTION: creatGame */
function a_Q4op3hUVowZFEtDC8v3XHI1B(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Q4op3hUVowZFEtDC8v3XHI1B$0;
  s.name = "creatGame";
  return s;
}
cs.registerAction("creatGame", "Q4op3hUVowZFEtDC8v3XHI1B", a_Q4op3hUVowZFEtDC8v3XHI1B, true);

function a_Q4op3hUVowZFEtDC8v3XHI1B$0(s) {
  (s.pc = "r2CET8brr2t849E2");
  (/* IsMainmenu */ s.d.$PrOn12L9EmBqtAWhCt7IFoYc = 0);
  s.rt.logDataWrite();
  (s.pc = "jx4kWK5l4G2812fJ");
  var t_libcall_0 = s.libs["game"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_Q4op3hUVowZFEtDC8v3XHI1B$1));
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$0, 'a_Q4op3hUVowZFEtDC8v3XHI1B$0');

function a_Q4op3hUVowZFEtDC8v3XHI1B$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "A3p5yUQ6XXwzmph2");
  var t_call_2 = lib.Colors.black(s);
  s.rt.logObjectMutation(/* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC);
  (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, t_call_2) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.set_background(t_call_2, s));
  (s.pc = "xF3dAF8NHyGc3xFc");
  var t_libcall_3 = s.libs["game"]["add score"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_Q4op3hUVowZFEtDC8v3XHI1B$2, /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm));
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$1, 'a_Q4op3hUVowZFEtDC8v3XHI1B$1');

function a_Q4op3hUVowZFEtDC8v3XHI1B$2(s) {
  var t_elseIf_4 = true;
  (s.pc = "xsZS2wX2h1NSAU6H");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_5 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("tprk9Vt7fApuXjG4Bzs6vxR2", s);
  }
  var t_infix_6 = (ok1(s, t_recOp_5) && (t_recOp_5 === 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  var t_elseIf_7 = true;
  (s.pc = "MaAGOXwtjkxgP4l3");
  var t_infix_8 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "B4T9Vc1OYN48RYZ5");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$6);
  lib.Wall.prompt("This is a game that develops your brain speed and attention skills ", t_resumeCtx_9);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$6;
  } else {
  (s.pc = "x9UV79QxixgopHh3");
  var t_resumeCtx_14 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$10);
  lib.Wall.prompt("\u0647\u0630\u0647 \u0627\u0644\u0644\u0639\u0628\u0629 \u062a\u0637\u0648\u0631 \u0645\u0647\u0627\u0631\u062a \u0627\u0644\u0633\u0631\u0639\u0629 \u0648 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u062e\u0627\u0635\u062a\u0643", t_resumeCtx_14);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$10;
  }
  return a_Q4op3hUVowZFEtDC8v3XHI1B$5;
  } else {
  (s.pc = "PjtJtmizPH5l0j00");
  null;
  }
  return a_Q4op3hUVowZFEtDC8v3XHI1B$4;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$2, 'a_Q4op3hUVowZFEtDC8v3XHI1B$2');

function a_Q4op3hUVowZFEtDC8v3XHI1B$6(s) {
  (s.pc = "Gt74yZa6zgavBTc4");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$7);
  lib.Wall.prompt("Level  \u00221\u0022 \u003a\u000a\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u000aHow to play ?\u000a\u000aIt\u0027s easy steps\u000a\u003eLook at the picture that will be shown to you\u000a\u003eTap on the direction that refers to the odd one out triangle\u000a.............................................................................................................................. \u000aNotes \u003a\u000a\u000a\u003eYou\u0027ll receive 10 points score for every right answer \u000a\u003eIf you choose the wrong direction \u002c you\u0027ll lose 10 points score\u000a\u003eIf you stay for the time that you have chosen before with out choosing an answer \u002c you\u0027ll lose another 10 points \u000a\u003eThat time will decrease by 1 second for every 60 points score you gain\u000a\u003eAfter your speed reaches it\u0027s most \u002c you will be able to customize your speed \u000a\u003eYour progress will Increases by 1\u0025 for every 60 points score you gain \u000a\u003eIf your score reaches 0 \u002c you\u0027ll lose a life in exchange for 60 points \u000a\u003eIf you lose all of your lives the game\u0027ll be over \u000a.............................................................................................................................\u000aIn order to play the next level .. you\u0027ll have to earn 200 points ", t_resumeCtx_10);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$7;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$6, 'a_Q4op3hUVowZFEtDC8v3XHI1B$6');

function a_Q4op3hUVowZFEtDC8v3XHI1B$10(s) {
  (s.pc = "JEBxU4a58s2AooCr");
  var t_resumeCtx_15 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$11);
  lib.Wall.prompt("\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0627\u0648\u0644\u0649 \u003a\u000a\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u000a\u0643\u064a\u0641 \u062a\u0644\u0639\u0628 \u061f\u000a\u000a\u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0633\u0647\u0644\u0629 \u000a\u003e\u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062a\u0649 \u0633\u062a\u0638\u0647\u0631 \u0644\u0643 \u000a\u003e\u0642\u0645 \u0628\u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0645\u0645\u0627\u062b\u0644 \u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0637\u0627\u0626\u0631 \u0627\u0644\u0645\u062e\u062a\u0644\u0641 \u000a..............................................................................................................................\u000a\u0644\u0627\u062d\u0638 \u003a \u000a\u003e\u0633\u0648\u0641 \u062a\u062a\u0644\u0642\u0649 10 \u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0625\u062c\u0627\u0628\u0629 \u0635\u062d\u064a\u062d\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u0642\u0645\u062a \u0628\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u062e\u0627\u0637\u0626 \u0633\u0648\u0641 \u064a\u062e\u0635\u0645 \u0645\u0646\u0643 10 \u0646\u0642\u0627\u0637 \u000a\u003e\u0644\u0648 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u062d\u062f\u062f \u0648\u0644\u0645 \u062a\u0642\u0645 \u0628\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0633\u062a\u062e\u0633\u0631 10 \u0646\u0642\u0627\u0637 \u0625\u0636\u0627\u0641\u064a\u0629\u000a\u003e\u0633\u064a\u062a\u0646\u0627\u0642\u0635 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0630\u0649 \u0642\u0645\u062a \u0628\u0625\u062f\u062e\u0644\u0647 \u0645\u0633\u0628\u0642\u0627\u064b \u0628\u0645\u0642\u062f\u0627\u0631 \u062b\u0627\u0646\u064a\u0629 \u0628\u0639\u062f \u0643\u0644 60 \u0646\u0642\u0637\u0629 \u0625\u0636\u0627\u0641\u064a\u0629\u000a\u003e\u0639\u0646\u062f\u0645\u0627 \u062a\u0635\u0644 \u0644\u0623\u0642\u0635\u0649 \u0633\u0631\u0639\u0629 \u0633\u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0636\u0628\u0637 \u0627\u0644\u0633\u0631\u0639\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u0648\u0635\u0644\u062a \u0646\u0642\u0627\u0637\u0643 \u0625\u0644\u0649 0 \u0633\u0648\u0641 \u064a\u062a\u0645 \u062e\u0635\u0645 \u062d\u064a\u0627\u0629 \u0641\u0649 \u0645\u0642\u0627\u0628\u0644 60 \u0646\u0642\u0637\u0629 \u000a\u003e\u0625\u0630\u0627 \u0645\u0627 \u062e\u0633\u0631\u062a \u0643\u0644 \u062d\u064a\u0648\u0627\u062a\u0643 \u0633\u062a\u0646\u062a\u0647\u0649 \u0627\u0644\u0644\u0639\u0628\u0629 \u000a..............................................................................................................................\u000a\u0644\u062a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062a\u0627\u0644\u0649 \u0639\u0644\u064a\u0643 \u062c\u0645\u0639 200 \u0646\u0642\u0637\u0629", t_resumeCtx_15);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$11;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$10, 'a_Q4op3hUVowZFEtDC8v3XHI1B$10');

function a_Q4op3hUVowZFEtDC8v3XHI1B$5(s) {
  return a_Q4op3hUVowZFEtDC8v3XHI1B$4;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$5, 'a_Q4op3hUVowZFEtDC8v3XHI1B$5');

function a_Q4op3hUVowZFEtDC8v3XHI1B$4(s) {
  (s.pc = "U4JIsFMMaabaUZgx");
  return s.rt.enter(a_JHneZO0hWQFWeV3LFpeRcni1(s, a_Q4op3hUVowZFEtDC8v3XHI1B$14));
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$4, 'a_Q4op3hUVowZFEtDC8v3XHI1B$4');

function a_Q4op3hUVowZFEtDC8v3XHI1B$7(s) {
  (s.pc = "NFUDRsBvPcxROWOl");
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$8);
  var t_call_12 = lib.Wall.ask_number("Enter the game speed you want in \u0022Seconds\u0022 \u000a\u000aNote\u003a Less time you enter the \u002c More skills you earn \u003a\u0029\u000a          so it\u0027s better to choose a number between 1 and 5\u000a          it\u0027s easy to change the speed later in the game after you beat the maximum speed ", t_resumeCtx_11);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$8;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$7, 'a_Q4op3hUVowZFEtDC8v3XHI1B$7');

function a_Q4op3hUVowZFEtDC8v3XHI1B$11(s) {
  (s.pc = "V2jAZd4DKbcejlye");
  var t_resumeCtx_16 = s.rt.getBlockingResumeCtx(a_Q4op3hUVowZFEtDC8v3XHI1B$12);
  var t_call_17 = lib.Wall.ask_number("\u0627\u062f\u062e\u0644 \u0633\u0631\u0639\u0629 \u0627\u0644\u0644\u0639\u0628 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643 \u0628\u0627\u0644\u062b\u0648\u0627\u0646\u0649\u000a\u000a\u0645\u0644\u0627\u062d\u0638\u0629 \u003a \u0648\u0642\u062a \u0627\u0642\u0635\u0631 \u062a\u062f\u062e\u0644\u0647 \u064a\u0633\u0627\u0648\u0649 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0643\u062b\u0631 \u062a\u062c\u0646\u064a\u0647\u0627\u000a\u0648 \u0644\u0630\u0644\u0643 \u0645\u0646 \u0627\u0644\u0627\u0641\u0636\u0644 \u0644\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0631\u0642\u0645 \u0628\u064a\u0646 5 \u0648 1\u000a\u0645\u0646 \u0627\u0644\u0633\u0647\u0644 \u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0633\u0631\u0639\u0629 \u0628\u0639\u062f\u0645\u0627 \u062a\u062a\u063a\u0644\u0628 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649", t_resumeCtx_16);
  return a_Q4op3hUVowZFEtDC8v3XHI1B$12;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$11, 'a_Q4op3hUVowZFEtDC8v3XHI1B$11');

function a_Q4op3hUVowZFEtDC8v3XHI1B$14(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  t_actRes_19;
  return s.rt.leave();
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$14, 'a_Q4op3hUVowZFEtDC8v3XHI1B$14');

function a_Q4op3hUVowZFEtDC8v3XHI1B$8(s) {
  var t_pauseRes_13 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_13);
  s.rt.logDataWrite();
  (s.pc = "x3F0eYF1il4UrUCu");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s);
  }
  return a_Q4op3hUVowZFEtDC8v3XHI1B$5;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$8, 'a_Q4op3hUVowZFEtDC8v3XHI1B$8');

function a_Q4op3hUVowZFEtDC8v3XHI1B$12(s) {
  var t_pauseRes_18 = s.pauseValue;
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_pauseRes_18);
  s.rt.logDataWrite();
  (s.pc = "f1DCHkZxL3hU5QMC");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s);
  }
  return a_Q4op3hUVowZFEtDC8v3XHI1B$5;
}
cs.registerStep(a_Q4op3hUVowZFEtDC8v3XHI1B$12, 'a_Q4op3hUVowZFEtDC8v3XHI1B$12');

cs.registerArtResource("Picture", "$KHDnfQqaScf0CWifPnGyduVG", ".\u002fart\u002fl0_KHDnfQqaScf0CWifPnGyduVG");
cs.registerArtResource("Picture", "$j1VukLlGUNlUynqQK0cDYVlG", ".\u002fart\u002fl0_j1VukLlGUNlUynqQK0cDYVlG");
cs.registerArtResource("Picture", "$RjYHAaxrmFEb7AOIdQNv5srJ", ".\u002fart\u002fl0_RjYHAaxrmFEb7AOIdQNv5srJ");
cs.registerArtResource("Picture", "$PeVXx8oDv5OcBsMO4VlSmCkG", ".\u002fart\u002fl0_PeVXx8oDv5OcBsMO4VlSmCkG");
cs.registerArtResource("Picture", "$ovIviND2yV2OAQnXKJZ4LLIS", ".\u002fart\u002fl0_ovIviND2yV2OAQnXKJZ4LLIS");
cs.registerArtResource("Picture", "$x4VkyHdIjRP1g8Fa12xqideZ", ".\u002fart\u002fl0_x4VkyHdIjRP1g8Fa12xqideZ");
cs.registerArtResource("Picture", "$YQBIDm5XkC0q48BIkuAMb348", ".\u002fart\u002fl0_YQBIDm5XkC0q48BIkuAMb348");
cs.registerArtResource("Picture", "$ZwL79mU290KV77PxaSBmvkoR", ".\u002fart\u002fl0_ZwL79mU290KV77PxaSBmvkoR");
cs.registerArtResource("Picture", "$x0zB4UM8mHYsWTbaswcTtRPA", ".\u002fart\u002fl0_x0zB4UM8mHYsWTbaswcTtRPA");
cs.registerArtResource("Picture", "$NF0kHjjsWYjqnu0z4KYE29wZ", ".\u002fart\u002fl0_NF0kHjjsWYjqnu0z4KYE29wZ");
cs.registerArtResource("Picture", "$vcUc7skKCS7sDvchDmiIGWz2", ".\u002fart\u002fl0_vcUc7skKCS7sDvchDmiIGWz2");
cs.registerArtResource("Picture", "$eKFbO2YWjRmquW4PITyDb6Mw", ".\u002fart\u002fl0_eKFbO2YWjRmquW4PITyDb6Mw");
cs.registerArtResource("Picture", "$aDcY4jRcqPQj6GJuUNgSS257", ".\u002fart\u002fl0_aDcY4jRcqPQj6GJuUNgSS257");
cs.registerArtResource("Picture", "$CzdzZZ8GE1Xg5jA7wTvQzW3H", ".\u002fart\u002fl0_CzdzZZ8GE1Xg5jA7wTvQzW3H");
cs.registerArtResource("Picture", "$GyI0vDU02qPMWiRMhc2wAmt7", ".\u002fart\u002fl0_GyI0vDU02qPMWiRMhc2wAmt7");
cs.registerArtResource("Picture", "$mSGv6SPyqeKRyu4iW9JRQjnK", ".\u002fart\u002fl0_mSGv6SPyqeKRyu4iW9JRQjnK");
cs.registerArtResource("Picture", "$rUG2o3YHKEvkJJWecSXF26SV", ".\u002fart\u002fl0_rUG2o3YHKEvkJJWecSXF26SV");
cs.registerArtResource("Picture", "$xqSH8omV8h4NL0PVAXXc5cTx", ".\u002fart\u002fl0_xqSH8omV8h4NL0PVAXXc5cTx");
cs.registerArtResource("Picture", "$DwlO3U3BecxR5iHWzCnq3ygy", ".\u002fart\u002fl0_DwlO3U3BecxR5iHWzCnq3ygy");
/* ACTION: tap sprite: play3 */
function a_xzkKigQkC6ZGjB6ieemIgmmx(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xzkKigQkC6ZGjB6ieemIgmmx$0;
  s.name = "tap sprite\u003a play3";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  s.$b = undefined;
  s.$b1 = undefined;
  return s;
}
cs.registerAction("tap sprite\u003a play3", "xzkKigQkC6ZGjB6ieemIgmmx", a_xzkKigQkC6ZGjB6ieemIgmmx, true);
cs.registerEventHandler("tap sprite\u003a ", "$xK4KVDLAJbhRWgEoqxMxujyC", a_xzkKigQkC6ZGjB6ieemIgmmx);

function a_xzkKigQkC6ZGjB6ieemIgmmx$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "n8HU7xEj3wQqekND");
  var t_infix_1 = (ok1(s, /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg) && (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg === 0));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "DalM7xMymjVFGr3X");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_xzkKigQkC6ZGjB6ieemIgmmx$2);
  var t_call_3 = lib.Wall.ask_boolean("Game language", "Press \u0022Yes\u0022 for Arabic and \u0022No\u0022 for English", t_resumeCtx_2);
  return a_xzkKigQkC6ZGjB6ieemIgmmx$2;
  } else {
  (s.pc = "XmidfjGzKZIYOpkd");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_xzkKigQkC6ZGjB6ieemIgmmx$6);
  var t_call_10 = lib.Wall.ask_boolean("\u0627\u0644\u0644\u063a\u0629", "\u0645\u0646 \u0627\u062c\u0644 \u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0022No\u0022 \u0645\u0646 \u0627\u062c\u0644 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648 \u0022Yes\u0022  \u0627\u0636\u063a\u0637  ", t_resumeCtx_9);
  return a_xzkKigQkC6ZGjB6ieemIgmmx$6;
  }
  return a_xzkKigQkC6ZGjB6ieemIgmmx$1;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$0, 'a_xzkKigQkC6ZGjB6ieemIgmmx$0');

function a_xzkKigQkC6ZGjB6ieemIgmmx$2(s) {
  var t_pauseRes_4 = s.pauseValue;
  (s.$b = t_pauseRes_4);
  var t_elseIf_5 = true;
  (s.pc = "xikYWap5UE1seaUU");
  var t_call_6 = (ok1(s, s.$b) && lib.Boolean_.equals(s.$b, true, s));
  ok1(s, t_call_6);
  if (t_call_6) {
  (s.pc = "S39m8LorFK1erH5r");
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 1);
  s.rt.logDataWrite();
  (s.pc = "xhr0EKkq4x8EXmMn");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_xzkKigQkC6ZGjB6ieemIgmmx$4));
  } else {
  (s.pc = "BKYXcWwMM3GkG898");
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 0);
  s.rt.logDataWrite();
  (s.pc = "eYvSA0teXUznMWz4");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_xzkKigQkC6ZGjB6ieemIgmmx$5));
  }
  return a_xzkKigQkC6ZGjB6ieemIgmmx$3;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$2, 'a_xzkKigQkC6ZGjB6ieemIgmmx$2');

function a_xzkKigQkC6ZGjB6ieemIgmmx$6(s) {
  var t_pauseRes_11 = s.pauseValue;
  (s.$b1 = t_pauseRes_11);
  var t_elseIf_12 = true;
  (s.pc = "FK4hEG2Tf3t2id5L");
  var t_call_13 = (ok1(s, s.$b1) && lib.Boolean_.equals(s.$b1, true, s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "jDhc4iac6J3MBdBk");
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 1);
  s.rt.logDataWrite();
  (s.pc = "HFVbcSrRrXVDC3tt");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_xzkKigQkC6ZGjB6ieemIgmmx$8));
  } else {
  (s.pc = "rySfhO3oZcGxnnc8");
  (/* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 0);
  s.rt.logDataWrite();
  (s.pc = "x0EJp446k4ws2FMe");
  return s.rt.enter(a_H4UZUGqb4FLEP4gJGC2upOnJ(s, a_xzkKigQkC6ZGjB6ieemIgmmx$9));
  }
  return a_xzkKigQkC6ZGjB6ieemIgmmx$7;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$6, 'a_xzkKigQkC6ZGjB6ieemIgmmx$6');

function a_xzkKigQkC6ZGjB6ieemIgmmx$1(s) {
  (s.pc = "FDzc5D4dhO24c7zk");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("tYOOFsXQB7ClRutqdGre45P0", /* gameLanguage */ s.d.$x62Ep5uLuqKO9ZeIPSxKMtrg, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$1, 'a_xzkKigQkC6ZGjB6ieemIgmmx$1');

function a_xzkKigQkC6ZGjB6ieemIgmmx$4(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_xzkKigQkC6ZGjB6ieemIgmmx$3;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$4, 'a_xzkKigQkC6ZGjB6ieemIgmmx$4');

function a_xzkKigQkC6ZGjB6ieemIgmmx$5(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_xzkKigQkC6ZGjB6ieemIgmmx$3;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$5, 'a_xzkKigQkC6ZGjB6ieemIgmmx$5');

function a_xzkKigQkC6ZGjB6ieemIgmmx$3(s) {
  return a_xzkKigQkC6ZGjB6ieemIgmmx$1;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$3, 'a_xzkKigQkC6ZGjB6ieemIgmmx$3');

function a_xzkKigQkC6ZGjB6ieemIgmmx$8(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  return a_xzkKigQkC6ZGjB6ieemIgmmx$7;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$8, 'a_xzkKigQkC6ZGjB6ieemIgmmx$8');

function a_xzkKigQkC6ZGjB6ieemIgmmx$9(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  t_actRes_15;
  return a_xzkKigQkC6ZGjB6ieemIgmmx$7;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$9, 'a_xzkKigQkC6ZGjB6ieemIgmmx$9');

function a_xzkKigQkC6ZGjB6ieemIgmmx$7(s) {
  return a_xzkKigQkC6ZGjB6ieemIgmmx$1;
}
cs.registerStep(a_xzkKigQkC6ZGjB6ieemIgmmx$7, 'a_xzkKigQkC6ZGjB6ieemIgmmx$7');

cs.registerArtResource("Picture", "$GBZdVgFOcNic8i2c44ymqswJ", ".\u002fart\u002fl0_GBZdVgFOcNic8i2c44ymqswJ");
cs.registerArtResource("Picture", "$N80k7z8ISlcPUeb80okfEZq2", ".\u002fart\u002fl0_N80k7z8ISlcPUeb80okfEZq2");
cs.registerArtResource("Picture", "$xMfqQF16AK6vtH9Y5YkL2r9x", ".\u002fart\u002fl0_xMfqQF16AK6vtH9Y5YkL2r9x");
cs.registerArtResource("Picture", "$EY4FMN4RiKxPWnC4IvtS6VEq", ".\u002fart\u002fl0_EY4FMN4RiKxPWnC4IvtS6VEq");

//Ent_BdGhpbmcgdGFibGUa
function Ent_BdGhpbmcgdGFibGUa(p) {
  this.parent = p;
}
Ent_BdGhpbmcgdGFibGUa.prototype = new lib.CloudTableEntry();
Ent_BdGhpbmcgdGFibGUa.prototype.keys = [];
Ent_BdGhpbmcgdGFibGUa.prototype.values = ["tYOOFsXQB7ClRutqdGre45P0", "tprk9Vt7fApuXjG4Bzs6vxR2", "x97k4OqdzZhjaUssZa188BiK", "lSH22Ur1iL1WXxR6PrKtXk7R", "j48gn47lmPQ4AAH5GRWRmY5c", "h1i5u3Ip4VI7BG6B6i7GHbqb", "odxTm04nZ8j7xi4EgFpq4W7g", "xDLhMO6JcixHmeGB5LPywOzO", "xAaRx7PNQZ4GRjElNT72VO6z", "E2AmTvnJwgIQktl6JDk4Cefr", "opNGBetuACUI6oBAU5UawGxx", "EEKj0ENZS0lmBdBXqVvAE27k", "xVMXb4sxcy4obJVqKT9yPF95", "X4CSEIFJVBf4hIUePN4rc87n"];
Ent_BdGhpbmcgdGFibGUa.prototype.fields = ["tYOOFsXQB7ClRutqdGre45P0", "tprk9Vt7fApuXjG4Bzs6vxR2", "x97k4OqdzZhjaUssZa188BiK", "lSH22Ur1iL1WXxR6PrKtXk7R", "j48gn47lmPQ4AAH5GRWRmY5c", "h1i5u3Ip4VI7BG6B6i7GHbqb", "odxTm04nZ8j7xi4EgFpq4W7g", "xDLhMO6JcixHmeGB5LPywOzO", "xAaRx7PNQZ4GRjElNT72VO6z", "E2AmTvnJwgIQktl6JDk4Cefr", "opNGBetuACUI6oBAU5UawGxx", "EEKj0ENZS0lmBdBXqVvAE27k", "xVMXb4sxcy4obJVqKT9yPF95", "X4CSEIFJVBf4hIUePN4rc87n"];
Ent_BdGhpbmcgdGFibGUa.prototype["tYOOFsXQB7ClRutqdGre45P0_realname"] = "gameLanguage";
Ent_BdGhpbmcgdGFibGUa.prototype["tprk9Vt7fApuXjG4Bzs6vxR2_realname"] = "Score";
Ent_BdGhpbmcgdGFibGUa.prototype["x97k4OqdzZhjaUssZa188BiK_realname"] = "GameLvl";
Ent_BdGhpbmcgdGFibGUa.prototype["lSH22Ur1iL1WXxR6PrKtXk7R_realname"] = "RightCount";
Ent_BdGhpbmcgdGFibGUa.prototype["j48gn47lmPQ4AAH5GRWRmY5c_realname"] = "WrongCount";
Ent_BdGhpbmcgdGFibGUa.prototype["h1i5u3Ip4VI7BG6B6i7GHbqb_realname"] = "Progress";
Ent_BdGhpbmcgdGFibGUa.prototype["odxTm04nZ8j7xi4EgFpq4W7g_realname"] = "LastScore";
Ent_BdGhpbmcgdGFibGUa.prototype["xDLhMO6JcixHmeGB5LPywOzO_realname"] = "UpdateGameSpeed";
Ent_BdGhpbmcgdGFibGUa.prototype["xAaRx7PNQZ4GRjElNT72VO6z_realname"] = "UpdateGameSpeedWork";
Ent_BdGhpbmcgdGFibGUa.prototype["E2AmTvnJwgIQktl6JDk4Cefr_realname"] = "ProgressWrongAnswers";
Ent_BdGhpbmcgdGFibGUa.prototype["opNGBetuACUI6oBAU5UawGxx_realname"] = "GameMode";
Ent_BdGhpbmcgdGFibGUa.prototype["EEKj0ENZS0lmBdBXqVvAE27k_realname"] = "GameSpeed";
Ent_BdGhpbmcgdGFibGUa.prototype["xVMXb4sxcy4obJVqKT9yPF95_realname"] = "Lives";
Ent_BdGhpbmcgdGFibGUa.prototype["X4CSEIFJVBf4hIUePN4rc87n_realname"] = "SpeedEdit";
//Tbl_BdGhpbmcgdGFibGUa
function Tbl_BdGhpbmcgdGFibGUa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BdGhpbmcgdGFibGUa.prototype = new lib.CloudTableSingleton();
Tbl_BdGhpbmcgdGFibGUa.prototype.entryCtor = Ent_BdGhpbmcgdGFibGUa;
cs.objectSingletons["GameData"] = function(d) { return d.$BdGhpbmcgdGFibGUa };
Tbl_BdGhpbmcgdGFibGUa.prototype.selfCtor = Tbl_BdGhpbmcgdGFibGUa;
Tbl_BdGhpbmcgdGFibGUa.prototype.stableName = "BdGhpbmcgdGFibGUa";
Tbl_BdGhpbmcgdGFibGUa.prototype.entryKindName = "GameData";
Tbl_BdGhpbmcgdGFibGUa.prototype.cloudtype = "BdGhpbmcgdGFibGUa\u0028\u0029";
Tbl_BdGhpbmcgdGFibGUa.prototype.key_cloudtypes = [];
Tbl_BdGhpbmcgdGFibGUa.prototype.value_cloudtypes = ["tYOOFsXQB7ClRutqdGre45P0\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "tprk9Vt7fApuXjG4Bzs6vxR2\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "x97k4OqdzZhjaUssZa188BiK\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "lSH22Ur1iL1WXxR6PrKtXk7R\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "j48gn47lmPQ4AAH5GRWRmY5c\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "h1i5u3Ip4VI7BG6B6i7GHbqb\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "odxTm04nZ8j7xi4EgFpq4W7g\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "xDLhMO6JcixHmeGB5LPywOzO\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "xAaRx7PNQZ4GRjElNT72VO6z\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "E2AmTvnJwgIQktl6JDk4Cefr\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "opNGBetuACUI6oBAU5UawGxx\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "EEKj0ENZS0lmBdBXqVvAE27k\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "xVMXb4sxcy4obJVqKT9yPF95\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d", "X4CSEIFJVBf4hIUePN4rc87n\u002cdouble\u005bBdGhpbmcgdGFibGUa\u0028\u0029\u005d"];
Tbl_BdGhpbmcgdGFibGUa.prototype.localsession = true;

// jsonimport
Ent_BdGhpbmcgdGFibGUa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("tYOOFsXQB7ClRutqdGre45P0", ctx.importNumber(json, "gameLanguage"), s);
  this.perform_set("tprk9Vt7fApuXjG4Bzs6vxR2", ctx.importNumber(json, "Score"), s);
  this.perform_set("x97k4OqdzZhjaUssZa188BiK", ctx.importNumber(json, "GameLvl"), s);
  this.perform_set("lSH22Ur1iL1WXxR6PrKtXk7R", ctx.importNumber(json, "RightCount"), s);
  this.perform_set("j48gn47lmPQ4AAH5GRWRmY5c", ctx.importNumber(json, "WrongCount"), s);
  this.perform_set("h1i5u3Ip4VI7BG6B6i7GHbqb", ctx.importNumber(json, "Progress"), s);
  this.perform_set("odxTm04nZ8j7xi4EgFpq4W7g", ctx.importNumber(json, "LastScore"), s);
  this.perform_set("xDLhMO6JcixHmeGB5LPywOzO", ctx.importNumber(json, "UpdateGameSpeed"), s);
  this.perform_set("xAaRx7PNQZ4GRjElNT72VO6z", ctx.importNumber(json, "UpdateGameSpeedWork"), s);
  this.perform_set("E2AmTvnJwgIQktl6JDk4Cefr", ctx.importNumber(json, "ProgressWrongAnswers"), s);
  this.perform_set("opNGBetuACUI6oBAU5UawGxx", ctx.importNumber(json, "GameMode"), s);
  this.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", ctx.importNumber(json, "GameSpeed"), s);
  this.perform_set("xVMXb4sxcy4obJVqKT9yPF95", ctx.importNumber(json, "Lives"), s);
  this.perform_set("X4CSEIFJVBf4hIUePN4rc87n", ctx.importNumber(json, "SpeedEdit"), s);
}
cs.registerGlobal("$BdGhpbmcgdGFibGUa");
/* ACTION: SaveInDB */
function a_x0upCuxioZlcbhHobn2kveNP(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_x0upCuxioZlcbhHobn2kveNP$0;
  s.name = "SaveInDB";
  return s;
}
cs.registerAction("SaveInDB", "x0upCuxioZlcbhHobn2kveNP", a_x0upCuxioZlcbhHobn2kveNP, false);

function a_x0upCuxioZlcbhHobn2kveNP$0(s) {
  (s.pc = "xi4GUqoBSsx0Fu3o");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("tprk9Vt7fApuXjG4Bzs6vxR2", /* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm, s);
  }
  (s.pc = "X0ClJS46WRokF3pZ");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("x97k4OqdzZhjaUssZa188BiK", /* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK, s);
  }
  (s.pc = "mbG7bSj2aONZj4Fd");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("lSH22Ur1iL1WXxR6PrKtXk7R", /* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf, s);
  }
  (s.pc = "lnY2I4pkhHfIfYPT");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("j48gn47lmPQ4AAH5GRWRmY5c", /* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2, s);
  }
  (s.pc = "YwM5gtGlEa7WDtH2");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("h1i5u3Ip4VI7BG6B6i7GHbqb", /* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4, s);
  }
  (s.pc = "lZsD6khe2I9OY4Ov");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("odxTm04nZ8j7xi4EgFpq4W7g", /* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz, s);
  }
  (s.pc = "oPA8ZkZRm8SXKLDo");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("xDLhMO6JcixHmeGB5LPywOzO", /* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW, s);
  }
  (s.pc = "dJCSvD2Md3QlGtDt");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("xAaRx7PNQZ4GRjElNT72VO6z", /* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs, s);
  }
  (s.pc = "w0a8ZDYNuH00R8VZ");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("E2AmTvnJwgIQktl6JDk4Cefr", /* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad, s);
  }
  (s.pc = "HqlRGTMViGQhic6n");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("opNGBetuACUI6oBAU5UawGxx", /* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA, s);
  }
  (s.pc = "ytUiUqMrgX0vbrJw");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("xVMXb4sxcy4obJVqKT9yPF95", /* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv, s);
  }
  (s.pc = "GhZ15ZI1AfzYXMTz");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("EEKj0ENZS0lmBdBXqVvAE27k", /* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_x0upCuxioZlcbhHobn2kveNP$0, 'a_x0upCuxioZlcbhHobn2kveNP$0');

/* ACTION: RestoreData */
function a_BzzqwWizcEHC54ODRvqkHzCX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_BzzqwWizcEHC54ODRvqkHzCX$0;
  s.name = "RestoreData";
  return s;
}
cs.registerAction("RestoreData", "BzzqwWizcEHC54ODRvqkHzCX", a_BzzqwWizcEHC54ODRvqkHzCX, false);

function a_BzzqwWizcEHC54ODRvqkHzCX$0(s) {
  (s.pc = "z1Xv6t71DTjdJh2j");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_0 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("tprk9Vt7fApuXjG4Bzs6vxR2", s);
  }
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = t_recOp_0);
  s.rt.logDataWrite();
  (s.pc = "xcrcmv2DwVpEuK5m");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_1 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("x97k4OqdzZhjaUssZa188BiK", s);
  }
  (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK = t_recOp_1);
  s.rt.logDataWrite();
  (s.pc = "ziK2eOHYAU3g2j3N");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_2 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("lSH22Ur1iL1WXxR6PrKtXk7R", s);
  }
  (/* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf = t_recOp_2);
  s.rt.logDataWrite();
  (s.pc = "Ff9NgDDNwePCKMWy");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_3 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("j48gn47lmPQ4AAH5GRWRmY5c", s);
  }
  (/* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2 = t_recOp_3);
  s.rt.logDataWrite();
  (s.pc = "q4KeFy4rCnKWZ3R7");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_4 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("h1i5u3Ip4VI7BG6B6i7GHbqb", s);
  }
  (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 = t_recOp_4);
  s.rt.logDataWrite();
  (s.pc = "op30Bo1OoKrHvfhK");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_5 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("odxTm04nZ8j7xi4EgFpq4W7g", s);
  }
  (/* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz = t_recOp_5);
  s.rt.logDataWrite();
  (s.pc = "xUeo4LhPtDS8seX3");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_6 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("xDLhMO6JcixHmeGB5LPywOzO", s);
  }
  (/* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW = t_recOp_6);
  s.rt.logDataWrite();
  (s.pc = "BDsi2JznUTyXnF6F");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_7 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("xAaRx7PNQZ4GRjElNT72VO6z", s);
  }
  (/* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs = t_recOp_7);
  s.rt.logDataWrite();
  (s.pc = "HmbxqX2xF07E1cO9");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_8 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("E2AmTvnJwgIQktl6JDk4Cefr", s);
  }
  (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad = t_recOp_8);
  s.rt.logDataWrite();
  (s.pc = "BBTu2yckYRq6W0VV");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_9 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("opNGBetuACUI6oBAU5UawGxx", s);
  }
  (/* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA = t_recOp_9);
  s.rt.logDataWrite();
  (s.pc = "xlPQp6oYHSFpY8qy");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_10 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("EEKj0ENZS0lmBdBXqVvAE27k", s);
  }
  (/* Speed */ s.d.$ZOW2c9rvPNmnpETCtWXMQHLA = t_recOp_10);
  s.rt.logDataWrite();
  (s.pc = "NHHaZeDkBoP24Dl6");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  var t_recOp_11 = /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_get("xVMXb4sxcy4obJVqKT9yPF95", s);
  }
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = t_recOp_11);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_BzzqwWizcEHC54ODRvqkHzCX$0, 'a_BzzqwWizcEHC54ODRvqkHzCX$0');

/* ACTION: Lvl2ShowBirds */
function a_iOC0hwvLjrZoG8j6hD658X77(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_iOC0hwvLjrZoG8j6hD658X77$0;
  s.name = "Lvl2ShowBirds";
  return s;
}
cs.registerAction("Lvl2ShowBirds", "iOC0hwvLjrZoG8j6hD658X77", a_iOC0hwvLjrZoG8j6hD658X77, false);

function a_iOC0hwvLjrZoG8j6hD658X77$0(s) {
  (s.pc = "AoHtra7P5wzi59yU");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.hide(s));
  (s.pc = "pzH9UhqaMy5RE8fZ");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.hide(s));
  (s.pc = "C49MTVNwqXy7K6M2");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.hide(s));
  (s.pc = "xzefso0hVTZu43jK");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.hide(s));
  (s.pc = "hdcvxPRY4QNOSTHc");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_iOC0hwvLjrZoG8j6hD658X77$1);
  var t_call_1 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* down_lvl2 */ s.d.$aDcY4jRcqPQj6GJuUNgSS257) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* down_lvl2 */ s.d.$aDcY4jRcqPQj6GJuUNgSS257, t_resumeCtx_0));
  return a_iOC0hwvLjrZoG8j6hD658X77$1;
}
cs.registerStep(a_iOC0hwvLjrZoG8j6hD658X77$0, 'a_iOC0hwvLjrZoG8j6hD658X77$0');

function a_iOC0hwvLjrZoG8j6hD658X77$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW = t_pauseRes_2);
  s.rt.logDataWrite();
  (s.pc = "xSwo2GueEq6F2vgp");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.set_width(100, s));
  (s.pc = "dAiU4bQ3oGAwDMlB");
  s.rt.logObjectMutation(/* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW);
  (ok1(s, /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW) && /* upBirds */ s.d.$aS527DI4A8CGzbbWCn23lOxW.hide(s));
  (s.pc = "MSvSORGQkGfQSW22");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_iOC0hwvLjrZoG8j6hD658X77$2);
  var t_call_4 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* up_lvl2 */ s.d.$eKFbO2YWjRmquW4PITyDb6Mw) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* up_lvl2 */ s.d.$eKFbO2YWjRmquW4PITyDb6Mw, t_resumeCtx_3));
  return a_iOC0hwvLjrZoG8j6hD658X77$2;
}
cs.registerStep(a_iOC0hwvLjrZoG8j6hD658X77$1, 'a_iOC0hwvLjrZoG8j6hD658X77$1');

function a_iOC0hwvLjrZoG8j6hD658X77$2(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr = t_pauseRes_5);
  s.rt.logDataWrite();
  (s.pc = "C2jd4bEDujH6hkYZ");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.set_width(100, s));
  (s.pc = "F27jwjvbpM7CfvHj");
  s.rt.logObjectMutation(/* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr);
  (ok1(s, /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr) && /* downBirds */ s.d.$AApLJzqOcaNQ36Gmgn65VRgr.hide(s));
  (s.pc = "xX4oyM377Rw8IewW");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_iOC0hwvLjrZoG8j6hD658X77$3);
  var t_call_7 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* left_lvl2 */ s.d.$GyI0vDU02qPMWiRMhc2wAmt7) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* left_lvl2 */ s.d.$GyI0vDU02qPMWiRMhc2wAmt7, t_resumeCtx_6));
  return a_iOC0hwvLjrZoG8j6hD658X77$3;
}
cs.registerStep(a_iOC0hwvLjrZoG8j6hD658X77$2, 'a_iOC0hwvLjrZoG8j6hD658X77$2');

function a_iOC0hwvLjrZoG8j6hD658X77$3(s) {
  var t_pauseRes_8 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_8);
  (/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp = t_pauseRes_8);
  s.rt.logDataWrite();
  (s.pc = "ET294Ku5Yk2xnJ3v");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.set_height(100, s));
  (s.pc = "lyGlmX1DzC6VEgpw");
  s.rt.logObjectMutation(/* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp);
  (ok1(s, /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp) && /* rightBirds */ s.d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp.hide(s));
  (s.pc = "yalFL5UV9MksyaEv");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_iOC0hwvLjrZoG8j6hD658X77$4);
  var t_call_10 = (ok2(s, /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC, /* right_lvl2 */ s.d.$CzdzZZ8GE1Xg5jA7wTvQzW3H) && /* board */ s.d.$xelQlRl1aU2ItqshlPnZD5lC.create_picture(/* right_lvl2 */ s.d.$CzdzZZ8GE1Xg5jA7wTvQzW3H, t_resumeCtx_9));
  return a_iOC0hwvLjrZoG8j6hD658X77$4;
}
cs.registerStep(a_iOC0hwvLjrZoG8j6hD658X77$3, 'a_iOC0hwvLjrZoG8j6hD658X77$3');

function a_iOC0hwvLjrZoG8j6hD658X77$4(s) {
  var t_pauseRes_11 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_11);
  (/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl = t_pauseRes_11);
  s.rt.logDataWrite();
  (s.pc = "xTQ8ZVtcS2ipIRGO");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.set_height(100, s));
  (s.pc = "gom4tCqwOwjnEgc7");
  s.rt.logObjectMutation(/* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl);
  (ok1(s, /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl) && /* leftBirds */ s.d.$vknOAdSosvMAu0a34XBkTIbl.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_iOC0hwvLjrZoG8j6hD658X77$4, 'a_iOC0hwvLjrZoG8j6hD658X77$4');

/* ACTION: MakeItDefult */
function a_en0ZX0ns15nlfTYaNwmqk2Pd(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_en0ZX0ns15nlfTYaNwmqk2Pd$0;
  s.name = "MakeItDefult";
  return s;
}
cs.registerAction("MakeItDefult", "en0ZX0ns15nlfTYaNwmqk2Pd", a_en0ZX0ns15nlfTYaNwmqk2Pd, false);

function a_en0ZX0ns15nlfTYaNwmqk2Pd$0(s) {
  (s.pc = "aFmscuuKoi5O2TlT");
  (/* score */ s.d.$sDT5V3A18yqJuv0Rn0BQeJmm = 0);
  s.rt.logDataWrite();
  (s.pc = "x09JyX0xfXutdWBD");
  (/* gamelvl */ s.d.$hYE2yAnQT5NmeYt5wCaDRUrK = 0);
  s.rt.logDataWrite();
  (s.pc = "HpCNtUv9sxEHahAr");
  (/* rightCount */ s.d.$Xnr2bE82wZFzGR7gnbHB73gf = 0);
  s.rt.logDataWrite();
  (s.pc = "hj53z2SDy2aK4nwZ");
  (/* wrongCount */ s.d.$gxI9GV9UzN2eodtGFTkroXU2 = 0);
  s.rt.logDataWrite();
  (s.pc = "GTD7V9AozIvBfYP4");
  (/* progress */ s.d.$DYCB41CFyU8uhNG5lpkiUMV4 = 0);
  s.rt.logDataWrite();
  (s.pc = "O4LL9GNfr23jWHk7");
  (/* lastScore */ s.d.$svbvvDa5JhMAZ5p7wMCgzioz = 0);
  s.rt.logDataWrite();
  (s.pc = "Iz2HgWOR77cXq4YJ");
  (/* updateGameSpeed */ s.d.$i4UBjp8i5dkYz00XJpUjeuXW = 1);
  s.rt.logDataWrite();
  (s.pc = "aLrfBt46y2EnhvbN");
  (/* updateGameSpeedWork */ s.d.$KOOlIH41SLGllINjk6q8DJHs = 1);
  s.rt.logDataWrite();
  (s.pc = "APZsuzd1M25t72wp");
  (/* progressWrongAnswers */ s.d.$TtRynaVkqWJWqVscRxM2hjad = 0);
  s.rt.logDataWrite();
  (s.pc = "xRr4DwI1cInIvIMx");
  (/* gameMode */ s.d.$xP4QZYhYqi7vsXeRj4BFl6wA = 1);
  s.rt.logDataWrite();
  (s.pc = "xnTlHBJT8Z4O6ldP");
  if (/* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV) {
  /* DBAccess */ s.d.$JkxXbzmKb4aWq0m2e792L2MV.perform_set("X4CSEIFJVBf4hIUePN4rc87n", 0, s);
  }
  (s.pc = "EpJcGDGekkcDFOiz");
  (/* Lives */ s.d.$WkR21YlaETAuyyDCh2s2Ncpv = 3);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_en0ZX0ns15nlfTYaNwmqk2Pd$0, 'a_en0ZX0ns15nlfTYaNwmqk2Pd$0');

(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Brain Training  \u0028avbl\u0029";
  bnd.scriptId = "avbl";
  bnd.topScriptId = "avbl";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["paintKeys"] = cs.mkLibProxyFactory(bnd, "this", "paintKeys");
    lib["start"] = cs.mkLibProxyFactory(bnd, "this", "start");
    lib["gameloop"] = cs.mkLibProxyFactory(bnd, "this", "gameloop");
    lib["create mainmenu"] = cs.mkLibProxyFactory(bnd, "this", "create mainmenu");
    lib["tap sprite\u003a play2"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a play2");
    lib["tap sprite\u003a play3"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a play3");
  lib = libs["game"] = {};
  bnd = bnds["game"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "game");
  bnd.scriptName = "game \u0028lnhr\u0029";
  bnd.scriptId = "lnhr";
  bnd.topScriptId = "avbl";
    lib["set life"] = cs.mkLibProxyFactory(bnd, "game", "set life");
    lib["life"] = cs.mkLibProxyFactory(bnd, "game", "life");
    lib["score"] = cs.mkLibProxyFactory(bnd, "game", "score");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "game", "add score");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "game", "remove life");
    lib["end"] = cs.mkLibProxyFactory(bnd, "game", "end");
    lib["start"] = cs.mkLibProxyFactory(bnd, "game", "start");
    lib["board"] = cs.mkLibProxyFactory(bnd, "game", "board");
  lib = libs["vk4YirHiqGbPTNTjv1IL5dsL"] = {};
  bnd = bnds["vk4YirHiqGbPTNTjv1IL5dsL"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "vk4YirHiqGbPTNTjv1IL5dsL");
  bnd.scriptName = "gamepad \u0028arsnd\u0029";
  bnd.scriptId = "arsnd";
  bnd.topScriptId = "avbl";
  bnd = bnds["game"];
  bnd["this$lib"] = "game";
  bnd = bnds["vk4YirHiqGbPTNTjv1IL5dsL"];
  bnd["this$lib"] = "vk4YirHiqGbPTNTjv1IL5dsL";
    resolve = bnd["vIOEa4LjBL2h78vLd1Ls3U5z"] = {};
    bnd["vIOEa4LjBL2h78vLd1Ls3U5z" + "$lib"] = "game";
      resolve["board"] = libs["game"]["board"];
      resolve["start"] = libs["game"]["start"];
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
  if(!d.hasOwnProperty("$S20LDaED0mEDQg6212p9xtgo")) d.$S20LDaED0mEDQg6212p9xtgo = 0;
  if(!d.hasOwnProperty("$xEStMTZeWHxa4XQnJzkCs14f")) d.$xEStMTZeWHxa4XQnJzkCs14f = 0;
  if(!d.hasOwnProperty("$sDT5V3A18yqJuv0Rn0BQeJmm")) d.$sDT5V3A18yqJuv0Rn0BQeJmm = 0;
  if(!d.hasOwnProperty("$pqY45PwpGe6EG6Kk36rvvPm3")) d.$pqY45PwpGe6EG6Kk36rvvPm3 = lib.DateTime.defaultValue;
  if(!d.hasOwnProperty("$pt4dN9KFvSoIHDo2pBXapOsp")) d.$pt4dN9KFvSoIHDo2pBXapOsp = 0;
  if(!d.hasOwnProperty("$hYE2yAnQT5NmeYt5wCaDRUrK")) d.$hYE2yAnQT5NmeYt5wCaDRUrK = 0;
  if(!d.hasOwnProperty("$Xnr2bE82wZFzGR7gnbHB73gf")) d.$Xnr2bE82wZFzGR7gnbHB73gf = 0;
  if(!d.hasOwnProperty("$gxI9GV9UzN2eodtGFTkroXU2")) d.$gxI9GV9UzN2eodtGFTkroXU2 = 0;
  if(!d.hasOwnProperty("$ZOW2c9rvPNmnpETCtWXMQHLA")) d.$ZOW2c9rvPNmnpETCtWXMQHLA = 0;
  if(!d.hasOwnProperty("$DYCB41CFyU8uhNG5lpkiUMV4")) d.$DYCB41CFyU8uhNG5lpkiUMV4 = 0;
  if(!d.hasOwnProperty("$svbvvDa5JhMAZ5p7wMCgzioz")) d.$svbvvDa5JhMAZ5p7wMCgzioz = 0;
  if(!d.hasOwnProperty("$i4UBjp8i5dkYz00XJpUjeuXW")) d.$i4UBjp8i5dkYz00XJpUjeuXW = 0;
  if(!d.hasOwnProperty("$KOOlIH41SLGllINjk6q8DJHs")) d.$KOOlIH41SLGllINjk6q8DJHs = 0;
  if(!d.hasOwnProperty("$TtRynaVkqWJWqVscRxM2hjad")) d.$TtRynaVkqWJWqVscRxM2hjad = 0;
  if(!d.hasOwnProperty("$xP4QZYhYqi7vsXeRj4BFl6wA")) d.$xP4QZYhYqi7vsXeRj4BFl6wA = 0;
  if(!d.hasOwnProperty("$x62Ep5uLuqKO9ZeIPSxKMtrg")) d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 0;
  if(!d.hasOwnProperty("$BdGhpbmcgdGFibGUa") || !d["$BdGhpbmcgdGFibGUa"]) d.$BdGhpbmcgdGFibGUa = new Tbl_BdGhpbmcgdGFibGUa(d.libName);
  if(!d.hasOwnProperty("$WkR21YlaETAuyyDCh2s2Ncpv")) d.$WkR21YlaETAuyyDCh2s2Ncpv = 0;
  if(!d.hasOwnProperty("$xQM8xioIPeuY22hADLxozWJu")) d.$xQM8xioIPeuY22hADLxozWJu = false;
  if(!d.hasOwnProperty("$PrOn12L9EmBqtAWhCt7IFoYc")) d.$PrOn12L9EmBqtAWhCt7IFoYc = 0;
  if(!d.hasOwnProperty("$tXCGvhwGJoK4GSew")) d.$tXCGvhwGJoK4GSew = false;

};

cs._initGlobals2 = function(d) {
d.$BdGhpbmcgdGFibGUa.name = "GameData";d.$BdGhpbmcgdGFibGUa.linked_cloudtables = [];
};

cs._resetGlobals = function(d) {
  d.$xelQlRl1aU2ItqshlPnZD5lC = undefined;
  d.$S20LDaED0mEDQg6212p9xtgo = 0;
  d.$xEStMTZeWHxa4XQnJzkCs14f = 0;
  d.$aS527DI4A8CGzbbWCn23lOxW = undefined;
  d.$Ym0R2S2ONVW8Wbe0Cu1cGdGp = undefined;
  d.$vknOAdSosvMAu0a34XBkTIbl = undefined;
  d.$AApLJzqOcaNQ36Gmgn65VRgr = undefined;
  d.$sDT5V3A18yqJuv0Rn0BQeJmm = 0;
  d.$pqY45PwpGe6EG6Kk36rvvPm3 = lib.DateTime.defaultValue;
  d.$pt4dN9KFvSoIHDo2pBXapOsp = 0;
  d.$hYE2yAnQT5NmeYt5wCaDRUrK = 0;
  d.$AcTeyqPXO8D0VIyTC4AyG72w = undefined;
  d.$wx2K9oDmDUbzx2o4t9a4VnOS = undefined;
  d.$IHMiy5VQVa1ERjPHixGu4wam = undefined;
  d.$Xnr2bE82wZFzGR7gnbHB73gf = 0;
  d.$gxI9GV9UzN2eodtGFTkroXU2 = 0;
  d.$ZOW2c9rvPNmnpETCtWXMQHLA = 0;
  d.$DYCB41CFyU8uhNG5lpkiUMV4 = 0;
  d.$svbvvDa5JhMAZ5p7wMCgzioz = 0;
  d.$Ev7b7ONrwGah6aHmeXw2ykOE = undefined;
  d.$i4UBjp8i5dkYz00XJpUjeuXW = 0;
  d.$KOOlIH41SLGllINjk6q8DJHs = 0;
  d.$TtRynaVkqWJWqVscRxM2hjad = 0;
  d.$ADK1w7zCWzIUDAIBPFFcBvAD = undefined;
  d.$LDSOj119unllEJ1v9W8aaM18 = undefined;
  d.$xP4QZYhYqi7vsXeRj4BFl6wA = 0;
  d.$KHDnfQqaScf0CWifPnGyduVG = undefined;
  d.$j1VukLlGUNlUynqQK0cDYVlG = undefined;
  d.$RjYHAaxrmFEb7AOIdQNv5srJ = undefined;
  d.$PeVXx8oDv5OcBsMO4VlSmCkG = undefined;
  d.$ovIviND2yV2OAQnXKJZ4LLIS = undefined;
  d.$x4VkyHdIjRP1g8Fa12xqideZ = undefined;
  d.$YQBIDm5XkC0q48BIkuAMb348 = undefined;
  d.$ZwL79mU290KV77PxaSBmvkoR = undefined;
  d.$x0zB4UM8mHYsWTbaswcTtRPA = undefined;
  d.$NF0kHjjsWYjqnu0z4KYE29wZ = undefined;
  d.$vcUc7skKCS7sDvchDmiIGWz2 = undefined;
  d.$eKFbO2YWjRmquW4PITyDb6Mw = undefined;
  d.$aDcY4jRcqPQj6GJuUNgSS257 = undefined;
  d.$CzdzZZ8GE1Xg5jA7wTvQzW3H = undefined;
  d.$GyI0vDU02qPMWiRMhc2wAmt7 = undefined;
  d.$mSGv6SPyqeKRyu4iW9JRQjnK = undefined;
  d.$rUG2o3YHKEvkJJWecSXF26SV = undefined;
  d.$xqSH8omV8h4NL0PVAXXc5cTx = undefined;
  d.$DwlO3U3BecxR5iHWzCnq3ygy = undefined;
  d.$xK4KVDLAJbhRWgEoqxMxujyC = undefined;
  d.$x62Ep5uLuqKO9ZeIPSxKMtrg = 0;
  d.$GBZdVgFOcNic8i2c44ymqswJ = undefined;
  d.$N80k7z8ISlcPUeb80okfEZq2 = undefined;
  d.$xMfqQF16AK6vtH9Y5YkL2r9x = undefined;
  d.$EY4FMN4RiKxPWnC4IvtS6VEq = undefined;
  d.$BdGhpbmcgdGFibGUa = undefined;
  d.$JkxXbzmKb4aWq0m2e792L2MV = undefined;
  d.$WkR21YlaETAuyyDCh2s2Ncpv = 0;
  d.$xQM8xioIPeuY22hADLxozWJu = false;
  d.$PrOn12L9EmBqtAWhCt7IFoYc = 0;
  d.$tXCGvhwGJoK4GSew = false;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "avbl";
cs.scriptGuid = "66d16d3c-0039-4654-9367-87b47ded293f";
cs.hasLocalData = 1;
}),

// **************************************************************
"game": (function (cs) {
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

function a_Ayu95FKZqA9xPdjQXSANLGvP$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "1.61");
  var t_infix_1 = (ok1(s, s.$width) && (s.$width < 0));
  var t_lazy_2 = t_infix_1;
  if ((ok1(s, t_lazy_2) && (!t_lazy_2))) {
  var t_infix_3 = (ok1(s, s.$height) && (s.$height < 0));
  (t_lazy_2 = t_infix_3);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "1.650");
  var t_call_4 = lib.Wall.width(s);
  var t_call_5 = lib.Wall.height(s);
  var t_infix_6 = (ok2(s, t_call_4, t_call_5) && (t_call_4 / t_call_5));
  (s.$ratio = t_infix_6);
  var t_elseIf_7 = true;
  (s.pc = "1.653");
  var t_infix_8 = (ok1(s, s.$ratio) && (s.$ratio < 1));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "1.6570");
  var t_infix_9 = (ok1(s, s.$ratio) && (800 * s.$ratio));
  (s.$width = t_infix_9);
  (s.pc = "1.6573");
  (s.$height = 800);
  } else {
  (s.pc = "1.6580");
  (s.$width = 800);
  (s.pc = "1.6583");
  var t_infix_10 = (ok1(s, s.$ratio) && (800 / s.$ratio));
  (s.$height = t_infix_10);
  }
  } else {
  (s.pc = "1.660");
  null;
  }
  var t_elseIf_11 = true;
  (s.pc = "1.66");
  var t_infix_12 = (ok2(s, s.$width, s.$height) && (s.$width < s.$height));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (s.pc = "1.6a0");
  var t_call_13 = (ok2(s, s.$width, s.$height) && lib.Media.create_portrait_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_13);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_13);
  s.rt.logDataWrite();
  } else {
  (s.pc = "1.6b0");
  var t_call_14 = (ok2(s, s.$width, s.$height) && lib.Media.create_landscape_board(s.$width, s.$height, s));
  s.rt.markAllocated(t_call_14);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_14);
  s.rt.logDataWrite();
  }
  (s.pc = "1.6b");
  var t_infix_15 = (0 - 1);
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = t_infix_15);
  s.rt.logDataWrite();
  (s.pc = "1.6e");
  var t_infix_16 = (0 - 1);
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = t_infix_16);
  s.rt.logDataWrite();
  (s.pc = "1.6h");
  var t_call_17 = lib.Invalid.datetime(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_17);
  s.rt.logDataWrite();
  (s.pc = "1.6k");
  var t_call_18 = lib.Invalid.sprite(s);
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_call_18);
  s.rt.logDataWrite();
  (s.pc = "1.6n");
  var t_call_19 = lib.Invalid.sprite(s);
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_call_19);
  s.rt.logDataWrite();
  (s.pc = "1.6q");
  var t_call_20 = lib.Invalid.sprite(s);
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_call_20);
  s.rt.logDataWrite();
  (s.pc = "1.6t");
  var t_infix_21 = (0 - 1);
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = t_infix_21);
  s.rt.logDataWrite();
  (s.pc = "1.6w");
  var t_call_22 = lib.String_.split("---\u003b\u2764\u003b\u2764\u2764\u003b\u2764\u2764\u2764", "\u003b", s);
  s.rt.markAllocated(t_call_22);
  (/* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m = t_call_22);
  s.rt.logDataWrite();
  (s.pc = "1.6z");
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_Ayu95FKZqA9xPdjQXSANLGvP$5, 0));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$0, 'a_Ayu95FKZqA9xPdjQXSANLGvP$0');

function a_Ayu95FKZqA9xPdjQXSANLGvP$5(s) {
  (s.pc = "1.6C");
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_Ayu95FKZqA9xPdjQXSANLGvP$6, 3));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$5, 'a_Ayu95FKZqA9xPdjQXSANLGvP$5');

function a_Ayu95FKZqA9xPdjQXSANLGvP$6(s) {
  var t_actRes_23 = s.rt.returnedFrom.result;
  t_actRes_23;
  return s.rt.leave();
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$6, 'a_Ayu95FKZqA9xPdjQXSANLGvP$6');

/* ACTION: set score */
function a_oKY8zayGQ3QsufrQiKXXS9sh(previous, returnAddr, $value) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_oKY8zayGQ3QsufrQiKXXS9sh$0;
  s.name = "set score";
  s.$value = $value;
  return s;
}
cs.registerAction("set score", "oKY8zayGQ3QsufrQiKXXS9sh", a_oKY8zayGQ3QsufrQiKXXS9sh, false);

function a_oKY8zayGQ3QsufrQiKXXS9sh$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_oKY8zayGQ3QsufrQiKXXS9sh$2, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_oKY8zayGQ3QsufrQiKXXS9sh$2;
  }
  return a_oKY8zayGQ3QsufrQiKXXS9sh$1;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$0, 'a_oKY8zayGQ3QsufrQiKXXS9sh$0');

function a_oKY8zayGQ3QsufrQiKXXS9sh$2(s) {
  return a_oKY8zayGQ3QsufrQiKXXS9sh$1;
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$2, 'a_oKY8zayGQ3QsufrQiKXXS9sh$2');

function a_oKY8zayGQ3QsufrQiKXXS9sh$1(s) {
  (s.pc = "1.c1");
  (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m = s.$value);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_oKY8zayGQ3QsufrQiKXXS9sh$1, 'a_oKY8zayGQ3QsufrQiKXXS9sh$1');

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
  (s.pc = "1.h1");
  var t_call_0 = (ok1(s, s.$value) && lib.Math_.max(0, s.$value, s));
  (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV = t_call_0);
  s.rt.logDataWrite();
  var t_elseIf_1 = true;
  (s.pc = "1.h4");
  var t_infix_2 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV <= 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "1.h80");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_l4svuo4DZFDcDqJbGklzHLTi$2));
  } else {
  (s.pc = "1.h90");
  null;
  }
  return a_l4svuo4DZFDcDqJbGklzHLTi$1;
}
cs.registerStep(a_l4svuo4DZFDcDqJbGklzHLTi$4, 'a_l4svuo4DZFDcDqJbGklzHLTi$4');

function a_l4svuo4DZFDcDqJbGklzHLTi$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "1.h83");
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

/* ACTION: life */
function a_YXmGOuliQ2RYyUc3NtRv9DNE(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_YXmGOuliQ2RYyUc3NtRv9DNE$0;
  s.name = "life";
  s.result = undefined;
  return s;
}
cs.registerAction("life", "YXmGOuliQ2RYyUc3NtRv9DNE", a_YXmGOuliQ2RYyUc3NtRv9DNE, false);

function a_YXmGOuliQ2RYyUc3NtRv9DNE$0(s) {
  (s.pc = "1.w1");
  (s.result = /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV);
  if (s.previous.needsPicker) {
  s.rt.displayResult("r", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_YXmGOuliQ2RYyUc3NtRv9DNE$0, 'a_YXmGOuliQ2RYyUc3NtRv9DNE$0');

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
  (s.pc = "1.D1");
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
  (s.pc = "1.J0");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "1.J40");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.evolve(s));
  var t_elseIf_2 = true;
  (s.pc = "1.J43");
  var t_infix_3 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && (/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV >= 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "1.J470");
  return s.rt.enter(a_XjXM7AL67NDGlzsZgg9s44uq(s, a_gswamj84uYSwqLED2VvLdKi6$3));
  } else {
  (s.pc = "1.J480");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
  } else {
  (s.pc = "1.J50");
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
  (s.pc = "1.J48");
  var t_infix_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m >= 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "1.J4c0");
  return s.rt.enter(a_ify9GgXEJgKuJ9u1VD6EdWZv(s, a_gswamj84uYSwqLED2VvLdKi6$5));
  } else {
  (s.pc = "1.J4d0");
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
  return a_gswamj84uYSwqLED2VvLdKi6$4;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$5, 'a_gswamj84uYSwqLED2VvLdKi6$5');

function a_gswamj84uYSwqLED2VvLdKi6$4(s) {
  var t_elseIf_6 = true;
  (s.pc = "1.J4d");
  var t_call_7 = lib.Boolean_.not((/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY == undefined), s);
  ok1(s, t_call_7);
  if (t_call_7) {
  (s.pc = "1.J4h0");
  return s.rt.enter(a_PojbQsm32lz5k054APQR8Jb1(s, a_gswamj84uYSwqLED2VvLdKi6$7));
  } else {
  (s.pc = "1.J4i0");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$6;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$4, 'a_gswamj84uYSwqLED2VvLdKi6$4');

function a_gswamj84uYSwqLED2VvLdKi6$7(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_gswamj84uYSwqLED2VvLdKi6$6;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$7, 'a_gswamj84uYSwqLED2VvLdKi6$7');

function a_gswamj84uYSwqLED2VvLdKi6$6(s) {
  return a_gswamj84uYSwqLED2VvLdKi6$1;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$6, 'a_gswamj84uYSwqLED2VvLdKi6$6');

/* ACTION: create text */
function a_UMupj4ChNfQ8E2uvW694p1tX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_UMupj4ChNfQ8E2uvW694p1tX$0;
  s.name = "create text";
  s.result = undefined;
  return s;
}
cs.registerAction("create text", "UMupj4ChNfQ8E2uvW694p1tX", a_UMupj4ChNfQ8E2uvW694p1tX, false);

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

function a_UMupj4ChNfQ8E2uvW694p1tX$0(s) {
  (s.pc = "1.P0");
  var t_call_0 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(100, 20, 28, "", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "1.P3");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_z_index(1000, s));
  (s.pc = "1.P6");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_friction(1, s));
  (s.pc = "1.P9");
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
  var t_elseIf_0 = true;
  (s.pc = "1.U0");
  true;
  if ((/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X == undefined)) {
  (s.pc = "1.U40");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_XjXM7AL67NDGlzsZgg9s44uq$2));
  } else {
  (s.pc = "1.U50");
  null;
  }
  return a_XjXM7AL67NDGlzsZgg9s44uq$1;
}
cs.registerStep(a_XjXM7AL67NDGlzsZgg9s44uq$0, 'a_XjXM7AL67NDGlzsZgg9s44uq$0');

function a_XjXM7AL67NDGlzsZgg9s44uq$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "1.U43");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, t_call_2) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_color(t_call_2, s));
  (s.pc = "1.U46");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_pos(72, 20, s));
  var t_elseIf_3 = true;
  (s.pc = "1.U49");
  var t_call_4 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_call_5 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.height(s));
  var t_infix_6 = (ok2(s, t_call_4, t_call_5) && (t_call_4 < t_call_5));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "1.U4d0");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok1(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_x(96, s));
  } else {
  (s.pc = "1.U4e0");
  null;
  }
  return a_XjXM7AL67NDGlzsZgg9s44uq$1;
}
cs.registerStep(a_XjXM7AL67NDGlzsZgg9s44uq$2, 'a_XjXM7AL67NDGlzsZgg9s44uq$2');

function a_XjXM7AL67NDGlzsZgg9s44uq$1(s) {
  (s.pc = "1.U5");
  var t_call_7 = (ok1(s, /* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV) && lib.Math_.ceiling(/* _life */ s.d.$xubkD4SENn7AllzejMhYSTOV, s));
  (s.$l = t_call_7);
  (s.pc = "1.U8");
  var t_call_8 = (ok1(s, s.$l) && lib.Number_.to_string(s.$l, s));
  var t_concat_9 = lib.String_.concatAny("\u2764 ", t_call_8);
  (s.$s = t_concat_9);
  var t_elseIf_10 = true;
  (s.pc = "1.Ub");
  var t_call_11 = (ok1(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.count(s));
  var t_infix_12 = (ok2(s, s.$l, t_call_11) && (s.$l < t_call_11));
  ok1(s, t_infix_12);
  if (t_infix_12) {
  (s.pc = "1.Uf0");
  var t_call_13 = (ok2(s, /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m, s.$l) && /* _hearts */ s.d.$emzufgdY6lsG2RaaCYaxwN8m.at(s.$l, s));
  (s.$s = t_call_13);
  } else {
  (s.pc = "1.Ug0");
  null;
  }
  (s.pc = "1.Ug");
  s.rt.logObjectMutation(/* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X);
  (ok2(s, /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X, s.$s) && /* _life txt */ s.d.$pHEIAaLyqWXgpyUd6dIeYp2X.set_text(s.$s, s));
  return s.rt.leave();
}
cs.registerStep(a_XjXM7AL67NDGlzsZgg9s44uq$1, 'a_XjXM7AL67NDGlzsZgg9s44uq$1');

/* ACTION: evolve score */
function a_ify9GgXEJgKuJ9u1VD6EdWZv(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ify9GgXEJgKuJ9u1VD6EdWZv$0;
  s.name = "evolve score";
  s.$x = undefined;
  return s;
}
cs.registerAction("evolve score", "ify9GgXEJgKuJ9u1VD6EdWZv", a_ify9GgXEJgKuJ9u1VD6EdWZv, false);

function a_ify9GgXEJgKuJ9u1VD6EdWZv$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "1.Z0");
  true;
  if ((/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 == undefined)) {
  (s.pc = "1.Z40");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_ify9GgXEJgKuJ9u1VD6EdWZv$2));
  } else {
  (s.pc = "1.Z50");
  null;
  }
  return a_ify9GgXEJgKuJ9u1VD6EdWZv$1;
}
cs.registerStep(a_ify9GgXEJgKuJ9u1VD6EdWZv$0, 'a_ify9GgXEJgKuJ9u1VD6EdWZv$0');

function a_ify9GgXEJgKuJ9u1VD6EdWZv$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6 = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "1.Z43");
  (s.$x = 132);
  (s.pc = "1.Z46");
  var t_call_2 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_3 = (ok2(s, t_call_2, s.$x) && (t_call_2 - s.$x));
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_infix_3) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_pos(t_infix_3, 20, s));
  (s.pc = "1.Z49");
  var t_call_4 = lib.Colors.orange(s);
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_call_4) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_color(t_call_4, s));
  return a_ify9GgXEJgKuJ9u1VD6EdWZv$1;
}
cs.registerStep(a_ify9GgXEJgKuJ9u1VD6EdWZv$2, 'a_ify9GgXEJgKuJ9u1VD6EdWZv$2');

function a_ify9GgXEJgKuJ9u1VD6EdWZv$1(s) {
  (s.pc = "1.Z5");
  var t_call_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Math_.ceiling(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Number_.to_string(t_call_5, s));
  var t_concat_7 = lib.String_.concatAny("score\u003a ", t_call_6);
  s.rt.logObjectMutation(/* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6);
  (ok2(s, /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6, t_concat_7) && /* _score txt */ s.d.$AejJAmPMk38UG2URZk5hXYh6.set_text(t_concat_7, s));
  return s.rt.leave();
}
cs.registerStep(a_ify9GgXEJgKuJ9u1VD6EdWZv$1, 'a_ify9GgXEJgKuJ9u1VD6EdWZv$1');

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
  var t_elseIf_0 = true;
  (s.pc = "1.66.0");
  true;
  if ((/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls == undefined)) {
  (s.pc = "1.66.40");
  return s.rt.enter(a_UMupj4ChNfQ8E2uvW694p1tX(s, a_PojbQsm32lz5k054APQR8Jb1$2));
  } else {
  (s.pc = "1.66.50");
  null;
  }
  return a_PojbQsm32lz5k054APQR8Jb1$1;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$0, 'a_PojbQsm32lz5k054APQR8Jb1$0');

function a_PojbQsm32lz5k054APQR8Jb1$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "1.66.43");
  var t_call_2 = (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 2));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_infix_3) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_pos(t_infix_3, 20, s));
  return a_PojbQsm32lz5k054APQR8Jb1$1;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$2, 'a_PojbQsm32lz5k054APQR8Jb1$2');

function a_PojbQsm32lz5k054APQR8Jb1$1(s) {
  (s.pc = "1.66.5");
  return s.rt.enter(a_q4EB482ElguyYpuPEwTgQQ4e(s, a_PojbQsm32lz5k054APQR8Jb1$3));
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$1, 'a_PojbQsm32lz5k054APQR8Jb1$1');

function a_PojbQsm32lz5k054APQR8Jb1$3(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  (s.$elapsed = t_actRes_4);
  (s.pc = "1.66.8");
  var t_call_5 = (ok1(s, s.$elapsed) && lib.Math_.round_with_precision(s.$elapsed, 1, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Number_.to_string(t_call_5, s));
  s.rt.logObjectMutation(/* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls);
  (ok2(s, /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls, t_call_6) && /* _timer txt */ s.d.$x2fjfvNmVawvnAWKndzdfxls.set_text(t_call_6, s));
  var t_elseIf_7 = true;
  (s.pc = "1.66.b");
  var t_infix_8 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  var t_lazy_9 = t_infix_8;
  if ((ok1(s, t_lazy_9) && t_lazy_9)) {
  var t_infix_10 = (ok1(s, s.$elapsed) && (s.$elapsed === 0));
  (t_lazy_9 = t_infix_10);
  }
  ok1(s, t_lazy_9);
  if (t_lazy_9) {
  (s.pc = "1.66.f0");
  return s.rt.enter(a_a14qLDjp7EtajVvdEd1rS18X(s, a_PojbQsm32lz5k054APQR8Jb1$6));
  } else {
  (s.pc = "1.66.g0");
  null;
  }
  return a_PojbQsm32lz5k054APQR8Jb1$5;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$3, 'a_PojbQsm32lz5k054APQR8Jb1$3');

function a_PojbQsm32lz5k054APQR8Jb1$6(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  return a_PojbQsm32lz5k054APQR8Jb1$5;
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$6, 'a_PojbQsm32lz5k054APQR8Jb1$6');

function a_PojbQsm32lz5k054APQR8Jb1$5(s) {
  return s.rt.leave();
}
cs.registerStep(a_PojbQsm32lz5k054APQR8Jb1$5, 'a_PojbQsm32lz5k054APQR8Jb1$5');

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
  (s.pc = "1.79.1");
  var t_call_0 = lib.Time.now(s);
  var t_call_1 = (ok2(s, t_call_0, /* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY) && t_call_0.subtract(/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY, s));
  (s.result = t_call_1);
  var t_elseIf_2 = true;
  (s.pc = "1.79.4");
  var t_infix_3 = (ok1(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "1.79.80");
  var t_infix_4 = (ok2(s, /* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY, s.result) && (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY - s.result));
  var t_call_5 = (ok1(s, t_infix_4) && lib.Math_.max(0, t_infix_4, s));
  (s.result = t_call_5);
  } else {
  (s.pc = "1.79.90");
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
  return s;
}
cs.registerAction("add score", "xINhkUFpWzhMPF0ROZX4TSm4", a_xINhkUFpWzhMPF0ROZX4TSm4, false);

function a_xINhkUFpWzhMPF0ROZX4TSm4$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_xINhkUFpWzhMPF0ROZX4TSm4$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "value", "$value"));
  return a_xINhkUFpWzhMPF0ROZX4TSm4$3;
  }
  return a_xINhkUFpWzhMPF0ROZX4TSm4$2;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$0, 'a_xINhkUFpWzhMPF0ROZX4TSm4$0');

function a_xINhkUFpWzhMPF0ROZX4TSm4$3(s) {
  return a_xINhkUFpWzhMPF0ROZX4TSm4$2;
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$3, 'a_xINhkUFpWzhMPF0ROZX4TSm4$3');

function a_xINhkUFpWzhMPF0ROZX4TSm4$2(s) {
  (s.pc = "1.85.1");
  var t_infix_0 = (ok2(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, s.$value) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m + s.$value));
  return s.rt.enter(a_oKY8zayGQ3QsufrQiKXXS9sh(s, a_xINhkUFpWzhMPF0ROZX4TSm4$1, t_infix_0));
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$2, 'a_xINhkUFpWzhMPF0ROZX4TSm4$2');

function a_xINhkUFpWzhMPF0ROZX4TSm4$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_xINhkUFpWzhMPF0ROZX4TSm4$1, 'a_xINhkUFpWzhMPF0ROZX4TSm4$1');

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
  (s.pc = "1.100.1");
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
  (s.pc = "1.105.1");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  var t_elseIf_2 = true;
  (s.pc = "1.105.50");
  var t_call_3 = lib.Boolean_.not((/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju == undefined), s);
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "1.105.540");
  return s.rt.enter((ok1(s, /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju) && /* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju(s, a_a14qLDjp7EtajVvdEd1rS18X$3)));
  } else {
  var t_elseIf_4 = true;
  (s.pc = "1.105.550");
  var t_infix_5 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "1.105.5540");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_6 = s.rt.getAwaitResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$6);
  (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Bazaar.post_leaderboard_score(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, t_resumeCtx_6));
  return a_a14qLDjp7EtajVvdEd1rS18X$6;
  } else {
  (s.pc = "1.105.5550");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
  } else {
  (s.pc = "1.105.60");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$1;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$0, 'a_a14qLDjp7EtajVvdEd1rS18X$0');

function a_a14qLDjp7EtajVvdEd1rS18X$3(s) {
  (s.pc = "1.105.543");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$4));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$3, 'a_a14qLDjp7EtajVvdEd1rS18X$3');

function a_a14qLDjp7EtajVvdEd1rS18X$6(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$6, 'a_a14qLDjp7EtajVvdEd1rS18X$6');

function a_a14qLDjp7EtajVvdEd1rS18X$5(s) {
  (s.pc = "1.105.555");
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
  (s.pc = "1.105.558");
  var t_infix_9 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "1.105.55c0");
  lib.Wall.clear(s);
  (s.pc = "1.105.55c3");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$9);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_10);
  return a_a14qLDjp7EtajVvdEd1rS18X$9;
  } else {
  (s.pc = "1.105.55d0");
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
  (s.pc = "1.105.55d");
  return s.rt.enter(a_Kv3t1TJgZdpYJpx9reGXtTW2(s, a_a14qLDjp7EtajVvdEd1rS18X$10));
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$8, 'a_a14qLDjp7EtajVvdEd1rS18X$8');

function a_a14qLDjp7EtajVvdEd1rS18X$10(s) {
  (s.pc = "1.105.55g");
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
  (s.pc = "1.110.1");
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
  (s.pc = "1.115.0");
  (s.$message = "Game Over");
  (s.pc = "1.115.3");
  var t_call_0 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$message) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.create_text(200, 40, 40, s.$message, s));
  s.rt.markAllocated(t_call_0);
  (s.$text = t_call_0);
  (s.pc = "1.115.6");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.set_opacity(0, s));
  (s.pc = "1.115.9");
  var t_infix_1 = (720 / 5);
  s.t_bnd_2 = t_infix_1;
  (s.$i = 0);
  return a_joFUGC04wxnpsBuC02e32Cvy$1;
}
cs.registerStep(a_joFUGC04wxnpsBuC02e32Cvy$0, 'a_joFUGC04wxnpsBuC02e32Cvy$0');

function a_joFUGC04wxnpsBuC02e32Cvy$1(s) {
  if ((s.$i < s.t_bnd_2)) {
  (s.pc = "1.115.d0");
  var t_call_3 = (ok1(s, s.$text) && s.$text.opacity(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 + 0.05));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_4) && s.$text.set_opacity(t_infix_4, s));
  (s.pc = "1.115.d3");
  var t_call_5 = lib.Colors.random(s);
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_call_5) && s.$text.set_color(t_call_5, s));
  (s.pc = "1.115.d6");
  var t_call_6 = (ok1(s, s.$text) && s.$text.angle(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 + 5));
  s.rt.logObjectMutation(s.$text);
  (ok2(s, s.$text, t_infix_7) && s.$text.set_angle(t_infix_7, s));
  (s.pc = "1.115.d9");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  (s.pc = "1.115.dc");
  var t_resumeCtx_8 = s.rt.getAwaitResumeCtx(a_joFUGC04wxnpsBuC02e32Cvy$3);
  lib.Time.sleep(0.02, t_resumeCtx_8);
  return a_joFUGC04wxnpsBuC02e32Cvy$3;
  }
  (s.pc = "1.115.d");
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
  (s.pc = "1.115.g");
  s.rt.logObjectMutation(s.$text);
  (ok1(s, s.$text) && s.$text.delete_(s));
  (s.pc = "1.115.j");
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
  (s.pc = "1.120.1");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_Kv3t1TJgZdpYJpx9reGXtTW2$1));
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$0, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$0');

function a_Kv3t1TJgZdpYJpx9reGXtTW2$1(s) {
  (s.pc = "1.120.4");
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
  (s.pc = "1.125.1");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_XQPjg13t37zIEtpt44U6ff92$1));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$4, 'a_XQPjg13t37zIEtpt44U6ff92$4');

function a_XQPjg13t37zIEtpt44U6ff92$1(s) {
  (s.pc = "1.125.4");
  return s.rt.enter(a_Ayu95FKZqA9xPdjQXSANLGvP(s, a_XQPjg13t37zIEtpt44U6ff92$2, s.$width, s.$height));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$1, 'a_XQPjg13t37zIEtpt44U6ff92$1');

function a_XQPjg13t37zIEtpt44U6ff92$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "1.125.b0");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_XQPjg13t37zIEtpt44U6ff92$3(t_lmbProxy_1(la0), la1) });
  (s.pc = "1.125.7");
  var t_call_2 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  t_call_2;
  (s.pc = "1.125.b");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.post_to_wall(s));
  (s.pc = "1.125.e");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (s.pc = "1.125.h");
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
  (s.pc = "1.125.b20");
  return s.rt.enter(a_gswamj84uYSwqLED2VvLdKi6(s, a_a_XQPjg13t37zIEtpt44U6ff92$3$1));
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$0, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$0');

function a_a_XQPjg13t37zIEtpt44U6ff92$3$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  var t_elseIf_1 = true;
  (s.pc = "1.125.b23");
  var t_call_2 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "1.125.b270");
  s.rt.logObjectMutation(/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.update_on_wall(s));
  } else {
  (s.pc = "1.125.b280");
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
  (s.pc = "1.135.1");
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
  (s.pc = "1.156.0");
  var t_call_1 = lib.Boolean_.not((/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS == undefined), s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "1.156.40");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.clear_every_frame_timers(s));
  } else {
  (s.pc = "1.156.50");
  null;
  }
  (s.pc = "1.156.5");
  var t_call_2 = lib.Invalid.board(s);
  (/* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS = t_call_2);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xpQAnETcU9aowS6g7p1qZZbf$0, 'a_xpQAnETcU9aowS6g7p1qZZbf$0');

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
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set score";
cs.authorId = "unknown";
cs.scriptId = "avbl";
cs.scriptGuid = "66d16d3c-0039-4654-9367-87b47ded293f";
}),

// **************************************************************
"vk4YirHiqGbPTNTjv1IL5dsL": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "gamepad";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
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

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "current";
cs.authorId = "unknown";
cs.scriptId = "avbl";
cs.scriptGuid = "66d16d3c-0039-4654-9367-87b47ded293f";
})}
