"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    strapi.log.info(
      `--> ${ctx.method} ${ctx.url} [${ctx.ip}]`
    );
    await next();
    const duration = Date.now() - start;
    strapi.log.info(
      `<-- ${ctx.method} ${ctx.url} ${ctx.status} (${duration}ms)`
    );
  };
};
