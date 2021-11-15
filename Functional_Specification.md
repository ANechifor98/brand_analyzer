Page Content                                                                                              Page Number
 
1\. Introduction

1.1
Overview\..........................................................................................................1

1.2 Business Context...........................................................................................1

1.3
Glossary............................................................................................................2

2\. General Description

2.1 Product / System Functions.....................................................................2

2.2 User Characteristics and Objectives......................................................3

2.3 Operational Scenarios................................................................................3

2.4
Constraints......................................................................................................5

3\. Functional Requirements

3.1.1 Analysing A Brand.....................................................................................5

3.1.2 Acquiring Online Posts For Brand Analysis.....................................6

3.1.3 Select Time Range....................................................................................6

3.1.4 Performing Sentiment Analysis On Posts\........................................6

3.1.5 Sending Results Of System To User...................................................7

3.1.6 Sending Aspect Focused Results To User........................................8

3.1.7 Categorising Results With Navbar......................................................8

3.1.8 Fast Performance.......................................................................................9

3.1.9 App Must Handle High Traffic Loads.................................................9

4\. System Architecture

System Architecture Diagram.......................................................................10

5\. High-Level Design Diagrams, DFD, LDS

Business Activity Model...................................................................................12

Context Diagram.................................................................................................13

Data Flow Diagram.............................................................................................13

Logical Data Structure.......................................................................................14

6\. Preliminary Schedule

Gantt Charts...........................................................................................................15

7\. Appendices

Appendices.............................................................................................................16

<h2>1. Introduction</h2>

**1.1 Overview**

The app to be developed by the team will be called the "Brand Analyser".
At the moment, there is no dedicated online service that provides the
specific data and information about a brand or a business that this
application would be giving. There are different websites and services
available that offer data on brands like public opinion on the brand,
stocks, online search results and more but none of them have all of the
information in one location.

The Brand Analyser app seeks to provide an accessible way for users to
instantly find out the public opinion of a popular brand or business
that the user submits. This will be done by performing a detailed
analysis on a collection of social media posts that the app will fetch
from Facebook. The user will be allowed to easily see the general public
consensus, the online popularity, stocks and trends of any brand or
business all within the app.

This app will exclusively operate on mobile phones, for both iOS and
Android devices. For the team, the user receiving the most recent and
highly accurate data about a brand or business will be the main goal. An
intuitive, user-friendly interface that any of the application's users
can easily navigate in order to achieve the main goal will be also be
vitally important for the app to function.

**1.2 Business Context**

Within any business setting, the application can function as a way of
analysing the public sentiment of other brands or businesses in the
market and acquiring significant data on rivaling companies. The app
will be able to deliver useful information like stock trends, online
search result trends and public opinions with just a couple quick taps.
Usually gathering data like this would take much more time and energy
but our app would remove this process entirely.

As well as that, the app can perform an analysis on the business itself
to view how well it is performing and also compare itself to other
businesses on the market. Being able to carry out a task like this
instantaneously at any point in time desired is very useful in a
business context. The volatile and fast-paced nature of markets and
businesses require quick responses and action from companies. An
application like this will be a boon to any business organization.

**1.3 Glossary**

-   API - Application Programming Interface. It allows for data access
    to a desired system.

-   UI - User Interface. This is the means by which the user and the app
    interact. It allows the user to input the brand and receive / view
    the data about a brand.

-   Frontend - The part of the app with which the user interacts
    directly.

-   Backend - The part of the app that is not directly accessed by the
    user. This will be responsible for receiving, storing and
    manipulating data. The results of which will be sent back to the
    frontend.

-   GDPR - This is a set of laws that sets guidelines for the collection
    and processing of personal information from people who live within
    the European Union.

-   Sentiment Analysis - This is the process of identifying and
    extracting information that relates to the emotion within a text.

-   Firebase Cloud Functions - This is a platform where the backend of
    an application can be stored.

-   Facebook Graph API - This is a low-level API that apps can use to
    programmatically call for data like online posts and comments from
    the Facebook website.

-   Google Trends - This is a website that analyzes the popularity of
    top search queries from Google Search.

-   Scikit-Learn Machine - This is a software machine learning library
    for the Python programming language. Contains built-in features
    that can help with performing sentiment analysis.

-   Machine Learning: Machine learning is a type of artificial
    intelligence that gives a system the ability to learn and improve
    the task which the system is designed to do.

