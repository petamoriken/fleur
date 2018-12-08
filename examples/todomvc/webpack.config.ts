import webpack from 'webpack'
import { join } from 'path'

export default {
  context: join(__dirname, 'src'),
  entry: {
    client: './client.tsx',
  },
  output: {
    path: join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
} as webpack.Configuration
