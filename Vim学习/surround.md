- 使用cs"'
"hello world!"
- 效果：
'hello world!'

- 使用cs'<q>
'hello world!'
- 效果：
<q>hello world!</q>

- 使用cst"(t表示标签)
<q>hello world!</q>
- 效果:
"hello world!"

- 删除包裹的符号，使用ds"
"hello world!"
<q>hello world!</q>
'hello world!'
- 使用ds(也可以删除
(hello)
[hello]
- 效果：
hello world!

- 如果要把光标移动到hello单词上，输入ysiw]，则变成这样：
'hello world!'

- 如果要把中括号变成花括号并且单词和符号之间要有空格，可以使用cs]{
{hello world!}

- 还可以通过yssb或yss)给整行添加括号,b是()的缩写
({hello world!})
[ ({hello world!}) ]

- 输入ds[]去掉[]
({hello world!})
{hello world!}
hello world!


<p>hello world</p>
- 输入V，进入可视化模式，再输入S<div class="import">,就变成了：
<div class="import">
<p>hello world</p>
</div>

hello

- 在hello中输入ysiwt + div，则变成了：
<div>hello</div>
- 在输入ysst + div就变为了：
<div><div>hello</div></div>




