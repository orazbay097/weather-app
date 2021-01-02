export const getCurrentPosition = () =>
  new Promise(resolve => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      () => resolve(null),
    );
  });

export function getImageFromAssets(name) {
  return require(`@/assets/${name}`);
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  const weekday = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
    date,
  );
  const monthday = date.getDate();
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);

  return `${weekday}, ${monthday} ${month}`;
}
