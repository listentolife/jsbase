// JavaScript Document
var js = {};//声明一个对象，当做命名空间来使用

js.$ = function(id){//定义一个公共函数来获取id名称的元素集合
	return document.getElementById(id);
};

js.getElementsByClassName = function(className,element){//定义一个公共函数来获取class名称的元素集合，并兼容IE
	if(document.getElementsByClassName){//检测getElementsByClassName是否有效
		return (element || document).getElementsByClassName(className);
		}
	var children = (element || document).getElementsByTagName("*");//获取html中所有标签
	var elements =[];//新建一个数组
	for(var i = 0; i < children.length; i++){//遍历所有标签
		var child = children[i];//获取当前标签
		var classNames = child.className.split(" ");//分离当前标签的所有class类
		for(var j = 0; j < classNames.length; j++){//遍历所有class类
			if(classNames[j] == className){//如果当前class类跟传参一致，说明当前标签有该class类
				elements.push(child);//增加当前标签到数组中
				break;//跳出循环
				}
			}
		}
	return elements;//返回标签数组
	};
	
js.addListener = function(target, type, handler){//定义一个公共函数来解决事件监听的兼容IE问题
	if(target.addEventListener){//如果支持addEventListener，则直接使用
		target.addEventListener(type, handler, false);
		}else if(target.attachEvent){//如果支持attachEvent，则直接使用
			target.attachEvent("on" + type, handler);
			}else{
				target["on" + type] = handler;
				}
	};