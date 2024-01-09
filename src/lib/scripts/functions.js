// 

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * @param {number} ratio 
 */
export function determineAspectRatioType(width, height, ratio=1) {
    if (width / height >= ratio) return "horizontal";
    return "vertical";
}

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * @param {Object<string, number>} ratios 
 */
export function determineAspectRatioTypeExt(width, height, ratios) {
    if (ratios == undefined) return determineAspectRatioType(width, height);
    
    let key_ratios = Object.keys(ratios)
                           .sort((a, b) => ratios[b] - ratios[a]);
    
    for (let i = 0; i < key_ratios.length; i++) {
        let key = key_ratios[i];
        let ratio = ratios[key];
        if (width / height >= ratio) return key;
    }
    return key_ratios[key_ratios.length - 1];
}
