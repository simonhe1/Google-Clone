Project made by Simon He with reference to [Clever Programmer](https://www.youtube.com/watch?v=DAWWf7q8sqM&t=444s&ab_channel=CleverProgrammer "Google clone link")

Versions:

- Node: v12.18.1
- Npm: 6.12.1

This application is hosted live on https://clone-90f6b.web.app/

To make your own application, you have to set up your own firebase and have packages installed.

To do this:

1. If you haven't done so, you'll need to install Node.js. You can do so by going to [the node.js website](https://nodejs.org/en/ "Node js website")
2. Npm comes packaged with node but additional packages you will need to install are
   1. FRONTEND
      - firebase
      - react-router-dom
      - material-ui/core
      - material-ui/icons
3. To set up firebase, go to the [firebase website](https://firebase.google.com/)
   1. If you haven't done so, make an account
   2. Create a new project and name it (Make sure you tick firebase hosting)
   3. Click next until you're taken to the console
   4. Go to the burger menu and navigate to project settings and click on that
   5. Scroll down until you see Firebase SDK snippet and click on config
   6. Copy that information into a backend file where you're working with the database
4. To take to production mode
   1. Run firebase init
   2. Select hosting
   3. Use an existing project
   4. Select this project
   5. Write "build" as your public directory
   6. Say yes to the single-page app(SPA) option
   7. Whenever you make changes or is ready to be brought to production, run npm run build
   8. Run firebase deploy to deploy your project to production mode
