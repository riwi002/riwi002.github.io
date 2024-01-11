var posts=["2024/01/11/UFW防火墙/","2023/12/25/Tag Plugins/","2023/12/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };