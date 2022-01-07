new TypeIt(".type1", {
  startDelay: 900,
  strings: "im winifer pimentel",
  speed: 80,
  afterComplete: function (step, instance) {
    instance.destroy();
  },
}).go();

new TypeIt(".type2", {
  startDelay: 2500,
  strings: ["an aspiring front-end developer based in new york city"],
  speed: 50,
}).go();
