console.log('connected')
// list
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
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    // -------- ALL button click --------
    if (clickedBtnId === 'all-jobs-btn') {
        filterSection.classList.add('hidden');
        filterSection.innerHTML = '';
        noJobs.classList.add('hidden');

       

        cardContainer.classList.remove('hidden');
    }

    // -------- INTERVIEW button click --------
    if (clickedBtnId === 'all-int-btn') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobs.classList.add('hidden');
        filterSection.innerHTML = '';



        interviewList.forEach(function(card) {
             filterSection.appendChild(card);
        });


        if (interviewList.length === 0) {
            noJobs.classList.remove('hidden');
        }
    }

    // -------- REJECTED button click --------
    if (clickedBtnId === 'all-rej-btn') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobs.classList.add('hidden');
        filterSection.innerHTML = '';

        rejectedList.forEach(function(card) {
            filterSection.appendChild(card);
        });

        if (rejectedList.length === 0) {
            noJobs.classList.remove('hidden');
        }
    }
}

const mainContainer = document.querySelector('main');

const interviewBtn = document.querySelectorAll('.interview-btn');
const rejectedBtn = document.querySelectorAll('.rejected-btn');
const statusVar = document.querySelectorAll('.status-var');

// main container click
mainContainer.addEventListener('click', function(event){ 
  const card = event.target.closest('.card');

    if(event.target.classList.contains('interview-btn')){
        const status = card.querySelector('.status-var');
        status.innerText = "Interview";

         let cardHeading = card.querySelector('h5').innerText.toLowerCase()
         let alreadyAdded = false
        // console.log(,interviewList)
        for (let item of interviewList){
            let itemHeading = item.querySelector('h5').innerText.toLowerCase()
            if (cardHeading === itemHeading){
                alreadyAdded = true
                break;
            }
        }
        if (alreadyAdded){
            return;
        }
        interviewList.push(card);
        rejectedList = rejectedList.filter(item => item !== card);
        calculateJob();
        console.log('Interview List:', interviewList);
         console.log('Total Interview:', interviewList.length);
    }

    //   for rejected button

    if(event.target.classList.contains('rejected-btn')){
        const status = card.querySelector('.status-var');
        status.innerText = "REJECTED";

         let cardHeading = card.querySelector('h5').innerText.toLowerCase()
         let alreadyAdded = false
        // console.log(,interviewList)
        for (let item of rejectedList){
            let itemHeading = item.querySelector('h5').innerText.toLowerCase()
            if (cardHeading === itemHeading){
                alreadyAdded = true
                break;
            }
        }
        if (alreadyAdded){
            return;
        }
        rejectedList.push(card);
       interviewList  = interviewList.filter(item => item !== card);
        calculateJob();
        console.log(rejectedList);
         console.log(rejectedList.length);
    }
    
})

 
// rendering function

function renderRejected() {
    filterSection.innerHTML = '';

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 bg-white p-6';
        div.innerHTML = `
             <div class="job-tittle flex justify-between">
        <div>
            <h5 class="company-name text-[18px] font-semibold">CodeCrafters</h5>
            <p class="position text-gray-500">Software Engineer</p>
        </div>
        <div><i class="trash fa-regular fa-trash-can"></i></div>
    </div>
    <p class="job-info text-gray-500">Boston, MA • Full-time • $125,000 - $160,000</p>
    <div id="status-bar" class="space-y-2">
        <button class="status-var font-semibold bg-gray-100 py-2 px-3 rounded-sm">Not Applied</button>
        <p class="description text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
    </div>
    <div class="flex gap-3">
        <button class="interview-btn font-semibold text-green-500 py-2 px-3 border border-green-500 rounded-sm">interview</button>
        <button class="rejected-btn font-semibold text-red-500 py-2 px-3 border border-red-500 rounded-sm">Rejected</button>
    </div>
        `;
        
        filterSection.appendChild(div);
    }
}


