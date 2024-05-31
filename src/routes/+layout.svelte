<script>
    import "../app.css";
    import Loading from "$lib/components/Loading.svelte";
</script>

<Loading />

<slot />

<footer class="w-full p-main-x flex justify-center">
    <div class="w-full max-w-main p-main-y flex flex-col items-center border-t-2">
        <h4 class="font-sans">made with love by</h4>
        <h2 class="font-display mb-8">Samuel Pita</h2>
        <p class="font-sans text-neutral-500">
            <a href="mailto:samuelpita08@gmail.com">samuelpita08@gmail.com</a>
        </p>
        <p class="font-sans text-neutral-500">
            <a href="tel:16049059620">(604)-905 9620</a>
        </p>
    </div>
</footer>
