var TDev;
if (!TDev) TDev = {};
TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "don\u0027t tap the super-cool tile";
cs.scriptColor = "\u0023FF2800";
cs.objectSingletons = {};
/* ACTION: main */
function a_fZqKniJamZoosUVt(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_fZqKniJamZoosUVt$0;
  s.name = "main";
  s.$board = undefined;
  s.$sprites = undefined;
  s.$i = undefined;
  s.$sprite = undefined;
  s.$tapped = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$sprite1 = undefined;
  s.$tapped2 = undefined;
  s.$x1 = undefined;
  s.$y1 = undefined;
  return s;
}
cs.registerAction("main", "fZqKniJamZoosUVt", a_fZqKniJamZoosUVt, true);

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

function a_fZqKniJamZoosUVt$0(s) {
  (s.pc = "F3JqUhQgDmYkrHsv");
  var t_libcall_0 = s.libs["xC7H26Cz6tHLf2a2"]["start"](s);
  return s.rt.enter(t_libcall_0.invoke(t_libcall_0, a_fZqKniJamZoosUVt$1));
}
cs.registerStep(a_fZqKniJamZoosUVt$0, 'a_fZqKniJamZoosUVt$0');

function a_fZqKniJamZoosUVt$1(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$board = t_actRes_1);
  (s.pc = "xU1U2j6asiW4cQib");
  var t_call_2 = (ok1(s, s.$board) && s.$board.create_sprite_set(s));
  (s.$sprites = t_call_2);
  (s.pc = "cfYSs0520eF5zKTh");
  s.t_bnd_3 = 4;
  (s.$i = 0);
  return a_fZqKniJamZoosUVt$2;
}
cs.registerStep(a_fZqKniJamZoosUVt$1, 'a_fZqKniJamZoosUVt$1');

function a_fZqKniJamZoosUVt$2(s) {
  if ((s.$i < s.t_bnd_3)) {
  (s.pc = "xQC982Xpew6Rh7S4");
  var t_call_4 = (ok1(s, s.$board) && s.$board.width(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 / 4));
  var t_call_6 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 / 4));
  var t_call_8 = (ok3(s, s.$board, t_infix_5, t_infix_7) && s.$board.create_rectangle(t_infix_5, t_infix_7, s));
  s.rt.markAllocated(t_call_8);
  (s.$sprite = t_call_8);
  (s.pc = "NizzR4YLSbHdtQIx");
  s.rt.logObjectMutation(s.$sprites);
  var t_call_9 = (ok2(s, s.$sprites, s.$sprite) && s.$sprites.add(s.$sprite, s));
  t_call_9;
  (s.pc = "c25qaWcSFz0m3MQa");
  var t_call_10 = (ok1(s, s.$sprite) && s.$sprite.width(s));
  var t_call_11 = lib.Math_.random(4, s);
  var t_infix_12 = (ok1(s, t_call_11) && (0.5 + t_call_11));
  var t_infix_13 = (ok2(s, t_call_10, t_infix_12) && (t_call_10 * t_infix_12));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_13) && s.$sprite.set_x(t_infix_13, s));
  (s.pc = "xfQVPEhRcYk37H6j");
  var t_call_14 = (ok1(s, s.$sprite) && s.$sprite.height(s));
  var t_infix_15 = (0 - 0.5);
  var t_infix_16 = (ok2(s, t_infix_15, s.$i) && (t_infix_15 + s.$i));
  var t_infix_17 = (ok2(s, t_call_14, t_infix_16) && (t_call_14 * t_infix_16));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_17) && s.$sprite.set_y(t_infix_17, s));
  (s.pc = "SpW3YMDiZJvjA98r");
  var t_call_18 = lib.Colors.black(s);
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_call_18) && s.$sprite.set_color(t_call_18, s));
  (s.pc = "AtoH6F8H4IWWJzHT");
  var t_lmbv_19 = s.$sprites;
  var t_lmbv_20 = s.$board;
  var t_lmbProxy_21 = s.libs.mkLambdaProxy;
  (s.$tapped = function(la0, la1, la2, la3) { return a_a_fZqKniJamZoosUVt$4(t_lmbProxy_21(la0), la1, la2, la3, t_lmbv_19, t_lmbv_20) });
  (s.pc = "ZD3KFFo4wSTvC930");
  var t_call_22 = (ok2(s, s.$sprite, s.$tapped) && s.$sprite.on_tap(s.$tapped, s));
  t_call_22;
  (s.$i++);
  return a_fZqKniJamZoosUVt$2;
  }
  (s.pc = "Fc8WA9llsO8L4k45");
  var t_libcall_23 = s.libs["xC7H26Cz6tHLf2a2"]["start countdown timer"](s);
  return s.rt.enter(t_libcall_23.invoke(t_libcall_23, a_fZqKniJamZoosUVt$5, 20));
}
cs.registerStep(a_fZqKniJamZoosUVt$2, 'a_fZqKniJamZoosUVt$2');

