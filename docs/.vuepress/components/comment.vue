<template>
 <div id="vcomments"></div>
</template>
 
<script>
export default {
 name: 'Valine',
 mounted: function(){
  // require window 
  const Valine = require('valine');
  if (typeof window !== 'undefined') {
   this.window = window
   window.AV = require('leancloud-storage')
  }
  new Valine({
   el: '#vcomments' ,
   appId: 'irv5YB3kmhW3fsmbauzTjcmt-gzGzoHsz',// your appId
   appKey: 'Tlvdh1r0lmUFyE3lUVWn6eUL', // your appKey
   notify:false, 
   verify:false, 
   avatar:'mm', 
   placeholder: 'just go go'
  });
 },
}
</script>