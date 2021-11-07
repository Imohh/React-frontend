import React from "react"

function MyInfo() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (date < 12) {
    timeOfDay = "morning"
    styles.color = "#000"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay ="night"
    styles.color = "#ccc"
  }


  return (
    <div>
      <h1 style = {styles}>good {timeOfDay}!</h1>
    </div>
  )
}


export default MyInfo