// Build-time only: renders a route to HTML for prerendering (see tools/prerender.js).
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Writable } from 'node:stream';
import { Helmet } from 'react-helmet';
import { AppRoutes, PRERENDER_ROUTES } from '@/App';

export { PRERENDER_ROUTES };

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on('finish', () => {
      // Helmet collects <title>/<meta>/<link> from the page that was just rendered
      const helmet = Helmet.renderStatic();
      resolve({
        html,
        head: {
          title: helmet.title.toString(),
          meta: helmet.meta.toString(),
          link: helmet.link.toString(),
        },
      });
    });

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        // Wait for lazy-loaded pages so the full content ends up in the HTML
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError: reject,
      }
    );
  });
}
