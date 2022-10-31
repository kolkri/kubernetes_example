const randomHash = Math.random().toString(36).substring(2,30)

const getHashNow = () => {
  
    console.log(new Date(), randomHash)
  
    setTimeout(getHashNow, 5000)
}
  
getHashNow()