import React from 'react';
import resume from '../../assets/resume.pdf';

export default function Resume() {
    const resumeFileName = 'Jesus_Uriostegui';

    return (
        <div className="card">
            <h1>
                Click <a className="resumeLink" href={resume} download={resumeFileName}>Here</a> From my Resume.
            </h1>
        </div>
    );
}
