//Método para la peticion http ( promise )
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RDitVu1l9K5f9s60B0TUxjgAIiWswlfy`;

    const response = await fetch(url);
    const { data } = await response.json();


    const promiseFormatData = data.map((img) => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    })
    return promiseFormatData;
}
