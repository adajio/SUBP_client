Vue.component('MyData', {
  props: ['url', 'result'],
  data() {
    return {
      responseData: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(this.url)
        .then(response => {
          this.responseData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  template: `
    <div>
      <slot :customers="responseData ? responseData[result] : null"></slot>
    </div>
  `
});