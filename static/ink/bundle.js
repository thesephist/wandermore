f = format;
Pi = 3.14159265;
Tau = (2 * Pi);
abs = x => {return __ink_match((x < 0), [[() => true, () => __ink_negate(x)], [() => false, () => x]])};
sign = x => {return __ink_match((x < 0), [[() => true, () => __ink_negate(1)], [() => false, () => 1]])};
jslog = x => {return (() => {return (() => {let __ink_acc_trgt = __as_ink_string(console); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[log] || null : (__ink_acc_trgt.log !== undefined ? __ink_acc_trgt.log : null)})()})()(x)};
Canvas = (() => {return bind(document, __Ink_String(`getElementById`))})()(__Ink_String(`game-canvas`));
Ctx = (() => {return bind(Canvas, __Ink_String(`getContext`))})()(__Ink_String(`2d`));
on = (el, name, fn) => {return (() => {return bind(el, __Ink_String(`addEventListener`))})()(name, fn)};
sqrt = x => {return pow(x, 0.50000000)};
distanceSq = (a, b) => {return __as_ink_string(pow(((() => {let __ink_acc_trgt = __as_ink_string(a); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})() - (() => {let __ink_acc_trgt = __as_ink_string(b); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})()), 2) + pow(((() => {let __ink_acc_trgt = __as_ink_string(a); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})() - (() => {let __ink_acc_trgt = __as_ink_string(b); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()), 2))};
distance = (a, b) => {return sqrt(distanceSq(a, b))};
rgb = (r, g, b) => {return f(__Ink_String(`rgb({{0}}, {{1}}, {{2}})`), [(r * 255.99000000), (g * 255.99000000), (b * 255.99000000)])};
rgba = (r, g, b, a) => {return f(__Ink_String(`rgb({{0}}, {{1}}, {{2}}, {{3}})`), [(r * 255.99000000), (g * 255.99000000), (b * 255.99000000), a])};
Black = rgb(0, 0, 0);
White = rgb(0.99000000, 0.99000000, 0.99000000);
coinflip = () => {return (rand() > 0.50000000)};
randRange = (min, max) => {return __as_ink_string(min + (rand() * (() => {return (max - min)})()))};
randInt = (min, max) => {return floor(randRange(min, max))};
randColor = () => {return rgb(rand(), rand(), rand())};
randColorAlpha = () => {return rgba(rand(), rand(), rand(), rand())};
randColorGreyscale = () => (() => {let r = rand(); return rgb(r, r, r)})();
randColorGreyscaleAlpha = () => (() => {let r = rand(); return rgba(r, r, r, rand())})();
setFill = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(fillStyle, color) : (__ink_assgn_trgt.fillStyle) = color; return __ink_assgn_trgt})()};
setLineWidth = width => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(lineWidth, width) : (__ink_assgn_trgt.lineWidth) = width; return __ink_assgn_trgt})()};
setStroke = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(strokeStyle, color) : (__ink_assgn_trgt.strokeStyle) = color; return __ink_assgn_trgt})()};
fillRect = bind(Ctx, __Ink_String(`fillRect`));
strokeRect = bind(Ctx, __Ink_String(`strokeRect`));
clearRect = bind(Ctx, __Ink_String(`clearRect`));
beginPath = bind(Ctx, __Ink_String(`beginPath`));
moveTo = bind(Ctx, __Ink_String(`moveTo`));
lineTo = bind(Ctx, __Ink_String(`lineTo`));
arc = bind(Ctx, __Ink_String(`arc`));
stroke = bind(Ctx, __Ink_String(`stroke`));
fill = bind(Ctx, __Ink_String(`fill`));
drawLine = (start, end) => (() => {beginPath(); moveTo((() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); lineTo((() => {let __ink_acc_trgt = __as_ink_string(end); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(end); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); return stroke()})();
drawSinglePath = points => (() => {beginPath(); let start = (() => {let __ink_acc_trgt = __as_ink_string(points); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(); moveTo((() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); each(slice(points, 1, len(points)), next => {return lineTo((() => {let __ink_acc_trgt = __as_ink_string(next); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(next); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})())}); return stroke()})();
drawPaths = points => {return reduce(slice(points, 1, len(points)), (last, next) => (() => {drawLine(last, next); return next})(), (() => {let __ink_acc_trgt = __as_ink_string(points); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})())};
strokeArc = (x, y, r, start, end) => (() => {beginPath(); arc(x, y, r, start, end); return stroke()})();
fillArc = (x, y, r, start, end) => (() => {beginPath(); arc(x, y, r, start, end); return fill()})();
strokeCircle = (x, y, r) => {return strokeArc(x, y, r, 0, Tau)};
fillCircle = (x, y, r) => {return fillArc(x, y, r, 0, Tau)};
setFont = font => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(font, font) : (__ink_assgn_trgt.font) = font; return __ink_assgn_trgt})()};
fillText = bind(Ctx, __Ink_String(`fillText`));
writeText = (x, y, text) => (() => {return fillText(text, x, y)})()
G = __ink_negate(36);
FPS = 60;
FrictionCoeff = 300;
Launch = 100000;
Force = 1500;
MinSize = 32;
MaxSize = 256;
Width = (() => {let __ink_acc_trgt = __as_ink_string(window); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[innerWidth] || null : (__ink_acc_trgt.innerWidth !== undefined ? __ink_acc_trgt.innerWidth : null)})();
Height = (() => {let __ink_acc_trgt = __as_ink_string(window); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[innerHeight] || null : (__ink_acc_trgt.innerHeight !== undefined ? __ink_acc_trgt.innerHeight : null)})();
(() => {let __ink_assgn_trgt = __as_ink_string(Canvas); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(width, Width) : (__ink_assgn_trgt.width) = Width; return __ink_assgn_trgt})();
(() => {let __ink_assgn_trgt = __as_ink_string(Canvas); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(height, Height) : (__ink_assgn_trgt.height) = Height; return __ink_assgn_trgt})();
setLineWidth(2);
S = {points: 0, ground: (Height * 0.80000000), player: {size: 100, x: (Width / 2), y: 0, px: 0, py: 0}};
E = {UpPressed: false, DownPressed: false, LeftPressed: false, RightPressed: false};
on(window, __Ink_String(`keydown`), evt => {return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[key] || null : (__ink_acc_trgt.key !== undefined ? __ink_acc_trgt.key : null)})(), [[() => __Ink_String(` `), () => __ink_match((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})(), [[() => 0, () => (() => {let __ink_assgn_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(py, ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() - (Launch / FPS))) : (__ink_assgn_trgt.py) = ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() - (Launch / FPS)); return __ink_assgn_trgt})()]])], [() => __Ink_String(`ArrowUp`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(UpPressed, true) : (__ink_assgn_trgt.UpPressed) = true; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowDown`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(DownPressed, true) : (__ink_assgn_trgt.DownPressed) = true; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowLeft`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(LeftPressed, true) : (__ink_assgn_trgt.LeftPressed) = true; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowRight`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(RightPressed, true) : (__ink_assgn_trgt.RightPressed) = true; return __ink_assgn_trgt})()], [() => __Ink_Empty, () => log((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[key] || null : (__ink_acc_trgt.key !== undefined ? __ink_acc_trgt.key : null)})())]])});
on(window, __Ink_String(`keyup`), evt => {return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[key] || null : (__ink_acc_trgt.key !== undefined ? __ink_acc_trgt.key : null)})(), [[() => __Ink_String(`ArrowUp`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(UpPressed, false) : (__ink_assgn_trgt.UpPressed) = false; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowDown`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(DownPressed, false) : (__ink_assgn_trgt.DownPressed) = false; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowLeft`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(LeftPressed, false) : (__ink_assgn_trgt.LeftPressed) = false; return __ink_assgn_trgt})()], [() => __Ink_String(`ArrowRight`), () => (() => {let __ink_assgn_trgt = __as_ink_string(E); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(RightPressed, false) : (__ink_assgn_trgt.RightPressed) = false; return __ink_assgn_trgt})()], [() => __Ink_Empty, () => log((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[key] || null : (__ink_acc_trgt.key !== undefined ? __ink_acc_trgt.key : null)})())]])});
controls = () => (() => {__ink_match((() => {let __ink_acc_trgt = __as_ink_string(E); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[UpPressed] || null : (__ink_acc_trgt.UpPressed !== undefined ? __ink_acc_trgt.UpPressed : null)})(), [[() => true, () => (() => {let __ink_assgn_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(size, min([((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() * 1.02000000), MaxSize])) : (__ink_assgn_trgt.size) = min([((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() * 1.02000000), MaxSize]); return __ink_assgn_trgt})()]]); __ink_match((() => {let __ink_acc_trgt = __as_ink_string(E); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[DownPressed] || null : (__ink_acc_trgt.DownPressed !== undefined ? __ink_acc_trgt.DownPressed : null)})(), [[() => true, () => (() => {let __ink_assgn_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(size, max([((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() / 1.02000000), MinSize])) : (__ink_assgn_trgt.size) = max([((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() / 1.02000000), MinSize]); return __ink_assgn_trgt})()]]); __ink_match((() => {let __ink_acc_trgt = __as_ink_string(E); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[LeftPressed] || null : (__ink_acc_trgt.LeftPressed !== undefined ? __ink_acc_trgt.LeftPressed : null)})(), [[() => true, () => (() => {let __ink_assgn_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() - (Force / FPS))) : (__ink_assgn_trgt.px) = ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() - (Force / FPS)); return __ink_assgn_trgt})()]]); return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(E); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[RightPressed] || null : (__ink_acc_trgt.RightPressed !== undefined ? __ink_acc_trgt.RightPressed : null)})(), [[() => true, () => (() => {let __ink_assgn_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() + (Force / FPS))) : (__ink_assgn_trgt.px) = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() + (Force / FPS)); return __ink_assgn_trgt})()]])})();
physics = obj => (() => {let mass = (((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})()) / 10000); let dx = (((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() / mass) / FPS); let dy = (((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() / mass) / FPS); (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(x, __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[x] || null : (__ink_acc_trgt.x !== undefined ? __ink_acc_trgt.x : null)})() + dx)) : (__ink_assgn_trgt.x) = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[x] || null : (__ink_acc_trgt.x !== undefined ? __ink_acc_trgt.x : null)})() + dx); return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(y, __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})() + dy)) : (__ink_assgn_trgt.y) = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})() + dy); return __ink_assgn_trgt})(); __ink_match((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})(), [[() => 0, () => (() => {frictiondPx = (((sign((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})()) * FrictionCoeff) * mass) / FPS); return __ink_match((abs((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})()) > abs(frictiondPx)), [[() => true, () => (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, ((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() - frictiondPx)) : (__ink_assgn_trgt.px) = ((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})() - frictiondPx); return __ink_assgn_trgt})()], [() => __Ink_Empty, () => (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, 0) : (__ink_assgn_trgt.px) = 0; return __ink_assgn_trgt})()]])})()]]); __ink_match(((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[x] || null : (__ink_acc_trgt.x !== undefined ? __ink_acc_trgt.x : null)})() < 0), [[() => true, () => (() => {(() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(x, 0) : (__ink_assgn_trgt.x) = 0; return __ink_assgn_trgt})(); return (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, (__ink_negate(0.90000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})())) : (__ink_assgn_trgt.px) = (__ink_negate(0.90000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})()); return __ink_assgn_trgt})()})()]]); __ink_match(((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[x] || null : (__ink_acc_trgt.x !== undefined ? __ink_acc_trgt.x : null)})() > Width), [[() => true, () => (() => {(() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(x, Width) : (__ink_assgn_trgt.x) = Width; return __ink_assgn_trgt})(); return (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(px, (__ink_negate(0.90000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})())) : (__ink_assgn_trgt.px) = (__ink_negate(0.90000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[px] || null : (__ink_acc_trgt.px !== undefined ? __ink_acc_trgt.px : null)})()); return __ink_assgn_trgt})()})()]]); return __ink_match(((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})() < 2), [[() => true, () => __ink_match((abs(((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() / mass)) < 30), [[() => true, () => (() => {(() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(y, 0) : (__ink_assgn_trgt.y) = 0; return __ink_assgn_trgt})(); return (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(py, 0) : (__ink_assgn_trgt.py) = 0; return __ink_assgn_trgt})()})()], [() => false, () => (() => {(() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(y, 0) : (__ink_assgn_trgt.y) = 0; return __ink_assgn_trgt})(); return (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(py, (__ink_negate(0.30000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})())) : (__ink_assgn_trgt.py) = (__ink_negate(0.30000000) * (() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})()); return __ink_assgn_trgt})()})()]])], [() => __Ink_Empty, () => (() => {let __ink_assgn_trgt = __as_ink_string(obj); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(py, __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() + (G * mass))) : (__ink_assgn_trgt.py) = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(obj); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[py] || null : (__ink_acc_trgt.py !== undefined ? __ink_acc_trgt.py : null)})() + (G * mass)); return __ink_assgn_trgt})()]])})();
renderGround = () => {return drawLine([0, (() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[ground] || null : (__ink_acc_trgt.ground !== undefined ? __ink_acc_trgt.ground : null)})()], [Width, (() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[ground] || null : (__ink_acc_trgt.ground !== undefined ? __ink_acc_trgt.ground : null)})()])};
renderPlayer = () => (() => {setFill(__Ink_String(`#11b6a5`)); return fillCircle((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[x] || null : (__ink_acc_trgt.x !== undefined ? __ink_acc_trgt.x : null)})(), (((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[ground] || null : (__ink_acc_trgt.ground !== undefined ? __ink_acc_trgt.ground : null)})() - (() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[y] || null : (__ink_acc_trgt.y !== undefined ? __ink_acc_trgt.y : null)})()) - ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() / 2)), ((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[size] || null : (__ink_acc_trgt.size !== undefined ? __ink_acc_trgt.size : null)})() / 2))})();
main = () => (() => {controls(); physics((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[player] || null : (__ink_acc_trgt.player !== undefined ? __ink_acc_trgt.player : null)})()); renderGround(); renderPlayer(); setFont(__Ink_String(`32px sans-serif`)); setFill(__Ink_String(`#000000`)); return writeText(30, 50, string((() => {let __ink_acc_trgt = __as_ink_string(S); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[points] || null : (__ink_acc_trgt.points !== undefined ? __ink_acc_trgt.points : null)})()))})();
loop = () => (() => {clearRect(0, 0, Width, Height); main(); return requestAnimationFrame(loop)})();
loop()
