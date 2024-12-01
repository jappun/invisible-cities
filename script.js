// random quote
fetch('novel.txt').
then((response) => response.text()).
then((text) => {
    const quotes = text.split('.');

    function randomizeQuote() {
        // random quote
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        // random size
        // const fontSize = Math.floor((Math.random() * (48 - 16 + 1)) + 16);
        const sizes = [
            'text-sm', 'text-base', 'text-lg', 'text-xl', 
            'text-2xl', 'text-3xl', 'text-4xl'
        ];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        // random duration
        const duration = Math.floor((Math.random() * (6-2) + 2));
        // random pos
        const x = Math.floor((Math.random() * (window.innerWidth - 300)));
        const y = Math.floor((Math.random() * (window.innerHeight - 100)));

        quoteElement = document.createElement('div');
        quoteElement.textContent = quote;
        quoteElement.className = `fadeInAndOut absolute ${size} p-4 text-yellow-950 rounded-lg`;
        quoteElement.style.transitionDuration = `${duration}ms`;
        quoteElement.style.left = `${x}px`;
        quoteElement.style.top = `${y}px`;

        document.getElementById('text-container').appendChild(quoteElement);
        
        setTimeout(() => {
            document.body.removeChild(quoteElement);
        }, 6000);
    }

    setInterval(randomizeQuote, Math.floor((Math.random() * (800-200) + 200)))

});


// random coords

// random duration

// fade in/out of screen