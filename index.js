const _ = require("lodash");
let finalSlots = [];
let allTimeslots = {
  '2019-09-05': [{
    startTime: "2019-09-05T07:00:00",
    endTime: "2019-09-05T07:15:00",
  },
  {
    startTime: "2019-09-05T07:15:00",
    endTime: "2019-09-05T07:30:00",
  },
  {
    startTime: "2019-09-05T07:30:00",
    endTime: "2019-09-05T07:45:00",
  },
  {
    startTime: "2019-09-05T07:45:00",
    endTime: "2019-09-05T08:00:00",
  },
  {
    startTime: "2019-09-05T08:00:00",
    endTime: "2019-09-05T08:15:00",
  },
  {
    startTime: "2019-09-05T08:15:00",
    endTime: "2019-09-05T08:30:00",
  },
  {
    startTime: "2019-09-05T08:30:00",
    endTime: "2019-09-05T08:45:00",
  },
  {
    startTime: "2019-09-05T08:45:00",
    endTime: "2019-09-05T09:00:00",
  }
  ],
  '2019-09-06': [{
    startTime: "2019-09-06T07:00:00",
    endTime: "2019-09-06T07:15:00",
  },
  {
    startTime: "2019-09-06T07:15:00",
    endTime: "2019-09-06T07:30:00",
  },
  {
    startTime: "2019-09-06T07:30:00",
    endTime: "2019-09-06T07:45:00",
  },
  {
    startTime: "2019-09-06T07:45:00",
    endTime: "2019-09-06T08:00:00",
  },
  {
    startTime: "2019-09-06T08:00:00",
    endTime: "2019-09-06T08:15:00",
  },
  {
    startTime: "2019-09-06T08:15:00",
    endTime: "2019-09-06T08:30:00",
  },
  {
    startTime: "2019-09-06T08:30:00",
    endTime: "2019-09-06T08:45:00",
  },
  {
    startTime: "2019-09-06T08:45:00",
    endTime: "2019-09-06T09:00:00",
  }
  ]
};
let blockedSlots = {
  '2019-09-05': [{
    startTime: "2019-09-05T07:15:00",
    endTime: "2019-09-05T07:30:00",
  },
  {
    startTime: "2019-09-05T07:45:00",
    endTime: "2019-09-05T08:00:00",
  },
  {
    startTime: "2019-09-05T08:45:00",
    endTime: "2019-09-05T09:00:00",
  }
  ],
  '2019-09-06': [{
    startTime: "2019-09-06T08:30:00",
    endTime: "2019-09-06T08:45:00",
  }

  ]
};
let RBlockedSlots = {
  '2019-09-05': [{
    startTime: "2019-09-05T08:00:00",
    endTime: "2019-09-05T08:15:00",
  }],
  '2019-09-06': [{
    startTime: "2019-09-06T08:00:00",
    endTime: "2019-09-06T08:15:00",
  }]
};

let dates = ['2019-09-05', '2019-09-06'];
console.log('****************** ALL Slots *******************');
console.log(allTimeslots);
console.log('*************** BLOCKED SLOTS ******************');
console.log(blockedSlots);
console.log('*************** RECURRING SLOTS ******************');
console.log(RBlockedSlots);
dates.forEach((date) => {
  finalSlots[date] = _.xorBy(allTimeslots[date], blockedSlots[date], RBlockedSlots[date], "startTime");
})

console.log('*************** FINAL SLOTS *******************');
console.log(finalSlots);
console.log('***********************************************');