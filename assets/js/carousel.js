const carousel = document.querySelector('.carousel')
const testimonials = [
    {
        name: 'Curator Dorothee Brill',
        quote: 'When you enter you think it\'s giant and spectacular, and it is, but I think what Carsten Hoeller is getting at is very personal and intimate'
    },
    {
        name: 'Tanja Klein, 28, won a competition',
        quote: 'I wasn\'t going to go and drink six bottles of reindeer urine to find out'
    },
    {
        name: 'Sachar Kriwoj, 30',
        quote: 'I\'m not into drugs, I\'m into art.'
    },
    {
        name: 'Carsten Höller',
        quote: 'It is a moment when one is not quite awake, but in a state in-between, I love to look at art in such a moment — art then appears more clear to me.'
    },
    {
        name: 'Carsten Höller',
        quote: 'You throw up. The first four times I tried it, I became comatose. Then you wake up, throw up, and you don\'t know where you are, or how long you\'ve been asleep. The sixth time, I started to chant like a Tibetan monk'
    },
    {
        name: 'Curator Dorothee Brill',
        quote: 'It\'s a piece of poetry, not academic documentation.'
    },
    {
        name: 'Businesswoman Maru Winnacker and her husband',
        quote: 'The bed was comfortable, but we were too excited to sleep'
    },
    {
        name: 'Belgian-born Hoeller',
        quote: 'It wasn\'t a night like any other night'
    },
    {
        name: 'Businesswoman Maru Winnacker',
        quote: 'It was wonderful to wander about the artworks with flashlights and walkie-talkies. You can observe so much more at night than during the day'
    },
]

testimonials.forEach(q =>{
    carousel.innerHTML += `
    <div class='carousel__item'>
        <div class='carousel__item-body'>
            <blockquote>${q.quote}</blockquote>
            <p class='title'>${q.name}</p>
        </div>
    </div>
    `
})