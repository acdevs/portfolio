const ResumeButton = () => {

    const ResumeDownloadLink = "https://drive.google.com/uc?export=download&id=1Onfy3K67sckpMh5FxhgZ83g2kiDxeh_F"
    const ResumeViewLink = "https://drive.google.com/file/d/1Onfy3K67sckpMh5FxhgZ83g2kiDxeh_F/view?usp=sharing"

    return (
        <div className='resume-button'>
            <a className="button-rectangle" href={ResumeViewLink} target="_blank" rel="noreferrer">Resume</a>
            <a className="button-rectangle" href={ResumeDownloadLink} download='resume.pdf'>
                <i className="fa-solid fa-download"></i>
            </a>
        </div>
    )
}

export default ResumeButton