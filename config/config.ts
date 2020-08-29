import { defineConfig } from 'umi';
import routeConfig from './routeConfig/routeConfig'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routeConfig,
});
