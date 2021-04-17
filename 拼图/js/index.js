// 封装拼图游戏
function Game(box){
	this.box = box;
	// 定义一个空数组
	this.passMap = [];
	// 创建一个空数组放打乱后的内容
	this.moveMap = [];
	this.init();
}

// 定义初始化方法init
Game.prototype.init = function(){
	this.createCell();
	this.randomArray();
	this.addCell();
	this.addEvent();
}

// 创建宫格
Game.prototype.createCell = function(){
	// 动态创建div，并给出对应的class样式
	// 定义一个数组。存放打乱前的div(正确的)
	// 循环创建div
	for(var i=1;i<=9;i++){
		// 创建div。设置样式class
		var div = document.createElement('div');
		div.setAttribute('class','a'+i)
		// 将创建的div添加到数组中保存下来
		this.passMap.push(div)
	}
	console.log(this.passMap)
	// 随机设置白块的位置
	var whiteIndex = Math.floor(Math.random()*this.passMap.length);
	this.white = this.passMap[whiteIndex];
	this.white.style.background = 'white'
}

// 随机打乱宫格
Game.prototype.randomArray = function(){
	// 创建一个空数组，专门存放打乱后的div
	console.log(this.passMap)
	var map = this.passMap.concat();
	console.log(map);
	for(var i = 0;i<this.passMap.length;i++){
		var index = Math.floor(Math.random()*map.length)
		this.moveMap.push(map[index])
		map.splice(index,1)
	}
	console.log(this.moveMap)
	// 循环生成随机数，取值对应的元素
	// 按照生成的随机数取出对应的div加入新的数组,并从但乱前数组中删除
}

// 将宫格放置到页面上
Game.prototype.addCell = function(){
	// 从打乱的数组中取出元素div,并追加到页面上
	for(var i = 0;i<this.moveMap.length;i++){
		// 确定每一个cell的位置
		this.moveMap[i].style.left = (i%3)*200+'px';
		this.moveMap[i].style.top = (Math.floor(i/3))*200+'px';
		console.log(this.moveMap[i])
		// 添加到页面上
		this.box.appendChild(this.moveMap[i])
	}
}

// 为每个宫格绑定点击事件
Game.prototype.addEvent = function(){
	for(var i = 0;i<this.moveMap.length;i++){
		var that = this;
		this.moveMap[i].onclick = function(){
			// 判断是否点击的为白块
			if(this !== that.white){
				// 将电机的cell的位置取出
				var moveLeft = parseInt(this.style.left);
				var moveTop = parseInt(this.style.top);
				
				var whiteLeft = parseInt(that.white.style.left);
				var whiteTop = parseInt(that.white.style.top);
				
				// 判断是否为同y
				if(whiteLeft == moveLeft && (Math.abs(whiteTop - moveTop))==200){
					// console.log(1)
					// 修改位置
					that.white.style.top = moveTop + 'px';
					this.style.top = whiteTop + 'px';
				}
				// 判断是否为同x
				if(whiteTop == moveTop && (Math.abs(whiteLeft - moveLeft))==200){
					// console.log(1)
					// 修改位置
					that.white.style.left = moveLeft+'px';
					this.style.left = whiteLeft + 'px';
				}
			}
		}
	}
	
	// 判断是否在同一x轴，检测是否需要交换位置
	
	// 判断是否在同一y轴，检测是否交换位置，更改打乱后的数组
	
	// 调用是否通关的判断方法
}

// 判断游戏是否通关
Game.prototype.isFished = function(){
	// 当前交换后的数组和最开始保留的通关正确的是否循环判断
	// 将白块和当前点击的对象在数组中的位置进行交换
	var whiteIndex = this.moveMap.indexOf(this.white);
	// console.log(whiteIndex)
	
	var moveIndex = this.moveMap.indexOf(ele)
	// console.log(moveIndex)
	
	// console.log(this.moveMap[whiteIndex])
	// console.log(this.moveMap[moveIndex])
	
	// 交换数组位置时需要一个中间变量
	var c = this.moveMap[whiteIndex];
	
	this.moveMap[whiteIndex] = this.moveMap[moveIndex]
	
	this.moveMap[moveIndex] = c;
	
	// 当前交换后的数组和最开始保留的通关正确的是否循环判断
	for(var i=0;i<this.moveMap.length;i++){
		if(this.moveMap[i] !== this.passMap[i]){
			return;
		}
		console.log('恭喜完成拼图')
	}
}

