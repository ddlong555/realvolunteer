<template>
  <div class="content">
    <div class="imglist" @click="addEventListener" ref="imglist">
      <ul>
        <li :class="'list'+i" ref="li" v-for="(item,i) in banners" :key="i">
          <img :src=item.swiperPicture alt="">
        </li>
      </ul>
    </div>
    <div class="lineb">
      <span v-for="item in 5" :key="item" ref="span"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: "myswiper",
  data() {
    return {
      index: 0,
      aListName: ["list0", "list1", "list2", "list3", "list4"],
    }
  },
  props:['banners'],
  computed: {
    aSpan() {
      return this.$refs.span
    },
    aLi() {
      return this.$refs.li
    },
    // imgList(){
    //   return document.querySelector(".imglist")
    // },
    len() {
      return this.aSpan.length
    },

  },
  mounted: function () {
    this.setLine()
  },
  methods: {
    addEventListener(ev) {
      // console.log("ev", ev);
      if (ev.target.offsetParent.attributes.class.value === "list2") {
        this.nextpic();
      } else if (ev.target.offsetParent.attributes.class.value === "list0") {
        this.prepic();
      }
    },
    setLine() {
      // console.log(this.aSpan);
      for (let i = 0; i < this.len; i++) {
        this.aSpan[i].style.background = "#ccc";
      }
      this.aSpan[this.index].style.background = "#45c17c";
    },
    nextpic() {
      this.aListName.unshift(this.aListName[this.len - 1]);
      this.aListName.pop();
      for (let i = 0; i < this.len; i++) {
        this.aLi[i].setAttribute("class", this.aListName[i]);
      }
      this.index = this.index + 1;
      if (this.index > this.len - 1)
        this.index = 0;
      this.setLine();
    },
    prepic() {
      this.aListName.push(this.aListName[0]);
      this.aListName.shift();
      for (let i = 0; i < this.len; i++) {
        this.aLi[i].setAttribute("class", this.aListName[i]);
      }
      this.index = this.index - 1;
      if (this.index < 0)
        this.index = this.len - 1;
      this.setLine();
    },
  },
  updated() {
  }
}
</script>

<style scoped>
body, ul {
  margin: 0;
}

.content {
  position: relative;
  width: 95%;
  height: 25%;
  left: 3%;
}

ul {
  position: absolute;
  overflow: hidden;
  padding-left: 0;
  list-style: none;
}

.imglist {
  width: 100%;
  height: 90%;
}

.imglist ul {
  width: 100%;
  height: 100%;
}

.imglist ul li {
  position: absolute;
  width: 70%;
  height: 97%;
  transition: 0.5s;
}

.imglist ul li img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.list0 {
  transform: translateX(0) scale(0.81);
  transform-origin: 0 100%;
  z-index: 3;
}

.list1 {
  transform: translateX(22%);
  z-index: 4;
}

.list2 {
  transform: translateX(56%) scale(0.81);
  transform-origin: 100% 100%;
  z-index: 3;
}

.list3 {
  transform: translateX(96%) scale(0.81);
  transform-origin: 100% 100%;
  z-index: 2;
}

.list4 {
  transform: translateX(146%) scale(0.81);
  transform-origin: 100% 100%;
  z-index: 1;

}

.lineb {
  position: relative;
  width: 100%;
  text-align: center;
}

.lineb span {
  display: inline-block;
  width: 20px;
  height: 2px;
  margin-left: 3px;
  background-color: #ccc;
}
</style>
