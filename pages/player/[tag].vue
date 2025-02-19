<script setup>
const route = useRoute()
const { data: playerData, status, error } = await useFetch('/api/player', {
  query: { tag: route.params.tag }
})
</script>

<template>
    <div class="container mx-auto p-4">
        <div v-if="status === 'pending'">Loading...</div>
            <div v-else-if="error">{{ error.message }}</div>
            <div v-else-if="playerData" class="mb-8">
                <h1 class="text-2xl font-bold mb-2">{{ playerData.name }}</h1>
                <p>Trophies: {{playerData.trophies }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <BrawlerCard v-for="brawler in playerData.brawlers" 
                    :id="brawler.id" 
                    :name="brawler.name" 
                    :trophies="brawler.trophies" 
                    :power="brawler.power" 
                />
            </div>
    </div>
</template>
