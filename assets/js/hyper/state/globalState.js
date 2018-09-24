

const companyInfo = {
  title: 'Over-Seasoned Steakhouse',
  phone: '(206)-643-0185',
  location: 'Granger, Texas'
}

const specialMenu = [
  {
    image: 'card1',
    title: 'Grilled NY Strip',
    description: 'A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.',
    price: '$32',
  },
  {
    image: 'card2',
    title: 'Charbroiled T-Bone',
    description: 'An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.',
    price: '$52',
  },
  {
    image: 'card3',
    title: 'Steamed Ribeye',
    description: 'A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.',
    price: '$72',
  },
  {
    image: 'card4',
    title: 'Steamed Ribeye',
    description: 'A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.',
    price: '$72',
  },
  {
    image: 'card5',
    title: 'Steamed Ribeye',
    description: 'A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.',
    price: '$72',
  }
]

const quotes = [
  {
    quote: 'I Love Cooking A Big Steak\, For Myself and For My Cat.',
    author:'- Tommy Tammisimo -',
    authorInfo: 'The lonely head chef ',
    authorInfo2: '- Over-Seasoned Steakhouse '
  },
  {
    quote: 'Could these steaks BE anymore seasoned!?',
    author:'- Chandler Bing -',
    authorInfo: 'Overactor ',
    authorInfo2: '- Can\'t smile'
  },
  {
    quote: 'I don\'t eat any form of meat\,\ so this place is terrible!',
    author:'- Shilo -',
    authorInfo: 'Vegan ',
    authorInfo2: '- Our Lady Health '
  },
]

const reviews = [
  {
    title: '"Way too many spices, I threw up!"',
    review: 'There was so much damn pepper on my steak that it was actually spicy! My fiance and I didn\'t finish our meals and the amount of "side" you get with your meal is laughable... We were still hungry after, so we went to McDonalds. Terrible honeymoon dinner.',
    author: 'Jack Torrance -',
    author2: 'Overlook Hotel employee'
  },
  {
    title: '"My absolute favorite steakhouse!"',
    review: 'To say I know the secret of the steak would be ruin half of my enjoyment in coming to watch people eat... ',
    author: 'Hannibal Lecter -', 
    author2: 'I will see you later'
  },
  {
    title: '"One Groovy place, with terrible steaks"',
    review: 'I gotta tell you, This place serves some of the best drinks I have ever had... But, the steak tastes like cigarette spit.',
    author: 'Ash Williams - Demon slayer',
    author2: 'S-Mart'
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenu,
  quotes,
  reviews,
  setReview: {
    currentReview: 0,
  }
}