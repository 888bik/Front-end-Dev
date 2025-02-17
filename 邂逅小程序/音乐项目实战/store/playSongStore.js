import { HYEventStore } from "hy-event-store";
import { getLyricInfo, getSongDetail } from "../services/play";
import { parseLyric } from "../utils/parse-lyric";

export const innerAudioContext = wx.createInnerAudioContext();
const playSongStore = new HYEventStore({
  state: {
    playSongList: [],
    playSongIndex: 0,

    id: 0,
    currentSong: {},
    currentTime: 0,
    durationTime: 0,
    lyricInfos: [],
    currentLyricText: "",
    currentLyricIndex: -1,

    isFirstPlay: true,
    isPlaying: false,
    playModeIndex: 0,
  },
  actions: {
    playMusicAction(ctx, id) {
      //将数据初始化
      console.log("hhh");
      ctx.currentSong = {};
      ctx.durationTime = 0;
      ctx.currentTime = 0;
      ctx.currentLyricIndex = 0;
      ctx.currentLyricText = "";
      ctx.lyricInfos = [];

      ctx.id = id;
      ctx.isPlaying = true;

      getSongDetail(id).then((res) => {
        ctx.currentSong = res.songs[0];
        ctx.durationTime = res.songs[0].dt;
      });
      getLyricInfo(id).then((res) => {
        const lrcString = res.lrc.lyric;
        const lyricInfos = parseLyric(lrcString);
        ctx.lyricInfos = lyricInfos;
      });

      innerAudioContext.stop();
      innerAudioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
      innerAudioContext.autoplay = true;
      innerAudioContext.play();
      //判断歌曲是否第一次播放
      if (ctx.isFirstPlay) {
        ctx.isFirstPlay = false;
        innerAudioContext.onTimeUpdate(() => {
          //更新歌曲播放的时间
          ctx.currentTime = innerAudioContext.currentTime * 1000;
          //匹配歌曲歌词
          if (!ctx.lyricInfos.length) return;
          //最后一句歌词是匹配不到的,如果for循环没有匹配到就让index的默认值为最后一个
          let index = ctx.lyricInfos.length - 1;
          for (let i = 0; i < ctx.lyricInfos.length; i++) {
            const element = ctx.lyricInfos[i];
            if (element.time > innerAudioContext.currentTime * 1000) {
              index = i - 1;
              break;
            }
          }
          //避免重复匹配
          if (index === ctx.currentLyricIndex) return;
          //获取当前的歌词
          const currentLyricText = ctx.lyricInfos[index]?.text;

          //更新歌词在页面的位置
          ctx.currentLyricIndex = index;
          ctx.currentLyricText = currentLyricText;
        });

        innerAudioContext.onSeeking(() => {
          innerAudioContext.pause();
        });
        innerAudioContext.onSeeked(() => {
          if (innerAudioContext.paused) {
            innerAudioContext.play();
          }
          ctx.isPlaying = true;
        });
        innerAudioContext.onEnded(() => {
          //如果是单曲循环,不需要切换下一首
          if (innerAudioContext.loop) return;
            this.dispatch("changeNewSongAction")
        });
      }
    },
    changeNewSongAction(ctx, isNext = true) {
      let index = ctx.playSongIndex;
      const length = ctx.playSongList.length;
      switch (ctx.playModeIndex) {
        case 1:
        case 0:
          index = isNext ? index + 1 : index - 1;
          if (index === length) index = 0;
          if (index === -1) index = length - 1;
          break;
        case 2:
          index = Math.floor(Math.random() * length);
          break;
      }
      //获取新的歌曲
      const newSong = ctx.playSongList[index];
      //播放最新的歌曲
      this.dispatch("playMusicAction", newSong.id);

      //保存最新的索引
      ctx.playSongIndex = index;
    },
    changePlayMode(ctx) {
      let modeIndex = ctx.playModeIndex;
      modeIndex = modeIndex + 1;
      if (modeIndex === 3) modeIndex = 0;

      //判断是否是单曲循环
      if (modeIndex === 1) {
        innerAudioContext.loop = true;
      } else {
        innerAudioContext.loop = false;
      }
      ctx.playModeIndex = modeIndex;
    },
    changePlayStatus(ctx) {
      if (!innerAudioContext.paused) {
        innerAudioContext.pause();
        ctx.isPlaying = false;
      } else {
        innerAudioContext.play();
        ctx.isPlaying = true;
      }
    },
  },
});
export default playSongStore;
