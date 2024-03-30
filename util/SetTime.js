export default function getRelativeTime(utcTime) {
  const diff = Date.now() - new Date(utcTime).getTime();
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 1) {
    return "Just Now";
  } else if (minutes < 60) {
    return `${minutes} min ago`;
  } else if (minutes < 24 * 60) {
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`; // Correct pluralization
  } else if (minutes < 7 * 24 * 60) {
    const days = Math.floor(minutes / (24 * 60));
    return `${days} day${days > 1 ? "s" : ""} ago`; // Correct pluralization
  } else {
    // Here we correct the final return to use a Date object derived from utcTime
    const date = new Date(utcTime);
    return date.toLocaleString();
  }
}
