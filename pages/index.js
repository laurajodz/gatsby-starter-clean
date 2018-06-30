import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Laura Jodz
        </h1>
        <h2>
          Support Engineer Application for Netlify
        </h2>
        <h2>{"Rank your 5 favorite, and 5 least favorite, activities from this "}<a href="
       https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6" target="_blank">{"list"}</a>:</h2>
        <h3>{"These are the five activities from the provided list that I anticipate would become my favorites:"}</h3>
          <p>{"1. Spot trends across many cases to improve Netlify's product and service"}</p>
          <p>{"2. Respond to 50+ support requests via email or chat most days"}</p>
          <p>{"3. Dig through server logs to troubleshoot a customer's website behavior"}</p>
          <p>{"4. Work with the development team to help design a new feature based on feedback from customers"}</p>
          <p>{"5. Suggest and champion improvements to the Support team's workflow to your colleagues in and out of Support"}</p>
        <h3>{"I don't think I would strongly dislike any of the listed activities, but if I have to choose:"}</h3>
          <p>{"1. Create video tutorials to help teach users a specific feature or use case"}</p>
          <p>{"2. Engage multiple users at once via chat to answer their questions and troubleshoot problems"}</p>
          <p>{"3. Respond to Netlify customers on Twitter"}</p>
          <p>{"4. Deliver a talk to many people you don't know at a conference or meetup"}</p>
          <p>{"5. Help manage communications during a service outage"}</p>
        <h2>{"What is your favorite thing about providing technical support?"}</h2>
          <p>{"There are many things that draw me to support engineering. I get to both work with web technology and help people. Also, I get a lot of enjoyment out of playing detective via the process of troubleshooting issues and debugging code. It is just so satisfying to figure things out. But I think my #1 favorite thing and my #1 favorite activity from the list above is spotting trends across many cases. This is because it is not enough to just solve problems in a vacuum. You need to be aware of how things are connected. You need to pay attention and notice when the same issue arises repeatedly. I love picking up on things like that and seeing if this could lead to some sort of product or service improvement and therefore, a better experience for the customer."}</p>
        <h2>{"What did you think of our service during the time you used it?  Provide either some constructive criticism or some points that impressed you."}</h2>
          <p>{"This is not my first time deploying with Netlify but it is my first time using a static site generator. I did not think the process could be any faster or easier but apparently it can. Being able to deploy to Netlify directly from your choice on StaticGen is crazy convenient. I don't think you can beat a simple, clean, three-step process. As a developer, this is super impressive and really makes Netlify stand out."}</p>
        <h2>{"Talk about how you made your site and why you chose the tools you did.  Briefly explain a challenge you experienced in setting up this site and how you solved it."}</h2>
          <p>{"I chose the Gatsby site generator because it has the most stars from GitHub for a tool that works with JavaScript (my main programming language), AND it has the button to deploy to Netlify. More than anything I really wanted to try that button."}</p>
          <p>{"I did experience a few challenges. First, I forgot to run npm install. Then I got a deploy error on the 'gatsby develop' command. Googling led me to a suggestion to try ''./node_modules/.bin/gatsby develop' instead and that worked. Of course it ended up being a versioning error - I am working with a 0.x version of gatsby."}</p>
        <h2>{"Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done."}</h2>
          <h3><a href="https://devcenter.heroku.com/" target="_blank">Heroku</a></h3>
          <p>{"I know, I know. Heroku is a competitor of sorts. But it is one of the first developer tools I used so I appreciated its clean look and good documentation. First, the Dev Center main page has a simple design that makes the page easily readable. Logos, short lists, lots of white space, and just one main color combine to make it very clear what the user is to do here"}.</p>
	        <p>{"The language of the website is easily digestible for newbies while managing to give useful technical information and instruction. It includes a tutorial which is always appreciated when you are new. I have to say I never consulted the documentation during set up because the tutorial is so thorough that I never lost my way. I only consulted it to learn more about the product and how it interacted with Travis CI and Git. I started with the high-level and aptly-named “How Heroku Works” section."}</p>
	        <p>{"The overall vibe I get from this website is a sense of calm. The message is Don’t panic, we will make this super easy for you."}</p>

      </div>
    )
  }
}
