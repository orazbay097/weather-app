export const getCurrentPosition = () =>
  new Promise(resolve => {
    if (!navigator.geolocation) return null;
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      () => resolve(null),
    );
  });
