
<script lang="ts">
    export let data: {
        Forperson: string;
        Næstforperson: string;
        Kasserer: string;
    };
</script>

<div>
    <div class="w-[100%] h-[100%] flex flex-row justify-center">
        <div class="w-text m-5">
            <title class="text-5xl">DIKU Fagråd</title>
            <h1 class="text-3xl pt-5">DIKU Fagråd</h1>
            <p class="pt-2">
               DIKU Fagråds formål er at understøtte studielivet på Datalogisk Institut, at føre studenterpolitik på vegne af instituttets studerende og at være et forum, hvor DIKUs studerende let kan engagere sig fagligt og politisk.
            </p>
            <h2 class="text-3xl pt-5">Bestyrelse</h2>
            <div class="pt-2">
                <div>
                    <span class="font-bold">Forperson: </span>{data.Forperson}
                </div>
                <div>
                    <span class="font-bold"
                        >Næstforperson:
                    </span>{data.Næstforperson}
                </div>
                <div>
                    <span class="font-bold">Kasserer: </span>{data.Kasserer}
                </div>
            </div>
            <div>
                <h2 class="text-3xl pt-5">Kalender</h2>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=d4fffacfd512816188d29cfdb9918bcbffcc5bf80195f2cd97f5075207702f87%40group.calendar.google.com&ctz=Europe%2FCopenhagen"
                    style="border: 0"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                ></iframe>
            </div>
        </div>
        <div class="justify-self-end my-10">
            <p class="pt-2">
                <span class="font-bold">Email:</span> kontakt@diku.fagraad.dk
            </p>
            <h2 class="text-xl pt-5">Eller find os på</h2>
            <div class="flex flex-row justify-center gap-5 m-3">
                <a target="_blank" href="https://discord.gg/7gjU3zgg7s">
                    <img
                        class="w-12 aspect-square"
                        src="discord-logo.svg"
                        alt="discord"
                    /></a
                >
                <a target="_blank" href="https://www.facebook.com/dikufagraad">
                    <img
                        class="w-12 aspect-square"
                        src="facebook-logo.png"
                        alt="facebook"
                    /></a
                >
                <a target="_blank" href="https://github.com/diku-fagraad">
                    <img
                        class="w-12 aspect-square"
                        src="github-logo.svg"
                        alt="github"
                    /></a
                >
            </div>

        </div>
    </div>
</div>
