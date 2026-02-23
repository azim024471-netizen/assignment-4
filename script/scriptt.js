let interviewList = [];
let rejectedList =  [];

let totalJobNumber = document.getElementById('total-job-num');
let pendingJobNumber = document.getElementById('pending-job-num');
let declineJobNumber = document.getElementById('decline-job-num');

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
 
const filterSection = document.getElementById('filtered-section');
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

    mainContainer.addEventListener('click', function(event){
          const parenNode = event.target.parentNode.parentNode;
         console.log(parenNode);

    })