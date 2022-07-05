import React, {Component} from 'react';
import './css/App.css';
import ReactPlayer from 'react-player';

class PlayerApp extends Component {
    constructor(props) {
        super(props);
        this.player = {}
        this.state = {
            video: {
                src: this.props.mp4file,
                preview: ""     // .jpg file
            }
        }
    }

    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }

    render() {
        return (
            <div>
                {<ReactPlayer
                    url="https://youtu.be/JCN8sCWJJ8o"
                    controls={true}
                    playing={true}
                    width="100%"
                    height="100%"
                    light={this.state.video.preview}
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                />}
            </div>
        );
    }
}

class App extends Component {
    state = {
        mp4file:{}
    }

    render() {
        const file = this.state.mp4file;
        return (
            <div>
                {<PlayerApp
                    mp4file={file}
                />}
            </div>
        );
    }
}

export default App;
