import React,{useEffect,useRef} from 'react'

const { kakao } = window;
const Mapgps = () => {
    const refMap=useRef(null);
    const [menuSearch,setMenuSearch]=React.useState();

    useEffect(() => {
        const container = refMap
		const options = {
			center: new kakao.maps.LatLng(35.8706072114037, 128.598955620405),
			level: 3
		};
        const map = new kakao.maps.Map(container.current, options);
        var ps = new kakao.maps.services.Places(); 
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
       try{
        ps.keywordSearch(menuSearch, placesSearchCB);
       }catch(e){console.log(e)}

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();
        
                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    // console.log(data[i].y,data[i].x)
                }       
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }
        
        function displayMarker(place) {
        
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
                console.log(place)// 수빈님이 이용할 수 있는 정보
                
            });
        }




    }, [menuSearch]);
   
    
    



  return (
    <div>
        <input placeholder='음식점' onChange={(e)=>{setMenuSearch(e.target.value)}}></input>
    <div style={{width:"100%",height:"500px"}}><div ref={refMap} style={{width:"100%",height:"500px"}}></div></div>
    </div>
    
  )
}

export default Mapgps