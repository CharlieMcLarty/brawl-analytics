<script setup>
const playerTag = ref('');

const submitTag = () => {
    navigateTo(`/player/${playerTag.value.trim().toUpperCase()}`);
}
</script>

<template>
    <div class="flex">
        <div class="bg-gray-100 px-4 py-2 text-lg border-2 rounded-l flex items-center">#</div>
          <input 
            v-model="playerTag" 
            type="text" 
            placeholder="XXXXXXXX"
            class="w-full px-4 py-2 text-lg border-2 border-gray-2"
          />
          <button 
            @click="submitTag" 
            class="px-6 py-2 bg-amber-400 hover:bg-amber-500 rounded-r flex items-center justify-center transition-colors text-gray-800 font-bold">
            Search
        </button>
      </div>
</template>