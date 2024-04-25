// Replace YOUR_API_KEY with your actual API key
const apiKey = 'AIzaSyBIVUmUVojbMNW3bkEHFgYPPP-Qjrkba8o';
const videoId = 'YbJOTdZBX1g'; // Replace VIDEO_ID with the ID of the YouTube video you want to fetch comments from

// Function to fetch comments from a YouTube video
async function fetchComments(videoId, apiKey) {
 const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`;

 try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      data.items.forEach(item => {
        const comment = item.snippet.topLevelComment.snippet.textDisplay;
        console.log(comment);
      });
    } else {
      console.log('No comments found.');
    }
 } catch (error) {
    console.error('Error fetching comments:', error);
 }

 return comments; // Return the array of comments
}

