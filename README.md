# Portfolio Website

This is my personal portfolio site, built for the portfolio project in Codecademy's Full-Stack Engineer path. It has a home page with some of the projects I've built so far and a contact page with how to reach me.

Live site: https://ktforge.github.io/portfolio-website/

## What's on it

The home page has a short intro and project cards for Number Guesser, Vandalia Chess Club, and Fotomatic. Each card has a screenshot, a summary, the tech used, and links to the live site and the code.

The contact page has my photo, email, GitHub, LinkedIn, and location.

There's a dark mode button in the header that saves your choice with localStorage, so it stays dark when you switch pages or come back later.

It's responsive too. Projects show in 3 columns on desktop, 2 on tablets, and 1 on phones, where the header and contact section also stack. It's all plain HTML, CSS, and JavaScript, with Flexbox and Grid for layout.

## What I learned

I started with wireframes for both pages before writing any code, which gave me a clear picture of what to build.

My first bug was a typo in the viewport meta tag. I wrote `initial-scale-1.0` instead of `initial-scale=1.0`. Desktop looked fine, so I wouldn't have caught it until testing on a phone.

Dark mode didn't work the first time. The JavaScript was adding the `dark` class to the body, but I had left the `body.dark` block out of my CSS, so the class didn't change anything. The console showed the theme was saving, which told me the JavaScript was fine and the problem was in the CSS. Once I went back through my stylesheet and added the missing block, the toggle worked.

Before I added media queries, the site looked rough in the iPhone view in DevTools. My email address was too long and pushed the whole page wider than the screen. `overflow-wrap: anywhere` fixed that.

Putting all the colors in CSS variables made dark mode simple, since the toggle only has to swap the variable values.

## Running it

Clone the repo and open `index.html` in your browser, or use the Live Server extension in VS Code.

Built by DeVante Bush
