一.向后端传值 
1.通过手机号获取验证码
  tel手机号
  
2.密码登录
  username账号密码
  password密码

3.修改用户密码
  username或者userid（看你们用哪个方便，用户的信息应该都可以传过去）
  password密码
  
4.验证验证码是否正确
  verification 验证码
  
  
二.前端需要  
1.验证验证码是否正确
  bool（一个bool变量，true为正确，false为错误）
  用户的信息（听说你们用的token，usename，age之类的）

2.密码登录是否正确
  bool（一个bool变量，true为正确，false为错误）
  用户的信息（听说你们用的token，usename，age之类的）

3.更改密码是否正确
  bool（一个bool变量，true为正确，false为错误）