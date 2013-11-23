var k = function(a) { return document.getElementsByTagName(a) }, e = k("input"), u = k("div")[2], i, d, o, c
= function(v) { return (v.value)?!isNaN(v.value):false },  cc = function(e, c) { e.target.style.color = (c)?
"red":"green" }, ca = function() { for( i = 0; i < e.length; i++ ) if ( !c(e[i]) ) return 0; return 1 }, x =
function(i) {return e[i].value}, ad=function() { i = x(1); return (x(0)!=0)?[(-i+Math.sqrt(d))/(2*x(0)),(-i-
Math.sqrt(d))/(2*x(0))]:(i==0)?["?"]:[-x(2)/i,"..."]}, w=function(t) { var u=document.createElement("span"),
w; u.innerHTML = t; document.body.appendChild(u); w = u.offsetWidth; document.body.removeChild(u); return w}
, r = function(d) {return d.value.match(/-?([0-9]+e\-?[0-9]*|[0-9]+\.?([0-9]+e\-?[0-9]*|[0-9]*)|[0-9]*)/)[0]
== d.value }; e[0].onkeydown=e[1].onkeydown=e[2].onkeydown = function(v) { this.ll = this.value; setTimeout(
function() { if(!r( v.target)) v.target.value = v.target.ll; else v.target.style.width = w(v.target.value) +
"px"; if (c(v.target)) cc(v, 0); else cc(v, 1); if (!c(e[0])||!c(e[1])||!c(e[2])) { u.innerHTML = ""; return
} else u.innerHTML = "x: "; if ((d = x(1)*x(1) - 4*x(0)*x(2)) >= 0) { u.innerHTML += ad()[0] + ((d == 0)?"":
", " + ad()[1]); } else { var y = function(z) {return -x(1)/(2*x(0)) + ((z)?"+":"-") + Math.sqrt(-d)/(2*x(0)
) + "i"}; u.innerHTML += y(1) + ", " + y(0); }}, 0) }; console.log("Equation solving in 13 lines by ZitRo");