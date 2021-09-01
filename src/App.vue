<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
  data() {
    return {
      experience: [
        {
          dates: "2020 – today",
          description:
            "Education: Front-end courses (Youtube, Udemy, Freecodecamp, GeekBrains, Codewars), web-dev books ",
        },
        {
          dates: "2015 – 2019",
          description: "Education: RSUH (Psychology Institute) – bachelor",
        },
        {
          dates: "2009 – 2014",
          description:
            "Education: NRNU Mephi (Institute of International Relations) – specialist",
        },
        {
          dates: "2019 – 2020",
          description: "Job: Bank representative (Tinkoff)",
        },
        {
          dates: "2018 – 2020",
          description: "Job: Psychologist (consultation, private practice)",
        },
        {
          dates: "2015",
          description:
            "Job: Adminstrator (State budgetary institution on culture 'Sovremennik')",
        },
      ],
      skills: {
        hardSkills: [
          "HTML5",
          "CSS3",
          "SCSS",
          "JavaScript",
          "ReactJS",
          "VueJS",
          "MySQL",
        ],
        softSkills: [
          "Analytical mind",
          "Creative thinking",
          "Attentive towards details",
          "Conflicts' managment",
        ],
      },
      address: "Montenegro, Herceg Novi",
      contacts: ["+382(68)498-108", "+7(905)583-90-12"],
      webLinks: [
        { name: "My Github profile", link: "https://github.com/leokotman" },
        { name: "Facebook", link: "https://www.facebook.com/leokotman" },
        { name: "levkotman@gmail.com", link: "mailto:levkotman@gmail.com" },
      ],
    };
  },
  provide() {
    return {
      experience: this.experience,
      skills: this.skills,
      address: this.address,
      contacts: this.contacts,
      webLinks: this.webLinks,
    };
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
