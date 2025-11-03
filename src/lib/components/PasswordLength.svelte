<script>
    import Slider from '$lib/components/Slider.svelte';
    import { passOptions } from '$lib/options.svelte';
</script>

<div class="password-length">
    <div class="char-length-wrapper">
        <label for="character-length" class="char-length">Character Length
        </label>
        <p class="length">{passOptions.length}</p>
    </div>

    <Slider />
    
</div>
<style>
    .password-length {
        color: var(--grey-200);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--sp-300);
        display: block;
        width: 100%;
        font-family: "JetBrainsMonoBold";
		font-size: calc(18 / 16 * 1rem);
		line-height: calc(24 / 16 * 1rem);
    }

    .char-length-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .length {
        font-family: "JetBrainsMonoBold";
		font-size: calc(24 / 16 * 1rem);
		line-height: calc(32 / 16 * 1rem);
        float: right;
        color: var(--green-200);
    }

    @media (min-width: 48rem) {
        .length {
            font-size: calc(32 / 16 * 1rem);
		    line-height: calc(42 / 16 * 1rem);
        }
    }
</style>