import { defineConfig } from '@figma/code-connect'

export default defineConfig({
  components: ['./src/components/**/*.{tsx,jsx}'],
  outdir: './.figma'
})
