import { useRef } from 'react';

// 1. 函数组件直接使用 ref（无需 forwardRef）
function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  // 2. 使用带有清理函数的 ref 回调（React 19 新增）
  const setupVideo = (element) => {
    if (!element) return;

    // 初始化视频
    element.src = src;
    element.play();
    

    // 返回清理函数（组件卸载时自动调用）
    return () => {
      element.pause();
      element.src = '';
    };
  };

  return (
    <video 
      ref={setupVideo} // 直接传递 ref 回调
      width="600" 
      controls
    />
  );
}

// 3. 父组件直接使用 ref（无需 forwardRef）
export default function App() {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  const handleFullscreen = () => {
    if (playerRef.current) {
      playerRef.current.requestFullscreen();
    }
  };

  return (
    <div ref={containerRef}>
      <h1>React 19 改进的 ref 用法示例</h1>
      
      {/* 直接传递 ref 到自定义组件 */}
      <VideoPlayer 
        ref={playerRef} 
        src="/sample.mp4" 
      />

      <button onClick={handleFullscreen}>
        全屏播放
      </button>
    </div>
  );
}