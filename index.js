let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'docs':
        case 'spotify':
        case 'spreadsheets':
        case 'slides':
        case 'drive':
        case 'github':
             break;
        default: search_engine = 'google';
        search_query = input;
    }
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine){
            case 'google':
                image.src = 'google.png';
                image.alt = 'Google icon';
                break;
            case 'youtube':
                image.src = 'youtube.png';
                image.alt = 'YouTube icon';
                break;
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
            case 'spotify':
                image.src ='spotify.svg';
                image.alt = 'Spotify icon';
                break;
            case 'spreadsheets':
                    image.src ='spreadsheets.svg';
                    image.alt = 'Spreadsheets icon';
                    break;
            case 'slides':
                image.src ='slides.svg';
                image.alt = 'Slides icon';
                 break;
            case 'drive':
                image.src ='drive.svg';
                image.alt = 'Drive icon';
                    break;
            
            case 'github':
                    image.src ='github.svg';
                    image.alt = 'Github icon';
                    break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search_query}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search_query}`;
            case 'spotify': 
                window.location = `https://open.spotify.com/results?search_query=${search_query}`;
                break;
           
            case 'spreadsheets': 
                window.location = `https://www.google.com/sheets/about/results?search_query=${search_query}`;
                break;
                case 'slides': 
                window.location = `https://www.google.com/slides/about/results?search_query=${search_query}`;
                break;
                case 'drive': 
                window.location = `https://www.google.com/intl/en_in/drive/results?search_query=${search_query}`;
                break;
                case 'github': 
                window.location = `https://github.com/results?search_query=${search_query}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
});