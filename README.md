# Nuxt Progressive Web App  

This app is focused on provide an offline first experience, managing background sync processes and cache storing through workbox @nuxt/pwa module

![evidence1](https://github.com/JuanMa2700/nuxt-pwa-offline-first/blob/main/evidences/1.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![evidence2](https://github.com/JuanMa2700/nuxt-pwa-offline-first/blob/main/evidences/2.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![evidence3](https://github.com/JuanMa2700/nuxt-pwa-offline-first/blob/main/evidences/3.jpg)

---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![evidence4](https://github.com/JuanMa2700/nuxt-pwa-offline-first/blob/main/evidences/4.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![evidence5](https://github.com/JuanMa2700/nuxt-pwa-offline-first/blob/main/evidences/5.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## To test the app
To test the app install it locally

```bash
  # clone the repo
  $ git clone git@github.com:JuanMa2700/nuxt-pwa-offline-first.git
  # install dependencies
  $ npm install
```

After that you can run the dev command to start a server listening for changes on your code

```bash
  # go into directori
  $ cd nuxt-progressive-web-app
  # nuxt dev command
  $ npm run dev
```

And your app should be ready served on your localhost:3000 by default  
You can run the production commands below to serve your app on your localhost:3000 running start command

```bash
  # some production command here before!
  # npm run build <----> npm run generate
  # nuxt start command
  $ npm run start
```

## App deployment

First you need to define your strategie depending on your cloud provider.
AWS S3 for example needs a static strategie.
To know your cloud provider strategie and specific deployment process look into official docs, AWS for example https://nuxtjs.org/docs/2.x/deployment/deployment-amazon-web-services  
  
For static strategie

```bash
# generate dist
$ npm run generate
```

Then you should look into official docs how to deploy and where to copy your /dist generated folder on specific cloud provider

For server strategie

That strategie use the build command to generate the dist folder  

```bash
# generate dist
$ npm run build
```

Next steps are specified depending on your cloud provider. See specific docs for each one https://nuxtjs.org/docs/2.x/deployment/{your provider}
