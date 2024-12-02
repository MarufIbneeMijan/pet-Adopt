// button container data from api 

const buttonData =async ()=>{
    const res =await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json()
    buttonByCatagory(data.categories)
}

const buttonByCatagory = (catagory)=>{
   
 const buttonContainer = document.getElementById("buttonContainer")
     for(const catagories of catagory ){
        //  console.log(catagories.category)
            const buttonDiv = document.createElement("div")
           buttonDiv.classList = "btn px-10 border mb-4 "
            buttonDiv.innerHTML = 
            `  <button id="${catagories.category}" onclick="getPetByCatagory('${catagories.category}')"> <img class="inline object-cover h-6" src="${catagories.category_icon}" >
            ${catagories.category}
            </button>
            `
            buttonContainer.appendChild(buttonDiv)

     }
}


// Filter By catagory showing progress button
const getPetByCatagory =async (catagory)=>{
const res= await fetch(`https://openapi.programming-hero.com/api/peddy/category/${catagory}`)
const data = await res.json()
 const showAllPets = document.getElementById("showAllPets")

 showAllPets.innerHTML=`
 <div class="col-span-5 h-48 w-full mx-auto text-center">
         <span class="loading loading-bars loading-lg"></span>  
   </div>
 `


setTimeout(()=>{
  showPetByCatagory(data.data) 
},2000)

}

const showPetByCatagory  = (id)=>{
  
  const showAllPets = document.getElementById("showAllPets")
 showAllPets.innerHTML=``
  console.log(id.length)
  if(id.length===0|| id.length===undefined){
    console.log("The object is empty.")
    showAllPets.innerHTML=
    `
    <div role="alert" class="alert alert-error mx-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>No Data To Show.</span>
</div>
    `
  }else{

 
  
   showAllPets.innerHTML=""
  for(const pets of id ){
 

    // console.log(pets,id)
    // if (Object.keys(pets).length === 0) {
    //   console.log("The object is empty.")
   
    // }

  

 


const singlePetDiv = document.createElement("div")

singlePetDiv.innerHTML= `
<div class=" border rounded-lg">
<figure  class="p-2 ">
<img class="w-[100%] rounded-lg"
  src="${pets.image}"
  />
</figure>
<div class="p-2">
<h2 class="card-title text-[20px]">${pets.pet_name}</h2>
  
        <p class="inline text-[16px] text-gray-600 " >
        <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=xkxYbc0WQHuF&format=png&color=000000" alt="" srcset="">
        Breed: ${pets.breed}
         </p>
        <p class="text-[16px] text-gray-600" >
        <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" srcset="">
        Birth: ${pets.date_of_birth}</p>
        <p class="text-[16px] text-gray-600" >Gender: 
        <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=XgEB7PXgRMcj&format=png&color=000000" alt="" srcset="">
        ${pets.gender}</p>
        <p class="text-[16px] text-gray-600" >
        <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=7172&format=png&color=000000" alt="" srcset="">
        Price: ${pets.price}</p>
  
<div class="mt-3">
  <button class="px-3 py-2 border rounded-lg" onclick="likedPets('${pets.image}')"><img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000" alt="" srcset=""></button>
  <button class="px-3 py-2 text-[#0E7A81] border rounded-lg"onclick="setTimeout(closeModal,3000);countdown(event)">Adopt</button>
  <button class="px-3 py-2 text-[#0E7A81] border rounded-lg" onclick="getClickData(event,'${pets.price}','${pets.image}','${pets.breed}','${pets.gender}','${pets.date_of_birth}','${pets.pet_name}','${pets.vaccinated_status}')" >Details</button>
 
  
 
 
</div>
</div>
</div>
`
showAllPets.appendChild(singlePetDiv)

}
}}






// showing all pets 
const AllPets = async () =>{
const res =await fetch("https://openapi.programming-hero.com/api/peddy/pets")
const data = await res.json()
showAllPets(data.pets)




}





const showAllPets=(data)=> {
    // console.log(data.pets)
    const showAllPets = document.getElementById("showAllPets")
  

 
    for(const pets of data ){
       console.log("pet er ashol rup",pets)
//  show all Items code 
 
    const singlePetDiv = document.createElement("div")
   
    singlePetDiv.innerHTML= `
    <div class=" border rounded-lg">
  <figure  class="p-2 ">
    <img class="w-[100%] rounded-lg"
      src="${pets.image}"
      />
  </figure>
  <div class="p-2">
    <h2 class="card-title text-[20px]">${pets.pet_name}</h2>
      
            <p class="inline text-[16px] text-gray-600 " >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=xkxYbc0WQHuF&format=png&color=000000" alt="" srcset="">
            Breed: ${pets.breed}
             </p>
            <p class="text-[16px] text-gray-600" >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" srcset="">
            Birth: ${pets.date_of_birth}</p>
            <p class="text-[16px] text-gray-600" >Gender: 
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=XgEB7PXgRMcj&format=png&color=000000" alt="" srcset="">
            ${pets.gender}</p>
            <p class="text-[16px] text-gray-600" >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=7172&format=png&color=000000" alt="" srcset="">
            Price: ${pets.price}</p>
      
    <div class="mt-3">
      <button class="px-3 py-2 border rounded-lg" onclick="likedPets('${pets.image}')"><img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000" alt="" srcset=""></button>
      <button class="px-3 py-2 text-[#0E7A81] border rounded-lg" onclick="setTimeout(closeModal,3000);countdown(event)">Adopt</button>
      <button class="px-3 py-2 text-[#0E7A81] border rounded-lg"  onclick="getClickData('${event}','${pets.price}','${pets.image}','${pets.breed}','${pets.gender}','${pets.date_of_birth}','${pets.pet_name}','${pets.vaccinated_status}')">Details</button>
     
      
     
     
    </div>
  </div>
</div>
`
showAllPets.appendChild(singlePetDiv)
}
  // show all items 

}
 
