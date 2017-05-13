// 引擎
var Engine = {
	gameStatus: false,
	enemy: {},
	bullet: {},
	score: 0,
	game: document.querySelector('.game'),
	scoreBox: document.querySelector('.score'),
	init: function(){
		this.gameStart();
	},
	//游戏开始
	gameStart: function(){
		var _this = this;
		this.game.onclick = function(){
			if(!_this.gameStatus){
				_this.gameStatus = true;
				_this.bgMove();
				_this.handleMove();
				_this.createPlane();
			}
		}
	},
	//背景移动
	bgMove: function(){
		var y = 0;
		var _this = this;
		var timer = setInterval(function(){
			y += 1;
			_this.game.style['background-position-y'] = y+ 'px';
		},50);
	},
	//创建飞机
	createPlane: function(){
		//英雄机
		Hero.init();

		//敌机
		this.enemyTimer = setInterval(function(){
			var num = parseInt( Math.random()*15 ) + 1;
			switch(num){
				case 1:
				case 3:
				case 5:
				case 7:
				case 9: 
					new SmallEnemy().init();
					break;
				case 2: 
				case 6:
					new MiddleEnemy().init();
					break;
				case 8:
					new LargeEnemy().init();
			}
		},400);
	},
	//控制敌机和子弹移动
	handleMove: function(){
		var _this = this;
		this.moveTimer = setInterval(function(){
			//子弹运动
			for(var i in _this.bullet){
				_this.bullet[i].move();
			}

			//敌机运动
			for(var i in _this.enemy){
				_this.enemy[i].move();
			}
		},30);
	},
	//碰撞检测
	isCompact: function(obj1,obj2){
		var l1 = obj1.offsetLeft > obj2.offsetLeft + obj2.offsetWidth;
		var l2 = obj2.offsetLeft > obj1.offsetLeft + obj1.offsetWidth;
		var t1 = obj1.offsetTop > obj2.offsetTop + obj2.offsetHeight;
		var t2 = obj2.offsetTop > obj1.offsetTop + obj1.offsetHeight;
		if(l1||l2||t1||t2){
			return false;
			}
			return true;
		},
	updateScore: function(score){
		this.score += score;
		this.scoreBox.innerHTML = '分数：'+this.score;
	},
	gameOver: function(){
		clearInterval(this.enemyTimer);
	}
};
Engine.init();