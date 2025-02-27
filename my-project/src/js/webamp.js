import Webamp from 'webamp';

// Or, if you installed via a script tag, `Winamp` is available on the global `window`:
// const Winamp = window.Webamp;

// Check if Winamp is supported in this browser
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}

// All configuration options are optional.
const webamp = new Webamp({
  // Optional.
  initialTracks: [{
    metaData: {
      artist: "DJ Mike Llama",
      title: "Llama Whippin' Intro",
    },
    // NOTE: Your audio file must be served from the same domain as your HTML
    // file, or served with permissive CORS HTTP headers:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
    url: "path/to/mp3/llama-2.91.mp3"
  }],
  // Optional. The default skin is included in the js bundle, and will be loaded by default.
  initialSkin: {
    // NOTE: Your skin file must be served from the same domain as your HTML
    // file, or served with permissive CORS HTTP headers:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    // Can be downloaded from https://github.com/captbaritone/webamp/raw/master/skins/TopazAmp1-2.wsz
    url: "path/to/skins/TopazAmp1-2.wsz"
  },
});
// Render after the skin has loaded.
webamp.renderWhenReady(document.getElementById('winamp-container'));