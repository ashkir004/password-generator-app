
<script>
    import { passOptions } from "$lib/options.svelte";
    import PasswordOptions from "$lib/components/PasswordOptions.svelte";
    import PasswordDisplay from "$lib/components/PasswordDisplay.svelte";
    import PasswordLength from "$lib/components/PasswordLength.svelte";
    import PasswordStrength from "$lib/components/PasswordStrength.svelte";
	import { generatePassword } from "$lib/generatePassword";
	import PasswordGenerate from "$lib/components/PasswordGenerate.svelte";


    let password = $derived(generatePassword(passOptions));
    // let password = $state("P4$5WOrD");

    function setCharacterLength(charLength) {
        passOptions.length = charLength;
        if (charLength <= 6) passOptions.strength = 1;
    }

    function setOptions(options) {
        // passOptions = options;
       for (const option in passOptions) {
            if (!Object.hasOwn(passOptions, option)) continue;
            passOptions[option] = options[option];
       }
    }


    function setPassword() {
        password = generatePassword(passOptions);
    }


</script>
<div class="container">
    <div class="pass-gen-wrapper">
        
        <h1 class="logo">Password Generator</h1>
        
        <form>
            <PasswordDisplay password={password}/>
            <div class="controls-wrapper">
                <div class="controls">
                    <PasswordLength setOptions = { setOptions } />
                    <PasswordOptions setOptions={setOptions} />
                    <PasswordStrength />
                </div>
                <PasswordGenerate setPassword={setPassword} />
            </div>
        </form>
    </div>
</div>

<style>

    .container {
        /* padding: var(--sp-200); */
        /* background-color: bisque; */
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pass-gen-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--sp-200);
        /* width: 100%; */
        min-width: 21rem;
        max-width: 21rem;
    }

	.logo {
        font-family: "JetBrainsMonoBold";
		font-size: calc(16 / 16 * 1rem);
		line-height: calc(20 / 16 * 1rem);
		color: var(--grey-600);
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
        gap: var(--sp-200);
	}

    .controls-wrapper {
        background-color: var(--grey-800);
        padding: var(--sp-200);
    }

    .controls {
        display: flex;
        flex-direction: column;
        gap: var(--sp-400);
        margin-block-end: var(--sp-200);
    }

    @media (min-width: 48rem) {

        .pass-gen-wrapper {
            gap: var(--sp-400);
            min-width: 36rem;
            max-width: 36rem;
        }

        form {
            gap: var(--sp-300);
        }

        .controls-wrapper {
            padding: var(--sp-400) var(--sp-400);
        }

        .controls {
            gap: var(--sp-400);
            margin-block-end: var(--sp-400);
        }

        .logo {
            font-size: calc(24 / 16 * 1rem);
		    line-height: calc(32 / 16 * 1rem);
        }
    }
    
</style>