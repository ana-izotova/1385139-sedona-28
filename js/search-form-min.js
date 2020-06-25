var searchButton=document.querySelector(".hotels-search");var searchForm=document.querySelector(".hotels-search-form");searchForm.classList.remove("is-open");var startDate=searchForm.querySelector("[name=start-date]");var endDate=searchForm.querySelector("[name=end-date]");var adults=searchForm.querySelector("[name=adults]");var children=searchForm.querySelector("[name=children]");var isStorageSupport=true;var adultsStorage="";var childrenStorage="";try{adultsStorage=localStorage.getItem("adults");childrenStorage=localStorage.getItem("children")}catch(error){isStorageSupport=false}if(adultsStorage){adults.value=adultsStorage}if(childrenStorage){children.value=childrenStorage}searchButton.addEventListener("click",function(a){a.preventDefault();searchForm.classList.toggle("is-open");if(searchForm.classList.contains("is-open")){searchForm.classList.add("animation-open")}});window.addEventListener("keydown",function(a){if(a.key==="Escape"){if(searchForm.classList.contains("is-open")){a.preventDefault();searchForm.classList.remove("is-open")}}});searchForm.addEventListener("submit",function(a){if(!startDate.value||!endDate.value||!adults.value||!children.value){a.preventDefault();searchForm.classList.remove("modal-error");searchForm.offsetWidth=searchForm.offsetWidth;searchForm.classList.add("modal-error")}else{if(isStorageSupport){adultsStorage=localStorage.setItem("adults",adults.value);childrenStorage=localStorage.setItem("children",children.value)}}console.log(startDate.value,endDate.value,adults.value,children.value)});
