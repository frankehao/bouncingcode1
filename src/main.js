let demo = document.querySelector('#demo')
let n = 0
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
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*上面有一个大头*/
#div1::before{
  top: 0;
  left: 25%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*下面有一个大头*/
#div1::after{
  top: 50%;
  left: 25%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
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
  }, 50)
}
step()
