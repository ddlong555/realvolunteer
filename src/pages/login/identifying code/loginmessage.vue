<template>
  <div class="messagelogin" :style="{ height: bodyHeight + 'px' }">
    <div class="top">
      <div class="top-back" @click="back">
        <img src="../../../assets/image/discussion/back.png" alt="">
      </div>
      <div class="top-add">
        帮助
      </div>
    </div>
    <div class="title">
      输入验证码
    </div>
    <div class="little-title" @click="jkh">
      验证码已发送至{{ phone }}
    </div>
    <div class="inputmessage">
      <input class="input" maxlength="13" v-model="inputmessage" type="number"/>
      <div v-for="index in 6" :key="index" class="line">
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "passwordfind",
  methods: {
    back() {
      this.$router.back()
    },
    jkh(){
      alert(this.phone)
    }
  },
  data() {
    return {
      phone: this.$route.query.phone.replaceAll(' ',''),
      inputmessage: '',
      bodyHeight: 0,
      response: {}
    }
  },
  watch: {
    inputmessage() {
      if (this.inputmessage.length == 6) {
        var that =this;
        this.$axios.post("https://api2.bmob.cn/1/verifySmsCode/"+this.inputmessage, {
          "mobilePhoneNumber": this.phone,
            }, {
              headers: {
                "X-Bmob-Application-Id":"37449b43508f392a2a67166cd97d5334",
                "X-Bmob-REST-API-Key":"b53e7354418986ef64d7e8b64a0174b6",
                "Content-Type":"application/json"
              }
            })
            .then(function (e) {
              if (e.data.msg=='ok') {
                that.$axios.post("/api/volunteer/user/signUpByTel", qs.stringify({
                  "tel": that.phone,
                }),)
                    .then(function (response) {
                      that.$store.commit('saveToken',response.headers.token)
                      that.$store.commit('saveUser',response.data.result)
                      that.$store.commit('saveLogin',true)
                      console.log(that.$store.getters.getToken);
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                if(that.$route.query.code == 0)
                   that.$router.push('/firstpage')
                if(that.$route.query.code == 1)
                  that.$router.push(
                      {
                        path:'/newpassword',
                        query:{
                          phone:that.phone
                        }
                      })
              }
              console.log(that.$route.query.code)
              console.log(e);
            })
            .catch(function (error) {
              console.log(error);
            });

        // if (this.$route.query.code === 0 && ) {
        //   this.$router.push('/firstpage')
        //   // alert(this.response.result.userName+"登陆成功")
        // } else {
        //   this.$router.push('/newpassword')
        // }
      }
    }
  },
  mounted() {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    this.bodyHeight = document.documentElement.clientHeight
  },

}
</script>

<style scoped>
.messagelogin {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
}

.top {
  position: absolute;
  height: 7%;
  width: 100%;
}

.top-back {
  position: absolute;
  text-align: center;
  padding-top: 5px;
  width: 30px;
  height: 25px;
  top: 10%;
  z-index: 1;
}

.top-back img {

  height: 23px;
  width: 17px;
}

.top-add {
  position: absolute;
  height: 70%;
  width: 15%;
  left: 85%;
  top: 30%;
  text-align: center;
  font-size: 12px;
}

.title {
  position: absolute;
  left: 9%;
  top: 10%;
  width: 50%;
  height: 5%;
  font-size: 22px;
  letter-spacing: 2px;
}

.little-title {
  position: absolute;
  left: 9%;
  top: 16%;
  width: 80%;
  height: 5%;
  font-size: 12px;
  letter-spacing: 1px;
}

.inputmessage {
  position: absolute;
  top: 24%;
  left: 9%;
  width: 90%;
  height: 11%;
}

.input {
  position: relative;
  z-index: 1;
  left: 11px;
  width: 90%;
  height: 80%;
  border: none;
  outline: none;
  font-size: 28px;
  letter-spacing: 71px;
  padding-left: 4px;
}

.line {
  position: relative;
  margin-right: 35px;
  width: 50px;
  height: 100%;
  border-top: 1px solid black;
  float: left;
}
</style>
