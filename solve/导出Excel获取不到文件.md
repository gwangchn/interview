实质是跨域问题

解决办法：后端添加代码 Access-Control-Expose-Headers: Content-Disposition，前端通过 res.headers[‘content-disposition’] 取值并结合decodeURI 转化，就可以拿到正常的文件名了。