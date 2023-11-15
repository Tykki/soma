const lore = document.querySelector('#lore')
const data = [
    {
        title: 'Identity and Nature',
        detail: `The connection between the Vedas and the use of psychoactive substances, including the fly agaric mushroom, is a topic of scholarly debate and speculation. While the Rigveda, one of the oldest Vedic texts, does mention the sacred and intoxicating drink called "Soma," the exact identity of Soma remains uncertain. Scholars have proposed various hypotheses to bridge this gap. Some have suggested that Soma could be a plant, possibly a hallucinogenic one, while others propose non-psychoactive plants or even a combination of ingredients. The lack of a precise botanical description in the Rigveda adds to the mystery.`,
        img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sacred Rituals',
        detail: `Soma was used as an essential element in Vedic rituals and sacrificial ceremonies. Its consumption was believed to facilitate communication with the divine, invoke inspiration, and bring about a heightened state of consciousness. The effects of Soma were described in the Rigveda as inducing a state of ecstasy and inspiration. The rituals involving Soma were considered central to the religious practices described in the Rigveda.`,
        img: 'https://images.unsplash.com/photo-1500209690208-15084dbf0c57?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Symbolism',
        detail: `Soma is often associated with the moon and is described as a celestial beverage. It symbolizes the divine elixir that nourishes and energizes both gods and humans. The imagery surrounding Soma is rich in poetic and symbolic language.`,
        img: 'https://plus.unsplash.com/premium_photo-1691960547132-42acf211c89d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Hymns to Soma',
        detail: `In Vedic rituals, Soma was used as an offering to the gods, and its consumption was associated with religious ceremonies and hymns. The Rigveda contains numerous hymns dedicated to Soma, praising its divine nature and its role in facilitating communication with the gods. Many hymns in the Rigveda are dedicated to praising and invoking the blessings of Soma. These hymns describe the cosmic significance of Soma and its role in sustaining the order of the universe.`,
        img: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Controversy and Speculation',
        detail: `The identity of Soma has been a subject of much debate among scholars. Some have suggested that psychoactive plants, such as the fly agaric mushroom or certain species of Ephedra, could be potential candidates for Soma. However, these hypotheses are speculative, and there is no consensus on the matter. The identity of Soma remains one of the unresolved mysteries in Vedic studies, and interpretations vary among scholars. It's essential to approach these discussions with an awareness of the complexity and uncertainty surrounding the historical and cultural context of ancient rituals.`,
        img: 'https://images.unsplash.com/photo-1619461129861-d0c1479c48b4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Resources',
        detail: `The mystery surrounding Soma adds to the intrigue of Vedic literature and the ancient rituals of the early Indo-Aryans. The spiritual and symbolic significance of Soma continues to be a topic of exploration and interpretation in the study of Vedic traditions.`,
        img: 'https://images.unsplash.com/photo-1562351778-a451cb11dc90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'More on Fly Soma',
        href: 'https://www.historyofayurveda.org/library/soma',
    },
]

lore.innerHTML = `
    <section class="slice" data-offset="10">
        <div class="slice-item" data-offset="20" onclick>
          Lore and More
          <span class="Mask"><span>Lore and More</span></span>
          <span class="Mask"><span>Lore and More</span></span>
        </div>
    </section>
    <section class="parallax-wrapper">
    <section/>
`
const parallaxLore = document.querySelector('#lore .parallax-wrapper')
data.forEach(d => {
    if(d.link){
        parallaxLore.innerHTML += `
            <div style="background-image: url('${d.img}');" class="parallax">
                <h2 class="parallax-text parallax-text-last">${d.title}</h2>
                <p>
                    ${d.detail} <br/>
                    <a href="${d.href}">${d.link}</a>
                </p>
            </div>
        `
    } else{

    
    parallaxLore.innerHTML += `
<div style="background-image: url('${d.img}');" class="parallax"><h2 class="parallax-text">${d.title}</h2>
        </div>

        <p>
          ${d.detail}
        </p>
`
}
})