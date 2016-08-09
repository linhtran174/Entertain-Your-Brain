var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Play n Joy!";
cs.scriptColor = "\u0023800080";
cs.objectSingletons = {};
/* ACTION: main */
function a_main(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_main$0;
  s.name = "main";
  s.$number_of_levels = undefined;
  s.$title = undefined;
  s.$subtitle = undefined;
  s.$s = undefined;
  s.$start_level = undefined;
  s.$level = undefined;
  return s;
}
cs.registerAction("main", "main", a_main, true);

function a_main$0(s) {
  (s.pc = "0.60");
  (s.$number_of_levels = 5);
  (s.pc = "0.63");
  (s.$title = "Play n Joy!");
  (s.pc = "0.66");
  (s.$subtitle = "Play games for fun");
  (s.pc = "0.69");
  (s.$s = "Level 1\u003a Smash as many fruit as you can before time runs out\u000aLevel 2\u003a Collect as many coins as you can");
  (s.pc = "0.6g0");
  var t_lmbProxy_0 = s.libs.mkLambdaProxy;
  (s.$start_level = function(la0, la1, la2) { return a_a_main$1(t_lmbProxy_0(la0), la1, la2) });
  (s.pc = "0.6c");
  var t_libcall_1 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["initialize"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_main$2, s.$title, "Play games for fun!", s.$number_of_levels, s.$start_level));
}
cs.registerStep(a_main$0, 'a_main$0');

function a_main$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "0.6g");
  var t_libcall_3 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["set credits"](s);
  return s.rt.enter(t_libcall_3.invoke(t_libcall_3, a_main$3, /* Credit Text String look under "art" in Art Resource */ s.d.$xkhETEi1l1PQYLRW76223SfM));
}
cs.registerStep(a_main$2, 'a_main$2');

function a_main$3(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  (s.pc = "0.6j");
  var t_libcall_5 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["set instructions"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_main$4, s.$s));
}
cs.registerStep(a_main$3, 'a_main$3');

function a_main$4(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  (s.pc = "0.6m");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage("EQQil0nbJx3NHUknxgVqAHWW", "start");
  return s.rt.leave();
}
cs.registerStep(a_main$4, 'a_main$4');

/* ACTION: a_main::lambda::1 */
function a_a_main$1(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_main$1$0;
  s.name = "main";
  s.$level = $level;
  return s;
}
cs.registerLambda("a_main\u003a\u003alambda\u003a\u003a1", "a_main$1", a_a_main$1, true);

function a_a_main$1$0(s) {
  (s.pc = "0.6g20");
  return s.rt.enter(a_IIY9Z338P3ujT42xe64g6XW3(s, a_a_main$1$1, s.$level));
}
cs.registerStep(a_a_main$1$0, 'a_a_main$1$0');

function a_a_main$1$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  return s.rt.leave();
}
cs.registerStep(a_a_main$1$1, 'a_a_main$1$1');

/* ACTION: Main Level */
function a_IIY9Z338P3ujT42xe64g6XW3(previous, returnAddr, $level) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_IIY9Z338P3ujT42xe64g6XW3$0;
  s.name = "Main Level";
  s.$level = $level;
  return s;
}
cs.registerAction("Main Level", "IIY9Z338P3ujT42xe64g6XW3", a_IIY9Z338P3ujT42xe64g6XW3, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_IIY9Z338P3ujT42xe64g6XW3$0(s) {
  s.t_elseIf_0 = true;
  (s.pc = "0.j0");
  var t_libcall_1 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_IIY9Z338P3ujT42xe64g6XW3$1, s.$level));
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$0, 'a_IIY9Z338P3ujT42xe64g6XW3$0');

function a_IIY9Z338P3ujT42xe64g6XW3$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_infix_3 = (ok1(s, t_actRes_2) && (t_actRes_2 === 1));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.j40");
  return s.rt.enter(a_xfXpHcNr43AS044YnOp4M6zv(s, a_IIY9Z338P3ujT42xe64g6XW3$3));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$2;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$1, 'a_IIY9Z338P3ujT42xe64g6XW3$1');

function a_IIY9Z338P3ujT42xe64g6XW3$3(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_IIY9Z338P3ujT42xe64g6XW3$2;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$3, 'a_IIY9Z338P3ujT42xe64g6XW3$3');

