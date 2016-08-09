var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Minion Mash";
cs.scriptColor = "\u002390ee90";
cs.objectSingletons = {};
/* ACTION: main */
function a_ewxUWHTyrcujjS6R(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ewxUWHTyrcujjS6R$0;
  s.name = "main";
  s.$title = undefined;
  s.$subtitle = undefined;
  s.$help = undefined;
  s.$start_level = undefined;
  s.$level = undefined;
  s.$theme = undefined;
  s.$lvl1 = undefined;
  s.$lvl2 = undefined;
  s.$lvl3 = undefined;
  return s;
}
cs.registerAction("main", "ewxUWHTyrcujjS6R", a_ewxUWHTyrcujjS6R, true);

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

function a_ewxUWHTyrcujjS6R$0(s) {
  (s.pc = "UkK2CujlPgvjiEjj");
  (s.$title = "Minion Mash");
  (s.pc = "YMIFdDuEhAW5MI6G");
  (s.$subtitle = "Exterminate the evil minions!");
  (s.pc = "xEhHMJir7r3BW7e4");
  (s.$help = "Tap on the evil purple minions to eliminate them.\u000aDon\u0027t hurt the nice yellow minions!");
  (s.pc = "WJu28w5cJF3enbz1");
  var t_libcall_0 = s.libs["x442wOGmyyTXqw9z"]["set instructions"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_ewxUWHTyrcujjS6R$1, s.$help));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$0, 'a_ewxUWHTyrcujjS6R$0');

function a_ewxUWHTyrcujjS6R$1(s) {
  (s.pc = "mthEq2lDIVrHQLaS");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$start_level = function(la0, la1, la2) { return a_a_ewxUWHTyrcujjS6R$2(t_lmbProxy_1(la0), la1, la2) });
  (s.pc = "xi26sC9xR612hl8w");
  var t_libcall_2 = s.libs["x442wOGmyyTXqw9z"]["initialize"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_ewxUWHTyrcujjS6R$3, s.$title, s.$subtitle, 3, s.$start_level));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$1, 'a_ewxUWHTyrcujjS6R$1');

function a_ewxUWHTyrcujjS6R$3(s) {
  (s.pc = "cwLNj5vb1Dlz5oqC");
  var t_libcall_3 = s.libs["x442wOGmyyTXqw9z"]["page theme"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_ewxUWHTyrcujjS6R$4));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$3, 'a_ewxUWHTyrcujjS6R$3');

function a_ewxUWHTyrcujjS6R$4(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  (s.$theme = t_actRes_4);
  (s.pc = "hijrucrYnWXtlx2r");
  var t_libcall_5 = s.libs["x442wOGmyyTXqw9z"]["set background picture"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_ewxUWHTyrcujjS6R$5, s.$theme, /* wallpic2 */ s.d.$jC4yGeQpdWCi2uAR));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$4, 'a_ewxUWHTyrcujjS6R$4');

function a_ewxUWHTyrcujjS6R$5(s) {
  (s.pc = "dWU3ksgZCay2WZ9C");
  var t_call_6 = lib.Colors.black(s);
  var t_call_7 = (ok1(s, t_call_6) && t_call_6.darken(1, s));
  var t_libcall_8 = s.libs["x442wOGmyyTXqw9z"]["set foreground"](s);
  return s.rt.enter(t_libcall_8.invoke(t_libcall_8, a_ewxUWHTyrcujjS6R$6, s.$theme, t_call_7));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$5, 'a_ewxUWHTyrcujjS6R$5');

function a_ewxUWHTyrcujjS6R$6(s) {
  (s.pc = "fb3NM4r4frK4CzYc");
  var t_libcall_9 = s.libs["x442wOGmyyTXqw9z"]["button theme"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_ewxUWHTyrcujjS6R$7));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$6, 'a_ewxUWHTyrcujjS6R$6');

function a_ewxUWHTyrcujjS6R$7(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  var t_call_11 = lib.Colors.black(s);
  var t_call_12 = (ok1(s, t_call_11) && t_call_11.make_transparent(0.5, s));
  var t_libcall_13 = s.libs["x442wOGmyyTXqw9z"]["set background"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_ewxUWHTyrcujjS6R$8, t_actRes_10, t_call_12));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$7, 'a_ewxUWHTyrcujjS6R$7');

function a_ewxUWHTyrcujjS6R$8(s) {
  (s.pc = "YfgJjif5v0V3aDRb");
  var t_libcall_14 = s.libs["x442wOGmyyTXqw9z"]["button theme"](s);
  return s.rt.enter(t_libcall_14.invoke(t_libcall_14, a_ewxUWHTyrcujjS6R$9));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$8, 'a_ewxUWHTyrcujjS6R$8');

function a_ewxUWHTyrcujjS6R$9(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  var t_call_16 = lib.Colors.white(s);
  var t_libcall_17 = s.libs["x442wOGmyyTXqw9z"]["set foreground"](s);
  return s.rt.enter(t_libcall_17.invoke(t_libcall_17, a_ewxUWHTyrcujjS6R$10, t_actRes_15, t_call_16));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$9, 'a_ewxUWHTyrcujjS6R$9');

function a_ewxUWHTyrcujjS6R$10(s) {
  (s.pc = "x2BC4qzzdC47Z97y");
  var t_libcall_18 = s.libs["x442wOGmyyTXqw9z"]["level by id"](s);
  return s.rt.enter(t_libcall_18.invoke(t_libcall_18, a_ewxUWHTyrcujjS6R$11, 1));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$10, 'a_ewxUWHTyrcujjS6R$10');

function a_ewxUWHTyrcujjS6R$11(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  (s.$lvl1 = t_actRes_19);
  (s.pc = "xy4n44bBeACniUGX");
  var t_libcall_20 = s.libs["x442wOGmyyTXqw9z"]["level button theme"](s);
  return s.rt.enter(t_libcall_20.invoke(t_libcall_20, a_ewxUWHTyrcujjS6R$12, s.$lvl1));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$11, 'a_ewxUWHTyrcujjS6R$11');

function a_ewxUWHTyrcujjS6R$12(s) {
  var t_actRes_21 = s.rt.returnedFrom.result;
  var t_call_22 = lib.Colors.purple(s);
  var t_call_23 = (ok1(s, t_call_22) && t_call_22.make_transparent(0.5, s));
  var t_libcall_24 = s.libs["x442wOGmyyTXqw9z"]["set background"](s);
  return s.rt.enter(t_libcall_24.invoke(t_libcall_24, a_ewxUWHTyrcujjS6R$13, t_actRes_21, t_call_23));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$12, 'a_ewxUWHTyrcujjS6R$12');

function a_ewxUWHTyrcujjS6R$13(s) {
  (s.pc = "S5En6l0daT2eXgAS");
  var t_libcall_25 = s.libs["x442wOGmyyTXqw9z"]["level by id"](s);
  return s.rt.enter(t_libcall_25.invoke(t_libcall_25, a_ewxUWHTyrcujjS6R$14, 2));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$13, 'a_ewxUWHTyrcujjS6R$13');

function a_ewxUWHTyrcujjS6R$14(s) {
  var t_actRes_26 = s.rt.returnedFrom.result;
  (s.$lvl2 = t_actRes_26);
  (s.pc = "K4M8KYMq2ksUfzQE");
  var t_libcall_27 = s.libs["x442wOGmyyTXqw9z"]["level button theme"](s);
  return s.rt.enter(t_libcall_27.invoke(t_libcall_27, a_ewxUWHTyrcujjS6R$15, s.$lvl2));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$14, 'a_ewxUWHTyrcujjS6R$14');

function a_ewxUWHTyrcujjS6R$15(s) {
  var t_actRes_28 = s.rt.returnedFrom.result;
  var t_call_29 = lib.Colors.purple(s);
  var t_call_30 = (ok1(s, t_call_29) && t_call_29.make_transparent(0.5, s));
  var t_libcall_31 = s.libs["x442wOGmyyTXqw9z"]["set background"](s);
  return s.rt.enter(t_libcall_31.invoke(t_libcall_31, a_ewxUWHTyrcujjS6R$16, t_actRes_28, t_call_30));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$15, 'a_ewxUWHTyrcujjS6R$15');

function a_ewxUWHTyrcujjS6R$16(s) {
  (s.pc = "y05GlUuD6W4Bz92u");
  var t_libcall_32 = s.libs["x442wOGmyyTXqw9z"]["level by id"](s);
  return s.rt.enter(t_libcall_32.invoke(t_libcall_32, a_ewxUWHTyrcujjS6R$17, 3));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$16, 'a_ewxUWHTyrcujjS6R$16');

function a_ewxUWHTyrcujjS6R$17(s) {
  var t_actRes_33 = s.rt.returnedFrom.result;
  (s.$lvl3 = t_actRes_33);
  (s.pc = "a2jleCSLzDHKism4");
  var t_libcall_34 = s.libs["x442wOGmyyTXqw9z"]["level button theme"](s);
  return s.rt.enter(t_libcall_34.invoke(t_libcall_34, a_ewxUWHTyrcujjS6R$18, s.$lvl3));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$17, 'a_ewxUWHTyrcujjS6R$17');

function a_ewxUWHTyrcujjS6R$18(s) {
  var t_actRes_35 = s.rt.returnedFrom.result;
  var t_call_36 = lib.Colors.purple(s);
  var t_call_37 = (ok1(s, t_call_36) && t_call_36.make_transparent(0.5, s));
  var t_libcall_38 = s.libs["x442wOGmyyTXqw9z"]["set background"](s);
  return s.rt.enter(t_libcall_38.invoke(t_libcall_38, a_ewxUWHTyrcujjS6R$19, t_actRes_35, t_call_37));
}
cs.registerStep(a_ewxUWHTyrcujjS6R$18, 'a_ewxUWHTyrcujjS6R$18');

function a_ewxUWHTyrcujjS6R$19(s) {
  (s.pc = "HZ4PaEw1YiOQpUqB");
  null;
  (s.pc = "Db21dWoyJ5ogCMcm");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage("x442wOGmyyTXqw9z", "start");
  return s.rt.leave();
}
cs.registerStep(a_ewxUWHTyrcujjS6R$19, 'a_ewxUWHTyrcujjS6R$19');

/* ACTION: a_ewxUWHTyrcujjS6R::lambda::2 */
function a_a_ewxUWHTyrcujjS6R$2(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_ewxUWHTyrcujjS6R$2$0;
  s.name = "main";
  s.$level = $level;
  return s;
}
cs.registerLambda("a_ewxUWHTyrcujjS6R\u003a\u003alambda\u003a\u003a2", "a_ewxUWHTyrcujjS6R$2", a_a_ewxUWHTyrcujjS6R$2, true);

function a_a_ewxUWHTyrcujjS6R$2$0(s) {
  (s.pc = "Aigw7m5mj4N9XciP");
  var t_libcall_0 = s.libs["x442wOGmyyTXqw9z"]["index"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_a_ewxUWHTyrcujjS6R$2$1, s.$level));
}
cs.registerStep(a_a_ewxUWHTyrcujjS6R$2$0, 'a_a_ewxUWHTyrcujjS6R$2$0');

function a_a_ewxUWHTyrcujjS6R$2$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  return s.rt.enter(a_A3hp0gjZdkJrCh2M(s, a_a_ewxUWHTyrcujjS6R$2$2, t_actRes_1));
}
cs.registerStep(a_a_ewxUWHTyrcujjS6R$2$1, 'a_a_ewxUWHTyrcujjS6R$2$1');

function a_a_ewxUWHTyrcujjS6R$2$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return s.rt.leave();
}
cs.registerStep(a_a_ewxUWHTyrcujjS6R$2$2, 'a_a_ewxUWHTyrcujjS6R$2$2');

/* ACTION: mainLevel */
function a_A3hp0gjZdkJrCh2M(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_A3hp0gjZdkJrCh2M$0;
  s.name = "mainLevel";
  s.$level = $level;
  return s;
}
cs.registerAction("mainLevel", "A3hp0gjZdkJrCh2M", a_A3hp0gjZdkJrCh2M, true);

function a_A3hp0gjZdkJrCh2M$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_A3hp0gjZdkJrCh2M$8, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "level", "$level"));
  return a_A3hp0gjZdkJrCh2M$8;
  }
  return a_A3hp0gjZdkJrCh2M$7;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$0, 'a_A3hp0gjZdkJrCh2M$0');

function a_A3hp0gjZdkJrCh2M$8(s) {
  return a_A3hp0gjZdkJrCh2M$7;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$8, 'a_A3hp0gjZdkJrCh2M$8');

function a_A3hp0gjZdkJrCh2M$7(s) {
  var t_elseIf_0 = true;
  (s.pc = "LRvkc6rdP3CJXecM");
  var t_infix_1 = (ok1(s, s.$level) && (s.$level === 1));
  ok1(s, t_infix_1);
  if (t_infix_1) {
  (s.pc = "QzNyfZHmuWX0rOEk");
  return s.rt.enter(a_qW0r08QAOkvI6Xz2(s, a_A3hp0gjZdkJrCh2M$2));
  } else {
  (s.pc = "y9ihb5vNOjn4SBhc");
  null;
  }
  return a_A3hp0gjZdkJrCh2M$1;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$7, 'a_A3hp0gjZdkJrCh2M$7');

function a_A3hp0gjZdkJrCh2M$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_A3hp0gjZdkJrCh2M$1;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$2, 'a_A3hp0gjZdkJrCh2M$2');

function a_A3hp0gjZdkJrCh2M$1(s) {
  var t_elseIf_3 = true;
  (s.pc = "SAMVtLQzv2YTuvjP");
  var t_infix_4 = (ok1(s, s.$level) && (s.$level === 2));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "xJvlkWnjzq4WDByH");
  return s.rt.enter(a_beIcHhdM8lFSCOKb(s, a_A3hp0gjZdkJrCh2M$4));
  } else {
  (s.pc = "xxtsf8cWN9QyWpXk");
  null;
  }
  return a_A3hp0gjZdkJrCh2M$3;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$1, 'a_A3hp0gjZdkJrCh2M$1');

function a_A3hp0gjZdkJrCh2M$4(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  return a_A3hp0gjZdkJrCh2M$3;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$4, 'a_A3hp0gjZdkJrCh2M$4');

function a_A3hp0gjZdkJrCh2M$3(s) {
  var t_elseIf_6 = true;
  (s.pc = "aVSxtRvvHFZyL2l2");
  var t_infix_7 = (ok1(s, s.$level) && (s.$level === 3));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (s.pc = "xhTHgThTV70fOHJb");
  return s.rt.enter(a_xhdhNkOKuAbjItSa(s, a_A3hp0gjZdkJrCh2M$6));
  } else {
  (s.pc = "x2HYr5oq7mAfuQHR");
  null;
  }
  return a_A3hp0gjZdkJrCh2M$5;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$3, 'a_A3hp0gjZdkJrCh2M$3');

function a_A3hp0gjZdkJrCh2M$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_A3hp0gjZdkJrCh2M$5;
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$6, 'a_A3hp0gjZdkJrCh2M$6');

function a_A3hp0gjZdkJrCh2M$5(s) {
  return s.rt.leave();
}
cs.registerStep(a_A3hp0gjZdkJrCh2M$5, 'a_A3hp0gjZdkJrCh2M$5');

cs.registerArtResource("Picture", "$jRzYmkx7an5lc2hR", ".\u002fart\u002fl0_jRzYmkx7an5lc2hR");
cs.registerArtResource("Picture", "$dUA9saYW3w4WHsSU", ".\u002fart\u002fl0_dUA9saYW3w4WHsSU");
/* ACTION: level 1 */
function a_qW0r08QAOkvI6Xz2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_qW0r08QAOkvI6Xz2$0;
  s.name = "level 1";
  s.$i = undefined;
  s.$j = undefined;
  s.$sprite = undefined;
  s.$sprite2 = undefined;
  s.$perform = undefined;
  s.$perform1 = undefined;
  s.$perform2 = undefined;
  s.$sprite21 = undefined;
  s.$perform3 = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$boom = undefined;
  s.$anim = undefined;
  s.$sprite22 = undefined;
  s.$perform31 = undefined;
  s.$tapped1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$boom1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerAction("level 1", "qW0r08QAOkvI6Xz2", a_qW0r08QAOkvI6Xz2, true);

function a_qW0r08QAOkvI6Xz2$0(s) {
  (s.pc = "k9n2WmsX240Tkr88");
  var t_libcall_0 = s.libs["q7b3FJBC7mRz7BmW"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_qW0r08QAOkvI6Xz2$1));
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$0, 'a_qW0r08QAOkvI6Xz2$0');

function a_qW0r08QAOkvI6Xz2$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* board */ s.d.$oWdUoI3QW4xI4IIX = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "G3EnKUFwITY29CG4");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_qW0r08QAOkvI6Xz2$2, 30));
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$1, 'a_qW0r08QAOkvI6Xz2$1');

function a_qW0r08QAOkvI6Xz2$2(s) {
  (s.pc = "kw4a6W72qCkASF4Y");
  s.rt.logObjectMutation(/* board */ s.d.$oWdUoI3QW4xI4IIX);
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_qW0r08QAOkvI6Xz2$3);
  (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* gru lab */ s.d.$EPL4YqCCa8OYnJR2) && /* board */ s.d.$oWdUoI3QW4xI4IIX.set_background_picture(/* gru lab */ s.d.$EPL4YqCCa8OYnJR2, t_resumeCtx_3));
  return a_qW0r08QAOkvI6Xz2$3;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$2, 'a_qW0r08QAOkvI6Xz2$2');

function a_qW0r08QAOkvI6Xz2$3(s) {
  (s.pc = "vCHkYMAObQYp1I8k");
  var t_call_4 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* air duct */ s.d.$tkgyWwJ4j82STlNs = t_call_4);
  s.rt.logDataWrite();
  (s.pc = "T9wBJuPilreV12fw");
  var t_call_5 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* minionA */ s.d.$qBWQP4oDmUKXmamh = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "xrLWZZps9Mm8PrQA");
  var t_call_6 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* evilminionA */ s.d.$c6whhfB2TJbOywnP = t_call_6);
  s.rt.logDataWrite();
  (s.pc = "Hzvl0ST8n2VLzwJU");
  s.t_bnd_7 = 3;
  (s.$i = 0);
  return a_qW0r08QAOkvI6Xz2$4;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$3, 'a_qW0r08QAOkvI6Xz2$3');

function a_qW0r08QAOkvI6Xz2$4(s) {
  if ((s.$i < s.t_bnd_7)) {
  (s.pc = "pgkDM87hxT2IWdG2");
  s.t_bnd_8 = 3;
  (s.$j = 0);
  return a_qW0r08QAOkvI6Xz2$6;
  }
  (s.pc = "LcZHnQHNgo4OXKvr");
  s.t_collArr_12 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_13 = 0;
  return a_qW0r08QAOkvI6Xz2$11;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$4, 'a_qW0r08QAOkvI6Xz2$4');

function a_qW0r08QAOkvI6Xz2$6(s) {
  if ((s.$j < s.t_bnd_8)) {
  (s.pc = "DiXgAWCd3sD7D2R4");
  return s.rt.enter(a_uDKh2BSiz6xjb0jd(s, a_qW0r08QAOkvI6Xz2$8, s.$i, s.$j));
  }
  (s.$i++);
  return a_qW0r08QAOkvI6Xz2$4;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$6, 'a_qW0r08QAOkvI6Xz2$6');

function a_qW0r08QAOkvI6Xz2$11(s) {
  if ((s.t_idx_13 < (s.t_collArr_12.length))) {
  (s.$sprite = s.t_collArr_12[(s.t_idx_13)]);
  (s.t_idx_13++);
  (s.pc = "EzLzyxFozRrG2RlF");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.hide(s));
  (s.pc = "cjAtcDuZRYHXAwTp");
  null;
  return a_qW0r08QAOkvI6Xz2$11;
  }
  (s.pc = "hSAR7uvu7l3j64lA");
  s.t_collArr_14 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_15 = 0;
  return a_qW0r08QAOkvI6Xz2$13;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$11, 'a_qW0r08QAOkvI6Xz2$11');

function a_qW0r08QAOkvI6Xz2$8(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  (s.pc = "swmEKShxq9Jsuaa2");
  return s.rt.enter(a_aiHvY0vwH5GQ9i2a(s, a_qW0r08QAOkvI6Xz2$9, s.$i, s.$j));
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$8, 'a_qW0r08QAOkvI6Xz2$8');

function a_qW0r08QAOkvI6Xz2$13(s) {
  if ((s.t_idx_15 < (s.t_collArr_14.length))) {
  (s.$sprite2 = s.t_collArr_14[(s.t_idx_15)]);
  (s.t_idx_15++);
  (s.pc = "x2MxX2OqcuKFjLx1");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return a_qW0r08QAOkvI6Xz2$13;
  }
  (s.pc = "mdP3x5wOkRUa7pWI");
  var t_lmbProxy_16 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_qW0r08QAOkvI6Xz2$15(t_lmbProxy_16(la0), la1) });
  (s.pc = "xNfqv2zoEXJHLINQ");
  s.rt.logObjectMutation(null);
  var t_call_17 = (ok1(s, s.$perform) && lib.Time.run_every(1, s.$perform, s));
  t_call_17;
  (s.pc = "UNlI6bOLoo34bKE3");
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$perform1 = function(la0, la1) { return a_a_qW0r08QAOkvI6Xz2$16(t_lmbProxy_18(la0), la1) });
  (s.pc = "G0CysssBZQ6AfqnF");
  s.rt.logObjectMutation(null);
  var t_call_19 = (ok1(s, s.$perform1) && lib.Time.run_every(1, s.$perform1, s));
  t_call_19;
  (s.pc = "xZquXcipVmWy6qzr");
  var t_lmbv_20 = s.$perform3;
  var t_lmbv_21 = s.$tapped;
  var t_lmbv_22 = s.$perform31;
  var t_lmbv_23 = s.$tapped1;
  var t_lmbProxy_24 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_qW0r08QAOkvI6Xz2$17(t_lmbProxy_24(la0), la1, t_lmbv_20, t_lmbv_21, t_lmbv_22, t_lmbv_23) });
  (s.pc = "zf97LoxeOI4m0WHt");
  var t_call_25 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, s.$perform2) && /* board */ s.d.$oWdUoI3QW4xI4IIX.add_on_every_frame(s.$perform2, s));
  t_call_25;
  return s.rt.leave();
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$13, 'a_qW0r08QAOkvI6Xz2$13');

function a_qW0r08QAOkvI6Xz2$9(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  (s.pc = "xf2wQ1K524a3UrDo");
  return s.rt.enter(a_F5Lx512lnV3oirqF(s, a_qW0r08QAOkvI6Xz2$10, s.$i, s.$j));
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$9, 'a_qW0r08QAOkvI6Xz2$9');

function a_qW0r08QAOkvI6Xz2$10(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  (s.$j++);
  return a_qW0r08QAOkvI6Xz2$6;
}
cs.registerStep(a_qW0r08QAOkvI6Xz2$10, 'a_qW0r08QAOkvI6Xz2$10');

/* ACTION: a_qW0r08QAOkvI6Xz2::lambda::15 */
function a_a_qW0r08QAOkvI6Xz2$15(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_qW0r08QAOkvI6Xz2$15$0;
  s.name = "level 1";
  return s;
}
cs.registerLambda("a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a15", "a_qW0r08QAOkvI6Xz2$15", a_a_qW0r08QAOkvI6Xz2$15, true);

function a_a_qW0r08QAOkvI6Xz2$15$0(s) {
  (s.pc = "EbhKBSTqgYuyq66u");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh, t_call_0) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_qW0r08QAOkvI6Xz2$15$0, 'a_a_qW0r08QAOkvI6Xz2$15$0');

/* ACTION: a_qW0r08QAOkvI6Xz2::lambda::16 */
function a_a_qW0r08QAOkvI6Xz2$16(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_qW0r08QAOkvI6Xz2$16$0;
  s.name = "level 1";
  return s;
}
cs.registerLambda("a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a16", "a_qW0r08QAOkvI6Xz2$16", a_a_qW0r08QAOkvI6Xz2$16, true);

function a_a_qW0r08QAOkvI6Xz2$16$0(s) {
  (s.pc = "oom2taQditSC7y2q");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP, t_call_0) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_qW0r08QAOkvI6Xz2$16$0, 'a_a_qW0r08QAOkvI6Xz2$16$0');

/* ACTION: a_qW0r08QAOkvI6Xz2::lambda::17 */
function a_a_qW0r08QAOkvI6Xz2$17(previous, returnAddr, $perform3, $tapped, $perform31, $tapped1) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_qW0r08QAOkvI6Xz2$17$0;
  s.name = "level 1";
  s.$sprite2 = undefined;
  s.$perform3 = $perform3;
  s.$tapped = $tapped;
  s.$boom = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$anim = undefined;
  s.$sprite21 = undefined;
  s.$perform31 = $perform31;
  s.$tapped1 = $tapped1;
  s.$boom1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerLambda("a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a17", "a_qW0r08QAOkvI6Xz2$17", a_a_qW0r08QAOkvI6Xz2$17, true);

function a_a_qW0r08QAOkvI6Xz2$17$0(s) {
  (s.pc = "SI74W0EwvnJUnvIr");
  s.t_collArr_0 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_qW0r08QAOkvI6Xz2$17$1;
}
cs.registerStep(a_a_qW0r08QAOkvI6Xz2$17$0, 'a_a_qW0r08QAOkvI6Xz2$17$0');

function a_a_qW0r08QAOkvI6Xz2$17$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite2 = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  var t_elseIf_2 = true;
  (s.pc = "xhAqqP3Rw4AK9QhZ");
  var t_call_3 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "zLLWQxy3Q5kq2IBW");
  var t_lmbv_4 = s.$sprite2;
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_a_qW0r08QAOkvI6Xz2$17$4(t_lmbProxy_5(la0), la1, t_lmbv_4) });
  (s.pc = "K18HbuoXD4H4TF2w");
  s.rt.logObjectMutation(null);
  var t_call_6 = (ok1(s, s.$perform3) && lib.Time.run_after(1.75, s.$perform3, s));
  t_call_6;
  (s.pc = "VlyppHyPKTVWoQ2w");
  null;
  } else {
  (s.pc = "iksiSyoyFazDEIX3");
  null;
  }
  (s.pc = "xFgnadABfhT8mcct");
  var t_lmbv_7 = s.$sprite2;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_a_qW0r08QAOkvI6Xz2$17$5(t_lmbProxy_8(la0), la1, la2, la3, t_lmbv_7) });
  (s.pc = "x5U6D4Q9V9vA6hNN");
  var t_call_9 = (ok2(s, s.$sprite2, s.$tapped) && s.$sprite2.on_tap(s.$tapped, s));
  t_call_9;
  return a_a_qW0r08QAOkvI6Xz2$17$1;
  }
  (s.pc = "Z35DNrR20zKZcraF");
  s.t_collArr_10 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_11 = 0;
  return a_a_qW0r08QAOkvI6Xz2$17$6;
}
cs.registerStep(a_a_qW0r08QAOkvI6Xz2$17$1, 'a_a_qW0r08QAOkvI6Xz2$17$1');

