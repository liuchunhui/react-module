<!DOCTYPE html>
{%html framework="demo:static/js/mod.js" class="expanded"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
    {%require name="demo:static/js/jquery.min.js"%}
    {%require name="demo:static/semantic/semantic.min.css"%}
    {%require name="demo:static/semantic/semantic.min.js"%}
    {%require name="demo:static/css/demo.css"%}
	{%head%}
	    <meta charset="utf-8"/>
    	<meta content="{%$description%}" name="description">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    	<title>{%$title%}</title>
        {%block name="block_head_static"%}

        {%/block%}
	{%/head%}
	{%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
	{%body%}
        <header class="_header">
            <h1 style="margin: 10px; position: absolute;">组件列表</h1>
        </header>
        {%block name="content"%}
        {%/block%}
	{%/body%}
{%/html%}