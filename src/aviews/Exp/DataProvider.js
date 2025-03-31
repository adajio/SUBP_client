import axios from "axios";

const DataProvider = {
  props: ["url"],
  data: () => ({
    data: [],
    loaded: false
  }),
  created() {
    axios.get(this.url).then(({ data }) => {
      this.data = data;
      this.loaded = true;
      console.log(13,data);
    });
  },
  // default(slotProps) {
  //   slotProps.default({
  //     loading: !this.loaded,
  //     data: this.data
  //   });
  // }
  render() {
    console.log(22,this);
    return this.$slots.default({
      loading: !this.loaded,
      data: this.data
    });
  }
};

export default DataProvider;