function a_a_qW0r08QAOkvI6Xz2$17$6(s) {
  if ((s.t_idx_11 < (s.t_collArr_10.length))) {
  (s.$sprite21 = s.t_collArr_10[(s.t_idx_11)]);
  (s.t_idx_11++);
  var t_elseIf_12 = true;
  (s.pc = "xHyBtI5R5cEyTzg2");
  var t_call_13 = (ok1(s, s.$sprite21) && s.$sprite21.is_visible(s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "LBmTygliZ2bZDVxp");
  var t_lmbv_14 = s.$sprite21;
  var t_lmbProxy_15 = s.libs.mkLambdaProxy;
  (s.$perform31 = function(la0, la1) { return a_a_a_qW0r08QAOkvI6Xz2$17$9(t_lmbProxy_15(la0), la1, t_lmbv_14) });
  (s.pc = "Un1lrLCta5kL4vDs");
  s.rt.logObjectMutation(null);
  var t_call_16 = (ok1(s, s.$perform31) && lib.Time.run_after(1.75, s.$perform31, s));
  t_call_16;
  (s.pc = "xVs8OmJ8WETERTNL");
  null;
  } else {
  (s.pc = "x8aNr2nLt80yix64");
  null;
  }
  (s.pc = "Isj2elbK3gWaSdYT");
  var t_lmbv_17 = s.$sprite21;
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$tapped1 = function(la0, la1, la2, la3) { return a_a_a_qW0r08QAOkvI6Xz2$17$10(t_lmbProxy_18(la0), la1, la2, la3, t_lmbv_17) });
  (s.pc = "jQs4RAmR3ZyG42am");
  var t_call_19 = (ok2(s, s.$sprite21, s.$tapped1) && s.$sprite21.on_tap(s.$tapped1, s));
  t_call_19;
  return a_a_qW0r08QAOkvI6Xz2$17$6;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_qW0r08QAOkvI6Xz2$17$6, 'a_a_qW0r08QAOkvI6Xz2$17$6');

/* ACTION: a_a_qW0r08QAOkvI6Xz2$17::lambda::4 */
function a_a_a_qW0r08QAOkvI6Xz2$17$4(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_qW0r08QAOkvI6Xz2$17$4$0;
  s.name = "a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_qW0r08QAOkvI6Xz2$17\u003a\u003alambda\u003a\u003a4", "a_a_qW0r08QAOkvI6Xz2$17$4", a_a_a_qW0r08QAOkvI6Xz2$17$4, true);

function a_a_a_qW0r08QAOkvI6Xz2$17$4$0(s) {
  (s.pc = "xwYEieHrXFrM3C4v");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$4$0, 'a_a_a_qW0r08QAOkvI6Xz2$17$4$0');

/* ACTION: a_a_qW0r08QAOkvI6Xz2$17::lambda::5 */
function a_a_a_qW0r08QAOkvI6Xz2$17$5(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_qW0r08QAOkvI6Xz2$17$5$0;
  s.name = "a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_qW0r08QAOkvI6Xz2$17\u003a\u003alambda\u003a\u003a5", "a_a_qW0r08QAOkvI6Xz2$17$5", a_a_a_qW0r08QAOkvI6Xz2$17$5, true);

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_a_a_qW0r08QAOkvI6Xz2$17$5$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "tLw7AoXh248MUDGr");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "vVY17zC5jJWrXw7l");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["remove life"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_qW0r08QAOkvI6Xz2$17$5$2, 1));
  } else {
  (s.pc = "CaOlLHpltpHt7l78");
  null;
  }
  return a_a_a_qW0r08QAOkvI6Xz2$17$5$1;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$5$0, 'a_a_a_qW0r08QAOkvI6Xz2$17$5$0');

function a_a_a_qW0r08QAOkvI6Xz2$17$5$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "aoegnWFVV1XFaFIY");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_a_qW0r08QAOkvI6Xz2$17$5$3);
  var t_call_5 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_4));
  return a_a_a_qW0r08QAOkvI6Xz2$17$5$3;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$5$2, 'a_a_a_qW0r08QAOkvI6Xz2$17$5$2');

function a_a_a_qW0r08QAOkvI6Xz2$17$5$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$5$1, 'a_a_a_qW0r08QAOkvI6Xz2$17$5$1');

function a_a_a_qW0r08QAOkvI6Xz2$17$5$3(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$boom = t_pauseRes_6);
  (s.pc = "x4q2MZJbzHC0GLx4");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "xUC60h3QMUdLcLe2");
  var t_call_7 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_7) && s.$boom.set_height(t_call_7, s));
  (s.pc = "JnWWUVppFK9bH1cT");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "ZAo499fZF4Ba9m2e");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a_a_qW0r08QAOkvI6Xz2$17$5$4);
  (ok1(s, /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl) && /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl.play(t_resumeCtx_8));
  return a_a_a_qW0r08QAOkvI6Xz2$17$5$4;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$5$3, 'a_a_a_qW0r08QAOkvI6Xz2$17$5$3');

function a_a_a_qW0r08QAOkvI6Xz2$17$5$4(s) {
  (s.pc = "xoQzGUCTop0EHU3B");
  var t_call_9 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_9);
  (s.pc = "TBA1ZtTGehMNlv5P");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "KhoGmo5efiF42of1");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "BzN4C312RZ3DjfuN");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "MYY2bYEyk3wSyrgF");
  null;
  return a_a_a_qW0r08QAOkvI6Xz2$17$5$1;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$5$4, 'a_a_a_qW0r08QAOkvI6Xz2$17$5$4');

/* ACTION: a_a_qW0r08QAOkvI6Xz2$17::lambda::9 */
function a_a_a_qW0r08QAOkvI6Xz2$17$9(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_qW0r08QAOkvI6Xz2$17$9$0;
  s.name = "a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_qW0r08QAOkvI6Xz2$17\u003a\u003alambda\u003a\u003a9", "a_a_qW0r08QAOkvI6Xz2$17$9", a_a_a_qW0r08QAOkvI6Xz2$17$9, true);

function a_a_a_qW0r08QAOkvI6Xz2$17$9$0(s) {
  (s.pc = "xi44Pbl3BS1nePcQ");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$9$0, 'a_a_a_qW0r08QAOkvI6Xz2$17$9$0');

/* ACTION: a_a_qW0r08QAOkvI6Xz2$17::lambda::10 */
function a_a_a_qW0r08QAOkvI6Xz2$17$10(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_qW0r08QAOkvI6Xz2$17$10$0;
  s.name = "a_qW0r08QAOkvI6Xz2\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_qW0r08QAOkvI6Xz2$17\u003a\u003alambda\u003a\u003a10", "a_a_qW0r08QAOkvI6Xz2$17$10", a_a_a_qW0r08QAOkvI6Xz2$17$10, true);

function a_a_a_qW0r08QAOkvI6Xz2$17$10$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "v75ACLH6H3SZmDuB");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "FTZ1mIJnr78N0jM4");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["add score"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_qW0r08QAOkvI6Xz2$17$10$2, 10));
  } else {
  (s.pc = "A0900z2EZs4i9B6j");
  null;
  }
  return a_a_a_qW0r08QAOkvI6Xz2$17$10$1;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$10$0, 'a_a_a_qW0r08QAOkvI6Xz2$17$10$0');

function a_a_a_qW0r08QAOkvI6Xz2$17$10$2(s) {
  (s.pc = "fCirqrbvIz363DL1");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_a_qW0r08QAOkvI6Xz2$17$10$3);
  var t_call_4 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_3));
  return a_a_a_qW0r08QAOkvI6Xz2$17$10$3;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$10$2, 'a_a_a_qW0r08QAOkvI6Xz2$17$10$2');

function a_a_a_qW0r08QAOkvI6Xz2$17$10$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$10$1, 'a_a_a_qW0r08QAOkvI6Xz2$17$10$1');

function a_a_a_qW0r08QAOkvI6Xz2$17$10$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$boom = t_pauseRes_5);
  (s.pc = "ckVYS5wH6rgswxd6");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "xxi0U4C10QqarUp5");
  var t_call_6 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_6) && s.$boom.set_height(t_call_6, s));
  (s.pc = "sulB5GcB3uc1P456");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "ZzbRVYes9iuEnCxc");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_a_a_qW0r08QAOkvI6Xz2$17$10$4);
  (ok1(s, /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y) && /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y.play(t_resumeCtx_7));
  return a_a_a_qW0r08QAOkvI6Xz2$17$10$4;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$10$3, 'a_a_a_qW0r08QAOkvI6Xz2$17$10$3');

function a_a_a_qW0r08QAOkvI6Xz2$17$10$4(s) {
  (s.pc = "NdZA4UXfs740owB1");
  var t_call_8 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_8);
  (s.pc = "qm7ZHMtVX0egHgdA");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "lfZq6l2qj5kbI6yG");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "ycwxSqY2JxdaQCnP");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "pMYmhQVqJdM7z9lU");
  null;
  return a_a_a_qW0r08QAOkvI6Xz2$17$10$1;
}
cs.registerStep(a_a_a_qW0r08QAOkvI6Xz2$17$10$4, 'a_a_a_qW0r08QAOkvI6Xz2$17$10$4');

/* ACTION: level 2 */
function a_beIcHhdM8lFSCOKb(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_beIcHhdM8lFSCOKb$0;
  s.name = "level 2";
  s.$i = undefined;
  s.$j = undefined;
  s.$sprite = undefined;
  s.$sprite2 = undefined;
  s.$perform = undefined;
  s.$perform1 = undefined;
  s.$perform2 = undefined;
  s.$sprite21 = undefined;
  s.$perform3 = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$boom = undefined;
  s.$anim = undefined;
  s.$sprite22 = undefined;
  s.$perform31 = undefined;
  s.$tapped1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$boom1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerAction("level 2", "beIcHhdM8lFSCOKb", a_beIcHhdM8lFSCOKb, true);

function a_beIcHhdM8lFSCOKb$0(s) {
  (s.pc = "UnTcWnZkjgwLQKta");
  var t_libcall_0 = s.libs["q7b3FJBC7mRz7BmW"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_beIcHhdM8lFSCOKb$1));
}
cs.registerStep(a_beIcHhdM8lFSCOKb$0, 'a_beIcHhdM8lFSCOKb$0');

function a_beIcHhdM8lFSCOKb$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* board */ s.d.$oWdUoI3QW4xI4IIX = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "kB95bW5yG4VUkytx");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_beIcHhdM8lFSCOKb$2, 30));
}
cs.registerStep(a_beIcHhdM8lFSCOKb$1, 'a_beIcHhdM8lFSCOKb$1');

function a_beIcHhdM8lFSCOKb$2(s) {
  (s.pc = "SA8Oq9o1cbMlGVY1");
  s.rt.logObjectMutation(/* board */ s.d.$oWdUoI3QW4xI4IIX);
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_beIcHhdM8lFSCOKb$3);
  (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* lab2 */ s.d.$IH4cy5RJlb7g9E4g) && /* board */ s.d.$oWdUoI3QW4xI4IIX.set_background_picture(/* lab2 */ s.d.$IH4cy5RJlb7g9E4g, t_resumeCtx_3));
  return a_beIcHhdM8lFSCOKb$3;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$2, 'a_beIcHhdM8lFSCOKb$2');

function a_beIcHhdM8lFSCOKb$3(s) {
  (s.pc = "F2mi6wZ1jmAQgbg6");
  var t_call_4 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* air duct */ s.d.$tkgyWwJ4j82STlNs = t_call_4);
  s.rt.logDataWrite();
  (s.pc = "xYIwYExlkO345anW");
  var t_call_5 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* minionA */ s.d.$qBWQP4oDmUKXmamh = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "gg7AlkFCUCW2ZQr9");
  var t_call_6 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* evilminionA */ s.d.$c6whhfB2TJbOywnP = t_call_6);
  s.rt.logDataWrite();
  (s.pc = "qePrZWvY5H9iqTuw");
  s.t_bnd_7 = 3;
  (s.$i = 0);
  return a_beIcHhdM8lFSCOKb$4;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$3, 'a_beIcHhdM8lFSCOKb$3');

function a_beIcHhdM8lFSCOKb$4(s) {
  if ((s.$i < s.t_bnd_7)) {
  (s.pc = "ObCLoXjFraI3hb2H");
  s.t_bnd_8 = 3;
  (s.$j = 0);
  return a_beIcHhdM8lFSCOKb$6;
  }
  (s.pc = "apsRdry4akJ2nTOz");
  s.t_collArr_12 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_13 = 0;
  return a_beIcHhdM8lFSCOKb$11;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$4, 'a_beIcHhdM8lFSCOKb$4');

function a_beIcHhdM8lFSCOKb$6(s) {
  if ((s.$j < s.t_bnd_8)) {
  (s.pc = "xA7KKuD4FWffszRF");
  return s.rt.enter(a_uDKh2BSiz6xjb0jd(s, a_beIcHhdM8lFSCOKb$8, s.$i, s.$j));
  }
  (s.$i++);
  return a_beIcHhdM8lFSCOKb$4;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$6, 'a_beIcHhdM8lFSCOKb$6');

function a_beIcHhdM8lFSCOKb$11(s) {
  if ((s.t_idx_13 < (s.t_collArr_12.length))) {
  (s.$sprite = s.t_collArr_12[(s.t_idx_13)]);
  (s.t_idx_13++);
  (s.pc = "Cs90ngqFp2IMrx2R");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.hide(s));
  (s.pc = "xmgstwfTrchWM3Gi");
  null;
  return a_beIcHhdM8lFSCOKb$11;
  }
  (s.pc = "SUESRx2fXSlMPvf3");
  s.t_collArr_14 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_15 = 0;
  return a_beIcHhdM8lFSCOKb$13;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$11, 'a_beIcHhdM8lFSCOKb$11');

function a_beIcHhdM8lFSCOKb$8(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  (s.pc = "SFWutnyye3KTP54P");
  return s.rt.enter(a_aiHvY0vwH5GQ9i2a(s, a_beIcHhdM8lFSCOKb$9, s.$i, s.$j));
}
cs.registerStep(a_beIcHhdM8lFSCOKb$8, 'a_beIcHhdM8lFSCOKb$8');

function a_beIcHhdM8lFSCOKb$13(s) {
  if ((s.t_idx_15 < (s.t_collArr_14.length))) {
  (s.$sprite2 = s.t_collArr_14[(s.t_idx_15)]);
  (s.t_idx_15++);
  (s.pc = "vALotL3ADX3ybEgY");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return a_beIcHhdM8lFSCOKb$13;
  }
  (s.pc = "cR7Qzk9skJzOyVy3");
  var t_lmbProxy_16 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_beIcHhdM8lFSCOKb$15(t_lmbProxy_16(la0), la1) });
  (s.pc = "qIHajyNamu6Maoff");
  s.rt.logObjectMutation(null);
  var t_call_17 = (ok1(s, s.$perform) && lib.Time.run_every(1, s.$perform, s));
  t_call_17;
  (s.pc = "nxY3vfGmpVDrwGM6");
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$perform1 = function(la0, la1) { return a_a_beIcHhdM8lFSCOKb$16(t_lmbProxy_18(la0), la1) });
  (s.pc = "ALDDfTSLTfPpeONc");
  s.rt.logObjectMutation(null);
  var t_call_19 = (ok1(s, s.$perform1) && lib.Time.run_every(1, s.$perform1, s));
  t_call_19;
  (s.pc = "xdEXA3tv1LnvIFZN");
  var t_lmbv_20 = s.$perform3;
  var t_lmbv_21 = s.$tapped;
  var t_lmbv_22 = s.$perform31;
  var t_lmbv_23 = s.$tapped1;
  var t_lmbProxy_24 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_beIcHhdM8lFSCOKb$17(t_lmbProxy_24(la0), la1, t_lmbv_20, t_lmbv_21, t_lmbv_22, t_lmbv_23) });
  (s.pc = "Qu7FjV2lT3hGKOCb");
  var t_call_25 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, s.$perform2) && /* board */ s.d.$oWdUoI3QW4xI4IIX.add_on_every_frame(s.$perform2, s));
  t_call_25;
  return s.rt.leave();
}
cs.registerStep(a_beIcHhdM8lFSCOKb$13, 'a_beIcHhdM8lFSCOKb$13');

function a_beIcHhdM8lFSCOKb$9(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  (s.pc = "AyCZL4aN6m9CJ8Dn");
  return s.rt.enter(a_F5Lx512lnV3oirqF(s, a_beIcHhdM8lFSCOKb$10, s.$i, s.$j));
}
cs.registerStep(a_beIcHhdM8lFSCOKb$9, 'a_beIcHhdM8lFSCOKb$9');

function a_beIcHhdM8lFSCOKb$10(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  (s.$j++);
  return a_beIcHhdM8lFSCOKb$6;
}
cs.registerStep(a_beIcHhdM8lFSCOKb$10, 'a_beIcHhdM8lFSCOKb$10');

/* ACTION: a_beIcHhdM8lFSCOKb::lambda::15 */
function a_a_beIcHhdM8lFSCOKb$15(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_beIcHhdM8lFSCOKb$15$0;
  s.name = "level 2";
  return s;
}
cs.registerLambda("a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a15", "a_beIcHhdM8lFSCOKb$15", a_a_beIcHhdM8lFSCOKb$15, true);

function a_a_beIcHhdM8lFSCOKb$15$0(s) {
  (s.pc = "JXyDo52qPveOhD9J");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh, t_call_0) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_beIcHhdM8lFSCOKb$15$0, 'a_a_beIcHhdM8lFSCOKb$15$0');

/* ACTION: a_beIcHhdM8lFSCOKb::lambda::16 */
function a_a_beIcHhdM8lFSCOKb$16(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_beIcHhdM8lFSCOKb$16$0;
  s.name = "level 2";
  return s;
}
cs.registerLambda("a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a16", "a_beIcHhdM8lFSCOKb$16", a_a_beIcHhdM8lFSCOKb$16, true);

function a_a_beIcHhdM8lFSCOKb$16$0(s) {
  (s.pc = "xkhzVUW3ZUIt3mEL");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP, t_call_0) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_beIcHhdM8lFSCOKb$16$0, 'a_a_beIcHhdM8lFSCOKb$16$0');

/* ACTION: a_beIcHhdM8lFSCOKb::lambda::17 */
function a_a_beIcHhdM8lFSCOKb$17(previous, returnAddr, $perform3, $tapped, $perform31, $tapped1) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_beIcHhdM8lFSCOKb$17$0;
  s.name = "level 2";
  s.$sprite2 = undefined;
  s.$perform3 = $perform3;
  s.$tapped = $tapped;
  s.$boom = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$anim = undefined;
  s.$sprite21 = undefined;
  s.$perform31 = $perform31;
  s.$tapped1 = $tapped1;
  s.$boom1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerLambda("a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a17", "a_beIcHhdM8lFSCOKb$17", a_a_beIcHhdM8lFSCOKb$17, true);

function a_a_beIcHhdM8lFSCOKb$17$0(s) {
  (s.pc = "jdyRZdNbTb62O2G2");
  s.t_collArr_0 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_beIcHhdM8lFSCOKb$17$1;
}
cs.registerStep(a_a_beIcHhdM8lFSCOKb$17$0, 'a_a_beIcHhdM8lFSCOKb$17$0');

function a_a_beIcHhdM8lFSCOKb$17$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite2 = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  var t_elseIf_2 = true;
  (s.pc = "DBb2Ftxe77iAK8x5");
  var t_call_3 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "i48Zoc5A2nZY3MUX");
  var t_lmbv_4 = s.$sprite2;
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_a_beIcHhdM8lFSCOKb$17$4(t_lmbProxy_5(la0), la1, t_lmbv_4) });
  (s.pc = "DdlFV40nDuRJCwxB");
  s.rt.logObjectMutation(null);
  var t_call_6 = (ok1(s, s.$perform3) && lib.Time.run_after(1.25, s.$perform3, s));
  t_call_6;
  (s.pc = "JGWWyoT2W5bd0Cel");
  null;
  } else {
  (s.pc = "aYjdgWe1rlux2X24");
  null;
  }
  (s.pc = "M20FepxUF2WlRxA1");
  var t_lmbv_7 = s.$sprite2;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_a_beIcHhdM8lFSCOKb$17$5(t_lmbProxy_8(la0), la1, la2, la3, t_lmbv_7) });
  (s.pc = "qPT3v4gqMtfNwVWc");
  var t_call_9 = (ok2(s, s.$sprite2, s.$tapped) && s.$sprite2.on_tap(s.$tapped, s));
  t_call_9;
  return a_a_beIcHhdM8lFSCOKb$17$1;
  }
  (s.pc = "u4mLlibqDQxDyrXL");
  s.t_collArr_10 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_11 = 0;
  return a_a_beIcHhdM8lFSCOKb$17$6;
}
cs.registerStep(a_a_beIcHhdM8lFSCOKb$17$1, 'a_a_beIcHhdM8lFSCOKb$17$1');

function a_a_beIcHhdM8lFSCOKb$17$6(s) {
  if ((s.t_idx_11 < (s.t_collArr_10.length))) {
  (s.$sprite21 = s.t_collArr_10[(s.t_idx_11)]);
  (s.t_idx_11++);
  var t_elseIf_12 = true;
  (s.pc = "nT3YQLljXReht5Ea");
  var t_call_13 = (ok1(s, s.$sprite21) && s.$sprite21.is_visible(s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "xgd54XV6TRj9oAPE");
  var t_lmbv_14 = s.$sprite21;
  var t_lmbProxy_15 = s.libs.mkLambdaProxy;
  (s.$perform31 = function(la0, la1) { return a_a_a_beIcHhdM8lFSCOKb$17$9(t_lmbProxy_15(la0), la1, t_lmbv_14) });
  (s.pc = "xUrVYNoGgaJ78w0R");
  s.rt.logObjectMutation(null);
  var t_call_16 = (ok1(s, s.$perform31) && lib.Time.run_after(1.25, s.$perform31, s));
  t_call_16;
  (s.pc = "obkiKXX1tA3gulZN");
  null;
  } else {
  (s.pc = "iXwY6oHjVzIvY14j");
  null;
  }
  (s.pc = "xt8fLJUOGzsLvejg");
  var t_lmbv_17 = s.$sprite21;
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$tapped1 = function(la0, la1, la2, la3) { return a_a_a_beIcHhdM8lFSCOKb$17$10(t_lmbProxy_18(la0), la1, la2, la3, t_lmbv_17) });
  (s.pc = "mLk18ZqWT74foObK");
  var t_call_19 = (ok2(s, s.$sprite21, s.$tapped1) && s.$sprite21.on_tap(s.$tapped1, s));
  t_call_19;
  return a_a_beIcHhdM8lFSCOKb$17$6;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_beIcHhdM8lFSCOKb$17$6, 'a_a_beIcHhdM8lFSCOKb$17$6');

/* ACTION: a_a_beIcHhdM8lFSCOKb$17::lambda::4 */
function a_a_a_beIcHhdM8lFSCOKb$17$4(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_beIcHhdM8lFSCOKb$17$4$0;
  s.name = "a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_beIcHhdM8lFSCOKb$17\u003a\u003alambda\u003a\u003a4", "a_a_beIcHhdM8lFSCOKb$17$4", a_a_a_beIcHhdM8lFSCOKb$17$4, true);

function a_a_a_beIcHhdM8lFSCOKb$17$4$0(s) {
  (s.pc = "EMpN7YAvspZ2j3gZ");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$4$0, 'a_a_a_beIcHhdM8lFSCOKb$17$4$0');

/* ACTION: a_a_beIcHhdM8lFSCOKb$17::lambda::5 */
function a_a_a_beIcHhdM8lFSCOKb$17$5(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_beIcHhdM8lFSCOKb$17$5$0;
  s.name = "a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_beIcHhdM8lFSCOKb$17\u003a\u003alambda\u003a\u003a5", "a_a_beIcHhdM8lFSCOKb$17$5", a_a_a_beIcHhdM8lFSCOKb$17$5, true);

function a_a_a_beIcHhdM8lFSCOKb$17$5$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "hJZlPq4mKZ5hYm0L");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "T8dxXTOcY8hPme8R");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["remove life"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_beIcHhdM8lFSCOKb$17$5$2, 1));
  } else {
  (s.pc = "x7MtS2tM2vQi4Afz");
  null;
  }
  return a_a_a_beIcHhdM8lFSCOKb$17$5$1;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$5$0, 'a_a_a_beIcHhdM8lFSCOKb$17$5$0');

function a_a_a_beIcHhdM8lFSCOKb$17$5$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "AVxFdo42JXZY8LCu");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_a_beIcHhdM8lFSCOKb$17$5$3);
  var t_call_5 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_4));
  return a_a_a_beIcHhdM8lFSCOKb$17$5$3;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$5$2, 'a_a_a_beIcHhdM8lFSCOKb$17$5$2');

function a_a_a_beIcHhdM8lFSCOKb$17$5$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$5$1, 'a_a_a_beIcHhdM8lFSCOKb$17$5$1');

function a_a_a_beIcHhdM8lFSCOKb$17$5$3(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$boom = t_pauseRes_6);
  (s.pc = "SbhJlPhSXX2aj2Kh");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "APD8ZpogeFKYh4oA");
  var t_call_7 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_7) && s.$boom.set_height(t_call_7, s));
  (s.pc = "xA4mfeduyetjrXRG");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "HTFUhc3afrUWfu5M");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a_a_beIcHhdM8lFSCOKb$17$5$4);
  (ok1(s, /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl) && /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl.play(t_resumeCtx_8));
  return a_a_a_beIcHhdM8lFSCOKb$17$5$4;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$5$3, 'a_a_a_beIcHhdM8lFSCOKb$17$5$3');

function a_a_a_beIcHhdM8lFSCOKb$17$5$4(s) {
  (s.pc = "xV5prXhMi7uyiKQP");
  var t_call_9 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_9);
  (s.pc = "xCSledDyh4ZbZ2Yl");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "BdyaxLqnyBDyxgmK");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "uTAmQc6AP9jPUaX0");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "iy4Wa1dAiJjMacJc");
  null;
  return a_a_a_beIcHhdM8lFSCOKb$17$5$1;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$5$4, 'a_a_a_beIcHhdM8lFSCOKb$17$5$4');

/* ACTION: a_a_beIcHhdM8lFSCOKb$17::lambda::9 */
function a_a_a_beIcHhdM8lFSCOKb$17$9(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_beIcHhdM8lFSCOKb$17$9$0;
  s.name = "a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_beIcHhdM8lFSCOKb$17\u003a\u003alambda\u003a\u003a9", "a_a_beIcHhdM8lFSCOKb$17$9", a_a_a_beIcHhdM8lFSCOKb$17$9, true);

