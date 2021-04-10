<template>
  <div id="a">
    <tab-bar v-if="$route.meta.showTab">
      <tab-bar-item path="/firstpage">
        <img slot="item-icon" src="../src/assets/image/TabBar/firstpage.png" alt=""/>
        <img slot="item-icon-active" src="../src/assets/image/TabBar/firstpage1.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/activity">
        <img slot="item-icon" src="../src/assets/image/TabBar/activity.png" alt=""/>
        <img slot="item-icon-active" src="../src/assets/image/TabBar/activity1.png" alt=""/>
        <div slot="item-text">活动</div>
      </tab-bar-item>
      <tab-bar-item path="/myvideo">
        <img slot="item-icon" src="../src/assets/image/TabBar/myvideo.png" alt=""/>
        <img slot="item-icon-active" src="../src/assets/image/TabBar/myvideo.png" class="video_class" alt=""/>
        <div slot="item-text">视频</div>
      </tab-bar-item>
      <tab-bar-item path="/discussion">
        <img slot="item-icon" src="../src/assets/image/TabBar/discussion.png" alt=""/>
        <img slot="item-icon-active" src="../src/assets/image/TabBar/discussion1.png" alt=""/>
        <div slot="item-text">讨论</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img slot="item-icon" src="../src/assets/image/TabBar/me.png" alt=""/>
        <img slot="item-icon-active" src="../src/assets/image/TabBar/me1.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <transition>
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition>
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
<!--    <lg-preview></lg-preview>-->
  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar.vue'
import TabBarItem from "@/components/common/tabbar/TabBarItem";


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "assets/css/base.css";

#a {
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
}
.video_class{
  width: 50px ;
  height:50px ;
}
</style>


