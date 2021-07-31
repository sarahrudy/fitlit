import './css/styles.css';
import UserRepository from './UserRepository';
import User from './User';
import SleepRepository from './SleepRepository';
import UserSleepData from './UserSleepData';
import HydrationRepository from './HydrationRepository';
import UserHydrationData from './UserHydrationData';
import './images/24-hours.png';
import './images/all-friends.png';
import './images/profile-user.png';
import './images/sleep.png';
import './images/week.png';
import './images/water-drop.png';
import './images/history-clock-button.png';
import './images/friend.png';

import { Chart, LinearScale, registerables } from 'chart.js';
Chart.register(...registerables);

//---------------------EVENT LISTENER--------------------------------------//
window.addEventListener('load', loadPage);
 
//---------------------GLOBAL VARIABLES--------------------------------------//
let allUserData;
let allHydrationData;
let allSleepData;
const welcomeName = document.querySelector(".welcome-user");
const address = document.querySelector(".address");
const email = document.querySelector(".email")
const strideLength = document.querySelector(".stride-length-num");
const dailyStepGoal = document.querySelector(".daily-step-goal-num")
const averageStepGoal = document.querySelector(".average-step-goal-num")

//---------------------FETCH CALLS--------------------------------------//
function loadPage() {
  Promise.resolve(fetchPageData()).then((data) => generateRepoClasses(data))
    .then(() => displayPageInfo());
}

function fetchPageData() {
  const userRepoPromise = fetchData('users') 
  const hydrationRepoPromise = fetchData('hydration')  
  const sleepRepoPromise = fetchData('sleep')  
  return Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then(values => values);
}

function generateRepoClasses(dataSets) {
  allUserData = new UserRepository(dataSets[0].userData);
  allHydrationData = new HydrationRepository(dataSets[1].hydrationData);
  allSleepData = new SleepRepository(dataSets[2].sleepData);
}

function fetchData(type) {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(`ERROR with ${type}: ${err}`))
}

//---------------------ALL DISPLAY FUNCTIONS----------------------------------//
function displayPageInfo() {
  const randomUser = allUserData.userData[Math.floor(Math.random()* allUserData.userData.length)]
  const user = new User(allUserData.returnUserData(randomUser.id));
  displayUserCard(user);
  displayAllHydrationData(user);
  displayAllSleepData(user);
}

//---------------------USER CARD--------------------------------------//
function displayUserCard(user) {
  welcomeName.innerHTML = `Welcome, ${user.returnFirstName()}!`;
  address.innerHTML = `${user.address}`;
  email.innerHTML = `${user.email}`;
  strideLength.innerHTML = `${user.strideLength}`
  dailyStepGoal.innerHTML = `${user.dailyStepGoal}`
  averageStepGoal.innerHTML = `${allUserData.returnAverageStepGoal()}`
}

//---------------------HYDRATION CHARTS --------------------------------------//
function displayAllHydrationData(user) {
  const hydrationData = allHydrationData.returnUserData(user.id);
  const currentUserHydrationData = new UserHydrationData(hydrationData);

  displayDailyHydrationData(currentUserHydrationData);
  displayWeeklyHydrationData(currentUserHydrationData);
  displayAverageHydration(currentUserHydrationData);
}

function displayDailyHydrationData(user) {
  const dailyHydrationDataButton = document.getElementById('daily-hydration')
  dailyHydrationDataButton.innerHTML = `${user.returnOuncesDrank()}`;
}

function displayWeeklyHydrationData(user) {
  const weeklyHydrationChart = document.getElementById('weekly-hydration');
  const weeklyHydrationDataChartDisplay = new Chart(weeklyHydrationChart, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '', 'Today'],
      datasets: [
        {
          label: 'Water You Drank',
          data: user.numDailyOuncesDrankInWeek(),
          backgroundColor: ['#504522', '#504522', '#504522', '#504522', '#504522', '#504522', '#78672f']
        },
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Weekly Hydration Level Display Title',
        responsive: true
      }
    }
  }); 
}

function displayAverageHydration(user) {
  const averageHydration = document.getElementById('average-hydration')
  averageHydration.innerHTML = `${user.calculateAverageOuncesConsumed()}`;
}

//---------------------SLEEP CHARTS --------------------------------------//
function displayAllSleepData(user) {
  const currentUserSleepData = new UserSleepData(allSleepData.returnUserData(user.id));
  displayDailySleepData(currentUserSleepData);
  displayWeeklySleepData(currentUserSleepData);
  displayAllTimeSleepData(currentUserSleepData);
}

function displayDailySleepData(user) {
  const dailySleepHoursButton = document.getElementById('daily-sleep-hours');
  const dailySleepQualityButton = document.getElementById('daily-sleep-quality');
  dailySleepHoursButton.innerHTML = `${user.returnHoursSlept()}`;
  dailySleepQualityButton.innerHTML = `${user.returnSleepQuality()}`;
}

function displayWeeklySleepData(user) {
  const weeklySleepQualityChart = document.getElementById('weekly-sleep');
  const weeklySleepDataChartDisplay = new Chart(weeklySleepQualityChart, {
    type: 'bar', 
    data: {
      labels: [ '', '', '', '', '', '', 'Today'],
      datasets: [
        {
          label: 'Hours You Slept',
          data: user.returnHoursSleptByWeek(),
          backgroundColor: ['#a38c3d', '#a38c3d', '#a38c3d', '#a38c3d', '#a38c3d', '#a38c3d', '#d0b34a']
        },
        {
          label: 'Sleep Quality',
          data: user.returnSleepQualityByWeek(),
          backgroundColor: ['#504522', '#504522', '#504522', '#504522', '#504522', '#504522', '#78672f']
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: '',
        responsive: true
      }
    }
  });
  
  weeklySleepQualityChart.innerHTML = `${weeklySleepDataChartDisplay}`;
}

function displayAllTimeSleepData(user) {
  const allTimeSleepButton = document.getElementById('all-time-sleep');
  const allTimeSleepButton2 = document.getElementById('all-time-sleep-2');
  allTimeSleepButton.innerHTML = `${user.calculateAverageHoursSlept()}`;
  allTimeSleepButton2.innerHTML = `${user.calculateAverageSleepQuality()}`;
}
