var posts=["2025/02/12/hello-world/","2025/02/12/testLM StudioDeepSeek-R1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };