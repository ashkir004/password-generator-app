<script>
    import copy from '$lib/assets/icon-copy.svg';
    import ClipBoardJS from 'clipboard';

    let { password } = $props();
    let copied = $derived(password ? false : null);

    $effect(() => {
        new ClipBoardJS('.copy');
    });

    
</script>

    <div class="pass-display">
        <p id="password" class="password {password ? 'light' : ''}">{password ? password : "P4$5WOrD"}</p>
        <div class="copied">
            <p class="text-preset-3 {copied ? 'visible' : 'hidden'}">COPIED</p>
            <button class="copy" onclick={() => copied = true} data-clipboard-target="#password">
                <img src="{copy}" alt="Copy password" class="copy-img"/>
            </button>
        </div>
    </div>
<style>

.pass-display {
    width: 100%;
    background-color: var(--grey-800);
    padding: var(--sp-200);
    display: flex;
    gap: 1rem;
    align-items: baseline;
}

.password {
    color: var(--grey-700);
    border: none;
    font-family: "JetBrainsMonoBold";
    font-size: calc(24 / 16 * 1rem);
    line-height: calc(32 / 16 * 1rem);
}

.password.light {
    color: var(--grey-200);
}

.copied {
    color: var(--green-200);
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: var(--sp-100);
    position: absolute;
    right: 0;
    transform: translateX(-50%);
    backdrop-filter: blur(.1rem);
}

.copied p {
    font-family: "JetBrainsMonoBold";
    font-size: calc(16 / 16 * 1rem);
    line-height: calc(20 / 16 * 1rem);
}

.hidden {
    visibility: hidden;
}

.visible {
    visibility: visible;
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
}

.copy-img {
    width: 1.5rem;
    height: 1.5rem;
}

@media (min-width: 48rem) {

    .pass-display {
        padding: var(--sp-200) var(--sp-400);
    }

    .password {
        font-size: calc(32 / 16 * 1rem);
		line-height: calc(42 / 16 * 1rem);
    }

    .copied {
        position: relative;
        transform: unset;
    }

    .copied p {
        font-size: calc(18 / 16 * 1rem);
        line-height: calc(24 / 16 * 1rem);
    }
}


</style>