function a_a_a_beIcHhdM8lFSCOKb$17$9$0(s) {
  (s.pc = "FCvyWwCpPkG2yH2b");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$9$0, 'a_a_a_beIcHhdM8lFSCOKb$17$9$0');

/* ACTION: a_a_beIcHhdM8lFSCOKb$17::lambda::10 */
function a_a_a_beIcHhdM8lFSCOKb$17$10(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_beIcHhdM8lFSCOKb$17$10$0;
  s.name = "a_beIcHhdM8lFSCOKb\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_beIcHhdM8lFSCOKb$17\u003a\u003alambda\u003a\u003a10", "a_a_beIcHhdM8lFSCOKb$17$10", a_a_a_beIcHhdM8lFSCOKb$17$10, true);

function a_a_a_beIcHhdM8lFSCOKb$17$10$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "vS2gxfzzrxYRycmm");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "YZthCbYU0bVFYx53");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["add score"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_beIcHhdM8lFSCOKb$17$10$2, 10));
  } else {
  (s.pc = "xy162yvwgVMz768b");
  null;
  }
  return a_a_a_beIcHhdM8lFSCOKb$17$10$1;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$10$0, 'a_a_a_beIcHhdM8lFSCOKb$17$10$0');

function a_a_a_beIcHhdM8lFSCOKb$17$10$2(s) {
  (s.pc = "MyQGheZo8RJA35Xb");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_a_beIcHhdM8lFSCOKb$17$10$3);
  var t_call_4 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_3));
  return a_a_a_beIcHhdM8lFSCOKb$17$10$3;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$10$2, 'a_a_a_beIcHhdM8lFSCOKb$17$10$2');

function a_a_a_beIcHhdM8lFSCOKb$17$10$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$10$1, 'a_a_a_beIcHhdM8lFSCOKb$17$10$1');

function a_a_a_beIcHhdM8lFSCOKb$17$10$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$boom = t_pauseRes_5);
  (s.pc = "xfa3JPLnJsjOrUwN");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "xJjAG74ZZ0a57Tlt");
  var t_call_6 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_6) && s.$boom.set_height(t_call_6, s));
  (s.pc = "qxaD24BicQCTavtG");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "xMEO52GbVj6qM4jg");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_a_a_beIcHhdM8lFSCOKb$17$10$4);
  (ok1(s, /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y) && /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y.play(t_resumeCtx_7));
  return a_a_a_beIcHhdM8lFSCOKb$17$10$4;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$10$3, 'a_a_a_beIcHhdM8lFSCOKb$17$10$3');

function a_a_a_beIcHhdM8lFSCOKb$17$10$4(s) {
  (s.pc = "D4ns2IZg4FI4U2Ku");
  var t_call_8 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_8);
  (s.pc = "xXSIVNqPY8pYq8ue");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "YhFibsI7pUHpye6l");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "Th9H7KB29CeiRTgs");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "rvmt40l7fUiqU70l");
  null;
  return a_a_a_beIcHhdM8lFSCOKb$17$10$1;
}
cs.registerStep(a_a_a_beIcHhdM8lFSCOKb$17$10$4, 'a_a_a_beIcHhdM8lFSCOKb$17$10$4');

/* ACTION: make minionA */
function a_aiHvY0vwH5GQ9i2a(previous, returnAddr, $k, $l) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_aiHvY0vwH5GQ9i2a$0;
  s.name = "make minionA";
  s.$k = $k;
  s.$l = $l;
  s.$minA = undefined;
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("make minionA", "aiHvY0vwH5GQ9i2a", a_aiHvY0vwH5GQ9i2a, true);

function a_aiHvY0vwH5GQ9i2a$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_aiHvY0vwH5GQ9i2a$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "k", "$k"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "l", "$l"));
  return a_aiHvY0vwH5GQ9i2a$3;
  }
  return a_aiHvY0vwH5GQ9i2a$2;
}
cs.registerStep(a_aiHvY0vwH5GQ9i2a$0, 'a_aiHvY0vwH5GQ9i2a$0');

function a_aiHvY0vwH5GQ9i2a$3(s) {
  return a_aiHvY0vwH5GQ9i2a$2;
}
cs.registerStep(a_aiHvY0vwH5GQ9i2a$3, 'a_aiHvY0vwH5GQ9i2a$3');

function a_aiHvY0vwH5GQ9i2a$2(s) {
  (s.pc = "xAPy9GGtV2v6EG94");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_aiHvY0vwH5GQ9i2a$1);
  var t_call_1 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* minion1 */ s.d.$jRzYmkx7an5lc2hR) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* minion1 */ s.d.$jRzYmkx7an5lc2hR, t_resumeCtx_0));
  return a_aiHvY0vwH5GQ9i2a$1;
}
cs.registerStep(a_aiHvY0vwH5GQ9i2a$2, 'a_aiHvY0vwH5GQ9i2a$2');

function a_aiHvY0vwH5GQ9i2a$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (s.$minA = t_pauseRes_2);
  (s.pc = "qOEY5uDq2aPiESyr");
  s.rt.logObjectMutation(s.$minA);
  (ok1(s, s.$minA) && s.$minA.set_width(65, s));
  (s.pc = "AFrPdKOtfutNx1pv");
  var t_call_3 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.width(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 4));
  var t_infix_5 = (ok1(s, s.$k) && (s.$k + 1));
  var t_infix_6 = (ok2(s, t_infix_4, t_infix_5) && (t_infix_4 * t_infix_5));
  (s.$x = t_infix_6);
  (s.pc = "ZgUkaUaLkNhTaXCk");
  var t_call_7 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.height(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 / 4));
  var t_infix_9 = (ok1(s, s.$l) && (s.$l + 1));
  var t_infix_10 = (ok2(s, t_infix_8, t_infix_9) && (t_infix_8 * t_infix_9));
  (s.$y = t_infix_10);
  (s.pc = "IWEjSI0Mj81mKyyq");
  s.rt.logObjectMutation(s.$minA);
  (ok3(s, s.$minA, s.$x, s.$y) && s.$minA.set_pos(s.$x, s.$y, s));
  (s.pc = "aY3Rb3MLMEUrLz3a");
  s.rt.logObjectMutation(/* minionA */ s.d.$qBWQP4oDmUKXmamh);
  var t_call_11 = (ok2(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh, s.$minA) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.add(s.$minA, s));
  t_call_11;
  return s.rt.leave();
}
cs.registerStep(a_aiHvY0vwH5GQ9i2a$1, 'a_aiHvY0vwH5GQ9i2a$1');

/* ACTION: make evil minionA */
function a_F5Lx512lnV3oirqF(previous, returnAddr, $p, $q) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_F5Lx512lnV3oirqF$0;
  s.name = "make evil minionA";
  s.$p = $p;
  s.$q = $q;
  s.$eminA = undefined;
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("make evil minionA", "F5Lx512lnV3oirqF", a_F5Lx512lnV3oirqF, true);

function a_F5Lx512lnV3oirqF$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_F5Lx512lnV3oirqF$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "p", "$p"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "q", "$q"));
  return a_F5Lx512lnV3oirqF$3;
  }
  return a_F5Lx512lnV3oirqF$2;
}
cs.registerStep(a_F5Lx512lnV3oirqF$0, 'a_F5Lx512lnV3oirqF$0');

function a_F5Lx512lnV3oirqF$3(s) {
  return a_F5Lx512lnV3oirqF$2;
}
cs.registerStep(a_F5Lx512lnV3oirqF$3, 'a_F5Lx512lnV3oirqF$3');

function a_F5Lx512lnV3oirqF$2(s) {
  (s.pc = "pL7LRR2s2rIHTDXM");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_F5Lx512lnV3oirqF$1);
  var t_call_1 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* evil minion1 */ s.d.$dUA9saYW3w4WHsSU) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* evil minion1 */ s.d.$dUA9saYW3w4WHsSU, t_resumeCtx_0));
  return a_F5Lx512lnV3oirqF$1;
}
cs.registerStep(a_F5Lx512lnV3oirqF$2, 'a_F5Lx512lnV3oirqF$2');

function a_F5Lx512lnV3oirqF$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (s.$eminA = t_pauseRes_2);
  (s.pc = "lyVHCt2tADAuYp2e");
  s.rt.logObjectMutation(s.$eminA);
  (ok1(s, s.$eminA) && s.$eminA.set_width(80, s));
  (s.pc = "oARa4FuNTb2ZwQVK");
  var t_call_3 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.width(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 4));
  var t_infix_5 = (ok1(s, s.$p) && (s.$p + 1));
  var t_infix_6 = (ok2(s, t_infix_4, t_infix_5) && (t_infix_4 * t_infix_5));
  (s.$x = t_infix_6);
  (s.pc = "VK41J2nrwF8dlly8");
  var t_call_7 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.height(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 / 4));
  var t_infix_9 = (ok1(s, s.$q) && (s.$q + 1));
  var t_infix_10 = (ok2(s, t_infix_8, t_infix_9) && (t_infix_8 * t_infix_9));
  (s.$y = t_infix_10);
  (s.pc = "T24Z2Z3mZFgYuE68");
  s.rt.logObjectMutation(s.$eminA);
  (ok3(s, s.$eminA, s.$x, s.$y) && s.$eminA.set_pos(s.$x, s.$y, s));
  (s.pc = "Tzk6p9YqnbJ4G03Y");
  s.rt.logObjectMutation(/* evilminionA */ s.d.$c6whhfB2TJbOywnP);
  var t_call_11 = (ok2(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP, s.$eminA) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.add(s.$eminA, s));
  t_call_11;
  return s.rt.leave();
}
cs.registerStep(a_F5Lx512lnV3oirqF$1, 'a_F5Lx512lnV3oirqF$1');

/* ACTION: make hole */
function a_uDKh2BSiz6xjb0jd(previous, returnAddr, $i, $j) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uDKh2BSiz6xjb0jd$0;
  s.name = "make hole";
  s.$i = $i;
  s.$j = $j;
  s.$hole = undefined;
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("make hole", "uDKh2BSiz6xjb0jd", a_uDKh2BSiz6xjb0jd, true);

function a_uDKh2BSiz6xjb0jd$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_uDKh2BSiz6xjb0jd$3, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "i", "$i"), lib.RTValue.mkPicker(lib.Number_.picker(), 0, "j", "$j"));
  return a_uDKh2BSiz6xjb0jd$3;
  }
  return a_uDKh2BSiz6xjb0jd$2;
}
cs.registerStep(a_uDKh2BSiz6xjb0jd$0, 'a_uDKh2BSiz6xjb0jd$0');

function a_uDKh2BSiz6xjb0jd$3(s) {
  return a_uDKh2BSiz6xjb0jd$2;
}
cs.registerStep(a_uDKh2BSiz6xjb0jd$3, 'a_uDKh2BSiz6xjb0jd$3');

function a_uDKh2BSiz6xjb0jd$2(s) {
  (s.pc = "xgMvC71RI6LyTBoH");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_uDKh2BSiz6xjb0jd$1);
  var t_call_1 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* Cannon hole */ s.d.$VpgKmFnPjfEKVoMb) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* Cannon hole */ s.d.$VpgKmFnPjfEKVoMb, t_resumeCtx_0));
  return a_uDKh2BSiz6xjb0jd$1;
}
cs.registerStep(a_uDKh2BSiz6xjb0jd$2, 'a_uDKh2BSiz6xjb0jd$2');

function a_uDKh2BSiz6xjb0jd$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_2);
  (s.$hole = t_pauseRes_2);
  (s.pc = "hqGBwHUtqIvx4eP9");
  s.rt.logObjectMutation(s.$hole);
  (ok1(s, s.$hole) && s.$hole.set_width(50, s));
  (s.pc = "D23pzCNeya14zam6");
  var t_call_3 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.width(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 4));
  var t_infix_5 = (ok1(s, s.$i) && (s.$i + 1));
  var t_infix_6 = (ok2(s, t_infix_4, t_infix_5) && (t_infix_4 * t_infix_5));
  (s.$x = t_infix_6);
  (s.pc = "PTB2krHBiZqU286R");
  var t_call_7 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.height(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 / 4));
  var t_infix_9 = (ok1(s, s.$j) && (s.$j + 1));
  var t_infix_10 = (ok2(s, t_infix_8, t_infix_9) && (t_infix_8 * t_infix_9));
  (s.$y = t_infix_10);
  (s.pc = "CIvEfEzB156yuMiZ");
  s.rt.logObjectMutation(s.$hole);
  (ok3(s, s.$hole, s.$x, s.$y) && s.$hole.set_pos(s.$x, s.$y, s));
  (s.pc = "xm25afSx2sZlHgA4");
  s.rt.logObjectMutation(/* air duct */ s.d.$tkgyWwJ4j82STlNs);
  var t_call_11 = (ok2(s, /* air duct */ s.d.$tkgyWwJ4j82STlNs, s.$hole) && /* air duct */ s.d.$tkgyWwJ4j82STlNs.add(s.$hole, s));
  t_call_11;
  return s.rt.leave();
}
cs.registerStep(a_uDKh2BSiz6xjb0jd$1, 'a_uDKh2BSiz6xjb0jd$1');

cs.registerArtResource("Picture", "$VpgKmFnPjfEKVoMb", ".\u002fart\u002fl0_VpgKmFnPjfEKVoMb");
cs.registerArtResource("Picture", "$EPL4YqCCa8OYnJR2", ".\u002fart\u002fl0_EPL4YqCCa8OYnJR2");
cs.registerArtResource("Picture", "$IH4cy5RJlb7g9E4g", ".\u002fart\u002fl0_IH4cy5RJlb7g9E4g");
cs.registerArtResource("Sound", "$AvaHX3kuM442jmOl", ".\u002fart\u002fl0_AvaHX3kuM442jmOl");
cs.registerArtResource("Picture", "$hmwrCqtubX8sYgGV", ".\u002fart\u002fl0_hmwrCqtubX8sYgGV");
cs.registerArtResource("Picture", "$jC4yGeQpdWCi2uAR", ".\u002fart\u002fl0_jC4yGeQpdWCi2uAR");
cs.registerArtResource("Sound", "$VocaJVPz2Ptra21Y", ".\u002fart\u002fl0_VocaJVPz2Ptra21Y");
/* ACTION: level 3 */
function a_xhdhNkOKuAbjItSa(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xhdhNkOKuAbjItSa$0;
  s.name = "level 3";
  s.$i = undefined;
  s.$j = undefined;
  s.$sprite = undefined;
  s.$sprite2 = undefined;
  s.$perform = undefined;
  s.$perform1 = undefined;
  s.$perform2 = undefined;
  s.$sprite21 = undefined;
  s.$perform3 = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$boom = undefined;
  s.$anim = undefined;
  s.$sprite22 = undefined;
  s.$perform31 = undefined;
  s.$tapped1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$boom1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerAction("level 3", "xhdhNkOKuAbjItSa", a_xhdhNkOKuAbjItSa, true);

function a_xhdhNkOKuAbjItSa$0(s) {
  (s.pc = "ZS7g15m9qQYDYrqw");
  var t_libcall_0 = s.libs["q7b3FJBC7mRz7BmW"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_xhdhNkOKuAbjItSa$1));
}
cs.registerStep(a_xhdhNkOKuAbjItSa$0, 'a_xhdhNkOKuAbjItSa$0');

function a_xhdhNkOKuAbjItSa$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* board */ s.d.$oWdUoI3QW4xI4IIX = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "QRxTyOmU2qpSN8Ly");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_xhdhNkOKuAbjItSa$2, 30));
}
cs.registerStep(a_xhdhNkOKuAbjItSa$1, 'a_xhdhNkOKuAbjItSa$1');

function a_xhdhNkOKuAbjItSa$2(s) {
  (s.pc = "gT2PW4DEui446I3L");
  s.rt.logObjectMutation(/* board */ s.d.$oWdUoI3QW4xI4IIX);
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_xhdhNkOKuAbjItSa$3);
  (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* lab3 */ s.d.$zcVcT8NgRnPloa2s) && /* board */ s.d.$oWdUoI3QW4xI4IIX.set_background_picture(/* lab3 */ s.d.$zcVcT8NgRnPloa2s, t_resumeCtx_3));
  return a_xhdhNkOKuAbjItSa$3;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$2, 'a_xhdhNkOKuAbjItSa$2');

function a_xhdhNkOKuAbjItSa$3(s) {
  (s.pc = "nW2h00HlaqMTUf49");
  var t_call_4 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* air duct */ s.d.$tkgyWwJ4j82STlNs = t_call_4);
  s.rt.logDataWrite();
  (s.pc = "Y84qo4uE7kUhkG6r");
  var t_call_5 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* minionA */ s.d.$qBWQP4oDmUKXmamh = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "j1WzyQIsVrNsJ3l7");
  var t_call_6 = (ok1(s, /* board */ s.d.$oWdUoI3QW4xI4IIX) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_sprite_set(s));
  (/* evilminionA */ s.d.$c6whhfB2TJbOywnP = t_call_6);
  s.rt.logDataWrite();
  (s.pc = "sH2FhIc4nNgv2ZqR");
  s.t_bnd_7 = 3;
  (s.$i = 0);
  return a_xhdhNkOKuAbjItSa$4;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$3, 'a_xhdhNkOKuAbjItSa$3');

function a_xhdhNkOKuAbjItSa$4(s) {
  if ((s.$i < s.t_bnd_7)) {
  (s.pc = "O6NiuPZfGcsVv76G");
  s.t_bnd_8 = 3;
  (s.$j = 0);
  return a_xhdhNkOKuAbjItSa$6;
  }
  (s.pc = "lcyW7gqf8FashDZN");
  s.t_collArr_12 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_13 = 0;
  return a_xhdhNkOKuAbjItSa$11;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$4, 'a_xhdhNkOKuAbjItSa$4');

function a_xhdhNkOKuAbjItSa$6(s) {
  if ((s.$j < s.t_bnd_8)) {
  (s.pc = "DF0K2rn7UQLLcnEZ");
  return s.rt.enter(a_uDKh2BSiz6xjb0jd(s, a_xhdhNkOKuAbjItSa$8, s.$i, s.$j));
  }
  (s.$i++);
  return a_xhdhNkOKuAbjItSa$4;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$6, 'a_xhdhNkOKuAbjItSa$6');

function a_xhdhNkOKuAbjItSa$11(s) {
  if ((s.t_idx_13 < (s.t_collArr_12.length))) {
  (s.$sprite = s.t_collArr_12[(s.t_idx_13)]);
  (s.t_idx_13++);
  (s.pc = "xRx9kKLqamZNcZfm");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.hide(s));
  (s.pc = "IyQVyU824lbElFZI");
  null;
  return a_xhdhNkOKuAbjItSa$11;
  }
  (s.pc = "RxpLKwvVHTIHzcPc");
  s.t_collArr_14 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_15 = 0;
  return a_xhdhNkOKuAbjItSa$13;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$11, 'a_xhdhNkOKuAbjItSa$11');

function a_xhdhNkOKuAbjItSa$8(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  (s.pc = "xzm29W2pQwv9CpFF");
  return s.rt.enter(a_aiHvY0vwH5GQ9i2a(s, a_xhdhNkOKuAbjItSa$9, s.$i, s.$j));
}
cs.registerStep(a_xhdhNkOKuAbjItSa$8, 'a_xhdhNkOKuAbjItSa$8');

function a_xhdhNkOKuAbjItSa$13(s) {
  if ((s.t_idx_15 < (s.t_collArr_14.length))) {
  (s.$sprite2 = s.t_collArr_14[(s.t_idx_15)]);
  (s.t_idx_15++);
  (s.pc = "Yg82HbfDp4z8kJ2Q");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return a_xhdhNkOKuAbjItSa$13;
  }
  (s.pc = "xbYNETk97WHJHPp7");
  var t_lmbProxy_16 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_xhdhNkOKuAbjItSa$15(t_lmbProxy_16(la0), la1) });
  (s.pc = "GutiazrvElXsqVen");
  s.rt.logObjectMutation(null);
  var t_call_17 = (ok1(s, s.$perform) && lib.Time.run_every(1, s.$perform, s));
  t_call_17;
  (s.pc = "R93o6axxCKb5fGh4");
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$perform1 = function(la0, la1) { return a_a_xhdhNkOKuAbjItSa$16(t_lmbProxy_18(la0), la1) });
  (s.pc = "EGs4fNke2ARK0Plr");
  s.rt.logObjectMutation(null);
  var t_call_19 = (ok1(s, s.$perform1) && lib.Time.run_every(1, s.$perform1, s));
  t_call_19;
  (s.pc = "Sa308VVF2fboviAQ");
  var t_lmbv_20 = s.$perform3;
  var t_lmbv_21 = s.$tapped;
  var t_lmbv_22 = s.$perform31;
  var t_lmbv_23 = s.$tapped1;
  var t_lmbProxy_24 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_xhdhNkOKuAbjItSa$17(t_lmbProxy_24(la0), la1, t_lmbv_20, t_lmbv_21, t_lmbv_22, t_lmbv_23) });
  (s.pc = "mKBYvRM4CVk65hzJ");
  var t_call_25 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, s.$perform2) && /* board */ s.d.$oWdUoI3QW4xI4IIX.add_on_every_frame(s.$perform2, s));
  t_call_25;
  return s.rt.leave();
}
cs.registerStep(a_xhdhNkOKuAbjItSa$13, 'a_xhdhNkOKuAbjItSa$13');

function a_xhdhNkOKuAbjItSa$9(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  (s.pc = "ImWKrQ2CNWlJ47Zd");
  return s.rt.enter(a_F5Lx512lnV3oirqF(s, a_xhdhNkOKuAbjItSa$10, s.$i, s.$j));
}
cs.registerStep(a_xhdhNkOKuAbjItSa$9, 'a_xhdhNkOKuAbjItSa$9');

function a_xhdhNkOKuAbjItSa$10(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  (s.$j++);
  return a_xhdhNkOKuAbjItSa$6;
}
cs.registerStep(a_xhdhNkOKuAbjItSa$10, 'a_xhdhNkOKuAbjItSa$10');

/* ACTION: a_xhdhNkOKuAbjItSa::lambda::15 */
function a_a_xhdhNkOKuAbjItSa$15(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xhdhNkOKuAbjItSa$15$0;
  s.name = "level 3";
  return s;
}
cs.registerLambda("a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a15", "a_xhdhNkOKuAbjItSa$15", a_a_xhdhNkOKuAbjItSa$15, true);

function a_a_xhdhNkOKuAbjItSa$15$0(s) {
  (s.pc = "G8ubiLgSeWGc27Gt");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh, t_call_0) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_xhdhNkOKuAbjItSa$15$0, 'a_a_xhdhNkOKuAbjItSa$15$0');

/* ACTION: a_xhdhNkOKuAbjItSa::lambda::16 */
function a_a_xhdhNkOKuAbjItSa$16(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xhdhNkOKuAbjItSa$16$0;
  s.name = "level 3";
  return s;
}
cs.registerLambda("a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a16", "a_xhdhNkOKuAbjItSa$16", a_a_xhdhNkOKuAbjItSa$16, true);

function a_a_xhdhNkOKuAbjItSa$16$0(s) {
  (s.pc = "xwGGLJQBGqe2JDBK");
  var t_call_0 = lib.Math_.random(9, s);
  var t_call_1 = (ok2(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP, t_call_0) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.at(t_call_0, s));
  s.rt.logObjectMutation(t_call_1);
  (ok1(s, t_call_1) && t_call_1.show(s));
  return s.rt.leave();
}
cs.registerStep(a_a_xhdhNkOKuAbjItSa$16$0, 'a_a_xhdhNkOKuAbjItSa$16$0');

/* ACTION: a_xhdhNkOKuAbjItSa::lambda::17 */
function a_a_xhdhNkOKuAbjItSa$17(previous, returnAddr, $perform3, $tapped, $perform31, $tapped1) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xhdhNkOKuAbjItSa$17$0;
  s.name = "level 3";
  s.$sprite2 = undefined;
  s.$perform3 = $perform3;
  s.$tapped = $tapped;
  s.$boom = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$anim = undefined;
  s.$sprite21 = undefined;
  s.$perform31 = $perform31;
  s.$tapped1 = $tapped1;
  s.$boom1 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$anim1 = undefined;
  return s;
}
cs.registerLambda("a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a17", "a_xhdhNkOKuAbjItSa$17", a_a_xhdhNkOKuAbjItSa$17, true);

function a_a_xhdhNkOKuAbjItSa$17$0(s) {
  (s.pc = "TV0iPHXtjxFWDhWx");
  s.t_collArr_0 = (ok1(s, /* minionA */ s.d.$qBWQP4oDmUKXmamh) && /* minionA */ s.d.$qBWQP4oDmUKXmamh.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_xhdhNkOKuAbjItSa$17$1;
}
cs.registerStep(a_a_xhdhNkOKuAbjItSa$17$0, 'a_a_xhdhNkOKuAbjItSa$17$0');

function a_a_xhdhNkOKuAbjItSa$17$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite2 = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  var t_elseIf_2 = true;
  (s.pc = "ziWIKnTezcYz5uHY");
  var t_call_3 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.pc = "nrWy64T2DJIyccp7");
  var t_lmbv_4 = s.$sprite2;
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$perform3 = function(la0, la1) { return a_a_a_xhdhNkOKuAbjItSa$17$4(t_lmbProxy_5(la0), la1, t_lmbv_4) });
  (s.pc = "x8PJI3BUbObJzPAU");
  s.rt.logObjectMutation(null);
  var t_call_6 = (ok1(s, s.$perform3) && lib.Time.run_after(0.75, s.$perform3, s));
  t_call_6;
  (s.pc = "ftiN7ts20D1Vkc0r");
  null;
  } else {
  (s.pc = "wM5FiQ14ZmRWo214");
  null;
  }
  (s.pc = "InUILzNK43qHMaK8");
  var t_lmbv_7 = s.$sprite2;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_a_xhdhNkOKuAbjItSa$17$5(t_lmbProxy_8(la0), la1, la2, la3, t_lmbv_7) });
  (s.pc = "QIWb2GwFrU4La2JK");
  var t_call_9 = (ok2(s, s.$sprite2, s.$tapped) && s.$sprite2.on_tap(s.$tapped, s));
  t_call_9;
  return a_a_xhdhNkOKuAbjItSa$17$1;
  }
  (s.pc = "pDGBWjik2c7rC826");
  s.t_collArr_10 = (ok1(s, /* evilminionA */ s.d.$c6whhfB2TJbOywnP) && /* evilminionA */ s.d.$c6whhfB2TJbOywnP.get_enumerator());
  s.t_idx_11 = 0;
  return a_a_xhdhNkOKuAbjItSa$17$6;
}
cs.registerStep(a_a_xhdhNkOKuAbjItSa$17$1, 'a_a_xhdhNkOKuAbjItSa$17$1');

