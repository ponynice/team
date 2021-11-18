<template>
  <div id="app"  :style="{'transform':`scale(${scalseNum}) translate(-50%,0%)`,'-webkit-transform':`scale(${scalseNum}) translate(-50%,0%)`,'-moz-transform':`scale(${scalseNum}) translate(-50%,0%)`,'-o-transform':`scale(${scalseNum}) translate(-50%,0%)`,'-ms-transform':`scale(${scalseNum}) translate(-50%,0%)`}">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return{
      scalseNum:1
    }
  },
    mounted () {
    // 计算缩放比例

    this.resize_window()

    window.addEventListener('resize', () => {
      this.resize_window()

    })

  },
    methods: {
    // 计算缩放比例
    resize_window () {
      let mywidth = document.documentElement.clientWidth;
      this.scalseNum = mywidth / 1920 ;
    }
  }
}
</script>

<style lang="scss">
#app{
    font-family:"PingFangSC-Medium,PingFang SC";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:1920px;
    transform-origin: 0 0;
    padding-bottom:10px;
    position:relative;
    left:50%;
}

</style>
