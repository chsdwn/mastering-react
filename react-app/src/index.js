const square = function(number) {
  return number * number;
};

const squareAF = number => number * number;

console.log(squareAF(3));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

const deactiveJobs = jobs.filter(job => !job.isActive);

console.log(activeJobs);
console.log(deactiveJobs);
