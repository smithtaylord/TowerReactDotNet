import React from 'react';
import Tour from 'reactour'

export default function TourComponent() {

    const steps = [
        {
            selector: '.first-step',
            content: 'This is my first Step',
        }]

    return (
        <>
            <Tour
                steps={steps}
                isOpen={this.state.isTourOpen}
                onRequestClose={this.closeTour} />
        </>
    )

}