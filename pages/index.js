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
        <h3>{"Rank your 5 favorite, and 5 least favorite, activities from this "}<a href="
       https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6" target="_blank">{"list"}</a></h3>
          <p>{"These are the five activities from the provided list that I anticipate would become my favorites:"}</p>
          <ol>
            <li>{"Spot trends across many cases to improve Netlify's product and service"}</li>
            <li>{"Respond to 50+ support requests via email or chat most days"}</li>
            <li>{"Dig through server logs to troubleshoot a customer's website behavior"}</li>
            <li>{"Work with the development team to help design a new feature based on feedback from customers"}</li>
            <li>{"Suggest and champion improvements to the Support team's workflow to your colleagues in and out of Support"}</li>
          </ol>
          <p>{"I don't think I would strongly dislike any of the listed activities, but if I have to choose:"}</p>
          <ol>
            <li>{"Create video tutorials to help teach users a specific feature or use case"}</li>
            <li>{"Engage multiple users at once via chat to answer their questions and troubleshoot problems"}</li>
            <li>{"Respond to Netlify customers on Twitter"}</li>
            <li>{"Deliver a talk to many people you don't know at a conference or meetup"}</li>
            <li>{"Help manage communications during a service outage"}</li>
          </ol>
        <h3>{"What is your favorite thing about providing technical support?"}</h3>
          <p>{"There are many things that draw me to support engineering. I get to do fun things like work with web technology and help people. Also, I get a lot of enjoyment out of playing detective via the process of troubleshooting issues and debugging code. It is just so satisfying to figure things out. But I think my #1 favorite thing and my #1 favorite activity from the list above would be spotting trends across many cases. This is because it is not enough to just solve an issue and move on. You need to be aware of how things are connected. You need to pay attention and notice when the same issue arises repeatedly. I love picking up on things like that and seeing if this could lead to some sort of product or service improvement or head off some impending larger issue. In my experience, being observant has really paid off."}</p>
        <h3>{"What did you think of our service during the time you used it?  Provide either some constructive criticism or some points that impressed you."}</h3>
          <p>{"This is not my first time deploying with Netlify but it is my first time using a static site generator. I did not think the process could be any faster or easier but apparently, it can. Being able to deploy to Netlify directly from your choice on StaticGen is crazy convenient. I don't think you can beat a simple, clean, three-step process. As a developer, this is super impressive and really makes Netlify stand out."}</p>
        <h3>{"Talk about how you made your site and why you chose the tools you did.  Briefly explain a challenge you experienced in setting up this site and how you solved it."}</h3>
          <p>{"I chose the Gatsby site generator because it has the most stars from GitHub for a tool that works with JavaScript (my main programming language), AND it has the button to deploy to Netlify. More than anything I really wanted to try that button."}</p>
          <p>{"I did experience a few challenges. First, I forgot to run npm install. Oops. Then I got a deploy error on the 'gatsby develop' command. Googling led me to a suggestion to try ''./node_modules/.bin/gatsby develop' instead and that worked. Of course, it ended up being a versioning error - I am working with a 0.x version of gatsby."}</p>
        <h3>{"Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done."}</h3>
          <h4><a href="https://devcenter.heroku.com/" target="_blank">Heroku</a></h4>
          <p>{"I know, I know. Heroku is a competitor of sorts. But it is one of the first developer tools I used so I appreciated its clean look and good documentation. First, the Dev Center main page has a simple design that makes the page easily readable. Logos, short lists, lots of white space, and just one main color combine to make it very clear what the user is to do here"}.</p>
	        <p>{"The language of the website is easily digestible for newbies while managing to give useful technical information and instruction. It includes a tutorial which is always appreciated when you are new. I have to say I never consulted the documentation during set up because the tutorial is so thorough that I never lost my way. I only consulted it to learn more about the product and how it interacted with Travis CI and Git. I started with the high-level and aptly-named “How Heroku Works” section."}</p>
	        <p>{"The overall vibe I get from this website is a sense of calm. The message is Don’t panic, we will make this super easy for you."}</p>
        <h3>{"Why do you think SSL/HTTPS is important"}</h3>
          <p>{"For the sake of security, all websites should use HTTPS with an SSL certificate. Even my one-page portfolio site with no sensitive information does."}</p>
          <p>{"According to the Netlify documentation, there are five advantages to using HTTPS:"}</p>
          <ol>
            <li>{"HTTP/2: Boost your site's performance — HTTP/2 only works when HTTPS is enabled"}</li>
            <li>{"SEO: Google awards sites that works with HTTPS enabled"}</li>
            <li>{"Analytics: If your visitors come from HTTPS-enabled sites, you only get referrers if you support HTTPS as well"}</li>
            <li>{"Content Integrity: Without SSL, free Wi-fi services can inject ads into your pages"}</li>
            <li>{"Security: If you have a login on a Single Page App or accept form submissions, HTTPS is essential for your users’ security and privacy"}</li>
          </ol>
          <p>{"(FYI there are a few minor grammatical errors on this page in the documentation)"}</p>
          <p>{"In addition, Google states that HTTPS is a requirement for many cutting-edge features and an enabling technology for app-like capabilities such as service worker. "}
          <a href="https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https" target="_blank">(Source)</a>
          </p>
        <h3>{"Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users"}</h3>
          <p>{"I set up DNS for my portfolio website and the major challenge was… everything. I was lost from the beginning. I don't have DNS experience, and less-technical end-users certainly do not. I assumed my domain provider would provide easy follow along steps. They certainly did when it came to purchasing the domain. But the instructions were awful, especially for someone doing this for the first time. There are lots of steps, but no logical step-by-step is provided."}</p>
          <p>{"The main challenges are that the process is too convoluted and that the language is too technical. The end user needs step-by-step instructions that are easy to understand to do the configuration on their own."}</p>
        <h3>{"A customer writes in saying their “site won’t build”"}</h3>
          <p>{"Hi there!"}</p>
          <p>{"My name is Laura and I would be happy to assist you with this issue. The first step is to make sure you are able to build your site locally in your own development environment. If you used a site generator, links to the documentation for many site generators can be found "}
          <a href="https://www.staticgen.com/" target="_blank">{"here."}</a> {"Once you confirm your site builds locally, the next thing to check is package versions. This is the leading cause of build failure. Make sure the package versions we are using to build matches yours. You can find this info in the"} <a href="https://www.netlify.com/docs/build-settings/" target="_blank">{"Build Settings"}</a> {"doc. For further reading on build errors, check out"} <a href="https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/" target="_blank">{"this"}</a> {" blog post on how our build bots build your site and"} <a href="https://www.netlify.com/docs/build-gotchas/#case-sensitivity" target="_blank">{"this"}</a> {" doc on other common issues."}</p>
          <p>{"I hope this information is helpful. If the issue persists you can send me the deploy error log so I can investigate what exactly is going on. These can be found on the Overview tab for your site, under 'Production deploys'. Also, let me know the name of your site generator if you used one."}</p>
          <p>{"Thanks!"}</p>
        <h3>{"Can you set up a redirect from “/netlify/anything” to https://www.google.com/search?q=anything ?"}</h3>
          <p>{"To set up a redirect, just add a '_redirects' file to the root of your published site. The line in the redirect file should look like this: /netlify/*  https://www.google.com/search?:splat. Make sure both the 'from' and the 'to' are on the same line with space between."}</p>
      </div>
    )
  }
}