function a_a_xhdhNkOKuAbjItSa$17$6(s) {
  if ((s.t_idx_11 < (s.t_collArr_10.length))) {
  (s.$sprite21 = s.t_collArr_10[(s.t_idx_11)]);
  (s.t_idx_11++);
  var t_elseIf_12 = true;
  (s.pc = "zGwd2S6w7xDm7nlE");
  var t_call_13 = (ok1(s, s.$sprite21) && s.$sprite21.is_visible(s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "x4QL46Wm9nn9wJgz");
  var t_lmbv_14 = s.$sprite21;
  var t_lmbProxy_15 = s.libs.mkLambdaProxy;
  (s.$perform31 = function(la0, la1) { return a_a_a_xhdhNkOKuAbjItSa$17$9(t_lmbProxy_15(la0), la1, t_lmbv_14) });
  (s.pc = "etK0JtES2clBfIAr");
  s.rt.logObjectMutation(null);
  var t_call_16 = (ok1(s, s.$perform31) && lib.Time.run_after(0.75, s.$perform31, s));
  t_call_16;
  (s.pc = "UvBLDiYlXIq2uxFW");
  null;
  } else {
  (s.pc = "yg4oFK4WE0j03S4I");
  null;
  }
  (s.pc = "zEEun8lEN666XbYC");
  var t_lmbv_17 = s.$sprite21;
  var t_lmbProxy_18 = s.libs.mkLambdaProxy;
  (s.$tapped1 = function(la0, la1, la2, la3) { return a_a_a_xhdhNkOKuAbjItSa$17$10(t_lmbProxy_18(la0), la1, la2, la3, t_lmbv_17) });
  (s.pc = "MUeF8KLDMTN705Bg");
  var t_call_19 = (ok2(s, s.$sprite21, s.$tapped1) && s.$sprite21.on_tap(s.$tapped1, s));
  t_call_19;
  return a_a_xhdhNkOKuAbjItSa$17$6;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_xhdhNkOKuAbjItSa$17$6, 'a_a_xhdhNkOKuAbjItSa$17$6');

/* ACTION: a_a_xhdhNkOKuAbjItSa$17::lambda::4 */
function a_a_a_xhdhNkOKuAbjItSa$17$4(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_xhdhNkOKuAbjItSa$17$4$0;
  s.name = "a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_xhdhNkOKuAbjItSa$17\u003a\u003alambda\u003a\u003a4", "a_a_xhdhNkOKuAbjItSa$17$4", a_a_a_xhdhNkOKuAbjItSa$17$4, true);

function a_a_a_xhdhNkOKuAbjItSa$17$4$0(s) {
  (s.pc = "mLM2AlrAoceT0zea");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$4$0, 'a_a_a_xhdhNkOKuAbjItSa$17$4$0');

/* ACTION: a_a_xhdhNkOKuAbjItSa$17::lambda::5 */
function a_a_a_xhdhNkOKuAbjItSa$17$5(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_xhdhNkOKuAbjItSa$17$5$0;
  s.name = "a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_xhdhNkOKuAbjItSa$17\u003a\u003alambda\u003a\u003a5", "a_a_xhdhNkOKuAbjItSa$17$5", a_a_a_xhdhNkOKuAbjItSa$17$5, true);

function a_a_a_xhdhNkOKuAbjItSa$17$5$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "RJw3lger3eB7Gsmw");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "nD67AS2r7TaQ6aMY");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["remove life"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_xhdhNkOKuAbjItSa$17$5$2, 1));
  } else {
  (s.pc = "xZAIqEWFNc9PtwXl");
  null;
  }
  return a_a_a_xhdhNkOKuAbjItSa$17$5$1;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$5$0, 'a_a_a_xhdhNkOKuAbjItSa$17$5$0');

function a_a_a_xhdhNkOKuAbjItSa$17$5$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "VMQuBEKrLvkhiYzd");
  var t_resumeCtx_4 = s.rt.getBlockingResumeCtx(a_a_a_xhdhNkOKuAbjItSa$17$5$3);
  var t_call_5 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_4));
  return a_a_a_xhdhNkOKuAbjItSa$17$5$3;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$5$2, 'a_a_a_xhdhNkOKuAbjItSa$17$5$2');

function a_a_a_xhdhNkOKuAbjItSa$17$5$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$5$1, 'a_a_a_xhdhNkOKuAbjItSa$17$5$1');

function a_a_a_xhdhNkOKuAbjItSa$17$5$3(s) {
  var t_pauseRes_6 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_6);
  (s.$boom = t_pauseRes_6);
  (s.pc = "xtUfSKqWTNzrbEo2");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "xuc2Eey4wNfyGTxU");
  var t_call_7 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_7) && s.$boom.set_height(t_call_7, s));
  (s.pc = "B4eMKcrJOzzyXSyO");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "xUg5dp22qR0sKhHi");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a_a_xhdhNkOKuAbjItSa$17$5$4);
  (ok1(s, /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl) && /* Bubble Pop */ s.d.$AvaHX3kuM442jmOl.play(t_resumeCtx_8));
  return a_a_a_xhdhNkOKuAbjItSa$17$5$4;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$5$3, 'a_a_a_xhdhNkOKuAbjItSa$17$5$3');

function a_a_a_xhdhNkOKuAbjItSa$17$5$4(s) {
  (s.pc = "XhgQc07nxIyJFRwd");
  var t_call_9 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_9);
  (s.pc = "iaxywuEvnOXthHmo");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "xdhQUjn26yOk925n");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "HSDh03BEfqleXRKt");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "dYrCyqN30d9TJSOP");
  null;
  return a_a_a_xhdhNkOKuAbjItSa$17$5$1;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$5$4, 'a_a_a_xhdhNkOKuAbjItSa$17$5$4');

/* ACTION: a_a_xhdhNkOKuAbjItSa$17::lambda::9 */
function a_a_a_xhdhNkOKuAbjItSa$17$9(previous, returnAddr, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_xhdhNkOKuAbjItSa$17$9$0;
  s.name = "a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  return s;
}
cs.registerLambda("a_a_xhdhNkOKuAbjItSa$17\u003a\u003alambda\u003a\u003a9", "a_a_xhdhNkOKuAbjItSa$17$9", a_a_a_xhdhNkOKuAbjItSa$17$9, true);

function a_a_a_xhdhNkOKuAbjItSa$17$9$0(s) {
  (s.pc = "CD5OiGl8U7R1a09t");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$9$0, 'a_a_a_xhdhNkOKuAbjItSa$17$9$0');

/* ACTION: a_a_xhdhNkOKuAbjItSa$17::lambda::10 */
function a_a_a_xhdhNkOKuAbjItSa$17$10(previous, returnAddr, $x, $y, $sprite2) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_a_xhdhNkOKuAbjItSa$17$10$0;
  s.name = "a_xhdhNkOKuAbjItSa\u003a\u003alambda\u003a\u003a17";
  s.$sprite2 = $sprite2;
  s.$boom = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_a_xhdhNkOKuAbjItSa$17\u003a\u003alambda\u003a\u003a10", "a_a_xhdhNkOKuAbjItSa$17$10", a_a_a_xhdhNkOKuAbjItSa$17$10, true);

function a_a_a_xhdhNkOKuAbjItSa$17$10$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xm4Df25uc3sN1zOj");
  var t_call_1 = (ok1(s, s.$sprite2) && s.$sprite2.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "xzZomphBHbI6X2Pn");
  var t_libcall_2 = s.libs["q7b3FJBC7mRz7BmW"]["add score"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_a_a_xhdhNkOKuAbjItSa$17$10$2, 10));
  } else {
  (s.pc = "E2AocBUzyJQoG2yC");
  null;
  }
  return a_a_a_xhdhNkOKuAbjItSa$17$10$1;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$10$0, 'a_a_a_xhdhNkOKuAbjItSa$17$10$0');

function a_a_a_xhdhNkOKuAbjItSa$17$10$2(s) {
  (s.pc = "Ng1dFaZRd8kXeqln");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_a_xhdhNkOKuAbjItSa$17$10$3);
  var t_call_4 = (ok2(s, /* board */ s.d.$oWdUoI3QW4xI4IIX, /* bubbles */ s.d.$hmwrCqtubX8sYgGV) && /* board */ s.d.$oWdUoI3QW4xI4IIX.create_picture(/* bubbles */ s.d.$hmwrCqtubX8sYgGV, t_resumeCtx_3));
  return a_a_a_xhdhNkOKuAbjItSa$17$10$3;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$10$2, 'a_a_a_xhdhNkOKuAbjItSa$17$10$2');

function a_a_a_xhdhNkOKuAbjItSa$17$10$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$10$1, 'a_a_a_xhdhNkOKuAbjItSa$17$10$1');

function a_a_a_xhdhNkOKuAbjItSa$17$10$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$boom = t_pauseRes_5);
  (s.pc = "kPAH32VGnu2jPfjd");
  s.rt.logObjectMutation(s.$boom);
  (ok3(s, s.$boom, s.$x, s.$y) && s.$boom.set_pos(s.$x, s.$y, s));
  (s.pc = "SIvyQVWhwJ29Dxfn");
  var t_call_6 = (ok1(s, s.$sprite2) && s.$sprite2.height(s));
  s.rt.logObjectMutation(s.$boom);
  (ok2(s, s.$boom, t_call_6) && s.$boom.set_height(t_call_6, s));
  (s.pc = "RMIn33yN3ufIHKkH");
  s.rt.logObjectMutation(s.$boom);
  (ok1(s, s.$boom) && s.$boom.set_speed_y(15, s));
  (s.pc = "V3ppSMvVnQNyW8pb");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_a_a_xhdhNkOKuAbjItSa$17$10$4);
  (ok1(s, /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y) && /* minionlaugh2 */ s.d.$VocaJVPz2Ptra21Y.play(t_resumeCtx_7));
  return a_a_a_xhdhNkOKuAbjItSa$17$10$4;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$10$3, 'a_a_a_xhdhNkOKuAbjItSa$17$10$3');

function a_a_a_xhdhNkOKuAbjItSa$17$10$4(s) {
  (s.pc = "ABtjmmvBgJdGrja8");
  var t_call_8 = (ok1(s, s.$boom) && s.$boom.create_animation(s));
  (s.$anim = t_call_8);
  (s.pc = "KMh2VQGlZUb5CTmJ");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "quadratic", 1.5, s));
  (s.pc = "Ql2Jav8nzpTWMtsM");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  (s.pc = "ww0sHaUOH0OCTK2G");
  s.rt.logObjectMutation(s.$sprite2);
  (ok1(s, s.$sprite2) && s.$sprite2.hide(s));
  (s.pc = "fdcHRefBEuMkqKhM");
  null;
  return a_a_a_xhdhNkOKuAbjItSa$17$10$1;
}
cs.registerStep(a_a_a_xhdhNkOKuAbjItSa$17$10$4, 'a_a_a_xhdhNkOKuAbjItSa$17$10$4');

cs.registerArtResource("Picture", "$zcVcT8NgRnPloa2s", ".\u002fart\u002fl0_zcVcT8NgRnPloa2s");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Minion Mash \u0028mchsa\u0029";
  bnd.scriptId = "mchsa";
  bnd.topScriptId = "mchsa";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["mainLevel"] = cs.mkLibProxyFactory(bnd, "this", "mainLevel");
    lib["level 1"] = cs.mkLibProxyFactory(bnd, "this", "level 1");
    lib["level 2"] = cs.mkLibProxyFactory(bnd, "this", "level 2");
    lib["make minionA"] = cs.mkLibProxyFactory(bnd, "this", "make minionA");
    lib["make evil minionA"] = cs.mkLibProxyFactory(bnd, "this", "make evil minionA");
    lib["make hole"] = cs.mkLibProxyFactory(bnd, "this", "make hole");
    lib["level 3"] = cs.mkLibProxyFactory(bnd, "this", "level 3");
  lib = libs["q7b3FJBC7mRz7BmW"] = {};
  bnd = bnds["q7b3FJBC7mRz7BmW"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "q7b3FJBC7mRz7BmW");
  bnd.scriptName = "game \u0028ratf\u0029";
  bnd.scriptId = "ratf";
  bnd.topScriptId = "mchsa";
    lib["set score"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "set score");
    lib["start countdown timer"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "start countdown timer");
    lib["score"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "score");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "add score");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "remove life");
    lib["end"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "end");
    lib["start"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "start");
    lib["reset"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "reset");
    lib["on end"] = cs.mkLibProxyFactory(bnd, "q7b3FJBC7mRz7BmW", "on end");
  lib = libs["x442wOGmyyTXqw9z"] = {};
  bnd = bnds["x442wOGmyyTXqw9z"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "x442wOGmyyTXqw9z");
  bnd.scriptName = "game menu \u0028aakeb\u0029";
  bnd.scriptId = "aakeb";
  bnd.topScriptId = "mchsa";
    lib["start"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "start");
    lib["initialize"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "initialize");
    lib["level by id"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "level by id");
    lib["set instructions"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "set instructions");
    lib["button theme"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "button theme");
    lib["page theme"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "page theme");
    lib["set background"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "set background");
    lib["set foreground"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "set foreground");
    lib["set background picture"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "set background picture");
    lib["level button theme"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "level button theme");
    lib["index"] = cs.mkLibProxyFactory(bnd, "x442wOGmyyTXqw9z", "index");
  bnd = bnds["q7b3FJBC7mRz7BmW"];
  bnd["this$lib"] = "q7b3FJBC7mRz7BmW";
  bnd = bnds["x442wOGmyyTXqw9z"];
  bnd["this$lib"] = "x442wOGmyyTXqw9z";
    resolve = bnd["game"] = {};
    bnd["game" + "$lib"] = "q7b3FJBC7mRz7BmW";
      resolve["end"] = libs["q7b3FJBC7mRz7BmW"]["end"];
      resolve["on end"] = libs["q7b3FJBC7mRz7BmW"]["on end"];
      resolve["reset"] = libs["q7b3FJBC7mRz7BmW"]["reset"];
      resolve["score"] = libs["q7b3FJBC7mRz7BmW"]["score"];
      resolve["set score"] = libs["q7b3FJBC7mRz7BmW"]["set score"];
      resolve["start"] = libs["q7b3FJBC7mRz7BmW"]["start"];
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

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$jRzYmkx7an5lc2hR = undefined;
  d.$dUA9saYW3w4WHsSU = undefined;
  d.$oWdUoI3QW4xI4IIX = undefined;
  d.$qBWQP4oDmUKXmamh = undefined;
  d.$c6whhfB2TJbOywnP = undefined;
  d.$tkgyWwJ4j82STlNs = undefined;
  d.$VpgKmFnPjfEKVoMb = undefined;
  d.$EPL4YqCCa8OYnJR2 = undefined;
  d.$IH4cy5RJlb7g9E4g = undefined;
  d.$AvaHX3kuM442jmOl = undefined;
  d.$hmwrCqtubX8sYgGV = undefined;
  d.$jC4yGeQpdWCi2uAR = undefined;
  d.$VocaJVPz2Ptra21Y = undefined;
  d.$zcVcT8NgRnPloa2s = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "mchsa";
cs.scriptGuid = "e41d2fb8-d686-4351-5e09-e8b67f90a59a";
cs.hasLocalData = 1;
}),

// **************************************************************
"q7b3FJBC7mRz7BmW": (function (cs) {
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
  (s.pc = "AthmGNfV3H0xKheh");
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
  (s.pc = "x8hoLE2oLmnzfjjS");
  null;
  }
  (s.pc = "lohlOvEl2FCCHlN8");
  var t_infix_18 = (ok2(s, s.$height, s.$ratio) && (s.$height * s.$ratio));
  (s.$width = t_infix_18);
  } else {
  (s.pc = "xrbhx6LiuSCj6KgF");
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
  (s.pc = "QWedTjhofEmecfm6");
  null;
  }
  (s.pc = "Y2iBY1rS8V2IYESl");
  var t_infix_25 = (ok2(s, s.$width, s.$ratio) && (s.$width / s.$ratio));
  (s.$height = t_infix_25);
  } else {
  (s.pc = "zZ8BKtifUazeJJJ4");
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
  (s.pc = "UHjoP1D20mbkmeQg");
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
  (s.pc = "xLVlodV2zkDZuczm");
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

/* ACTION: start countdown timer */
function a_uCawjS8UtYJd1W4TZkrVvAE7(previous, returnAddr, $seconds) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uCawjS8UtYJd1W4TZkrVvAE7$0;
  s.name = "start countdown timer";
  s.$seconds = $seconds;
  return s;
}
cs.registerAction("start countdown timer", "uCawjS8UtYJd1W4TZkrVvAE7", a_uCawjS8UtYJd1W4TZkrVvAE7, false);

function a_uCawjS8UtYJd1W4TZkrVvAE7$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_uCawjS8UtYJd1W4TZkrVvAE7$2, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "seconds", "$seconds"));
  return a_uCawjS8UtYJd1W4TZkrVvAE7$2;
  }
  return a_uCawjS8UtYJd1W4TZkrVvAE7$1;
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$0, 'a_uCawjS8UtYJd1W4TZkrVvAE7$0');

function a_uCawjS8UtYJd1W4TZkrVvAE7$2(s) {
  return a_uCawjS8UtYJd1W4TZkrVvAE7$1;
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$2, 'a_uCawjS8UtYJd1W4TZkrVvAE7$2');

function a_uCawjS8UtYJd1W4TZkrVvAE7$1(s) {
  (s.pc = "xrYxMpoChJ3q8C4C");
  var t_call_0 = lib.Time.now(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "xpOkBULYOyu5K6ol");
  (/* _countdown duration */ s.d.$x4cIV8c7P0QJsADCfcHm2ApY = s.$seconds);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_uCawjS8UtYJd1W4TZkrVvAE7$1, 'a_uCawjS8UtYJd1W4TZkrVvAE7$1');

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
  (s.pc = "eM5HsVUk3W4Wjmar");
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
  (s.pc = "VjhbYFcUiyl3tDQJ");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
  } else {
  (s.pc = "xhVnqb369c2rrKaK");
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
  (s.pc = "vD8k0zhboCrOROoN");
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
  (s.pc = "U9DTYyhJz5lr9laN");
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
  (s.pc = "x5MOg8cdvsHUJErf");
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
  (s.pc = "YNIZnWPpc0R3bxVZ");
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
  (s.pc = "PIi3XC2T3MlUJaN1");
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
  (s.pc = "JydEh5434gidHMCW");
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
  (s.pc = "EaGt7N10or09NskW");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
  } else {
  (s.pc = "RzeekCuX3f5rKdxH");
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
  (s.pc = "ixtnMJPUsyivodZ2");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$8);
  lib.App.restart("", t_resumeCtx_8);
  return a_a14qLDjp7EtajVvdEd1rS18X$8;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$7, 'a_a14qLDjp7EtajVvdEd1rS18X$7');

function a_a14qLDjp7EtajVvdEd1rS18X$8(s) {
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$8, 'a_a14qLDjp7EtajVvdEd1rS18X$8');

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
  (s.pc = "xofyu5Cp2Nerx9sL");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$1, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$1');

/* ACTION: on end */
function a_xTv6Ulq3EWIRTV6f6oXlbDh9(previous, returnAddr, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xTv6Ulq3EWIRTV6f6oXlbDh9$0;
  s.name = "on end";
  s.$action = $action;
  return s;
}
cs.registerAction("on end", "xTv6Ulq3EWIRTV6f6oXlbDh9", a_xTv6Ulq3EWIRTV6f6oXlbDh9, false);

function a_xTv6Ulq3EWIRTV6f6oXlbDh9$0(s) {
  (s.pc = "AYzAMJdPbb22r3I4");
  (/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju = s.$action);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_xTv6Ulq3EWIRTV6f6oXlbDh9$0, 'a_xTv6Ulq3EWIRTV6f6oXlbDh9$0');

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
  (s.pc = "dybTARevfuiZqaH5");
  null;
  }
  (s.pc = "znTtVcKS99o5PuwK");
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
cs.scriptId = "mchsa";
cs.scriptGuid = "e41d2fb8-d686-4351-5e09-e8b67f90a59a";
}),

// **************************************************************
"x442wOGmyyTXqw9z": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "game menu";
cs.scriptColor = "\u00239955bb";
cs.objectSingletons = {};
/* ACTION: start */
function a_start(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_start$0;
  s.name = "start";
  s.$_ = undefined;
  return s;
}
cs.registerPage("start", "start", a_start, false);

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

function a_start$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.60");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$Bc3RhcnQgcGFnZSBkYXRh.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.640");
  return s.rt.enter(a_stylepage(s, a_start$2));
  } else {
  (s.pc = "2.650");
  null;
  }
  return a_start$1;
}
cs.registerStep(a_start$0, 'a_start$0');

function a_start$2(s) {
  return a_start$1;
}
cs.registerStep(a_start$2, 'a_start$2');

function a_start$1(s) {
  var t_elseIf_2 = true;
  (s.pc = "2.65");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.690");
  var t_call_3 = lib.Box.page_height(s);
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 8));
  (ok1(s, t_infix_4) && lib.Box.set_padding(t_infix_4, 1, 1, 1, s));
  (s.pc = "2.693");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.696");
  return s.rt.enter(a_QHP9ho2IGjrPxqq9F80pZmqj(s, a_start$4));
  } else {
  (s.pc = "2.6a0");
  null;
  }
  return a_start$3;
}
cs.registerStep(a_start$1, 'a_start$1');

function a_start$4(s) {
  (s.pc = "2.699");
  return s.rt.enter(a_LJpox6YpuCvn6ERcUlisZc56(s, a_start$5));
}
cs.registerStep(a_start$4, 'a_start$4');

function a_start$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_start$3, 'a_start$3');

function a_start$5(s) {
  (s.pc = "2.69c");
  return s.rt.enter(a_mqb129Wh4dEV1uyHJF1oS5IJ(s, a_start$6));
}
cs.registerStep(a_start$5, 'a_start$5');

function a_start$6(s) {
  (s.pc = "2.69f");
  return s.rt.enter(a_XNqQQCzJZlGV2I6w0FE2aVvf(s, a_start$7));
}
cs.registerStep(a_start$6, 'a_start$6');

function a_start$7(s) {
  (s.pc = "2.69i");
  return s.rt.enter(a_OP6CcdaCET95J4x6c4vLnjpz(s, a_start$8));
}
cs.registerStep(a_start$7, 'a_start$7');

function a_start$8(s) {
  (s.pc = "2.69l");
  return s.rt.enter(a_VBoM3w1YjF9BzIB6ry8gv2PO(s, a_start$9));
}
cs.registerStep(a_start$8, 'a_start$8');

function a_start$9(s) {
  s.rt.leave_render();
  return a_start$3;
}
cs.registerStep(a_start$9, 'a_start$9');


//Ent_Bc3RhcnQgcGFnZSBkYXRh
function Ent_Bc3RhcnQgcGFnZSBkYXRh(p) {
  this.parent = p;
}
Ent_Bc3RhcnQgcGFnZSBkYXRh.prototype = new lib.ObjectEntry();
Ent_Bc3RhcnQgcGFnZSBkYXRh.prototype.keys = [];
Ent_Bc3RhcnQgcGFnZSBkYXRh.prototype.values = [];
Ent_Bc3RhcnQgcGFnZSBkYXRh.prototype.fields = [];
//Tbl_Bc3RhcnQgcGFnZSBkYXRh
function Tbl_Bc3RhcnQgcGFnZSBkYXRh(l) {
  this.libName = l;
  this.initParent();
}
Tbl_Bc3RhcnQgcGFnZSBkYXRh.prototype = new lib.ObjectSingleton();
Tbl_Bc3RhcnQgcGFnZSBkYXRh.prototype.entryCtor = Ent_Bc3RhcnQgcGFnZSBkYXRh;
cs.objectSingletons["start page data"] = function(d) { return d.$Bc3RhcnQgcGFnZSBkYXRh };
Tbl_Bc3RhcnQgcGFnZSBkYXRh.prototype.selfCtor = Tbl_Bc3RhcnQgcGFnZSBkYXRh;
Tbl_Bc3RhcnQgcGFnZSBkYXRh.prototype.stableName = "Bc3RhcnQgcGFnZSBkYXRh";
Tbl_Bc3RhcnQgcGFnZSBkYXRh.prototype.entryKindName = "start page data";

// jsonimport
Ent_Bc3RhcnQgcGFnZSBkYXRh.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$Bc3RhcnQgcGFnZSBkYXRh");
/* ACTION: show level selection */
function a_levelselection(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_levelselection$0;
  s.name = "show level selection";
  s.$_ = undefined;
  s.$grid_width = undefined;
  s.$grid_height = undefined;
  s.$numboxes = undefined;
  s.$area = undefined;
  s.$bsize = undefined;
  s.$cols = undefined;
  s.$rows = undefined;
  s.$alt1 = undefined;
  s.$alt2 = undefined;
  s.$mgn = undefined;
  s.$i = undefined;
  s.$j = undefined;
  s.$level_id = undefined;
  s.$lvl = undefined;
  return s;
}
cs.registerPage("show level selection", "levelselection", a_levelselection, false);

function a_levelselection$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.e0");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.e40");
  return s.rt.enter(a_stylepage(s, a_levelselection$2));
  } else {
  (s.pc = "2.e50");
  null;
  }
  return a_levelselection$1;
}
cs.registerStep(a_levelselection$0, 'a_levelselection$0');

function a_levelselection$2(s) {
  (s.pc = "2.e43");
  lib.Wall.set_title("select a level", s);
  return a_levelselection$1;
}
cs.registerStep(a_levelselection$2, 'a_levelselection$2');

function a_levelselection$1(s) {
  var t_elseIf_2 = true;
  (s.pc = "2.e5");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.e90");
  lib.Box.push_box(s);
  (s.pc = "2.e920");
  lib.Box.set_margins(1, 1, 1, 1, s);
  (s.pc = "2.e923");
  var t_call_3 = lib.Box.page_width(s);
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 - 3));
  (s.$grid_width = t_infix_4);
  (s.pc = "2.e926");
  var t_call_5 = lib.Box.page_height(s);
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 - 3));
  (s.$grid_height = t_infix_6);
  (s.pc = "2.e929");
  (s.$numboxes = /* _level count */ s.d.$levelcount);
  (s.pc = "2.e92c");
  var t_infix_7 = (ok2(s, s.$grid_width, s.$grid_height) && (s.$grid_width * s.$grid_height));
  (s.$area = t_infix_7);
  (s.pc = "2.e92f");
  var t_infix_8 = (ok2(s, s.$area, s.$numboxes) && (s.$area / s.$numboxes));
  var t_call_9 = (ok1(s, t_infix_8) && lib.Math_.sqrt(t_infix_8, s));
  (s.$bsize = t_call_9);
  (s.pc = "2.e92i");
  var t_infix_10 = (ok2(s, s.$grid_width, s.$bsize) && (s.$grid_width / s.$bsize));
  var t_call_11 = (ok1(s, t_infix_10) && lib.Math_.floor(t_infix_10, s));
  (s.$cols = t_call_11);
  (s.pc = "2.e92l");
  var t_infix_12 = (ok2(s, s.$numboxes, s.$cols) && (s.$numboxes / s.$cols));
  var t_call_13 = (ok1(s, t_infix_12) && lib.Math_.ceiling(t_infix_12, s));
  (s.$rows = t_call_13);
  (s.pc = "2.e92o");
  return a_levelselection$4;
  } else {
  (s.pc = "2.ea0");
  null;
  }
  return a_levelselection$3;
}
cs.registerStep(a_levelselection$1, 'a_levelselection$1');

