<script>
    import { determineInnerWidthType } from "$lib";

    import Card from "./Card.svelte";
    import CardImage from "./Card_Image.svelte";
    import Cover from "./Cover.svelte";
    import IconVideo from "./IconVideo.svelte";
    import Section from "./Section.svelte";
    import Visibility from "./Visibility.svelte";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!-- Intro -->
<Cover overlayContent={true} styleCoverShape="" styleItemShape="">
    <svelte:fragment slot="content">
        <IconVideo
            poster="./home-title-anim.png"
            src={{ mov: "./home-title-anim.mov", webm: "./home-title-anim.webm" }}
            style="max-w-[40rem] min-w-0 mx-auto transition duration-300"
            styleObserving="opacity-100 translate-y-0"
            styleNotObserving="opacity-0 -translate-y-8"
            threshold={1}
        >
            <h4 class="font-sans text-center">Programmer & Graphics Designer</h4>
        </IconVideo>
    </svelte:fragment>

    <div slot="graphic" class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-2">
        <img src="./home-title-0.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-1.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-2.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-3.jpeg" alt="" class="size-full object-cover" />
    </div>
</Cover>

<!-- About Me -->
<Visibility
    once={true}
    style="transition duration-300"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.5}
>
    <Section icon="./favicon.png">
        <h2 slot="header" class="font-sans">About Me</h2>
        <p slot="content" class="font-sans">
            My name is Samuel Pita, and I am a Filipino local in Whistler, and have been for almost
            a decade at this point. I like computers and technology; I like programming, and I’m
            certain that will be what I will be passionate about for a while. I also like doing
            media and web design, and I’m a strong advocate for better urbanism. I was born in the
            Philippines in 2006, and I’ve moved several times before my family and I settled in
            Whistler in the summer of 2014. I’m currently in Whistler Secondary as a Grade 12
            student, and I hope to be in Vancouver, studying Computer Science in BCIT or Douglas
            College next year!
        </p>
    </Section>
</Visibility>

<!-- Capstone Project -->
<Visibility
    once={true}
    style="transition duration-300 md:mb-4"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.25}
>
    <Cover
        flipped={true}
        styleContentColor="bg-gradient-to-tr from-teal-800 to-emerald-700"
        styleCover="max-w-[80rem] mx-auto h-[50svh]"
    >
        <svelte:fragment slot="content">
            <h2 class="font-sans text-center lg:mb-2">
                <a href="/portfolio">My Capstone Portfolio</a>
            </h2>
            <h4 class="font-sans text-center">Check it out!</h4>
        </svelte:fragment>

        <img src="./home-portfolio.jpeg" alt="" class="size-full object-cover" slot="graphic" />
    </Cover>
</Visibility>

<!-- Programming -->
<Visibility
    once={true}
    style="transition duration-300 md:mb-4"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.25}
>
    <Cover
        styleContentColor="bg-gradient-to-bl from-purple-800 to-sky-700"
        styleCover="max-w-[80rem] mx-auto h-[50svh]"
    >
        <svelte:fragment slot="content">
            <h2 class="font-sans text-center lg:mb-2">
                <a href="/code">Programming Projects</a>
            </h2>
            <h4 class="font-sans text-center">Includes neatly written source code.</h4>
        </svelte:fragment>

        <div slot="graphic" class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-2">
            <img src="./code/python-logo.png" alt="" class="size-full object-contain" />
            <img src="./code/js-logo.png" alt="" class="size-full object-contain" />
        </div>
    </Cover>
</Visibility>

<!-- Arts -->
<Visibility
    once={true}
    style="transition duration-300"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.15}
>
    <Cover
        flipped={true}
        styleContentColor="bg-gradient-to-l from-fuchsia-800 to-rose-700"
        styleCover="max-w-[80rem] mx-auto h-[75svh]"
    >
        <svelte:fragment slot="content">
            <h2 class="font-sans text-center lg:mb-2">
                <a href="/art">C#t Design</a>
            </h2>
            <h4 class="font-sans text-center">Digital arts & illustrations I made</h4>
        </svelte:fragment>

        <div slot="graphic" class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-2">
            <img src="./art/ma-night-tempo.png" alt="" class="size-full object-contain" />
            <img
                src="./art/student-planner-2023-2024.png"
                alt=""
                class="size-full object-contain row-span-2"
            />
            <img src="./art/tanay.png" alt="" class="size-full object-contain" />
        </div>
    </Cover>
</Visibility>
