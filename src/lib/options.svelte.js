
export const passOptions = $state({
            length: 10,
            strength: 0,
            lowercase: false,
            uppercase: false,
            number: false,
            symbol: false,
        });


export function setOptions(options) {

    for (const option in passOptions) {
        if (!Object.hasOwn(passOptions, option)) continue;
        passOptions[option] = options[option];
    }
}