function likedPets(a){
  const likedPetsContainer = document.getElementById("likedPetsContainer")
  const likedPetsContainerDiv =  document.createElement("div")
  likedPetsContainerDiv.classList=""
  likedPetsContainerDiv.innerHTML = 
  `

 <img 
      src="${a}"
      />
 
  `
  likedPetsContainer.appendChild(likedPetsContainerDiv)
}   
function getClickData(event,a,b,c,d,e,f,g){
  const petsSection= document.getElementById("modalContainer")
 
  let x=event.clientX
  let y= event.clientY
 

  console.log(x,y)
  
petsSection.classList.remove("hidden")
  petsSection.style.top=`${y}px`
 petsSection.style.left=`${x}px`
  const showModal=document.createElement("div")
  showModal.innerHTML=`
  <div class="card">
  <figure>
    <img
      src="${b}"
       />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${f}</h2>
    <p>Breed: ${c}</p>
    <p>Gender: ${d}</p>
    <p>Gender: ${d}</p>
    <p>Vaccinated Status: ${g}</p>
    <p>Birth: ${e}</p>
    <p>Price: ${a}</p>

    <div class="card-actions justify-end">
      <button onclick="cancelButtonFunction()" class="btn btn-primary">Cancel</button>
    </div>
  </div>
</div>
  `
  petsSection.appendChild(showModal)
}




const cancelButtonFunction=()=>{

const modalContainer = document.getElementById("modalContainer")
modalContainer.classList.add("hidden")
modalContainer.innerHTML=`` 

  
}
const countdown = (event)=>{
  let x= event.clientX
  let y= event.clientY
  
  const countDownModal = document.getElementById("countDownModal")
  console.log(countDownModal)
  countDownModal.classList.remove("hidden")
 
  countDownModal.style.top=`${y}px`
  countDownModal.style.left=`${x}px`
  for(let i = 1; i<4;i++){
    setTimeout(function(){
      console.log(i)
      const countdownModalDiv = document.createElement("div")
      countDownModal.innerHTML=countDownModal.innerHTML=`
     
             <div class="text-center  bg-white w-[300px]">
               <h3 class="text-lg font-bold">Hello!</h3>
               <p class="py-4">Thanks For Choosing uss!!</p>
                <p>  please wait${i}sec </p>
             </div>
         
    
     
   
     `
   countDownModal.appendChild(countdownModalDiv)
    
    },i*1000)
    
  
  }

}


 const closeModal=()=>{
 const countDownModal = document.getElementById("countDownModal")
countDownModal.classList.add("hidden")

 }


//  sorting 
const sortingPriceData=async()=>{
const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
const data = await res.json()
sortingPrice(data)


}
const sortingPrice =(data=0)=>{
  const showAllPets = document.getElementById("showAllPets")
  console.log(data.pets)
  const myPrice = data.pets
  myPrice.sort((a,b)=>b.price-a.price)
  showAllPets.innerHTML=``
  for(let price of myPrice){
    const singlePetDiv = document.createElement("div")
   
    singlePetDiv.innerHTML= `
    <div class=" border rounded-lg">
  <figure  class="p-2 ">
    <img class="w-[100%] rounded-lg"
      src="${price.image}"
      />
  </figure>
  <div class="p-2">
    <h2 class="card-title text-[20px]">${price.pet_name}</h2>
      
            <p class="inline text-[16px] text-gray-600 " >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=xkxYbc0WQHuF&format=png&color=000000" alt="" srcset="">
            Breed: ${price.breed}
             </p>
            <p class="text-[16px] text-gray-600" >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" srcset="">
            Birth: ${price.date_of_birth}</p>
            <p class="text-[16px] text-gray-600" >Gender: 
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=XgEB7PXgRMcj&format=png&color=000000" alt="" srcset="">
            ${price.gender}</p>
            <p class="text-[16px] text-gray-600" >
            <img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=7172&format=png&color=000000" alt="" srcset="">
            Price: ${price.price}</p>
      
    <div class="mt-3">
      <button class="px-3 py-2 border rounded-lg" onclick="likedPets('${price.image}')"><img class="inline h-[16px]" src="https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000" alt="" srcset=""></button>
      <button class="px-3 py-2 text-[#0E7A81] border rounded-lg" onclick="setTimeout(closeModal,3000);countdown(event)">Adopt</button>
      <button class="px-3 py-2 text-[#0E7A81] border rounded-lg"  onclick="showDetailsModal('${price.price}','${price.image}','${price.breed}','${price.gender}','${price.date_of_birth}','${price.pet_name}')">Details</button>
     
      
     
     
    </div>
  </div>
</div>
`
showAllPets.appendChild(singlePetDiv)
  }
 

  

}




AllPets() 
buttonData()