export default function detectBlow(callback) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);

      const freqData = new Uint8Array(analyser.frequencyBinCount);

      let blowState = false;
      let smoothing = 0; // 0-1, accumulates blowing signal
      const alpha = 0.1; // smoothing factor, smaller = smoother

      function detect() {
        analyser.getByteFrequencyData(freqData);

        // RMS of low frequencies
        let sum = 0;
        for (let i = 0; i < 200; i++) sum += freqData[i] ** 2;
        const rms = Math.sqrt(sum / 200);

        // Update smoothing value
        smoothing = alpha * rms + (1 - alpha) * smoothing;

        // Set blow threshold
        const threshold = 30; // adjust experimentally

        const isBlowing = smoothing > threshold;

        if (isBlowing !== blowState) {
          blowState = isBlowing;
          callback(blowState);
        }

        requestAnimationFrame(detect);
      }

      detect();
    })
    .catch(err => console.error("Microphone access denied:", err));
}
