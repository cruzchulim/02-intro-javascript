const apiKey = 'wENAzcw5TisGCiKhqbi0BwnoBxSM16gu';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// peticion.then( resp=>{
//     // console.log(resp)
//     resp.json().then(data=>{
//         console.log(data)
//     });
// }).catch(console.warn);

// mejorando el código de arriba
// las promesas se pueden encadenar
peticion
.then( resp =>resp.json())
.then(({ data }) => {
    const { url } = data.images.original

    const img = document.createElement('img');
    img.src   = url
    document.body.append(img);
    console.log(url);
})
.catch(console.warn);