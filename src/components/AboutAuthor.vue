<template>
  <h1>Lev Kotman</h1>
  <h3 class="card-heading">Front-end web-developer</h3>
  <p class="paragraph">
    I started programming in 2020, during worldwide crisis. I have come to
    development after the long journey to myself. The information here is
    updated according to the new skills acquired.
  </p>
  <section>
    <h2 class="content-heading">Experience</h2>
    <ul>
      <li v-for="exp in experience" :key="exp.dates" class="exp_item">
        <span>{{ exp.dates }}</span>
        <p>{{ exp.description }}</p>
      </li>
    </ul>
  </section>
  <section>
    <h2 class="content-heading">Skills</h2>
    <ul>
      <li
        v-for="hard in skills.hardSkills"
        :key="hard.index"
        class="hardskill_item"
      >
        <span>{{ hard }}</span>
      </li>
    </ul>
    <ul>
      <li
        v-for="soft in skills.softSkills"
        :key="soft.index"
        class="softskill_item"
      >
        <span>{{ soft }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  inject: ["experience", "skills"],
};
</script>

<style scoped>
.card-heading {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #1f3f68;
  margin-bottom: 14px;
}
.paragraph {
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #1f3f68;
  opacity: 0.6;
}
.content-heading {
  text-align: center;
  font-weight: 300;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: #000000;
}
.exp_item {
  display: flex;
  align-items: center;
}
.exp_item span {
  min-width: 20%;
}
</style>
