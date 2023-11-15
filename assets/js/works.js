const works = document.querySelector('#works')
const data = [
    {
        title: '"Test Site" at Tate Modern',
        detail: `Test Site was an art installation at Tate Modern in London from October 2006 to April 2007. The installation was a series of five large, shiny slides that connected the galleries with the Turbine Hall. The slides were designed for the seventh commission of the "The Unilever Series". The slides were 55.5 meters long and dropped 26.5 meters from level five of the building to the Turbine Hall floor. Visitors could ride the slides and experience a feeling of letting go and losing control. The slides merged sculpture, spectacle, and silliness. They could open a discursive field that relates to both the traditional museum ritual and the contemporary museum's entertainment premise.`,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Test_Site_by_Carsten_H%C3%B6ller.jpg/800px-Test_Site_by_Carsten_H%C3%B6ller.jpg'
    },
    {
        title: '"The Double Club" in London',
        detail: `Höller transformed a Victorian warehouse into a space that explored the intersections between cultures, art, fashion, music, and celebrity, creating a unique environment where visitors could explore and enjoy different cultural influences. The Double Club was a bar, restaurant, and nightclub in London that operated from 2008-2009. The space was a partnership between world-renowned artist Fondazione Prada and Carsten Höller. It was part art installation, part restaurant, bar, and nightclub.`,
        img: 'https://cdn.indesignlive.com/media/idlcom/january_09/projects/london_hero.jpg'
    },
    {
        title: '"The Revolving Hotel Room"',
        detail: `The Revolving Hotel Room is a complete hotel room, including a bedside table and mini-bar, mounted on four revolving discs. It was created for and installed in 2008 as part of an exhibition at the Guggenheim Museum in New York. The room is for two people and guests have 24-hour access to the entire museum. The room was also featured in the adjoining gallery at Museum Boijmans Van Beuningen`,
        img: 'https://www.designboom.com/cms/images/andrea05/ch01.jpg'
    },
    {
        title: '"Upside Down Goggles"',
        detail: `Experiments with disorientation, challenging the way people perceive and navigate space. The goggles use acrylic glass, aluminum, steel, polyethylene, nylon, and leather. They are 35 x 22 x 12 cm. The goggles make the space around the observer look upside down. The image on the retina of the observer's eyes is turned back (straightened).`,
        img: 'https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FBpbUXpcmbWW9brwmkU285w%2Fnormalized.jpg&width=538'
    },
    {
        title: '"Decision" at the Hayward Gallery',
        detail: `This exhibition explored the theme of decision-making and featured interactive works such as the "Decision Corridors," where visitors had to make choices that influenced their path through the exhibit. The exhibit featured large-scale installations, kinetic sculptures, videos, and light works that explored perception and decision-making. The exhibit also included newly commissioned works and many of Höller's earlier works. The exhibit took over the entire Hayward building and extended beyond its walls and roof. Visitors could participate in experimental situations that altered their experience of the gallery depending on the choices they made.`,
        img: 'https://images.adsttc.com/media/images/5578/3eca/e58e/cef4/6900/0204/large_jpg/Decision_Corrdidors__2015_Photo_%C2%A9_Linda_Nylind.jpg?1433943740'
    },
    {
        title: 'Still Interested?',
        detail: `Höller's art blurs the boundaries between art and science, often incorporating elements of psychology and biology into his installations. His work has been exhibited globally, and he continues to be a prominent figure in the contemporary art scene, pushing the boundaries of artistic expression and audience engagement.`,
        img: 'https://philfisk.files.wordpress.com/2015/05/oberver_holler_607061.jpg',
        link: 'Carsten @ MIT',
        href: 'https://arts.mit.edu/people/carsten-holler/'
    },
]

works.innerHTML = `
    <section class="slice" data-offset="10">
        <div class="slice-item" data-offset="20" onclick>
          Other Works
          <span class="Mask"><span>Other Works</span></span>
          <span class="Mask"><span>Other Works</span></span>
        </div>
    </section>
    <section class="parallax-wrapper">
    <section/>
`
const parallaxWorks = document.querySelector('#works .parallax-wrapper')
data.forEach(d => {
    if(d.link){
        parallaxWorks.innerHTML += `
            <div style="background-image: url('${d.img}');" class="parallax">
                <h2 class="parallax-text parallax-text-last">${d.title}</h2>
                <p>
                    ${d.detail} <br/>
                    <a href="${d.href}">${d.link}</a>
                </p>
            </div>
        `
    } else{

    
    parallaxWorks.innerHTML += `
<div style="background-image: url('${d.img}');" class="parallax"><h2 class="parallax-text">${d.title}</h2>
        </div>

        <p>
          ${d.detail}
        </p>
`
}
})