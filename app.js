import data from '.projectsData.js';
const loadMore = document.querySelector('.load-more')

console.log(data)
let curr= 0
function createProject(newData){
    const main = document.querySelector('.project-container')
    // let newData = data.slice(curr,curr+3)
    const articles= newData.map(project=>{
            return `<article class="card" >
                            <img src="${project.imageUrl}" alt="" class="card_image">
                            <div class="buttons">
                      <a href="${project.liveLink}" target="_blank">
                        <i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                      </a>
                      <a href="${project.githubLink}" target="_blank">
                        <i class="fa-brands fa-github" aria-hidden="true"></i>
                      </a>
                    </div>
                    </article>`
    
        })
        main.innerHTML+=articles.join('')
        console.log(newData)
}
loadMore.addEventListener('click',(e)=>
{
    e.target.classList.add('show-loader')
    let newData 
    setTimeout(()=>{
        e.target.classList.remove('show-loader')
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