export function getPixabayImages(searchText) {
    //fetch('https://pixabay.com/api/')
    const res = fetch('https://jsonplaceholder.typicode.com/photos?q=accusamus')
        .then(response => {
            response.json()
                .then(res => {
                    return res
                    //console.log(res.slice(0, 10))
                })
        })
        .catch(error => {
        })
}



/*fetch('https://jsonplaceholder.typicode.com/photos?q=accusamus')
    .then(response => {
        response.json()
            .then(res => {
                document.body.innerHTML = res.length
                //console.log(res.slice(0, 10))
            })
    })
    .catch(error => {
    })
    */