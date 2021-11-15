var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const path = require('path');
const os = require('os');
var assert = require('assert');
//var result = sentiment.analyze("Terrible. I sat on my bed breaking down for about an hour.");
//console.dir(result);

// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs');

describe("Sentiment Analysis Test Suite", function(){
        //works locally due to local filepath
    it("Test-1 - Correct analysis result?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }
        // assertions
    assert(sentiment_count > 0); // 'Checking that the result is positive as it should be.'

    });

    it("Test-2 - Correct positive words acquired?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        //console.log(sentiment.analyze(array[i]).positive);
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }

        // assertions
    assert.deepStrictEqual(positive_words,  ['hope',
  'best',
  'smiling',
  'great',
  'laughed',
  'good',
  'good',
  'highlight',
  'memorable',
  'nice',
  'help',
  'awesome',
  'thanks',
  'super',
  'awesome'] ); //'Checking that results are as they should be.'   

    });

    it("Test-3 - Correct number of positive words acquired?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        //console.log(sentiment.analyze(array[i]).positive);
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }

        // assertions
    assert.equal(positive_words.length, 15); // 'Checking the number of results are as they should be.'

    });

    it("Test-4 - Correct most reoccuring term acquired?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var counts = {};
    var most_common_word_count = 0;
    var mostFrequent;
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        //console.log(sentiment.analyze(array[i]).positive);
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }

            //aspect focused sentiment
    for (i in positive_words) {
        item = positive_words[i];
        if (counts[item] === undefined) { //if count[item] dont exist in the counts
                counts[item] = 1;
        }
        else {
                counts[item] = counts[item] + 1; //if it does exist, increment count
        }

        if (counts[item] > most_common_word_count) { //a more common item occured? save it
                most_common_word_count = counts[item];
                mostFrequent = positive_words[i];
        } 
    }
        // assertions
    assert.equal(mostFrequent, 'good');//'Checking that the most common term is "good"'   

    });

   it("Test-5 - Correct number of occurences for most common term?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var counts = {};
    var most_common_word_count = 0;
    var mostFrequent;
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        //console.log(sentiment.analyze(array[i]).positive);
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }

            //aspect focused sentiment
    for (i in positive_words) {
        item = positive_words[i];
        if (counts[item] === undefined) { //if count[item] dont exist in the counts
                counts[item] = 1;
        }
        else {
                counts[item] = counts[item] + 1; //if it does exist, increment count
        }

        if (counts[item] > most_common_word_count) { //a more common item occured? save it
                most_common_word_count = counts[item];
                mostFrequent = positive_words[i];
        } 
    }
    entries = Object.entries(counts); //convert the counts object into a list
    sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
        // assertions
    assert.equal(most_common_word_count, 2);//'Checking that the most common term "good" appears two times.'  

    });

      it("Test-6 - Correct second most common term acquired?", function(){

    var sentiment_count = 0;
    var positive_words = [];
    var counts = {};
    var most_common_word_count = 0;
    var mostFrequent;
    var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
    for(i in array) {
        //console.log(sentiment.analyze(array[i]));
        sentiment_count = sentiment_count + sentiment.analyze(array[i]).score;
        //console.log(sentiment.analyze(array[i]).positive);
        positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
    }

            //aspect focused sentiment
    for (i in positive_words) {
        item = positive_words[i];
        if (counts[item] === undefined) { //if count[item] dont exist in the counts
                counts[item] = 1;
        }
        else {
                counts[item] = counts[item] + 1; //if it does exist, increment count
        }

        if (counts[item] > most_common_word_count) { //a more common item occured? save it
                most_common_word_count = counts[item];
                mostFrequent = positive_words[i];
        } 
    }
    entries = Object.entries(counts); //convert the counts object into a list
    sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
        // assertions
    assert.equal(sorted[1][0], 'awesome');//'Checking that the second most common theme "awesome" appears.'  

    });

    it("Test 7 - Correct most positive words chosen?", function(){

        var sentiment_count = 0;
        var positive_count = 0;
        var negative_count = 0;
        var negative_words = [];
        var positive_words = [];
        var counts = {};
        var most_common_word_count = 0;
        var mostFrequent;
        var most_positive_words = [];
        var most_negative_words = [];
        var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
        var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
        var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
        for(i in array) {    
            sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
            positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
            negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
            //console.log(sentiment.analyze(array[i]).negative);
            //console.log(sentiment.analyze(array[i]).negative);
            var word_array = (sentiment.analyze(array[i]).calculation);
            var tokens = (sentiment.analyze(array[i]).words);
            for (var i in word_array) {
                var value = word_array[i];
                var word = tokens[i];
                //console.log(sentiment.analyze(array[i]).words);
                //console.log(most_positive_words, most_negative_words);
                if (value[word] > 0) {
                    positive_count = positive_count + value[word];
                }
                if (value[word] < 0) {
                    negative_count = negative_count + value[word];
                }
                if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                    most_positive_word_score = value[word]; //update the highest positive score
                    most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                }
                if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                    most_negative_word_score = value[word];//update the highest negative score
                    most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                }
            }
        }
        //console.log(most_positive_words, most_negative_words);
        //console.log(positive_count, negative_count);
        //console.log(positive_words);
        //console.log(negative_words);
    
        //for the aspect focused sentiment
        var counts = {};
        var most_common_word_count = 0;
        var mostFrequent;
    
        //the results of the sentiment analysis
        if (sentiment_count > 0) {
            //console.log('Positive Reputation :)');
            //console.log('There was ' + Math.ceil(positive_count / Math.abs(negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
            //console.log(Math.ceil((positive_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were positive');
            
            //aspect focused sentiment
            for (i in positive_words) {
                var item = positive_words[i];
                if (counts[item] === undefined) { //if count[item] dont exist in the counts
                    counts[item] = 1;
                }
                else {
                    counts[item] = counts[item] + 1; //if it does exist, increment count
                }
    
                if (counts[item] > most_common_word_count) { //a more common item occured? save it
                    most_common_word_count = counts[item];
                    mostFrequent = positive_words[i];
                } 
            }
            var entries = Object.entries(counts); //convert the counts object into a list
            var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
            //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
            //console.log("The most common thing said about this brand was that it is " + mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
            //console.log(sentiment_count / array.length, most_common_word_count, mostFrequent, positive_words, positive_count);
        }
        
        if (sentiment_count < 0) {
            //console.log('Negative Reputation :(');
            //console.log('There was ' + Math.ceil(Math.abs(negative_count) / positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
            //console.log(Math.ceil((negative_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were negative');
                    
            //aspect focused sentiment
            for (i in negative_words) {
                item = negative_words[i];
                if (counts[item] === undefined) { //if count[item] dont exist in the counts
                    counts[item] = 1;
                }
                else {
                    counts[item] = counts[item] + 1; //if it does exist, increment count
                }
    
                if (counts[item] > most_common_word_count) { //a more common item occured? save it
                    most_common_word_count = counts[item];
                    mostFrequent = negative_words[i];
                } 
            }
            entries = Object.entries(counts); //convert the counts object into a list
            sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
            //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
            //console.log("The most common thing said about this brand was that it is " + mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
            //console.log(sentiment_count / array.length, mostFrequent, most_common_word_count, negative_words, negative_count);
        }
        assert.deepStrictEqual(most_positive_words, ['best','awesome']); //check if the most positive words have been chosen
        });

        it("Test 8.1 - Accuracy Test #1", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.9166666666666666);
        });

        it("Test 8.2 - Accuracy Test #2 with defined classes", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/amazon.json').toString().split("\n"); 
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i].text).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    console.log(set[i].class);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 1);
        });

        it("Test 8.3 - Accuracy Test #3 with defined classes", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/more_amazon_reviews.json').toString().split("\n"); 
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i].text).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 1);
        });

        it("Test 8.4 - Accuracy Test #4", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/even_more_amazon_reviews.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.6);
        });

        it("Test 8.5 - Accuracy Test #5", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/more_amazon_reviews_again.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.8);
        });

        it("Test 8.6 - Accuracy Test #6", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/imdb_reviews.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.8333333333333334);
        });

        it("Test 8.7 - Accuracy Test #7", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/more_imdb_reviews.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.6666666666666666);
        });

        it("Test 8.8 - Accuracy Test #8", function(){
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            //var counts = {};
            //var most_common_word_count = 0;
            //var mostFrequent;
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/even_more_imdb_reviews.json').toString().split("\n"); //C:/Users/sirma/Desktop/test/amazon.json
            for(i in array) {    
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                //console.log(sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    //console.log(sentiment.analyze(array[i]).words);
                    //console.log(most_positive_words, most_negative_words);
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }
            //console.log(most_positive_words, most_negative_words);
            //console.log(positive_count, negative_count);
            //console.log(positive_words);
            //console.log(negative_words);
            
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
            
                var obj = {
                    pass: 0,
                    fail: 0
                };
            
            
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
            
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
            
                    } else {
            
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
            
                    }
            
                }
            
                // Calculate Rand accuracy
            
                return obj.pass / (obj.pass + obj.fail);
            
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(accuracy, 0.9411764705882353);
        });

        it("Test 9 - Correct negative sentences?", function(){
            var positive_sentences = [];
            var negative_sentences = [];
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
            for(i in array) {
                //if sentence is positive
                if (sentiment.analyze(array[i]).score > 0) { 
                    positive_sentences.push.apply(positive_sentences, [array[i].trim()]);
                }
                //if sentence is negative
                if (sentiment.analyze(array[i]).score < 0) { 
                    negative_sentences.push.apply(negative_sentences, [array[i].trim()]);
                }
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    else if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    else if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }


            //for the aspect focused sentiment
            var counts = {};
            var most_common_word_count = 0;
            var mostFrequent;
        
            //the results of the sentiment analysis
            if (sentiment_count > 0) {
                //console.log('Positive Reputation :)');
                //console.log('There was ' + Math.ceil(positive_count / Math.abs(negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                //console.log(Math.ceil((positive_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were positive');
                
                //aspect focused sentiment
                for (i in positive_words) {
                    var item = positive_words[i];
                    if (counts[item] === undefined) { //if count[item] dont exist in the counts
                        counts[item] = 1;
                    }
                    else {
                        counts[item] = counts[item] + 1; //if it does exist, increment count
                    }
        
                    if (counts[item] > most_common_word_count) { //a more common item occured? save it
                        most_common_word_count = counts[item];
                        mostFrequent = positive_words[i];
                    } 
                }
                var entries = Object.entries(counts); //convert the counts object into a list
                var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                //console.log("The most positive things said about this brand: " + most_positive_words[0] + ", " + sorted[1][0] + ", and " + sorted[2][0]);
                //console.log(sentiment_count / array.length, most_common_word_count, mostFrequent, positive_words, positive_count);
            }
            
            if (sentiment_count < 0) {
                console.log('Negative Reputation :(');
                console.log('There was ' + Math.ceil(Math.abs(negative_count) / positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                console.log(Math.ceil((negative_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were negative');
                        
                //aspect focused sentiment
                for (i in negative_words) {
                    item = negative_words[i];
                    if (counts[item] === undefined) { //if count[item] dont exist in the counts
                        counts[item] = 1;
                    }
                    else {
                        counts[item] = counts[item] + 1; //if it does exist, increment count
                    }
        
                    if (counts[item] > most_common_word_count) { //a more common item occured? save it
                        most_common_word_count = counts[item];
                        mostFrequent = negative_words[i];
                    } 
                }
                entries = Object.entries(counts); //convert the counts object into a list
                sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                console.log("The most negative things said about this brand: " + mostFrequent + ", " + sorted[1][0] + " and  " + sorted[2][0]);
                console.log(sentiment_count / array.length, mostFrequent, most_common_word_count, negative_words, negative_count);
            }
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
                var obj = {
                    pass: 0,
                    fail: 0
                };
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
                    } 
                    else {
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
                    }
                }
                // Calculate Rand accuracy
                return obj.pass / (obj.pass + obj.fail);
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.deepStrictEqual(negative_sentences, [ '"Horrible. I sat on my bed breaking down for about an hour.",' ]);
        });
        it("Test 10 - Correct amount of negative sentences?", function(){
            var positive_sentences = [];
            var negative_sentences = [];
            var sentiment_count = 0;
            var positive_count = 0;
            var negative_count = 0;
            var negative_words = [];
            var positive_words = [];
            var most_positive_words = [];
            var most_negative_words = [];
            var most_positive_word_score = 2; //AFINN Lexicon rates positive words 2 or more by default
            var most_negative_word_score = -2; //AFINN Lexicon rates negative words -2 or more by default
            var array = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");
            for(i in array) {
                //if sentence is positive
                if (sentiment.analyze(array[i]).score > 0) { 
                    positive_sentences.push.apply(positive_sentences, [array[i].trim()]);
                }
                //if sentence is negative
                if (sentiment.analyze(array[i]).score < 0) { 
                    negative_sentences.push.apply(negative_sentences, [array[i].trim()]);
                }
                sentiment_count = sentiment_count + (sentiment.analyze(array[i]).score);
                positive_words.push.apply(positive_words, sentiment.analyze(array[i]).positive);
                negative_words.push.apply(negative_words, sentiment.analyze(array[i]).negative);
                var word_array = (sentiment.analyze(array[i]).calculation);
                var tokens = (sentiment.analyze(array[i]).words);
                for (var i in word_array) {
                    var value = word_array[i];
                    var word = tokens[i];
                    if (value[word] > 0) {
                        positive_count = positive_count + value[word];
                    }
                    else if (value[word] < 0) {
                        negative_count = negative_count + value[word];
                    }
                    if (value[word] > most_positive_word_score) { //if a very positive word or more is encountered
                        most_positive_word_score = value[word]; //update the highest positive score
                        most_positive_words.push.apply(most_positive_words, [word]); //add it to the most positive word list
                    }
                    else if (value[word] < most_negative_word_score) { //if a very negative word or more is encountered
                        most_negative_word_score = value[word];//update the highest negative score
                        most_negative_words.push.apply(most_negative_words, [word]); //add it to the most negative word list
                    }
                }
            }


            //for the aspect focused sentiment
            var counts = {};
            var most_common_word_count = 0;
            var mostFrequent;
        
            //the results of the sentiment analysis
            if (sentiment_count > 0) {
                //console.log('Positive Reputation :)');
                //console.log('There was ' + Math.ceil(positive_count / Math.abs(negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                //console.log(Math.ceil((positive_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were positive');
                
                //aspect focused sentiment
                for (i in positive_words) {
                    var item = positive_words[i];
                    if (counts[item] === undefined) { //if count[item] dont exist in the counts
                        counts[item] = 1;
                    }
                    else {
                        counts[item] = counts[item] + 1; //if it does exist, increment count
                    }
        
                    if (counts[item] > most_common_word_count) { //a more common item occured? save it
                        most_common_word_count = counts[item];
                        mostFrequent = positive_words[i];
                    } 
                }
                var entries = Object.entries(counts); //convert the counts object into a list
                var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                //console.log("The most positive things said about this brand: " + most_positive_words[0] + ", " + sorted[1][0] + ", and " + sorted[2][0]);
                //console.log(sentiment_count / array.length, most_common_word_count, mostFrequent, positive_words, positive_count);
            }
            
            if (sentiment_count < 0) {
                console.log('Negative Reputation :(');
                console.log('There was ' + Math.ceil(Math.abs(negative_count) / positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                console.log(Math.ceil((negative_words.length / (positive_words.length + negative_words.length) * 100)) + '% of the things said about the brand were negative');
                        
                //aspect focused sentiment
                for (i in negative_words) {
                    item = negative_words[i];
                    if (counts[item] === undefined) { //if count[item] dont exist in the counts
                        counts[item] = 1;
                    }
                    else {
                        counts[item] = counts[item] + 1; //if it does exist, increment count
                    }
        
                    if (counts[item] > most_common_word_count) { //a more common item occured? save it
                        most_common_word_count = counts[item];
                        mostFrequent = negative_words[i];
                    } 
                }
                entries = Object.entries(counts); //convert the counts object into a list
                sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                console.log("The most negative things said about this brand: " + mostFrequent + ", " + sorted[1][0] + " and  " + sorted[2][0]);
                console.log(sentiment_count / array.length, mostFrequent, most_common_word_count, negative_words, negative_count);
            }
            
            //accuracy function within sentiment module
            function validate (set) {
                //set = set.toString().split("\n")
                // Storage object
                var obj = {
                    pass: 0,
                    fail: 0
                };
                //console.log(set);
                // Iterate over each word/class pair in the dataset
            
                for (var i in set) {
                    //console.log(set[i]);
                    var score = sentiment.analyze(set[i]).comparative;
                    //console.log(score);
                    //console.log(set[i]);
                    if (set[i].class === 0) {
                        if (score >= 0) obj.fail++;
                        if (score < 0) obj.pass++;
                    } 
                    else {
                        if (score >= 0) obj.pass++;
                        if (score < 0) obj.fail++;
                    }
                }
                // Calculate Rand accuracy
                return obj.pass / (obj.pass + obj.fail);
            }
            //process.stdout.write('Comment accuracy: ' + validate(array) + '\n');
            var accuracy = validate(array);
            assert.equal(positive_sentences.length,9);
        });
        it("Test 11 - Putting all results into one JSON object", function(){
            var results = {
                positive_sentences: [],
                negative_sentences: [],
                sentiment_count: 0,
                positive_count: 0,
                negative_count: 0,
                cmt_count: 0,
                pos_percent: 0,
                neg_percent: 0,
                positive_words: [],
                negative_words: [],
                most_positive_words: [],
                most_negative_words: [],
                most_positive_word_score: 2, //AFINN Lexicon rates positive words 2 or more by default
                most_negative_word_score: -2 //AFINN Lexicon rates negative words -2 or more by default
              }
            
              var aspect_results = {
                counts: {},
                most_common_word_count: 0,
                mostFrequent: ""
              }
            
              //Get the top 10 hot posts
              //let posts = await r.getHot(brand_name, {limit: 10}); 
                //for(let i=0; i<10; i++) {
                  //Get the comments for each post
                  //results.cmt_count += posts[i].num_comments;
            
                  //let cmts = await (posts[i].comments.fetchAll()); 
                var cmts = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");  
                    for(let i=0; i<cmts.length; i++) {
                      //For each comment body
                        //if sentence is positive
                      if (sentiment.analyze(cmts[i]).score > 0) { 
                        results.positive_sentences.push.apply(results.positive_sentences, [cmts[i].trim()]);
                      }
                        //if sentence is negative
                      if (sentiment.analyze(cmts[i]).score < 0) { 
                        results.negative_sentences.push.apply(results.negative_sentences, [cmts[i].trim()]);
                      }
                      let comment_body = cmts[i]; 
                      var word_array = sentiment.analyze(comment_body).calculation;
                      var tokens = sentiment.analyze(comment_body).words;
                      //console.log(cmts[i]);
                        for (let i in word_array) { 
                        var value = word_array[i]; 
                        var word = tokens[i];
                            if (value[word] > 0) {
                                results.positive_count += value[word];
                            }
                            if (value[word] < 0) {
                                results.negative_count += value[word];
                            }
                            if (value[word] > results.most_positive_word_score) { //if a very positive word or more is encountered
                                results.most_positive_word_score = value[word]; //update the highest positive score
                                results.most_positive_words.push.apply(results.most_positive_words, [word]); //add it to the most positive word list
                            }
                            else if (value[word] < results.most_negative_word_score) { //if a very negative word or more is encountered
                                results.most_negative_word_score = value[word];//update the highest negative score
                                results.most_negative_words.push.apply(results.most_negative_words, [word]); //add it to the most negative word list
                            }
                        }
                    results.sentiment_count = results.sentiment_count + sentiment.analyze(comment_body).score;
                    results.positive_words.push.apply(results.positive_words, sentiment.analyze(comment_body).positive);
                    results.negative_words.push.apply(results.negative_words, sentiment.analyze(comment_body).negative);
                }
                //accuracy of results
                function validate (set) {
                    //set = set.toString().split("\n")
                    // Storage object
                    var obj = {
                        pass: 0,
                        fail: 0
                    };
                    //console.log(set);
                    // Iterate over each word/class pair in the dataset
                
                    for (var i in set) {
                        //console.log(set[i]);
                        var score = sentiment.analyze(set[i]).comparative;
                        //console.log(score);
                        //console.log(set[i]);
                        if (set[i].class === 0) {
                            if (score >= 0) obj.fail++;
                            if (score < 0) obj.pass++;
                        } 
                        else {
                            if (score >= 0) obj.pass++;
                            if (score < 0) obj.fail++;
                        }
                    }
                    return obj.pass / (obj.pass + obj.fail);
                }
                
                //accuracy of test results
                var accuracy = validate(cmts);

                //console.log(results.sentiment_count, cmts.length);
                //ASPECT-FOCUSED ANALYSIS
                results.pos_percent = Math.ceil((results.positive_words.length / (results.positive_words.length + results.negative_words.length) * 100));
                results.neg_percent = Math.ceil((results.negative_words.length / (results.positive_words.length + results.negative_words.length) * 100));
            
                //the results of the sentiment analysis
                //POSITIVE ASPECT
                if (results.sentiment_count > 0) {
                  
            
                  //console.log('Positive Reputation :)');
                  //console.log('There was ' + Math.ceil(results.positive_count / Math.abs(results.negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                  //console.log(results.pos_percent.toString() + '% of the things said about the brand were positive');
                  //console.log('The most positive thing said about this brand: ' + results.most_positive_words[results.most_positive_words.length - 1]);
                  //console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  for (i in results.positive_words) {
                    var item = results.positive_words[i];
                    if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                      aspect_results.counts[item] = 1;
                    }
                    else {
                      aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                    }
              
                    if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                      aspect_results.most_common_word_count = aspect_results.counts[item];
                      aspect_results.mostFrequent = results.positive_words[i];
                    } 
                  }
            
                  var entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  //console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  //console.log(results.sentiment_count / cmts.length, aspect_results.most_common_word_count, aspect_results.mostFrequent, results.positive_words, results.positive_count);
            
                }
                //end of positive-aspect
                
                if (results.sentiment_count < 0) {
                 
            
                  console.log('Negative Reputation :(');
                  console.log('There was ' + Math.ceil(Math.abs(results.negative_count) / results.positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                  console.log(results.neg_percent.toString() + '% of the things said about the brand were negative');
                  console.log('The most negative thing said about this brand: ' + results.most_negative_words[results.most_negative_words.length - 1]);
                  console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  //aspect focused sentiment
                  for (i in results.negative_words) {
                      var item = results.negative_words[i];
                      if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                        aspect_results.counts[item] = 1;
                      }
                      else {
                        aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                      }
            
                      if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                        aspect_results.most_common_word_count = aspect_results.counts[item];
                        aspect_results.mostFrequent = results.negative_words[i];
                      } 
                  }
                  entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  console.log(results.sentiment_count / cmts.length, aspect_results.mostFrequent, aspect_results.most_common_word_count, results.negative_words, results.negative_count);
              
                //end of negative aspect
              }
        });

        it("Test 12 - Correct most negative sentence?", function(){
            var results = {
                positive_sentences: [],
                negative_sentences: [],
                sentiment_count: 0,
                positive_count: 0,
                negative_count: 0,
                cmt_count: 0,
                pos_percent: 0,
                neg_percent: 0,
                positive_words: [],
                negative_words: [],
                most_positive_words: [],
                most_negative_words: [],
                most_positive_word_score: 2, //AFINN Lexicon rates positive words 2 or more by default
                most_negative_word_score: -2 //AFINN Lexicon rates negative words -2 or more by default
              }
            
              var aspect_results = {
                counts: {},
                most_common_word_count: 0,
                mostFrequent: ""
              }
            
              //Get the top 10 hot posts
              //let posts = await r.getHot(brand_name, {limit: 10}); 
                //for(let i=0; i<10; i++) {
                  //Get the comments for each post
                  //results.cmt_count += posts[i].num_comments;
            
                  //let cmts = await (posts[i].comments.fetchAll()); 
                var cmts = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");  
                    for(let i=0; i<cmts.length; i++) {
                      //For each comment body
                        //if sentence is positive
                      if (sentiment.analyze(cmts[i]).score > 0) { 
                        results.positive_sentences.push.apply(results.positive_sentences, [cmts[i].trim()]);
                      }
                        //if sentence is negative
                      if (sentiment.analyze(cmts[i]).score < 0) { 
                        results.negative_sentences.push.apply(results.negative_sentences, [cmts[i].trim()]);
                      }
                      let comment_body = cmts[i]; 
                      var word_array = sentiment.analyze(comment_body).calculation;
                      var tokens = sentiment.analyze(comment_body).words;
                      //console.log(cmts[i]);
                        for (let i in word_array) { 
                        var value = word_array[i]; 
                        var word = tokens[i];
                            if (value[word] > 0) {
                                results.positive_count += value[word];
                            }
                            if (value[word] < 0) {
                                results.negative_count += value[word];
                            }
                            if (value[word] > results.most_positive_word_score) { //if a very positive word or more is encountered
                                results.most_positive_word_score = value[word]; //update the highest positive score
                                results.most_positive_words.push.apply(results.most_positive_words, [word]); //add it to the most positive word list
                            }
                            else if (value[word] < results.most_negative_word_score) { //if a very negative word or more is encountered
                                results.most_negative_word_score = value[word];//update the highest negative score
                                results.most_negative_words.push.apply(results.most_negative_words, [word]); //add it to the most negative word list
                            }
                        }
                    results.sentiment_count = results.sentiment_count + sentiment.analyze(comment_body).score;
                    results.positive_words.push.apply(results.positive_words, sentiment.analyze(comment_body).positive);
                    results.negative_words.push.apply(results.negative_words, sentiment.analyze(comment_body).negative);
                }
                //accuracy of results
                function validate (set) {
                    //set = set.toString().split("\n")
                    // Storage object
                    var obj = {
                        pass: 0,
                        fail: 0
                    };
                    //console.log(set);
                    // Iterate over each word/class pair in the dataset
                
                    for (var i in set) {
                        //console.log(set[i]);
                        var score = sentiment.analyze(set[i]).comparative;
                        //console.log(score);
                        //console.log(set[i]);
                        if (set[i].class === 0) {
                            if (score >= 0) obj.fail++;
                            if (score < 0) obj.pass++;
                        } 
                        else {
                            if (score >= 0) obj.pass++;
                            if (score < 0) obj.fail++;
                        }
                    }
                    return obj.pass / (obj.pass + obj.fail);
                }
                
                //accuracy of test results
                var accuracy = validate(cmts);

                //ASPECT-FOCUSED ANALYSIS
                results.pos_percent = Math.ceil((results.positive_words.length / (results.positive_words.length + results.negative_words.length) * 100));
                results.neg_percent = Math.ceil((results.negative_words.length / (results.positive_words.length + results.negative_words.length) * 100));

                //getting the most positive sentence
                var most_positive_sentence_score = 0;
                var most_positive_sentence = "";
                for (i in results.positive_sentences) {
                    if (sentiment.analyze(results.positive_sentences[i]).score > most_positive_sentence_score) {
                        most_positive_sentence = results.positive_sentences[i].trim()
                    }
                }

                //getting the most negative sentence
                var most_negative_sentence_score = 0;
                var most_negative_sentence = "";
                for (i in results.negative_sentences) {
                    if (sentiment.analyze(results.negative_sentences[i]).score < most_negative_sentence_score) {
                        most_negative_sentence = results.negative_sentences[i].trim()
                    }
                }

                //the results of the sentiment analysis
                //POSITIVE ASPECT
                if (results.sentiment_count > 0) {
                  
                  //console.log('Positive Reputation :)');
                  //console.log('There was ' + Math.ceil(results.positive_count / Math.abs(results.negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                  //console.log(results.pos_percent.toString() + '% of the things said about the brand were positive');
                  //console.log('The most positive thing said about this brand: ' + results.most_positive_words[results.most_positive_words.length - 1]);
                  //console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  for (i in results.positive_words) {
                    var item = results.positive_words[i];
                    if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                      aspect_results.counts[item] = 1;
                    }
                    else {
                      aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                    }
              
                    if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                      aspect_results.most_common_word_count = aspect_results.counts[item];
                      aspect_results.mostFrequent = results.positive_words[i];
                    } 
                  }
            
                  var entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  //console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  //console.log(results.sentiment_count / cmts.length, aspect_results.most_common_word_count, aspect_results.mostFrequent, results.positive_words, results.positive_count);
            
                }
                //end of positive-aspect
                
                if (results.sentiment_count < 0) {
                 
            
                  console.log('Negative Reputation :(');
                  console.log('There was ' + Math.ceil(Math.abs(results.negative_count) / results.positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                  console.log(results.neg_percent.toString() + '% of the things said about the brand were negative');
                  console.log('The most negative thing said about this brand: ' + results.most_negative_words[results.most_negative_words.length - 1]);
                  console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  //aspect focused sentiment
                  for (i in results.negative_words) {
                      var item = results.negative_words[i];
                      if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                        aspect_results.counts[item] = 1;
                      }
                      else {
                        aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                      }
            
                      if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                        aspect_results.most_common_word_count = aspect_results.counts[item];
                        aspect_results.mostFrequent = results.negative_words[i];
                      } 
                  }
                  entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  console.log(results.sentiment_count / cmts.length, aspect_results.mostFrequent, aspect_results.most_common_word_count, results.negative_words, results.negative_count);
              
                //end of negative aspect
              }
              assert.equal(most_negative_sentence, '"Horrible. I sat on my bed breaking down for about an hour.",');
        });
        it("Test 13 - Correct trimming of words?", function(){
            var results = {
                positive_sentences: [],
                negative_sentences: [],
                sentiment_count: 0,
                positive_count: 0,
                negative_count: 0,
                cmt_count: 0,
                pos_percent: 0,
                neg_percent: 0,
                positive_words: [],
                negative_words: [],
                most_positive_words: [],
                most_negative_words: [],
                most_positive_word_score: 2, //AFINN Lexicon rates positive words 2 or more by default
                most_negative_word_score: -2 //AFINN Lexicon rates negative words -2 or more by default
              }
            
              var aspect_results = {
                counts: {},
                most_common_word_count: 0,
                mostFrequent: ""
              }
            
              //Get the top 10 hot posts
              //let posts = await r.getHot(brand_name, {limit: 10}); 
                //for(let i=0; i<10; i++) {
                  //Get the comments for each post
                  //results.cmt_count += posts[i].num_comments;
            
                  //let cmts = await (posts[i].comments.fetchAll()); 
                var cmts = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");  
                    for(let i=0; i<cmts.length; i++) {
                      //For each comment body
                      let comment_body = cmts[i];
                      if (sentiment.analyze(comment_body).score > 0) { // for performance this regular expression strips non alphabetical words
                        results.positive_sentences.push.apply(results.positive_sentences, [comment_body.replace(/\W[^A-Za-z0-9\s]+/g, "")]);
                      }
                        //if sentence is negative
                      if (sentiment.analyze(comment_body).score < 0) { 
                        results.negative_sentences.push.apply(results.negative_sentences, [comment_body.replace(/\W[^A-Za-z0-9\s]+/g, "")]);
                      } 
                      var word_array = sentiment.analyze(comment_body).calculation;
                      var tokens = sentiment.analyze(comment_body).words;
                      //console.log(cmts[i]);
                        for (let i in word_array) { 
                        var value = word_array[i]; 
                        var word = tokens[i];
                            if (value[word] > 0) {
                                results.positive_count += value[word];
                            }
                            if (value[word] < 0) {
                                results.negative_count += value[word];
                            }
                            if (value[word] > results.most_positive_word_score) { //if a very positive word or more is encountered
                                results.most_positive_word_score = value[word]; //update the highest positive score
                                results.most_positive_words.push.apply(results.most_positive_words, [word]); //add it to the most positive word list
                            }
                            else if (value[word] < results.most_negative_word_score) { //if a very negative word or more is encountered
                                results.most_negative_word_score = value[word];//update the highest negative score
                                results.most_negative_words.push.apply(results.most_negative_words, [word]); //add it to the most negative word list
                            }
                        }
                    results.sentiment_count = results.sentiment_count + sentiment.analyze(comment_body).score;
                    results.positive_words.push.apply(results.positive_words, sentiment.analyze(comment_body).positive);
                    results.negative_words.push.apply(results.negative_words, sentiment.analyze(comment_body).negative);
                }
                //accuracy of results
                function validate (set) {
                    //set = set.toString().split("\n")
                    // Storage object
                    var obj = {
                        pass: 0,
                        fail: 0
                    };
                    //console.log(set);
                    // Iterate over each word/class pair in the dataset
                
                    for (var i in set) {
                        //console.log(set[i]);
                        var score = sentiment.analyze(set[i]).comparative;
                        //console.log(score);
                        //console.log(set[i]);
                        if (set[i].class === 0) {
                            if (score >= 0) obj.fail++;
                            if (score < 0) obj.pass++;
                        } 
                        else {
                            if (score >= 0) obj.pass++;
                            if (score < 0) obj.fail++;
                        }
                    }
                    return obj.pass / (obj.pass + obj.fail);
                }
                
                //accuracy of test results
                var accuracy = validate(cmts);

                //ASPECT-FOCUSED ANALYSIS
                results.pos_percent = Math.ceil((results.positive_words.length / (results.positive_words.length + results.negative_words.length) * 100));
                results.neg_percent = Math.ceil((results.negative_words.length / (results.positive_words.length + results.negative_words.length) * 100));

                //getting the most positive sentence
                var most_positive_sentence_score = 0;
                var most_positive_sentence = "";
                for (i in results.positive_sentences) {
                    if (sentiment.analyze(results.positive_sentences[i]).score > most_positive_sentence_score) {
                        most_positive_sentence = results.positive_sentences[i].trim()
                    }
                }

                //getting the most negative sentence
                var most_negative_sentence_score = 0;
                var most_negative_sentence = "";
                for (i in results.negative_sentences) {
                    if (sentiment.analyze(results.negative_sentences[i]).score < most_negative_sentence_score) {
                        most_negative_sentence = results.negative_sentences[i].trim()
                    }
                }

                //the results of the sentiment analysis
                //POSITIVE ASPECT
                if (results.sentiment_count > 0) {
                  
                  //console.log('Positive Reputation :)');
                  //console.log('There was ' + Math.ceil(results.positive_count / Math.abs(results.negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                  //console.log(results.pos_percent.toString() + '% of the things said about the brand were positive');
                  //console.log('The most positive terms used about this brand: ' + results.most_positive_words[results.most_positive_words.length - 1]);
                  //console.log('Most positive sentence: ' + most_positive_sentence);
                  //console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  for (i in results.positive_words) {
                    var item = results.positive_words[i];
                    if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                      aspect_results.counts[item] = 1;
                    }
                    else {
                      aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                    }
              
                    if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                      aspect_results.most_common_word_count = aspect_results.counts[item];
                      aspect_results.mostFrequent = results.positive_words[i];
                    } 
                  }
            
                  var entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  //console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  //console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  //console.log(results.sentiment_count / cmts.length, aspect_results.most_common_word_count, aspect_results.mostFrequent, results.positive_words, results.positive_count);
            
                }
                //end of positive-aspect
                
                if (results.sentiment_count < 0) {
                 
            
                  console.log('Negative Reputation :(');
                  console.log('There was ' + Math.ceil(Math.abs(results.negative_count) / results.positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                  console.log(results.neg_percent.toString() + '% of the things said about the brand were negative');
                  console.log('The most negative thing said about this brand: ' + results.most_negative_words[results.most_negative_words.length - 1]);
                  console.log('Most negative sentence: ' + most_negative_sentence);
                  console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  //aspect focused sentiment
                  for (i in results.negative_words) {
                      var item = results.negative_words[i];
                      if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                        aspect_results.counts[item] = 1;
                      }
                      else {
                        aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                      }
            
                      if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                        aspect_results.most_common_word_count = aspect_results.counts[item];
                        aspect_results.mostFrequent = results.negative_words[i];
                      } 
                  }
                  entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  console.log(results.sentiment_count / cmts.length, aspect_results.mostFrequent, aspect_results.most_common_word_count, results.negative_words, results.negative_count);
              
                //end of negative aspect
              }//replace(/[^A-Z\Wa-z\s]+/g .replace(/$\W+/, '')
              assert.equal(most_negative_sentence.replace(/\W[^A-Za-z0-9\s]+/g, ""), 'Horrible. I sat on my bed breaking down for about an hour');
        });
        it("Test 14 - Correct trimming of words?", function(){
            var results = {
                positive_sentences: [],
                negative_sentences: [],
                sentiment_count: 0,
                positive_count: 0,
                negative_count: 0,
                cmt_count: 0,
                pos_percent: 0,
                neg_percent: 0,
                positive_words: [],
                negative_words: [],
                most_positive_words: [],
                most_negative_words: [],
                most_positive_word_score: 2, //AFINN Lexicon rates positive words 2 or more by default
                most_negative_word_score: -2 //AFINN Lexicon rates negative words -2 or more by default
              }
            
              var aspect_results = {
                counts: {},
                most_common_word_count: 0,
                mostFrequent: ""
              }
              var curse_words = fs.readFileSync('../filter/profanity_filter.json').toString().split(",");
              console.log(curse_words[0] == "fuck".replace(/[.,\/#!$%\^&\*;:{}"=\-_`~()]/g,""));
              function remove_profanity (comment) {
                // Iterate over each word in list
                comment_in_list_form = comment.split(" ");
                for (var i in comment_in_list_form) { //remove any punctuation with re expression
                    console.log(comment_in_list_form[i].replace(/[.,\/#!$%\^&\*;:{}"=\-_`~()]/g,""), curse_words.includes(comment_in_list_form[i].replace(/[.,\/#!$%\^&\*;:{}"=\-_`~?()]/g,"")));
                    //console.log(curse_words.includes(comment_in_list_form[i].replace(/[.,\/#!$%\^&\*;:{}"=\-_`~()]/g,"")));
                    //console.log(comment_in_list_form[i], curse_words.includes(comment_in_list_form[i].replace(/[.,\/#!$%\^&\*;:{}"=\-_`~()]/g,"")));
                    //console.log(comment_in_list_form[i]);
                    if (curse_words.includes(comment_in_list_form[i].replace(/[.,\/#!$%\^&\*;:{}"=\-_`~?()]/g,""))) {
                      comment_in_list_form.splice(i, 1);
                    }
                }
                return comment_in_list_form.join(" ")
            }

              
              //console.log(curse_words[0] == "fuck");
              //console.log(curse_words);
              //Get the top 10 hot posts
              var cmts = fs.readFileSync('../test_text_files/comments.json').toString().split("\n");   
                    for(let i=0; i<cmts.length; i++) {
                      //For each comment body
                      let comment_body = cmts[i]

                        //if sentence is positive, store it in the positive sentences list
                      if (sentiment.analyze(comment_body).score > 0) { // for performance and clatiyu this re expression strips non alphabetical words
                        results.positive_sentences.push.apply(results.positive_sentences, [comment_body.replace(/\W[^A-Za-z0-9\s]+/g, "")]);
                      }
                        //if sentence is negative, store it in the negative sentences list
                      if (sentiment.analyze(comment_body).score < 0) { 
                        results.negative_sentences.push.apply(results.negative_sentences, [comment_body.replace(/\W[^A-Za-z0-9\s]+/g, "")]);
                      } 
                      var word_array = sentiment.analyze(comment_body).calculation;
                      var tokens = sentiment.analyze(comment_body).words;
            
                      for (let i in word_array) { 
                        var value = word_array[i]; 
                        var word = tokens[i];
                        if (value[word] > 0) {
                            results.positive_count += value[word];
                        }
                        if (value[word] < 0) {
                            results.negative_count += value[word];
                        }
                        if (value[word] > results.most_positive_word_score) { //if a very positive word or more is encountered
                            results.most_positive_word_score = value[word]; //update the highest positive score
                            results.most_positive_words.push.apply(results.most_positive_words, [word]); //add it to the most positive word list
                        }
                        else if (value[word] < results.most_negative_word_score) { //if a very negative word or more is encountered
                            results.most_negative_word_score = value[word];//update the highest negative score
                            results.most_negative_words.push.apply(results.most_negative_words, [word]); //add it to the most negative word list
                        }
                      }
            
                      results.sentiment_count = results.sentiment_count + sentiment.analyze(comment_body).score;
                      //console.log(comment_body);
                      comment_body = remove_profanity(comment_body);
                      //console.log(comment_body);
                      results.positive_words.push.apply(results.positive_words, sentiment.analyze(comment_body).positive);
                      results.negative_words.push.apply(results.negative_words, sentiment.analyze(comment_body).negative);
            
                    }

                console.log(results.negative_words);
                
                
                //accuracy of resuls
                function validate (set) {
                  //set = set.toString().split("\n")
                  // Storage object
                  var obj = {
                      pass: 0,
                      fail: 0
                  };
                  //console.log(set);
                  // Iterate over each word/class pair in the dataset
              
                  for (var i in set) {
                      //console.log(set[i]);
                      var score = sentiment.analyze(set[i]).comparative;
                      //console.log(score);
                      //console.log(set[i]);
                      if (set[i].class === 0) {
                          if (score >= 0) obj.fail++;
                          if (score < 0) obj.pass++;
                      } 
                      else {
                          if (score >= 0) obj.pass++;
                          if (score < 0) obj.fail++;
                      }
                  }
                  return obj.pass / (obj.pass + obj.fail);
                }
              
                //accuracy of test results
                var accuracy = validate(cmts);
            
                //getting the most positive sentence
                var most_positive_sentence_score = 0;
                var most_positive_sentence = "";
                for (i in results.positive_sentences) {
                    if (sentiment.analyze(results.positive_sentences[i]).score > most_positive_sentence_score) {
                        most_positive_sentence = results.positive_sentences[i]
                    }
                }
            
                //getting the most negative sentence
                var most_negative_sentence_score = 0;
                var most_negative_sentence = "";
                for (i in results.negative_sentences) {
                    if (sentiment.analyze(results.negative_sentences[i]).score < most_negative_sentence_score) {
                        most_negative_sentence = results.negative_sentences[i]
                    }
                }
            
                //ASPECT-FOCUSED ANALYSIS
                results.pos_percent = Math.ceil((results.positive_words.length / (results.positive_words.length + results.negative_words.length) * 100));
                results.neg_percent = Math.ceil((results.negative_words.length / (results.positive_words.length + results.negative_words.length) * 100));
            
                //the results of the sentiment analysis
            
                //POSITIVE ASPECT
                if (results.sentiment_count > 0) {
                  
            
                  console.log('Positive Reputation :)');
                  console.log('There was ' + Math.ceil(results.positive_count / Math.abs(results.negative_count)) + ' times the amount of positive things said compared to the negative things said about this brand.');
                  console.log(results.pos_percent.toString() + '% of the things said about the brand were positive');
                  console.log('The most positive thing said about this brand: ' + results.most_positive_words[results.most_positive_words.length - 1]);
                  console.log('Most positive sentence: ' + most_positive_sentence);
                  console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
            
                  for (i in results.positive_words) {
                    var item = results.positive_words[i];
                    if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                      aspect_results.counts[item] = 1;
                    }
                    else {
                      aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                    }
              
                    if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                      aspect_results.most_common_word_count = aspect_results.counts[item];
                      aspect_results.mostFrequent = results.positive_words[i];
                    } 
                  }
            
                  var entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  var sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  console.log(results.sentiment_count / results.cmt_count, aspect_results.most_common_word_count, aspect_results.mostFrequent, results.positive_words, results.positive_count);
            
                }
                //end of positive-aspect
                
                if (results.sentiment_count < 0) {
                 
            
                  console.log('Negative Reputation :(');
                  console.log('There was ' + Math.ceil(Math.abs(results.negative_count) / results.positive_count) + ' times the amount of negative things said compared to the positive things said about this brand.');
                  console.log(results.neg_percent.toString() + '% of the things said about the brand were negative');
                  console.log('The most negative thing said about this brand: ' + results.most_negative_words[results.most_negative_words.length - 1]);
                  console.log('These results are ' + Math.ceil(accuracy * 100) + '% accurate');
                  console.log('Most negative sentence: ' + most_positive_sentence);
            
                  //aspect focused sentiment
                  for (i in results.negative_words) {
                      var item = results.negative_words[i];
                      if (aspect_results.counts[item] === undefined) { //if count[item] dont exist in the counts
                        aspect_results.counts[item] = 1;
                      }
                      else {
                        aspect_results.counts[item] = aspect_results.counts[item] + 1; //if it does exist, increment count
                      }
            
                      if (aspect_results.counts[item] > aspect_results.most_common_word_count) { //a more common item occured? save it
                        aspect_results.most_common_word_count = aspect_results.counts[item];
                        aspect_results.mostFrequent = results.negative_words[i];
                      } 
                  }
                  entries = Object.entries(aspect_results.counts); //convert the counts object into a list
                  sorted = entries.sort((a, b) => b[1] - a[1]); //sorts the list with the most occuring themes first
                  console.log(sorted[0][0], sorted[1][0], sorted[2][0], sorted[3][0]);
                  console.log("The most common thing said about this brand was that it is " + aspect_results.mostFrequent + " and " + sorted[1][0] + " as well as " + sorted[2][0]);
                  console.log(results.sentiment_count / results.cmt_count.length, aspect_results.mostFrequent, aspect_results.most_common_word_count, results.negative_words, results.negative_count);
              
                //end of negative aspect
              }
                    

            
            
            
        });
    });