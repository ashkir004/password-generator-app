<script>
    import arrowRight from '$lib/assets/icon-arrow-right.svg';
    import { onMount } from "svelte";
    import { generatePassword } from '$lib/generatePassword';

    let { setPassword } = $props();
</script>

<div class="pass-generator">
    <button onclick={(e) => {
        e.preventDefault();
        setPassword();
    }}>
        GENERATE 
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
        </svg>
    </button>
</div>

<style>
    button {
        width: 100%;
        padding: var(--sp-200) 0;
        background-color: var(--green-200);
        color: var(--grey-850);
        border: none;
        cursor: pointer;
        font-family: "JetBrainsMonoBold";
		font-size: calc(16 / 16 * 1rem);
		line-height: calc(20 / 16 * 1rem);
    }
    
    button:hover {
        background-color: transparent;
        color: var(--green-200);
        outline: .15rem solid var(--green-200);
    }

    button svg {
        margin-left: var(--sp-200);
    }
    
    button svg path {
        fill: var(--grey-850);
    }
    button:hover svg path {
        fill: var(--green-200);
    }

    @media (min-width: 48rem) {
        button {
            font-size: calc(18 / 16 * 1rem);
		    line-height: calc(24 / 16 * 1rem);
        }
    }
</style>