<script>
    import Card from "$lib/components/Card.svelte";
    import Cover from "$lib/components/Cover.svelte";
    import CoverCard from "$lib/components/CoverCard.svelte";
    import Frame from "$lib/components/Frame.svelte";
    import HeaderBasic from "$lib/components/HeaderBasic.svelte";
    import ImageGrid from "$lib/components/ImageGrid.svelte";
    import ImageTooltip from "$lib/components/ImageTooltip.svelte";
    import VisibilityBasic from "$lib/components/VisibilityBasic.svelte";
</script>

<Cover contentColor="bg-gradient-to-tl from-cyan-900 to-emerald-700">
    <VisibilityBasic slot="content">
        <img
            src="./portfolio/title.png"
            alt="S.P. The Capstone"
            class="w-full max-w-2xl mx-auto object-contain"
        />
    </VisibilityBasic>
    <img src="./portfolio/cover-image.jpeg" alt="" slot="graphic" class="size-full object-cover" />
</Cover>

<main class="w-full flex flex-col items-center">
    <!-- 
        James, Jos, & Nat-nat
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <img
                        src="./portfolio/icon-quote.png"
                        alt="Quote icon"
                        class="w-16 lg:w-20 2xl:w-24 mb-main"
                    />
                    <h3 class="mb-main">
                        <i>
                            Learn from new experiences, and learn how to use that as your strength.
                            Be the main actor for your life.
                        </i>
                    </h3>
                    <p><i>James Paguia, 2023</i></p>
                </VisibilityBasic>

                <VisibilityBasic threshold={0}>
                    <div class="w-full pt-main border-b"></div>
                </VisibilityBasic>
            </Frame>
        </section>

        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <p class="mb-4">
                        I’d like to acknowledge James, who passed away in a car crash, along with
                        his brother-in-law, Jos, and his niece, Nat-nat, on November 26th of last
                        year. James was as much of a computer nerd as I was, and he inspired me to
                        continue following my own passions and to believe in myself. He was the
                        closest I’ll ever have to a best friend, something I've never really had for
                        a long while.
                    </p>
                    <p>
                        This has had a huge impact on my life ever since, especially since James,
                        his brother, my brother, and I had shared our own plans in the future, and
                        the things we would do in our adulthood. As much as I wish they were still
                        alive, I’m grateful for them to have been part of my life, even if it was
                        such a short time in the grand scheme of things.
                    </p>
                </VisibilityBasic>
            </Frame>
        </section>

        <section class="w-full flex flex-col items-center mb-main">
            <VisibilityBasic threshold={0}>
                <ImageGrid cols="grid-cols-3" maxHeight="max-h-lg" round="">
                    <ImageTooltip image="./portfolio/tribute/james-0.jpg" imageAlt="James Paguia" />
                    <ImageTooltip image="./portfolio/tribute/jos-0.jpg" imageAlt="Jos Portillo" />
                    <ImageTooltip
                        image="./portfolio/tribute/natnat-0.jpg"
                        imageAlt="Natalia Paguia-Portillo"
                    />
                </ImageGrid>
            </VisibilityBasic>

            <VisibilityBasic>
                <h2 class="text-center mb-2">R.I.P.</h2>
                <h5 class="text-center">Hoping spectator mode treats y'all well.</h5>
            </VisibilityBasic>
        </section>
    </article>

    <!-- 
        My Family
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-family.png">
                    <h3>My Family</h3>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>

        <VisibilityBasic threshold={0}>
            <ImageGrid cols="grid-cols-2 md:grid-cols-4" round="">
                <ImageTooltip
                    image="./portfolio/family/IMG_4211.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                    style="size-full col-span-2"
                />
                <ImageTooltip
                    image="./portfolio/family/IMG_4213.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                />
                <ImageTooltip
                    image="./portfolio/family/IMG_1174.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                />
            </ImageGrid>
        </VisibilityBasic>

        <Frame margin="" maxWidth="max-w-6xl">
            <!-- 
                Ma & Pa
            -->
            <VisibilityBasic threshold={0}>
                <CoverCard contentColor="bg-gradient-to-tl from-fuchsia-600 to-teal-600">
                    <svelte:fragment slot="content">
                        <h4 class="mb-4 pb-4 border-b-2 border-white">Ma & Pa</h4>
                        <p class="mb-2">
                            As imperfect as my parents can be (and as old-school as they can be in
                            religious faith), I respect them for bringing me and our family into
                            where we are now. We may not be very wealthy; we’re still broke as heck,
                            but at least my brother and I have the opportunities to better provide
                            for ourselves, our family, and the families back home in the
                            Philippines.
                        </p>
                        <p>
                            My mom makes great Sinigang, a Filipino soup with pork, various
                            vegetables, and okra. My dad is into basketball, and watches a lot of
                            NBA in his pastime. They both have similar jobs, and work in the same
                            hotel, and they were born in the same year; 1971. They’re not great
                            parents on the surface, but they’ve sacrificed a lot for our family to
                            live in Canada, and I’m thankful for that.
                        </p>
                    </svelte:fragment>
                    <ImageTooltip
                        slot="graphic"
                        image="./portfolio/family/IMG_0001.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                </CoverCard>
            </VisibilityBasic>

            <!-- 
                Kuya Aeron (Pits)
            -->
            <VisibilityBasic threshold={0}>
                <CoverCard
                    flipped={true}
                    contentColor="bg-gradient-to-tl from-orange-600 to-purple-600"
                >
                    <svelte:fragment slot="content">
                        <h4 class="mb-4 pb-4 border-b-2 border-white">Kuya Aeron (Pits)</h4>
                        <p class="mb-2">
                            Kuya Aeron, also known as Pits in his friend group, is, well, my
                            brother. He’s the one responsible for the majority of my music tastes,
                            and he’s pretty extroverted. He’d go down to Vancouver, and go clubbing
                            with his friends there on a weekend. We’d often joke about how we’re
                            from different sides of the same coin, as we have polarizing
                            personalities, hobbies, et cetera, and yet we share most of the same
                            values in life, and how we both suck at finding romantic relationships.
                            Currently, he works as an insurance person in the village, though he
                            plans to continue his IT career when he and I move to Vancouver next
                            year, given that he has completed his CIT diploma at BCIT.
                        </p>
                        <p>
                            Having seen his struggles in the past few years, and more so with the
                            passing of his cousin James, I wish for the best for what he needs to do
                            to pick himself back up, and become the person he wishes to be.
                        </p>
                    </svelte:fragment>
                    <ImageTooltip
                        slot="graphic"
                        image="./portfolio/family/IMG_0248.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                </CoverCard>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        My Friends & Community
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-community.svg">
                    <h3 class="text-right">My Friends & Community</h3>
                </HeaderBasic>
            </VisibilityBasic>

            <VisibilityBasic threshold={0}>
                <ImageGrid rows="auto-rows-min">
                    <ImageTooltip
                        image="./portfolio/friends/group-63.jpeg"
                        imageAlt="Lorem ipsum dolor sit"
                        style="size-full col-span-2"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_3149.jpeg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_3552.jpeg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_4282.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                        style="size-full col-span-2"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_3734.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_4289.jpeg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_2120.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                    <ImageTooltip image="./home-other-0.jpeg" imageAlt="Lorem ipsum dolor sit" />
                    <ImageTooltip
                        image="./portfolio/friends/IMG_5702.jpeg"
                        imageAlt="Lorem ipsum dolor sit"
                        style="size-full col-span-2"
                    />
                </ImageGrid>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        My Hobbies & Passions
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-passions.png">
                    <h3>My Hobbies & Passions</h3>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>

        <!-- Programming -->
        <section class="w-full flex flex-col items-center mb-main">
            <Frame>
                <VisibilityBasic>
                    <HeaderBasic icon="./portfolio/icon-programming.svg" iconSize="w-12 lg:w-16">
                        <h4>Programming</h4>
                    </HeaderBasic>
                </VisibilityBasic>

                <VisibilityBasic>
                    <Card color="bg-gradient-to-t from-purple-800 to-sky-600" margin="">
                        <h4 class="mb-4">
                            <a href="https://replit.com/@SamuelPita/pygame-Maze-Game">
                                pygame Maze Game
                            </a>
                        </h4>
                        <p>made in Python 3.8.12, and pygame library</p>
                    </Card>
                </VisibilityBasic>
            </Frame>

            <section class="w-full flex flex-col items-center mb-main">
                <Frame margin="">
                    <VisibilityBasic>
                        <h4 class="mb-4">My Growth as a Programmer</h4>
                    </VisibilityBasic>

                    <VisibilityBasic>
                        <p class="mb-4">
                            My love for computers and programming started with a great interest in
                            playing video games. Growing up, I played lots of Tetris, Minecraft,
                            Roblox, and a wide variety of Adobe Flash games on the old Vaio laptop.
                            I’ve always imagined creating my own video game, though I never
                            understood how it was possible to make one, nor how computers worked in
                            the first place, until I became exposed to programming with Roblox
                            Studio when I was 10-ish years old. It was a piece of software where you
                            create games for the platform, with tools to create 3D spaces and add
                            functionality with Lua, a scripting language.
                        </p>
                    </VisibilityBasic>

                    <VisibilityBasic>
                        <p class="mb-4">
                            My first project with Studio was a racing game. I learned by watching
                            tutorials on YouTube, and by reading Studio’s documentation, though my
                            reading comprehension wasn't great back then. More importantly, I
                            learned by writing the code on my own and experimenting with what works
                            and what doesn’t. I’ve long lost my project file ever since, and I’m
                            sure many of the scripts I wrote were messy and very amateur. The
                            experiences I got from creating the game, and the knowledge and
                            satisfaction I got from solving problems continued my interest in
                            programming, even with the frustrations involved in the process.
                        </p>
                    </VisibilityBasic>

                    <VisibilityBasic>
                        <p class="mb-4">
                            Looking back, I’m thankful to own a laptop at a young age. I didn’t grow
                            up to become an iPad kid, as the technology I was exposed to was more
                            experimentative, and freeing, like the Vaio laptop. It has certainly
                            defined my passions and hobbies in general, and my values in right to
                            repair.
                        </p>
                    </VisibilityBasic>

                    <VisibilityBasic>
                        <p>
                            Eventually, I began to learn other programming languages and
                            disciplines. I’m most fluent with the Python language, and I’ve used it
                            to make multiple arcade games. One of which was a stacking game, where
                            you have to place blocks evenly all the way up to the top. I developed a
                            gravity game with GameMaker, a dedicated 2D game engine, to learn the
                            concepts of game development, as well as a maze game using the pygame
                            graphics library. Currently, I’m learning web development, so that I can
                            create a portfolio with a nice UI for my capstone project. I plan to
                            explore other areas of software development, and I’d love to get into
                            hardware design, and making circuit boards, someday.
                        </p>
                    </VisibilityBasic>
                </Frame>
            </section>
        </section>

        <!-- Video Games -->
        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <HeaderBasic icon="./portfolio/icon-games.png" iconSize="w-12 lg:w-16">
                        <h4>Video Games</h4>
                    </HeaderBasic>
                </VisibilityBasic>
            </Frame>
        </section>

        <!-- Graphic Design -->
        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <HeaderBasic icon="./portfolio/icon-design.png" iconSize="w-12 lg:w-16">
                        <h4>Graphic Design</h4>
                    </HeaderBasic>
                </VisibilityBasic>

                <VisibilityBasic>
                    <Card color="bg-gradient-to-t from-orange-700 to-fuchsia-600" margin="">
                        <h4 class="mb-4">
                            <a
                                href="https://sites.google.com/sd48.org/sams-media-design-portfolio/home"
                            >
                                C#t Design
                            </a>
                        </h4>
                        <p>made with love and passion by Samuel Pita</p>
                    </Card>
                </VisibilityBasic>
            </Frame>
        </section>

        <!-- City/Urban Planning -->
        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <HeaderBasic icon="./portfolio/icon-urban.png" iconSize="w-12 lg:w-16">
                        <h4>City/Urban Planning</h4>
                    </HeaderBasic>
                </VisibilityBasic>
            </Frame>
        </section>
    </article>

    <!-- 
        Where I've been
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-past.png">
                    <h3 class="text-right">Where I've been</h3>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Web Development, & sammuu.dev
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame>
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-webdev.png">
                    <h3 class="mb-1">Web Development, & sammuu.dev</h3>
                    <h4>Core Competencies</h4>
                </HeaderBasic>
            </VisibilityBasic>

            <VisibilityBasic>
                <Card color="bg-gradient-to-tl from-zinc-800 to-slate-600" margin="">
                    <img
                        src="./code/github.svg"
                        alt="GitHub icon"
                        class="w-16 lg:w-20 2xl:w-24 mb-main"
                    />
                    <h4 class="mb-4">
                        <a href="https://github.com/samuelpita/test-project">
                            samuelpita/test-project
                        </a>
                    </h4>
                    <p>GitHub repository for sammuu.dev</p>
                </Card>
            </VisibilityBasic>

            <VisibilityBasic threshold={0}>
                <div class="w-full pt-main border-b"></div>
            </VisibilityBasic>
        </Frame>

        <section class="w-full flex flex-col items-center mb-main">
            <Frame>
                <VisibilityBasic>
                    <h4 class="mb-2">Initial Steps</h4>
                    <p>
                        For my capstone, I’ve decided to learn web development, and make a website
                        for my portfolio. When I began this project, I learned very quickly that
                        there are many ways to make a website programmatically, as there were lots
                        of client-side JavaScript frameworks, server-side technologies, and cloud
                        services to choose from. Of course, there are many things a website can do,
                        and there are technologies out there that can cater to the needs and goals
                        to develop various types of websites. For my case, I didn’t need to learn or
                        understand most of them, thankfully. My website only needs to look good,
                        have text and images, as well as animation and transitions for visual
                        elements.
                    </p>
                </VisibilityBasic>
            </Frame>

            <Frame>
                <VisibilityBasic>
                    <div class="w-full flex justify-between space-x-4 md:space-x-6">
                        <ImageTooltip
                            image="./code/cloudflare-logo.png"
                            imageAlt="Cloudflare"
                            style="w-1/4 p-4 md:p-6 bg-white rounded-lg"
                            styleImage="size-full object-contain"
                        />
                        <ImageTooltip
                            image="./code/svelte-logo.png"
                            imageAlt="Svelte"
                            style="w-1/4 p-4 md:p-6 bg-white rounded-lg"
                            styleImage="size-full object-contain"
                        />
                        <ImageTooltip
                            image="./code/tailwind-logo.png"
                            imageAlt="TailwindCSS"
                            style="w-1/2 p-4 md:p-6 bg-white rounded-lg"
                            styleImage="size-full object-contain"
                        />
                    </div>
                </VisibilityBasic>
            </Frame>

            <Frame margin="">
                <VisibilityBasic>
                    <p>
                        My tech stack for my website consists of only three things: SvelteKit,
                        Tailwind, and Cloudflare Pages. I chose SvelteKit because I found it easier
                        to read and write code with, and it has everything you need to make a
                        website. It even has back-end functionalities as well, if I ever need to
                        introduce the ability to post blogs, or do user logins, for example. I chose
                        Tailwind, as I found it much easier to use in designing the look of the
                        website. I’ve also considered putting in a Python interpreter, so I can run
                        my Python & PyGame projects on my website, though I haven’t gotten the time
                        to figure that out. For now, I’ll just link those projects via. Replit.
                        Lastly, I chose Cloudflare for running the website. I’m paying around
                        $10/year for the domain, and $0 to host the website, since there aren’t any
                        moving parts going around in my website, besides the UI.
                    </p>
                </VisibilityBasic>

                <VisibilityBasic threshold={0}>
                    <div class="w-full pt-main border-b"></div>
                </VisibilityBasic>
            </Frame>
        </section>

        <section class="w-full flex flex-col items-center mb-main">
            <Frame
                layout="grid grid-cols-1 sm:grid-cols-2 auto-rows-min items-center gap-4"
                maxWidth=""
            >
                <VisibilityBasic threshold={0}>
                    <ImageGrid cols="grid-cols-1" margin="">
                        <ImageTooltip
                            image="./code/web-old-l.png"
                            imageAlt="First iteration of homepage"
                        />
                        <ImageTooltip
                            image="./code/web-new-l.png"
                            imageAlt="Most recent iteration of homepage"
                        />
                    </ImageGrid>
                </VisibilityBasic>

                <VisibilityBasic threshold={0}>
                    <ImageGrid margin="">
                        <ImageTooltip
                            image="./code/web-old.png"
                            imageAlt="First iteration - vertical"
                        />
                        <ImageTooltip
                            image="./code/web-new.png"
                            imageAlt="Most recent iteration - vertical"
                        />
                    </ImageGrid>
                </VisibilityBasic>
            </Frame>

            <Frame>
                <h4 class="mb-2">The Process</h4>
                <p>
                    Making sammuu.dev was a pain in the a**. In the first few months of the project,
                    I had to experiment a lot with the SvelteKit framework to see what works,
                    figuring out how to organize the project, which folders to put certain files in,
                    as well as the usual struggles of the Document-Object Model, and CSS. There
                    weren’t any sections in SvelteKit’s documentation showing any “best practices”
                    in building your SvelteKit project, and in the months before May, I’ve pretty
                    much been putting images in the wrong folder, and my HTML code had super wrong
                    semantics, as it was all div’s everywhere in my +page.svelte files. HTML
                    Semantics is important, largely due to code readability, and for accessibility,
                    as there will be people who will look at your website with a braille display, or
                    with a voice reader.
                </p>
            </Frame>

            <Frame margin="">
                <VisibilityBasic>
                    <Card color="bg-slate-800" layout="overflow-auto">
                        <div class="w-max mx-auto space-x-16 flex items-center justify-center">
                            <div>
                                <h4 class="mb-2">Proper Semantics</h4>
                                <code>
                                    body <br />
                                    &emsp;header <br />
                                    &emsp;main <br />
                                    &emsp;&emsp;article <br />
                                    &emsp;&emsp;&emsp;section <br />
                                    &emsp;&emsp;&emsp;section <br />
                                    &emsp;&emsp;article <br />
                                    &emsp;&emsp;&emsp;section <br />
                                    &emsp;&emsp;&emsp;section <br />
                                    &emsp;&emsp;... <br />
                                    &emsp;footer
                                </code>
                            </div>
                            <h3>V.S.</h3>
                            <div>
                                <h4 class="mb-2">div Spam</h4>
                                <code>
                                    body <br />
                                    &emsp;div <br />
                                    &emsp;div <br />
                                    &emsp;&emsp;div <br />
                                    &emsp;&emsp;&emsp;div <br />
                                    &emsp;&emsp;&emsp;div <br />
                                    &emsp;&emsp;div <br />
                                    &emsp;&emsp;&emsp;div <br />
                                    &emsp;&emsp;&emsp;div <br />
                                    &emsp;&emsp;... <br />
                                    &emsp;div
                                </code>
                            </div>
                        </div>
                    </Card>
                </VisibilityBasic>

                <VisibilityBasic threshold={0}>
                    <section class="w-full">
                        <h4 class="mb-2">Highlights</h4>
                        <ul class="list-disc pl-12 space-y-4">
                            <li>CSS is gay; use Tailwind if you hate putting in effort.</li>
                            <li>
                                Use of single-file components in SvelteKit resulting in less code on
                                +page.svelte (aka. Abstraction in programming terms)
                            </li>
                            <li>
                                <p class="mb-2">My most used command:</p>
                                <div class="w-max py-1 px-2 bg-slate-800 rounded">
                                    <code>git reset --hard</code>
                                </div>
                            </li>
                            <li>
                                <p class="mb-2">
                                    It's a good habit to create a different branch, if you know you
                                    might mess up. Make sure the tree is clean, though.
                                </p>
                                <div class="w-max py-1 px-2 bg-slate-800 rounded">
                                    <code>git checkout -b exp4</code>
                                </div>
                            </li>
                            <li>
                                <p class="mb-2">
                                    Emmet (a plugin in Visual Studio Code) is super powerful for
                                    writing HTML code.
                                </p>
                                <Card color="bg-slate-800" layout="overflow-auto" margin="">
                                    <div class="w-max flex flex-col space-y-6">
                                        <code>
                                            Frame[layout="flex flex-col
                                            items-center"]>section.w-full*3
                                        </code>
                                        <code>
                                            &lt;Frame layout="flex flex-col items-center"&gt; <br />
                                            &emsp;&lt;section class="w-full"&gt;&lt;/ section&gt;
                                            <br />
                                            &emsp;&lt;section class="w-full"&gt;&lt;/ section&gt;
                                            <br />
                                            &emsp;&lt;section class="w-full"&gt;&lt;/ section&gt;
                                        </code>
                                    </div>
                                </Card>
                            </li>
                            <li>
                                F**k Apple (seriously). Safari does not support transparent video
                                for .webm files, and HEIC support is non-existent across many web
                                browsers. The biggest hurdle is converting images from my phone to
                                .jpeg so that it can be displayed.
                            </li>
                        </ul>
                    </section>
                </VisibilityBasic>

                <VisibilityBasic>
                    <div class="w-full pt-main border-b"></div>
                </VisibilityBasic>
            </Frame>
        </section>

        <section class="w-full flex flex-col items-center mb-main">
            <Frame margin="">
                <VisibilityBasic>
                    <h4 class="mb-2">Final Words</h4>
                    <p>
                        So far, I’m still not as done as I would like with my website. There are a
                        lot of things I still want to add to it, like video players, navigation bars
                        to jump to a specific section in a webpage, and the ability to run python
                        files to display my programming projects, but I’m proud to be able to do
                        this at all. I think I’ve developed a level of respect for front-end web
                        developers for being able to deal with the things I’ve experienced in making
                        sammuu.dev, though I’d feel James would roll on his grave if he ever heard
                        that from me, given how ridiculous technologies designed for websites
                        progresses way too much.
                    </p>
                </VisibilityBasic>
            </Frame>
        </section>
    </article>

    <!-- 
        Church Pianist, & the Worship Team
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-piano.png">
                    <h3 class="text-right mb-1">Church Pianist, & the Worship Team</h3>
                    <h4 class="text-right">Core Competencies</h4>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Where I'm going
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame>
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-future.png">
                    <h3>Where I'm going</h3>
                </HeaderBasic>
            </VisibilityBasic>

            <VisibilityBasic>
                <p>
                    So far, I’m still uncertain about how I’ll get through in the months to come.
                    I’ve been considering taking a gap year, but after having talked a lot with
                    different people, and after having conversations with my family, I’ve decided to
                    pursue my current plans of going to BCIT, and do a computer studies diploma. I
                    think the priority for the next few years is making sure my parents don’t have
                    to work anymore, and more importantly, take opportunities that involve traveling
                    outside of Canada. I’ve always wanted to visit Europe, and I’d love to explore
                    more of my home country. I hope that in the years to come, I continue to change,
                    and grow as a human being, and finally, continue to appreciate the little things
                    in life, and be optimistic in the face of anxiety, and the uncertainties of the
                    future.
                </p>
            </VisibilityBasic>
        </Frame>

        <Frame margin="">
            <VisibilityBasic>
                <img
                    src="./portfolio/icon-quote.png"
                    alt="Quote icon"
                    class="w-16 lg:w-20 2xl:w-24 mb-main"
                />
                <h3 class="mb-main">
                    <i>
                        Therefore do not worry about tomorrow, for tomorrow will worry about itself.
                        Each day has enough trouble of its own.
                    </i>
                </h3>
                <p><i>Matthew 6:34, NIV</i></p>
            </VisibilityBasic>
        </Frame>
    </article>
</main>
