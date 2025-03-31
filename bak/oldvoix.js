import { h, watch } from "vue";
import axios from "axios";

app.component("Voix1", {
  props: ["url"],
  data() {
    return {
      responseData: null,
    };
  },
  mounted() {
    axios
      .get(this.url)
      .then((response) => {
        this.responseData = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  render() {
    if (this.responseData) {
      return this.$slots.default(this.responseData);
    } else {
      return h("div", "Загружается...");
    }
  },
});

const BACKEND_URL = "http://127.0.0.1:8010/api/";
app.component("Voix2", {
  props: ["api", "params", "id"],
  data() {
    return {
      responseData: null,
    };
  },
  mounted() {
    this.fetchData();
    watch(
      () => this.id,
      (newValue) => {
        this.fetchData();
      }
    );
  },
  methods: {
    fetchData() {
      let params = this.params;
      if (!params && this.id) {
        params = { id: this.id };
      }
      console.log(161, this.api, params, this.id);
      axios
        .post(BACKEND_URL + this.api, params)
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  render() {
    if (this.responseData) {
      return this.$slots.default(this.responseData);
    } else {
      return h("div", "Загружается...");
    }
  },
});
