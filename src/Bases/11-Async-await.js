// const getImagenPromise = () => new Promise( resolve => console.log('https://urldeprueba'));
// getImagenPromise().then(console.log)

// usando async
const getImage = async()=>{
    try {
    const apiKey    = 'wENAzcw5TisGCiKhqbi0BwnoBxSM16gu';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data}    = await respuesta.json();
    const {url}     = data.images.original;    
    const img = document.createElement('img');
    img.src   = url
    document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
        
}

getImage().then();
