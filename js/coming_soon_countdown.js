/* 
 * Coming soon countdown action
 * @Version 1-0-0
 * @Author Julian Lamm
 */
const targetDate = new Date("April 20, 2025 21:00:00").getTime()
startCountdown(targetDate)

function startCountdown(targetDate) {
  function updateCountdown() {
    let now = new Date().getTime()
    let gap = targetDate - now

    if (gap <= 0) { // target date is now or in the past 
      clearInterval(interval)
      return
    }

    let second = 1000
    let minute = second * 60
    let hour   = minute * 60
    let day    = hour * 24

    // calculate rest time
    let d = Math.floor(gap / (day))
    let h = Math.floor((gap % (day)) / (hour))
    let m = Math.floor((gap % (hour)) / (minute))
    let s = Math.floor((gap % (minute)) / second)

    // set values
    document.getElementById('day').innerText    = d
    document.getElementById('hour').innerText   = h
    document.getElementById('minute').innerText = m
    document.getElementById('second').innerText = s
  }

  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)
}