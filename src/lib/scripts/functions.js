// functions.js

/**
 * @param {number} a
 * @param {number} b
 * @param {number} alpha
 */
export function lerp(a, b, alpha) {
    return a + alpha * (b - a);
}

/**
 * @param {string} type
 */
export function valueInnerWidthType(type) {
    switch (type) {
        case "2xl":
            return 1536;
        case "xl":
            return 1280;
        case "lg":
            return 1024;
        case "md":
            return 768;
        case "sm":
            return 640;
    }
    return 0;
}
