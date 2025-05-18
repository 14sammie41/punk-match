![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Samantha Spencer

This is a simple memory based match game with a punk theme to keep things lively.

### Interesting notes

+ When deciding on reaction times and the time taken for certain things to happen on the page, for example, card flips, i really wanted to make sure that it was a psychologically reasonable time frame. Memory games are about ensuring the match itself is registered and if no match is found, allowing the brain to remember what has been seen to allow for the next match to be easier. For those of us of a younger disposition it is much easier for us to remember things within a quicker time frame. As we get older it becomes harder to retain information. I would like to be able to add a function to the game where you input your age before you start meaning the game would change the amount of time the cards were on the screen dependant on what your theoretical mental capacity was. I have not done it on this version of the game because i ran out of time to add the function properly but i think it would have been a really nice addition.

## User interactions

I will have 12 cards on show in the game, each of which has a back, with the same image on, just like a set of playing gards. Then on the other side of the cards there will be six images, each of which has an exact matching card. Then the player simply clicks to choose a card and then again for a second card. Once the player has picked two cards initially the game will work out if they match or not. If they match they will stay flipped over so the player knows. If they don't match they will flip back over to the back back side automatically and this will repeat until all cards are matched. Every time a match is found the 'pairs' score will go up.

### Testing - Automated vs. Manual

When deciding on testing manually or automatically I had not realised that I would need to add a section on my reasoning and the advantages and disadvantages for the assesment criteria. I have been consistently manually testing throughout the development of the page by having a live version of the page open on Chrome through VSCode and each change I have made I have tested. This means my automated testing through Jest was essentially null and void by the time I came to checking back on the assesment criteria.

The advantage for me of having a live version and manually testing as I develop is that I can see what the user would see (pre deployment obviously) meaning my user interaction testing at the end of the project takes a lot less time. The disadvantage from a long term or bigger project stand point is that it takes significantly longer to correct issues once you have already written a full function instead of doing it step by step. If this project had been bigger I would be much more likely to use automated testing to speed the overall process up.

The advantage of automated testing is always going to be the less physical clicking and checking of the whole page. On my page the biggest area I would have done automated testing on in hindsight is getting the 'flip' function to work. I had to spend a lot of time writing and re writing the whole function as I could not work out the error. As you can see this is not a small or simple function so therefore I realise I could have made my life a lot easier had i gone the automated route.

## Wireframe of the site on all screen sizes:

I have sketched up the initial design in mobile, tablet and monitor sizes so that there is a baseline to work from. The bulk of the images will come from AI generation, so there will be no risk of plagiarism. I have also used icons as images for the cards - these have been attributed below. In complete honesty after completing the project I have gone back through this and noticed I created my wireframe with a lot less interactivity. This developed as the project developed as it allows me to show off my JavaScript more.

+ ![wireframe of my homepage](assets/images/punk-match-wireframe.png)

## How to:

### Dependencies and Credits

This will be for dependencies as I go through this project - complete as they come through.
+ [Bootstrap](https://getbootstrap.com/) has been used throughout the project to add items like a navbar and a footer. The main reason for this is to mitigate the need for written Javascript to create a responsive site. I have annotated throughout the project, the key areas this has been used.
+ [Favicon.io](https://favicon.io/emoji-favicons/love-you-gesture) has been used to generate a quick to recognise image for a favicon meaning you can link it to the page in each tab.
+ [Font Awesome](https://fontawesome.com/kits/524dbc89dc/setup) has been used to add icons and allow them to be easily edited.
+ [Google Fonts](https://fonts.google.com/selection/embed) has been used to give a consistent font accross the site. I have chosen this font as it has a clean look but with a bit of a gothic style to it.
+ [Microsoft Image Designer](https://designer.microsoft.com/image-creator) has been used to create images for the site, including the background and some of the more advanced tiles.
+ [IMGOnline](https://www.imgonline.com.ua/eng/get-dominant-colors.php) has been used to pull the dominant colours out of my 'milestone-1-background' image to create a baseline for the website.
+ [HTML and CSS3 for dummies book](https://www.dummies.com/article/technology/programming-web-design/html5/html5-and-css3-all-in-one-for-dummies-cheat-sheet-207788/) has been used as a booster on the Code Institute lesson content to enhance my learning and add some extra tips and tricks in.
+ [Coding with JavaScript for dummies book](https://www.dummies.com/article/technology/programming-web-design/javascript/javascript-for-dummies-cheat-sheet-207619/) has been used in addition to the above book to enhance my learning of JavaScript.
+ [Flaticon]("https://www.flaticon.com/free-icons/punk") Has been used to generate some generic punk themed icons for my playing cards.
+ [W3 Schools](https://www.w3schools.com/js/js_popup.asp) Has been used to better understand the alerts used for the step by step instructions and congratulatory messages.

## Bug problems and solutions

These bugs were found as I was writing the code, not whilst testing, hence being at this point in the README file.

+ I have set the height and width of the card-game to 640px because the cards then show in the same ratio as an actual card game, however when I then added the navbar to the top of the page, the cards were dropping off the bottom of the page. I decided to leave it at 640px with a few flex adjustments to allow for the page to change with screen sizes using media queries.
+ Having set up the basic framework for the game and being happy with the initial functionality of it i found that when reducing screen size down to below 768px (tablet screen size) i was going down to only three cards per row. Initially i adjusted the media queries to reduce the overall size of the game but did not factor in the overall size of cards plus margins. I decided that the best way to resolve this was to continue on from the above error and use media queries to add to the flex characteristics of the page.

## Source for images and text

All images below have been compressed using iloveimg.com to help with load speed on the website.

+ [Punk Themed Image](assets/images/punk-match.jpeg) alt, A themed image of different punk items with a neon lit background.
+ [Punk Guitar](assets/images/punk-guitar.jpeg) alt, A punk designed guitar with a festival croud in the background.
+ [Patch Jacket](assets/images/patch-jacket.jpeg) alt, A denim jacket with patches and studs.
+ [Punk Bar](assets/images/punk-bar.jpeg) alt, A punk themed bar with a live band playing.
+ [Guitar Icon](assets/images/guitar-icon.png) alt, A simple electric guitar icon.
+ [Back of Card Logo](assets/images/card-back-punk.png) alt, A side on line icon of a person with a mohawk.
+ [Rock/Punk hand sign with mic](assets/images/rock-punk-icon.png) alt, A line icon of a hand doing the rock sign holding a mic.

## Deployment process

Running the project locally:
1. Ensure you have a GitHub account [Create one here](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).
2. Use Google Chrome as the best browser for this deployment.
3. Install VSCode to your computer or open the browser version [here](https://vscode.dev/).
4. Click the 'Open Remote Repository' button on the home page to clone and or edit as you wish.

To do the above you may need to follow these steps also:
1. Open the repository in GitHub [here]()
2. Under the name, click 'clone or download'.
3. Once in the clone section copy the HTTP clone URL for the repository.
4. In the local IDE of your choice, open the terminal.
5. Change the current working directory to wherever you want it to be made.
6. Type `git clone`, and then paste the URL you copied in step 3.

Deployment, step-by-step guide:
+ In GitHub, first, ensure all work is committed and pushed, then go to the settings tab on GitHub, then the Pages section on the left-hand navigation.
+ Once in the Pages section on GitHub change the branch drop down to 'Main' and then click the save option.
+ Now go back to the code section of GitHub and click the deployment link on the right-hand side. (You may need to refresh the page to see the deployment link)
+ Once on the deployment page on GitHub click on the provided link and it will open up the deployed project.

## Testing

### Testing through a linter:

I used JSLint to test my Javascript to ensure it passes through a linter.
+ 13 initial problems found when testing through JSLint on my .js file.
+ Problems one and two were because the line exceeded 80 characters. Unfortunately this is because there is a message for the user in them.
+ Problem two is because I have called two functions in the same let. This is to minimize the required code instead of repeating myself.
+ Problem four was a suggestion to put a function inside a function instead of using a arrow function. I have chosen to leave this as is otherwise it is more confusing to me having a function within a function.
+ Problem six is as a result of having a number of action within a single function. I have again chosen to leave this function as I had written it as this is easier to read and understand due to the complexity of the function itself.
+ Problem five and problem seven through to thirteen are the same as problems one and two, caused by over 80 characters per line. These are comments for my benefit and a note to the user so again must stay as they are.

### Testing as a user for navigation purposes:
+ The first manual test I completed was to open the site through the live preview within VSCode.
+ When loading up on a laptop, everything is in the right place, clear and not obstructed within the window. The first thing I noticed was the font for the 'Scores' title was not the same as the rest of the page. This was easily corrected by added the `h2` selector into my CSS file.
+ Next I clicked one card to confirm the flip function was working. Which it was, then onto clicking the second card. Conveniently the second card I picked was a match. This showed that the `match` function was working. This also showed that the incremental increase on the scores section was working because the score went up by one as I had found a match.
+ Next I clicked another two cards. This was no match and I can confirm it did not stay on the screen and the score did not increase so this proves that the function to return the cards to their original position in the case of a no match is working.
+ Next I clicked through each card to ensure the game completes when all cards are matched. Once all cards are matched the score hits six which is correct.
+ I next checked that the `Reset Game` button was working. Which it wasn't, i sussed out that the first issue with the button was that it didn't have a `href` attribute, therefore was not linking back to the page load. The second issue was that the `href` attribute just re confirms the page that we are already on. Finally i worked out that i had put it in a `button` tag when it needs to be in a `a` tag to be able to work.
+ Next I tested the nav bar to ensure it directed correctly, firstly I played the game for two matches then clicked the rest button on the nav bar. This confirmed that the game would fully reset when I clicked it. Then i checked that the help button on the nav bar took me to the `help.html` page. I confirmed this took me to the `help.html` page.
+ The next test was easy to determine as I was already on the `help.html` page. I checked that the `Let's Play!` button took me to the `index.html` page, which it did. Then I went back to the `help.html` page and noticed the `Help` button was not active on the page so added the `active` attribute to that nav link to make that work.
+ Whilst I was changing the `active` attribute, I noticed that the page title button didn't have a `href` attatched to it so therefore it wouldn't link back to the game page when clicked, so I added that in on both the `index.html` page and the `help.html` page. I checked both of these buttons now worked.
+ The final button to test was the `Let's Play` button on the `help.html` page. I confirmed this was working.

### Testing with validators:

HTML validator for index.html:
+ 24 trailing slashes found and corrected.
+ Warning found for line 57 relating to <section> missing a heading, suggested to change to a <div> if no heading required which it isn't in this case as it is just to keep the button in the centre of the page. Chosen to keep it as a <section> as there is no need for a header but it gives me better versatility this way.

HTML validator for help.html:
+ 9 trailing slashes found and corrected.

CSS validator for style.css:
+ No errors found.

+ For all bugs I encountered whilst writing my initial code please refer to the 'bugs section' further up this page.