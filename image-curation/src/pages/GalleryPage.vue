<template>
  <div class="grid grid-cols-6 auto-rows-[100px] gap-2">
    <div
      v-for="img in displayedImages"
      :key="img.id"
      :class="`col-span-${img.gridSize} row-span-${img.gridSize}`"
      @click="goToDetail(img.slug)"
      class="cursor-pointer overflow-hidden rounded-md bg-white/5 hover:scale-[1.02] transition-transform"
    >
      <img :src="img.url" alt="curated" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase/client'

export default {
  name: 'GalleryPage',
  setup() {
    const displayedImages = ref([])

    const getGridSize = (weight) => {
      if (weight >= 0.8) return 3
      if (weight >= 0.5) return 2
      return 1
    }

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }

    const goToDetail = (slug) => {
      window.location.href = `/image/${slug}`
    }

    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase fetch error:', error)
        return
      }

      const withGridSize = data.map((item) => ({
        ...item,
        gridSize: getGridSize(item.weight),
      }))

      const shuffled = shuffle(withGridSize)
      displayedImages.value = shuffled
    }

    onMounted(() => {
      fetchImages()
    })

    return {
      displayedImages,
      goToDetail,
    }
  },
}
</script>
