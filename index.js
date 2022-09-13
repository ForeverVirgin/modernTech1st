var now = new Date()
var now3 = new Date(now.getFullYear()+1,0,1,0,0,0)
timeInMs = now3-now
weeks=Math.floor(timeInMs/(3600000*24*7))
timeInMs = timeInMs-weeks*3600000*24*7
days=Math.floor(timeInMs/(3600000*24))
timeInMs = timeInMs-days*3600000*24
hours=Math.floor(timeInMs/(3600000))
timeInMs = timeInMs-hours*3600000
minutes=Math.floor(timeInMs/(60000))
timeInMs = timeInMs-minutes*60000
sec=Math.floor(timeInMs/(1000))
timeInMs = timeInMs-sec*1000
console.log("До нового года осталось " + weeks + " недель, " + days +" дней, " + hours +" часов, " + minutes +" минут, " + sec +" секунд, " + timeInMs +" миллисекунд, ")