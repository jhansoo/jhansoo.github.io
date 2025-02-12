var posts=["2025/02/12/hello-world/","2025/02/12/test基于LM Studio本地部署DeepSeek-R1的蒸馏量化模型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };