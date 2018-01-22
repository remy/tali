# Tali

Runs a simple server to generate a JavaScript bundle for a specific entry point.

Created due to a need to quickly test across repositories and projects.

## Install and usage

Tali is a [node](https://nodejs.com) utility and requires npm to install:

```bash
npm install -g tali

# from your project directory
tali src/index.js
> Waiting at http://localhost:3000/lib/index.js
```

The port for the server can be controlled through the environment value `PORT`.

Tali also includes sourcemaps and is based on this [configuation](https://github.com/remy/tali/blob/master/lib/webpack.config.js)


## License

MIT [http://rem.mit-license.org](http://rem.mit-license.org)