function a_levelselection$4(s) {
  var t_infix_14 = (ok2(s, s.$rows, s.$bsize) && (s.$rows * s.$bsize));
  var t_infix_15 = (ok2(s, t_infix_14, s.$grid_height) && (t_infix_14 > s.$grid_height));
  if (t_infix_15) {
  (s.pc = "2.e92s0");
  var t_infix_16 = (ok1(s, s.$cols) && (s.$cols + 1));
  var t_infix_17 = (ok2(s, s.$grid_width, t_infix_16) && (s.$grid_width / t_infix_16));
  var t_infix_18 = (ok1(s, t_infix_17) && (t_infix_17 - 0.001));
  (s.$alt1 = t_infix_18);
  (s.pc = "2.e92s3");
  var t_infix_19 = (ok2(s, s.$grid_height, s.$rows) && (s.$grid_height / s.$rows));
  var t_infix_20 = (ok1(s, t_infix_19) && (t_infix_19 - 0.001));
  (s.$alt2 = t_infix_20);
  (s.pc = "2.e92s6");
  var t_call_21 = (ok2(s, s.$alt1, s.$alt2) && lib.Math_.max(s.$alt1, s.$alt2, s));
  (s.$bsize = t_call_21);
  (s.pc = "2.e92s9");
  var t_infix_22 = (ok2(s, s.$grid_width, s.$bsize) && (s.$grid_width / s.$bsize));
  var t_call_23 = (ok1(s, t_infix_22) && lib.Math_.floor(t_infix_22, s));
  (s.$cols = t_call_23);
  (s.pc = "2.e92sc");
  var t_infix_24 = (ok2(s, s.$numboxes, s.$cols) && (s.$numboxes / s.$cols));
  var t_call_25 = (ok1(s, t_infix_24) && lib.Math_.ceiling(t_infix_24, s));
  (s.$rows = t_call_25);
  return a_levelselection$4;
  }
  (s.pc = "2.e92s");
  var t_call_26 = (ok1(s, s.$bsize) && lib.Math_.min(13, s.$bsize, s));
  (s.$bsize = t_call_26);
  (s.pc = "2.e92v");
  var t_infix_27 = (ok1(s, s.$bsize) && (0.03 * s.$bsize));
  (s.$mgn = t_infix_27);
  var t_elseIf_28 = true;
  (s.pc = "2.e92y");
  var t_call_29 = lib.Box.pixels_per_em(s);
  var t_infix_30 = (ok2(s, s.$mgn, t_call_29) && (s.$mgn * t_call_29));
  var t_infix_31 = (ok1(s, t_infix_30) && (t_infix_30 < 2));
  ok1(s, t_infix_31);
  if (t_infix_31) {
  (s.pc = "2.e92C0");
  var t_call_32 = lib.Box.pixels_per_em(s);
  var t_infix_33 = (ok1(s, t_call_32) && (2 / t_call_32));
  (s.$mgn = t_infix_33);
  } else {
  (s.pc = "2.e92D0");
  null;
  }
  (s.pc = "2.e92D");
  var t_infix_34 = (ok2(s, s.$bsize, s.$mgn) && (s.$bsize - s.$mgn));
  (s.$bsize = t_infix_34);
  (s.pc = "2.e92G");
  lib.Box.push_box(s);
  (s.pc = "2.e92I0");
  var t_infix_35 = (ok2(s, s.$rows, s.$bsize) && (s.$rows * s.$bsize));
  var t_infix_36 = (ok1(s, s.$rows) && (s.$rows - 1));
  var t_infix_37 = (ok2(s, t_infix_36, s.$mgn) && (t_infix_36 * s.$mgn));
  var t_infix_38 = (ok2(s, t_infix_35, t_infix_37) && (t_infix_35 + t_infix_37));
  (ok1(s, t_infix_38) && lib.Box.set_height(t_infix_38, s));
  (s.pc = "2.e92I3");
  lib.Box.use_vertical_layout(s);
  (s.pc = "2.e92I6");
  lib.Box.set_vertical_align("justify", s);
  (s.pc = "2.e92I9");
  s.t_bnd_39 = s.$rows;
  (s.$i = 0);
  return a_levelselection$7;
}
cs.registerStep(a_levelselection$4, 'a_levelselection$4');

function a_levelselection$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_levelselection$3, 'a_levelselection$3');

function a_levelselection$7(s) {
  if ((s.$i < s.t_bnd_39)) {
  (s.pc = "2.e92Id0");
  lib.Box.push_box(s);
  (s.pc = "2.e92Id20");
  var t_infix_40 = (ok2(s, s.$cols, s.$bsize) && (s.$cols * s.$bsize));
  var t_infix_41 = (ok1(s, s.$cols) && (s.$cols - 1));
  var t_infix_42 = (ok2(s, t_infix_41, s.$mgn) && (t_infix_41 * s.$mgn));
  var t_infix_43 = (ok2(s, t_infix_40, t_infix_42) && (t_infix_40 + t_infix_42));
  (ok1(s, t_infix_43) && lib.Box.set_width(t_infix_43, s));
  (s.pc = "2.e92Id23");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.e92Id26");
  lib.Box.set_horizontal_align("justify", s);
  (s.pc = "2.e92Id29");
  s.t_bnd_44 = s.$cols;
  (s.$j = 0);
  return a_levelselection$9;
  }
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_levelselection$3;
}
cs.registerStep(a_levelselection$7, 'a_levelselection$7');

function a_levelselection$9(s) {
  if ((s.$j < s.t_bnd_44)) {
  (s.pc = "2.e92Id2d0");
  var t_infix_45 = (ok2(s, s.$i, s.$cols) && (s.$i * s.$cols));
  var t_infix_46 = (ok2(s, t_infix_45, s.$j) && (t_infix_45 + s.$j));
  var t_infix_47 = (ok1(s, t_infix_46) && (t_infix_46 + 1));
  (s.$level_id = t_infix_47);
  (s.pc = "2.e92Id2d3");
  lib.Box.push_box(s);
  (s.pc = "2.e92Id2d50");
  (ok1(s, s.$bsize) && lib.Box.set_width(s.$bsize, s));
  (s.pc = "2.e92Id2d53");
  (ok1(s, s.$bsize) && lib.Box.set_height(s.$bsize, s));
  (s.pc = "2.e92Id2d56");
  lib.Box.use_overlay_layout(s);
  var t_elseIf_48 = true;
  (s.pc = "2.e92Id2d59");
  var t_infix_49 = (ok2(s, s.$level_id, /* _level count */ s.d.$levelcount) && (s.$level_id <= /* _level count */ s.d.$levelcount));
  ok1(s, t_infix_49);
  if (t_infix_49) {
  (s.pc = "2.e92Id2d5d0");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_levelselection$12, s.$level_id));
  } else {
  (s.pc = "2.e92Id2d5e0");
  null;
  }
  return a_levelselection$11;
  }
  lib.Box.pop_box(s);
  (s.$i++);
  return a_levelselection$7;
}
cs.registerStep(a_levelselection$9, 'a_levelselection$9');

function a_levelselection$12(s) {
  var t_actRes_50 = s.rt.returnedFrom.result;
  (s.$lvl = t_actRes_50);
  (s.pc = "2.e92Id2d5d3");
  return s.rt.enter(a_RiKp9WsgmJDFjpU5f9NbOSB6(s, a_levelselection$13, s.$lvl, s.$bsize, s.$bsize));
}
cs.registerStep(a_levelselection$12, 'a_levelselection$12');

function a_levelselection$11(s) {
  lib.Box.pop_box(s);
  (s.$j++);
  return a_levelselection$9;
}
cs.registerStep(a_levelselection$11, 'a_levelselection$11');

function a_levelselection$13(s) {
  return a_levelselection$11;
}
cs.registerStep(a_levelselection$13, 'a_levelselection$13');


//Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa
function Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa(p) {
  this.parent = p;
}
Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype = new lib.ObjectEntry();
Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.keys = [];
Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.values = [];
Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.fields = [];
//Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa
function Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype = new lib.ObjectSingleton();
Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.entryCtor = Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa;
cs.objectSingletons["show level selection page data"] = function(d) { return d.$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa };
Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.selfCtor = Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa;
Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.stableName = "BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa";
Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.entryKindName = "show level selection page data";

// jsonimport
Ent_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa");

//Ent_BbGV2ZWwgaW5kZXga
function Ent_BbGV2ZWwgaW5kZXga(p) {
  this.parent = p;
}
Ent_BbGV2ZWwgaW5kZXga.prototype = new lib.CloudIndexEntry();
Ent_BbGV2ZWwgaW5kZXga.prototype.keys = ["xneF5ygmtTQb4TogUvxfMDe1"];
Ent_BbGV2ZWwgaW5kZXga.prototype.values = ["xF2SoxL0oxSdoSCsMwe5wRzo", "e6cQUfw2298se1yYeqTlPcX8", "FcypXS06YlmK2KAQ327sEovl", "qhCetiH2Bj2wrY6fz4oObZF5", "KVEfbkQ37muzCX37bf2bTBbl", "qod2mWVTq0MtY6ZGt7IA6uUe"];
Ent_BbGV2ZWwgaW5kZXga.prototype.fields = ["xneF5ygmtTQb4TogUvxfMDe1", "xF2SoxL0oxSdoSCsMwe5wRzo", "e6cQUfw2298se1yYeqTlPcX8", "FcypXS06YlmK2KAQ327sEovl", "qhCetiH2Bj2wrY6fz4oObZF5", "KVEfbkQ37muzCX37bf2bTBbl", "qod2mWVTq0MtY6ZGt7IA6uUe"];
Ent_BbGV2ZWwgaW5kZXga.prototype["xneF5ygmtTQb4TogUvxfMDe1_realname"] = "_index";
Ent_BbGV2ZWwgaW5kZXga.prototype["xF2SoxL0oxSdoSCsMwe5wRzo_realname"] = "_score";
Ent_BbGV2ZWwgaW5kZXga.prototype["e6cQUfw2298se1yYeqTlPcX8_realname"] = "_completed";
Ent_BbGV2ZWwgaW5kZXga.prototype["FcypXS06YlmK2KAQ327sEovl_realname"] = "_description";
Ent_BbGV2ZWwgaW5kZXga.prototype["qhCetiH2Bj2wrY6fz4oObZF5_realname"] = "_unlocked";
Ent_BbGV2ZWwgaW5kZXga.prototype["KVEfbkQ37muzCX37bf2bTBbl_realname"] = "_skip details";
Ent_BbGV2ZWwgaW5kZXga.prototype["qod2mWVTq0MtY6ZGt7IA6uUe_realname"] = "_max score";
//Tbl_BbGV2ZWwgaW5kZXga
function Tbl_BbGV2ZWwgaW5kZXga(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BbGV2ZWwgaW5kZXga.prototype = new lib.CloudIndexSingleton();
Tbl_BbGV2ZWwgaW5kZXga.prototype.entryCtor = Ent_BbGV2ZWwgaW5kZXga;
cs.objectSingletons["level"] = function(d) { return d.$BbGV2ZWwgaW5kZXga };
Tbl_BbGV2ZWwgaW5kZXga.prototype.selfCtor = Tbl_BbGV2ZWwgaW5kZXga;
Tbl_BbGV2ZWwgaW5kZXga.prototype.stableName = "BbGV2ZWwgaW5kZXga";
Tbl_BbGV2ZWwgaW5kZXga.prototype.entryKindName = "level";
Tbl_BbGV2ZWwgaW5kZXga.prototype.cloudtype = "BbGV2ZWwgaW5kZXga\u005bdouble\u005d";
Tbl_BbGV2ZWwgaW5kZXga.prototype.key_cloudtypes = ["double"];
Tbl_BbGV2ZWwgaW5kZXga.prototype.value_cloudtypes = ["xF2SoxL0oxSdoSCsMwe5wRzo\u002cdouble\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d", "e6cQUfw2298se1yYeqTlPcX8\u002cboolean\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d", "FcypXS06YlmK2KAQ327sEovl\u002cstring\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d", "qhCetiH2Bj2wrY6fz4oObZF5\u002cboolean\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d", "KVEfbkQ37muzCX37bf2bTBbl\u002cboolean\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d", "qod2mWVTq0MtY6ZGt7IA6uUe\u002cdouble\u005bBbGV2ZWwgaW5kZXga\u005bdouble\u005d\u005d"];
Tbl_BbGV2ZWwgaW5kZXga.prototype.localsession = true;

// jsonimport
Tbl_BbGV2ZWwgaW5kZXga.prototype.importJsonKeys = function (ctx, json) {
  var s = ctx.s;
  var a = [];
  a.push(ctx.importNumber(json, "_index"));
  return a;
}
Ent_BbGV2ZWwgaW5kZXga.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("xF2SoxL0oxSdoSCsMwe5wRzo", ctx.importNumber(json, "_score"), s);
  this.perform_set("e6cQUfw2298se1yYeqTlPcX8", ctx.importBoolean(json, "_completed"), s);
  this.perform_set("FcypXS06YlmK2KAQ327sEovl", ctx.importString(json, "_description"), s);
  this.perform_set("qhCetiH2Bj2wrY6fz4oObZF5", ctx.importBoolean(json, "_unlocked"), s);
  this.perform_set("KVEfbkQ37muzCX37bf2bTBbl", ctx.importBoolean(json, "_skip details"), s);
  this.perform_set("qod2mWVTq0MtY6ZGt7IA6uUe", ctx.importNumber(json, "_max score"), s);
}
cs.registerGlobal("$BbGV2ZWwgaW5kZXga");
/* ACTION: apply page theme */
function a_stylepage(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_stylepage$0;
  s.name = "apply page theme";
  return s;
}
cs.registerAction("apply page theme", "stylepage", a_stylepage, false);

function a_stylepage$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.q0");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_1 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_background")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && t_recOp_1.A(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.q40");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_4 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_background")];
  }
  (ok1(s, t_recOp_4) && lib.Wall.set_background(t_recOp_4, s));
  } else {
  (s.pc = "2.q50");
  null;
  }
  var t_elseIf_5 = true;
  (s.pc = "2.q5");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_6 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_foreground")];
  }
  var t_call_7 = (ok1(s, t_recOp_6) && t_recOp_6.A(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 > 0));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "2.q90");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_9 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_foreground")];
  }
  (ok1(s, t_recOp_9) && lib.Wall.set_foreground(t_recOp_9, s));
  } else {
  (s.pc = "2.qa0");
  null;
  }
  var t_elseIf_10 = true;
  (s.pc = "2.qa");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_11 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_background picture")];
  }
  var t_call_12 = lib.Boolean_.not((t_recOp_11 == undefined), s);
  ok1(s, t_call_12);
  if (t_call_12) {
  (s.pc = "2.qe0");
  if (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N) {
  var t_recOp_13 = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N[("$_background picture")];
  }
  var t_resumeCtx_14 = s.rt.getBlockingResumeCtx(a_stylepage$10);
  (ok1(s, t_recOp_13) && lib.Wall.set_background_picture(t_recOp_13, t_resumeCtx_14));
  return a_stylepage$10;
  } else {
  (s.pc = "2.qf0");
  null;
  }
  return a_stylepage$8;
}
cs.registerStep(a_stylepage$0, 'a_stylepage$0');

function a_stylepage$10(s) {
  return a_stylepage$8;
}
cs.registerStep(a_stylepage$10, 'a_stylepage$10');

function a_stylepage$8(s) {
  return s.rt.leave();
}
cs.registerStep(a_stylepage$8, 'a_stylepage$8');

/* ACTION: on game end */
function a_ongameend(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ongameend$0;
  s.name = "on game end";
  s.$level = $level;
  s.$total = undefined;
  s.$next_level = undefined;
  return s;
}
cs.registerAction("on game end", "ongameend", a_ongameend, true);

function a_ongameend$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.v0");
  var t_libcall_1 = s.libs["game"]["score"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_ongameend$1));
}
cs.registerStep(a_ongameend$0, 'a_ongameend$0');

function a_ongameend$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_infix_3 = (ok1(s, t_actRes_2) && (t_actRes_2 > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.v40");
  var t_libcall_4 = s.libs["game"]["score"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_ongameend$3));
  } else {
  (s.pc = "2.v50");
  null;
  }
  return a_ongameend$2;
}
cs.registerStep(a_ongameend$1, 'a_ongameend$1');

function a_ongameend$3(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  if (s.$level) {
  var t_recOp_6 = s.$level.perform_get("xF2SoxL0oxSdoSCsMwe5wRzo", s);
  }
  var t_call_7 = (ok2(s, t_actRes_5, t_recOp_6) && lib.Math_.max(t_actRes_5, t_recOp_6, s));
  if (s.$level) {
  s.$level.perform_set("xF2SoxL0oxSdoSCsMwe5wRzo", t_call_7, s);
  }
  var t_elseIf_8 = true;
  (s.pc = "2.v43");
  if (s.$level) {
  var t_recOp_9 = s.$level.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_infix_10 = (ok1(s, t_recOp_9) && (t_recOp_9 > 0));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "2.v470");
  if (s.$level) {
  var t_recOp_11 = s.$level.perform_get("xF2SoxL0oxSdoSCsMwe5wRzo", s);
  }
  if (s.$level) {
  var t_recOp_12 = s.$level.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_call_13 = (ok2(s, t_recOp_11, t_recOp_12) && lib.Math_.min(t_recOp_11, t_recOp_12, s));
  if (s.$level) {
  s.$level.perform_set("xF2SoxL0oxSdoSCsMwe5wRzo", t_call_13, s);
  }
  } else {
  (s.pc = "2.v480");
  null;
  }
  return a_ongameend$2;
}
cs.registerStep(a_ongameend$3, 'a_ongameend$3');

function a_ongameend$2(s) {
  (s.pc = "2.v5");
  if (s.$level) {
  s.$level.perform_set("e6cQUfw2298se1yYeqTlPcX8", true, s);
  }
  (s.pc = "2.v9");
  return s.rt.enter(a_vhNGQ52iSlYqwQHeL8LQGR8e(s, a_ongameend$12));
}
cs.registerStep(a_ongameend$2, 'a_ongameend$2');

function a_ongameend$12(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  (s.$total = t_actRes_14);
  (s.pc = "2.vc");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_15 = s.rt.getAwaitResumeCtx(a_ongameend$13);
  (ok1(s, s.$total) && lib.Bazaar.post_leaderboard_score(s.$total, t_resumeCtx_15));
  return a_ongameend$13;
}
cs.registerStep(a_ongameend$12, 'a_ongameend$12');

function a_ongameend$13(s) {
  var t_elseIf_16 = true;
  (s.pc = "2.vg");
  var t_infix_17 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  var t_infix_18 = (ok2(s, t_infix_17, /* _level count */ s.d.$levelcount) && (t_infix_17 <= /* _level count */ s.d.$levelcount));
  ok1(s, t_infix_18);
  if (t_infix_18) {
  (s.pc = "2.vk0");
  var t_infix_19 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_ongameend$15, t_infix_19));
  } else {
  (s.pc = "2.vl0");
  null;
  }
  return a_ongameend$14;
}
cs.registerStep(a_ongameend$13, 'a_ongameend$13');

function a_ongameend$15(s) {
  var t_actRes_20 = s.rt.returnedFrom.result;
  (s.$next_level = t_actRes_20);
  (s.pc = "2.vk3");
  if (s.$next_level) {
  s.$next_level.perform_set("qhCetiH2Bj2wrY6fz4oObZF5", true, s);
  }
  return a_ongameend$14;
}
cs.registerStep(a_ongameend$15, 'a_ongameend$15');

function a_ongameend$14(s) {
  (s.pc = "2.vm");
  var t_call_21 = lib.Wall.pop_page(s);
  t_call_21;
  return s.rt.leave();
}
cs.registerStep(a_ongameend$14, 'a_ongameend$14');

/* ACTION: initialize */
function a_initialize(previous, returnAddr, $title, $subtitle, $level_count, $start_level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_initialize$0;
  s.name = "initialize";
  s.$title = $title;
  s.$subtitle = $subtitle;
  s.$level_count = $level_count;
  s.$start_level = $start_level;
  s.$i = undefined;
  return s;
}
cs.registerAction("initialize", "initialize", a_initialize, false);

function a_initialize$0(s) {
  (s.pc = "2.F1");
  var t_infix_0 = (ok1(s, s.$level_count) && (s.$level_count > 0));
  (ok1(s, t_infix_0) && lib.Contract.requires(t_infix_0, "game must have at least one level", s));
  (s.pc = "2.F4");
  return s.rt.enter(a_TuvYc3CSeDzlxw7k4r66Yrcb(s, a_initialize$1));
}
cs.registerStep(a_initialize$0, 'a_initialize$0');

function a_initialize$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (/* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N = t_actRes_1);
  s.rt.logDataWrite();
  (s.pc = "2.F7");
  return s.rt.enter(a_TuvYc3CSeDzlxw7k4r66Yrcb(s, a_initialize$2));
}
cs.registerStep(a_initialize$1, 'a_initialize$1');

function a_initialize$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (/* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V = t_actRes_2);
  s.rt.logDataWrite();
  (s.pc = "2.Fa");
  var t_call_3 = lib.Colors.blue(s);
  if (/* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V) {
  /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V.perform_set("$_background", t_call_3, s);
  }
  (s.pc = "2.Fd");
  var t_call_4 = lib.Colors.white(s);
  if (/* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V) {
  /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V.perform_set("$_foreground", t_call_4, s);
  }
  (s.pc = "2.Fg");
  var t_call_5 = (ok1(s, s.$level_count) && lib.Math_.ceiling(s.$level_count, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Math_.max(1, t_call_5, s));
  (/* _level count */ s.d.$levelcount = t_call_6);
  s.rt.logDataWrite();
  (s.pc = "2.Fj");
  (/* _title */ s.d.$Puz9SxF3xc92nwYRLTnhhcli = s.$title);
  s.rt.logDataWrite();
  (s.pc = "2.Fm");
  (/* _subtitle */ s.d.$I51gPgcwfFqs55JGIhivi2xz = s.$subtitle);
  s.rt.logDataWrite();
  (s.pc = "2.Fp");
  (/* _start level action */ s.d.$lJMupn7S4c2MRWeFYgzYI3sM = s.$start_level);
  s.rt.logDataWrite();
  (s.pc = "2.Fs");
  (/* _level selection */ s.d.$xNNKA4FtL05eZdMpVoUDEmtz = true);
  s.rt.logDataWrite();
  (s.pc = "2.Fv");
  var t_call_7 = lib.Collections.create_picture_collection(s);
  s.rt.markAllocated(t_call_7);
  (/* _instructions pictures */ s.d.$xk722ZAynl20UPay21owpZOR = t_call_7);
  s.rt.logDataWrite();
  (s.pc = "2.Fz");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_initialize$5, 1));
}
cs.registerStep(a_initialize$2, 'a_initialize$2');

function a_initialize$5(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  if (t_actRes_8) {
  t_actRes_8.perform_set("qhCetiH2Bj2wrY6fz4oObZF5", true, s);
  }
  (s.pc = "2.FC");
  s.t_bnd_9 = /* _level count */ s.d.$levelcount;
  (s.$i = 0);
  return a_initialize$7;
}
cs.registerStep(a_initialize$5, 'a_initialize$5');

function a_initialize$7(s) {
  if ((s.$i < s.t_bnd_9)) {
  (s.pc = "2.FG0");
  return s.rt.enter(a_TuvYc3CSeDzlxw7k4r66Yrcb(s, a_initialize$9));
  }
  return s.rt.leave();
}
cs.registerStep(a_initialize$7, 'a_initialize$7');

function a_initialize$9(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  var t_infix_11 = (ok1(s, s.$i) && (s.$i + 1));
  var t_call_12 = (ok2(s, /* level theme index */ s.d.$BdGhpbmca, t_infix_11) && /* level theme index */ s.d.$BdGhpbmca.at(t_infix_11, s));
  if (t_call_12) {
  t_call_12.perform_set("T7dTa1GYk6ojgTI0G2RprFyk", t_actRes_10, s);
  }
  (s.$i++);
  return a_initialize$7;
}
cs.registerStep(a_initialize$9, 'a_initialize$9');

/* ACTION: start game */
function a_startgame(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_startgame$0;
  s.name = "start game";
  s.$level = $level;
  s.$action = undefined;
  return s;
}
cs.registerAction("start game", "startgame", a_startgame, true);

function a_startgame$0(s) {
  (s.pc = "2.K0");
  var t_call_0 = lib.Wall.push_new_page(s);
  t_call_0;
  (s.pc = "2.K3");
  return s.rt.enter(a_stylepage(s, a_startgame$1));
}
cs.registerStep(a_startgame$0, 'a_startgame$0');

function a_startgame$1(s) {
  (s.pc = "2.K6");
  var t_libcall_1 = s.libs["game"]["reset"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_startgame$2));
}
cs.registerStep(a_startgame$1, 'a_startgame$1');

function a_startgame$2(s) {
  (s.pc = "2.Kd0");
  var t_lmbv_2 = s.$level;
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$action = function(la0, la1) { return a_a_startgame$3(t_lmbProxy_3(la0), la1, t_lmbv_2) });
  (s.pc = "2.K9");
  var t_libcall_4 = s.libs["game"]["on end"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_startgame$4, s.$action));
}
cs.registerStep(a_startgame$2, 'a_startgame$2');

function a_startgame$4(s) {
  (s.pc = "2.Kd");
  return s.rt.enter((ok1(s, /* _start level action */ s.d.$lJMupn7S4c2MRWeFYgzYI3sM) && /* _start level action */ s.d.$lJMupn7S4c2MRWeFYgzYI3sM(s, a_startgame$5, s.$level)));
}
cs.registerStep(a_startgame$4, 'a_startgame$4');

function a_startgame$5(s) {
  return s.rt.leave();
}
cs.registerStep(a_startgame$5, 'a_startgame$5');

/* ACTION: a_startgame::lambda::3 */
function a_a_startgame$3(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_startgame$3$0;
  s.name = "start game";
  s.$level = $level;
  return s;
}
cs.registerLambda("a_startgame\u003a\u003alambda\u003a\u003a3", "a_startgame$3", a_a_startgame$3, true);

function a_a_startgame$3$0(s) {
  (s.pc = "2.Kd20");
  return s.rt.enter(a_ongameend(s, a_a_startgame$3$1, s.$level));
}
cs.registerStep(a_a_startgame$3$0, 'a_a_startgame$3$0');

function a_a_startgame$3$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_startgame$3$1, 'a_a_startgame$3$1');