function a_fZqKniJamZoosUVt$5(s) {
  (s.pc = "IZieAOeNJsU6i2Y2");
  var t_libcall_24 = s.libs["xC7H26Cz6tHLf2a2"]["set life"](s);
  return s.rt.enter(t_libcall_24.invoke(t_libcall_24, a_fZqKniJamZoosUVt$6, 1));
}
cs.registerStep(a_fZqKniJamZoosUVt$5, 'a_fZqKniJamZoosUVt$5');

function a_fZqKniJamZoosUVt$6(s) {
  var t_actRes_25 = s.rt.returnedFrom.result;
  t_actRes_25;
  (s.pc = "DJDKJ9Zd3lha1jJt");
  var t_lmbv_26 = s.$board;
  var t_lmbProxy_27 = s.libs.mkLambdaProxy;
  (s.$tapped2 = function(la0, la1, la2, la3) { return a_a_fZqKniJamZoosUVt$7(t_lmbProxy_27(la0), la1, la2, la3, t_lmbv_26) });
  (s.pc = "kgfywXoZRY3mF76T");
  s.rt.logObjectMutation(s.$board);
  var t_call_28 = (ok2(s, s.$board, s.$tapped2) && s.$board.on_tap(s.$tapped2, s));
  t_call_28;
  return s.rt.leave();
}
cs.registerStep(a_fZqKniJamZoosUVt$6, 'a_fZqKniJamZoosUVt$6');

/* ACTION: a_fZqKniJamZoosUVt::lambda::4 */
function a_a_fZqKniJamZoosUVt$4(previous, returnAddr, $x, $y, $sprites, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fZqKniJamZoosUVt$4$0;
  s.name = "main";
  s.$sprites = $sprites;
  s.$sprite = undefined;
  s.$board = $board;
  return s;
}
cs.registerLambda("a_fZqKniJamZoosUVt\u003a\u003alambda\u003a\u003a4", "a_fZqKniJamZoosUVt$4", a_a_fZqKniJamZoosUVt$4, true);

function a_a_fZqKniJamZoosUVt$4$0(s) {
  (s.pc = "zKdkESxC5qx5ljPG");
  s.t_collArr_0 = (ok1(s, s.$sprites) && s.$sprites.get_enumerator());
  s.t_idx_1 = 0;
  return a_a_fZqKniJamZoosUVt$4$1;
}
cs.registerStep(a_a_fZqKniJamZoosUVt$4$0, 'a_a_fZqKniJamZoosUVt$4$0');

function a_a_fZqKniJamZoosUVt$4$1(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$sprite = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  (s.pc = "NB2F4yUqaP6wwVL4");
  var t_call_2 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_call_3 = (ok1(s, s.$sprite) && s.$sprite.height(s));
  var t_infix_4 = (ok2(s, t_call_2, t_call_3) && (t_call_2 + t_call_3));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_4) && s.$sprite.set_y(t_infix_4, s));
  var t_elseIf_5 = true;
  (s.pc = "xf6fGEU8bZ75QptF");
  var t_call_6 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_call_7 = (ok1(s, s.$board) && s.$board.height(s));
  var t_infix_8 = (ok2(s, t_call_6, t_call_7) && (t_call_6 > t_call_7));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "xSTwe1tjS34eQtmi");
  var t_call_9 = (ok1(s, s.$sprite) && s.$sprite.height(s));
  var t_infix_10 = (ok1(s, t_call_9) && (0.5 * t_call_9));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_10) && s.$sprite.set_y(t_infix_10, s));
  (s.pc = "fJF81UlA8N6Hnem6");
  var t_call_11 = (ok1(s, s.$sprite) && s.$sprite.width(s));
  var t_call_12 = lib.Math_.random(4, s);
  var t_infix_13 = (ok1(s, t_call_12) && (0.5 + t_call_12));
  var t_infix_14 = (ok2(s, t_call_11, t_infix_13) && (t_call_11 * t_infix_13));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_14) && s.$sprite.set_x(t_infix_14, s));
  } else {
  (s.pc = "PUQlwUy2pYU7gskn");
  null;
  }
  return a_a_fZqKniJamZoosUVt$4$1;
  }
  (s.pc = "kvMq7HxQGB2x3kqD");
  var t_libcall_15 = s.libs["xC7H26Cz6tHLf2a2"]["add score"](s);
  return s.rt.enter(t_libcall_15.invoke(t_libcall_15, a_a_fZqKniJamZoosUVt$4$4, 1));
}
cs.registerStep(a_a_fZqKniJamZoosUVt$4$1, 'a_a_fZqKniJamZoosUVt$4$1');

function a_a_fZqKniJamZoosUVt$4$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_a_fZqKniJamZoosUVt$4$4, 'a_a_fZqKniJamZoosUVt$4$4');

