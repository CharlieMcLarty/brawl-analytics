<script setup>
const playerTag = ref('');

const submitTag = () => {
    navigateTo(`/player/${playerTag.value.trim().toUpperCase()}`);
}
</script>

<template>
    <div>
      <h1>Enter Brawl Stars Player Tag</h1>
      <form @submit.prevent="submitTag">
        <input v-model="playerTag" placeholder="Enter player tag" required>
        <button type="submit">Get Stats</button>
      </form>
    </div>
  </template>