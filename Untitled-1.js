
// H3= عقرب الساعات   M3= عقرب الدقائق     S3= عقرب الثواني

setInterval(setclock , 1000)

const S3 = document.querySelector('[s3]')
const M3 = document.querySelector('[m3]')
const H3 = document.querySelector('[h3]')

function setclock()  {
    const currentDate = new Date()
    const secR =    currentDate.getSeconds() /60
    const minR =   (secR + currentDate.getMinutes()) /60
    const hourR =  (minR + currentDate.getHours()) /12

    setRotation (S3,secR)
    setRotation (M3,minR)
    setRotation (H3,hourR)
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation' , rotationRatio * 360 )
}

/*function setRotation(element , rotationRatio ) {
    element.style.setProperty('--rotation', rotationRatio * 360 )
    
    
    }*/
    