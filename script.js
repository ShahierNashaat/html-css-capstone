const hamburger = document.querySelector('.mobile-nav i');
const mobileMenu = document.querySelector('.mobile-nav .mobile-menu');
const closeMobileMenuButton = document.querySelector('.mobile-nav .mobile-menu div span');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('display-none');
});

closeMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('display-none');
});

let currentPage = window.location.href.split('/')[window.location.href.split('/').length - 1].split('#')[0];
if (currentPage === '') {
  currentPage = 'index.html';
}
const currentMenuLinks = document.querySelectorAll(`nav .links a[href$='${currentPage}']`);
currentMenuLinks[0].style.color = '#f8412b';
currentMenuLinks[1].style.color = '#f8412b';

const featuredArtists = [
  {
    image: 'images/Scott-Harris.jpg',
    name: 'Scott Harris',
    title: 'Art Director - Art School of Imagination, Art Book Author',
    quote: 'As an illustrator, painter, art director and author, I’ve helped more than 300,000 students globally, grow their art skills quickly and efficiently.',
  },
  {
    image: 'images/Jaysen-Batchelor.jpg',
    name: 'Jaysen Batchelor',
    title: 'Illustrator & Designer',
    quote: 'At the age of 17 I began a 6th month internship with an animation studio out of Utah. After my internship was up, I was hired on to build backgrounds and to design props and characters for animation projects.',
  },
  {
    image: 'images/Quinton-Ross.jpg',
    name: 'Quinton Ross',
    title: 'Photographer',
    quote: 'When I first started photography It was very hard and confusing to understand the basics of it. That\'s why I make courses for people like you to craft your skills as a photographer!',
  },
  {
    image: 'images/Brad-Colbow.jpg',
    name: 'Brad Colbow',
    title: 'Freelance Designer and Illustrator',
    quote: 'I’ve published comics, run conferences but what I’m best known for is running a Youtube channel where I talk about technology for illustrators. In that time I’ve published reviews on everything from the Surface Pro to the iPad pro. And everything in between.',
  },
  {
    image: 'images/Neil-Fontaine.jpg',
    name: 'Brad Colbow',
    title: 'Art Instructor, Professional Painter, Writer',
    quote: 'I studied art at different schools, one of them being a community college in San Jose, Ca. Over the years, subjects in art finally clicked. I teach these subjects in ways that make it easy to grasp.',
  },
  {
    image: 'images/Rich-Graysonn.jpg',
    name: 'Rich Graysonn',
    title: 'Illustrator Designer',
    quote: 'Aside from being an artist as long as I can remember I started offering a few tutorials on Youtube. Little did I know that by teaching people the fundamentals of art and anatomy i\'d begin a new dimension to my career.',
  },
];

const featuredArtistsCards = document.querySelector('.featured-artists .cards');

if (featuredArtistsCards !== null && featuredArtistsCards !== undefined) {
  for (let i = 0; i < featuredArtists.length; i += 1) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    featuredArtistsCards.appendChild(cardDiv);

    const chessImg = document.createElement('img');
    chessImg.classList.add('chess-img');
    chessImg.setAttribute('src', 'images/chess.jpg');
    chessImg.setAttribute('alt', '');
    cardDiv.appendChild(chessImg);

    const artistImg = document.createElement('img');
    artistImg.classList.add('artist-img');
    artistImg.setAttribute('src', featuredArtists[i].image);
    artistImg.setAttribute('alt', featuredArtists[i].name);
    cardDiv.appendChild(artistImg);

    const textContentDiv = document.createElement('div');
    textContentDiv.classList.add('text-content');
    cardDiv.appendChild(textContentDiv);

    const nameH3 = document.createElement('h3');
    nameH3.textContent = featuredArtists[i].name;
    textContentDiv.appendChild(nameH3);

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('artist-title');
    titleParagraph.textContent = featuredArtists[i].title;
    textContentDiv.appendChild(titleParagraph);

    const lineDiv = document.createElement('div');
    lineDiv.classList.add('gray-line');
    textContentDiv.appendChild(lineDiv);

    const qouteParagraph = document.createElement('p');
    qouteParagraph.classList.add('artist-quote');
    qouteParagraph.textContent = featuredArtists[i].quote;
    textContentDiv.appendChild(qouteParagraph);
  }
}
