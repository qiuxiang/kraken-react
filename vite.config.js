export default {
  esbuild: { jsxFactory: "h", jsxFragment: "f" },
  build: { lib: { entry: "src/index.tsx", formats: ["es"] } },
};
