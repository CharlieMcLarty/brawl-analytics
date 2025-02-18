<script setup>
import BrawlerCard from '~/components/BrawlerCard.vue';

const route = useRoute()
const { data: playerData, status, error } = await useFetch('/api/player', {
  query: { tag: route.params.tag }
})
</script>

<template>
    <div>
        <div v-if="status === 'pending'">Loading...</div>
            <div v-else-if="error">{{ error.message }}</div>
            <div v-else-if="playerData">
                <h1>{{ playerData['name'] }}</h1>
                <p>Trophies: {{playerData.trophies }}</p>
            </div>
            <div class="brawler-grid">
                <BrawlerCard v-for="brawler in playerData.brawlers" 
                    :id="brawler.id" 
                    :name="brawler.name" 
                    :trophies="brawler.trophies" 
                    :power="brawler.power" 
                />
            </div>
    </div>
</template>
