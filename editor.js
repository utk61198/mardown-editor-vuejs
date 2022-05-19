const { createApp } = Vue;

createApp({
  data() {
    return {
      input: "",
    };
  },
  computed: {
    mdToHtml() {
      return marked.parse(this.input);
    },
  },
}).mount("#app");