/* ACTION: show level details */
function a_leveldetails(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_leveldetails$0;
  s.name = "show level details";
  s.$_ = undefined;
  s.$level = $level;
  s.$sc = undefined;
  s.$handler = undefined;
  s.$next = undefined;
  s.$handler1 = undefined;
  return s;
}
cs.registerPage("show level details", "leveldetails", a_leveldetails, false);

function a_leveldetails$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.P0");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.P40");
  return s.rt.enter(a_stylepage(s, a_leveldetails$2));
  } else {
  (s.pc = "2.P50");
  null;
  }
  return a_leveldetails$1;
}
cs.registerStep(a_leveldetails$0, 'a_leveldetails$0');

function a_leveldetails$2(s) {
  return a_leveldetails$1;
}
cs.registerStep(a_leveldetails$2, 'a_leveldetails$2');

function a_leveldetails$1(s) {
  var t_elseIf_2 = true;
  (s.pc = "2.P5");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.P90");
  lib.Box.push_box(s);
  (s.pc = "2.P920");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.P923");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "2.P926");
  lib.Box.set_vertical_stretch(1, s);
  (s.pc = "2.P929");
  lib.Box.set_horizontal_stretch(1, s);
  (s.pc = "2.P92c");
  lib.Box.push_box(s);
  (s.pc = "2.P92e0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.P92e3");
  lib.Box.push_box(s);
  (s.pc = "2.P92e50");
  lib.String_.post_to_wall("level", s);
  lib.Box.pop_box(s);
  (s.pc = "2.P92e5");
  lib.Box.push_box(s);
  (s.pc = "2.P92e70");
  lib.Box.set_font_size(8, s);
  (s.pc = "2.P92e73");
  (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && lib.Number_.post_to_wall((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]), s));
  lib.Box.pop_box(s);
  var t_elseIf_3 = true;
  (s.pc = "2.P92e7");
  if (s.$level) {
  var t_recOp_4 = s.$level.perform_get("FcypXS06YlmK2KAQ327sEovl", s);
  }
  var t_call_5 = (ok1(s, t_recOp_4) && lib.String_.is_empty(t_recOp_4, s));
  var t_call_6 = (ok1(s, t_call_5) && lib.Boolean_.not(t_call_5, s));
  ok1(s, t_call_6);
  if (t_call_6) {
  (s.pc = "2.P92eb0");
  lib.Box.push_box(s);
  (s.pc = "2.P92eb20");
  lib.Box.set_width(21, s);
  (s.pc = "2.P92eb23");
  lib.Box.set_font_size(0.8, s);
  (s.pc = "2.P92eb26");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "2.P92eb29");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.P92eb2c");
  if (s.$level) {
  var t_recOp_7 = s.$level.perform_get("FcypXS06YlmK2KAQ327sEovl", s);
  }
  (ok1(s, t_recOp_7) && lib.String_.post_to_wall(t_recOp_7, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.P92ec0");
  null;
  }
  (s.pc = "2.P92ec");
  return s.rt.enter(a_g5G6V1r466rXedV0GC2DdMLq(s, a_leveldetails$7, s.$level));
  } else {
  (s.pc = "2.Pa0");
  null;
  }
  return a_leveldetails$3;
}
cs.registerStep(a_leveldetails$1, 'a_leveldetails$1');

function a_leveldetails$7(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  (s.$sc = t_actRes_8);
  var t_elseIf_9 = true;
  (s.pc = "2.P92ef");
  var t_infix_10 = (ok1(s, s.$sc) && (s.$sc > 0));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "2.P92ej0");
  lib.Box.push_box(s);
  (s.pc = "2.P92ej20");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92ej23");
  var t_concat_11 = lib.String_.concatAny("score\u003a ", s.$sc);
  (ok1(s, t_concat_11) && lib.String_.post_to_wall(t_concat_11, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.P92ek0");
  null;
  }
  var t_elseIf_12 = true;
  (s.pc = "2.P92ek");
  if (s.$level) {
  var t_recOp_13 = s.$level.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_infix_14 = (ok1(s, t_recOp_13) && (t_recOp_13 > 0));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.pc = "2.P92eo0");
  lib.Box.push_box(s);
  (s.pc = "2.P92eo20");
  lib.Box.set_margins(0.5, 0, 0, 0, s);
  (s.pc = "2.P92eo23");
  return s.rt.enter(a_syCJwBkyr1jcu3Z9uQnocktT(s, a_leveldetails$11, s.$level, 21, 3));
  } else {
  (s.pc = "2.P92ep0");
  null;
  }
  return a_leveldetails$10;
}
cs.registerStep(a_leveldetails$7, 'a_leveldetails$7');

function a_leveldetails$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_leveldetails$3, 'a_leveldetails$3');

function a_leveldetails$11(s) {
  lib.Box.pop_box(s);
  return a_leveldetails$10;
}
cs.registerStep(a_leveldetails$11, 'a_leveldetails$11');

function a_leveldetails$10(s) {
  (s.pc = "2.P92ep");
  lib.Box.push_box(s);
  (s.pc = "2.P92er0");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.P92er3");
  lib.Box.push_box(s);
  (s.pc = "2.P92er50");
  lib.Box.set_margins(1.5, 1, 1, 1, s);
  (s.pc = "2.P92er53");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.P92er56");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.P92er59");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "2.P92er5c");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_leveldetails$12, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
}
cs.registerStep(a_leveldetails$10, 'a_leveldetails$10');

function a_leveldetails$12(s) {
  (s.pc = "2.P92er5f");
  var t_call_15 = lib.Colors.white(s);
  (ok1(s, t_call_15) && lib.Box.set_foreground(t_call_15, s));
  (s.pc = "2.P92er5i");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92er5l");
  lib.Box.set_height(4, s);
  (s.pc = "2.P92er5s0");
  var t_lmbv_16 = s.$level;
  var t_lmbProxy_17 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_leveldetails$13(t_lmbProxy_17(la0), la1, t_lmbv_16) });
  (s.pc = "2.P92er5o");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.P92er5s");
  lib.Box.push_box(s);
  (s.pc = "2.P92er5u0");
  lib.String_.post_to_wall("play", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  var t_elseIf_18 = true;
  (s.pc = "2.P92er5");
  var t_infix_19 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  var t_infix_20 = (ok2(s, t_infix_19, /* _level count */ s.d.$levelcount) && (t_infix_19 <= /* _level count */ s.d.$levelcount));
  s.t_lazy_21 = t_infix_20;
  if ((ok1(s, s.t_lazy_21) && s.t_lazy_21)) {
  return s.rt.enter(a_v1ibFfse8BhlXhYDaC3Wh2fN(s, a_leveldetails$15, s.$level));
  }
  return a_leveldetails$14;
}
cs.registerStep(a_leveldetails$12, 'a_leveldetails$12');

function a_leveldetails$15(s) {
  var t_actRes_22 = s.rt.returnedFrom.result;
  if (t_actRes_22) {
  var t_recOp_23 = t_actRes_22.perform_get("qhCetiH2Bj2wrY6fz4oObZF5", s);
  }
  (s.t_lazy_21 = t_recOp_23);
  return a_leveldetails$14;
}
cs.registerStep(a_leveldetails$15, 'a_leveldetails$15');

function a_leveldetails$14(s) {
  ok1(s, s.t_lazy_21);
  if (s.t_lazy_21) {
  (s.pc = "2.P92er90");
  return s.rt.enter(a_v1ibFfse8BhlXhYDaC3Wh2fN(s, a_leveldetails$18, s.$level));
  } else {
  (s.pc = "2.P92era0");
  null;
  }
  return a_leveldetails$17;
}
cs.registerStep(a_leveldetails$14, 'a_leveldetails$14');

function a_leveldetails$18(s) {
  var t_actRes_24 = s.rt.returnedFrom.result;
  (s.$next = t_actRes_24);
  (s.pc = "2.P92er93");
  lib.Box.push_box(s);
  (s.pc = "2.P92er950");
  lib.Box.set_margins(1.5, 1, 1, 1, s);
  (s.pc = "2.P92er953");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.P92er956");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.P92er959");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "2.P92er95c");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_leveldetails$19, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
}
cs.registerStep(a_leveldetails$18, 'a_leveldetails$18');

function a_leveldetails$17(s) {
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_leveldetails$3;
}
cs.registerStep(a_leveldetails$17, 'a_leveldetails$17');

function a_leveldetails$19(s) {
  (s.pc = "2.P92er95f");
  var t_call_25 = lib.Colors.white(s);
  (ok1(s, t_call_25) && lib.Box.set_foreground(t_call_25, s));
  (s.pc = "2.P92er95i");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92er95l");
  lib.Box.set_height(4, s);
  (s.pc = "2.P92er95s0");
  var t_lmbv_26 = s.$next;
  var t_lmbProxy_27 = s.libs.mkLambdaProxy;
  (s.$handler1 = function(la0, la1) { return a_a_leveldetails$20(t_lmbProxy_27(la0), la1, t_lmbv_26) });
  (s.pc = "2.P92er95o");
  (ok1(s, s.$handler1) && lib.Box.on_tapped(s.$handler1, s));
  (s.pc = "2.P92er95s");
  lib.Box.push_box(s);
  (s.pc = "2.P92er95u0");
  lib.String_.post_to_wall("next level", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_leveldetails$17;
}
cs.registerStep(a_leveldetails$19, 'a_leveldetails$19');

/* ACTION: a_leveldetails::lambda::13 */
function a_a_leveldetails$13(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_leveldetails$13$0;
  s.name = "show level details";
  s.$level = $level;
  return s;
}
cs.registerLambda("a_leveldetails\u003a\u003alambda\u003a\u003a13", "a_leveldetails$13", a_a_leveldetails$13, true);

function a_a_leveldetails$13$0(s) {
  (s.pc = "2.P92er5s20");
  return s.rt.enter(a_startgame(s, a_a_leveldetails$13$1, s.$level));
}
cs.registerStep(a_a_leveldetails$13$0, 'a_a_leveldetails$13$0');

function a_a_leveldetails$13$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_leveldetails$13$1, 'a_a_leveldetails$13$1');

/* ACTION: a_leveldetails::lambda::20 */
function a_a_leveldetails$20(previous, returnAddr, $next) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_leveldetails$20$0;
  s.name = "show level details";
  s.$next = $next;
  return s;
}
cs.registerLambda("a_leveldetails\u003a\u003alambda\u003a\u003a20", "a_leveldetails$20", a_a_leveldetails$20, true);

function a_a_leveldetails$20$0(s) {
  (s.pc = "2.P92er95s21");
  var t_call_0 = lib.Wall.pop_page(s);
  t_call_0;
  (s.pc = "2.P92er95s25");
  return s.rt.enter(a_hkrBuHpdV719LOBB6mZewhJD(s, a_a_leveldetails$20$1, s.$next));
}
cs.registerStep(a_a_leveldetails$20$0, 'a_a_leveldetails$20$0');

function a_a_leveldetails$20$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_a_leveldetails$20$1, 'a_a_leveldetails$20$1');


//Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa
function Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa(p) {
  this.parent = p;
}
Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype = new lib.ObjectEntry();
Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.keys = [];
Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.values = [];
Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.fields = [];
//Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa
function Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype = new lib.ObjectSingleton();
Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.entryCtor = Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa;
cs.objectSingletons["show level details page data"] = function(d) { return d.$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa };
Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.selfCtor = Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa;
Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.stableName = "BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa";
Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.entryKindName = "show level details page data";

// jsonimport
Ent_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa");
/* ACTION: show leaderboard button */
function a_XNqQQCzJZlGV2I6w0FE2aVvf(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XNqQQCzJZlGV2I6w0FE2aVvf$0;
  s.name = "show leaderboard button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show leaderboard button", "XNqQQCzJZlGV2I6w0FE2aVvf", a_XNqQQCzJZlGV2I6w0FE2aVvf, false);

function a_XNqQQCzJZlGV2I6w0FE2aVvf$0(s) {
  (s.pc = "2.65.0");
  lib.Box.push_box(s);
  (s.pc = "2.65.20");
  lib.Box.set_margins(0, 1, 1, 1, s);
  (s.pc = "2.65.23");
  lib.Box.set_width(10, s);
  (s.pc = "2.65.26");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.65.29");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_XNqQQCzJZlGV2I6w0FE2aVvf$1, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
}
cs.registerStep(a_XNqQQCzJZlGV2I6w0FE2aVvf$0, 'a_XNqQQCzJZlGV2I6w0FE2aVvf$0');

function a_XNqQQCzJZlGV2I6w0FE2aVvf$1(s) {
  (s.pc = "2.65.2c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.65.2j0");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2(t_lmbProxy_0(la0), la1) });
  (s.pc = "2.65.2f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.65.2j");
  lib.Box.push_box(s);
  (s.pc = "2.65.2l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.65.2l3");
  lib.Box.set_font_size(1, s);
  (s.pc = "2.65.2l6");
  var t_call_1 = lib.Colors.white(s);
  (ok1(s, t_call_1) && lib.Box.set_foreground(t_call_1, s));
  (s.pc = "2.65.2l9");
  lib.String_.post_to_wall("leaderboards", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_XNqQQCzJZlGV2I6w0FE2aVvf$1, 'a_XNqQQCzJZlGV2I6w0FE2aVvf$1');

/* ACTION: a_XNqQQCzJZlGV2I6w0FE2aVvf::lambda::2 */
function a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$0;
  s.name = "show leaderboard button";
  return s;
}
cs.registerLambda("a_XNqQQCzJZlGV2I6w0FE2aVvf\u003a\u003alambda\u003a\u003a2", "a_XNqQQCzJZlGV2I6w0FE2aVvf$2", a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2, true);

function a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$0(s) {
  (s.pc = "2.65.2j20");
  var t_call_0 = lib.Wall.push_new_page(s);
  t_call_0;
  (s.pc = "2.65.2j23");
  return s.rt.enter(a_stylepage(s, a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$1));
}
cs.registerStep(a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$0, 'a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$0');

function a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$1(s) {
  (s.pc = "2.65.2j26");
  lib.Wall.set_title("leaderboards", s);
  (s.pc = "2.65.2j29");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_1);
  return a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2;
}
cs.registerStep(a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$1, 'a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$1');

function a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2, 'a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2');

/* ACTION: show start button */
function a_mqb129Wh4dEV1uyHJF1oS5IJ(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_mqb129Wh4dEV1uyHJF1oS5IJ$0;
  s.name = "show start button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show start button", "mqb129Wh4dEV1uyHJF1oS5IJ", a_mqb129Wh4dEV1uyHJF1oS5IJ, false);

function a_mqb129Wh4dEV1uyHJF1oS5IJ$0(s) {
  (s.pc = "2.70.0");
  lib.Box.push_box(s);
  (s.pc = "2.70.20");
  lib.Box.set_margins(2.5, 1, 1.5, 1, s);
  (s.pc = "2.70.23");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.70.26");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_mqb129Wh4dEV1uyHJF1oS5IJ$1, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
}
cs.registerStep(a_mqb129Wh4dEV1uyHJF1oS5IJ$0, 'a_mqb129Wh4dEV1uyHJF1oS5IJ$0');

function a_mqb129Wh4dEV1uyHJF1oS5IJ$1(s) {
  (s.pc = "2.70.29");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.70.2g0");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2(t_lmbProxy_0(la0), la1) });
  (s.pc = "2.70.2c");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.70.2g");
  lib.Box.push_box(s);
  (s.pc = "2.70.2i0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.70.2i3");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.70.2i6");
  var t_call_1 = lib.Colors.white(s);
  (ok1(s, t_call_1) && lib.Box.set_foreground(t_call_1, s));
  (s.pc = "2.70.2i9");
  lib.String_.post_to_wall("start", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_mqb129Wh4dEV1uyHJF1oS5IJ$1, 'a_mqb129Wh4dEV1uyHJF1oS5IJ$1');

/* ACTION: a_mqb129Wh4dEV1uyHJF1oS5IJ::lambda::2 */
function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$0;
  s.name = "show start button";
  return s;
}
cs.registerLambda("a_mqb129Wh4dEV1uyHJF1oS5IJ\u003a\u003alambda\u003a\u003a2", "a_mqb129Wh4dEV1uyHJF1oS5IJ$2", a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2, true);

function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.70.2g20");
  ok1(s, /* _level selection */ s.d.$xNNKA4FtL05eZdMpVoUDEmtz);
  if (/* _level selection */ s.d.$xNNKA4FtL05eZdMpVoUDEmtz) {
  (s.pc = "2.70.2g240");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show level selection");
  } else {
  (s.pc = "2.70.2g250");
  return s.rt.enter(a_XT6yz9vjh6Ci02AGh2Y9e9pe(s, a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2));
  }
  return a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1;
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$0, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$0');

function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  return s.rt.enter(a_hkrBuHpdV719LOBB6mZewhJD(s, a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$3, t_actRes_1));
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2');

function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1');

function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$3(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1;
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$3, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$3');

/* ACTION: show titles */
function a_QHP9ho2IGjrPxqq9F80pZmqj(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_QHP9ho2IGjrPxqq9F80pZmqj$0;
  s.name = "show titles";
  return s;
}
cs.registerAction("show titles", "QHP9ho2IGjrPxqq9F80pZmqj", a_QHP9ho2IGjrPxqq9F80pZmqj, false);

function a_QHP9ho2IGjrPxqq9F80pZmqj$0(s) {
  (s.pc = "2.75.0");
  lib.Box.push_box(s);
  (s.pc = "2.75.20");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.75.23");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "2.75.26");
  lib.Box.set_font_size(4, s);
  (s.pc = "2.75.29");
  (ok1(s, /* _title */ s.d.$Puz9SxF3xc92nwYRLTnhhcli) && lib.String_.post_to_wall(/* _title */ s.d.$Puz9SxF3xc92nwYRLTnhhcli, s));
  lib.Box.pop_box(s);
  var t_elseIf_0 = true;
  (s.pc = "2.75.2");
  var t_call_1 = (ok1(s, /* _subtitle */ s.d.$I51gPgcwfFqs55JGIhivi2xz) && lib.String_.is_empty(/* _subtitle */ s.d.$I51gPgcwfFqs55JGIhivi2xz, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "2.75.60");
  lib.Box.push_box(s);
  (s.pc = "2.75.620");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.75.623");
  lib.Box.set_text_wrapping(true, 15, s);
  (s.pc = "2.75.626");
  lib.Box.set_font_size(1, s);
  (s.pc = "2.75.629");
  (ok1(s, /* _subtitle */ s.d.$I51gPgcwfFqs55JGIhivi2xz) && lib.String_.post_to_wall(/* _subtitle */ s.d.$I51gPgcwfFqs55JGIhivi2xz, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.75.70");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_QHP9ho2IGjrPxqq9F80pZmqj$0, 'a_QHP9ho2IGjrPxqq9F80pZmqj$0');

/* ACTION: show credits button */
function a_VBoM3w1YjF9BzIB6ry8gv2PO(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_VBoM3w1YjF9BzIB6ry8gv2PO$0;
  s.name = "show credits button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show credits button", "VBoM3w1YjF9BzIB6ry8gv2PO", a_VBoM3w1YjF9BzIB6ry8gv2PO, false);

function a_VBoM3w1YjF9BzIB6ry8gv2PO$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.80.0");
  var t_call_1 = (ok1(s, /* _credits */ s.d.$qTILdrMWpOE7W6v8fyiOqO8E) && lib.String_.is_empty(/* _credits */ s.d.$qTILdrMWpOE7W6v8fyiOqO8E, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "2.80.40");
  lib.Box.push_box(s);
  (s.pc = "2.80.420");
  lib.Box.set_margins(1, 1, 1, 1, s);
  (s.pc = "2.80.423");
  lib.Box.set_width(10, s);
  (s.pc = "2.80.426");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.80.429");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_VBoM3w1YjF9BzIB6ry8gv2PO$2, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
  } else {
  (s.pc = "2.80.50");
  null;
  }
  return a_VBoM3w1YjF9BzIB6ry8gv2PO$1;
}
cs.registerStep(a_VBoM3w1YjF9BzIB6ry8gv2PO$0, 'a_VBoM3w1YjF9BzIB6ry8gv2PO$0');

function a_VBoM3w1YjF9BzIB6ry8gv2PO$2(s) {
  (s.pc = "2.80.42c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.80.42j0");
  var t_lmbProxy_3 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3(t_lmbProxy_3(la0), la1) });
  (s.pc = "2.80.42f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.80.42j");
  lib.Box.push_box(s);
  (s.pc = "2.80.42l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.80.42l3");
  lib.Box.set_font_size(0.7, s);
  (s.pc = "2.80.42l6");
  var t_call_4 = lib.Colors.white(s);
  (ok1(s, t_call_4) && lib.Box.set_foreground(t_call_4, s));
  (s.pc = "2.80.42l9");
  lib.String_.post_to_wall("credits", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_VBoM3w1YjF9BzIB6ry8gv2PO$1;
}
cs.registerStep(a_VBoM3w1YjF9BzIB6ry8gv2PO$2, 'a_VBoM3w1YjF9BzIB6ry8gv2PO$2');

function a_VBoM3w1YjF9BzIB6ry8gv2PO$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_VBoM3w1YjF9BzIB6ry8gv2PO$1, 'a_VBoM3w1YjF9BzIB6ry8gv2PO$1');

/* ACTION: a_VBoM3w1YjF9BzIB6ry8gv2PO::lambda::3 */
function a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3$0;
  s.name = "show credits button";
  return s;
}
cs.registerLambda("a_VBoM3w1YjF9BzIB6ry8gv2PO\u003a\u003alambda\u003a\u003a3", "a_VBoM3w1YjF9BzIB6ry8gv2PO$3", a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3, true);

function a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3$0(s) {
  (s.pc = "2.80.42j20");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show credits");
  return s.rt.leave();
}
cs.registerStep(a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3$0, 'a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3$0');

/* ACTION: show credits */
function a_iajDu749O2HH5AG4pth9fr7D(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_iajDu749O2HH5AG4pth9fr7D$0;
  s.name = "show credits";
  s.$_ = undefined;
  return s;
}
cs.registerPage("show credits", "iajDu749O2HH5AG4pth9fr7D", a_iajDu749O2HH5AG4pth9fr7D, false);

function a_iajDu749O2HH5AG4pth9fr7D$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.85.0");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BICBuYW1lICAa.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.85.40");
  return s.rt.enter(a_stylepage(s, a_iajDu749O2HH5AG4pth9fr7D$2));
  } else {
  (s.pc = "2.85.50");
  null;
  }
  return a_iajDu749O2HH5AG4pth9fr7D$1;
}
cs.registerStep(a_iajDu749O2HH5AG4pth9fr7D$0, 'a_iajDu749O2HH5AG4pth9fr7D$0');

function a_iajDu749O2HH5AG4pth9fr7D$2(s) {
  (s.pc = "2.85.43");
  lib.Wall.set_subtitle("credits", s);
  return a_iajDu749O2HH5AG4pth9fr7D$1;
}
cs.registerStep(a_iajDu749O2HH5AG4pth9fr7D$2, 'a_iajDu749O2HH5AG4pth9fr7D$2');

function a_iajDu749O2HH5AG4pth9fr7D$1(s) {
  var t_elseIf_2 = true;
  (s.pc = "2.85.5");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.85.90");
  lib.Box.push_box(s);
  (s.pc = "2.85.920");
  lib.Box.set_margins(2, 2, 2, 2, s);
  (s.pc = "2.85.923");
  (ok1(s, /* _credits */ s.d.$qTILdrMWpOE7W6v8fyiOqO8E) && lib.String_.post_to_wall(/* _credits */ s.d.$qTILdrMWpOE7W6v8fyiOqO8E, s));
  lib.Box.pop_box(s);
  (s.pc = "2.85.92");
  null;
  s.rt.leave_render();
  } else {
  (s.pc = "2.85.a0");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_iajDu749O2HH5AG4pth9fr7D$1, 'a_iajDu749O2HH5AG4pth9fr7D$1');


//Ent_BICBuYW1lICAa
function Ent_BICBuYW1lICAa(p) {
  this.parent = p;
}
Ent_BICBuYW1lICAa.prototype = new lib.ObjectEntry();
Ent_BICBuYW1lICAa.prototype.keys = [];
Ent_BICBuYW1lICAa.prototype.values = [];
Ent_BICBuYW1lICAa.prototype.fields = [];
//Tbl_BICBuYW1lICAa
function Tbl_BICBuYW1lICAa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BICBuYW1lICAa.prototype = new lib.ObjectSingleton();
Tbl_BICBuYW1lICAa.prototype.entryCtor = Ent_BICBuYW1lICAa;
cs.objectSingletons["show instructions page data"] = function(d) { return d.$BICBuYW1lICAa };
Tbl_BICBuYW1lICAa.prototype.selfCtor = Tbl_BICBuYW1lICAa;
Tbl_BICBuYW1lICAa.prototype.stableName = "BICBuYW1lICAa";
Tbl_BICBuYW1lICAa.prototype.entryKindName = "show instructions page data";

// jsonimport
Ent_BICBuYW1lICAa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$BICBuYW1lICAa");
/* ACTION: level by id */
function a_uIQCNem1kvZBE4J6UHoWPCK1(previous, returnAddr, $index) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uIQCNem1kvZBE4J6UHoWPCK1$0;
  s.name = "level by id";
  s.$index = $index;
  s.result = undefined;
  return s;
}
cs.registerAction("level by id", "uIQCNem1kvZBE4J6UHoWPCK1", a_uIQCNem1kvZBE4J6UHoWPCK1, false);

function a_uIQCNem1kvZBE4J6UHoWPCK1$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_uIQCNem1kvZBE4J6UHoWPCK1$4, lib.RTValue.mkPicker(lib.Number_.picker(), 0, "index", "$index"));
  return a_uIQCNem1kvZBE4J6UHoWPCK1$4;
  }
  return a_uIQCNem1kvZBE4J6UHoWPCK1$3;
}
cs.registerStep(a_uIQCNem1kvZBE4J6UHoWPCK1$0, 'a_uIQCNem1kvZBE4J6UHoWPCK1$0');

function a_uIQCNem1kvZBE4J6UHoWPCK1$4(s) {
  return a_uIQCNem1kvZBE4J6UHoWPCK1$3;
}
cs.registerStep(a_uIQCNem1kvZBE4J6UHoWPCK1$4, 'a_uIQCNem1kvZBE4J6UHoWPCK1$4');

