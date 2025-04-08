import { _decorator, Component, VideoPlayer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Videostarter') // this name MUST match the name in the Inspector (case-sensitive)
export class Videostarter extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer = null;
    
   
    start() {
        if (this.videoPlayer) {
            this.videoPlayer.mute = true;
            this.videoPlayer.node.on('ready-to-play', () => {
                this.videoPlayer.play();
            }, this);
        } else {
            console.log("VideoPlayer is not assigned!");
        }
    }
    
        
    
    
}