function a_IIY9Z338P3ujT42xe64g6XW3$2(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.j5");
  var t_libcall_5 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_5.invoke(t_libcall_5, a_IIY9Z338P3ujT42xe64g6XW3$4, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$7;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$2, 'a_IIY9Z338P3ujT42xe64g6XW3$2');

function a_IIY9Z338P3ujT42xe64g6XW3$4(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  var t_infix_7 = (ok1(s, t_actRes_6) && (t_actRes_6 === 2));
  ok1(s, t_infix_7);
  if (t_infix_7) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.j90");
  return s.rt.enter(a_xA6lcnWLloiuf25OUgdE8UG6(s, a_IIY9Z338P3ujT42xe64g6XW3$6));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$5;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$4, 'a_IIY9Z338P3ujT42xe64g6XW3$4');

function a_IIY9Z338P3ujT42xe64g6XW3$7(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.ja");
  var t_libcall_9 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_9.invoke(t_libcall_9, a_IIY9Z338P3ujT42xe64g6XW3$8, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$11;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$7, 'a_IIY9Z338P3ujT42xe64g6XW3$7');

function a_IIY9Z338P3ujT42xe64g6XW3$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_IIY9Z338P3ujT42xe64g6XW3$5;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$6, 'a_IIY9Z338P3ujT42xe64g6XW3$6');

function a_IIY9Z338P3ujT42xe64g6XW3$5(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$7;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$5, 'a_IIY9Z338P3ujT42xe64g6XW3$5');

function a_IIY9Z338P3ujT42xe64g6XW3$8(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  var t_infix_11 = (ok1(s, t_actRes_10) && (t_actRes_10 === 3));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.je0");
  return s.rt.enter(a_xu8JC55CM3COq4HGwWvQXhfz(s, a_IIY9Z338P3ujT42xe64g6XW3$10));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$9;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$8, 'a_IIY9Z338P3ujT42xe64g6XW3$8');

function a_IIY9Z338P3ujT42xe64g6XW3$11(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jf");
  var t_libcall_12 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_12.invoke(t_libcall_12, a_IIY9Z338P3ujT42xe64g6XW3$12, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$15;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$11, 'a_IIY9Z338P3ujT42xe64g6XW3$11');

function a_IIY9Z338P3ujT42xe64g6XW3$10(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$9;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$10, 'a_IIY9Z338P3ujT42xe64g6XW3$10');

function a_IIY9Z338P3ujT42xe64g6XW3$9(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$11;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$9, 'a_IIY9Z338P3ujT42xe64g6XW3$9');

function a_IIY9Z338P3ujT42xe64g6XW3$12(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  var t_infix_14 = (ok1(s, t_actRes_13) && (t_actRes_13 === 4));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jj0");
  return s.rt.enter(a_irMlYM9HPRNBjvqEaal60hnX(s, a_IIY9Z338P3ujT42xe64g6XW3$14));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$13;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$12, 'a_IIY9Z338P3ujT42xe64g6XW3$12');

function a_IIY9Z338P3ujT42xe64g6XW3$15(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jk");
  var t_libcall_15 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_15.invoke(t_libcall_15, a_IIY9Z338P3ujT42xe64g6XW3$16, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$19;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$15, 'a_IIY9Z338P3ujT42xe64g6XW3$15');

function a_IIY9Z338P3ujT42xe64g6XW3$14(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$13;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$14, 'a_IIY9Z338P3ujT42xe64g6XW3$14');

function a_IIY9Z338P3ujT42xe64g6XW3$13(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$15;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$13, 'a_IIY9Z338P3ujT42xe64g6XW3$13');

function a_IIY9Z338P3ujT42xe64g6XW3$16(s) {
  var t_actRes_16 = s.rt.returnedFrom.result;
  var t_infix_17 = (ok1(s, t_actRes_16) && (t_actRes_16 === 5));
  ok1(s, t_infix_17);
  if (t_infix_17) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jo0");
  return s.rt.enter(a_kHjoP3bQr90dtf5evP9mBB5i(s, a_IIY9Z338P3ujT42xe64g6XW3$18));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$17;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$16, 'a_IIY9Z338P3ujT42xe64g6XW3$16');

function a_IIY9Z338P3ujT42xe64g6XW3$19(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jp");
  var t_libcall_18 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_18.invoke(t_libcall_18, a_IIY9Z338P3ujT42xe64g6XW3$20, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$23;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$19, 'a_IIY9Z338P3ujT42xe64g6XW3$19');

function a_IIY9Z338P3ujT42xe64g6XW3$18(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$17;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$18, 'a_IIY9Z338P3ujT42xe64g6XW3$18');

function a_IIY9Z338P3ujT42xe64g6XW3$17(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$19;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$17, 'a_IIY9Z338P3ujT42xe64g6XW3$17');

function a_IIY9Z338P3ujT42xe64g6XW3$20(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  var t_infix_20 = (ok1(s, t_actRes_19) && (t_actRes_19 === 6));
  ok1(s, t_infix_20);
  if (t_infix_20) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jt0");
  return s.rt.enter(a_xPAVQNHlIfSzyJlkqW3nUxC5(s, a_IIY9Z338P3ujT42xe64g6XW3$22));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$21;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$20, 'a_IIY9Z338P3ujT42xe64g6XW3$20');

function a_IIY9Z338P3ujT42xe64g6XW3$23(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.ju");
  var t_libcall_21 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_21.invoke(t_libcall_21, a_IIY9Z338P3ujT42xe64g6XW3$24, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$27;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$23, 'a_IIY9Z338P3ujT42xe64g6XW3$23');

function a_IIY9Z338P3ujT42xe64g6XW3$22(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$21;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$22, 'a_IIY9Z338P3ujT42xe64g6XW3$22');

function a_IIY9Z338P3ujT42xe64g6XW3$21(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$23;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$21, 'a_IIY9Z338P3ujT42xe64g6XW3$21');

function a_IIY9Z338P3ujT42xe64g6XW3$24(s) {
  var t_actRes_22 = s.rt.returnedFrom.result;
  var t_infix_23 = (ok1(s, t_actRes_22) && (t_actRes_22 === 7));
  ok1(s, t_infix_23);
  if (t_infix_23) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jy0");
  return s.rt.enter(a_h2mcdXSRWKK34sYoU2XKt9p2(s, a_IIY9Z338P3ujT42xe64g6XW3$26));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$25;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$24, 'a_IIY9Z338P3ujT42xe64g6XW3$24');

function a_IIY9Z338P3ujT42xe64g6XW3$27(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jz");
  var t_libcall_25 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_25.invoke(t_libcall_25, a_IIY9Z338P3ujT42xe64g6XW3$28, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$31;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$27, 'a_IIY9Z338P3ujT42xe64g6XW3$27');

function a_IIY9Z338P3ujT42xe64g6XW3$26(s) {
  var t_actRes_24 = s.rt.returnedFrom.result;
  t_actRes_24;
  return a_IIY9Z338P3ujT42xe64g6XW3$25;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$26, 'a_IIY9Z338P3ujT42xe64g6XW3$26');

function a_IIY9Z338P3ujT42xe64g6XW3$25(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$27;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$25, 'a_IIY9Z338P3ujT42xe64g6XW3$25');

function a_IIY9Z338P3ujT42xe64g6XW3$28(s) {
  var t_actRes_26 = s.rt.returnedFrom.result;
  var t_infix_27 = (ok1(s, t_actRes_26) && (t_actRes_26 === 8));
  ok1(s, t_infix_27);
  if (t_infix_27) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jD0");
  return s.rt.enter(a_ni3C6PJcwVWG7HQv9HW4oW80(s, a_IIY9Z338P3ujT42xe64g6XW3$30));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$29;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$28, 'a_IIY9Z338P3ujT42xe64g6XW3$28');

function a_IIY9Z338P3ujT42xe64g6XW3$31(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jE");
  var t_libcall_28 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_28.invoke(t_libcall_28, a_IIY9Z338P3ujT42xe64g6XW3$32, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$35;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$31, 'a_IIY9Z338P3ujT42xe64g6XW3$31');

function a_IIY9Z338P3ujT42xe64g6XW3$30(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$29;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$30, 'a_IIY9Z338P3ujT42xe64g6XW3$30');

function a_IIY9Z338P3ujT42xe64g6XW3$29(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$31;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$29, 'a_IIY9Z338P3ujT42xe64g6XW3$29');

function a_IIY9Z338P3ujT42xe64g6XW3$32(s) {
  var t_actRes_29 = s.rt.returnedFrom.result;
  var t_infix_30 = (ok1(s, t_actRes_29) && (t_actRes_29 === 9));
  ok1(s, t_infix_30);
  if (t_infix_30) {
  (s.t_elseIf_0 = false);
  (s.pc = "0.jI0");
  return s.rt.enter(a_xA9tjmQ9MUYe4E3spiOSinjg(s, a_IIY9Z338P3ujT42xe64g6XW3$34));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$33;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$32, 'a_IIY9Z338P3ujT42xe64g6XW3$32');

function a_IIY9Z338P3ujT42xe64g6XW3$35(s) {
  if (s.t_elseIf_0) {
  (s.pc = "0.jJ");
  var t_libcall_31 = s.libs["EQQil0nbJx3NHUknxgVqAHWW"]["index"](s);
  return s.rt.enter(t_libcall_31.invoke(t_libcall_31, a_IIY9Z338P3ujT42xe64g6XW3$36, s.$level));
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$39;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$35, 'a_IIY9Z338P3ujT42xe64g6XW3$35');

function a_IIY9Z338P3ujT42xe64g6XW3$34(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$33;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$34, 'a_IIY9Z338P3ujT42xe64g6XW3$34');

function a_IIY9Z338P3ujT42xe64g6XW3$33(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$35;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$33, 'a_IIY9Z338P3ujT42xe64g6XW3$33');

function a_IIY9Z338P3ujT42xe64g6XW3$36(s) {
  var t_actRes_32 = s.rt.returnedFrom.result;
  var t_infix_33 = (ok1(s, t_actRes_32) && (t_actRes_32 === 10));
  ok1(s, t_infix_33);
  if (t_infix_33) {
  (s.pc = "0.jN0");
  return s.rt.enter(a_ftl4xnHvw3znFN4f4e98u8cS(s, a_IIY9Z338P3ujT42xe64g6XW3$38));
  } else {
  (s.pc = "0.jO0");
  null;
  }
  return a_IIY9Z338P3ujT42xe64g6XW3$37;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$36, 'a_IIY9Z338P3ujT42xe64g6XW3$36');

function a_IIY9Z338P3ujT42xe64g6XW3$39(s) {
  return s.rt.leave();
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$39, 'a_IIY9Z338P3ujT42xe64g6XW3$39');

function a_IIY9Z338P3ujT42xe64g6XW3$38(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$37;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$38, 'a_IIY9Z338P3ujT42xe64g6XW3$38');

function a_IIY9Z338P3ujT42xe64g6XW3$37(s) {
  return a_IIY9Z338P3ujT42xe64g6XW3$39;
}
cs.registerStep(a_IIY9Z338P3ujT42xe64g6XW3$37, 'a_IIY9Z338P3ujT42xe64g6XW3$37');

/* ACTION: level 3 */
function a_xu8JC55CM3COq4HGwWvQXhfz(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xu8JC55CM3COq4HGwWvQXhfz$0;
  s.name = "level 3";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 3", "xu8JC55CM3COq4HGwWvQXhfz", a_xu8JC55CM3COq4HGwWvQXhfz, false);

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

function a_xu8JC55CM3COq4HGwWvQXhfz$0(s) {
  (s.pc = "0.o0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.o3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "Level 3\u002c change board", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.o6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.o9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_xu8JC55CM3COq4HGwWvQXhfz$0, 'a_xu8JC55CM3COq4HGwWvQXhfz$0');

/* ACTION: level 9 */
function a_xA9tjmQ9MUYe4E3spiOSinjg(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xA9tjmQ9MUYe4E3spiOSinjg$0;
  s.name = "level 9";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 9", "xA9tjmQ9MUYe4E3spiOSinjg", a_xA9tjmQ9MUYe4E3spiOSinjg, false);

function a_xA9tjmQ9MUYe4E3spiOSinjg$0(s) {
  (s.pc = "0.t0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.t3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "Level 9\u003a Change this board", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.t6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.t9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_xA9tjmQ9MUYe4E3spiOSinjg$0, 'a_xA9tjmQ9MUYe4E3spiOSinjg$0');

/* ACTION: level 4 */
function a_irMlYM9HPRNBjvqEaal60hnX(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_irMlYM9HPRNBjvqEaal60hnX$0;
  s.name = "level 4";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 4", "irMlYM9HPRNBjvqEaal60hnX", a_irMlYM9HPRNBjvqEaal60hnX, false);

function a_irMlYM9HPRNBjvqEaal60hnX$0(s) {
  (s.pc = "0.y0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.y3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 4\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.y6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.y9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_irMlYM9HPRNBjvqEaal60hnX$0, 'a_irMlYM9HPRNBjvqEaal60hnX$0');

/* ACTION: level 5 */
function a_kHjoP3bQr90dtf5evP9mBB5i(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_kHjoP3bQr90dtf5evP9mBB5i$0;
  s.name = "level 5";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 5", "kHjoP3bQr90dtf5evP9mBB5i", a_kHjoP3bQr90dtf5evP9mBB5i, false);

function a_kHjoP3bQr90dtf5evP9mBB5i$0(s) {
  (s.pc = "0.D0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.D3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 5\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.D6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.D9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_kHjoP3bQr90dtf5evP9mBB5i$0, 'a_kHjoP3bQr90dtf5evP9mBB5i$0');

/* ACTION: level 6 */
function a_xPAVQNHlIfSzyJlkqW3nUxC5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xPAVQNHlIfSzyJlkqW3nUxC5$0;
  s.name = "level 6";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 6", "xPAVQNHlIfSzyJlkqW3nUxC5", a_xPAVQNHlIfSzyJlkqW3nUxC5, false);

function a_xPAVQNHlIfSzyJlkqW3nUxC5$0(s) {
  (s.pc = "0.I0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.I3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 6\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.I6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.I9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_xPAVQNHlIfSzyJlkqW3nUxC5$0, 'a_xPAVQNHlIfSzyJlkqW3nUxC5$0');

/* ACTION: level 7 */
function a_h2mcdXSRWKK34sYoU2XKt9p2(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_h2mcdXSRWKK34sYoU2XKt9p2$0;
  s.name = "level 7";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 7", "h2mcdXSRWKK34sYoU2XKt9p2", a_h2mcdXSRWKK34sYoU2XKt9p2, true);

function a_h2mcdXSRWKK34sYoU2XKt9p2$0(s) {
  (s.pc = "0.N0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.N3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 7\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.N6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.N9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_h2mcdXSRWKK34sYoU2XKt9p2$0, 'a_h2mcdXSRWKK34sYoU2XKt9p2$0');

/* ACTION: level 8 */
function a_ni3C6PJcwVWG7HQv9HW4oW80(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ni3C6PJcwVWG7HQv9HW4oW80$0;
  s.name = "level 8";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 8", "ni3C6PJcwVWG7HQv9HW4oW80", a_ni3C6PJcwVWG7HQv9HW4oW80, false);

function a_ni3C6PJcwVWG7HQv9HW4oW80$0(s) {
  (s.pc = "0.S0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.S3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 8\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.S6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.S9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_ni3C6PJcwVWG7HQv9HW4oW80$0, 'a_ni3C6PJcwVWG7HQv9HW4oW80$0');

/* ACTION: level 10 */
function a_ftl4xnHvw3znFN4f4e98u8cS(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_ftl4xnHvw3znFN4f4e98u8cS$0;
  s.name = "level 10";
  s.$board = undefined;
  s.$Change_Text = undefined;
  return s;
}
cs.registerAction("level 10", "ftl4xnHvw3znFN4f4e98u8cS", a_ftl4xnHvw3znFN4f4e98u8cS, false);

function a_ftl4xnHvw3znFN4f4e98u8cS$0(s) {
  (s.pc = "0.X0");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.$board = t_call_0);
  (s.pc = "0.X3");
  var t_call_1 = (ok1(s, s.$board) && s.$board.create_text(100, 20, 40, "This is level 10\u000aChange this board for you game", s));
  s.rt.markAllocated(t_call_1);
  (s.$Change_Text = t_call_1);
  (s.pc = "0.X6");
  s.rt.logObjectMutation(s.$Change_Text);
  (ok1(s, s.$Change_Text) && s.$Change_Text.set_pos(100, 240, s));
  (s.pc = "0.X9");
  var t_call_2 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$Change_Text);
  (ok2(s, s.$Change_Text, t_call_2) && s.$Change_Text.set_color(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_ftl4xnHvw3znFN4f4e98u8cS$0, 'a_ftl4xnHvw3znFN4f4e98u8cS$0');

cs.registerArtResource("String_", "$xkhETEi1l1PQYLRW76223SfM", "data\u003atext\u002fplain\u003bbase64\u002cVGhlIGNyZWRpdCBpbmZvcm1hdGlvbiBpcyBzdG9yZWQgaW4gYSBzdHJpbmcgdGhhdCBpcyBpbiB0aGUgJ2FydCcgb3IgQXJ0IFJlc291cmNlcyBvbiB0aGUgbGVmdCBwYXJ0IG9mIHRoZSBJREUuClRoaXMgaXMgd2hlcmUgc291bmRzIGFuZCBwaWN0dXJlcyBhcmUgc3RvcmVkIGFzIHdlbGwu");
/* ACTION: level 1 */
function a_xfXpHcNr43AS044YnOp4M6zv(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xfXpHcNr43AS044YnOp4M6zv$0;
  s.name = "level 1";
  s.$board = undefined;
  s.$bubbles = undefined;
  s.$j = undefined;
  s.$bubble2 = undefined;
  s.$tapped2 = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$splatter2 = undefined;
  s.$anim2 = undefined;
  s.$i = undefined;
  s.$bubble = undefined;
  s.$tapped = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  s.$splatter = undefined;
  s.$anim = undefined;
  s.$perform = undefined;
  s.$sprite = undefined;
  return s;
}
cs.registerAction("level 1", "xfXpHcNr43AS044YnOp4M6zv", a_xfXpHcNr43AS044YnOp4M6zv, true);

function a_xfXpHcNr43AS044YnOp4M6zv$0(s) {
  (s.pc = "0.68.0");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_xfXpHcNr43AS044YnOp4M6zv$1);
  (ok1(s, /* jungle */ s.d.$eUb4MRxj4dRxV6U5UEGA47Vh) && lib.Wall.set_background_picture(/* jungle */ s.d.$eUb4MRxj4dRxV6U5UEGA47Vh, t_resumeCtx_0));
  return a_xfXpHcNr43AS044YnOp4M6zv$1;
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$0, 'a_xfXpHcNr43AS044YnOp4M6zv$0');

function a_xfXpHcNr43AS044YnOp4M6zv$1(s) {
  (s.pc = "0.68.3");
  var t_libcall_1 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["start"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_xfXpHcNr43AS044YnOp4M6zv$2));
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$1, 'a_xfXpHcNr43AS044YnOp4M6zv$1');

function a_xfXpHcNr43AS044YnOp4M6zv$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_2);
  (s.pc = "0.68.6");
  var t_call_3 = (ok1(s, s.$board) && s.$board.create_sprite_set(s));
  (s.$bubbles = t_call_3);
  (s.pc = "0.68.9");
  s.t_bnd_4 = 5;
  (s.$j = 0);
  return a_xfXpHcNr43AS044YnOp4M6zv$3;
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$2, 'a_xfXpHcNr43AS044YnOp4M6zv$2');

function a_xfXpHcNr43AS044YnOp4M6zv$3(s) {
  if ((s.$j < s.t_bnd_4)) {
  (s.pc = "0.68.d0");
  var t_resumeCtx_5 = s.rt.getBlockingResumeCtx(a_xfXpHcNr43AS044YnOp4M6zv$5);
  var t_call_6 = (ok2(s, s.$board, /* Banana */ s.d.$xOuTIXKuNdEFhVAmcwv2NuZM) && s.$board.create_picture(/* Banana */ s.d.$xOuTIXKuNdEFhVAmcwv2NuZM, t_resumeCtx_5));
  return a_xfXpHcNr43AS044YnOp4M6zv$5;
  }
  (s.pc = "0.68.d");
  s.t_bnd_18 = 10;
  (s.$i = 0);
  return a_xfXpHcNr43AS044YnOp4M6zv$7;
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$3, 'a_xfXpHcNr43AS044YnOp4M6zv$3');

function a_xfXpHcNr43AS044YnOp4M6zv$5(s) {
  var t_pauseRes_7 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_7);
  (s.$bubble2 = t_pauseRes_7);
  (s.pc = "0.68.d3");
  s.rt.logObjectMutation(s.$bubbles);
  var t_call_8 = (ok2(s, s.$bubbles, s.$bubble2) && s.$bubbles.add(s.$bubble2, s));
  t_call_8;
  (s.pc = "0.68.d6");
  var t_call_9 = lib.Math_.random_range(50, 100, s);
  s.rt.logObjectMutation(s.$bubble2);
  (ok2(s, s.$bubble2, t_call_9) && s.$bubble2.set_width(t_call_9, s));
  (s.pc = "0.68.d9");
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_11 = (ok1(s, t_call_10) && lib.Math_.random_range(0, t_call_10, s));
  s.rt.logObjectMutation(s.$bubble2);
  (ok2(s, s.$bubble2, t_call_11) && s.$bubble2.set_x(t_call_11, s));
  (s.pc = "0.68.dc");
  var t_call_12 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_13 = (ok1(s, t_call_12) && lib.Math_.random_range(0, t_call_12, s));
  s.rt.logObjectMutation(s.$bubble2);
  (ok2(s, s.$bubble2, t_call_13) && s.$bubble2.set_y(t_call_13, s));
  (s.pc = "0.68.df");
  s.rt.logObjectMutation(s.$bubble2);
  (ok1(s, s.$bubble2) && s.$bubble2.set_speed_y(100, s));
  (s.pc = "0.68.di");
  s.rt.logObjectMutation(s.$bubble2);
  (ok1(s, s.$bubble2) && s.$bubble2.set_angular_speed(50, s));
  (s.pc = "0.68.dp0");
  var t_lmbv_14 = s.$bubble2;
  var t_lmbv_15 = s.$board;
  var t_lmbProxy_16 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_xfXpHcNr43AS044YnOp4M6zv$6(t_lmbProxy_16(la0), la1, la2, la3, t_lmbv_14, t_lmbv_15) });
  (s.pc = "0.68.dl");
  var t_call_17 = (ok2(s, s.$bubble2, s.$tapped2) && s.$bubble2.on_tap(s.$tapped2, s));
  t_call_17;
  (s.$j++);
  return a_xfXpHcNr43AS044YnOp4M6zv$3;
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$5, 'a_xfXpHcNr43AS044YnOp4M6zv$5');

function a_xfXpHcNr43AS044YnOp4M6zv$7(s) {
  if ((s.$i < s.t_bnd_18)) {
  (s.pc = "0.68.h0");
  var t_resumeCtx_19 = s.rt.getBlockingResumeCtx(a_xfXpHcNr43AS044YnOp4M6zv$9);
  var t_call_20 = (ok2(s, s.$board, /* Fruit Orange */ s.d.$Zupi41lUZRTY6xJqvVAZ2tuH) && s.$board.create_picture(/* Fruit Orange */ s.d.$Zupi41lUZRTY6xJqvVAZ2tuH, t_resumeCtx_19));
  return a_xfXpHcNr43AS044YnOp4M6zv$9;
  }
  (s.pc = "0.68.h");
  null;
  (s.pc = "0.68.o0");
  var t_lmbv_32 = s.$bubbles;
  var t_lmbv_33 = s.$board;
  var t_lmbProxy_34 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_xfXpHcNr43AS044YnOp4M6zv$11(t_lmbProxy_34(la0), la1, t_lmbv_32, t_lmbv_33) });
  (s.pc = "0.68.k");
  var t_call_35 = (ok2(s, s.$board, s.$perform) && s.$board.add_on_every_frame(s.$perform, s));
  t_call_35;
  (s.pc = "0.68.o");
  var t_libcall_36 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_36.invoke(t_libcall_36, a_xfXpHcNr43AS044YnOp4M6zv$12, 30));
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$7, 'a_xfXpHcNr43AS044YnOp4M6zv$7');

function a_xfXpHcNr43AS044YnOp4M6zv$9(s) {
  var t_pauseRes_21 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_21);
  (s.$bubble = t_pauseRes_21);
  (s.pc = "0.68.h3");
  s.rt.logObjectMutation(s.$bubbles);
  var t_call_22 = (ok2(s, s.$bubbles, s.$bubble) && s.$bubbles.add(s.$bubble, s));
  t_call_22;
  (s.pc = "0.68.h6");
  var t_call_23 = lib.Math_.random_range(50, 100, s);
  s.rt.logObjectMutation(s.$bubble);
  (ok2(s, s.$bubble, t_call_23) && s.$bubble.set_width(t_call_23, s));
  (s.pc = "0.68.h9");
  var t_call_24 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_25 = (ok1(s, t_call_24) && lib.Math_.random_range(0, t_call_24, s));
  s.rt.logObjectMutation(s.$bubble);
  (ok2(s, s.$bubble, t_call_25) && s.$bubble.set_x(t_call_25, s));
  (s.pc = "0.68.hc");
  var t_call_26 = (ok1(s, s.$board) && s.$board.height(s));
  var t_call_27 = (ok1(s, t_call_26) && lib.Math_.random_range(0, t_call_26, s));
  s.rt.logObjectMutation(s.$bubble);
  (ok2(s, s.$bubble, t_call_27) && s.$bubble.set_y(t_call_27, s));
  (s.pc = "0.68.hf");
  s.rt.logObjectMutation(s.$bubble);
  (ok1(s, s.$bubble) && s.$bubble.set_speed_y(150, s));
  (s.pc = "0.68.hi");
  s.rt.logObjectMutation(s.$bubble);
  (ok1(s, s.$bubble) && s.$bubble.set_angular_speed(50, s));
  (s.pc = "0.68.hp0");
  var t_lmbv_28 = s.$bubble;
  var t_lmbv_29 = s.$board;
  var t_lmbProxy_30 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_xfXpHcNr43AS044YnOp4M6zv$10(t_lmbProxy_30(la0), la1, la2, la3, t_lmbv_28, t_lmbv_29) });
  (s.pc = "0.68.hl");
  var t_call_31 = (ok2(s, s.$bubble, s.$tapped) && s.$bubble.on_tap(s.$tapped, s));
  t_call_31;
  (s.$i++);
  return a_xfXpHcNr43AS044YnOp4M6zv$7;
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$9, 'a_xfXpHcNr43AS044YnOp4M6zv$9');

function a_xfXpHcNr43AS044YnOp4M6zv$12(s) {
  var t_actRes_37 = s.rt.returnedFrom.result;
  t_actRes_37;
  return s.rt.leave();
}
cs.registerStep(a_xfXpHcNr43AS044YnOp4M6zv$12, 'a_xfXpHcNr43AS044YnOp4M6zv$12');

/* ACTION: a_xfXpHcNr43AS044YnOp4M6zv::lambda::6 */
function a_a_xfXpHcNr43AS044YnOp4M6zv$6(previous, returnAddr, $x, $y, $bubble2, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xfXpHcNr43AS044YnOp4M6zv$6$0;
  s.name = "level 1";
  s.$bubble2 = $bubble2;
  s.$board = $board;
  s.$splatter2 = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim2 = undefined;
  return s;
}
cs.registerLambda("a_xfXpHcNr43AS044YnOp4M6zv\u003a\u003alambda\u003a\u003a6", "a_xfXpHcNr43AS044YnOp4M6zv$6", a_a_xfXpHcNr43AS044YnOp4M6zv$6, true);

function a_a_xfXpHcNr43AS044YnOp4M6zv$6$0(s) {
  (s.pc = "0.68.dp20");
  var t_infix_0 = (0 - 300);
  s.rt.logObjectMutation(s.$bubble2);
  (ok2(s, s.$bubble2, t_infix_0) && s.$bubble2.set_y(t_infix_0, s));
  (s.pc = "0.68.dp23");
  var t_call_1 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Math_.random_range(0, t_call_1, s));
  s.rt.logObjectMutation(s.$bubble2);
  (ok2(s, s.$bubble2, t_call_2) && s.$bubble2.set_x(t_call_2, s));
  (s.pc = "0.68.dp26");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_xfXpHcNr43AS044YnOp4M6zv$6$1);
  (ok1(s, /* Ding */ s.d.$xMQZhvbJRiRdr4YhBcV2PxM2) && /* Ding */ s.d.$xMQZhvbJRiRdr4YhBcV2PxM2.play(t_resumeCtx_3));
  return a_a_xfXpHcNr43AS044YnOp4M6zv$6$1;
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$6$0, 'a_a_xfXpHcNr43AS044YnOp4M6zv$6$0');

function a_a_xfXpHcNr43AS044YnOp4M6zv$6$1(s) {
  (s.pc = "0.68.dp29");
  var t_libcall_4 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["add score"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_a_xfXpHcNr43AS044YnOp4M6zv$6$2, 20));
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$6$1, 'a_a_xfXpHcNr43AS044YnOp4M6zv$6$1');

function a_a_xfXpHcNr43AS044YnOp4M6zv$6$2(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  (s.pc = "0.68.dp2c");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_xfXpHcNr43AS044YnOp4M6zv$6$3);
  var t_call_7 = (ok2(s, s.$board, /* Mango Splat */ s.d.$sZec9GOF6XS2fJcQnRWM1oV1) && s.$board.create_picture(/* Mango Splat */ s.d.$sZec9GOF6XS2fJcQnRWM1oV1, t_resumeCtx_6));
  return a_a_xfXpHcNr43AS044YnOp4M6zv$6$3;
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$6$2, 'a_a_xfXpHcNr43AS044YnOp4M6zv$6$2');

function a_a_xfXpHcNr43AS044YnOp4M6zv$6$3(s) {
  var t_pauseRes_8 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_8);
  (s.$splatter2 = t_pauseRes_8);
  (s.pc = "0.68.dp2f");
  s.rt.logObjectMutation(s.$splatter2);
  (ok3(s, s.$splatter2, s.$x, s.$y) && s.$splatter2.set_pos(s.$x, s.$y, s));
  (s.pc = "0.68.dp2i");
  var t_call_9 = (ok1(s, s.$bubble2) && s.$bubble2.width(s));
  s.rt.logObjectMutation(s.$splatter2);
  (ok2(s, s.$splatter2, t_call_9) && s.$splatter2.set_width(t_call_9, s));
  (s.pc = "0.68.dp2l");
  s.rt.logObjectMutation(s.$splatter2);
  (ok1(s, s.$splatter2) && s.$splatter2.set_speed_y(15, s));
  (s.pc = "0.68.dp2o");
  var t_infix_10 = (0 - 1);
  s.rt.logObjectMutation(s.$splatter2);
  (ok2(s, s.$splatter2, t_infix_10) && s.$splatter2.set_z_index(t_infix_10, s));
  (s.pc = "0.68.dp2r");
  var t_call_11 = (ok1(s, s.$splatter2) && s.$splatter2.create_animation(s));
  (s.$anim2 = t_call_11);
  (s.pc = "0.68.dp2u");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.puff_out(0.5, "cubic", 1.5, s));
  (s.pc = "0.68.dp2x");
  s.rt.logObjectMutation(s.$anim2);
  (ok1(s, s.$anim2) && s.$anim2.delete_(s));
  return s.rt.leave();
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$6$3, 'a_a_xfXpHcNr43AS044YnOp4M6zv$6$3');

/* ACTION: a_xfXpHcNr43AS044YnOp4M6zv::lambda::10 */
function a_a_xfXpHcNr43AS044YnOp4M6zv$10(previous, returnAddr, $x, $y, $bubble, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xfXpHcNr43AS044YnOp4M6zv$10$0;
  s.name = "level 1";
  s.$bubble = $bubble;
  s.$board = $board;
  s.$splatter = undefined;
  s.$x = $x;
  s.$y = $y;
  s.$anim = undefined;
  return s;
}
cs.registerLambda("a_xfXpHcNr43AS044YnOp4M6zv\u003a\u003alambda\u003a\u003a10", "a_xfXpHcNr43AS044YnOp4M6zv$10", a_a_xfXpHcNr43AS044YnOp4M6zv$10, true);

function a_a_xfXpHcNr43AS044YnOp4M6zv$10$0(s) {
  (s.pc = "0.68.hp20");
  var t_infix_0 = (0 - 300);
  s.rt.logObjectMutation(s.$bubble);
  (ok2(s, s.$bubble, t_infix_0) && s.$bubble.set_y(t_infix_0, s));
  (s.pc = "0.68.hp23");
  var t_call_1 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Math_.random_range(0, t_call_1, s));
  s.rt.logObjectMutation(s.$bubble);
  (ok2(s, s.$bubble, t_call_2) && s.$bubble.set_x(t_call_2, s));
  (s.pc = "0.68.hp26");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_a_xfXpHcNr43AS044YnOp4M6zv$10$1);
  (ok1(s, /* Ding */ s.d.$xMQZhvbJRiRdr4YhBcV2PxM2) && /* Ding */ s.d.$xMQZhvbJRiRdr4YhBcV2PxM2.play(t_resumeCtx_3));
  return a_a_xfXpHcNr43AS044YnOp4M6zv$10$1;
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$10$0, 'a_a_xfXpHcNr43AS044YnOp4M6zv$10$0');

function a_a_xfXpHcNr43AS044YnOp4M6zv$10$1(s) {
  (s.pc = "0.68.hp29");
  var t_libcall_4 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["add score"](s);
  return s.rt.enter(t_libcall_4.invoke(t_libcall_4, a_a_xfXpHcNr43AS044YnOp4M6zv$10$2, 10));
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$10$1, 'a_a_xfXpHcNr43AS044YnOp4M6zv$10$1');

function a_a_xfXpHcNr43AS044YnOp4M6zv$10$2(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  (s.pc = "0.68.hp2c");
  var t_resumeCtx_6 = s.rt.getBlockingResumeCtx(a_a_xfXpHcNr43AS044YnOp4M6zv$10$3);
  var t_call_7 = (ok2(s, s.$board, /* Mango Splat */ s.d.$sZec9GOF6XS2fJcQnRWM1oV1) && s.$board.create_picture(/* Mango Splat */ s.d.$sZec9GOF6XS2fJcQnRWM1oV1, t_resumeCtx_6));
  return a_a_xfXpHcNr43AS044YnOp4M6zv$10$3;
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$10$2, 'a_a_xfXpHcNr43AS044YnOp4M6zv$10$2');

function a_a_xfXpHcNr43AS044YnOp4M6zv$10$3(s) {
  var t_pauseRes_8 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_8);
  (s.$splatter = t_pauseRes_8);
  (s.pc = "0.68.hp2f");
  s.rt.logObjectMutation(s.$splatter);
  (ok3(s, s.$splatter, s.$x, s.$y) && s.$splatter.set_pos(s.$x, s.$y, s));
  (s.pc = "0.68.hp2i");
  var t_call_9 = (ok1(s, s.$bubble) && s.$bubble.width(s));
  s.rt.logObjectMutation(s.$splatter);
  (ok2(s, s.$splatter, t_call_9) && s.$splatter.set_width(t_call_9, s));
  (s.pc = "0.68.hp2l");
  s.rt.logObjectMutation(s.$splatter);
  (ok1(s, s.$splatter) && s.$splatter.set_speed_y(15, s));
  (s.pc = "0.68.hp2o");
  var t_infix_10 = (0 - 1);
  s.rt.logObjectMutation(s.$splatter);
  (ok2(s, s.$splatter, t_infix_10) && s.$splatter.set_z_index(t_infix_10, s));
  (s.pc = "0.68.hp2r");
  var t_call_11 = (ok1(s, s.$splatter) && s.$splatter.create_animation(s));
  (s.$anim = t_call_11);
  (s.pc = "0.68.hp2u");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.puff_out(0.5, "cubic", 1.5, s));
  (s.pc = "0.68.hp2x");
  s.rt.logObjectMutation(s.$anim);
  (ok1(s, s.$anim) && s.$anim.delete_(s));
  return s.rt.leave();
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$10$3, 'a_a_xfXpHcNr43AS044YnOp4M6zv$10$3');

/* ACTION: a_xfXpHcNr43AS044YnOp4M6zv::lambda::11 */
function a_a_xfXpHcNr43AS044YnOp4M6zv$11(previous, returnAddr, $bubbles, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xfXpHcNr43AS044YnOp4M6zv$11$0;
  s.name = "level 1";
  s.$bubbles = $bubbles;
  s.$sprite = undefined;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_xfXpHcNr43AS044YnOp4M6zv\u003a\u003alambda\u003a\u003a11", "a_xfXpHcNr43AS044YnOp4M6zv$11", a_a_xfXpHcNr43AS044YnOp4M6zv$11, true);

function a_a_xfXpHcNr43AS044YnOp4M6zv$11$0(s) {
  (s.pc = "0.68.o20");
  s.t_collArr_0 = (ok1(s, s.$bubbles) && s.$bubbles.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_xfXpHcNr43AS044YnOp4M6zv$11$1;
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$11$0, 'a_a_xfXpHcNr43AS044YnOp4M6zv$11$0');

function a_a_xfXpHcNr43AS044YnOp4M6zv$11$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  var t_elseIf_2 = true;
  (s.pc = "0.68.o250");
  var t_call_3 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_call_4 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_5 = (ok2(s, t_call_3, t_call_4) && (t_call_3 > t_call_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "0.68.o2540");
  var t_infix_6 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_6) && s.$sprite.set_y(t_infix_6, s));
  (s.pc = "0.68.o2543");
  var t_call_7 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_8 = (ok1(s, t_call_7) && lib.Math_.random_range(0, t_call_7, s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_8) && s.$sprite.set_x(t_call_8, s));
  } else {
  (s.pc = "0.68.o2550");
  null;
  }
  return a_a_xfXpHcNr43AS044YnOp4M6zv$11$1;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_xfXpHcNr43AS044YnOp4M6zv$11$1, 'a_a_xfXpHcNr43AS044YnOp4M6zv$11$1');

cs.registerArtResource("Picture", "$eUb4MRxj4dRxV6U5UEGA47Vh", ".\u002fart\u002fl0_eUb4MRxj4dRxV6U5UEGA47Vh");
cs.registerArtResource("Picture", "$xOuTIXKuNdEFhVAmcwv2NuZM", ".\u002fart\u002fl0_xOuTIXKuNdEFhVAmcwv2NuZM");
cs.registerArtResource("Sound", "$xMQZhvbJRiRdr4YhBcV2PxM2", ".\u002fart\u002fl0_xMQZhvbJRiRdr4YhBcV2PxM2");
cs.registerArtResource("Picture", "$sZec9GOF6XS2fJcQnRWM1oV1", ".\u002fart\u002fl0_sZec9GOF6XS2fJcQnRWM1oV1");
cs.registerArtResource("Picture", "$Zupi41lUZRTY6xJqvVAZ2tuH", ".\u002fart\u002fl0_Zupi41lUZRTY6xJqvVAZ2tuH");
/* ACTION: level 2 */
function a_xA6lcnWLloiuf25OUgdE8UG6(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xA6lcnWLloiuf25OUgdE8UG6$0;
  s.name = "level 2";
  s.$board = undefined;
  s.$avatar = undefined;
  s.$perform = undefined;
  s.$p = undefined;
  s.$rocks = undefined;
  s.$i = undefined;
  s.$rock = undefined;
  s.$perform2 = undefined;
  s.$sprite = undefined;
  return s;
}
cs.registerAction("level 2", "xA6lcnWLloiuf25OUgdE8UG6", a_xA6lcnWLloiuf25OUgdE8UG6, true);

function a_xA6lcnWLloiuf25OUgdE8UG6$0(s) {
  (s.pc = "0.78.0");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_xA6lcnWLloiuf25OUgdE8UG6$1);
  (ok1(s, /* Field */ s.d.$gSnzRDm41CG7pk6LKci3L3RI) && lib.Wall.set_background_picture(/* Field */ s.d.$gSnzRDm41CG7pk6LKci3L3RI, t_resumeCtx_0));
  return a_xA6lcnWLloiuf25OUgdE8UG6$1;
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$0, 'a_xA6lcnWLloiuf25OUgdE8UG6$0');

function a_xA6lcnWLloiuf25OUgdE8UG6$1(s) {
  (s.pc = "0.78.3");
  var t_libcall_1 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["start"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_xA6lcnWLloiuf25OUgdE8UG6$2));
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$1, 'a_xA6lcnWLloiuf25OUgdE8UG6$1');

function a_xA6lcnWLloiuf25OUgdE8UG6$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_2);
  (s.pc = "0.78.6");
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_xA6lcnWLloiuf25OUgdE8UG6$3);
  var t_call_4 = (ok2(s, s.$board, /* flappy big pig  */ s.d.$pqm5M7kxABfBhkwSFb3ehKhS) && s.$board.create_picture(/* flappy big pig  */ s.d.$pqm5M7kxABfBhkwSFb3ehKhS, t_resumeCtx_3));
  return a_xA6lcnWLloiuf25OUgdE8UG6$3;
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$2, 'a_xA6lcnWLloiuf25OUgdE8UG6$2');

