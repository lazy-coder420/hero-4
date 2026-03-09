
// Sample job data// 
let currentTab = "All";

let jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130k-$175k", description:"Build cross-platform apps used globally.", status:"All"},
  {id:2, company:"WebFlow Agency", position:"Frontend Developer", location:"Los Angeles", type:"Part-time", salary:"$80k-$120k", description:"Create modern UI experiences for premium clients.", status:"All"},
  {id:3, company:"CloudNet", position:"Backend Developer", location:"New York", type:"Full-time", salary:"$110k-$150k", description:"Develop scalable server architecture.", status:"All"},
  {id:4, company:"DataCore", position:"Data Analyst", location:"Remote", type:"Contract", salary:"$70k-$95k", description:"Analyze business intelligence datasets.", status:"All"},
  {id:5, company:"AI Labs", position:"ML Engineer", location:"Boston", type:"Full-time", salary:"$140k-$180k", description:"Build AI automation systems.", status:"All"},
  {id:6, company:"CreativeX", position:"UI/UX Designer", location:"Chicago", type:"Full-time", salary:"$75k-$105k", description:"Design intuitive user interfaces.", status:"All"},
  {id:7, company:"SecureIT", position:"Cyber Security Specialist", location:"Remote", type:"Full-time", salary:"$120k-$160k", description:"Protect systems from cyber threats.", status:"All"},
  {id:8, company:"DevSolutions", position:"Full Stack Developer", location:"San Francisco", type:"Full-time", salary:"$130k-$170k", description:"Work on scalable MERN applications.", status:"All"}
];

//
function renderJobs(){

  const container = document.getElementById("jobs-container");
  container.innerHTML = "";

  let filteredJobs = currentTab === "All"
    ? jobs
    : jobs.filter(job => job.status === currentTab);

    document.getElementById("tab-count").innerText = filteredJobs.length + " jobs";



  if(filteredJobs.length === 0){
    container.innerHTML = `
      <div class="col-span-full text-center py-10">
        <i class="fa-solid fa-file text-4xl text-blue-500"></i>
        <h2 class="font-bold mt-4">No jobs available</h2>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    updateDashboard();
    return;
  }


  // Create job cards//
  filteredJobs.forEach(job => {

    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow p-4";


    card.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h2 class="font-bold">${job.company}</h2>
          <p class="text-sm text-gray-500">${job.position}</p>
          <p class="text-sm">${job.location} | ${job.type} | ${job.salary}</p>
        </div>
        <button class="delete-btn text-warning" data-id="${job.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="my-2">
        <span class="badge ${getBadgeColor(job.status)}">
          ${job.status === "All" ? "NOT APPLIED" : job.status.toUpperCase()}
        </span>
      </div>

      <p class="text-sm my-3">${job.description}</p>

      <div class="flex gap-2">
        <button class="btn btn-sm btn-primary interview-btn" data-id="${job.id}">
          Interview
        </button>

        <button class="btn btn-sm btn-error rejected-btn" data-id="${job.id}">
          Rejected
        </button>
      </div>   `;

    
      container.appendChild(card);
  });

  updateDashboard();
}


function getBadgeColor(status){
  if(status === "Interview") return "badge-success";
  if(status === "Rejected") return "badge-error";
  return "badge-neutral";
}


// Update Dashboard Counts ////


function updateDashboard(){
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText =
    jobs.filter(j => j.status === "Interview").length;
  document.getElementById("rejected-count").innerText =
    jobs.filter(j => j.status === "Rejected").length;
}

/* Event Delegation *////

document.getElementById("jobs-container").addEventListener("click", function(e){
      e.stopImmediatePropagation();
  const button = e.target.closest("button");
  if(!button) return;


  const id = Number(button.dataset.id);
    if(!id) return;

  const job = jobs.find(j => j.id === id);
  if(!job) return;


  // Interview Button
    if(button.classList.contains("interview-btn")){
      job.status = job.status === "Interview" ? "All" : "Interview";
  }

  // Rejected Button
  else if(button.classList.contains("rejected-btn")){
    job.status = job.status === "Rejected" ? "All" : "Rejected";
  }

  // Delete Button///
  else if(button.classList.contains("delete-btn")){
    jobs = jobs.filter(j => j.id !== id);
  }

  renderJobs();
});

//Tab Switching

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function(){
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
    this.classList.add("tab-active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});
// document.querySelectorAll(".tab").forEach(tab => {
// git add .  tab.addEventListener("click", function(){
//     document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
//     this.classList.add("tab-active");
//     currentTab = this.dataset.tab;
//     renderJobs();
//   });
// });

renderJobs();

