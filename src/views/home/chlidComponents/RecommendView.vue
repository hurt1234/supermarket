<template>
  <div>
    <div class="commend">
      <div class="commend-item" v-for="item in recommends" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='css' scoped>
.commend {
  display: flex;
  width: 100%;
  padding: 10px 0px 15px;
  border-bottom: 5px solid #ccc;
  font-size: 14px;
  text-align: center;
  justify-content: space-around;
}
.commend-item img {
  flex: 1;
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>