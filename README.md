<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">Find My API</h1>

<h3 align="center">For bootcamp students in need of an API!</h3>

<h4 align="center"><a href=""><strong>Deploy Link</strong></a> | <a href="https://github.com/vfields/find-my-api"><strong>Explore The Docs »</strong></a></h4>

<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
Bootcamps are hard enough, finding an API should be easier! This responsive and accessible application allows you to search over 1,000 free and public APIs by keyword, category, authentication requirements, CORs policies, and more. Find an API you like? Save it while you continue you search. Need a break? Take one with adorable dog pictures and videos. You got this!
<br>

<h3 align="center">Advanced Search Options:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/N7jOjCRDT65F7t9ChD/giphy.gif" alt="A gif preview of Find My API's advanced search options"></p>

<h3 align="center">Saved APIs:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/QxkSP2G7bWDCiTKAtt/giphy.gif" alt="A gif preview of Find My API's save user selected APIs feature"></p>

<h3 align="center">Take A Break:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/tfCWh67FSSDmq1K6m0/giphy.gif" alt="A gif preview of Find My API's take a break feature, displaying random dog videos and images"></p>

<h3 align="center">Bad URL Handling:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/ehhng3mNjNR8RPE7pa/giphy.gif" alt="A gif preview of Find My API's bad url handling"></p>

<br />
This final solo project was assigned during the third module of Turing's Front-End Engineering program, about 16-17 weeks into its students learning how to code. The details of this project are outlined in <a href="https://frontend.turing.edu/projects/module-3/showcase.html">this</a> project spec.

### Built With

![React][React-shield]
![TypeScript][TypeScript-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![Cypress][Cypress-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`, `cypress`)
- Once the necessary dependencies are installed, `cd` back into the root of the repository, and run `npm start`
- Explore and enjoy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add a search bar to the favorites page so that users can search through their favorited APIs
- [ ] Add user ability to add comments to saved APIs
- [ ] Break MultiSelect component down into smaller components

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Created with React and TypeScript, this code base intentionally features no `any` types and utilizes Router to not only create a multi-page user experience from a single-page application, but also handle bad user-inputed URLs
- Implements acceptance testing with a robust Cypress testing suite featuring error-handling as well as happy and sad paths
- Design is responsive and accessible, passing both WAVE and Lighthouse accessibility audits

### Reflections
<b>Wins:</b><br>
I am proud that I was able to create more advanced user search options! Being able to do so successfully, specifically being able to display a category dropdown with pop-up elements that represent each category selected, led me to learning about `useRef`, and I am happy that I was able to teach myself and implement that concept. I also feel that attempting a larger application gave me a greater appreciation for just how many components a true application might have—which helps me see even more value in TypeScript.
<p>
<b>Challenges:</b><br>
In the same vein, cracking the logic for a multi-input search and figuring out <code>useRef</code> proved to be the most challenging pieces of the project. I also feel I could have made even smaller, more reusable search components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<table align="center">
    <tr>
        <td align="center"> Tori Fields: <a href="https://github.com/vfields">GitHub</a> | <a href="https://www.linkedin.com/in/victoria-ashley-fields/">LinkedIn</a></td>
    </tr>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/103962335?v=4" alt="Tori Fields GitHub"
 width="150" height="auto" /></td>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
