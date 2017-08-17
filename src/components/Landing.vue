<template>
    <div>
        <p>This is Landing Page</p>
        {{user.input1}}
       <div>
        <button @click='GoBack'>Go Back to the Previous</button>
    </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        computed:{
        user(){
            return this.$store.state.user
            
        }
    },
    GoBack(){
       this.$store.commit('ShareInfo',{
              input1:this.user.input1
              
          }); 
          this.$router.push({path:'/'})      
    }
   }
}
</script>
<style scoped>

</style>