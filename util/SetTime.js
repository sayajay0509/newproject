export default function getRelativeTime(utcTime) {
  const diff = Date.now() - new Date(utcTime).getTime();
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 1) {
    return "Just Now";
  } else if (minutes < 60) {
    return `${minutes}min ago`;
  } else if (minutes < 24 * 60) {
    const hours = Math.floor(minutes / 60);
    return `${hours}hour ago`;
  } else if (minutes < 7 * 24 * 60) {
    const days = Math.floor(minutes / (24 * 60));
    return `${days}days ago`;
  } else {
    return time.toLocaleString();
  }
}
