import React, { useEffect } from 'react';



    const NF = "6fOMl44jA4Sp5b9PpYCkzz"
    const eminem = "7dGJo4pcD2V6oG8kP0tJRR"

    const selectedArtist = "";
    export function ApiFetch() {

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",

    }
    
    fetch(`https://v1.nocodeapi.com/nhikos/spotify/IifbtUtoatWVUpsE/artists?id=${eminem}&queryType=top-tracks&perPage=50`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result.tracks))
        .catch(error => console.log('error', error));

    return <div>Fetching data from API...</div>;
}