function a_xA6lcnWLloiuf25OUgdE8UG6$3(s) {
  var t_pauseRes_5 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_5);
  (s.$avatar = t_pauseRes_5);
  (s.pc = "0.78.9");
  s.rt.logObjectMutation(s.$avatar);
  (ok1(s, s.$avatar) && s.$avatar.set_width(100, s));
  (s.pc = "0.78.g0");
  var t_lmbv_6 = s.$avatar;
  var t_lmbv_7 = s.$board;
  var t_lmbProxy_8 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_xA6lcnWLloiuf25OUgdE8UG6$4(t_lmbProxy_8(la0), la1, t_lmbv_6, t_lmbv_7) });
  (s.pc = "0.78.c");
  var t_call_9 = (ok2(s, s.$board, s.$perform) && s.$board.add_on_every_frame(s.$perform, s));
  t_call_9;
  (s.pc = "0.78.g");
  var t_call_10 = (ok1(s, s.$board) && s.$board.create_sprite_set(s));
  (s.$rocks = t_call_10);
  (s.pc = "0.78.j");
  s.t_bnd_11 = 10;
  (s.$i = 0);
  return a_xA6lcnWLloiuf25OUgdE8UG6$5;
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$3, 'a_xA6lcnWLloiuf25OUgdE8UG6$3');

