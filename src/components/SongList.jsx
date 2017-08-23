import React from 'react';

export default class SongList extends React.Component {
    render(){
        const songs = this.props.songs.map((song, index) => {
            return (
            <li className="song-item" key={index}>
                <div className="song-title">
                    {index + 1}
                </div>
                <div className="song-name">
                    {song['im:artist'].label}
                </div>
                <div className="song-name">
                    {song['im:name'].label}
                </div>                
            </li>);
                
        });    

        return (
            <ul className="song-list">
                {songs}
            </ul>
        );
    }
}