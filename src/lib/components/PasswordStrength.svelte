<script>
	import { passOptions } from "$lib/options.svelte";
	import { onMount } from "svelte";

    const STRENGTH_LABEL = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

    function getStrengthLabel(level, options, STRENGTH_LABEL) {

        if (options.strength === 0 || level >= options.strength) return "";

        if (options.strength) {
            return STRENGTH_LABEL[options.strength - 1].replace(/\s|!/g, '').toLowerCase();
        }
    }
    
</script>

<div class="pass-strength">
    <p class="strength">STRENGTH</p>
    <div class="strength-bar text-preset-3">
        <p class="strength-status">{passOptions.strength ? STRENGTH_LABEL[passOptions.strength - 1] : ''}</p>
        <div class="bar-group">
            {#each [0, 1, 2, 3] as level}
                <div class="bar {getStrengthLabel(level, passOptions, STRENGTH_LABEL)}"></div>
            {/each}
        </div>
    </div>
</div>

<style>
    .pass-strength {
        font-family: "JetBrainsMonoBold";
        display: flex;
        background-color: var(--grey-850);
        padding: var(--sp-200) var(--sp-200);
        color: var(--grey-600);
        align-items: center;
    }
    
    .strength {
		font-size: calc(16 / 16 * 1rem);
		line-height: calc(20 / 16 * 1rem);
    }

    .strength-bar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-left: auto;
        align-items: center;
        font-size: calc(18 / 16 * 1rem);
		line-height: calc(24 / 16 * 1rem);
    }

    .strength-status {
        color: var(--grey-200);
    }
    
    .bar-group {
        display: flex;
        flex-direction: row;
        gap: .5rem;
    }

    .bar {
        width: .6rem;
        height: 2rem;
        border: .15rem solid var(--grey-200);
        flex-grow: 0;
    }

    .tooweak, .weak, .medium, .strong {
        border: none;
    }

    .tooweak {
        background-color: var(--red);
    }

    .weak {
        background-color: var(--orange-400);
    }

    .medium {
        background-color: var(--yellow-300);
    }

    .strong {
        background-color: var(--green-200);
    }

    @media (min-width: 48rem) {
        .strength {
            font-size: calc(18 / 16 * 1rem);
		    line-height: calc(24 / 16 * 1rem);
        }

        .strength-bar {
            font-size: calc(24 / 16 * 1rem);
		    line-height: calc(32 / 16 * 1rem);
        }
    }


</style>