function a_xA6lcnWLloiuf25OUgdE8UG6$5(s) {
  if ((s.$i < s.t_bnd_11)) {
  (s.pc = "0.78.n0");
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_xA6lcnWLloiuf25OUgdE8UG6$7);
  var t_call_13 = (ok2(s, s.$board, /* coin */ s.d.$DhZyOXGKxvkLcxwd7e4yTotN) && s.$board.create_picture(/* coin */ s.d.$DhZyOXGKxvkLcxwd7e4yTotN, t_resumeCtx_12));
  return a_xA6lcnWLloiuf25OUgdE8UG6$7;
  }
  (s.pc = "0.78.r0");
  var t_lmbv_22 = s.$rocks;
  var t_lmbv_23 = s.$board;
  var t_lmbv_24 = s.$avatar;
  var t_lmbProxy_25 = s.libs.mkLambdaProxy;
  (s.$perform2 = function(la0, la1) { return a_a_xA6lcnWLloiuf25OUgdE8UG6$8(t_lmbProxy_25(la0), la1, t_lmbv_22, t_lmbv_23, t_lmbv_24) });
  (s.pc = "0.78.n");
  var t_call_26 = (ok2(s, s.$board, s.$perform2) && s.$board.add_on_every_frame(s.$perform2, s));
  t_call_26;
  (s.pc = "0.78.r");
  var t_libcall_27 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_27.invoke(t_libcall_27, a_xA6lcnWLloiuf25OUgdE8UG6$9, 30));
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$5, 'a_xA6lcnWLloiuf25OUgdE8UG6$5');

function a_xA6lcnWLloiuf25OUgdE8UG6$7(s) {
  var t_pauseRes_14 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_14);
  (s.$rock = t_pauseRes_14);
  (s.pc = "0.78.n3");
  s.rt.logObjectMutation(s.$rocks);
  var t_call_15 = (ok2(s, s.$rocks, s.$rock) && s.$rocks.add(s.$rock, s));
  t_call_15;
  (s.pc = "0.78.n6");
  s.rt.logObjectMutation(s.$rock);
  (ok1(s, s.$rock) && s.$rock.set_speed_y(220, s));
  (s.pc = "0.78.n9");
  var t_call_16 = lib.Math_.random_range(50, 60, s);
  s.rt.logObjectMutation(s.$rock);
  (ok2(s, s.$rock, t_call_16) && s.$rock.set_width(t_call_16, s));
  (s.pc = "0.78.nc");
  var t_call_17 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_18 = (ok1(s, t_call_17) && lib.Math_.random_range(0, t_call_17, s));
  s.rt.logObjectMutation(s.$rock);
  (ok2(s, s.$rock, t_call_18) && s.$rock.set_x(t_call_18, s));
  (s.pc = "0.78.nf");
  var t_call_19 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_20 = (ok1(s, t_call_19) && (0 - t_call_19));
  var t_call_21 = (ok1(s, t_infix_20) && lib.Math_.random_range(t_infix_20, 0, s));
  s.rt.logObjectMutation(s.$rock);
  (ok2(s, s.$rock, t_call_21) && s.$rock.set_y(t_call_21, s));
  (s.$i++);
  return a_xA6lcnWLloiuf25OUgdE8UG6$5;
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$7, 'a_xA6lcnWLloiuf25OUgdE8UG6$7');

function a_xA6lcnWLloiuf25OUgdE8UG6$9(s) {
  var t_actRes_28 = s.rt.returnedFrom.result;
  t_actRes_28;
  return s.rt.leave();
}
cs.registerStep(a_xA6lcnWLloiuf25OUgdE8UG6$9, 'a_xA6lcnWLloiuf25OUgdE8UG6$9');

