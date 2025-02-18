<script setup lang="ts">
    interface Brawler {
        id: number;
        name: string;
        trophies: number;
        power: number;
    }

    const props = defineProps<Brawler>();

    const getBrawlerPotrait = (id: number) => {
        return `https://cdn.brawlify.com/brawlers/borderless/${id}.png`;
    }
</script>

<template>
    <div class="brawler-card">
        <img :src="getBrawlerPotrait(props.id)" alt="brawler" />
    </div>
</template>