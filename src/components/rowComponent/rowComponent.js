import React from 'react';

const Row = ({ left, right}) => {
    return (
        <React.Fragment>
                <div className="col-lg-6 col-md-12">
                    { left }
                </div>
                <div className="col-lg-6 col-md-12">
                    { right }
                </div>
            </React.Fragment>
    );
};

export default Row;