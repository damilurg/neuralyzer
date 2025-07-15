import css from 'rollup-plugin-css-only';
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/index.ts',
    output: [
        {file: 'dist/index.js', format: 'cjs'},
        {file: 'dist/index.es.js', format: 'es'},
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'Neuralyzer'
        }
    ],
    plugins: [
        typescript(),
        css({output: 'style.css'})]
};
