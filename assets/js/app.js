// import './../css/style.css'
const hashHandler = (hash) => {
    console.log('step 2', hash)
}

window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
// document.querySelector('#app').innerHTML = `
//   <header>
//     <nav>
//       <ul>
//         <a href="#" data-content="The Event" class="text-link">
//           <li>The Event</li>
//         </a>
    
//         <li>The Artist</li>
//         <li>Testimonials</li>
//         <li>Gallery</li>
//         <li>Home</li>
//       </ul>
//     </nav>
//   </header>
//   <main style id="splash">
//     <div class="title">
//       <a href="#about">
//         <h2>Soma</h2>
//         <h2>Soma</h2>
//       </a>
//     </div>
//   </main>
// `