var posts=["2023/12/17/hello-world/","2023/12/25/参考书/","2023/12/24/ceshi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };