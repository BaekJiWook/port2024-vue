<script setup>
const skills = [
  {
    title: "Frontend",
    images: [
      "path/to/html.png",
      "path/to/css.png",
      "path/to/javascript.png",
      "path/to/vue.png"
    ]
  },
  {
    title: "Backend",
    images: [
      "path/to/nodejs.png",
      "path/to/express.png",
      "path/to/database.png"
    ]
  },
  {
    title: "Deployment",
    images: [
      "path/to/aws.png",
      "path/to/heroku.png",
      "path/to/vercel.png"
    ]
  }
];
</script>

<template>
  <section id="skills">
    <div class="skills__inner">
      <h2 class="skills__title">
        skills <em>나의 기술</em>
      </h2>
      <div class="skills__grid">
        <div v-for="(skill, key) in skills" :key="key" class="skills__box">
          <h3>{{ skill.title }}</h3>
          <div class="skills__images">
            <img v-for="(img, index) in skill.images" :key="index" :src="img" :alt="skill.title" class="skill__image"/>
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
  flex-direction: column;
  align-items: center;
}

.skills__title {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--black100);
  text-align: center;
  margin-bottom: 40px;
  font-family: var(--mainKor-font);
  border-bottom: 2px solid var(--black100);

  em {
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 10px;
  }
}

.skills__grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  background-color: #e8d5c4; /* 옅은 갈색 배경 */
  padding: 40px;
  border-radius: 10px;
}

.skills__box {
  background-color: #f0ece1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.skills__images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}

.skill__image {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
