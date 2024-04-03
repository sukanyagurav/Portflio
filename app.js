import data from './projectsData.js';
const loadMore = document.querySelector('.load-more')

console.log(data)
let curr= 0
function createProject(newData){
    const main = document.querySelector('.project-container')

    const articles= newData.map(project=>{
      console.log(project)
            return `<article class="card" >
              

                    <div class="project__image">
                    <img loading="lazy" src="${project.imageUrl}" alt="" class="card_image">
                  </div>
                  <div class="description">
                    <a href="${project.liveLink}" target="_blank" class="projectName">
                    ${project.name}
                    </a>
                    <a href="${project.githubLink}" target="_blank">
                        <i class="fa-brands fa-square-github" aria-hidden="true"></i>
                      </a>
                      <div class="card__technology">
                        ${createList(project?.technology)}
                      </div>
                  </div>
                    </article>`
    
        })
        main.innerHTML+=articles.join('')
        console.log(newData)
}
function createList(lists){
  console.log(lists)
  return lists.map(item =>`<span>${item}</span>`).join(' ')
}
loadMore.addEventListener('click',(e)=>
{
    e.target.classList.add('show-loader')
    console.log(e.target)
    e.target.setAttribute('disabled',true)
    let newData 
    setTimeout(()=>{
        e.target.classList.remove('show-loader')
        e.target.removeAttribute('disabled')
        newData = data.slice(curr,curr+3)
        createProject(newData)
    },3000)
    curr+=3
    if(curr >= data.length)
    {
        e.target.classList.add('loaded')
    }
}
)