/* ACTION: a_xA6lcnWLloiuf25OUgdE8UG6::lambda::4 */
function a_a_xA6lcnWLloiuf25OUgdE8UG6$4(previous, returnAddr, $avatar, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xA6lcnWLloiuf25OUgdE8UG6$4$0;
  s.name = "level 2";
  s.$avatar = $avatar;
  s.$p = undefined;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_xA6lcnWLloiuf25OUgdE8UG6\u003a\u003alambda\u003a\u003a4", "a_xA6lcnWLloiuf25OUgdE8UG6$4", a_a_xA6lcnWLloiuf25OUgdE8UG6$4, true);

function a_a_xA6lcnWLloiuf25OUgdE8UG6$4$0(s) {
  (s.pc = "0.78.g20");
  var t_resumeCtx_0 = s.rt.getBlockingResumeCtx(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$1);
  var t_call_1 = lib.Senses.acceleration_quick(t_resumeCtx_0);
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$4$1;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$0, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$4$0');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$4$1(s) {
  var t_pauseRes_2 = s.pauseValue;
  (s.$p = t_pauseRes_2);
  (s.pc = "0.78.g23");
  var t_call_3 = (ok1(s, s.$p) && s.$p.x(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 * 500));
  s.rt.logObjectMutation(s.$avatar);
  (ok2(s, s.$avatar, t_infix_4) && s.$avatar.set_speed_x(t_infix_4, s));
  var t_elseIf_5 = true;
  (s.pc = "0.78.g26");
  var t_call_6 = (ok1(s, s.$avatar) && s.$avatar.x(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 < 0));
  var t_lazy_8 = t_infix_7;
  if ((ok1(s, t_lazy_8) && (!t_lazy_8))) {
  var t_call_9 = (ok1(s, s.$avatar) && s.$avatar.x(s));
  var t_call_10 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_11 = (ok2(s, t_call_9, t_call_10) && (t_call_9 > t_call_10));
  (t_lazy_8 = t_infix_11);
  }
  ok1(s, t_lazy_8);
  if (t_lazy_8) {
  (s.pc = "0.78.g2a0");
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$4);
  (ok1(s, /* laser sound effect */ s.d.$PrXAHSyjW56yHs2LLjXd4nDT) && /* laser sound effect */ s.d.$PrXAHSyjW56yHs2LLjXd4nDT.play(t_resumeCtx_12));
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$4$4;
  } else {
  (s.pc = "0.78.g2b0");
  null;
  }
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$4$3;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$1, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$4$1');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$4$4(s) {
  (s.pc = "0.78.g2a3");
  var t_libcall_13 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["remove life"](s);
  return s.rt.enter(t_libcall_13.invoke(t_libcall_13, a_a_xA6lcnWLloiuf25OUgdE8UG6$4$5, 3));
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$4, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$4$4');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$4$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$3, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$4$3');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$4$5(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$4$3;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$4$5, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$4$5');

/* ACTION: a_xA6lcnWLloiuf25OUgdE8UG6::lambda::8 */
function a_a_xA6lcnWLloiuf25OUgdE8UG6$8(previous, returnAddr, $rocks, $board, $avatar) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_xA6lcnWLloiuf25OUgdE8UG6$8$0;
  s.name = "level 2";
  s.$rocks = $rocks;
  s.$sprite = undefined;
  s.$board = $board;
  s.$avatar = $avatar;
  return s;
}
cs.registerLambda("a_xA6lcnWLloiuf25OUgdE8UG6\u003a\u003alambda\u003a\u003a8", "a_xA6lcnWLloiuf25OUgdE8UG6$8", a_a_xA6lcnWLloiuf25OUgdE8UG6$8, true);

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$0(s) {
  (s.pc = "0.78.r20");
  s.t_collArr_0 = (ok1(s, s.$rocks) && s.$rocks.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$1;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$0, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$0');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  var t_elseIf_2 = true;
  (s.pc = "0.78.r250");
  var t_call_3 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_call_4 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_5 = (ok2(s, t_call_3, t_call_4) && (t_call_3 > t_call_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "0.78.r2540");
  var t_infix_6 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_6) && s.$sprite.set_y(t_infix_6, s));
  (s.pc = "0.78.r2543");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$4);
  (ok1(s, /* A Tone (Bell) */ s.d.$v2zq5EBV4ACDELqsCz5Hh4xg) && /* A Tone (Bell) */ s.d.$v2zq5EBV4ACDELqsCz5Hh4xg.play(t_resumeCtx_7));
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$4;
  } else {
  (s.pc = "0.78.r2550");
  null;
  }
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$3;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$1, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$1');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$4(s) {
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$3;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$4, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$4');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$3(s) {
  var t_elseIf_8 = true;
  (s.pc = "0.78.r255");
  var t_call_9 = (ok2(s, s.$sprite, s.$avatar) && s.$sprite.overlaps_with(s.$avatar, s));
  ok1(s, t_call_9);
  if (t_call_9) {
  (s.pc = "0.78.r2590");
  var t_resumeCtx_10 = s.rt.getBlockingResumeCtx(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$6);
  (ok1(s, /* cling */ s.d.$No95D4oA6YQwPlF4OOHZ9i8o) && /* cling */ s.d.$No95D4oA6YQwPlF4OOHZ9i8o.play(t_resumeCtx_10));
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$6;
  } else {
  (s.pc = "0.78.r25a0");
  null;
  }
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$5;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$3, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$3');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$6(s) {
  (s.pc = "0.78.r2593");
  var t_libcall_11 = s.libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["add score"](s);
  return s.rt.enter(t_libcall_11.invoke(t_libcall_11, a_a_xA6lcnWLloiuf25OUgdE8UG6$8$7, 5));
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$6, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$6');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$5(s) {
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$1;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$5, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$5');

function a_a_xA6lcnWLloiuf25OUgdE8UG6$8$7(s) {
  var t_actRes_12 = s.rt.returnedFrom.result;
  t_actRes_12;
  (s.pc = "0.78.r2596");
  var t_infix_13 = (0 - 300);
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_13) && s.$sprite.set_y(t_infix_13, s));
  (s.pc = "0.78.r2599");
  var t_call_14 = (ok1(s, s.$board) && s.$board.width(s));
  var t_call_15 = (ok1(s, t_call_14) && lib.Math_.random_range(0, t_call_14, s));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_15) && s.$sprite.set_x(t_call_15, s));
  return a_a_xA6lcnWLloiuf25OUgdE8UG6$8$5;
}
cs.registerStep(a_a_xA6lcnWLloiuf25OUgdE8UG6$8$7, 'a_a_xA6lcnWLloiuf25OUgdE8UG6$8$7');

cs.registerArtResource("Sound", "$v2zq5EBV4ACDELqsCz5Hh4xg", ".\u002fart\u002fl0_v2zq5EBV4ACDELqsCz5Hh4xg");
cs.registerArtResource("Picture", "$gSnzRDm41CG7pk6LKci3L3RI", ".\u002fart\u002fl0_gSnzRDm41CG7pk6LKci3L3RI");
cs.registerArtResource("Picture", "$pqm5M7kxABfBhkwSFb3ehKhS", ".\u002fart\u002fl0_pqm5M7kxABfBhkwSFb3ehKhS");
cs.registerArtResource("Sound", "$No95D4oA6YQwPlF4OOHZ9i8o", ".\u002fart\u002fl0_No95D4oA6YQwPlF4OOHZ9i8o");
cs.registerArtResource("Picture", "$DhZyOXGKxvkLcxwd7e4yTotN", ".\u002fart\u002fl0_DhZyOXGKxvkLcxwd7e4yTotN");
cs.registerArtResource("Sound", "$PrXAHSyjW56yHs2LLjXd4nDT", ".\u002fart\u002fl0_PrXAHSyjW56yHs2LLjXd4nDT");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Play n Joy! \u0028nfbe\u0029";
  bnd.scriptId = "nfbe";
  bnd.topScriptId = "nfbe";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"] = {};
  bnd = bnds["fsJfmeye8nvHG8ZlUjE8A3Pq"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq");
  bnd.scriptName = "game \u0028krec\u0029";
  bnd.scriptId = "krec";
  bnd.topScriptId = "nfbe";
    lib["set score"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "set score");
    lib["start countdown timer"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "start countdown timer");
    lib["score"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "score");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "add score");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "remove life");
    lib["end"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "end");
    lib["start"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "start");
    lib["reset"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "reset");
    lib["on end"] = cs.mkLibProxyFactory(bnd, "fsJfmeye8nvHG8ZlUjE8A3Pq", "on end");
  lib = libs["EQQil0nbJx3NHUknxgVqAHWW"] = {};
  bnd = bnds["EQQil0nbJx3NHUknxgVqAHWW"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "EQQil0nbJx3NHUknxgVqAHWW");
  bnd.scriptName = "game menu \u0028brtba\u0029";
  bnd.scriptId = "brtba";
  bnd.topScriptId = "nfbe";
    lib["start"] = cs.mkLibProxyFactory(bnd, "EQQil0nbJx3NHUknxgVqAHWW", "start");
    lib["initialize"] = cs.mkLibProxyFactory(bnd, "EQQil0nbJx3NHUknxgVqAHWW", "initialize");
    lib["set credits"] = cs.mkLibProxyFactory(bnd, "EQQil0nbJx3NHUknxgVqAHWW", "set credits");
    lib["set instructions"] = cs.mkLibProxyFactory(bnd, "EQQil0nbJx3NHUknxgVqAHWW", "set instructions");
    lib["index"] = cs.mkLibProxyFactory(bnd, "EQQil0nbJx3NHUknxgVqAHWW", "index");
  lib = libs["kSqvsDXgtb79a2Uv7vEIxHi8"] = {};
  bnd = bnds["kSqvsDXgtb79a2Uv7vEIxHi8"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "kSqvsDXgtb79a2Uv7vEIxHi8");
  bnd.scriptName = "facebook \u0028biim\u0029";
  bnd.scriptId = "biim";
  bnd.topScriptId = "nfbe";
  bnd = bnds["fsJfmeye8nvHG8ZlUjE8A3Pq"];
  bnd["this$lib"] = "fsJfmeye8nvHG8ZlUjE8A3Pq";
  bnd = bnds["EQQil0nbJx3NHUknxgVqAHWW"];
  bnd["this$lib"] = "EQQil0nbJx3NHUknxgVqAHWW";
    resolve = bnd["game"] = {};
    bnd["game" + "$lib"] = "fsJfmeye8nvHG8ZlUjE8A3Pq";
      resolve["end"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["end"];
      resolve["on end"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["on end"];
      resolve["reset"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["reset"];
      resolve["score"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["score"];
      resolve["set score"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["set score"];
      resolve["start"] = libs["fsJfmeye8nvHG8ZlUjE8A3Pq"]["start"];
  bnd = bnds["kSqvsDXgtb79a2Uv7vEIxHi8"];
  bnd["this$lib"] = "kSqvsDXgtb79a2Uv7vEIxHi8";
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
  if(!d.hasOwnProperty("$xkhETEi1l1PQYLRW76223SfM")) d.$xkhETEi1l1PQYLRW76223SfM = "";

};

cs._initGlobals2 = function(d) {
};

cs._resetGlobals = function(d) {
  d.$xkhETEi1l1PQYLRW76223SfM = "";
  d.$eUb4MRxj4dRxV6U5UEGA47Vh = undefined;
  d.$xOuTIXKuNdEFhVAmcwv2NuZM = undefined;
  d.$xMQZhvbJRiRdr4YhBcV2PxM2 = undefined;
  d.$sZec9GOF6XS2fJcQnRWM1oV1 = undefined;
  d.$Zupi41lUZRTY6xJqvVAZ2tuH = undefined;
  d.$v2zq5EBV4ACDELqsCz5Hh4xg = undefined;
  d.$gSnzRDm41CG7pk6LKci3L3RI = undefined;
  d.$pqm5M7kxABfBhkwSFb3ehKhS = undefined;
  d.$No95D4oA6YQwPlF4OOHZ9i8o = undefined;
  d.$DhZyOXGKxvkLcxwd7e4yTotN = undefined;
  d.$PrXAHSyjW56yHs2LLjXd4nDT = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "nfbe";
cs.scriptGuid = "6cf9a72a-6904-4033-8f93-06a9e4980bdc";
cs.hasLocalData = 1;
}),

// **************************************************************
"fsJfmeye8nvHG8ZlUjE8A3Pq": (function (cs) {
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
  var t_actRes_23 = s.rt.returnedFrom.result;
  t_actRes_23;
  (s.pc = "1.6C");
  return s.rt.enter(a_l4svuo4DZFDcDqJbGklzHLTi(s, a_Ayu95FKZqA9xPdjQXSANLGvP$6, 3));
}
cs.registerStep(a_Ayu95FKZqA9xPdjQXSANLGvP$5, 'a_Ayu95FKZqA9xPdjQXSANLGvP$5');

function a_Ayu95FKZqA9xPdjQXSANLGvP$6(s) {
  var t_actRes_24 = s.rt.returnedFrom.result;
  t_actRes_24;
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
cs.registerAction("set score", "oKY8zayGQ3QsufrQiKXXS9sh", a_oKY8zayGQ3QsufrQiKXXS9sh, true);

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

/* ACTION: start countdown timer */
function a_uCawjS8UtYJd1W4TZkrVvAE7(previous, returnAddr, $seconds) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_uCawjS8UtYJd1W4TZkrVvAE7$0;
  s.name = "start countdown timer";
  s.$seconds = $seconds;
  return s;
}
cs.registerAction("start countdown timer", "uCawjS8UtYJd1W4TZkrVvAE7", a_uCawjS8UtYJd1W4TZkrVvAE7, true);

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
  (s.pc = "1.r1");
  var t_call_0 = lib.Time.now(s);
  (/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "1.r4");
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
cs.registerAction("score", "xleVEbMbZTbU7BJfeUMUPpMk", a_xleVEbMbZTbU7BJfeUMUPpMk, true);

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
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_gswamj84uYSwqLED2VvLdKi6$2;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$3, 'a_gswamj84uYSwqLED2VvLdKi6$3');

function a_gswamj84uYSwqLED2VvLdKi6$2(s) {
  var t_elseIf_5 = true;
  (s.pc = "1.J48");
  var t_infix_6 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m >= 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
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
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  return a_gswamj84uYSwqLED2VvLdKi6$4;
}
cs.registerStep(a_gswamj84uYSwqLED2VvLdKi6$5, 'a_gswamj84uYSwqLED2VvLdKi6$5');

function a_gswamj84uYSwqLED2VvLdKi6$4(s) {
  var t_elseIf_8 = true;
  (s.pc = "1.J4d");
  var t_call_9 = lib.Boolean_.not((/* _start time */ s.d.$TzLNjDeJYpMRpdgNFuqgE2PY == undefined), s);
  ok1(s, t_call_9);
  if (t_call_9) {
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
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
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
cs.registerAction("create text", "UMupj4ChNfQ8E2uvW694p1tX", a_UMupj4ChNfQ8E2uvW694p1tX, true);

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
cs.registerAction("evolve life", "XjXM7AL67NDGlzsZgg9s44uq", a_XjXM7AL67NDGlzsZgg9s44uq, true);

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
cs.registerAction("evolve score", "ify9GgXEJgKuJ9u1VD6EdWZv", a_ify9GgXEJgKuJ9u1VD6EdWZv, true);

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
cs.registerAction("current time", "q4EB482ElguyYpuPEwTgQQ4e", a_q4EB482ElguyYpuPEwTgQQ4e, true);

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
cs.registerAction("add score", "xINhkUFpWzhMPF0ROZX4TSm4", a_xINhkUFpWzhMPF0ROZX4TSm4, true);

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
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
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
  var t_elseIf_5 = true;
  (s.pc = "1.105.550");
  var t_infix_6 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "1.105.5540");
  s.rt.logObjectMutation(null);
  var t_resumeCtx_7 = s.rt.getAwaitResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$6);
  (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && lib.Bazaar.post_leaderboard_score(/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m, t_resumeCtx_7));
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
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
}
cs.registerStep(a_a14qLDjp7EtajVvdEd1rS18X$4, 'a_a14qLDjp7EtajVvdEd1rS18X$4');

function a_a14qLDjp7EtajVvdEd1rS18X$7(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  var t_elseIf_9 = true;
  (s.pc = "1.105.558");
  var t_infix_10 = (ok1(s, /* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m) && (/* _score */ s.d.$lp3pSLpGr7O3RGbDzuSQiJ5m > 0));
  ok1(s, t_infix_10);
  if (t_infix_10) {
  (s.pc = "1.105.55c0");
  lib.Wall.clear(s);
  (s.pc = "1.105.55c3");
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$9);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_11);
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
  var t_actRes_12 = s.rt.returnedFrom.result;
  t_actRes_12;
  (s.pc = "1.105.55g");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_a14qLDjp7EtajVvdEd1rS18X$11);
  lib.Time.stop(t_resumeCtx_13);
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
cs.registerAction("reset", "Kv3t1TJgZdpYJpx9reGXtTW2", a_Kv3t1TJgZdpYJpx9reGXtTW2, true);

function a_Kv3t1TJgZdpYJpx9reGXtTW2$0(s) {
  (s.pc = "1.120.1");
  return s.rt.enter(a_xpQAnETcU9aowS6g7p1qZZbf(s, a_Kv3t1TJgZdpYJpx9reGXtTW2$1));
}
cs.registerStep(a_Kv3t1TJgZdpYJpx9reGXtTW2$0, 'a_Kv3t1TJgZdpYJpx9reGXtTW2$0');

function a_Kv3t1TJgZdpYJpx9reGXtTW2$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "1.120.4");
  var t_call_1 = lib.Invalid.action(s);
  (/* _end event */ s.d.$Eu2dngMaA73jYqD6d0u8iCju = t_call_1);
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
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "1.125.4");
  return s.rt.enter(a_Ayu95FKZqA9xPdjQXSANLGvP(s, a_XQPjg13t37zIEtpt44U6ff92$2, s.$width, s.$height));
}
cs.registerStep(a_XQPjg13t37zIEtpt44U6ff92$1, 'a_XQPjg13t37zIEtpt44U6ff92$1');