/* ACTION: a_fZqKniJamZoosUVt::lambda::7 */
function a_a_fZqKniJamZoosUVt$7(previous, returnAddr, $x, $y, $board) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_a_fZqKniJamZoosUVt$7$0;
  s.name = "main";
  s.$board = $board;
  return s;
}
cs.registerLambda("a_fZqKniJamZoosUVt\u003a\u003alambda\u003a\u003a7", "a_fZqKniJamZoosUVt$7", a_a_fZqKniJamZoosUVt$7, true);

function a_a_fZqKniJamZoosUVt$7$0(s) {
  (s.pc = "qEBQOLzz6A7paIj5");
  var t_call_0 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$board);
  (ok2(s, s.$board, t_call_0) && s.$board.set_background(t_call_0, s));
  (s.pc = "LLC2K1Ts3FK2RZC6");
  var t_libcall_1 = s.libs["xC7H26Cz6tHLf2a2"]["remove life"](s);
  return s.rt.enter(t_libcall_1.invoke(t_libcall_1, a_a_fZqKniJamZoosUVt$7$1, 1));
}
cs.registerStep(a_a_fZqKniJamZoosUVt$7$0, 'a_a_fZqKniJamZoosUVt$7$0');

function a_a_fZqKniJamZoosUVt$7$1(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return s.rt.leave();
}
cs.registerStep(a_a_fZqKniJamZoosUVt$7$1, 'a_a_fZqKniJamZoosUVt$7$1');

(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "don\u0027t tap the super-cool tile \u0028akomi\u0029";
  bnd.scriptId = "akomi";
  bnd.topScriptId = "akomi";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
  lib = libs["xC7H26Cz6tHLf2a2"] = {};
  bnd = bnds["xC7H26Cz6tHLf2a2"] = {};
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "xC7H26Cz6tHLf2a2");
  bnd.scriptName = "game \u0028ratf\u0029";
  bnd.scriptId = "ratf";
  bnd.topScriptId = "akomi";
    lib["set life"] = cs.mkLibProxyFactory(bnd, "xC7H26Cz6tHLf2a2", "set life");
    lib["start countdown timer"] = cs.mkLibProxyFactory(bnd, "xC7H26Cz6tHLf2a2", "start countdown timer");
    lib["add score"] = cs.mkLibProxyFactory(bnd, "xC7H26Cz6tHLf2a2", "add score");
    lib["remove life"] = cs.mkLibProxyFactory(bnd, "xC7H26Cz6tHLf2a2", "remove life");
    lib["start"] = cs.mkLibProxyFactory(bnd, "xC7H26Cz6tHLf2a2", "start");
  bnd = bnds["xC7H26Cz6tHLf2a2"];
  bnd["this$lib"] = "xC7H26Cz6tHLf2a2";
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
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "akomi";
cs.scriptGuid = "041a675f-32ae-448b-45fd-696f6d2d9354";
}),

// **************************************************************
"xC7H26Cz6tHLf2a2": (function (cs) {
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
  (s.pc = "jNK4VFOosZMf3gx2");
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
  (s.pc = "AuBU4W33pjn3QHHH");
  null;
  }
  (s.pc = "lohlOvEl2FCCHlN8");
  var t_infix_18 = (ok2(s, s.$height, s.$ratio) && (s.$height * s.$ratio));
  (s.$width = t_infix_18);
  } else {
  (s.pc = "xh4Ix84qq5I8YdOi");
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
  (s.pc = "xxhJGK23dDtqCW18");
  null;
  }
  (s.pc = "Y2iBY1rS8V2IYESl");
  var t_infix_25 = (ok2(s, s.$width, s.$ratio) && (s.$width / s.$ratio));
  (s.$height = t_infix_25);
  } else {
  (s.pc = "HIV4NU3cJ2MTA7oJ");
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
  (s.pc = "mTLmNoA7gAoINsDD");
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
  (s.pc = "h1gzusQkyYdFGXsx");
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
  (s.pc = "u1ppMyLrIUhTjcVz");
  null;
  }
  return a_gswamj84uYSwqLED2VvLdKi6$2;
  } else {
  (s.pc = "xoWI4CDtAeCgGw5l");
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
  (s.pc = "ByIH5DRhz6P3bMpr");
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
  (s.pc = "IbhNq2z62H43pdL8");
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
  (s.pc = "eUeVc58PuABcaU6A");
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
  (s.pc = "q6LMhtxU8BuLFLIs");
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
  (s.pc = "QKsqyq0gm2pgNiei");
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
  (s.pc = "qdZHW4DovSVIJPnr");
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
  (s.pc = "MBwpOhZcDDDWWGN1");
  null;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$5;
  }
  return a_a14qLDjp7EtajVvdEd1rS18X$2;
  } else {
  (s.pc = "G2LKke74fHe1jIU1");
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
  (s.pc = "Atv1MIcZCiAnSbYp");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_a_XQPjg13t37zIEtpt44U6ff92$3$1, 'a_a_XQPjg13t37zIEtpt44U6ff92$3$1');

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
  (s.pc = "x1zdfayklOTIB94Z");
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
cs.scriptId = "akomi";
cs.scriptGuid = "041a675f-32ae-448b-45fd-696f6d2d9354";
})}
