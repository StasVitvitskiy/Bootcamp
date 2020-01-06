export function turnLeft(greenArrow, greenLight, yellowArrow, oppositeTraffic, trafficMiddle) {
    const trafficInTheMiddleError = "Traffic in the middle";
    const proceed = "Proceed";
    if(greenArrow == true || yellowArrow == true) {
        if(trafficMiddle == false) {
            return proceed;
        } else {
            return trafficInTheMiddleError;
        }
    } else if(greenLight == true) {
        if(oppositeTraffic == false) {
            if(trafficMiddle == false) {
                return proceed;
            } else {
                return trafficInTheMiddleError;
            }
        } else {
            return "Opposite traffic";
        }
    } else {
        return "Red light";
    }
}