function a_XQPjg13t37zIEtpt44U6ff92$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "1.125.b0");
  var t_lmbProxy_2 = s.libs.mkLambdaProxy;
  (s.$perform = function(la0, la1) { return a_a_XQPjg13t37zIEtpt44U6ff92$3(t_lmbProxy_2(la0), la1) });
  (s.pc = "1.125.7");
  var t_call_3 = (ok2(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS, s.$perform) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.add_on_every_frame(s.$perform, s));
  t_call_3;
  (s.pc = "1.125.b");
  (ok1(s, /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS) && /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS.post_to_wall(s));
  (s.pc = "1.125.e");
  (s.result = /* _board */ s.d.$xW5SJ4MKJ44wSSDVuZgZG3iS);
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

/* ACTION: on end */
function a_xTv6Ulq3EWIRTV6f6oXlbDh9(previous, returnAddr, $action) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_xTv6Ulq3EWIRTV6f6oXlbDh9$0;
  s.name = "on end";
  s.$action = $action;
  return s;
}
cs.registerAction("on end", "xTv6Ulq3EWIRTV6f6oXlbDh9", a_xTv6Ulq3EWIRTV6f6oXlbDh9, true);

function a_xTv6Ulq3EWIRTV6f6oXlbDh9$0(s) {
  (s.pc = "1.141.1");
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
cs.registerAction("clear board", "xpQAnETcU9aowS6g7p1qZZbf", a_xpQAnETcU9aowS6g7p1qZZbf, true);

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
cs.scriptId = "nfbe";
cs.scriptGuid = "6cf9a72a-6904-4033-8f93-06a9e4980bdc";
}),

// **************************************************************
"EQQil0nbJx3NHUknxgVqAHWW": (function (cs) {
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
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_start$1;
}
cs.registerStep(a_start$2, 'a_start$2');

function a_start$1(s) {
  var t_elseIf_3 = true;
  (s.pc = "2.65");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.690");
  var t_call_4 = lib.Box.page_height(s);
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 / 8));
  (ok1(s, t_infix_5) && lib.Box.set_padding(t_infix_5, 1, 1, 1, s));
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
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  (s.pc = "2.699");
  return s.rt.enter(a_LJpox6YpuCvn6ERcUlisZc56(s, a_start$5));
}
cs.registerStep(a_start$4, 'a_start$4');

function a_start$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_start$3, 'a_start$3');

function a_start$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  (s.pc = "2.69c");
  return s.rt.enter(a_mqb129Wh4dEV1uyHJF1oS5IJ(s, a_start$6));
}
cs.registerStep(a_start$5, 'a_start$5');

function a_start$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  (s.pc = "2.69f");
  return s.rt.enter(a_XNqQQCzJZlGV2I6w0FE2aVvf(s, a_start$7));
}
cs.registerStep(a_start$6, 'a_start$6');

function a_start$7(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  (s.pc = "2.69i");
  return s.rt.enter(a_OP6CcdaCET95J4x6c4vLnjpz(s, a_start$8));
}
cs.registerStep(a_start$7, 'a_start$7');

function a_start$8(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  (s.pc = "2.69l");
  return s.rt.enter(a_VBoM3w1YjF9BzIB6ry8gv2PO(s, a_start$9));
}
cs.registerStep(a_start$8, 'a_start$8');

function a_start$9(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
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
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "2.e43");
  lib.Wall.set_title("select a level", s);
  return a_levelselection$1;
}
cs.registerStep(a_levelselection$2, 'a_levelselection$2');

function a_levelselection$1(s) {
  var t_elseIf_3 = true;
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
  var t_call_4 = lib.Box.page_width(s);
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 - 3));
  (s.$grid_width = t_infix_5);
  (s.pc = "2.e926");
  var t_call_6 = lib.Box.page_height(s);
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 - 3));
  (s.$grid_height = t_infix_7);
  (s.pc = "2.e929");
  (s.$numboxes = /* _level count */ s.d.$levelcount);
  (s.pc = "2.e92c");
  var t_infix_8 = (ok2(s, s.$grid_width, s.$grid_height) && (s.$grid_width * s.$grid_height));
  (s.$area = t_infix_8);
  (s.pc = "2.e92f");
  var t_infix_9 = (ok2(s, s.$area, s.$numboxes) && (s.$area / s.$numboxes));
  var t_call_10 = (ok1(s, t_infix_9) && lib.Math_.sqrt(t_infix_9, s));
  (s.$bsize = t_call_10);
  (s.pc = "2.e92i");
  var t_infix_11 = (ok2(s, s.$grid_width, s.$bsize) && (s.$grid_width / s.$bsize));
  var t_call_12 = (ok1(s, t_infix_11) && lib.Math_.floor(t_infix_11, s));
  (s.$cols = t_call_12);
  (s.pc = "2.e92l");
  var t_infix_13 = (ok2(s, s.$numboxes, s.$cols) && (s.$numboxes / s.$cols));
  var t_call_14 = (ok1(s, t_infix_13) && lib.Math_.ceiling(t_infix_13, s));
  (s.$rows = t_call_14);
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
  var t_infix_15 = (ok2(s, s.$rows, s.$bsize) && (s.$rows * s.$bsize));
  var t_infix_16 = (ok2(s, t_infix_15, s.$grid_height) && (t_infix_15 > s.$grid_height));
  if (t_infix_16) {
  (s.pc = "2.e92s0");
  var t_infix_17 = (ok1(s, s.$cols) && (s.$cols + 1));
  var t_infix_18 = (ok2(s, s.$grid_width, t_infix_17) && (s.$grid_width / t_infix_17));
  var t_infix_19 = (ok1(s, t_infix_18) && (t_infix_18 - 0.001));
  (s.$alt1 = t_infix_19);
  (s.pc = "2.e92s3");
  var t_infix_20 = (ok2(s, s.$grid_height, s.$rows) && (s.$grid_height / s.$rows));
  var t_infix_21 = (ok1(s, t_infix_20) && (t_infix_20 - 0.001));
  (s.$alt2 = t_infix_21);
  (s.pc = "2.e92s6");
  var t_call_22 = (ok2(s, s.$alt1, s.$alt2) && lib.Math_.max(s.$alt1, s.$alt2, s));
  (s.$bsize = t_call_22);
  (s.pc = "2.e92s9");
  var t_infix_23 = (ok2(s, s.$grid_width, s.$bsize) && (s.$grid_width / s.$bsize));
  var t_call_24 = (ok1(s, t_infix_23) && lib.Math_.floor(t_infix_23, s));
  (s.$cols = t_call_24);
  (s.pc = "2.e92sc");
  var t_infix_25 = (ok2(s, s.$numboxes, s.$cols) && (s.$numboxes / s.$cols));
  var t_call_26 = (ok1(s, t_infix_25) && lib.Math_.ceiling(t_infix_25, s));
  (s.$rows = t_call_26);
  return a_levelselection$4;
  }
  (s.pc = "2.e92s");
  var t_call_27 = (ok1(s, s.$bsize) && lib.Math_.min(13, s.$bsize, s));
  (s.$bsize = t_call_27);
  (s.pc = "2.e92v");
  var t_infix_28 = (ok1(s, s.$bsize) && (0.03 * s.$bsize));
  (s.$mgn = t_infix_28);
  var t_elseIf_29 = true;
  (s.pc = "2.e92y");
  var t_call_30 = lib.Box.pixels_per_em(s);
  var t_infix_31 = (ok2(s, s.$mgn, t_call_30) && (s.$mgn * t_call_30));
  var t_infix_32 = (ok1(s, t_infix_31) && (t_infix_31 < 2));
  ok1(s, t_infix_32);
  if (t_infix_32) {
  (s.pc = "2.e92C0");
  var t_call_33 = lib.Box.pixels_per_em(s);
  var t_infix_34 = (ok1(s, t_call_33) && (2 / t_call_33));
  (s.$mgn = t_infix_34);
  } else {
  (s.pc = "2.e92D0");
  null;
  }
  (s.pc = "2.e92D");
  var t_infix_35 = (ok2(s, s.$bsize, s.$mgn) && (s.$bsize - s.$mgn));
  (s.$bsize = t_infix_35);
  (s.pc = "2.e92G");
  lib.Box.push_box(s);
  (s.pc = "2.e92I0");
  var t_infix_36 = (ok2(s, s.$rows, s.$bsize) && (s.$rows * s.$bsize));
  var t_infix_37 = (ok1(s, s.$rows) && (s.$rows - 1));
  var t_infix_38 = (ok2(s, t_infix_37, s.$mgn) && (t_infix_37 * s.$mgn));
  var t_infix_39 = (ok2(s, t_infix_36, t_infix_38) && (t_infix_36 + t_infix_38));
  (ok1(s, t_infix_39) && lib.Box.set_height(t_infix_39, s));
  (s.pc = "2.e92I3");
  lib.Box.use_vertical_layout(s);
  (s.pc = "2.e92I6");
  lib.Box.set_vertical_align("justify", s);
  (s.pc = "2.e92I9");
  s.t_bnd_40 = s.$rows;
  (s.$i = 0);
  return a_levelselection$7;
}
cs.registerStep(a_levelselection$4, 'a_levelselection$4');

function a_levelselection$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_levelselection$3, 'a_levelselection$3');

