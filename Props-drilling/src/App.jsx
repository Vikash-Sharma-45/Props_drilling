import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  const jobsOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/JEvmZmIMonIf14K2XJVEoKlevEGepLEVN1eiZU4i9WA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5Lzcz/L2Q0Lzg5NzNkNDQ3/M2Y0MjhjYjc4Y2Nh/MzlmODJjMTVhZjNl/LmpwZw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/SBf4pxugmlP3An7Nkj60Ix1btetYoGTfPylQyCZB8-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/NC8zOC90ZXNsYS1i/cmFuZC1sb2dvLWNh/ci1zeW1ib2wtd2l0/aC1uYW1lLWJsYWNr/LWRlc2lnbi12ZWN0/b3ItNDYxNTU0Mzgu/anBn",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IR6RC-zNffVXCxMBqIWf89hIdVY8GreY75gLsLQFpTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9u/ZXRmbGl4LXZlY3Rv/ci1mbGF0LWxvZ28t/NzM1ODExNjk2MjYx/Njcxbmh6bHZnY215/Zi5wbmc",
    companyName: "Netflix",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/yQk5hjJCC2Ngi_6takchfHgP45aIWRT-hrCZ1xI8rAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9kZXNp/Z24vbGFuZ3VhZ2Uv/MzFjYzE4ZmRlM2Rj/Y2EwNGZjY2FmMzAz/NTY0OGEzN2EvOGJh/ci1sZWdhbC5zdmc",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/caopHXjMpbsF8W4US9Jhq5zYnRncKxAiAq_M-fsni7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9o/ZC1zcG90aWZ5LW9m/ZmljaWFsLWxvZ28t/dHJhbnNwYXJlbnQt/YmFja2dyb3VuZC03/MDE3NTE2OTQ3NzQ1/MTd0cW5kZGEwYXIy/LnBuZz92PTIwMjUw/OTE3MTE",
    companyName: "Spotify",
    datePosted: "3 weeks ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/qPH7NIa7i9Si6Oj037CcnV3LWGnDhMMHHoOFmlaeTfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzLzhm/LzQzL2IzOGY0MzA0/MGVhMTIzZGJlYWYw/NzMyOTY0ZjYwNjY5/LmpwZw",
    companyName: "Intel",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
      {jobsOpenings.map(function(elem, idx) {
        return <div key= {idx}>
        <Card 
          company = {elem.companyName} 
          datePosted = {elem.datePosted}
          brandLogo = {elem.brandLogo}
          post = {elem.post}
          tag1 = {elem.tag1}
          tag2 = {elem.tag2}
          pay = {elem.pay}
          location = {elem.location}
        />
        </div>
      })}
    </div>
  )
}

export default App
