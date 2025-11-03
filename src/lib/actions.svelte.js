import noUiSlider from 'nouislider';
import { passOptions, setOptions } from './options.svelte';


export function setupSlider(slider, handleUpdate) {

    noUiSlider.create(slider, {
        start: [1, 10],
        connect: true,
        range: {
            'min': 1,
            'max': 20
        }
    });

    slider.noUiSlider.disable(0);

    slider.noUiSlider.on('update', (values, handle) => {
        let merged = {...passOptions, length : parseInt(values[1])};
        setOptions(merged);
    });
    
}