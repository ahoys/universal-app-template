# Universal (isomorphic) app template (boilerplate)

A general usage boilerplate for various (bigger) projects that require
performance, security and stability.

This is work in progress. Make sure to read that TODO-list below.

### Some goals:
- As minimum as possible.
- As peformant as possible.
- Clean, easy to read structure.
- Clean separation of development and production.
- REST-routing & content support.
- Not even minor vulnerabilities via 3rd party modules.

### Already implemented features:
- React
- Redux
- Routing
- SCSS-support
- SSR
- CSR
- Fully immutable store
- Reactive yet functional app example
- RESTful login example
- Support developer configs and parameter overriding
- Splitting

### Big and small TODOs:
- Flow
- Testing coverage
- FontAwesome support
- Cookie handling

## Custom configs or launch parameters
You can find all the available configs from config.default.json (do not edit the file).

If you want to override some setting, create a new file "src/configs/config.custom.json" and
use it to override config.default.json values. You can override them all or just some specific setting. The
config.custom.json file should not be shared via Git.

You can also use launch parameters. All settings you can find from config.default.json can be overridden with a launch parameter. For example if you want to change the server port (server.port in config.default.json), the parameter would be SERVER_PORT=something. REST host parameter would be REST_HOST=something.
