let _screenIndex: number | undefined;

export function getScreenIndex(): number {
  if (typeof _screenIndex === "number") {
    return _screenIndex;
  }
  const urlParams = new URLSearchParams(window.location.search);
  _screenIndex = parseInt(urlParams.get("screen") || "", 10);
  if (typeof _screenIndex !== "number") {
    return -1;
  }
  return _screenIndex;
}
