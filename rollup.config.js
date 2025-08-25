import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
      file: 'dist/echo-evaluator.cjs',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [typescript(), nodeResolve()]
  };