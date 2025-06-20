<template>
  <div class="min-h-screen bg-black text-white">
    <!-- 간단한 헤더 -->
    <header class="w-full px-6 py-4 border-b border-white/10">
      <h1 class="text-xl font-bold">
        <router-link to="/">🧠 Image Curation</router-link>
      </h1>
    </header>

    <!-- 메인 콘텐츠 -->
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* 글로벌 스타일은 main.css에서 관리 */
</style>
