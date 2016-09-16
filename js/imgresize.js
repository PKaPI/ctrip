
window.onload=function(){
	// 当窗口改变大小的时候，这个时候header的宽度也会发生改变，因为header是通栏的，它的宽度就是窗口的宽度（在正常范围内，就是min-width和max-width之间的数）
	var win_resize = function(){
		//如果我们想让图片的高度随着它的宽度变化而变化
		// 图片的原始宽度 : 图片的原始高度  = 图片的当前宽度 : 图片的当前高度
		// 图片的当前高度 = 图片的原始高度* 图片的当前宽度(屏幕的宽度，因为它是通栏de)/图片的原始宽度;
		var header_height = 307*document.documentElement.clientWidth/1536;
		document.getElementsByTagName('header')[0].style.height = header_height+'px';
	};

	// win_resize();

	// window.onresize = win_resize;
}