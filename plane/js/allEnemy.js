// 所有类型飞机
function SmallEnemy(){
	var s = parseInt(Math.random()*3 + 3);
	Enemy.call(this,1,s,['image/enemy1.png','image/enemy1-bang.gif'],10);
}
SmallEnemy.prototype.__proto__ = Enemy.prototype;

function MiddleEnemy(){
	var s = parseInt(Math.random()*3 + 2);
	Enemy.call(this,4,s,['image/enemy2.png','image/enemy2-bang.gif'],50);
}
MiddleEnemy.prototype.__proto__ = Enemy.prototype;

function LargeEnemy(){
	var s = parseInt(Math.random()*2 + 2);
	Enemy.call(this,10,s,['image/enemy3.png','image/enemy3-bang.gif'],200);
}
LargeEnemy.prototype.__proto__ = Enemy.prototype;


