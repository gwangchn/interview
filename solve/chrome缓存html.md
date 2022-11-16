问题：
手动触发单独 tab 页面，默认情况下 chrome 会走 304 判定 html 文件是否过期
在 tab 页签内部单独调用 html 文件，如 iframe 嵌入，那么 chrome 会直接将 html 文件强制缓存，用户无法处理

解决：
服务器 nginx 配置 html 文件不缓存，这样无论什么情况下，浏览器访问到 html 都是从服务器获取最新的文件
