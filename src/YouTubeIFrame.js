import './YouTubeIFrame.scss';

const YouTubeIFrame = () => {
    return ( 
        <div className="iframe-wrapper">
            {/*The IFrame here is placed at a fixed bottom right position.*/}
            <iframe className="iframe-wrapper" title="youtube"
                src="https://www.youtube.com/embed/qp0HIF3SfI4">
            </iframe>
        </div>
     );
}
 
export default YouTubeIFrame;   