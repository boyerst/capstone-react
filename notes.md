FLASK:

https://wmattracks.herokuapp.com/


REACT: 

https://wmat-tracks.herokuapp.com/
https://wmatracks.herokuapp.com/ | https://git.heroku.com/wmatracks.git



_____________________________



#########IN THE FUTURE PLANNING ON ADDING:

-a few more sections:
  -camping/lodging
  -classifieds

-messages to user if wrong pw, email, etc.

-comments/social networking/likes
  -especially on markers so that more specific comments can be made (ie gas stops, campsite)

-connect markers with lines

-Info Window on markers

-Importing TrackFiles(xml files with lat longs) so that they can populate markers straight into the map







________________________

git filter-branch --env-filter '

OLD_EMAIL="steveboyer@Macbook.local"
CORRECT_NAME="Steve Boyer"
CORRECT_EMAIL="stephen.a.boyer@gmail.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$CORRECT_NAME"ls

export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags 








