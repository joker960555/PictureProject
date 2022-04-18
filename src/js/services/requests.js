async function postData (formData, url) {
    let responce = await fetch(url, {
        method: 'POST',
        body: formData,
    });
    return await responce.text();
}

async function sendResource (url) {
    let responce = await fetch(url);

    if (!responce.ok) {
        throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
    }

    return await responce.json();
}

export {postData, sendResource};