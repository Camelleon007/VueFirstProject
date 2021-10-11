const app = Vue.createApp({
  data() {
    return {
      title: "Wake park: ",
      titleA: "WakeCity",
      titleB: "CWP",
      description: "My home spot.",
      link: "http://wakecity.pl",
    };
  },
  methods: {
    setTitle() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.titleA;
      } else {
        return this.titleB;
      }
    },
  },
});

app.mount("#wake-park");
