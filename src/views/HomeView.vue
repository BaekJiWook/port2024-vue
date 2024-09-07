<script setup>
import Skip from "@/components/Skip.vue";
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Site from "@/components/Site.vue";
import Port from "@/components/Port.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Skip />
  <Header />
  <main id="main" role="main">
    <Intro />
    <About />
    <Skills />
    <Site />
    <Port />
    <Contact />
  </main>
  <Footer />
</template>
