
export function generatePassword(options) {
    const characterSet = buildCharacterSet(options);

    const chars = [];

    for (let i=1; i<=options.length; i++) {
        const index = generateSecureRandomIndex(characterSet.length);
        chars.push(characterSet[index]);
    }

    return chars.join('');
}

function generateSecureRandomIndex(length) {
    const arr = new Uint32Array(1);
    let index = crypto.getRandomValues(arr)[0];
    let range = 0xFFFFFFFF + 1;
    const limit = Math.floor(range / length) * length;
    
    if (index >= limit) {
        return generateSecureRandomIndex(length);
    }

    return index % length;
}


function buildCharacterSet({length, lowercase, uppercase, number, symbol}) {
    let set = "";
    if (lowercase) set += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) set+= "0123456789";
    if (symbol) set+= "!@#$%^&*()-_=+[]{};:,.<>/?~\`|\\";

    set = Array.from(new Set(set)).join("");
    return set;
}
