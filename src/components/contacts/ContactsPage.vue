<template>
  <h1>Contacts page</h1>
  <ul>
    <h2>Contacts</h2>
    <li v-for="contact in contacts" :key="contact.index">
      {{ contact }}
    </li>
  </ul>
  <ul>
    <li v-for="link in webLinks" :key="link.name">
      <a :href="link.link">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["address", "contacts", "webLinks"],
};
</script>
