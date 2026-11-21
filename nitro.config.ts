export default {
  preset: 'vercel',
  serveStatic: true,
  output: {
    dir: '.output',
    serverDir: '.output/server',
    publicDir: '.output/public',
  },
}
