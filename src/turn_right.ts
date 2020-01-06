export function turnRight(
    greenLight,
    oppositeTraffic,
    trafficOnLeft,
    trafficMiddle
) {
    const proceed = "Proceed";
    const trafficInTheMiddleError = "Traffic in the middle";
    if(greenLight == true) {
        if(trafficMiddle == false) {
            return proceed;
        } else {
            return trafficInTheMiddleError;
        }
    } else if(oppositeTraffic == false) {
        if(trafficOnLeft == false) {
            if(trafficMiddle == false) {
                return proceed;
            } else {
                return trafficInTheMiddleError;
            }
        } else {
            return "Traffic on left";
        }
    } else {
        return "Opposite traffic";
    }
}
