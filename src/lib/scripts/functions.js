//

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {number} ratio
 */
export function determineAspectRatioType(width, height, ratio = 0.9) {
    if (width / height >= ratio) return "horizontal";
    else return "vertical";
}

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {Object<string, number>} ratios
 */
export function determineAspectRatioTypeExt(width, height, ratios) {
    let key_ratios = Object.keys(ratios).sort((a, b) => ratios[b] - ratios[a]);

    for (let i = 0; i < key_ratios.length; i++) {
        let key = key_ratios[i];
        let ratio = ratios[key];

        if (width / height >= ratio) return key;
    }

    return key_ratios[key_ratios.length - 1];
}

/**
 *
 * @param {number} width
 */
export function determineInnerWidthType(width) {
    if (width >= 1536) return "2xl";
    else if (width >= 1280) return "xl";
    else if (width >= 1024) return "lg";
    else if (width >= 768) return "md";
    else return "sm";
}

/**
 *
 * @param {number} width
 * @param {Object<string, number>} types
 */
export function determineInnerWidthTypeExt(width, types) {
    let key_types = Object.keys(types).sort((a, b) => types[b] - types[a]);

    for (let i = 0; i < key_types.length; i++) {
        let key = key_types[i];
        let type = types[key];

        if (width >= type) return key;
    }

    return key_types[key_types.length - 1];
}
