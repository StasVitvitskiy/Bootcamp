export function crossStreet(trafficLeft, trafficRight) {
    if(trafficLeft == false) {
        if(trafficRight == false) {
            return "cross";
        } else {
            return "traffic on the right";
        }
    } else {
        return "traffic on the left";
    }
}
