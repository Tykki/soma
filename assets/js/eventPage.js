const eventPage = document.querySelector('#event')
const cards = [
    {
        img: 'https://images.unsplash.com/photo-1593073504904-998854918849?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        effect: 'zoom',
        title: 'Experience',
        preview: 'A night to never forget anytime soon!',
        details: 'A night floating atop of a mushroom shaped "floating hotel", you and a personal guest can experience a once in a lifetime event, a fulfilling night packed with tailored art, excitement, and service. Things that are sure to push you out of your comfort zone and things that are sure to relax you to new ideas. This luxury experience will be only for a limited time during the winter. The "floating hotel" area includes a luxury bed with an overview of the art and animals, fully stocked mini-bar, and other amenities. Down from the bed area is a rail-lined walkway with views of the reindeer stables on either side of them. Canaries sing softly about giving ambiance to the different art pieces scattered about to be viewed. Finally a special meal is served for reserved guests in a special area to get the best view of the museum.'
    },
    {
        img: 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        effect: 'blur',
        title: 'Lore',
        preview: 'Dive into the legend',
        details: 'Soma is known as a divine elixir frequently praised in the Vedas, ancient Hindu scriptures. This drink was believed to impart happiness, invincibility and even access to the divine. A potion for enlightenment, "food of the gods", described in many ways, the original recipe is lost to modern times. Though it has been the general consensus amongst scholars that the fly agaric mushroom <i>(Amanita muscaria)</i> is at the base of this drink. Given the poisonous nature of this mushroom, the people would said to either drink their own urine afterwards, or would have a reindeer ingest the mushroom and then drink the urine of the deer; thus filtering out many of the toxins but keeping the hallucinogenic effects. <a href="#lore">Learn more</a>'
    },
    {
        img: 'https://images.unsplash.com/photo-1581853230165-b71de20b7f37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        effect: 'color',
        title: 'Wildlife',
        preview: 'Be inspired by nature',
        details: 'Within the museum is a beatiary, containing 12 reindeer, 24 canaries, eight mice and two flies. These animals are here to take part in the experience as well. As half of the reindeer will be fed the fly agaric mushroom <i>(Amanita muscaria)</i> the other half will not be. The deer have a natural resistance to the toxic effects of the mushroom so this will be fine for the animal to ingest. After, through science, the deer urine is collected and used to dribble into the food of the animals of just 1 side of the museum. Given time, the differences of the 2 sides of animals should be a treat to witness. As the reindeer are nocturnal, some of the more interesting activity may happen during the night hours. All animals will be returned at the end of the exuhabition. <a href="#agaric">Learn more</a>'
    },
    {
        img: 'https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        effect: 'blur',
        title: 'Journey',
        preview: 'Embark on self-discovery',
        details: 'To embark on this journey is completely up to choice, then up to chance if choosing to do so. During the day, the urine is collected by handlers and locked in fridges by the walls. These fridges also hold both dried and fresh fly agaric mushrooms <i>(Amanita muscaria)</i>. At night-time though for the over night guests, the fridges are opened, allowing for sampling of the contents. The twist is that none of the urine is labeled, and only half of the reindeer have ingested the mushrooms, each bottle holding a 50% chance of triggering a Soma experience. This journey is one of science, art, and nature; taking you from an observer and into the art piece itself. By the morning, taking the Soma experience or not, it will be night not to forget anytime soon.'
    },
]


eventPage.innerHTML = `
    <section class="slice" data-offset="10">
        <div class="slice-item" data-offset="20" onclick>
            What is Soma?
            <span class="Mask"><span>What is Soma?</span></span>
            <span class="Mask"><span>What is Soma?</span></span>
        </div>
    </section>
    <section class="card-wrapper"></section>
`

const cardWrap = document.querySelector('.card-wrapper')

cards.forEach(c => {
    cardWrap.innerHTML += `
    <div class="card" data-effect="${c.effect}">
        <section class="card__face">
            <figure  class="card__image">
                <img src="${c.img}" alt="Short description">
            </figure>
            <div class="card__header">
                <h3 class="card__name">${c.title}</h3>
            </div>
            <div class="card__body">
                <p class="card__bio">${c.preview}</p>
            </div>
        </section>
        <section class="card__face card__face--back">
            <p class="card__bio">${c.details}</p>
        </section>
    </div>
    `
})