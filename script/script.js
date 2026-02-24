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

// job alada card a show part