function a_uIQCNem1kvZBE4J6UHoWPCK1$3(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.108.1");
  var t_infix_1 = (ok1(s, s.$index) && (s.$index > 0));
  var t_lazy_2 = t_infix_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_infix_3 = (ok2(s, s.$index, /* _level count */ s.d.$levelcount) && (s.$index <= /* _level count */ s.d.$levelcount));
  (t_lazy_2 = t_infix_3);
  }
  ok1(s, t_lazy_2);
  if (t_lazy_2) {
  (s.pc = "2.108.50");
  var t_call_4 = (ok2(s, /* level index */ s.d.$BbGV2ZWwgaW5kZXga, s.$index) && /* level index */ s.d.$BbGV2ZWwgaW5kZXga.at(s.$index, s));
  (s.result = t_call_4);
  } else {
  (s.pc = "2.108.60");
  var t_call_5 = (ok1(s, /* level index */ s.d.$BbGV2ZWwgaW5kZXga) && /* level index */ s.d.$BbGV2ZWwgaW5kZXga.invalid(s));
  (s.result = t_call_5);
  }
  if (s.previous.needsPicker) {
  s.rt.displayResult("level", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_uIQCNem1kvZBE4J6UHoWPCK1$3, 'a_uIQCNem1kvZBE4J6UHoWPCK1$3');

/* ACTION: set instructions */
function a_jEFN2SCBqk8f47TxtO4wNwH1(previous, returnAddr, $instructions) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_jEFN2SCBqk8f47TxtO4wNwH1$0;
  s.name = "set instructions";
  s.$instructions = $instructions;
  return s;
}
cs.registerAction("set instructions", "jEFN2SCBqk8f47TxtO4wNwH1", a_jEFN2SCBqk8f47TxtO4wNwH1, false);

function a_jEFN2SCBqk8f47TxtO4wNwH1$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_jEFN2SCBqk8f47TxtO4wNwH1$2, lib.RTValue.mkPicker(lib.String_.picker(), "", "instructions", "$instructions"));
  return a_jEFN2SCBqk8f47TxtO4wNwH1$2;
  }
  return a_jEFN2SCBqk8f47TxtO4wNwH1$1;
}
cs.registerStep(a_jEFN2SCBqk8f47TxtO4wNwH1$0, 'a_jEFN2SCBqk8f47TxtO4wNwH1$0');

function a_jEFN2SCBqk8f47TxtO4wNwH1$2(s) {
  return a_jEFN2SCBqk8f47TxtO4wNwH1$1;
}
cs.registerStep(a_jEFN2SCBqk8f47TxtO4wNwH1$2, 'a_jEFN2SCBqk8f47TxtO4wNwH1$2');

function a_jEFN2SCBqk8f47TxtO4wNwH1$1(s) {
  (s.pc = "2.123.1");
  (/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E = s.$instructions);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_jEFN2SCBqk8f47TxtO4wNwH1$1, 'a_jEFN2SCBqk8f47TxtO4wNwH1$1');

/* ACTION: show instructions */
function a_rhe4BNymJXHZr2coRC1gPgnW(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rhe4BNymJXHZr2coRC1gPgnW$0;
  s.name = "show instructions";
  s.$_ = undefined;
  s.$width = undefined;
  s.$pic = undefined;
  s.$handler = undefined;
  return s;
}
cs.registerPage("show instructions", "rhe4BNymJXHZr2coRC1gPgnW", a_rhe4BNymJXHZr2coRC1gPgnW, false);

function a_rhe4BNymJXHZr2coRC1gPgnW$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.128.0");
  var t_call_1 = lib.Box.is_init(s);
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.rt.getCurrentPage().model = s.d.$BICBuYW1lICAa.create(s));
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.128.40");
  return s.rt.enter(a_stylepage(s, a_rhe4BNymJXHZr2coRC1gPgnW$2));
  } else {
  (s.pc = "2.128.50");
  null;
  }
  return a_rhe4BNymJXHZr2coRC1gPgnW$1;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$0, 'a_rhe4BNymJXHZr2coRC1gPgnW$0');

function a_rhe4BNymJXHZr2coRC1gPgnW$2(s) {
  (s.pc = "2.128.43");
  lib.Wall.set_subtitle("instructions", s);
  return a_rhe4BNymJXHZr2coRC1gPgnW$1;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$2, 'a_rhe4BNymJXHZr2coRC1gPgnW$2');

function a_rhe4BNymJXHZr2coRC1gPgnW$1(s) {
  var t_elseIf_2 = true;
  (s.pc = "2.128.5");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.128.90");
  lib.Box.push_box(s);
  (s.pc = "2.128.920");
  lib.Box.set_margins(2, 2, 2, 2, s);
  var t_elseIf_3 = true;
  (s.pc = "2.128.923");
  var t_call_4 = (ok1(s, /* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E) && lib.String_.is_empty(/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E, s));
  var t_call_5 = (ok1(s, t_call_4) && lib.Boolean_.not(t_call_4, s));
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "2.128.9270");
  (ok1(s, /* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E) && lib.String_.post_to_wall(/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E, s));
  } else {
  (s.pc = "2.128.9280");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.128.9283");
  (s.$width = 0);
  (s.pc = "2.128.9286");
  s.t_collArr_6 = (ok1(s, /* _instructions pictures */ s.d.$xk722ZAynl20UPay21owpZOR) && /* _instructions pictures */ s.d.$xk722ZAynl20UPay21owpZOR.get_enumerator());
  s.t_idx_7 = 0;
  return a_rhe4BNymJXHZr2coRC1gPgnW$5;
  }
  return a_rhe4BNymJXHZr2coRC1gPgnW$4;
  } else {
  (s.pc = "2.128.a0");
  null;
  }
  return a_rhe4BNymJXHZr2coRC1gPgnW$3;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$1, 'a_rhe4BNymJXHZr2coRC1gPgnW$1');

function a_rhe4BNymJXHZr2coRC1gPgnW$5(s) {
  if ((s.t_idx_7 < (s.t_collArr_6.length))) {
  (s.$pic = s.t_collArr_6[(s.t_idx_7)]);
  (s.t_idx_7++);
  (s.pc = "2.128.928b0");
  lib.Box.push_box(s);
  (s.pc = "2.128.928b20");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "2.128.928b23");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_rhe4BNymJXHZr2coRC1gPgnW$7);
  var t_call_9 = (ok1(s, s.$pic) && s.$pic.width(t_resumeCtx_8));
  return a_rhe4BNymJXHZr2coRC1gPgnW$7;
  }
  (s.pc = "2.128.928b");
  var t_infix_12 = (ok1(s, s.$width) && (s.$width / 20));
  (ok1(s, t_infix_12) && lib.Box.set_width(t_infix_12, s));
  return a_rhe4BNymJXHZr2coRC1gPgnW$4;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$5, 'a_rhe4BNymJXHZr2coRC1gPgnW$5');

function a_rhe4BNymJXHZr2coRC1gPgnW$4(s) {
  lib.Box.pop_box(s);
  (s.pc = "2.128.92");
  lib.Box.push_box(s);
  (s.pc = "2.128.940");
  lib.Box.set_margins(2.5, 1, 2.5, 1, s);
  (s.pc = "2.128.943");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.128.946");
  var t_call_13 = lib.Colors.white(s);
  (ok1(s, t_call_13) && lib.Box.set_foreground(t_call_13, s));
  (s.pc = "2.128.949");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_rhe4BNymJXHZr2coRC1gPgnW$8, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$4, 'a_rhe4BNymJXHZr2coRC1gPgnW$4');

function a_rhe4BNymJXHZr2coRC1gPgnW$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$3, 'a_rhe4BNymJXHZr2coRC1gPgnW$3');

function a_rhe4BNymJXHZr2coRC1gPgnW$7(s) {
  var t_pauseRes_10 = s.pauseValue;
  var t_infix_11 = (ok2(s, s.$width, t_pauseRes_10) && (s.$width + t_pauseRes_10));
  (s.$width = t_infix_11);
  lib.Box.pop_box(s);
  return a_rhe4BNymJXHZr2coRC1gPgnW$5;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$7, 'a_rhe4BNymJXHZr2coRC1gPgnW$7');

function a_rhe4BNymJXHZr2coRC1gPgnW$8(s) {
  (s.pc = "2.128.94c");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.128.94j0");
  var t_lmbProxy_14 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_rhe4BNymJXHZr2coRC1gPgnW$9(t_lmbProxy_14(la0), la1) });
  (s.pc = "2.128.94f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.128.94j");
  lib.Box.push_box(s);
  (s.pc = "2.128.94l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.128.94l3");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.128.94l6");
  lib.String_.post_to_wall("start", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  s.rt.leave_render();
  return a_rhe4BNymJXHZr2coRC1gPgnW$3;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$8, 'a_rhe4BNymJXHZr2coRC1gPgnW$8');

/* ACTION: a_rhe4BNymJXHZr2coRC1gPgnW::lambda::9 */
function a_a_rhe4BNymJXHZr2coRC1gPgnW$9(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_rhe4BNymJXHZr2coRC1gPgnW$9$0;
  s.name = "show instructions";
  return s;
}
cs.registerLambda("a_rhe4BNymJXHZr2coRC1gPgnW\u003a\u003alambda\u003a\u003a9", "a_rhe4BNymJXHZr2coRC1gPgnW$9", a_a_rhe4BNymJXHZr2coRC1gPgnW$9, true);

function a_a_rhe4BNymJXHZr2coRC1gPgnW$9$0(s) {
  (s.pc = "2.128.94j20");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_a_rhe4BNymJXHZr2coRC1gPgnW$9$1, 1));
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$9$0, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$9$0');

function a_a_rhe4BNymJXHZr2coRC1gPgnW$9$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  return s.rt.enter(a_startgame(s, a_a_rhe4BNymJXHZr2coRC1gPgnW$9$2, t_actRes_0));
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$9$1, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$9$1');

function a_a_rhe4BNymJXHZr2coRC1gPgnW$9$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$9$2, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$9$2');

/* ACTION: show instructions button */
function a_OP6CcdaCET95J4x6c4vLnjpz(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_OP6CcdaCET95J4x6c4vLnjpz$0;
  s.name = "show instructions button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show instructions button", "OP6CcdaCET95J4x6c4vLnjpz", a_OP6CcdaCET95J4x6c4vLnjpz, false);

function a_OP6CcdaCET95J4x6c4vLnjpz$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.134.0");
  var t_call_1 = (ok1(s, /* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E) && lib.String_.is_empty(/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && (!t_lazy_3))) {
  var t_call_4 = lib.Boolean_.not((/* _instructions pictures */ s.d.$xk722ZAynl20UPay21owpZOR == undefined), s);
  (t_lazy_3 = t_call_4);
  }
  ok1(s, t_lazy_3);
  if (t_lazy_3) {
  (s.pc = "2.134.40");
  lib.Box.push_box(s);
  (s.pc = "2.134.420");
  lib.Box.set_margins(0, 1, 1, 1, s);
  (s.pc = "2.134.423");
  lib.Box.set_width(10, s);
  (s.pc = "2.134.426");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.134.429");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_OP6CcdaCET95J4x6c4vLnjpz$3, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
  } else {
  (s.pc = "2.134.50");
  null;
  }
  return a_OP6CcdaCET95J4x6c4vLnjpz$2;
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$0, 'a_OP6CcdaCET95J4x6c4vLnjpz$0');

function a_OP6CcdaCET95J4x6c4vLnjpz$3(s) {
  (s.pc = "2.134.42c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.134.42j0");
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_OP6CcdaCET95J4x6c4vLnjpz$4(t_lmbProxy_5(la0), la1) });
  (s.pc = "2.134.42f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.134.42j");
  lib.Box.push_box(s);
  (s.pc = "2.134.42l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.134.42l3");
  lib.Box.set_font_size(0.7, s);
  (s.pc = "2.134.42l6");
  var t_call_6 = lib.Colors.white(s);
  (ok1(s, t_call_6) && lib.Box.set_foreground(t_call_6, s));
  (s.pc = "2.134.42l9");
  lib.String_.post_to_wall("instructions", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_OP6CcdaCET95J4x6c4vLnjpz$2;
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$3, 'a_OP6CcdaCET95J4x6c4vLnjpz$3');

function a_OP6CcdaCET95J4x6c4vLnjpz$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$2, 'a_OP6CcdaCET95J4x6c4vLnjpz$2');

/* ACTION: a_OP6CcdaCET95J4x6c4vLnjpz::lambda::4 */
function a_a_OP6CcdaCET95J4x6c4vLnjpz$4(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_OP6CcdaCET95J4x6c4vLnjpz$4$0;
  s.name = "show instructions button";
  return s;
}
cs.registerLambda("a_OP6CcdaCET95J4x6c4vLnjpz\u003a\u003alambda\u003a\u003a4", "a_OP6CcdaCET95J4x6c4vLnjpz$4", a_a_OP6CcdaCET95J4x6c4vLnjpz$4, true);

function a_a_OP6CcdaCET95J4x6c4vLnjpz$4$0(s) {
  (s.pc = "2.134.42j20");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show instructions");
  return s.rt.leave();
}
cs.registerStep(a_a_OP6CcdaCET95J4x6c4vLnjpz$4$0, 'a_a_OP6CcdaCET95J4x6c4vLnjpz$4$0');

/* ACTION: show level selection button */
function a_RiKp9WsgmJDFjpU5f9NbOSB6(previous, returnAddr, $lvl, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_RiKp9WsgmJDFjpU5f9NbOSB6$0;
  s.name = "show level selection button";
  s.$lvl = $lvl;
  s.$width = $width;
  s.$height = $height;
  s.$theme = undefined;
  s.$handler = undefined;
  s.$c = undefined;
  s.$pic = undefined;
  return s;
}
cs.registerAction("show level selection button", "RiKp9WsgmJDFjpU5f9NbOSB6", a_RiKp9WsgmJDFjpU5f9NbOSB6, false);

function a_RiKp9WsgmJDFjpU5f9NbOSB6$0(s) {
  (s.pc = "2.144.0");
  return s.rt.enter(a_kyM6BKxra6FMoP8AENJbQMGs(s, a_RiKp9WsgmJDFjpU5f9NbOSB6$1, s.$lvl));
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$0, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$0');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$theme = t_actRes_0);
  var t_elseIf_1 = true;
  (s.pc = "2.144.3");
  if (s.$lvl) {
  var t_recOp_2 = s.$lvl.perform_get("qhCetiH2Bj2wrY6fz4oObZF5", s);
  }
  ok1(s, t_recOp_2);
  if (t_recOp_2) {
  (s.pc = "2.144.740");
  var t_lmbv_3 = s.$lvl;
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4(t_lmbProxy_4(la0), la1, t_lmbv_3) });
  (s.pc = "2.144.70");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  } else {
  (s.pc = "2.144.80");
  null;
  }
  (s.pc = "2.144.9");
  return s.rt.enter(a_E4ynNjmdl86AziAtb5ofey4w(s, a_RiKp9WsgmJDFjpU5f9NbOSB6$5, s.$lvl));
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$1, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$1');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$5(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  (s.$c = t_actRes_5);
  var t_elseIf_6 = true;
  (s.pc = "2.144.c");
  if (s.$lvl) {
  var t_recOp_7 = s.$lvl.perform_get("qhCetiH2Bj2wrY6fz4oObZF5", s);
  }
  ok1(s, t_recOp_7);
  if (t_recOp_7) {
  (s.pc = "2.144.g0");
  (ok1(s, s.$c) && lib.Box.set_background(s.$c, s));
  } else {
  (s.pc = "2.144.h0");
  var t_call_8 = lib.Colors.gray(s);
  (ok1(s, t_call_8) && lib.Box.set_background(t_call_8, s));
  }
  (s.pc = "2.144.h");
  var t_call_9 = lib.Colors.white(s);
  (ok1(s, t_call_9) && lib.Box.set_foreground(t_call_9, s));
  var t_elseIf_10 = true;
  (s.pc = "2.144.l");
  if (s.$theme) {
  var t_recOp_11 = s.$theme[("$_background picture")];
  }
  var t_call_12 = lib.Boolean_.not((t_recOp_11 == undefined), s);
  ok1(s, t_call_12);
  if (t_call_12) {
  (s.pc = "2.144.p0");
  lib.Box.push_box(s);
  (s.pc = "2.144.p20");
  if (s.$theme) {
  var t_recOp_13 = s.$theme[("$_background picture")];
  }
  (s.$pic = t_recOp_13);
  (s.pc = "2.144.p23");
  (ok1(s, s.$pic) && s.$pic.post_to_wall(s));
  (s.pc = "2.144.p26");
  (ok1(s, s.$width) && lib.Box.set_width(s.$width, s));
  (s.pc = "2.144.p29");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.144.q0");
  null;
  }
  (s.pc = "2.144.q");
  lib.Box.push_box(s);
  (s.pc = "2.144.s0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.144.s3");
  lib.Box.set_vertical_align("center", s);
  (s.pc = "2.144.s6");
  (ok1(s, s.$width) && lib.Box.set_width(s.$width, s));
  (s.pc = "2.144.s9");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  (s.pc = "2.144.sc");
  lib.Box.set_font_size(5, s);
  (s.pc = "2.144.sf");
  (ok1(s, (ok1(s, s.$lvl) && s.$lvl[("xneF5ygmtTQb4TogUvxfMDe1")])) && lib.Number_.post_to_wall((ok1(s, s.$lvl) && s.$lvl[("xneF5ygmtTQb4TogUvxfMDe1")]), s));
  lib.Box.pop_box(s);
  var t_elseIf_14 = true;
  (s.pc = "2.144.s");
  if (s.$lvl) {
  var t_recOp_15 = s.$lvl.perform_get("qhCetiH2Bj2wrY6fz4oObZF5", s);
  }
  var t_call_16 = (ok1(s, t_recOp_15) && lib.Boolean_.not(t_recOp_15, s));
  ok1(s, t_call_16);
  if (t_call_16) {
  (s.pc = "2.144.w0");
  lib.Box.push_box(s);
  (s.pc = "2.144.w20");
  lib.Box.set_horizontal_align("right", s);
  (s.pc = "2.144.w23");
  lib.Box.set_vertical_align("bottom", s);
  (s.pc = "2.144.w26");
  (ok1(s, s.$width) && lib.Box.set_width(s.$width, s));
  (s.pc = "2.144.w29");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  (s.pc = "2.144.w2c");
  lib.Box.set_font_size(1.2, s);
  (s.pc = "2.144.w2f");
  var t_call_17 = lib.Colors.light_gray(s);
  (ok1(s, t_call_17) && lib.Box.set_foreground(t_call_17, s));
  (s.pc = "2.144.w2i");
  lib.Box.set_padding(0.5, 0.5, 0.5, 0.5, s);
  (s.pc = "2.144.w2l");
  lib.String_.post_to_wall("locked", s);
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.144.x0");
  null;
  }
  var t_elseIf_18 = true;
  (s.pc = "2.144.x");
  if (s.$lvl) {
  var t_recOp_19 = s.$lvl.perform_get("e6cQUfw2298se1yYeqTlPcX8", s);
  }
  ok1(s, t_recOp_19);
  if (t_recOp_19) {
  var t_elseIf_20 = true;
  (s.pc = "2.144.B0");
  if (s.$lvl) {
  var t_recOp_21 = s.$lvl.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_infix_22 = (ok1(s, t_recOp_21) && (t_recOp_21 > 0));
  ok1(s, t_infix_22);
  if (t_infix_22) {
  (s.pc = "2.144.B40");
  return s.rt.enter(a_syCJwBkyr1jcu3Z9uQnocktT(s, a_RiKp9WsgmJDFjpU5f9NbOSB6$17, s.$lvl, s.$width, s.$height));
  } else {
  (s.pc = "2.144.B50");
  lib.Box.push_box(s);
  (s.pc = "2.144.B520");
  lib.Box.set_padding(0, 0, 1, 0, s);
  (s.pc = "2.144.B523");
  (ok1(s, s.$width) && lib.Box.set_width(s.$width, s));
  (s.pc = "2.144.B526");
  lib.Box.set_vertical_align("bottom", s);
  (s.pc = "2.144.B529");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.144.B52c");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  (s.pc = "2.144.B52f");
  lib.Box.set_font_size(1, s);
  (s.pc = "2.144.B52i");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.144.B52l");
  var t_call_23 = lib.Colors.orange(s);
  var t_call_24 = (ok1(s, t_call_23) && t_call_23.lighten(0.4, s));
  (ok1(s, t_call_24) && lib.Box.set_foreground(t_call_24, s));
  (s.pc = "2.144.B52o");
  return s.rt.enter(a_g5G6V1r466rXedV0GC2DdMLq(s, a_RiKp9WsgmJDFjpU5f9NbOSB6$18, s.$lvl));
  }
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$16;
  } else {
  (s.pc = "2.144.C0");
  null;
  }
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$14;
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$5, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$5');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$17(s) {
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$16;
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$17, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$17');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$18(s) {
  var t_actRes_25 = s.rt.returnedFrom.result;
  var t_concat_26 = lib.String_.concatAny("score\u003a ", t_actRes_25);
  (ok1(s, t_concat_26) && lib.String_.post_to_wall(t_concat_26, s));
  lib.Box.pop_box(s);
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$16;
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$18, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$18');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$16(s) {
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$14;
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$16, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$16');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$14(s) {
  return s.rt.leave();
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$14, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$14');

/* ACTION: a_RiKp9WsgmJDFjpU5f9NbOSB6::lambda::4 */
function a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4(previous, returnAddr, $lvl) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$0;
  s.name = "show level selection button";
  s.$lvl = $lvl;
  return s;
}
cs.registerLambda("a_RiKp9WsgmJDFjpU5f9NbOSB6\u003a\u003alambda\u003a\u003a4", "a_RiKp9WsgmJDFjpU5f9NbOSB6$4", a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4, true);

function a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$0(s) {
  (s.pc = "2.144.7420");
  return s.rt.enter(a_hkrBuHpdV719LOBB6mZewhJD(s, a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$1, s.$lvl));
}
cs.registerStep(a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$0, 'a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$0');

function a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$1, 'a_a_RiKp9WsgmJDFjpU5f9NbOSB6$4$1');

/* ACTION: level button color */
function a_E4ynNjmdl86AziAtb5ofey4w(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_E4ynNjmdl86AziAtb5ofey4w$0;
  s.name = "level button color";
  s.$level = $level;
  s.result = undefined;
  s.$level_theme = undefined;
  return s;
}
cs.registerAction("level button color", "E4ynNjmdl86AziAtb5ofey4w", a_E4ynNjmdl86AziAtb5ofey4w, false);

