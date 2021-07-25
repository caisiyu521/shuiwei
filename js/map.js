/* 百度地图API功能 */
var map = new BMap.Map("ContactMap", { minZoom: 4, maxZoom: 18 }); // 创建Map实例  
map.setMapStyle({
    styleJson: [{
        "featureType": "all",
        "elementType": "all",
        "stylers": {
            "lightness": 10,
            "saturation": -100
        }
    }]
});
var pt = new BMap.Point(113.746172, 34.848914); // 设置地图坐标
map.centerAndZoom(pt, 18); // 初始化地图,设置中心点坐标和地图级别
loadmap();
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
function loadmap() {
    map.clearOverlays();

    //可在标注位置添加上LOGO icon
    // var myIcon = new BMap.Icon("/statisc/logo.png", new BMap.Size(48, 44));

    var marker = new BMap.Marker(pt);
    map.addOverlay(marker);
    var data = '<div class="maptips"><div class="maptips_title" style="color:#3f292e;font-size:14px;font-weight:bold;margin-bottom: 10px;">郑州水伟环境科技有限公司</div><div class="maptips_address" style="font-size:12px;" ><b>地址：</b>河南省郑州市金水区杨金路中段牛顿国际A座8层885室</div></div>';
    var infoWindow = new BMap.InfoWindow(data);
    marker.addEventListener("click", function() { this.openInfoWindow(infoWindow); });
    //map.openInfoWindow(infoWindow, map.getCenter()); 
}

// function loadmap() {
//     map.clearOverlays();

//     var myIcon = new BMap.Icon("/static/mapinfo.png", new BMap.Size(379, 178));
//     var marker = new BMap.Marker(pt, { icon: myIcon });
//     map.addOverlay(marker); // 将标注添加到地图中
// }