// Wczytaj plik JSON znajdujący się w tym samym katalogu co skrypt
fetch('wiersze.json')
    .then(response => response.json())
    .then(wiersze => {
        // Dla każdego elementu w JSON generuj blok HTML
        for (const [name, fileName] of Object.entries(wiersze)) {
            const figure = document.createElement('figure');

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = name;
            figure.appendChild(figcaption);

            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = `/audio/${fileName}`;
            figure.appendChild(audio);

            const downloadLink = document.createElement('a');
            downloadLink.href = `/audio/${fileName}`;
            downloadLink.textContent = 'Download audio';
            figure.appendChild(downloadLink);

            // Dodaj element figure do dokumentu (np. do body lub innego kontenera)
            document.body.appendChild(figure);
        }
    })
    .catch(error => console.error('Error loading JSON:', error));