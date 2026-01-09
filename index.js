let TotalPrice = 0
const totalDisplay = document.querySelector("h3")
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        let priceText = btn.parentElement.querySelector("h4").textContent
        priceText = priceText.replace("$","").split(".").join("")
        TotalPrice += +priceText
        totalDisplay.textContent = `TotalPrice = ${TotalPrice.toLocaleString()}`
    })
})
