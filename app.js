import data from './projectsData.js';
const loadMore = document.querySelector('.load-more')


let curr= 0
function createProject(newData){
    const main = document.querySelector('.project-container')

    const articles= newData.map(project=>{
           
            for(let i = 0;i<project.technology.length;i++){
              const list = document.createElement('span')
              list.innerHTML = project.technology
              list.style=`--position:${i + 1};`
              document.querySelector('.card__technology').append(list)
            }
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
                      <div class="card__technology" style='--quantity:${project.technology.length}; --width:110px;'>
                        ${createList(project?.technology)}
                      </div>
                  </div>
                    </article>`
    
        })
        main.innerHTML+=articles.join('')

}
function createList(lists){

  return lists.map((item,index) =>`<span style='--position:${index + 1};'>${item}</span>`).join(' ')
}
loadMore.addEventListener('click',(e)=>
{
    e.target.classList.add('show-loader')

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