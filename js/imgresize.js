
window.onload=function(){
	// �����ڸı��С��ʱ�����ʱ��header�Ŀ��Ҳ�ᷢ���ı䣬��Ϊheader��ͨ���ģ����Ŀ�Ⱦ��Ǵ��ڵĿ�ȣ���������Χ�ڣ�����min-width��max-width֮�������
	var win_resize = function(){
		//�����������ͼƬ�ĸ߶��������Ŀ�ȱ仯���仯
		// ͼƬ��ԭʼ��� : ͼƬ��ԭʼ�߶�  = ͼƬ�ĵ�ǰ��� : ͼƬ�ĵ�ǰ�߶�
		// ͼƬ�ĵ�ǰ�߶� = ͼƬ��ԭʼ�߶�* ͼƬ�ĵ�ǰ���(��Ļ�Ŀ�ȣ���Ϊ����ͨ��de)/ͼƬ��ԭʼ���;
		var header_height = 307*document.documentElement.clientWidth/1536;
		document.getElementsByTagName('header')[0].style.height = header_height+'px';
	};

	// win_resize();

	// window.onresize = win_resize;
}