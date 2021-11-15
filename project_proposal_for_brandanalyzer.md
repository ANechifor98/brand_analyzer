# School of Computing
CA326 Year 3 Project Proposal Form

**SECTION A**

Project Title \_\_\_\_\_\_\_\_Brand Analyzer App\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Student 1 Name \_\_\_\_Wiktoria Natanek\_\_\_\_\_\_\_\_\_\_\_\_     ID Number \_16428122\_\_

Student 2 Name \_\_\_\_Andrew Nechifor\_\_\_\_\_\_\_\_\_\_\_\_     ID Number \_16415432\_\_

Staff Member Consulted \_\_\_Gareth Jones\_\_\_\_\_\_\_

Project Description (1-2 pages):

1. Description

Our third year project involves developing a mobile app that allows users to input a brand or a business&#39; name. Then the app gathers social media posts from Facebook that have opinions on the brand or the business within a certain timeframe and analyzes the sentiment of all those posts. After that, our app returns a collection of data pulled from these posts, for example: the top five recurring positive and negative themes from the posts, the effect the posts had in terms of the brand&#39;s or business&#39; popularity or on their  stocks and the general consensus of a product that was released by a brand or business. When performing the sentiment analysis on the corpus of posts, our app will tokenize the text from a post by splitting up all the words from the post into a list. Then we simplify the list by removing any of the stop words (e.g &quot;he&quot;, &quot;she&quot;, &quot;the&quot;, &quot;and&quot;, etc) that would have no effect on the overall sentiment analysis. After that, we analyse the words from the post using a linguistic classifier (e.g Linear Regression, Naive Bayes Theorem, etc). Finally, our app will  be evaluating the data from the classification and return the results to the user. The app will be relatively easy to use, all that the user has to do is type the name of the brand they wish to know about. After that we will be making use of a navbar to display the relevant information into its categories.

2. Division of Work collab

App Development (Interface, User Flow control, Accessibility etc.) - Wiktoria will be leading the design and layout of our app, while both of us will work together on coding and implementing the app via Flutter.dev

Facebook Graph API Utilization to acquire posts - Andrew will be in charge of acquiring the Facebook posts but both of us will cooperate in making sure that the app integrates properly with the Facebook Graph API.

Sentiment Analysis (Tokenization, Simplification, Classification, Evaluation) - Andrew will be directing the majority of the sentiment but both of us will collaborate in the building of the Classification and Evaluation of the Sentiment Analysis.

Displaying the user search results (Google Trend Graphs, Charts etc.) - Wiktoria will be overseeing the returning of the data and the results requested by the user of our app. This includes the integration, structuring and presentation of the information acquired by our app.

Integrating Additional Features - At the end of our project, if we are ahead of our development schedule and we are able to add any additional features can be added to the project, both of us will be managing what these additional features could be and their implementation. These additional features could involve comparing two or more brands / businesses side by side, trying to predict if the overall opinion of the brand / business will be more positive or more negative in the future or having the user specify what timeframe they would want the posts to be from.

Testing - The person leading the task that they were assigned to will be building the majority of the test cases for that task. For example, Andrew will be crafting the tests for the Facebook Graph API calls and the Tokenization involved in the Sentiment Analysis while Wiktoria would test how the user search results are displayed and how functional the app is.

3. Programming Languages

Dart, Python, Facebook Graph (HTTP based)

4. Programming Tools

Flutter.dev, Github, DCU&#39;s Gitlab, NLP, TextBlob, Sci-Kit Learn

5. Learning Challenges

We will have to learn how to use Flutter.dev and the Dart programming language in order to create our mobile app. As well as that, we will have to understand how to use the Facebook Graph API in order to retrieve the social media posts required. We will also have to learn how to perform sentiment analysis on a corpus of text. Any additional features added at the end of our project may prove to be a learning challenge for us as well.

6. Hardware / Software platform

PC, Linux, Windows, DCU&#39;s Gitlab

7. Special Hardware / Software requirements

None
