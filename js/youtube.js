// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { //이건 똑같이 유지해야하는 메서드 이름
  // <div id="player"></div>
 new YT.Player('player', {
    videoId: 'An6LvWQuj_8',//최초 재생할 유투브 영상ID
    playerVars: {
      autoplay: true,//자동 재생 유무
      loop: true,//반복 재생 유무
      playlist: 'An6LvWQuj_8'//반복 재생할 유투브 영상ID
    },
    events: {
      onReady: function(event){
        event.target.mute() //음소거
      }
    }
  });
}