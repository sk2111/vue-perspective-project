const vm = new Vue({
  el: '#app',
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    getPerspectiveStyle() {
      return {
        transform: `
        perspective(${this.perspective}px) 
        rotateX(${this.rotateX}deg) 
        rotateY(${this.rotateY}deg) 
        rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
  methods: {
    resetControls() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copyProperties() {
      navigator.clipboard.writeText(this.getPerspectiveStyle.transform);
    },
  },
});
