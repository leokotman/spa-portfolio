import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import AboutAuthor from "./components/AboutAuthor.vue";
import TheFooter from "./components/TheFooter.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import ContactsPage from "./components/contacts/ContactsPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "main",
      components: { default: AboutAuthor, footer: TheFooter },
    },
    {
      path: "/projects",
      name: "projects",
      components: { default: ProjectsList, footer: TheFooter },
    },
    {
      path: "/contacts",
      name: "contacts",
      components: { default: ContactsPage, footer: TheFooter },
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App).use(router);
app.mount("#app");
