// console.log('connected')
let interviewList = [];
let rejectedList =  [];

let currentFilter = 'all';

let totalJobNumber = document.getElementById('total-job-num');
let pendingJobNumber = document.getElementById('pending-job-num');
let declineJobNumber = document.getElementById('decline-job-num');

let allJobs = document.getElementById('card-container');


function calculateJob(){
totalJobNumber.innerText = allJobs.children.length;
pendingJobNumber.innerText = interviewList.length;
 declineJobNumber.innerText = rejectedList.length;

}
calculateJob();

const allJobsBtn = document.getElementById('all-jobs-btn');
const allInterviewBtn = document.getElementById('all-int-btn');
const allRejectBtn = document.getElementById('all-rej-btn');
 
const filterSection = document.getElementById('filtered-section');
const cardContainer = document.getElementById('card-container');

const noJobs = document.getElementById('no-jobs')


function clickedBtn(clickedBtnId) {
  
    allJobsBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allInterviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allRejectBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allJobsBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');
    allInterviewBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');
    allRejectBtn.classList.add('bg-[#FFFFFF]', 'text-gray-500');

    const selected = document.getElementById(clickedBtnId);
    selected.classList.remove('bg-[#FFFFFF]', 'text-gray-500');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

   
    if (clickedBtnId === 'all-jobs-btn') {
         currentFilter = 'all';
        filterSection.classList.add('hidden');
        filterSection.innerHTML = '';
        noJobs.classList.add('hidden');
        cardContainer.classList.remove('hidden');
    }

    if (clickedBtnId === 'all-int-btn') {
          currentFilter = 'interview';

        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobs.classList.add('hidden');
        
         renderInterview();      
        if (interviewList.length === 0) {
            noJobs.classList.remove('hidden');
        }
    }


if (clickedBtnId === 'all-rej-btn') {

          currentFilter = 'rejected'; 

        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobs.classList.add('hidden');

    renderRejected();           

if (rejectedList.length === 0) {
            noJobs.classList.remove('hidden');
        }
    }
}

const mainContainer = document.querySelector('main');

// const interviewBtn = document.querySelectorAll('.interview-btn');
// const rejectedBtn = document.querySelectorAll('.rejected-btn');
const statusVar = document.querySelectorAll('.status-var');


         mainContainer.addEventListener('click', function(event){ 
  const card = event.target.closest('.card');
  

    if(event.target.classList.contains('interview-btn')){
  const parentNode = event.target.parentNode.parentNode;
         const companyName = parentNode.querySelector('.company-name').innerText;
  const position = parentNode.querySelector('.position').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const description = parentNode.querySelector('.description').innerText;

const cardInfo = {
            companyName,
            position,
            jobInfo,
            description
        };
        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);
         rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);

        const statusBtn  = card.querySelector('.status-var');
        if (statusBtn) {
            statusBtn.innerText = 'INTERVIEW';
            statusBtn.classList.remove('bg-gray-100', 'bg-red-100', 'text-red-600');
            statusBtn.classList.add('bg-green-100', 'text-green-600');
        }          
  if (!jobExist) {
            interviewList.push(cardInfo);
        }
 if (currentFilter === 'rejected') {
            renderRejected();
        }
  if (currentFilter === 'interview') {
        renderInterview();
    }
         calculateJob(); 
    }
    if(event.target.classList.contains('rejected-btn')){
    
         const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const description = parentNode.querySelector('.description').innerText;

         const cardInfo = {
            companyName,
            position,
            jobInfo,
            description
        };
          
          const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
          interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);

        const statusBtn = card.querySelector('.status-var');
if (statusBtn) {
            statusBtn.innerText = 'REJECTED';
            statusBtn.classList.remove('bg-gray-100', 'bg-green-100', 'text-green-600');
            statusBtn.classList.add('bg-red-100', 'text-red-600');
        }

        if (!jobExist) {
            rejectedList.push(cardInfo);
        }
            
                  if (currentFilter === 'rejected') {
            renderRejected();
        }
        if (currentFilter === 'interview') {
            renderInterview();
        }

        calculateJob();   
    }

    if(event.target.classList.contains('trash')){
        const card = event.target.closest('.card');
        const companyName = card.querySelector('.company-name').innerText;
     interviewList = interviewList.filter(item => item.companyName !== companyName);

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);
    
    card.remove();
  if (currentFilter === 'interview') {
            renderInterview();
        }
        if (currentFilter === 'rejected') {
            renderRejected();
        }

        calculateJob();
    }
})

// rendering function

function renderInterview() {
    filterSection.innerHTML = '';

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 bg-white p-6';
        div.innerHTML = `
            <div class="job-tittle flex justify-between">
                <div>
                    <h5 class="company-name text-[18px] font-semibold">${interview.companyName}</h5>
                    <p class="position text-gray-500">${interview.position}</p>
                </div>
                <div><i class="trash fa-regular fa-trash-can"></i></div>
            </div>
            <p class="job-info text-gray-500">${interview.jobInfo}</p>
            <div class="space-y-2">
                <button class="status-var font-semibold bg-green-100 text-green-600 py-2 px-3 rounded-sm">INTERVIEW</button>
                <p class="description text-[#323B49]">${interview.description}</p>
            </div>
            <div class="flex gap-3">
        <button class="interview-btn font-semibold
         text-green-500 py-2 px-3 border border-green-500 rounded-sm
          hover:bg-green-400 hover:text-white 
           transition duration-200 
             cursor-pointer">
                interview
            </button>
        <button class="rejected-btn font-semibold text-red-500 py-2 px-3 border border-red-500 rounded-sm hover:bg-red-500 hover:text-white 
transition duration-200 
cursor-pointer">Rejected</button>
    </div>
        `;

        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 bg-white p-6';
        div.innerHTML = `
            <div class="job-tittle flex justify-between">
                <div>
                    <h5 class="company-name text-[18px] font-semibold">${rejected.companyName}</h5>
                    <p class="position text-gray-500">${rejected.position}</p>
                </div>
                <div><i class="trash fa-regular fa-trash-can"></i></div>
            </div>
            <p class="job-info text-gray-500">${rejected.jobInfo}</p>
            <div class="space-y-2">
                <button class="status-var font-semibold bg-red-100 text-red-600 py-2 px-3 rounded-sm">REJECTED</button>
                <p class="description text-[#323B49]">${rejected.description}</p>
            </div>
           <div class="flex gap-3">
        <button class="interview-btn font-semibold
         text-green-500 py-2 px-3 border border-green-500 rounded-sm
          hover:bg-green-400 hover:text-white 
           transition duration-200 
             cursor-pointer">
                interview
            </button>
        <button class="rejected-btn font-semibold text-red-500 py-2 px-3 border border-red-500 rounded-sm hover:bg-red-500 hover:text-white 
transition duration-200 
cursor-pointer">Rejected</button>
    </div>
        `;
    
        filterSection.appendChild(div);
    }
}