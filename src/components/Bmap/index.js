import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BMap from 'BMap'
import style from './index.less'

class app extends Component {
  PropTypes={
    info: PropTypes.string,
  }

  state = {
    info:'叭哩叭哩'
  }

  map={}

  componentDidMount () {
    const map = new BMap.Map("Bmap"); // 创建Map实例
    this.map=map
    this.mapInit(map)
  }
 
  mapInit=(map)=>{
    const _self = this
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); 
    map.addControl(new BMap.MapTypeControl()); // 添加地图类型控件
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    // const top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    const top_left_navigation = new BMap.NavigationControl();  // 左上角，添加默认缩放平移控件
    // const top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); // 右上角，仅包含平移和缩放按钮
    // map.addControl(top_left_control);        
		map.addControl(top_left_navigation);     
    // map.addControl(top_right_navigation); 

    // 定位
    const point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,15);// 初始化地图,设置中心点坐标和地图级别
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        const mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        _self.setWindowInfo(mk)
        // alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
        // alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
  }

  setWindowInfo=(marker)=>{
    const {info}  = this.state
    marker.addEventListener("click",(e) => {
			this.openInfo(info,e)}
		);
  }

// 创建并打开信息窗口
	 openInfo=(content,e)=>{
    const opts = {
      width : 250,     // 信息窗口宽度
      height: 80,     // 信息窗口高度
      title : "信息窗口" , // 信息窗口标题
      enableMessage:true// 设置允许信息窗发送短息
    }
    const map =this.map
		const p = e.target;
		const point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		const infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); // 开启信息窗口
	}

  render() {
      return (
        <div className={style.bMap} id="Bmap" />
      )
  }
}

export default app