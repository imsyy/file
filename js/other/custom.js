/*一言GET*/
fetch('https://v1.hitokoto.cn/')
.then(response => response.json())
.then(data => {
  const hitokoto = document.getElementById('hitokoto_text')
  const from = document.getElementById('from_text')
  hitokoto.innerText = data.hitokoto
  from.innerText = data.from
})
.catch(console.error)

/*天气GET*/
fetch('https://www.tianqiapi.com/free/day?appid=43986679&appsecret=TksqGZT7')
.then(response => response.json())
.then(data => {
  const wea = document.getElementById('wea_text')
  const city = document.getElementById('city_text')
  const tem_night = document.getElementById('tem_night')
  const tem_day = document.getElementById('tem_day')
  const win = document.getElementById('win_text')
  const win_speed = document.getElementById('win_speed')
  const air = document.getElementById('air_text')
  const update_time = document.getElementById('update_time')
  wea.innerText = data.wea
  city.innerText = data.city
  tem_night.innerText = data.tem_night
  tem_day.innerText = data.tem_day
  win.innerText = data.win
  win_speed.innerText = data.win_speed
  air.innerText = data.air
  update_time.innerText = data.update_time
})
.catch(console.error)

/*倒计时*/
function getRTime() {
var EndTime = new Date('2022/02/01 00:00:00'); //截止时间
var NowTime = new Date(); //累计时间
var date = new Date(); //当前时间
var t = EndTime.getTime() - NowTime.getTime();

//累减
// var d=Math.floor(t/1000/60/60/24);
// t-=d*(1000*60*60*24);
// var h=Math.floor(t/1000/60/60);
// t-=h*60*60*1000;
// var m=Math.floor(t/1000/60);
// t-=m*60*1000;
// var s=Math.floor(t/1000);

//累加
var d = Math.floor(t / 1000 / 60 / 60 / 24);
var h = Math.floor(t / 1000 / 60 / 60 % 24);
var m = Math.floor(t / 1000 / 60 % 60);
var s = Math.floor(t / 1000 % 60);

document.getElementById("t_d").innerHTML = d + " ";
document.getElementById("t_h").innerHTML = " " + h + " ";
document.getElementById("t_m").innerHTML = " " + m + " ";
document.getElementById("t_s").innerHTML = " " + s + " ";
}
setInterval(getRTime, 1000);