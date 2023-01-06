const CHARACTERS = [
    'happy girl', 'gardener', 'book lover', 'astronaut', 'short hair person', 'bug catcher', 'fairy', 'naughty cat', 'sleepy dog', 'tea lover', 'calm cow', 'scientist', 'bunny', 'explorer', 'jolly lady', 'food lover', 'comfy kitty', 'laughing wizard', 'beachy girl', 'person in love', 'curly haired person', 'polka dot lover', 'boy in gingham', 'knitting enthusiast', 'writer', 'animal lover', 'happy boy', 'witch', 'butterfly enthusiast', 'long haired person', 'baker', 'cute fox', 'artist', 'florist', 'traveller', 'stargazer', 'lucky person', 'garden gnome', 'glamour girl', 'sporty person', 'loyal dog', 'photographer', 'strong person', 'king/queen', 'cosy person', 'nature lover', 'girl in gingham', 'budgie', 'elderly person', 'coffee lover'
]
const ENVIRONMENT = [
    'flower garden', 'celestial', 'beachy', 'sunny day', 'forest', 'fairytale', 'outer space', 'winter', 'farmyard', 'under the sea', 'cosy cottage', 'village', 'hot & dry', 'jungle', 'sunrise', 'campfire', 'rainy day', 'tall grass', 'cute hut', 'greenhouse', 'summer', 'calm room', 'snowy window', 'floral', 'isolated', 'comfy', 'cafe', 'beautiful sky', 'cosy & warm', 'woodland', 'snowy garden', 'butterfly garden', 'sunflower field', 'spring', 'mountain top', 'foggy/cloudy', 'bakery', 'library', 'comfy chair', 'museum', 'autumn', 'lavender field', 'windy', 'busy shop', 'sunny window', 'dark', 'candlelight', 'wilderness', 'the great outdoors', 'zoo'
]
const ACCESSORIES = [
    'straw hat', 'dangly earrings', 'sunflower', 'flower crown', 'camera', 'map', 'binoculars', 'backpack', 'stripey shirt', 'colorful earrings', 'apron', 'crown', 'sweets', 'cute hat', 'cup of coffee', 'candle', 'bouquet', 'plant', 'mushroom', 'seashells', 'love hearts', 'tattoo', 'rings', 'bum bag', 'sparklers', 'round glasses', 'patterned shirt', 'fancy bracelet', 'art supplies', 'tea cup', 'picnic basket', 'hairclips', 'sunglasses', 'necklace', 'telescope', 'strawberries', 'biscuits', 'balloon', 'blanket', 'teapot', 'bow', 'envelope', 'watch', 'gloves', 'cake', 'raincoat', 'bucket hat', 'starry jewellery', 'bubble gum', 'book'
]
const FRIENDS = [
    'ladybug', 'bumblebee', 'beetle', 'firefly', 'angry cat', 'dragonfly', 'caterpillar', 'bunny', 'goose', 'puppy', 'grasshopper', 'owl', 'teddy', 'moth', 'chicken', 'seagull', 'fox', 'kitten', 'lamb', 'sloth', 'happy cat', 'gecko', 'blackbird', 'sercious cat', 'snail', 'duck', 'butterfly', 'bird', 'little dog', 'hedgehog', 'hamster', 'squirell', 'worm', 'spider', 'frog', 'mouse', 'friendly flower', 'piglet', 'budgie', 'fairy', 'turtle', 'goat', 'toad', 'wombat', 'swan', 'sleeping hedgehog', 'pigeon', 'robin bird', 'bug', 'silly dog'
]

const characterBtn = document.getElementById('character')
const environmentBtn = document.getElementById('environment')
const accessoriesBtn = document.getElementById('accessories')
const friendsBtn = document.getElementById('friends')
const resetBtn = document.getElementById('reset')

const characterOutput = document.querySelector('.character-output')
const environmentOutput = document.querySelector('.environment-output')
const accessoriesOutput = document.querySelector('.accessories-output')
const friendsOutput = document.querySelector('.friends-output')

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}


characterBtn.addEventListener('click', () => {
    setTimeout(() => {
        characterOutput.textContent = random_item(CHARACTERS)
      }, 500)

})

environmentBtn.addEventListener('click', () => {
    setTimeout(() => {    
        environmentOutput.textContent = random_item(ENVIRONMENT)
      }, 500)

})

accessoriesBtn.addEventListener('click', () => {
    setTimeout(() => {
        accessoriesOutput.textContent = random_item(ACCESSORIES)
      }, 500)

})

friendsBtn.addEventListener('click', () => {
    setTimeout(() => {
        friendsOutput.textContent = random_item(FRIENDS)
      }, 500)

})

resetBtn.addEventListener('click', () => {
     characterOutput.textContent = '?'
     environmentOutput.textContent = '?'
     accessoriesOutput.textContent = '?'
     friendsOutput.textContent = '?'
})