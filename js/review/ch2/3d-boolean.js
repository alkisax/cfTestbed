let isDarkMode = false
console.log(`is darkmode enabled: ${isDarkMode}`)

let username = ""
let isUserLoggedIn = false
let isDashboardON = false

isUserLoggedIn = true
username = "Anna"
isDashboardON = isUserLoggedIn && username // αν ισχύει το πρώτο τοτε η μεταβλητη θα πάρει τιμη username
console.log(isDashboardON)