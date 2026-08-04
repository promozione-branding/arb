// Known key -> friendly label. Anything not listed here just gets capitalized automatically,
// so you can use whatever key names you want in your data files without editing this.
const KNOWN_LABELS = {
  bore: "Internal Diameter (Bore)",
  outerDiameter: "Outer Diameter",
  bearingHeight: "Bearing Height",

  
  total: "Mass (kg)",

};

export function labelFor(key) {
  if (KNOWN_LABELS[key]) return KNOWN_LABELS[key];
  // camelCase -> "Camel Case" fallback
  const spaced = key.replace(/([a-z])([A-Z])/g, '$1 $2');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
