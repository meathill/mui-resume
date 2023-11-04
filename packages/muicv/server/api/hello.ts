export const config = {
  runtime: 'edge',
};

export default defineEventHandler(() => {
  const runtime = useRuntimeConfig();
  return {
    code: 0,
    data: runtime.version,
  };
});
