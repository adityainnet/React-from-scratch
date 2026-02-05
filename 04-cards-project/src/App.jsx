import React from "react";

import Card from "./component/Card";

const App = () => {
  // const arr = [10, 20, 30]; // array;
  const jobOpenings = [
    {
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 120,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: 95,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: 110,
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 130,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Visual Experience Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      payPerHour: 150,
      location: "Remote, Global",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "UX Researcher",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: 100,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Product UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 140,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "LinkedIn",
      datePosted: "2 months ago",
      post: "Interaction Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: 105,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Design Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 125,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
      companyName: "Airbnb",
      datePosted: "10 weeks ago",
      post: "UX Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      payPerHour: 145,
      location: "Remote, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        // console.log(idx);

        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.payPerHour}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
