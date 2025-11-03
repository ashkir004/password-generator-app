
<script>
    import { onMount } from 'svelte';
    import noUiSlider from 'nouislider';
    import 'nouislider/dist/nouislider.css';

    let slider;

    let {startValue, range, step, handleUpdate } = $props();

    onMount(() => {
        let nouislider = noUiSlider.create(slider, {
            start: startValue,
            range,
            step : step,
        });

        nouislider.on('update', handleUpdate);
        
    });

</script>

<div class="slider" bind:this={slider}></div>


<style>

    
    :global(.noUi-target) {
        background-color: var(--green-200);
        height: .5rem;
        border: none;
        padding: 0;
        margin: 1rem 0;
        border-radius: 0;
        padding-right: 10px;
        cursor: pointer;
    }

    :global(.noUi-handle) {
        background: var(--grey-200);
        max-width: calc(20 / 16 * 1rem);
        max-height: calc(20 / 16 * 1rem);
        border-radius: 50%;
        padding: 0;
        box-shadow: none;
    }
    
    :global(.noUi-handle::before, .noUi-handle::after) {
        visibility: hidden;
    }
    


</style>