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
    <div class="brawler-card w-64">
        <div class="border-2 border-black relative">
            <div class="absolute top-2 left-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border-2 border-yellow-400">
                <span class="text-white text-sm font-bold">{{ props.power }}</span>
            </div>
            <img class="w-64 h-64 object-cover" 
                :src="getBrawlerPotrait(props.id)" 
                alt="brawler" 
            />
        </div>

        <div class="border-t-1 border-black p-1">
            <div class="flex justify-between items-center gap-8">
                <span>{{ props.name }}</span>
                <div class="flex items-center gap-1">
                    <span class="text-yellow-500">🏆</span>
                    <span>{{ props.trophies }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.brawler-card {
    display: inline-block;
    transition: transform 0.2s;
}

.brawler-card:hover {
    transform: scale(1.05);
}
</style>