-   Flutter - An app development SDK. This allows us to easily create
    and maintain the application.

-   SDK - Software development kit.

-   Client-Server Model - This describes how a server provides resources
    and services to one or more users.

<h2>2. General Description</h2>

**2.1 Product/System Functions**

**App Usability Functions**

-   User can input a popular brand name.

-   User can then click analyse and be presented with a set of analysed
    data.

-   This analysed data is categorised under appropriately named
    headings.

-   If the app cannot accept an input brand name (due to not enough data
    that it can be analysed against, the company may not be
    english-speaking etc.) it must let the user know.

-   The user is able to navigate headings by simply clicking on each
    heading, depending on which set of data they wish to view.

-   The user should be able to comprehend the presented data and that
    data should be clear and concise and **not** open to
    interpretation.

-   The user is able to select a time frame which displays the analysed
    data in correlation to this timeframe.

-   The user is able to use scrolling should they wish to not use the
    headings as a navigability option.

-   All navigability functions of the app should be fast and seamless.

**2.2 User Characteristics and Objectives**

In general, anyone with access to a mobile device should be easily able
to access and use the app. In terms of the UI there are various elements
that are to be considered. The opening screen should not be daunting to
the user. That is, keeping it clear and straight to the point is the
main motivation. The navigation bar will be ranked from sub-headings
that contain the more comprehensible information all the way down to
ones with more intricate information. This corresponds to the users who
wish to find more basic data, have access to it from the get-go without
having to put in extra work whereas those who wish to dig deeper will
simply navigate further.

The common user may have accessibility issues. The design of the UI is
dependent on satisfying these. It should provide an appropriate colour
palette, contrasts and a screenwriter should be compatible with the app
also.

**2.3 Operational Scenarios**

**2.3.1 Searching A Brand Name:**

  **Scenario \#1**|**User Objective**: Search a brand and see the results
  ----------------|--------------------------------------------------------------------
  
  **Source**|**Step**|**Action**
   ---------|--------|-------------------
  User|1|Open app
  program|2|Display start screen
  User|3|Type brand name in search bar
   ||4|Click Start Analysing
  Program|5|Display loading icon
   ||6|Display results when ready
  User|7|View results

**2.3.2 Select Time Range**

  **Scenario \#2**|**User Objective**: View results within chosen time
  ----------------|-----------------------------------------------------------------
  
  **Source**|**Step**|**Action**
  ----------|--------|--------------
  User|1|Select dropdown menu \#1
  Program|2|Display date \#1
  User|3|Select date \#1
  ||4|Select dropdown menu \#2
  Program|5|Display date \#2
  User|6|Select date \#2
  ||7|Click Start Analyse
  Program|8|Display loading icon
  ||9|Display results when ready
  User|10|View results now within selected dates

**2.3.3 Select Navbar Sub-Heading**

**Scenario \#3**|**User Objective**: Select sub-heading from navbar 
----------------|-----------------------------------------------------------------
||**Precondition:** A search must be performed


**Source**|**Step**|**Action** 
----------|--------|--------------
User|1|Click on sub-heading e.g. General    
program|2| Highlight sub-heading that was clicked
||3|Switch from previous sub-heading to current
||4|Now show selected sub-heading's results
User|5|View and scroll through results


**2.4 Constraints**

-   Compatibility - The app will be developed to be compatible with both
    Android and iOS devices which will require additional development
    and testing effort.

-   Cost - The Firebase Cloud Functions Spark Plan is the only way to
    use that system for free so there is a limit on the processes and
    services that can be used.

<h2>3. Functional Requirements</h2>

**3.1.1 Analysing A Brand**

**Description** - Upon opening the app for the first time, the user is
presented with a feature to enter the name of the brand that they want
to see the results of the sentiment analysis on. The user then clicks
"Start Analysing" to get the full effect of the analysis and to retrieve
the results.

**Criticality** - This is the most fundamental and important feature of
the app. Should this feature not work, the function of the app would be
more or less futile. That is, the user would not be able to use the app
beyond its starting screen.

**Technical issues** - The app has to be able to make calls to the
Firebase Cloud Functions in order to link with the Facebook Graph API as
this will be used to fetch data to perform sentiment analysis on and
then deliver the results to display to the user. If one of these
elements are not functional, then the entire app will not work.

