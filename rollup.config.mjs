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
        sourceMap: true,
      }),
    ],
    output: [
      {
        file: './dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: './dist/cjs/index.cjs',
        format: 'cjs',
        sourcemap: true,
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
        sourcemap: true,
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
        sourcemap: true,
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
