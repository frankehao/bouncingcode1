let demo = document.querySelector('#demo')
let n = 0
//旋转角度
let deg = 0
let string2 = ''
let string = `/*你好,我是一名前端新人
我要画一个太极图*/
#div1 {
  width: 400px;
  height: 400px;
  border: 1px solid #666;
}
/*首先我要画一个圆*/
#div1 {
  border-radius: 50%;
}
/*太极图是一黑一白的*/
#div1{
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);}
/*上面有一个大头*/
#div1::before{
  top: 0;
  left: 25%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 88%, rgba(255,255,255,1) 100%); }
/*下面有一个大头*/
#div1::after{
  top: 50%;
  left: 25%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 93%, rgba(0,0,0,1) 100%);}
`

// 速度控制滑块的代码开始

//golbal
let speed
var pv = null
var sd = null
window.onload = function () {
  pv = new PicView('/images/m01.jpg')
  sd = new Slider(
    function (p) {
      document.getElementById('sliderBlock').innerHTML = 2 * p + '%'
      speed = p
      // console.log(speed)
      pv.expand((2 * p) / 100)
    },
    function () {}
  )
}
var PicView = function (url, alt) {
  this.url = url
  this.obj = null
  this.alt = alt ? alt : ''
  this.realWidth = null
  this.realHeight = null
  this.zoom = 1
  this.init()
}
PicView.prototype.init = function () {
  var _img = document.createElement('img')
  _img.src = this.url
  _img.alt = this.alt
  _img.style.zoom = this.zoom
  this.obj = _img
  this.realWidth = _img.offsetWidth
  this.realHeight = _img.offsetHeight
}
PicView.prototype.reBind = function () {
  this.obj.style.width = this.realWidth * this.zoom + 'px'
  this.obj.style.height = this.realHeight * this.zoom + 'px'
  //this.obj.style.zoom = this.zoom;
}
PicView.prototype.expand = function (n) {
  this.zoom = n
  this.reBind()
}
var Slider = function (ing, ed) {
  this.block = document.getElementById('sliderBlock')
  this.percent = 0
  this.value = 0
  this.ing = ing
  this.ed = ed
  this.init()
}
Slider.prototype.init = function () {
  var _sx = 0
  var _cx = 0
  var o = this.block
  var me = this
  o.onmousedown = function (e) {
    var e = window.event || e
    _sx = o.offsetLeft
    _cx = e.clientX - _sx
    document.body.onmousemove = move
    document.body.onmouseup = up
  }
  function move(e) {
    var e = window.event || e
    var pos_x = e.clientX - _cx
    pos_x = pos_x < 13 ? 13 : pos_x
    pos_x = pos_x > 248 + 15 - 50 ? 248 + 15 - 50 : pos_x
    o.style.left = pos_x + 'px'
    me.percent = (pos_x - 13) / 2
    me.ing(me.percent)
  }
  function up() {
    document.body.onmousemove = function () {}
    document.body.onmouseup = function () {}
  }
}
let slider = document.querySelector('#sliderBlock')

// 速度控制滑块的代码结束
let step = function () {
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += '<br>'
    } else {
      string2 += string[n]
    }
    if (string[n] === ' ') {
      string2 += '&nbsp'
    }
    demo.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, n)
    if (n < string.length - 1) {
      step()
    }
    n = n + 1
  }, 0)
}
step()
let tid = setInterval(function () {
  let clock_dfc = document.getElementById('div1')

  clock_dfc.style.transform = 'rotate(' + deg + 'deg)' //改变转盘属性
  deg = deg - (speed / 20 || 1)
}, 5)
