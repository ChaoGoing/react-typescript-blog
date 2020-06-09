import { Configuration } from 'webpack'
import { projectName, projectRoot, resolvePath } from '../utils/constant'

const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, './src/index.ts'),
  output: {
    publicPath: '/',
    path: resolvePath(projectRoot, './dist'),
    filename: 'js/[name]-[hash].bundle.js',
    hashSalt: projectName || 'react-ts-blog',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDiretory: true
        },
        exclude: 'node_module'
      }
    ]
  }
}