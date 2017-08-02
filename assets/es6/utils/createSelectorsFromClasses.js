export default function createSelectorsFromClasses(classesConfig) {
  const selectorsConfig = {};

  Object.entries(classesConfig).forEach(([key, value]) => {
    selectorsConfig[key] = `.${value}`;
  });

  return selectorsConfig;
}
