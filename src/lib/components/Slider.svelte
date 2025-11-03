
<script>
    import 'nouislider/dist/nouislider.css';
	import { setupSlider } from '$lib/actions.svelte';

</script>

<div class="slider" id="slider-round" use:setupSlider></div>


<style>
    .slider {
        background-color: var(--grey-850);
        height: .5rem;
        border: none;
        box-shadow: none;
        padding-inline: .1rem 1rem;
        margin: 1.5rem .2rem .5rem;
        cursor: pointer;
        border-radius: unset;
    }

    
    :global(.noUi-handle:before),
    :global(.noUi-handle:after) {
        display: none;
    }
    
    :global(.slider .noUi-handle) {
        background: var(--grey-200);
        max-width: calc(28 / 16 * 1rem);
        max-height: calc(28 / 16 * 1rem);
        border-radius: 50%;
        transform: translateY(-18%);
        padding: 0;
        box-shadow: none;
        cursor: pointer;
    }
    
    :global(.slider .noUi-handle:hover) {
        border: .15rem solid var(--green-200);
        background-color: var(--grey-850);
    }
    
    :global(.noUi-touch-area) {
        border: .1rem solid transparent;
        position: absolute;
        top: -0.62rem;
        left: -0.62rem;
        right: -0.62rem;
        bottom: -0.62rem;
        width: auto;
        height: auto;
    }

    :global(.noUi-handle-lower) {
        display: none;
    }
    
    :global(.noUi-connects) {
        border-radius: unset;
    }

    :global(.noUi-connect) {
        background-color: var(--green-200);
    }

</style>