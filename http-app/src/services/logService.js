import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://f567533f1f3e47979a701c86645e86ab@sentry.io/5188800",
  });
}

export default { init };
