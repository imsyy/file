const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#767676',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    lrcType: 3,
    audio: [
        {
            name: 'Jackpot',
            artist: 'TheFatRat',
            url: 'https://file.imsyy.top/music/songs/TheFatRat-Jackpot.mp3',
            cover: 'https://p2.music.126.net/MoyUJHTq1RcFvGy3N3Ooxg==/18596040161820969.jpg?param=130y130',
            lrc: 'https://file.imsyy.top/music/lrc/music.lrc',
            theme: '#813D25'
        },
        {
            name: '夜曲',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc',
            theme: '#171513'
        }
    ]
});