**Dependencies with other requirements** - The application (the
frontend) and the numerous systems that perform the brand analysis (the
backend) must be able to work together in tandem. If not implemented
correctly, the app will not function at all.



**3.1.2 Acquiring Online Posts For Brand Analysis**

**Description -** When the system calls for an analysis to be performed
on the brand, hundreds of social media posts need to be collected in
order to perform an accurate sentiment analysis on a brand.

**Criticality -** Without acquiring these posts, the system and app will
not function at all. Acquiring these online posts is crucial for this
app to work.

**Technical Issues -** The mobile device requires internet access
otherwise gathering the online posts will be impossible. The Facebook
Graph API requires an internet connection to function and make the fetch
calls required.

**Dependencies with other requirements -** The user must allow internet
access to the application. A call has to be made for the online posts in
order to analyse the brand (See FR 3.1.1).



**3.1.3 Select Time Range**

**Description** - This feature allows the user to select two specific
points in time between which the analysis is performed on the brand. All
analysis is performed within this timeframe and the results are sent
back to the app and displayed to the user.

**Criticality** - This may be seen as an extension of the Analyse Brand
function. This feature would be useful for users who wish to gain more
insight about their chosen brand and hence see it fit to implement. The
criticality would be low.

**Technical issues** - The user may input a timeframe which will gather
a count of social media posts that may be insufficient to perform
accurate sentiment analysis on. The app may have to include a limit on
the specific timeframe that the user can choose. Another option is to
inform the user that the timeframe they chose was insufficient and to
try again, which could frustrate the user. Hence, the former option is
more satisfiable.

**Dependencies with other requirements** - The Facebook Graph API must
be able to fetch social media posts (See FR 3.1.2).



**3.1.4 Performing Sentiment Analysis On Posts**

**Description** - The programs that run the analysis on the opinionated
social media posts must be efficient, accurate and as correct as
possibly can be within a reasonable margin of error (+5%/-5%).

**Criticality** - This is a very critical part of the project and as
such, it is arguably one of the most important functions within the
entire application itself. The project would not be functional if the
data gathered was inaccurate.

**Technical issues** - The system that performs the sentiment analysis
on the posts will require the posts to be in English language only. As
well as that, it must take into account the nuances that affect the
sentiment of a sentence within the English language for example:
negation, sarcasm, double negation etcetera

**Dependencies with other requirements** - The app must be able to fetch
social media posts for the sentiment analysis to be performed (See FR
3.1.2).



**3.1.5 Sending Results Of System To User**

**Description -** The user should be able to see the general results of
the analysis when they select this option. This sums up the overall
positive and negative percentage of the social media posts of a brand.

**Criticality -** One of the main aspects of the app. Many users may be
interested in this option the most, mainly because it gives a broad
overview of a brand.

**Technical issues -** The system architecture must be well designed in
order for the app (the frontend of the project) to acquire what the
results of the sentiment analysis was (which is performed in the backend
of the project).

**Dependencies with other requirements -** The system must be able to
perform sentiment analysis in order for the results to be sent to the
user (See FR 3.1.4).



**3.1.6 Sending Aspect Focused Results To User**

**Description -** The user should be able to see the aspect focused
results of the analysis when they select this option. This displays a
set number of the most commonly recurring opinions of the brand. These
opinions are broken down and summarised on this particular results
section.

**Criticality -** Not as important as the general analysis, but it is
useful for more curious users.

**Technical issues -** The system architecture must be well designed in
order for the app (the frontend of the project) to acquire what the
results of the sentiment analysis was (which is performed in the backend
of the project).

**Dependencies with other requirements -** The system must be able to
perform sentiment analysis in order for the results to be sent to the
user (See FR 3.1.4).

**3.1.7 Categorising Results with Navbar**

**Description -** The user clicks Start Analysis. They are taken to a
loading screen and once the analysis is complete, the results of the
analysis are displayed with the use of a navbar. This navbar contains
the sub-headings which categorise different types of the analysed
results. The results should be displayed for as long as the user does
not wish to enter a new brand to analyse.

**Criticality -** One of the main aspects of the app. The user has to
know what the results mean, hence it is vital to display them
appropriately so that they can access and understand them.

