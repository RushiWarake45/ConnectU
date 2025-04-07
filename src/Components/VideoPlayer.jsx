import { useEffect, useState } from "react";

 export const VideoPlayer=()=>{

    const[text,setText]=useState("");
    const[currentWord,setCurrentWord]=useState("Career");
    const[index,setIndex]=useState(0);

    const words=["Career","Business","Intern","Job","UX Design","React","Java","Data Science","Web Dev","Machine Learning"];

    useEffect(() => {
        const typingInterval = setInterval(() => {
          // Typing effect logic
          if (index < currentWord.length) {
            setText((prevText) => prevText + currentWord[index]); // Add the next letter
            setIndex((prevIndex) => prevIndex + 1); // Move to next letter
          } else {
            clearInterval(typingInterval); // Stop typing once the word is fully typed
          }
        }, 150); // Speed of typing (milliseconds)
    
        return () => clearInterval(typingInterval); // Cleanup on component unmount
      }, [index, currentWord]); // Runs when index or currentWord changes
    
      // Effect to change the word after a pause
      useEffect(() => {
        if (index === currentWord.length) {
          setTimeout(() => {
            // After typing a word, reset the index and switch to the next word
            setIndex(0);
            setText(""); // Reset the text
            setCurrentWord(words[(words.indexOf(currentWord) + 1) % words.length]); // Switch words
          }, 1000); // Pause for 1 second before switching words
        }
      }, [index, currentWord]);
    


    return(
    <>
    <div className="Video_container">
        <video className="video_player"  autoPlay loop muted playsInline> 
            <source  src="public/Video1.mp4" type="video/mp4"/>
            browser doesn't support this video.
        </video>
        <div className="text_overlay">
            <h1>1-on-1 <span className="typewriter">{text}</span> Mentorship </h1>
        </div>
    </div>
    </>
    );
}