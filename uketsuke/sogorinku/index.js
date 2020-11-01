copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText('<a href="https://taitaitatata.github.io/taitai-page/">taitaitatataの日記(?)</a>')
    .then(()=> console.log("copied!"));
});