**Technical issues -** Flutter allows for cross-platform development
between iOS and Android although issues could arise between formatting
the results and navbar on both devices. Should the appropriate links not
be established, navigation may become a challenge. For example, clicking
Heading 1 the user should be able to see the matching results. The user
should then click Heading 2, Heading 3, Heading 4..etc. without the app
producing any side effects.

**Dependencies with other requirements -** The app must be able to send
the user the results acquired (See 3.1.5).


**3.1.8 Fast Performance**

**Description -** When the user taps Start Analysis, they must wait
through a loading screen in order to receive the data from the brand
they submitted. To ensure a streamlined process and an optimal user
experience, they should receive the information they asked for within a
short timeframe.

**Criticality -** The app would still be functional if the performance
was slower, but an efficient and comfortable user experience is very
important when using any app.

**Technical Issues -** If the phone's internet connection is too slow,
or the system that performs the sentiment analysis is not efficient
enough, then this will affect the speed of the brand analysis.

**Dependencies with other requirements -** The ability to perform an
analysis of a brand (See FR 3.1.1).



**3.1.9 App Must Handle High Traffic Loads**

**Description -** If there are multiple users using the app, the
application must be able to handle the numerous calls and requests that
would be made.

**Criticality -** The app would still be functional if we only allowed
one person to access the app at a given time, but this is not the
intended purpose for the app. A numerous amount of people should be able
to utilise the app simultaneously.

**Technical Issues -** If the server cannot handle the load that two or
more simultaneous users of the app may bring, then the app will be
forced to only allow one person at a time to use it.

**Dependencies with other requirements -** The functionality and
efficiency of the brand analysis will factor how much of the load must
be handled (See FR 3.1.1).



<h2>4. System Architecture</h2>

**4.1 General System Architecture of the Project**

![](https://raw.githubusercontent.com/ANechifor98/Images-for-Assignments/master/Architecture.jpg)

**Mobile App**

The app will be designed and developed in Flutter. This tool is becoming
increasingly popular and for good reasons. Everything in Flutter is a
widget, all the way down to the UI, which means the app is basically
composed of "child " widgets.

**Firebase Cloud Functions**

Backend of the app. This is a serverless architecture model. This means
that there is no need to worry about provisioning servers. This will
allow for high-scalability and high-availability.

**Facebook Graph API**

Main tool that will provide the capability to retrieve users' facebook
posts. Data such as comments, page information etc.

**Google Trends**

Gathers analytical data on a particular brand or business.

**Testing Widgets**

Widgets are the basic building-blocks in Flutter. The entire app and UI design is composed of these. The widgets will have to be tested appropriately to ensure that they work and perform the way that they are expected to. A widget test is performed first to ensure a widget works in conjunction with user scenarios. During integration testing, then the entirety of the app is tested, ensuring all widgets perform correctly together without any side effects. 

**Tesing the Brand Analysis System**

Any testing performed on the sentiment analysis system will be performed using the pytest framework. Unit testing like this will assist us in debugging the code during every iteration in the development of the code. 

<h2>5. High-Level Design Diagrams</h2>

**Business Activity Model**

![](https://raw.githubusercontent.com/wiktoria-n/Images/master/Business%20Activity%20Model%20(2).jpg?token=ANMPNR32URRRRIGUWJJQ3LS55IVSM)

**Context Diagram**

![](https://raw.githubusercontent.com/ANechifor98/Images-for-Assignments/master/context_diagram.jpg)

**Data Flow Diagram**

![](https://raw.githubusercontent.com/ANechifor98/Images-for-Assignments/master/Data%20Flow%20Diagram.jpg)

**Logical Data Structure**

![](https://raw.githubusercontent.com/wiktoria-n/Images/master/Untitled%20Diagram.jpg?token=ANMPNR26XTJGUXHT7QML7GS55IVYO)

**6.1 Preliminary Schedule**

![preliminary schedule](https://raw.githubusercontent.com/ANechifor98/Images-for-Assignments/master/Capture.PNG)

<h2>7. Appendices</h2>

Diagramming tool:
https://www.draw.io/

Gantt Chart tool:
https://www.google.com/sheets

Facebook Graph API:
https://developers.facebook.com/docs/graph-api/

Google Trends:
https://trends.google.com/trends

Firebase Cloud Functions:
https://firebase.google.com/docs/functions

Scikit-Learn Machine:
https://scikit-learn.org/stable/

Flutter: https://flutter.dev/
