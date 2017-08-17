<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
       {{user.input1}}
      <!--This is important for using router-link-->
      <router-link to="/Landing">Landing</router-link>
      <div>
          <form>
             <input type="text" v-model='Info.input1' maxlength="30" required='required'>
       </form>
      </div>
      <button @click="Preview">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Sucessfully install the vue111',
      Info:{
        input1:'',
        input2:''
       }
    }
  },
  computed:{
    user(){
      console.log(this.$store.state)
      return this.$store.state.user    
    }  
  },
  mounted:function(){
    this.Info.input1= this.user.input1  
  },
  methods:{
      Preview(){
          
          this.$store.commit('ShareInfo',{
              input1:this.Info.input1

          });
        
          this.$router.push({path:'/Landing'})          
      },
      computed:{
       user(){
      return this.$store.state.user    
    }  
  }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
