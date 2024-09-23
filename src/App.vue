<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Lenis from '@studio-freight/lenis'

onMounted(() => {
  scrollAnimation()
})

function scrollAnimation() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  lenis.on('scroll', (e) => {
    console.log(e)
  })
}
</script>

<template>
  <RouterView />
</template>
