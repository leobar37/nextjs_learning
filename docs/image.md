## image optimización

since version 10.0.0 Next.js has a built-in image  component
and automatic Image Optimización

the next image component ('next/image') is an extension
of the html <img>  element evolved for the modern web 

the automatic image optimization allows for resizing,
optimizing and serving image in modern formats like webpm

`import Image from 'next/image'`

```js
function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}

export default Home

```

#### configurarion image optimization
if no configuration is provided, the following default 
configuration will be used

```js
module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
}
```

### domaind 

```js
module.exports = {
  images: {
    domains: ['example.com'],
  },
}
```


### loader 
Si desea utilizar un proveedor de imágenes en la nube para optimizar las imágenes en lugar de utilizar la optimización de imagen incorporada de Next.js, puede configurar el cargador y el prefijo de ruta

```js
module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
}

```