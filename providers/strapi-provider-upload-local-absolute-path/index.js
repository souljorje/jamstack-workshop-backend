/**
 * Module dependencies
 */

// Public node modules.
const fs = require('fs');
const path = require('path');

module.exports = {
  provider: 'local-absolute-path',
  name: 'Local server with absolute images path',
  init: () => ({
    upload: (file) => new Promise((resolve, reject) => {
      // write file in public/assets folder
      fs.writeFile(
        path.join(strapi.config.public.path, `/uploads/${file.hash}${file.ext}`),
        file.buffer,
        (err) => {
          if (err) {
            reject(err);
          }
          // eslint-disable-next-line
            file.url = `http://localhost:1337/uploads/${file.hash}${file.ext}`;

          resolve();
        },
      );
    }),
    delete: (file) => new Promise((resolve, reject) => {
      const filePath = path.join(strapi.config.public.path, `/uploads/${file.hash}${file.ext}`);

      if (!fs.existsSync(filePath)) {
        resolve("File doesn't exist");
      }

      // remove file from public/assets folder
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    }),
  }),
};
