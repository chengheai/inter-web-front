export default {
  input: 'index.js',
  output: {
    file: `pre/bundle${new Date().getTime(0)}.js`,
    name: 'prefaceCfg',
    format: 'umd',
  },
};