function a_E4ynNjmdl86AziAtb5ofey4w$0(s) {
  (s.pc = "2.149.0");
  var t_call_0 = (ok2(s, /* level theme index */ s.d.$BdGhpbmca, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && /* level theme index */ s.d.$BdGhpbmca.at((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]), s));
  if (t_call_0) {
  var t_recOp_1 = t_call_0.perform_get("T7dTa1GYk6ojgTI0G2RprFyk", s);
  }
  (s.$level_theme = t_recOp_1);
  var t_elseIf_2 = true;
  (s.pc = "2.149.3");
  var t_call_3 = lib.Boolean_.not((s.$level_theme == undefined), s);
  var t_lazy_4 = t_call_3;
  if ((ok1(s, t_lazy_4) && t_lazy_4)) {
  if (s.$level_theme) {
  var t_recOp_5 = s.$level_theme[("$_background")];
  }
  var t_call_6 = (ok1(s, t_recOp_5) && t_recOp_5.A(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 > 0));
  (t_lazy_4 = t_infix_7);
  }
  ok1(s, t_lazy_4);
  if (t_lazy_4) {
  (s.pc = "2.149.70");
  if (s.$level_theme) {
  var t_recOp_8 = s.$level_theme[("$_background")];
  }
  (s.result = t_recOp_8);
  } else {
  (s.pc = "2.149.80");
  if (/* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V) {
  var t_recOp_9 = /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V[("$_background")];
  }
  (s.result = t_recOp_9);
  }
  return s.rt.leave();
}
cs.registerStep(a_E4ynNjmdl86AziAtb5ofey4w$0, 'a_E4ynNjmdl86AziAtb5ofey4w$0');


//Ent_BdGhpbmca
function Ent_BdGhpbmca(p) {
  this.parent = p;
}
Ent_BdGhpbmca.prototype = new lib.IndexEntry();
Ent_BdGhpbmca.prototype.keys = ["xO347bTesUjy1mM30AP1wH3n"];
Ent_BdGhpbmca.prototype.values = ["T7dTa1GYk6ojgTI0G2RprFyk"];
Ent_BdGhpbmca.prototype.fields = ["xO347bTesUjy1mM30AP1wH3n", "T7dTa1GYk6ojgTI0G2RprFyk"];
Ent_BdGhpbmca.prototype["xO347bTesUjy1mM30AP1wH3n_realname"] = "id";
Ent_BdGhpbmca.prototype["T7dTa1GYk6ojgTI0G2RprFyk_realname"] = "_theme";
//Tbl_BdGhpbmca
function Tbl_BdGhpbmca(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BdGhpbmca.prototype = new lib.IndexSingleton();
Tbl_BdGhpbmca.prototype.entryCtor = Ent_BdGhpbmca;
cs.objectSingletons["level theme"] = function(d) { return d.$BdGhpbmca };
Tbl_BdGhpbmca.prototype.selfCtor = Tbl_BdGhpbmca;
Tbl_BdGhpbmca.prototype.stableName = "BdGhpbmca";
Tbl_BdGhpbmca.prototype.entryKindName = "level theme";

// jsonimport
Tbl_BdGhpbmca.prototype.importJsonKeys = function (ctx, json) {
  var s = ctx.s;
  var a = [];
  a.push(ctx.importNumber(json, "id"));
  return a;
}
Ent_BdGhpbmca.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("T7dTa1GYk6ojgTI0G2RprFyk", ctx.importRecord(json, this.perform_get("T7dTa1GYk6ojgTI0G2RprFyk",s),"_theme", s.d.$jm2ILvhcUMczcfijkGG49dZ2), s);
}
cs.registerGlobal("$BdGhpbmca");

//Ent_jm2ILvhcUMczcfijkGG49dZ2
function Ent_jm2ILvhcUMczcfijkGG49dZ2(p) {
  this.parent = p;
}
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype = new lib.ObjectEntry();
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype.keys = [];
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype.values = ["$_background", "$_background picture", "$_foreground"];
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype.fields = ["$_background", "$_background picture", "$_foreground"];
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype["$_background_realname"] = "_background";
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype["$_background picture_realname"] = "_background picture";
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype["$_foreground_realname"] = "_foreground";
//Tbl_jm2ILvhcUMczcfijkGG49dZ2
function Tbl_jm2ILvhcUMczcfijkGG49dZ2(l) {
  this.libName = l;
  this.initParent();
}
Tbl_jm2ILvhcUMczcfijkGG49dZ2.prototype = new lib.ObjectSingleton();
Tbl_jm2ILvhcUMczcfijkGG49dZ2.prototype.entryCtor = Ent_jm2ILvhcUMczcfijkGG49dZ2;
cs.objectSingletons["theme"] = function(d) { return d.$jm2ILvhcUMczcfijkGG49dZ2 };
Tbl_jm2ILvhcUMczcfijkGG49dZ2.prototype.selfCtor = Tbl_jm2ILvhcUMczcfijkGG49dZ2;
Tbl_jm2ILvhcUMczcfijkGG49dZ2.prototype.stableName = "jm2ILvhcUMczcfijkGG49dZ2";
Tbl_jm2ILvhcUMczcfijkGG49dZ2.prototype.entryKindName = "theme";

// jsonimport
Ent_jm2ILvhcUMczcfijkGG49dZ2.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$_background", ctx.importColor(json, "_background"), s);
  this.perform_set("$_foreground", ctx.importColor(json, "_foreground"), s);
}
cs.registerGlobal("$jm2ILvhcUMczcfijkGG49dZ2");
/* ACTION: button theme */
function a_JuYMgo4f6JZDHLov4on94izn(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_JuYMgo4f6JZDHLov4on94izn$0;
  s.name = "button theme";
  s.result = undefined;
  return s;
}
cs.registerAction("button theme", "JuYMgo4f6JZDHLov4on94izn", a_JuYMgo4f6JZDHLov4on94izn, false);

function a_JuYMgo4f6JZDHLov4on94izn$0(s) {
  (s.pc = "2.157.1");
  (s.result = /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V);
  if (s.previous.needsPicker) {
  s.rt.displayResult("theme", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_JuYMgo4f6JZDHLov4on94izn$0, 'a_JuYMgo4f6JZDHLov4on94izn$0');

/* ACTION: create theme */
function a_TuvYc3CSeDzlxw7k4r66Yrcb(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_TuvYc3CSeDzlxw7k4r66Yrcb$0;
  s.name = "create theme";
  s.result = undefined;
  return s;
}
cs.registerAction("create theme", "TuvYc3CSeDzlxw7k4r66Yrcb", a_TuvYc3CSeDzlxw7k4r66Yrcb, false);

function a_TuvYc3CSeDzlxw7k4r66Yrcb$0(s) {
  (s.pc = "2.162.0");
  var t_call_0 = (ok1(s, /* theme */ s.d.$jm2ILvhcUMczcfijkGG49dZ2) && /* theme */ s.d.$jm2ILvhcUMczcfijkGG49dZ2.create(s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "2.162.3");
  var t_call_1 = lib.Colors.transparent(s);
  if (s.result) {
  s.result.perform_set("$_background", t_call_1, s);
  }
  (s.pc = "2.162.6");
  var t_call_2 = lib.Colors.transparent(s);
  if (s.result) {
  s.result.perform_set("$_foreground", t_call_2, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_TuvYc3CSeDzlxw7k4r66Yrcb$0, 'a_TuvYc3CSeDzlxw7k4r66Yrcb$0');

/* ACTION: page theme */
function a_onF52KFta97Q2Qwj5GSJFw9u(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_onF52KFta97Q2Qwj5GSJFw9u$0;
  s.name = "page theme";
  s.result = undefined;
  return s;
}
cs.registerAction("page theme", "onF52KFta97Q2Qwj5GSJFw9u", a_onF52KFta97Q2Qwj5GSJFw9u, false);

function a_onF52KFta97Q2Qwj5GSJFw9u$0(s) {
  (s.pc = "2.168.1");
  (s.result = /* _page theme */ s.d.$A6TaCR1TM233ynuAfK2ieR1N);
  if (s.previous.needsPicker) {
  s.rt.displayResult("theme", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_onF52KFta97Q2Qwj5GSJFw9u$0, 'a_onF52KFta97Q2Qwj5GSJFw9u$0');

/* ACTION: apply theme */
function a_Rqqe3CxvoK7XWqNZh9kQWX7G(previous, returnAddr, $theme) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Rqqe3CxvoK7XWqNZh9kQWX7G$0;
  s.name = "apply theme";
  s.$theme = $theme;
  return s;
}
cs.registerAction("apply theme", "Rqqe3CxvoK7XWqNZh9kQWX7G", a_Rqqe3CxvoK7XWqNZh9kQWX7G, false);

function a_Rqqe3CxvoK7XWqNZh9kQWX7G$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.173.0");
  if (s.$theme) {
  var t_recOp_1 = s.$theme[("$_background")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && t_recOp_1.A(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 > 0));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "2.173.40");
  if (s.$theme) {
  var t_recOp_4 = s.$theme[("$_background")];
  }
  (ok1(s, t_recOp_4) && lib.Box.set_background(t_recOp_4, s));
  } else {
  (s.pc = "2.173.50");
  null;
  }
  var t_elseIf_5 = true;
  (s.pc = "2.173.5");
  if (s.$theme) {
  var t_recOp_6 = s.$theme[("$_foreground")];
  }
  var t_call_7 = (ok1(s, t_recOp_6) && t_recOp_6.A(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 > 0));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "2.173.90");
  if (s.$theme) {
  var t_recOp_9 = s.$theme[("$_foreground")];
  }
  (ok1(s, t_recOp_9) && lib.Box.set_foreground(t_recOp_9, s));
  } else {
  (s.pc = "2.173.a0");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_Rqqe3CxvoK7XWqNZh9kQWX7G$0, 'a_Rqqe3CxvoK7XWqNZh9kQWX7G$0');

/* ACTION: set background */
function a_xOGMqFGX0oajGlVqWyq6ciVg(previous, returnAddr, $theme, $c) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xOGMqFGX0oajGlVqWyq6ciVg$0;
  s.name = "set background";
  s.$theme = $theme;
  s.$c = $c;
  return s;
}
cs.registerAction("set background", "xOGMqFGX0oajGlVqWyq6ciVg", a_xOGMqFGX0oajGlVqWyq6ciVg, false);

function a_xOGMqFGX0oajGlVqWyq6ciVg$0(s) {
  (s.pc = "2.178.1");
  if (s.$theme) {
  s.$theme.perform_set("$_background", s.$c, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_xOGMqFGX0oajGlVqWyq6ciVg$0, 'a_xOGMqFGX0oajGlVqWyq6ciVg$0');

/* ACTION: set foreground */
function a_wjHWOo2L9s4mti20Bl4xgRr7(previous, returnAddr, $theme, $c) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_wjHWOo2L9s4mti20Bl4xgRr7$0;
  s.name = "set foreground";
  s.$theme = $theme;
  s.$c = $c;
  return s;
}
cs.registerAction("set foreground", "wjHWOo2L9s4mti20Bl4xgRr7", a_wjHWOo2L9s4mti20Bl4xgRr7, false);

function a_wjHWOo2L9s4mti20Bl4xgRr7$0(s) {
  (s.pc = "2.183.1");
  if (s.$theme) {
  s.$theme.perform_set("$_foreground", s.$c, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_wjHWOo2L9s4mti20Bl4xgRr7$0, 'a_wjHWOo2L9s4mti20Bl4xgRr7$0');

/* ACTION: set background picture */
function a_AKTQU67EzzZS6W1xy70h9dH4(previous, returnAddr, $theme, $pic) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_AKTQU67EzzZS6W1xy70h9dH4$0;
  s.name = "set background picture";
  s.$theme = $theme;
  s.$pic = $pic;
  return s;
}
cs.registerAction("set background picture", "AKTQU67EzzZS6W1xy70h9dH4", a_AKTQU67EzzZS6W1xy70h9dH4, false);

function a_AKTQU67EzzZS6W1xy70h9dH4$0(s) {
  (s.pc = "2.188.1");
  if (s.$theme) {
  s.$theme.perform_set("$_background picture", s.$pic, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_AKTQU67EzzZS6W1xy70h9dH4$0, 'a_AKTQU67EzzZS6W1xy70h9dH4$0');

/* ACTION: level button theme */
function a_kyM6BKxra6FMoP8AENJbQMGs(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_kyM6BKxra6FMoP8AENJbQMGs$0;
  s.name = "level button theme";
  s.$level = $level;
  s.result = undefined;
  s.$id = undefined;
  s.$level_theme = undefined;
  return s;
}
cs.registerAction("level button theme", "kyM6BKxra6FMoP8AENJbQMGs", a_kyM6BKxra6FMoP8AENJbQMGs, false);

function a_kyM6BKxra6FMoP8AENJbQMGs$0(s) {
  (s.pc = "2.193.0");
  (s.$id = (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]));
  (s.pc = "2.193.3");
  var t_call_0 = (ok2(s, /* level theme index */ s.d.$BdGhpbmca, s.$id) && /* level theme index */ s.d.$BdGhpbmca.at(s.$id, s));
  (s.$level_theme = t_call_0);
  (s.pc = "2.193.6");
  if (s.$level_theme) {
  var t_recOp_1 = s.$level_theme.perform_get("T7dTa1GYk6ojgTI0G2RprFyk", s);
  }
  (s.result = t_recOp_1);
  return s.rt.leave();
}
cs.registerStep(a_kyM6BKxra6FMoP8AENJbQMGs$0, 'a_kyM6BKxra6FMoP8AENJbQMGs$0');

/* ACTION: next */
function a_v1ibFfse8BhlXhYDaC3Wh2fN(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_v1ibFfse8BhlXhYDaC3Wh2fN$0;
  s.name = "next";
  s.$level = $level;
  s.result = undefined;
  return s;
}
cs.registerAction("next", "v1ibFfse8BhlXhYDaC3Wh2fN", a_v1ibFfse8BhlXhYDaC3Wh2fN, false);

function a_v1ibFfse8BhlXhYDaC3Wh2fN$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.203.1");
  var t_infix_1 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  var t_infix_2 = (ok2(s, t_infix_1, /* _level count */ s.d.$levelcount) && (t_infix_1 <= /* _level count */ s.d.$levelcount));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "2.203.50");
  var t_infix_3 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  var t_call_4 = (ok2(s, /* level index */ s.d.$BbGV2ZWwgaW5kZXga, t_infix_3) && /* level index */ s.d.$BbGV2ZWwgaW5kZXga.at(t_infix_3, s));
  (s.result = t_call_4);
  } else {
  (s.pc = "2.203.60");
  var t_call_5 = (ok1(s, /* level index */ s.d.$BbGV2ZWwgaW5kZXga) && /* level index */ s.d.$BbGV2ZWwgaW5kZXga.invalid(s));
  (s.result = t_call_5);
  }
  return s.rt.leave();
}
cs.registerStep(a_v1ibFfse8BhlXhYDaC3Wh2fN$0, 'a_v1ibFfse8BhlXhYDaC3Wh2fN$0');

/* ACTION: show details or start */
function a_hkrBuHpdV719LOBB6mZewhJD(previous, returnAddr, $lvl) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_hkrBuHpdV719LOBB6mZewhJD$0;
  s.name = "show details or start";
  s.$lvl = $lvl;
  return s;
}
cs.registerAction("show details or start", "hkrBuHpdV719LOBB6mZewhJD", a_hkrBuHpdV719LOBB6mZewhJD, true);

function a_hkrBuHpdV719LOBB6mZewhJD$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.208.0");
  if (s.$lvl) {
  var t_recOp_1 = s.$lvl.perform_get("KVEfbkQ37muzCX37bf2bTBbl", s);
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "2.208.40");
  return s.rt.enter(a_startgame(s, a_hkrBuHpdV719LOBB6mZewhJD$3, s.$lvl));
  } else {
  (s.pc = "2.208.50");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show level details", s.$lvl);
  }
  return a_hkrBuHpdV719LOBB6mZewhJD$2;
}
cs.registerStep(a_hkrBuHpdV719LOBB6mZewhJD$0, 'a_hkrBuHpdV719LOBB6mZewhJD$0');

function a_hkrBuHpdV719LOBB6mZewhJD$3(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_hkrBuHpdV719LOBB6mZewhJD$2;
}
cs.registerStep(a_hkrBuHpdV719LOBB6mZewhJD$3, 'a_hkrBuHpdV719LOBB6mZewhJD$3');

function a_hkrBuHpdV719LOBB6mZewhJD$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_hkrBuHpdV719LOBB6mZewhJD$2, 'a_hkrBuHpdV719LOBB6mZewhJD$2');

/* ACTION: total score */
function a_vhNGQ52iSlYqwQHeL8LQGR8e(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_vhNGQ52iSlYqwQHeL8LQGR8e$0;
  s.name = "total score";
  s.result = undefined;
  s.$lvl2 = undefined;
  return s;
}
cs.registerAction("total score", "vhNGQ52iSlYqwQHeL8LQGR8e", a_vhNGQ52iSlYqwQHeL8LQGR8e, false);

function a_vhNGQ52iSlYqwQHeL8LQGR8e$0(s) {
  (s.pc = "2.213.1");
  (s.result = 0);
  (s.pc = "2.213.4");
  s.t_collArr_0 = (ok1(s, /* level index */ s.d.$BbGV2ZWwgaW5kZXga) && /* level index */ s.d.$BbGV2ZWwgaW5kZXga.get_enumerator());
  s.t_idx_1 = 0;
  return a_vhNGQ52iSlYqwQHeL8LQGR8e$1;
}
cs.registerStep(a_vhNGQ52iSlYqwQHeL8LQGR8e$0, 'a_vhNGQ52iSlYqwQHeL8LQGR8e$0');

function a_vhNGQ52iSlYqwQHeL8LQGR8e$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$lvl2 = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  if (s.$lvl2) {
  var t_recOp_2 = s.$lvl2.perform_get("e6cQUfw2298se1yYeqTlPcX8", s);
  }
  if (t_recOp_2) {
  (s.pc = "2.213.90");
  if (s.$lvl2) {
  var t_recOp_3 = s.$lvl2.perform_get("xF2SoxL0oxSdoSCsMwe5wRzo", s);
  }
  var t_infix_4 = (ok2(s, s.result, t_recOp_3) && (s.result + t_recOp_3));
  (s.result = t_infix_4);
  }
  return a_vhNGQ52iSlYqwQHeL8LQGR8e$1;
  }
  if (s.previous.needsPicker) {
  s.rt.displayResult("score", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_vhNGQ52iSlYqwQHeL8LQGR8e$1, 'a_vhNGQ52iSlYqwQHeL8LQGR8e$1');

/* ACTION: show score */
function a_LJpox6YpuCvn6ERcUlisZc56(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_LJpox6YpuCvn6ERcUlisZc56$0;
  s.name = "show score";
  s.$score = undefined;
  return s;
}
cs.registerAction("show score", "LJpox6YpuCvn6ERcUlisZc56", a_LJpox6YpuCvn6ERcUlisZc56, false);

function a_LJpox6YpuCvn6ERcUlisZc56$0(s) {
  (s.pc = "2.218.0");
  return s.rt.enter(a_vhNGQ52iSlYqwQHeL8LQGR8e(s, a_LJpox6YpuCvn6ERcUlisZc56$1));
}
cs.registerStep(a_LJpox6YpuCvn6ERcUlisZc56$0, 'a_LJpox6YpuCvn6ERcUlisZc56$0');

function a_LJpox6YpuCvn6ERcUlisZc56$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$score = t_actRes_0);
  var t_elseIf_1 = true;
  (s.pc = "2.218.3");
  var t_infix_2 = (ok1(s, s.$score) && (s.$score > 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "2.218.70");
  lib.Box.push_box(s);
  (s.pc = "2.218.720");
  lib.Box.set_horizontal_align("right", s);
  (s.pc = "2.218.723");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.218.726");
  lib.Box.set_margins(0.5, 0, 0, 0, s);
  (s.pc = "2.218.729");
  var t_concat_3 = lib.String_.concatAny("score\u003a ", s.$score);
  (ok1(s, t_concat_3) && lib.String_.post_to_wall(t_concat_3, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.218.80");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_LJpox6YpuCvn6ERcUlisZc56$1, 'a_LJpox6YpuCvn6ERcUlisZc56$1');

/* ACTION: score */
function a_g5G6V1r466rXedV0GC2DdMLq(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_g5G6V1r466rXedV0GC2DdMLq$0;
  s.name = "score";
  s.$level = $level;
  s.result = undefined;
  return s;
}
cs.registerAction("score", "g5G6V1r466rXedV0GC2DdMLq", a_g5G6V1r466rXedV0GC2DdMLq, false);

function a_g5G6V1r466rXedV0GC2DdMLq$0(s) {
  (s.pc = "2.223.1");
  if (s.$level) {
  var t_recOp_0 = s.$level.perform_get("xF2SoxL0oxSdoSCsMwe5wRzo", s);
  }
  (s.result = t_recOp_0);
  return s.rt.leave();
}
cs.registerStep(a_g5G6V1r466rXedV0GC2DdMLq$0, 'a_g5G6V1r466rXedV0GC2DdMLq$0');

/* ACTION: show rank */
function a_syCJwBkyr1jcu3Z9uQnocktT(previous, returnAddr, $lvl, $width, $height) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_syCJwBkyr1jcu3Z9uQnocktT$0;
  s.name = "show rank";
  s.$lvl = $lvl;
  s.$width = $width;
  s.$height = $height;
  s.$rank = undefined;
  s.$i = undefined;
  s.$rank_width = undefined;
  return s;
}
cs.registerAction("show rank", "syCJwBkyr1jcu3Z9uQnocktT", a_syCJwBkyr1jcu3Z9uQnocktT, false);

function a_syCJwBkyr1jcu3Z9uQnocktT$0(s) {
  (s.pc = "2.233.0");
  return s.rt.enter(a_g5G6V1r466rXedV0GC2DdMLq(s, a_syCJwBkyr1jcu3Z9uQnocktT$1, s.$lvl));
}
cs.registerStep(a_syCJwBkyr1jcu3Z9uQnocktT$0, 'a_syCJwBkyr1jcu3Z9uQnocktT$0');

function a_syCJwBkyr1jcu3Z9uQnocktT$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  if (s.$lvl) {
  var t_recOp_1 = s.$lvl.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_infix_2 = (ok2(s, t_actRes_0, t_recOp_1) && (t_actRes_0 / t_recOp_1));
  var t_infix_3 = (ok1(s, t_infix_2) && (t_infix_2 * 3));
  var t_call_4 = (ok1(s, t_infix_3) && lib.Math_.floor(t_infix_3, s));
  (s.$rank = t_call_4);
  (s.pc = "2.233.3");
  lib.Box.push_box(s);
  (s.pc = "2.233.50");
  lib.Box.set_padding(0, 0, 1, 0, s);
  (s.pc = "2.233.53");
  lib.Box.set_vertical_align("bottom", s);
  (s.pc = "2.233.56");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.233.59");
  (ok1(s, s.$width) && lib.Box.set_width(s.$width, s));
  (s.pc = "2.233.5c");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  (s.pc = "2.233.5f");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.233.5i");
  s.t_bnd_5 = 3;
  (s.$i = 0);
  return a_syCJwBkyr1jcu3Z9uQnocktT$3;
}
cs.registerStep(a_syCJwBkyr1jcu3Z9uQnocktT$1, 'a_syCJwBkyr1jcu3Z9uQnocktT$1');

function a_syCJwBkyr1jcu3Z9uQnocktT$3(s) {
  if ((s.$i < s.t_bnd_5)) {
  (s.pc = "2.233.5m0");
  lib.Box.push_box(s);
  (s.pc = "2.233.5m20");
  var t_infix_6 = (ok1(s, s.$width) && (s.$width - 3));
  var t_infix_7 = (ok1(s, t_infix_6) && (t_infix_6 / 3));
  (s.$rank_width = t_infix_7);
  (s.pc = "2.233.5m23");
  (ok1(s, s.$rank_width) && lib.Box.set_width(s.$rank_width, s));
  (s.pc = "2.233.5m26");
  var t_infix_8 = (ok1(s, s.$rank_width) && (s.$rank_width / 3.2));
  (ok1(s, t_infix_8) && lib.Box.set_height(t_infix_8, s));
  (s.pc = "2.233.5m29");
  lib.Box.set_margins(0, 0.25, 0, 0.25, s);
  var t_elseIf_9 = true;
  (s.pc = "2.233.5m2c");
  var t_infix_10 = (ok2(s, s.$i, s.$rank) && (s.$i <= s.$rank));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "2.233.5m2g0");
  var t_call_11 = lib.Colors.orange(s);
  (ok1(s, t_call_11) && lib.Box.set_background(t_call_11, s));
  } else {
  (s.pc = "2.233.5m2h0");
  var t_call_12 = lib.Colors.gray(s);
  (ok1(s, t_call_12) && lib.Box.set_background(t_call_12, s));
  }
  lib.Box.pop_box(s);
  (s.$i++);
  return a_syCJwBkyr1jcu3Z9uQnocktT$3;
  }
  lib.Box.pop_box(s);
  return s.rt.leave();
}
cs.registerStep(a_syCJwBkyr1jcu3Z9uQnocktT$3, 'a_syCJwBkyr1jcu3Z9uQnocktT$3');

/* ACTION: index */
function a_uJZPahu4xxQkbhRSYWsWCJjm(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uJZPahu4xxQkbhRSYWsWCJjm$0;
  s.name = "index";
  s.$level = $level;
  s.result = undefined;
  return s;
}
cs.registerAction("index", "uJZPahu4xxQkbhRSYWsWCJjm", a_uJZPahu4xxQkbhRSYWsWCJjm, false);

function a_uJZPahu4xxQkbhRSYWsWCJjm$0(s) {
  (s.pc = "2.238.1");
  (s.result = (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]));
  return s.rt.leave();
}
cs.registerStep(a_uJZPahu4xxQkbhRSYWsWCJjm$0, 'a_uJZPahu4xxQkbhRSYWsWCJjm$0');

/* ACTION: first level */
function a_XT6yz9vjh6Ci02AGh2Y9e9pe(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XT6yz9vjh6Ci02AGh2Y9e9pe$0;
  s.name = "first level";
  s.result = undefined;
  return s;
}
cs.registerAction("first level", "XT6yz9vjh6Ci02AGh2Y9e9pe", a_XT6yz9vjh6Ci02AGh2Y9e9pe, false);

function a_XT6yz9vjh6Ci02AGh2Y9e9pe$0(s) {
  (s.pc = "2.249.1");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_XT6yz9vjh6Ci02AGh2Y9e9pe$1, 1));
}
cs.registerStep(a_XT6yz9vjh6Ci02AGh2Y9e9pe$0, 'a_XT6yz9vjh6Ci02AGh2Y9e9pe$0');

function a_XT6yz9vjh6Ci02AGh2Y9e9pe$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.result = t_actRes_0);
  if (s.previous.needsPicker) {
  s.rt.displayResult("level", s.result)
  }
  return s.rt.leave();
}
cs.registerStep(a_XT6yz9vjh6Ci02AGh2Y9e9pe$1, 'a_XT6yz9vjh6Ci02AGh2Y9e9pe$1');

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
  if(!d.hasOwnProperty("$Bc3RhcnQgcGFnZSBkYXRh") || !d["$Bc3RhcnQgcGFnZSBkYXRh"]) d.$Bc3RhcnQgcGFnZSBkYXRh = new Tbl_Bc3RhcnQgcGFnZSBkYXRh(d.libName);
  if(!d.hasOwnProperty("$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa") || !d["$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa"]) d.$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa = new Tbl_BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa(d.libName);
  if(!d.hasOwnProperty("$BbGV2ZWwgaW5kZXga") || !d["$BbGV2ZWwgaW5kZXga"]) d.$BbGV2ZWwgaW5kZXga = new Tbl_BbGV2ZWwgaW5kZXga(d.libName);
  if(!d.hasOwnProperty("$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa") || !d["$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa"]) d.$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa = new Tbl_BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa(d.libName);
  if(!d.hasOwnProperty("$levelcount")) d.$levelcount = 0;
  if(!d.hasOwnProperty("$qTILdrMWpOE7W6v8fyiOqO8E")) d.$qTILdrMWpOE7W6v8fyiOqO8E = "";
  if(!d.hasOwnProperty("$BICBuYW1lICAa") || !d["$BICBuYW1lICAa"]) d.$BICBuYW1lICAa = new Tbl_BICBuYW1lICAa(d.libName);
  if(!d.hasOwnProperty("$Puz9SxF3xc92nwYRLTnhhcli")) d.$Puz9SxF3xc92nwYRLTnhhcli = "";
  if(!d.hasOwnProperty("$I51gPgcwfFqs55JGIhivi2xz")) d.$I51gPgcwfFqs55JGIhivi2xz = "";
  if(!d.hasOwnProperty("$xmXSki2Kan2xPa8mJmNvEq7E")) d.$xmXSki2Kan2xPa8mJmNvEq7E = "";
  if(!d.hasOwnProperty("$BdGhpbmca") || !d["$BdGhpbmca"]) d.$BdGhpbmca = new Tbl_BdGhpbmca(d.libName);
  if(!d.hasOwnProperty("$jm2ILvhcUMczcfijkGG49dZ2") || !d["$jm2ILvhcUMczcfijkGG49dZ2"]) d.$jm2ILvhcUMczcfijkGG49dZ2 = new Tbl_jm2ILvhcUMczcfijkGG49dZ2(d.libName);
  if(!d.hasOwnProperty("$xNNKA4FtL05eZdMpVoUDEmtz")) d.$xNNKA4FtL05eZdMpVoUDEmtz = false;

};

cs._initGlobals2 = function(d) {
d.$Bc3RhcnQgcGFnZSBkYXRh.name = "start page data";d.$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa.name = "show level selection page data";d.$BbGV2ZWwgaW5kZXga.name = "level";d.$BbGV2ZWwgaW5kZXga.linked_cloudtables = [];
d.$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa.name = "show level details page data";d.$BICBuYW1lICAa.name = "show instructions page data";d.$BdGhpbmca.name = "level theme";d.$jm2ILvhcUMczcfijkGG49dZ2.name = "theme";};

cs._resetGlobals = function(d) {
  d.$Bc3RhcnQgcGFnZSBkYXRh = undefined;
  d.$BbGV2ZWwgc2VsZWN0aW9uIHBhZ2UgZGF0YQaa = undefined;
  d.$BbGV2ZWwgaW5kZXga = undefined;
  d.$BbGV2ZWwgZGV0YWlscyBwYWdlIGRhdGEa = undefined;
  d.$levelcount = 0;
  d.$lJMupn7S4c2MRWeFYgzYI3sM = undefined;
  d.$qTILdrMWpOE7W6v8fyiOqO8E = "";
  d.$BICBuYW1lICAa = undefined;
  d.$Puz9SxF3xc92nwYRLTnhhcli = "";
  d.$I51gPgcwfFqs55JGIhivi2xz = "";
  d.$xmXSki2Kan2xPa8mJmNvEq7E = "";
  d.$BdGhpbmca = undefined;
  d.$jm2ILvhcUMczcfijkGG49dZ2 = undefined;
  d.$yX2e8ghq4LTf5saYPyFh4j7V = undefined;
  d.$A6TaCR1TM233ynuAfK2ieR1N = undefined;
  d.$xNNKA4FtL05eZdMpVoUDEmtz = false;
  d.$xk722ZAynl20UPay21owpZOR = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set credits";
cs.authorId = "unknown";
cs.scriptId = "mchsa";
cs.scriptGuid = "e41d2fb8-d686-4351-5e09-e8b67f90a59a";
cs.hasLocalData = 1;
})}
