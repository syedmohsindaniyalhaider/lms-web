export function isShallowEqual(objA: any, objB: any) {
    if (objA === objB) {
        return true
    }

    if (!objA || !objB) {
        return false
    }

    const aKeys = Object.keys(objA)
    const bKeys = Object.keys(objB)
    const len = aKeys.length

    if (bKeys.length !== len) {
        return false
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < len; i++) {
        const key = aKeys[i]

        if (objA[key] !== objB[key] || !Object.hasOwn(objB, key)) {
            return false
        }
    }

    return true
}

export function b64EncodeUnicode(str: any) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(('0x' + p1) as any)
        })
    )
}

export function b64DecodeUnicode(str: any) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
        atob(str)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )
}
