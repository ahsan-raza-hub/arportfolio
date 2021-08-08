
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity_0");
    
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },3000)
})


const links = document.querySelectorAll(".alternate_style"),
totalLinks = links.length;

function setActiveColor(color){
    for( let i = 0; i<totalLinks;i++){
        if(color == links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}

const bodySkin= document.querySelectorAll(".body_skin"),
    totalSkins = bodySkin.length;

    for(let i=0;i<totalSkins;i++){
        bodySkin[i].addEventListener("change",function(){
            if(this.value == "dark"){
                document.body.className="dark";
            }
            else{
                document.body.className="";
            }
        })
    }


document.querySelector(".toggler_switch").addEventListener("click",()=>{
    document.querySelector(".style_switcher").classList.toggle("open");
})


// aside navbar

const nav=document.querySelector(".nav"),
    navList= nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i=0;i<totalNavList;i++){
        const a= navList[i].querySelector("a");
        a.addEventListener("click",function(){
            removeSection();
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j)
                }
                    navList[j].querySelector("a").classList.remove("active");
            }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth <1200){
                    asideMenu();
                }
        })
    }

    function removeSection(){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }

    function showSection(element){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active");

    }

    function updateNav(element){
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target == navList[j].querySelector("a").getAttribute("href").split("#")[1]){
                navList[j].querySelector("a").classList.add("active");
            }
            }
    }

    document.querySelector(".hire_me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeSection();
        addBackSection(sectionIndex);
    })


    const navTogglerBtn=document.querySelector(".nav_toggler"),
        aside=document.querySelector(".aside");

        navTogglerBtn.addEventListener("click",()=>{
            asideMenu();
        })

        function asideMenu(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0;i<totalSection;i++){
                allSection[i].classList.toggle("open");
            }
        }