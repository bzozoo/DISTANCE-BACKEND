module.exports = function distance(sourceLat, sourceLon, destLat, destLon) {
  const R = 6371e3; // metres
  const φ1 = (sourceLat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (destLat * Math.PI) / 180;
  const Δφ = ((destLat - sourceLat) * Math.PI) / 180;
  const Δλ = ((destLon - sourceLon) * Math.PI) / 180;
  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};
