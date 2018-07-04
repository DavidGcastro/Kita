# Kita

## An App for easy translation.

Kita is an app design for simplicity, utilizing your phones camera along with Google's cloud and translate
api to provide accurate transaltion when taking a picture.

### How to install

- clone repo and npm install
- Sign up for have a google cloud and translate api and include them in a file named config.js:

```javascript
const config = {
  apiKey: 'YOUR API KEY',
  googleCloudVision: {
    api: 'https://vision.googleapis.com/v1/images:annotate?key='
  },
  googleTranslate: {
    api: 'https://translation.googleapis.com/language/translate/v2'
  }
};
module.exports = config;
```
