`npx vite build` - working fine

`npx vite dev` - start dev mode, and throw error, when you navigate to page with LazyLoadImage-component

```

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
13:55:04 [vike][request(1)] HTTP request: /
13:55:05 [vite][request(1)] Error when evaluating SSR module /node_modules/react-lazy-load-image-component/build/index.js:
|- ReferenceError: module is not defined
    at eval (/home/kirill/study/vike/lazy-load-ssg/node_modules/react-lazy-load-image-component/build/index.js:3:27870)
    at eval (/home/kirill/study/vike/lazy-load-ssg/node_modules/react-lazy-load-image-component/build/index.js:3:27874)
    at instantiateModule (file:///home/kirill/study/vike/lazy-load-ssg/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54725:15)

┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Error could be a CJS/ESM issue, consider adding react-lazy-load-image-component to ssr.noExternal, see https://vike.dev/broken-npm-package │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ Error isn't helpful? See https://vike.dev/errors#verbose │
└──────────────────────────────────────────────────────────┘

13:55:05 [vike][request(1)] HTTP response / 500

```