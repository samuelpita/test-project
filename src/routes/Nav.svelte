<script>
    let isOpen = false;

    /** @type {{ href: string, name: string }[]} */
    export let links = [
        { href: "#header1", name: "Header 1" },
        { href: "#header2", name: "Header 2" },
        { href: "#header3", name: "Header 3" },
    ];
</script>

<div>
    {#if isOpen}
        <button
            on:click={() => {
                isOpen = false;
            }}
        >
            <p class="font-sans">Back</p>
        </button>
        <nav>
            <ol>
                {#each links as link}
                    <li>
                        <a href={link.href}>{link.name}</a>
                    </li>
                {/each}
            </ol>
        </nav>
    {:else}
        <button
            on:click={() => {
                isOpen = true;
            }}
        >
            <p class="font-sans">Open Nav</p>
        </button>
    {/if}
</div>