function a_levelselection$7(s) {
  if ((s.$i < s.t_bnd_40)) {
  (s.pc = "2.e92Id0");
  lib.Box.push_box(s);
  (s.pc = "2.e92Id20");
  var t_infix_41 = (ok2(s, s.$cols, s.$bsize) && (s.$cols * s.$bsize));
  var t_infix_42 = (ok1(s, s.$cols) && (s.$cols - 1));
  var t_infix_43 = (ok2(s, t_infix_42, s.$mgn) && (t_infix_42 * s.$mgn));
  var t_infix_44 = (ok2(s, t_infix_41, t_infix_43) && (t_infix_41 + t_infix_43));
  (ok1(s, t_infix_44) && lib.Box.set_width(t_infix_44, s));
  (s.pc = "2.e92Id23");
  lib.Box.use_horizontal_layout(s);
  (s.pc = "2.e92Id26");
  lib.Box.set_horizontal_align("justify", s);
  (s.pc = "2.e92Id29");
  s.t_bnd_45 = s.$cols;
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
  if ((s.$j < s.t_bnd_45)) {
  (s.pc = "2.e92Id2d0");
  var t_infix_46 = (ok2(s, s.$i, s.$cols) && (s.$i * s.$cols));
  var t_infix_47 = (ok2(s, t_infix_46, s.$j) && (t_infix_46 + s.$j));
  var t_infix_48 = (ok1(s, t_infix_47) && (t_infix_47 + 1));
  (s.$level_id = t_infix_48);
  (s.pc = "2.e92Id2d3");
  lib.Box.push_box(s);
  (s.pc = "2.e92Id2d50");
  (ok1(s, s.$bsize) && lib.Box.set_width(s.$bsize, s));
  (s.pc = "2.e92Id2d53");
  (ok1(s, s.$bsize) && lib.Box.set_height(s.$bsize, s));
  (s.pc = "2.e92Id2d56");
  lib.Box.use_overlay_layout(s);
  var t_elseIf_49 = true;
  (s.pc = "2.e92Id2d59");
  var t_infix_50 = (ok2(s, s.$level_id, /* _level count */ s.d.$levelcount) && (s.$level_id <= /* _level count */ s.d.$levelcount));
  ok1(s, t_infix_50);
  if (t_infix_50) {
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
  var t_actRes_51 = s.rt.returnedFrom.result;
  (s.$lvl = t_actRes_51);
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
  var t_actRes_52 = s.rt.returnedFrom.result;
  t_actRes_52;
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
cs.registerAction("apply page theme", "stylepage", a_stylepage, true);

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
cs.registerAction("initialize", "initialize", a_initialize, true);

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
  (s.pc = "2.Fw");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_initialize$5, 1));
}
cs.registerStep(a_initialize$2, 'a_initialize$2');

function a_initialize$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  if (t_actRes_7) {
  t_actRes_7.perform_set("qhCetiH2Bj2wrY6fz4oObZF5", true, s);
  }
  (s.pc = "2.Fz");
  s.t_bnd_8 = /* _level count */ s.d.$levelcount;
  (s.$i = 0);
  return a_initialize$7;
}
cs.registerStep(a_initialize$5, 'a_initialize$5');

function a_initialize$7(s) {
  if ((s.$i < s.t_bnd_8)) {
  (s.pc = "2.FD0");
  return s.rt.enter(a_TuvYc3CSeDzlxw7k4r66Yrcb(s, a_initialize$9));
  }
  return s.rt.leave();
}
cs.registerStep(a_initialize$7, 'a_initialize$7');

function a_initialize$9(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  var t_infix_10 = (ok1(s, s.$i) && (s.$i + 1));
  var t_call_11 = (ok2(s, /* level theme index */ s.d.$BdGhpbmca, t_infix_10) && /* level theme index */ s.d.$BdGhpbmca.at(t_infix_10, s));
  if (t_call_11) {
  t_call_11.perform_set("T7dTa1GYk6ojgTI0G2RprFyk", t_actRes_9, s);
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
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "2.K6");
  var t_libcall_2 = s.libs["game"]["reset"](s);
  return s.rt.enter(t_libcall_2.invoke(t_libcall_2, a_startgame$2));
}
cs.registerStep(a_startgame$1, 'a_startgame$1');

function a_startgame$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "2.Kd0");
  var t_lmbv_4 = s.$level;
  var t_lmbProxy_5 = s.libs.mkLambdaProxy;
  (s.$action = function(la0, la1) { return a_a_startgame$3(t_lmbProxy_5(la0), la1, t_lmbv_4) });
  (s.pc = "2.K9");
  var t_libcall_6 = s.libs["game"]["on end"](s);
  return s.rt.enter(t_libcall_6.invoke(t_libcall_6, a_startgame$4, s.$action));
}
cs.registerStep(a_startgame$2, 'a_startgame$2');

function a_startgame$4(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
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
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_leveldetails$1;
}
cs.registerStep(a_leveldetails$2, 'a_leveldetails$2');

function a_leveldetails$1(s) {
  var t_elseIf_3 = true;
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
  var t_elseIf_4 = true;
  (s.pc = "2.P92e7");
  if (s.$level) {
  var t_recOp_5 = s.$level.perform_get("FcypXS06YlmK2KAQ327sEovl", s);
  }
  var t_call_6 = (ok1(s, t_recOp_5) && lib.String_.is_empty(t_recOp_5, s));
  var t_call_7 = (ok1(s, t_call_6) && lib.Boolean_.not(t_call_6, s));
  ok1(s, t_call_7);
  if (t_call_7) {
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
  var t_recOp_8 = s.$level.perform_get("FcypXS06YlmK2KAQ327sEovl", s);
  }
  (ok1(s, t_recOp_8) && lib.String_.post_to_wall(t_recOp_8, s));
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
  var t_actRes_9 = s.rt.returnedFrom.result;
  (s.$sc = t_actRes_9);
  var t_elseIf_10 = true;
  (s.pc = "2.P92ef");
  var t_infix_11 = (ok1(s, s.$sc) && (s.$sc > 0));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.pc = "2.P92ej0");
  lib.Box.push_box(s);
  (s.pc = "2.P92ej20");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92ej23");
  var t_concat_12 = lib.String_.concatAny("score\u003a ", s.$sc);
  (ok1(s, t_concat_12) && lib.String_.post_to_wall(t_concat_12, s));
  lib.Box.pop_box(s);
  } else {
  (s.pc = "2.P92ek0");
  null;
  }
  var t_elseIf_13 = true;
  (s.pc = "2.P92ek");
  if (s.$level) {
  var t_recOp_14 = s.$level.perform_get("qod2mWVTq0MtY6ZGt7IA6uUe", s);
  }
  var t_infix_15 = (ok1(s, t_recOp_14) && (t_recOp_14 > 0));
  ok1(s, t_infix_15);
  if (t_infix_15) {
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
  var t_actRes_16 = s.rt.returnedFrom.result;
  t_actRes_16;
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
  var t_actRes_17 = s.rt.returnedFrom.result;
  t_actRes_17;
  (s.pc = "2.P92er5f");
  var t_call_18 = lib.Colors.white(s);
  (ok1(s, t_call_18) && lib.Box.set_foreground(t_call_18, s));
  (s.pc = "2.P92er5i");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92er5l");
  lib.Box.set_height(4, s);
  (s.pc = "2.P92er5s0");
  var t_lmbv_19 = s.$level;
  var t_lmbProxy_20 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_leveldetails$13(t_lmbProxy_20(la0), la1, t_lmbv_19) });
  (s.pc = "2.P92er5o");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.P92er5s");
  lib.Box.push_box(s);
  (s.pc = "2.P92er5u0");
  lib.String_.post_to_wall("play", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  var t_elseIf_21 = true;
  (s.pc = "2.P92er5");
  var t_infix_22 = (ok1(s, (ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")])) && ((ok1(s, s.$level) && s.$level[("xneF5ygmtTQb4TogUvxfMDe1")]) + 1));
  var t_infix_23 = (ok2(s, t_infix_22, /* _level count */ s.d.$levelcount) && (t_infix_22 <= /* _level count */ s.d.$levelcount));
  s.t_lazy_24 = t_infix_23;
  if ((ok1(s, s.t_lazy_24) && s.t_lazy_24)) {
  return s.rt.enter(a_v1ibFfse8BhlXhYDaC3Wh2fN(s, a_leveldetails$15, s.$level));
  }
  return a_leveldetails$14;
}
cs.registerStep(a_leveldetails$12, 'a_leveldetails$12');

function a_leveldetails$15(s) {
  var t_actRes_25 = s.rt.returnedFrom.result;
  if (t_actRes_25) {
  var t_recOp_26 = t_actRes_25.perform_get("qhCetiH2Bj2wrY6fz4oObZF5", s);
  }
  (s.t_lazy_24 = t_recOp_26);
  return a_leveldetails$14;
}
cs.registerStep(a_leveldetails$15, 'a_leveldetails$15');

function a_leveldetails$14(s) {
  ok1(s, s.t_lazy_24);
  if (s.t_lazy_24) {
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
  var t_actRes_27 = s.rt.returnedFrom.result;
  (s.$next = t_actRes_27);
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
  var t_actRes_28 = s.rt.returnedFrom.result;
  t_actRes_28;
  (s.pc = "2.P92er95f");
  var t_call_29 = lib.Colors.white(s);
  (ok1(s, t_call_29) && lib.Box.set_foreground(t_call_29, s));
  (s.pc = "2.P92er95i");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.P92er95l");
  lib.Box.set_height(4, s);
  (s.pc = "2.P92er95s0");
  var t_lmbv_30 = s.$next;
  var t_lmbProxy_31 = s.libs.mkLambdaProxy;
  (s.$handler1 = function(la0, la1) { return a_a_leveldetails$20(t_lmbProxy_31(la0), la1, t_lmbv_30) });
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
/* ACTION: set credits */
function a_vEMbt6oeR6yVzubwR225d5o2(previous, returnAddr, $credits) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_vEMbt6oeR6yVzubwR225d5o2$0;
  s.name = "set credits";
  s.$credits = $credits;
  return s;
}
cs.registerAction("set credits", "vEMbt6oeR6yVzubwR225d5o2", a_vEMbt6oeR6yVzubwR225d5o2, true);

function a_vEMbt6oeR6yVzubwR225d5o2$0(s) {
  if (s.previous.needsPicker) {
  s.rt.pickParameters(a_vEMbt6oeR6yVzubwR225d5o2$2, lib.RTValue.mkPicker(lib.String_.picker(), "", "credits", "$credits"));
  return a_vEMbt6oeR6yVzubwR225d5o2$2;
  }
  return a_vEMbt6oeR6yVzubwR225d5o2$1;
}
cs.registerStep(a_vEMbt6oeR6yVzubwR225d5o2$0, 'a_vEMbt6oeR6yVzubwR225d5o2$0');

function a_vEMbt6oeR6yVzubwR225d5o2$2(s) {
  return a_vEMbt6oeR6yVzubwR225d5o2$1;
}
cs.registerStep(a_vEMbt6oeR6yVzubwR225d5o2$2, 'a_vEMbt6oeR6yVzubwR225d5o2$2');

function a_vEMbt6oeR6yVzubwR225d5o2$1(s) {
  (s.pc = "2.X1");
  (/* _credits */ s.d.$qTILdrMWpOE7W6v8fyiOqO8E = s.$credits);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_vEMbt6oeR6yVzubwR225d5o2$1, 'a_vEMbt6oeR6yVzubwR225d5o2$1');

/* ACTION: show leaderboard button */
function a_XNqQQCzJZlGV2I6w0FE2aVvf(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_XNqQQCzJZlGV2I6w0FE2aVvf$0;
  s.name = "show leaderboard button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show leaderboard button", "XNqQQCzJZlGV2I6w0FE2aVvf", a_XNqQQCzJZlGV2I6w0FE2aVvf, true);

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
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "2.65.2c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.65.2j0");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2(t_lmbProxy_1(la0), la1) });
  (s.pc = "2.65.2f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.65.2j");
  lib.Box.push_box(s);
  (s.pc = "2.65.2l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.65.2l3");
  lib.Box.set_font_size(1, s);
  (s.pc = "2.65.2l6");
  var t_call_2 = lib.Colors.white(s);
  (ok1(s, t_call_2) && lib.Box.set_foreground(t_call_2, s));
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
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "2.65.2j26");
  lib.Wall.set_title("leaderboards", s);
  (s.pc = "2.65.2j29");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_a_XNqQQCzJZlGV2I6w0FE2aVvf$2$2);
  lib.Bazaar.post_leaderboard_to_wall(t_resumeCtx_2);
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
cs.registerAction("show start button", "mqb129Wh4dEV1uyHJF1oS5IJ", a_mqb129Wh4dEV1uyHJF1oS5IJ, true);

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
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "2.70.29");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.70.2g0");
  var t_lmbProxy_1 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2(t_lmbProxy_1(la0), la1) });
  (s.pc = "2.70.2c");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.70.2g");
  lib.Box.push_box(s);
  (s.pc = "2.70.2i0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.70.2i3");
  lib.Box.set_font_size(2, s);
  (s.pc = "2.70.2i6");
  var t_call_2 = lib.Colors.white(s);
  (ok1(s, t_call_2) && lib.Box.set_foreground(t_call_2, s));
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
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show level details", t_actRes_1);
  return a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1;
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$2');

function a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1, 'a_a_mqb129Wh4dEV1uyHJF1oS5IJ$2$1');

/* ACTION: show titles */
function a_QHP9ho2IGjrPxqq9F80pZmqj(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_QHP9ho2IGjrPxqq9F80pZmqj$0;
  s.name = "show titles";
  return s;
}
cs.registerAction("show titles", "QHP9ho2IGjrPxqq9F80pZmqj", a_QHP9ho2IGjrPxqq9F80pZmqj, true);

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
cs.registerAction("show credits button", "VBoM3w1YjF9BzIB6ry8gv2PO", a_VBoM3w1YjF9BzIB6ry8gv2PO, true);

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
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "2.80.42c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.80.42j0");
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_VBoM3w1YjF9BzIB6ry8gv2PO$3(t_lmbProxy_4(la0), la1) });
  (s.pc = "2.80.42f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.80.42j");
  lib.Box.push_box(s);
  (s.pc = "2.80.42l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.80.42l3");
  lib.Box.set_font_size(0.7, s);
  (s.pc = "2.80.42l6");
  var t_call_5 = lib.Colors.white(s);
  (ok1(s, t_call_5) && lib.Box.set_foreground(t_call_5, s));
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
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "2.85.43");
  lib.Wall.set_subtitle("credits", s);
  return a_iajDu749O2HH5AG4pth9fr7D$1;
}
cs.registerStep(a_iajDu749O2HH5AG4pth9fr7D$2, 'a_iajDu749O2HH5AG4pth9fr7D$2');

