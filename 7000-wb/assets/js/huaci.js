//var iciba_huaci_url ="http://open.iciba.com/huaci/";
var iciba_huaci_url ="http://open.iciba.com/huaci/";
var iciba_huaci_url_new ="http://open.iciba.com/huaci_v3/";
var ICIBA_HUAYI_Str = '';
var ICIBA_HUAYI_ALLOW = 1;
ICIBA_HUAYI_Str += '<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'mini.css" />';
ICIBA_HUAYI_Str += '<div id="icIBahyI-yi" style="display:none"></div>';
ICIBA_HUAYI_Str += '<div id="icIBahyI-main_box" style="display:none">';
ICIBA_HUAYI_Str += '	<div class="icIBahyI-main_title" id="icIBahyI-main_title" >';
ICIBA_HUAYI_Str += '        <i></i>';
ICIBA_HUAYI_Str += '    	<a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a>';
ICIBA_HUAYI_Str += '        <a href="javascript:;" id="icIBahyI-dq" class="icIBahyI-dq2" title="点击固定结果"></a>';
ICIBA_HUAYI_Str += '       即划即译';
ICIBA_HUAYI_Str += '       <div class="icIBahyI-sz_list" id="icIBahyI-sz_list">';
ICIBA_HUAYI_Str += '        	<a href="javascript:;">关闭即划即译</a>';
ICIBA_HUAYI_Str += '            <a href="#" target="_blank">反馈</a>';
ICIBA_HUAYI_Str += '            <a href="#" style="border:none;" target="_blank">帮助</a>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-tl"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-tr"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-bl"></span>';
ICIBA_HUAYI_Str += '            <span class="icIBahyI-j icIBahyI-br"></span>';
ICIBA_HUAYI_Str += '        </div>';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-search">';
ICIBA_HUAYI_Str += '        <div class="icIBahyI-search-w clearfix">';
ICIBA_HUAYI_Str += '            <input id="ICIBA_HUAYI_input" name="" type="text" onkeydown="ICIBA_HUAYI_KEYDOWN(event);">';
ICIBA_HUAYI_Str += '            <a href="javascript:;" class="icIBahyI-sear" onclick="ICIBA_HUAYI_searchword()" >搜索</a>';
ICIBA_HUAYI_Str += '            <a href="javascript:;" id="hy_clear" class="hy_clear"></a>';
ICIBA_HUAYI_Str += '        </div>';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-loading" id="loading"><div></div><p>正在加载数据，请稍后...</p></div>';
ICIBA_HUAYI_Str += '    	<div class="icIBahyI-main_cont" id="icIBahyI-main_cont"></div>';
ICIBA_HUAYI_Str += ' <div class="icIBahyI-CB" id="icIBahyI-scbiframe" style="display:none"></div>';
ICIBA_HUAYI_Str += '<div id="ICIBA_TOO_LONG" style="height:150px" class="icIBahyI-footer">您划取的内容太长，建议您去爱词霸<a href="http://fy.iciba.com">翻译</a>页面。</div>';
//ICIBA_HUAYI_Str += '    	<iframe id="ifm1" frameborder="0" width="280px" scrolling="no" ></iframe>';
//ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '<div class="icIBahyI-down"><a href="http://hoplink.ksosoft.com/oi5p" onclick="clickCountIndex(26)"  target="_blank">搞定邮箱／文档／PDF取词？下载PC版</a></div>';
ICIBA_HUAYI_Str += '</div>';
ICIBA_HUAYI_Str += '<script src="'+iciba_huaci_url+'dict.php" charset="utf-8"></script>';
//ICIBA_HUAYI_Str += '<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'iframe.css" />';
ICIBA_HUAYI_Str += '<object style="height:0px;width:0px;overflow:hidden;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="0" height="0" id="asound_hanci" align="absmiddle">';
ICIBA_HUAYI_Str += '		<param name="allowScriptAccess" value="always" />';
ICIBA_HUAYI_Str += '       <param name="movie" value="http://www.iciba.com/top/asound.swf" />';
ICIBA_HUAYI_Str += '		<param name="quality" value="high" />';
ICIBA_HUAYI_Str += '		<embed src="http://www.iciba.com/top/asound.swf" quality="high" width="0" height="0" name="asound_hanci" align="absmiddle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
ICIBA_HUAYI_Str += '    </object>';
ICIBA_HUAYI_Str += ' <div class="icIBahyI-USER_LOGIN" id="icIBahyI-USER_LOGIN" style="display:none"></div>';
ICIBA_HUAYI_Str += '    <script src="'+iciba_huaci_url+'ICIBA_HUACI_COM.js" charset="utf-8" ></script>';
document.write(ICIBA_HUAYI_Str);

