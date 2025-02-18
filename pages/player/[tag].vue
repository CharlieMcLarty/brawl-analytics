<script setup>
const route = useRoute()
const playerData = ref('')
const error = ref('')

// Add function to check if player tag is valid (correct length alphanumeric string)

const fetchPlayerStats = async () => {
    try {
        const response = await fetch(`/api/player/${route.params.tag}`)
        const data = await response.json()
        playerData.value = data.body
    } catch (err) {
        error.value = 'Failed to fetch player stats: ' + err.message
    }
}

onMounted(fetchPlayerStats)
</script>

<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold">Player Stats</h1>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-else-if="playerData">
        <p><strong>Name:</strong> {{ playerData.name }}</p>
        <p><strong>Trophies:</strong> {{ playerData.trophies }}</p>
      </div>
      <div v-else>Loading...</div>
    </div>
  </template>