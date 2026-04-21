import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const external = ['react', 'react-dom'];

const input = './src/index.ts';

export default [
  {
    input,
    external,
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        sourceMap: false,
      }),
    ],
    output: [
      {
        file: './dist/esm/index.js',
        format: 'esm',
        sourcemap: false,
      },
      {
        file: './dist/cjs/index.cjs',
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
      },
      {
        file: './dist/umd/index.umd.js',
        format: 'umd',
        name: 'ReactSvgCharts',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        sourcemap: false,
      },
      {
        file: './dist/umd/index.umd.min.js',
        format: 'umd',
        name: 'ReactSvgCharts',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        plugins: [terser()],
        sourcemap: false,
      },
    ],
  },
  {
    input,
    external,
    plugins: [dts()],
    output: {
      file: './dist/types/index.d.ts',
      format: 'es',
    },
  },
];
