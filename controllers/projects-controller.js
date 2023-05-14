import * as views from '../views/projects-views.js';
import * as model from '../models/projects-model.js';

function projectHomePage(req, res) {
    let html = '<h1 class="text-center">Galería de Proyectos</h1>'

    html += '<nav class="d-flex justify-content-center my-2 gap-2"><a class="text-decoration-none text-black" href="/mobile">Mobile</a> | <a class="text-decoration-none text-black" href="/landing">Landing Page</a> | <a class="text-decoration-none text-black" href="/webapp">Web App</a> | <a class="text-decoration-none text-black" href="/ecommerce">E-Commerce</a> | <a class="text-decoration-none text-black" href="/game">Games</a></nav>'

    res.send(views.createPage('Bienvenido', html))
}

async function mobilePage(req, res) {
 const filter = {section: 'mobile'}
 const projects = await model.getProjects(filter);
 console.log('El valor de filter es: ', filter);
 console.log('El valor de projects es: ', projects);
 console.log('El valor de getProjects es: ', model.getProjects(filter));

 let html = '<h1 class="text-center">Proyectos Mobile</h1><btn><a href="/create" class="btn btn-success">Crear Proyecto</a></btn>'

 html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
 
 if (projects.length === 0) {
     html += '<li>No se encontraron proyectos</li>'
 } else {
     projects.forEach(project => {
         html += `<li class="col-5 w-40 mx-auto my-2">
         <div class="card">
           <img src="${project.img}" class="card-img-top" alt="${project.name}">
           <div class="card-body">
             <h3 class="card-title">${project.name}</h3>
             <p class="card-text">${project.description}</p>
             <p class="card-text">Tecnologías: ${project.technologies}</p>
             <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
             <btn><a href="/delete/${project._id}" class="btn btn-danger">Eliminar Proyecto</a></btn>
             <btn><a href="/update/${project._id}" class="btn btn-warning">Actualizar Proyecto</a></btn>
             
          
           </div>
         </div>
         </li>`
     })
 }
 
 html += '</ul>'

 res.send(views.createPage('Mobile', html))
}

async function landingPage(req, res) {
    const filter = {section: 'landing'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Landing Page</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'

    if (projects.length === 0) {
     html += '<li>No se encontraron proyectos</li>'
 } else {
     projects.forEach(project => {
         html += `<li class="col-5 w-40 mx-auto my-2">
         <div class="card">
           <img src="${project.img}" class="card-img-top" alt="${project.name}">
           <div class="card-body">
             <h3 class="card-title">${project.name}</h3>
             <p class="card-text">${project.description}</p>
             <p class="card-text">Tecnologías: ${project.technologies}</p>
             <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
           </div>
         </div>
         </li>`
     })
 }

    // projects.forEach(project => {
    //     html += `<li class="col-5 w-40 mx-auto my-2">
    //     <div class="card">
    //       <img src="${project.img}" class="card-img-top" alt="${project.name}">
    //       <div class="card-body">
    //         <h3 class="card-title">${project.name}</h3>
    //         <p class="card-text">${project.description}</p>
    //         <p class="card-text">Tecnologías: ${project.technologies}</p>
    //         <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
    //       </div>
    //     </div>
    //     </li>`
    //   })
    html += '</ul>'

    res.send(views.createPage('Landing Page', html))
}

async function webPage(req, res) {
    const filter = {section: 'webapp'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Web App</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Web App', html))
}

async function ecommercePage(req, res) {
    const filter = {section: 'ecommerce'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos E-Commerce</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('E-Commerce', html))
}

async function gamesPage(req, res) {
    const filter = {section: 'game'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Games</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Games', html))
}

export {
    projectHomePage,
    mobilePage,
    landingPage,
    webPage,
    ecommercePage,
    gamesPage
}