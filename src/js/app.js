export function lifeIndicator(ind) {
    let status = '';
    if(ind.health > 50) {
        status = 'healthy';
    } else if(ind.health >= 15) {
        status = 'wounded';
    } else {
        status = 'critical';
    }
    return status;
}