var posts=["2024/01/11/UFW防火墙/","2023/12/17/hello-world/","2023/12/25/Tag Plugins/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };