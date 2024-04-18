const token = "VQnWmjiKiMzgTvEHyK7SJubVY9MzpdublN0hcghg";
const count = 10;
const url = `https://api.nasa.gov/planetary/apod?api_key=${token}&count=${count}`;

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message, "Error!");
    }
}

const result = await getData(url);
console.log(result);

const body = document.querySelector('body');
result.forEach(element => {
    body.insertAdjacentHTML('beforeend', `<figure>
    <img src="${element.url}" alt="" />
    <figcaption>${element.explanation}</figcaption>
    </figure>`)
});

