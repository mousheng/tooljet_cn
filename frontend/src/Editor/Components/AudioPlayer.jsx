import React, { useState, useEffect, useRef } from 'react';
import { resolveReferences, resolveWidgetFieldValue, isJson } from '@/_helpers/utils';
import ReactAudioPlayer from "react-audio-player";
import _ from 'lodash';


export const AudioPlayer = function AudioPlayer({
    id,
    width,
    height,
    component,
    onComponentOptionChanged,
    onComponentOptionsChanged,
    setExposedVariable,
    onEvent,
    styles,
    properties,
    // canvasWidth,
    registerAction,
    dataCy,
}) {
    const { visibility } = styles;
    const { url, poster, muted, loop, autoHide, autoPlay } = properties;
    // // 音频地址
    const [AudioURL, setAudioURL] = useState(url)
    const [PlayAutoPlay, setPlayAutoPlay] = useState(autoPlay)
    const [playerMuted, setMuted] = useState(muted)
    // const [playerPoster, setPlayerPoster] = useState(poster)

    // // 播放器引用
    var playerRef = useRef(null)
    useEffect(() => {
        setPlayAutoPlay(autoPlay);
    }, [autoPlay]);
    useEffect(() => {
        setMuted(muted);
    }, [muted]);
    // // url修改后动作
    // useEffect(() => {
    //     // 设置订阅函数
    //     playerRef.current.subscribeToStateChange(handleStateChange)
    //     setVideoURL(url);
    //     playerRef.current.load()
    // }, [url]);
    // // 订阅状态更新
    // const handleStateChange = (state, prevState) => {
    //     if (prevState.readyState === 0 && state.readyState === 1) {
    //         // 视频载入完成
    //     }
    //     onComponentOptionsChanged(component, [['currentSrc', state.currentSrc], ['duration', state.duration], ['paused', state.paused], ['volume', state.volume], ['readyState', state.readyState]])
    //     if (state.ended && state.ended != prevState.ended) {
    //         // 视频结束事件
    //         onEvent('onEnded', { component })
    //     } else if (state.paused != prevState.paused) {
    //         if (state.paused) {
    //             // 暂停事件
    //             onEvent('onPause', { component })
    //         } else {
    //             // 播放事件
    //             onEvent('onStart', { component })
    //         }
    //     }
    // };
    // 注册控制播放动作
    registerAction('setPlayerState', async function (state) {
        debugger
        if (state)
            playerRef.audioEl.current.play()
        else
            playerRef.audioEl.current.pause()
    });
    // 设置音频地址
    registerAction('setURL', async function (URL) {
        setAudioURL(URL)
    });

    return (
        <div
            style={{ display: visibility ? '' : 'none' }}
        >
            <ReactAudioPlayer
                ref={(e) => { if (e) playerRef = e }}
                style={{ height, width: width - 5 }}
                controls
                src={AudioURL}
                autoPlay={PlayAutoPlay}
                muted={playerMuted}
                loop={loop}
                onPlay={() => {
                    onEvent('onStart', { component })
                }}
                onPause={() => {
                    onEvent('onPause', { component })
                }}
                onEnded={() => {
                    onEvent('onEnded', { component })
                }}
            >

            </ReactAudioPlayer>
        </div >
    )
}