function a_iajDu749O2HH5AG4pth9fr7D$1(s) {
  var t_elseIf_3 = true;
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
cs.registerAction("level by id", "uIQCNem1kvZBE4J6UHoWPCK1", a_uIQCNem1kvZBE4J6UHoWPCK1, true);

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
cs.registerAction("set instructions", "jEFN2SCBqk8f47TxtO4wNwH1", a_jEFN2SCBqk8f47TxtO4wNwH1, true);

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
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "2.128.43");
  lib.Wall.set_subtitle("instructions", s);
  return a_rhe4BNymJXHZr2coRC1gPgnW$1;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$2, 'a_rhe4BNymJXHZr2coRC1gPgnW$2');

function a_rhe4BNymJXHZr2coRC1gPgnW$1(s) {
  var t_elseIf_3 = true;
  (s.pc = "2.128.5");
  true;
  if (true) {
  s.rt.enter_render();
  (s.$_ = s.rt.getCurrentPage().model);
  (s.pc = "2.128.90");
  lib.Box.push_box(s);
  (s.pc = "2.128.920");
  lib.Box.set_margins(2, 2, 2, 2, s);
  (s.pc = "2.128.923");
  (ok1(s, /* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E) && lib.String_.post_to_wall(/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E, s));
  lib.Box.pop_box(s);
  (s.pc = "2.128.92");
  lib.Box.push_box(s);
  (s.pc = "2.128.940");
  lib.Box.set_margins(2.5, 1, 2.5, 1, s);
  (s.pc = "2.128.943");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.128.946");
  var t_call_4 = lib.Colors.white(s);
  (ok1(s, t_call_4) && lib.Box.set_foreground(t_call_4, s));
  (s.pc = "2.128.949");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_rhe4BNymJXHZr2coRC1gPgnW$4, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
  } else {
  (s.pc = "2.128.a0");
  null;
  }
  return a_rhe4BNymJXHZr2coRC1gPgnW$3;
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$1, 'a_rhe4BNymJXHZr2coRC1gPgnW$1');

function a_rhe4BNymJXHZr2coRC1gPgnW$4(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  (s.pc = "2.128.94c");
  lib.Box.set_padding(0.5, 4, 0.5, 4, s);
  (s.pc = "2.128.94j0");
  var t_lmbProxy_6 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_rhe4BNymJXHZr2coRC1gPgnW$5(t_lmbProxy_6(la0), la1) });
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
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$4, 'a_rhe4BNymJXHZr2coRC1gPgnW$4');

function a_rhe4BNymJXHZr2coRC1gPgnW$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_rhe4BNymJXHZr2coRC1gPgnW$3, 'a_rhe4BNymJXHZr2coRC1gPgnW$3');

/* ACTION: a_rhe4BNymJXHZr2coRC1gPgnW::lambda::5 */
function a_a_rhe4BNymJXHZr2coRC1gPgnW$5(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_rhe4BNymJXHZr2coRC1gPgnW$5$0;
  s.name = "show instructions";
  return s;
}
cs.registerLambda("a_rhe4BNymJXHZr2coRC1gPgnW\u003a\u003alambda\u003a\u003a5", "a_rhe4BNymJXHZr2coRC1gPgnW$5", a_a_rhe4BNymJXHZr2coRC1gPgnW$5, true);

function a_a_rhe4BNymJXHZr2coRC1gPgnW$5$0(s) {
  (s.pc = "2.128.94j20");
  return s.rt.enter(a_uIQCNem1kvZBE4J6UHoWPCK1(s, a_a_rhe4BNymJXHZr2coRC1gPgnW$5$1, 1));
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$5$0, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$5$0');

function a_a_rhe4BNymJXHZr2coRC1gPgnW$5$1(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  return s.rt.enter(a_startgame(s, a_a_rhe4BNymJXHZr2coRC1gPgnW$5$2, t_actRes_0));
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$5$1, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$5$1');

function a_a_rhe4BNymJXHZr2coRC1gPgnW$5$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  return s.rt.leave();
}
cs.registerStep(a_a_rhe4BNymJXHZr2coRC1gPgnW$5$2, 'a_a_rhe4BNymJXHZr2coRC1gPgnW$5$2');

/* ACTION: show instructions button */
function a_OP6CcdaCET95J4x6c4vLnjpz(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_OP6CcdaCET95J4x6c4vLnjpz$0;
  s.name = "show instructions button";
  s.$handler = undefined;
  return s;
}
cs.registerAction("show instructions button", "OP6CcdaCET95J4x6c4vLnjpz", a_OP6CcdaCET95J4x6c4vLnjpz, true);

function a_OP6CcdaCET95J4x6c4vLnjpz$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "2.134.0");
  var t_call_1 = (ok1(s, /* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E) && lib.String_.is_empty(/* _instructions */ s.d.$xmXSki2Kan2xPa8mJmNvEq7E, s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "2.134.40");
  lib.Box.push_box(s);
  (s.pc = "2.134.420");
  lib.Box.set_margins(0, 1, 1, 1, s);
  (s.pc = "2.134.423");
  lib.Box.set_width(10, s);
  (s.pc = "2.134.426");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.134.429");
  return s.rt.enter(a_Rqqe3CxvoK7XWqNZh9kQWX7G(s, a_OP6CcdaCET95J4x6c4vLnjpz$2, /* _button theme */ s.d.$yX2e8ghq4LTf5saYPyFh4j7V));
  } else {
  (s.pc = "2.134.50");
  null;
  }
  return a_OP6CcdaCET95J4x6c4vLnjpz$1;
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$0, 'a_OP6CcdaCET95J4x6c4vLnjpz$0');

function a_OP6CcdaCET95J4x6c4vLnjpz$2(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "2.134.42c");
  lib.Box.set_padding(0.5, 2, 0.5, 2, s);
  (s.pc = "2.134.42j0");
  var t_lmbProxy_4 = s.libs.mkLambdaProxy;
  (s.$handler = function(la0, la1) { return a_a_OP6CcdaCET95J4x6c4vLnjpz$3(t_lmbProxy_4(la0), la1) });
  (s.pc = "2.134.42f");
  (ok1(s, s.$handler) && lib.Box.on_tapped(s.$handler, s));
  (s.pc = "2.134.42j");
  lib.Box.push_box(s);
  (s.pc = "2.134.42l0");
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.134.42l3");
  lib.Box.set_font_size(0.7, s);
  (s.pc = "2.134.42l6");
  var t_call_5 = lib.Colors.white(s);
  (ok1(s, t_call_5) && lib.Box.set_foreground(t_call_5, s));
  (s.pc = "2.134.42l9");
  lib.String_.post_to_wall("instructions", s);
  lib.Box.pop_box(s);
  lib.Box.pop_box(s);
  return a_OP6CcdaCET95J4x6c4vLnjpz$1;
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$2, 'a_OP6CcdaCET95J4x6c4vLnjpz$2');

function a_OP6CcdaCET95J4x6c4vLnjpz$1(s) {
  return s.rt.leave();
}
cs.registerStep(a_OP6CcdaCET95J4x6c4vLnjpz$1, 'a_OP6CcdaCET95J4x6c4vLnjpz$1');

/* ACTION: a_OP6CcdaCET95J4x6c4vLnjpz::lambda::3 */
function a_a_OP6CcdaCET95J4x6c4vLnjpz$3(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_OP6CcdaCET95J4x6c4vLnjpz$3$0;
  s.name = "show instructions button";
  return s;
}
cs.registerLambda("a_OP6CcdaCET95J4x6c4vLnjpz\u003a\u003alambda\u003a\u003a3", "a_OP6CcdaCET95J4x6c4vLnjpz$3", a_a_OP6CcdaCET95J4x6c4vLnjpz$3, true);

function a_a_OP6CcdaCET95J4x6c4vLnjpz$3$0(s) {
  (s.pc = "2.134.42j20");
  s.rt.forceNonRender();
  s.rt.forcePageRefresh();
  s.rt.postAutoPage(s.d.libName, "show instructions");
  return s.rt.leave();
}
cs.registerStep(a_a_OP6CcdaCET95J4x6c4vLnjpz$3$0, 'a_a_OP6CcdaCET95J4x6c4vLnjpz$3$0');

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
cs.registerAction("show level selection button", "RiKp9WsgmJDFjpU5f9NbOSB6", a_RiKp9WsgmJDFjpU5f9NbOSB6, true);

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
  lib.Box.set_horizontal_align("center", s);
  (s.pc = "2.144.B529");
  lib.Box.set_vertical_align("bottom", s);
  (s.pc = "2.144.B52c");
  (ok1(s, s.$height) && lib.Box.set_height(s.$height, s));
  (s.pc = "2.144.B52f");
  lib.Box.set_font_size(1, s);
  (s.pc = "2.144.B52i");
  var t_call_24 = lib.Colors.orange(s);
  var t_call_25 = (ok1(s, t_call_24) && t_call_24.lighten(0.4, s));
  (ok1(s, t_call_25) && lib.Box.set_foreground(t_call_25, s));
  (s.pc = "2.144.B52l");
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
  var t_actRes_23 = s.rt.returnedFrom.result;
  t_actRes_23;
  return a_RiKp9WsgmJDFjpU5f9NbOSB6$16;
}
cs.registerStep(a_RiKp9WsgmJDFjpU5f9NbOSB6$17, 'a_RiKp9WsgmJDFjpU5f9NbOSB6$17');

function a_RiKp9WsgmJDFjpU5f9NbOSB6$18(s) {
  var t_actRes_26 = s.rt.returnedFrom.result;
  var t_concat_27 = lib.String_.concatAny("score\u003a ", t_actRes_26);
  (ok1(s, t_concat_27) && lib.String_.post_to_wall(t_concat_27, s));
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
cs.registerAction("level button color", "E4ynNjmdl86AziAtb5ofey4w", a_E4ynNjmdl86AziAtb5ofey4w, true);

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
/* ACTION: create theme */
function a_TuvYc3CSeDzlxw7k4r66Yrcb(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_TuvYc3CSeDzlxw7k4r66Yrcb$0;
  s.name = "create theme";
  s.result = undefined;
  return s;
}
cs.registerAction("create theme", "TuvYc3CSeDzlxw7k4r66Yrcb", a_TuvYc3CSeDzlxw7k4r66Yrcb, true);

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

/* ACTION: apply theme */
function a_Rqqe3CxvoK7XWqNZh9kQWX7G(previous, returnAddr, $theme) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_Rqqe3CxvoK7XWqNZh9kQWX7G$0;
  s.name = "apply theme";
  s.$theme = $theme;
  return s;
}
cs.registerAction("apply theme", "Rqqe3CxvoK7XWqNZh9kQWX7G", a_Rqqe3CxvoK7XWqNZh9kQWX7G, true);

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
cs.registerAction("level button theme", "kyM6BKxra6FMoP8AENJbQMGs", a_kyM6BKxra6FMoP8AENJbQMGs, true);

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
cs.registerAction("next", "v1ibFfse8BhlXhYDaC3Wh2fN", a_v1ibFfse8BhlXhYDaC3Wh2fN, true);

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
cs.registerAction("total score", "vhNGQ52iSlYqwQHeL8LQGR8e", a_vhNGQ52iSlYqwQHeL8LQGR8e, true);

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
cs.registerAction("show score", "LJpox6YpuCvn6ERcUlisZc56", a_LJpox6YpuCvn6ERcUlisZc56, true);

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
cs.registerAction("score", "g5G6V1r466rXedV0GC2DdMLq", a_g5G6V1r466rXedV0GC2DdMLq, true);

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
cs.registerAction("show rank", "syCJwBkyr1jcu3Z9uQnocktT", a_syCJwBkyr1jcu3Z9uQnocktT, true);

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
cs.registerAction("index", "uJZPahu4xxQkbhRSYWsWCJjm", a_uJZPahu4xxQkbhRSYWsWCJjm, true);

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
cs.registerAction("first level", "XT6yz9vjh6Ci02AGh2Y9e9pe", a_XT6yz9vjh6Ci02AGh2Y9e9pe, true);

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
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "set credits";
cs.authorId = "unknown";
cs.scriptId = "nfbe";
cs.scriptGuid = "6cf9a72a-6904-4033-8f93-06a9e4980bdc";
cs.hasLocalData = 1;
}),

// **************************************************************
"kSqvsDXgtb79a2Uv7vEIxHi8": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "facebook";
cs.scriptColor = "\u00239955BB";
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

cs.mainActionName = "authenticate";
cs.authorId = "unknown";
cs.scriptId = "nfbe";
cs.scriptGuid = "6cf9a72a-6904-4033-8f93-06a9e4980bdc";
cs.hasLocalData = 1;
})}
