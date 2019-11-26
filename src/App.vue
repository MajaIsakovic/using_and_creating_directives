<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-9 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>Custom directives</h3>
          <p v-highlight:background.delayed="'lightBlue'">Color this</p>
          <p v-local-highlight:background.delayed="'gray'">Color this too</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    directives:{
      'local-highlight':{
        bind(el, binding){
          var delay = 0;
          if(binding.modifiers['delayed']){
            delay = 3000;
          }
        
            setTimeout(() =>{
              if(binding.arg == 'background'){
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay)
          }
        
      }
    }
  }
</script>

<style>

</style>
