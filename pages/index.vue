<script setup>
const playerTag = ref('');
const router = useRouter();

const searchPlayer = () => {
    if (playerTag.value.trim()) {
        router.push(`/player/${playerTag.value.trim().toUpperCase()}`);
    }
}
</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Brawl Stars Stat Viewer</h1>
    <input v-model="playerTag" placeholder="Enter Player Tag" class="p-2 border rounded-lg">
    <button @click="searchPlayer" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Search
    </button>
</div>
</template>