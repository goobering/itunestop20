import React from 'react';
import SongList from '../components/SongList.jsx';

export default class SongContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    };

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        const request = new XMLHttpRequest();
        request.open('GET', url);
        
        request.addEventListener('load', (response) => {
            if(request.status === 200){
                const jsonString = request.responseText;
                const data = JSON.parse(jsonString);
                
                this.setState({
                    songs: data.feed.entry
                });
            };
        });

        request.send();
    };

    render() {
        return (
            <div className="song-container">
                 <SongList songs={this.state.songs}/> 
            </div>
        );
    }

}