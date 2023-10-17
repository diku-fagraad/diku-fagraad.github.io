<script lang="ts">
    export let data: {
        Forperson: string;
        Næstforperson: string;
        Kasserer: string;
        medlemmer: string[];
    };
</script>

<div>
    <div class="w-[100%] h-[100%] flex flex-row justify-center">
        <div class="w-text m-5">
            <title class="text-5xl">Om Fagrådet</title>
            <p class="pt-2">
                Fagrådet ved Datalogisk Institut på Københavns Universitet
                (DIKU) er nyopstartet og har til formål at styrke studiemiljøet,
                repræsentere studerendes interesser, og fremme samarbejdet
                mellem studerende og Institut. Dette inkluderer
                studievejledning, arrangementer, feedbackindsamling,
                ressourcefordeling, og bidrag til studieudvikling for at skabe
                en positiv studieoplevelse.
            </p>
            <h2 class="text-3xl pt-5">Bestyrelse</h2>
            <div class="pt-2">
                <div>
                    <span class="font-bold">Forperson: </span>{data.Forperson}
                </div>
                <div>
                    <span class="font-bold">Næstforperson: </span
                    >{data.Næstforperson}
                </div>
                <div>
                    <span class="font-bold">Kasserer: </span>{data.Kasserer}
                </div>
                <div class="pt-5">
                    <span class="font-bold">Menige Medlemmer: </span>
                    <ul class="list-disc list-inside">
                        {#each data.medlemmer as medlem}
                            <li>{medlem}</li>
                        {/each}
                    </ul>
                </div>
            </div>
            <h2 class="text-3xl pt-5">Vedtægter</h2>
            <p class="pt-2">Bliver tilføjet når vedtægter er godkendt</p>
            <h2 class="text-3xl pt-5">Referater</h2>
            <p class="pt-2">Referater kan findes på vores discord <a class="hover:underline font-bold" href="https://discord.com/channels/1116056322849386578/1116062726259753031">her</a></p>
        </div>
    </div>
</div>
