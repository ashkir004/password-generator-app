<script>
	import { passOptions, setOptions } from '$lib/options.svelte';
    import 'pretty-checkbox/dist/pretty-checkbox.min.css';

    let checkedOptions = $state(['uppercase', 'lowercase', 'number']);

    $effect(() => {
        let options = {
            length: passOptions.length,
            strength: 0,
            lowercase: false,
            uppercase: false,
            number: false,
            symbol: false,
        }

        if (checkedOptions.length === 0) {
            options.strength = 0;
        } else {
            checkedOptions.forEach((option) => {
                options[option] = true;
                options.strength += 1;
            });

            if (passOptions.length < 8) options.strength = 1;
        }

        setOptions(options);

    });

    let options = [
        {
            label: "Include Uppercase Letters",
            id: "uppercase"
        },
        {
            label: "Include Lowercase Letters",
            id: "lowercase"
        },
        {
            label: "Include Numbers",
            id: "number"
        },
        {
            label: "Include Symbols",
            id: "symbol",
        },
    ];

</script>

<div class="pass-options">
    {#each options as option}
    <div class="pretty p-svg">
        <input type="checkbox"
                    id={option.id} value={option.id} 
                    bind:group={checkedOptions}
                        />
        <div class="state p-primary">
            <svg class="svg" width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
            </svg>
            <label for="check" class="option"><p>{ option.label }</p></label>
        </div>
    </div>
    {/each}
</div>


<style>

    .pass-options {
        color: var(--grey-200);
        display: flex;
        flex-direction: column;
        gap: var(--sp-200);
        font-family: "JetBrainsMonoBold";
		font-size: calc(16 / 16 * 1rem);
		line-height: calc(20 / 16 * 1rem);
    }

    .svg {
        top: .1rem !important;
        left: .08rem !important;
    }

    .pretty label:before {
        border: .15rem solid var(--green-200)!important;
    }

    .pretty input:checked~.state.p-primary label:after {
        background-color:#A4FFAF!important
    }

    .option p { 
        margin-left: var(--sp-200);
    }

</style>