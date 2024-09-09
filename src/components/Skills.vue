<script setup>
import { skills } from '../constants';
</script>

<template>
  <section id="skills">
    <div class="skills__inner">
      <h2 class="skills__title">
        skills <em>나의 기술</em>
      </h2>
      <div class="skills__desc">
        <div v-for="(skill, key) in skills" :key="key">
          <span>{{ key+1 }}.</span>
          <h3>{{ skill.title }}</h3>
          <div class="skills__images">
            <img 
              v-for="(img, index) in skill.images" 
              :key="index" 
              :src="img.src" 
              :alt="img.alt" 
              class="skill__image" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.skills__inner {
  padding: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px){ 
      flex-direction: column;
  }

  .skills__title {
    position: sticky;
    top: 70px;
    left: 0;
    width: 48%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);

    @media (max-width: 800px){ 
        width: 100%;
        margin-bottom: 10vw;
        font-size: 30px;
        height: auto;
        top: 68px;
        background-color: var(--mainBg-color);
    }

    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }

  .skills__desc {
    width: 50%;

    @media (max-width: 800px){ 
      width: 100%;
    }

    span {
      font-size: 5vw;
      line-height: 1;
      font-weight: 900;
      line-height: 1.3;
      font-family: var(--mainNum-font);

      @media (max-width: 800px){ 
        font-size: 20vw;
      }
    }

    h3 {
      font-size: 1.5rem;
      text-decoration: underline;
      text-underline-position: under;
      margin-bottom: 1vw;
    }

    .skills__images {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    .skill__image {
      width: 100px;
      height: 110px;
      margin: 10px;
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
