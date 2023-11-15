const agaric = document.querySelector('#agaric')
const data = [
    {
        title: 'Overview',
        detail: `the iconic fly agaric mushroom, also known as Amanita muscaria. It's that classic red-and-white toadstool you often see in fairy tales and folklore. The distinctive appearance of this mushroom makes it easily recognizable. Fly agaric contains psychoactive compounds, such as muscimol and ibotenic acid, which can induce hallucinations and altered states of consciousness when ingested. It's been used traditionally in some cultures for shamanic and religious purposes. However, it's crucial to note that the mushroom is toxic and can be dangerous if consumed in large quantities. The name "fly agaric" is derived from its historical use as an insecticide. People would reportedly crush the mushroom and mix it with milk to attract and kill flies. Despite its toxicity, the fly agaric continues to captivate the imagination and is a fascinating element in the world of fungi.`,
        img: 'https://images.unsplash.com/photo-1537168113816-8fd3aec5fb15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Siberian Shamanism',
        detail: `The indigenous peoples of Siberia, such as the Koryak, Chukchi, and Kamchadal, have a long history of using the fly agaric mushroom in shamanic rituals. It is believed that shamans would consume the mushroom to enter altered states of consciousness, communicate with spirits, and perform healing ceremonies.`,
        img: 'https://images.unsplash.com/photo-1475738384599-8cf3db232ffa?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Samoyedic Peoples',
        detail: `Similar to Siberian shamans, the Samoyedic peoples of Siberia are known to have used the fly agaric in their religious practices. The mushroom played a role in their shamanic traditions and was considered a means of connecting with the spirit world.`,
        img: 'https://images.unsplash.com/photo-1565284599824-cc060f468123?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Finno-Ugric Peoples',
        detail: `Some Finno-Ugric groups, including the Khanty and Mansi people of Western Siberia, have incorporated the fly agaric into their shamanic rituals. It was believed to aid in spiritual journeys and communication with the supernatural.`,
        img: 'https://images.unsplash.com/photo-1551032314-f4d41c12b4dd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Norse Mythology',
        detail: `Some theories suggest that the fly agaric mushroom may have played a role in Norse mythology. The consumption of a substance with hallucinogenic properties, possibly akin to the effects of psychoactive mushrooms, is theorized in relation to the berserkers and Odin's association with wisdom and inspiration.`,
        img: 'https://images.unsplash.com/photo-1597600327134-3a6804d5d513?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Resources',
        detail: `It's important to approach these cultural uses with sensitivity and respect for the traditions involved. The interpretations and practices vary, and the use of psychoactive substances in a cultural or religious context often holds deep significance within those communities.`,
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'More on Fly Agaric',
        href: 'https://www.acslab.com/mushrooms/amanita-muscaria-vs-psychedelic-mushrooms'
    },
]

agaric.innerHTML = `
    <section class="slice" data-offset="10">
        <div class="slice-item" data-offset="20" onclick>
          The Fly Agaric
          <span class="Mask"><span>The Fly Agaric</span></span>
          <span class="Mask"><span>The Fly Agaric</span></span>
        </div>
    </section>
    <section class="parallax-wrapper">
    <section/>
`
const parallaxAgaric = document.querySelector('#agaric .parallax-wrapper')
data.forEach(d => {
    if(d.link){
        parallaxAgaric.innerHTML += `
            <div style="background-image: url('${d.img}');" class="parallax">
                <h2 class="parallax-text parallax-text-last">${d.title}</h2>
                <p>
                    ${d.detail} <br/>
                    <a href="${d.href}" target="_blank">${d.link}</a>
                </p>
            </div>
        `
    } else{

    
    parallaxAgaric.innerHTML += `
<div style="background-image: url('${d.img}');" class="parallax"><h2 class="parallax-text">${d.title}</h2>
        </div>

        <p>
          ${d.detail}
        </p>
`
}
})
