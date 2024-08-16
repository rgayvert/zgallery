import { atom, Box, View, Loader, Atom, IFrameOptions, defineComponentDefaults, mergeComponentDefaults, beforeAddedToDOM } from "zaffre";

export interface YouTubeIFrameOptions extends IFrameOptions {
  seekTime?: Atom<number>;
  player?: Atom<YT.Player | undefined>;
  controls?: boolean;
  disableKeyboard?: boolean;
  allowFullscreen?: boolean;
}
defineComponentDefaults<YouTubeIFrameOptions>("YouTubeIFrame", "Box", {
  controls: true,
  disableKeyboard: true,
  allowFullscreen: false,
});

const installed = atom(false);

function onYouTubeIframeAPIReady(): void {
  installed.set(true);
}
async function installAPI(): Promise<void> {
  (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  const loader = Loader.getInstance();
  const url = "https://www.youtube.com/iframe_api";
  await loader.addScript(url, true);
}

export function YouTubeIFrame(videoID: string, inOptions: YouTubeIFrameOptions): View {
  const options = mergeComponentDefaults("YouTubeIFrame", inOptions);

  options.id = "player";
  options.seekTime?.addAction((t) => {
    console.log("seeking to "+t);
    player.seekTo(t, true);
  });

  let boxElement: HTMLElement;
  // options.beforeAddedToDOM = (view: View): void => {
  beforeAddedToDOM(options, (view: View): void => {
    boxElement = <HTMLElement>view.elt;
  });

  let player: YT.Player;
  function onPlayerReady(e: YT.PlayerEvent): void {
    //console.log("onPlayerReady");
  }
  function onPlayerStateChange(e: YT.PlayerEvent): void {
    //console.log("onPlayerStateChange");
  }
  function createPlayer(): void {
    console.log("here: videoID=" + videoID);

    player = new YT.Player(boxElement, {
      videoId: videoID,
      playerVars: {
        "playsinline": 1,
        "autohide": 1,
        "rel": 0,
        "controls": options.controls ? 1 : 0,
        "disablekb": options.disableKeyboard ? 1 : 0,
        "fs": options.allowFullscreen ? 1 : 0,
      },
      events: {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange,
      },
    });
    options.player?.set(player);
  }

  if (!installed.get()) {
    installAPI();
    installed.addAction(() => createPlayer());
  }

  return Box(options);
}
