let interviewList = [];
let rejectedList =  [];

let totalJobNumber = document.getElementById('total-job-num');
let pendingJobNumber = document.getElementById('pending-job-num');
let declineJobNumber = document.getElementById('decline-job-num');

const filterSection = document.getElementById('filtered-section');

console.log(totalJobNumber , pendingJobNumber , declineJobNumber);

let allJobs = document.getElementById('card-container');
console.log(allJobs.children);

function calculateJob(){
totalJobNumber.innerText = allJobs.children.length;
pendingJobNumber.innerText = interviewList.length;
 declineJobNumber.innerText = rejectedList.length;

}
calculateJob();

const allJobsBtn = document.getElementById('all-jobs-btn');
const allInterviewBtn = document.getElementById('all-int-btn');
const allRejectBtn = document.getElementById('all-rej-btn');
 
// const filterSection = document.getElementById('filtered-section');
const cardContainer = document.getElementById('card-container');

const noJobs = document.getElementById('no-jobs')
//  toggle  main btn  
function clickedBtn(clickedBtnId) {
    // -------- Active Style Toggle --------
    allJobsBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allInterviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allRejectBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allJobsBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');
    allInterviewBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');
    allRejectBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');

    const selected = document.getElementById(clickedBtnId);
    selected.classList.remove('bg-[#FFFFFF]', 'text-gray-500');
    selected.classList.add('bg-[#3B82F6]', 'text-white'); }

    const mainContainer = document.querySelector('main');

    
    // main div part

    mainContainer.addEventListener('click', function(event){

     console.log(event.target.classList.contains('interview-btn'))
        if(event.target.classList.contains('interview-btn')){
                
          const parenNode = event.target.parentNode.parentNode;
         const companyName = parenNode.querySelector('.company-name').innerText;
         const  position = parenNode.querySelector('.position').innerText;

         const jobInfo = parenNode.querySelector('.job-info').innerText;
         const description =parenNode.querySelector('.description').innerText;
          const status = parenNode.querySelector('.status-var').innerText;
          const trash = document.querySelector(".trash");
         console.log(companyName,position, jobInfo, description, status)
 const cardifo = {
    companyName,
    position,
    trash,
    jobInfo,
    description,
    status
 }

 const jobExist = interviewList.find(item=> item.companyName == cardifo.companyName)

   parenNode.querySelector('.status-var').innerText = 'INTERVIEW'
 if(!jobExist){
    interviewList.push(cardifo)
 }
  renderInterview()
 console.log(interviewList)
        }

    })


    function renderInterview(){
        filterSection.innerHTML = '';
        for (let interview of interviewList) { 
            console.log(interview)
            let div = document.createElement('div');
            div.className = 'card space-y-5 bg-white p-6'
            div.innerHTML = `
             <div class="job-tittle flex justify-between">
                           <div ><h5 class="company-name text-[18px] font-semibold">Mobile First </h5>
                             <p class=" position text-gray-500">React Native Developer</p></div>
                           <div><i class="trash fa-regular fa-trash-can"></i></div>
                    </div>

                    <p class="job-info text-gray-500 ">Seattle, WA • Full-time •$140,000 - $190,000</p>

                    <div id="status-bar" class="space-y-2">
                         <button id="status" class="status-var font-semibold bg-gray-100 py-2 px-3  rounded-sm">Not Applied</button>
                         <p class="description text-[#323B49] ">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="flex gap-3">
                        
                        <button   class="interview-btn font-semibold text-green-500 py-2 px-3 border border-green-500 rounded-sm">interview</button>
                        <button   class="rejected-btn font-semibold text-red-500 py-2 px-3 border border-red-500 rounded-sm">Rejected</button>
                    </div>
            `

            filterSection.appendChild(div)
        }
    }