# DeleteKalturaVideoQuizReports
A tool for more quickly cleaning out old kaltura video quiz user data

## Purpose
Reasons why you might want to empty out old student grades in a Kaltura Video quiz that led me to make this tool:
* Once the number of student data rows for a video quiz gets beyond 400 or so, Kaltura can't reliably generate csv reports anymore
* We've found that Kaltura does not reliably (~3% failure rate) set a grade using the LTI outcomes API, so we need those CSV's to quickly correct scores.
* If a student re-takes a course, Kaltura will have their previous attempts recorded: they won't be able to take the number of attempts they are entitled to since their attempts from the last time the video quiz was in a course they were in are still recorded

## Usage
Create a new bookmark in your browser and copy the contents of bookmarklet.txt into it as the URL the bookmark points to
Navigate to the "Analytics" page for your video quiz and select the Quiz Users tab.
Run the bookmarklet, ideally with the Javascript Debugging Console for your browser open so you can monitor progress. Ignore Kaltura errors thrown. The window will reload when it's done.
The Procedure is:
1. Click "Show More" until the page says that there are no more students to show
2. Infer delete api URLs from the delete button indicated with a trash can icon for each student row
3. Iterate through those api calls every 375ms

## Bonus
* The actual script is loaded dynamically: any updates made here won't require updates to your bookmarklet
* I'm also including another script that can copy the data to your clipboard if you can't get a csv to generate without timing out
