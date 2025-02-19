export function formatDate(apiDate) {
    const date = new Date(apiDate);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  }